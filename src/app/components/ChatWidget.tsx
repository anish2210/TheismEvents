'use client'

import { useState, useRef, useEffect, type ReactNode } from 'react'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*'))
      return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}

function renderMarkdown(text: string): ReactNode {
  const lines = text.split('\n')
  const nodes: ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (/^[*-] /.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^[*-] /.test(lines[i])) {
        items.push(lines[i].replace(/^[*-] /, ''))
        i++
      }
      nodes.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-0.5 my-1 pl-1">
          {items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ul>
      )
      continue
    }
    if (line.trim() === '') {
      nodes.push(<span key={`br-${i}`} className="block h-1" />)
    } else {
      nodes.push(<span key={`ln-${i}`} className="block">{renderInline(line)}</span>)
    }
    i++
  }
  return <>{nodes}</>
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load persisted history after mount to avoid SSR/hydration mismatch
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('chat_history')
      if (saved) setMessages(JSON.parse(saved))
    } catch {}
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    if (messages.length > 0) {
      sessionStorage.setItem('chat_history', JSON.stringify(messages))
    }
  }, [messages])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim()
    if (!content || loading) return

    const userMessage: Message = { role: 'user', content }
    const newMessages = [...messages, userMessage]
    setMessages([...newMessages, { role: 'assistant', content: '' }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok || !res.body) throw new Error('Request failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            role: 'assistant',
            content: updated[updated.length - 1].content + chunk,
          }
          return updated
        })
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        }
        return updated
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(220,38,38,0.45)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <span className={`absolute transition-all duration-200 ${open ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
          <X size={20} />
        </span>
        <span className={`absolute transition-all duration-200 ${open ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
          <MessageCircle size={20} />
        </span>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[350px] sm:w-[390px] flex flex-col rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.25)] border border-white/10 transition-all duration-300 origin-bottom-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: '520px' }}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-5 py-4 flex items-center gap-3 shrink-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }}
          />
          <div className="relative w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 backdrop-blur-sm">
            <Sparkles size={16} className="text-white" />
          </div>
          <div className="relative">
            <p className="text-white font-semibold text-sm leading-tight">Theism Events Assistant</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-red-200 text-[11px]">Online · Ask me anything</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-950 chat-scroll">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 pb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shadow-lg shadow-red-900/40">
                <Bot size={26} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Hi, I&apos;m your event guide!</p>
                <p className="text-zinc-500 text-xs leading-relaxed max-w-[220px]">
                  Ask me about concerts, tickets, venues, artists, or anything Theism Events.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full mt-1">
                {['Upcoming events?', 'Tell me about Aaye Tum Yaad Mujhe', 'How can I book?'].map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs text-zinc-400 border border-zinc-800 hover:border-red-700/60 hover:text-red-400 hover:bg-red-950/30 px-3 py-2 rounded-xl text-left transition-all duration-150"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shrink-0 mt-1">
                  <Bot size={12} className="text-white" />
                </div>
              )}
              <div
                className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl rounded-tr-sm shadow-md shadow-red-900/30'
                    : 'bg-zinc-800/80 text-zinc-100 rounded-2xl rounded-tl-sm border border-zinc-700/50'
                }`}
              >
                {loading && i === messages.length - 1 && !msg.content ? (
                  <span className="inline-flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                ) : msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="bg-zinc-900 border-t border-zinc-800 p-3 flex gap-2 items-center shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder="Ask about our events…"
            className="flex-1 text-sm text-white bg-zinc-800 border border-zinc-700 focus:border-red-600 rounded-xl px-4 py-2.5 focus:outline-none placeholder:text-zinc-600 transition-colors"
            disabled={loading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center hover:from-red-500 hover:to-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150 shadow-md shadow-red-900/30 shrink-0"
            aria-label="Send"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </>
  )
}
