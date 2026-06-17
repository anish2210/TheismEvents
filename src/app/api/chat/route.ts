import { NextRequest } from 'next/server'
import { getEventContext } from './context'

const BASE_SYSTEM_PROMPT = `You are a helpful assistant for Theism Events India, India's premier live experience company.
You help users with questions about events, concerts, shows, tickets, venues, schedules, artists, services, contact details, office address, working hours, and anything related to Theism Events India.
Be warm, concise, and professional.
Always answer address, phone, working hours, and contact questions directly using the information in the context — do not redirect to the website for details that are already available.
Only suggest https://theismevents.in/contact for enquiries that require a human response (e.g. bookings, pricing, custom event quotes).
Never make up event dates, prices, or details you're not sure about.
Use the context block below — which includes website data (shows, upcoming events, past events, services, contact info, stats) as well as live YouTube and Facebook content — to answer questions accurately.`

const MODELS = [
  'nex-agi/nex-n2-pro:free',
  'meta-llama/llama-3.1-8b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
]

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY ?? process.env.GEMINI_API_KEY

  if (!apiKey) {
    console.error('[/api/chat] No API key found. Set OPENROUTER_API_KEY in .env.local')
    return new Response("Sorry, I'm having trouble connecting. Please try again later.", {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  try {
    const { messages } = await req.json()

    const context = await getEventContext()
    const systemPrompt = `${BASE_SYSTEM_PROMPT}\n\n${context}`

    const chatMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    ]

    // Try each model in order, falling back on 429
    let response: Response | null = null
    let usedModel = ''
    for (const model of MODELS) {
      console.log(`[/api/chat] Trying: ${model}`)
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://theismevents.in',
          'X-Title': 'Theism Events India',
        },
        body: JSON.stringify({ model, messages: chatMessages, stream: true }),
      })

      if (res.ok) {
        response = res
        usedModel = model
        break
      }

      const errText = await res.text()
      console.warn(`[/api/chat] ${model} → HTTP ${res.status}:`, errText.slice(0, 200))
      if (res.status !== 429) throw new Error(`OpenRouter ${res.status}: ${errText}`)
    }

    if (!response) throw new Error('All models rate-limited. Try again shortly.')

    console.log(`[/api/chat] Streaming with: ${usedModel}`)

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response!.body!.getReader()
        const decoder = new TextDecoder()
        const encoder = new TextEncoder()
        let done = false

        try {
          while (!done) {
            const { done: streamDone, value } = await reader.read()
            if (streamDone) break

            const chunk = decoder.decode(value, { stream: true })
            for (const line of chunk.split('\n')) {
              const trimmed = line.trim()
              if (!trimmed.startsWith('data:')) continue
              const data = trimmed.slice(5).trim()
              if (data === '[DONE]') { done = true; break }
              try {
                const parsed = JSON.parse(data)
                const text = parsed.choices?.[0]?.delta?.content
                if (text) controller.enqueue(encoder.encode(text))
              } catch {
                // skip malformed SSE lines
              }
            }
          }
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/chat] Error:', message)

    return new Response(
      "Sorry, I'm having trouble connecting. Please try again later.",
      { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
    )
  }
}
