import { NextRequest } from 'next/server'
import { getEventContext } from './context'

const BASE_SYSTEM_PROMPT = `You are a helpful assistant for Theism Events India, India's premier live experience company.
You help users with questions about events, concerts, shows, tickets, venues, schedules, artists, services, contact details, office address, working hours, and anything related to Theism Events India.
Be warm, concise, and professional.
Always answer address, phone, working hours, and contact questions directly using the information in the context — do not redirect to the website for details that are already available.
Only suggest https://theismevents.in/contact for enquiries that require a human response (e.g. bookings, pricing, custom event quotes).
Never make up event dates, prices, or details you're not sure about.
Use the context block below — which includes website data (shows, upcoming events, past events, services, contact info, stats) as well as live YouTube and Facebook content — to answer questions accurately.`

// Fallback list used only if the OpenRouter models API call fails
const FALLBACK_MODELS = [
  'meta-llama/llama-3.2-3b-instruct:free',
  'deepseek/deepseek-r1:free',
  'google/gemma-3-4b-it:free',
  'mistralai/mistral-small-3.1-24b-instruct:free',
]

let cachedFreeModels: string[] | null = null
let cacheTime = 0
const CACHE_TTL = 60 * 60 * 1000 // 1 hour

async function getFreeModels(apiKey: string): Promise<string[]> {
  if (cachedFreeModels && Date.now() - cacheTime < CACHE_TTL) {
    return cachedFreeModels
  }

  try {
    const res = await fetch('https://openrouter.ai/api/v1/models', {
      headers: { Authorization: `Bearer ${apiKey}` },
    })

    if (!res.ok) throw new Error(`Models API returned ${res.status}`)

    const data = await res.json()
    const freeModels: string[] = (data.data ?? [])
      .filter((m: { id: string; pricing?: { prompt?: string | number; completion?: string | number } }) =>
        String(m.pricing?.prompt) === '0' && String(m.pricing?.completion) === '0'
      )
      .map((m: { id: string }) => m.id)

    if (freeModels.length > 0) {
      cachedFreeModels = freeModels
      cacheTime = Date.now()
      console.log(`[/api/chat] Discovered ${freeModels.length} free models from OpenRouter`)
      return freeModels
    }
  } catch (err) {
    console.warn('[/api/chat] Could not fetch model list from OpenRouter:', err instanceof Error ? err.message : err)
  }

  return FALLBACK_MODELS
}

const CONNECT_ERROR = "Sorry, I'm having trouble connecting. Please try again later."
const KNOWN_FAILURE_MESSAGES = new Set([
  CONNECT_ERROR,
  'Sorry, something went wrong. Please try again.',
])

function getOpenRouterKey() {
  const candidates = [
    ['OPENROUTER_API_KEY', process.env.OPENROUTER_API_KEY],
    ['OPENROUTER_KEY', process.env.OPENROUTER_KEY],
    ['GEMINI_API_KEY', process.env.GEMINI_API_KEY],
  ] as const

  return candidates.find(([, value]) => value?.trim())
}

export async function POST(req: NextRequest) {
  const keyEntry = getOpenRouterKey()
  const apiKey = keyEntry?.[1]?.trim()

  if (!apiKey) {
    console.error('[/api/chat] No API key found. Set OPENROUTER_API_KEY in Vercel environment variables.')
    return new Response(CONNECT_ERROR, {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  try {
    const { messages } = await req.json()

    const [context, models] = await Promise.all([
      getEventContext(),
      getFreeModels(apiKey),
    ])
    const systemPrompt = `${BASE_SYSTEM_PROMPT}\n\n${context}`

    const chatMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
        .filter((m: { role: string; content: string }) =>
          ['user', 'assistant'].includes(m.role) &&
          m.content?.trim() &&
          !KNOWN_FAILURE_MESSAGES.has(m.content.trim())
        )
        .map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
    ]

    console.log(`[/api/chat] Using API key from ${keyEntry?.[0] ?? 'unknown env var'}`)

    let response: Response | null = null
    let usedModel = ''
    let lastError = ''

    for (const model of models) {
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
      lastError = `OpenRouter ${res.status}: ${errText}`
      if (res.status === 401 || res.status === 403) {
        throw new Error(lastError)
      }
    }

    if (!response) throw new Error(lastError || 'All models failed. Try again shortly.')

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
      CONNECT_ERROR,
      { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
    )
  }
}
