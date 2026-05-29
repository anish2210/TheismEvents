let cachedContext: string | null = null
let cacheExpiry = 0
const CACHE_TTL_MS = 60 * 60 * 1000 // 1 hour

const BOT_UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

// YouTube public RSS — no API key required
async function buildYouTubeContext(): Promise<string> {
  // Step 1: resolve channel ID from the handle page
  let channelId = ''
  try {
    const pageRes = await fetch('https://www.youtube.com/@theismevents', {
      headers: { 'User-Agent': BOT_UA },
      signal: AbortSignal.timeout(8000),
    })
    if (pageRes.ok) {
      const html = await pageRes.text()
      channelId =
        html.match(/"channelId":"(UC[\w-]+)"/)?.[1] ??
        html.match(/\/channel\/(UC[\w-]+)/)?.[1] ??
        ''
    }
  } catch {
    // fall through to fallback list
  }

  let videoLines: string[] = []

  if (channelId) {
    try {
      const rssRes = await fetch(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
        { signal: AbortSignal.timeout(8000) }
      )
      if (rssRes.ok) {
        const xml = await rssRes.text()

        // Extract <entry> blocks
        const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
        videoLines = entries.slice(0, 15).map(e => {
          const block = e[1]
          const title = block.match(/<title>([^<]+)<\/title>/)?.[1]?.trim() ?? ''
          const videoId = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim() ?? ''
          const published = block.match(/<published>([^<]+)<\/published>/)?.[1]?.slice(0, 10) ?? ''
          const desc = block
            .match(/<media:description>([^<]*)<\/media:description>/)?.[1]
            ?.trim()
            .slice(0, 120) ?? ''
          const url = videoId ? `https://www.youtube.com/watch?v=${videoId}` : ''
          return `- "${title}" | ${published}${desc ? ` | ${desc}` : ''}${url ? ` | ${url}` : ''}`
        })
      }
    } catch {
      // fall through to fallback
    }
  }

  // Static fallback if RSS unavailable
  if (videoLines.length === 0) {
    videoLines = [
      '- "Main Hoon Jhumroo | Kishore Kumar | Amit Kumar | Theism Events" | 2024-12-18 | https://www.youtube.com/watch?v=3b-nm-hj92Y',
      '- "Om Shanti Om | Kishore Kumar | Amit Kumar | Theism Events" | 2024-08-24 | https://www.youtube.com/watch?v=AHjD0AFYjhs',
      '- "Hum The Woh Thi | Kishore Kumar | Amit Kumar | Theism Events" | 2024-08-03 | https://www.youtube.com/watch?v=a0xirI0jBN4',
      '- "Manzilen Apni Jagah Hain | Kishore Kumar | Theism Events" | 2024-07-10 | https://www.youtube.com/watch?v=DY_n3K2tm-M',
      '- "Humein Tumse Pyar Kitna | Kishore Kumar | Usha Uthup | Theism Events" | 2024-08-04 | https://www.youtube.com/watch?v=6i_Q2Z09Mcw',
      '- "Tomay Poreche Mone | Theism Events" | 2019-08-04 | https://www.youtube.com/watch?v=04HeJS9mDpo',
    ]
  }

  return [
    '### YouTube Channel (@theismevents)',
    'URL: https://www.youtube.com/@theismevents',
    '',
    'Recent uploads:',
    ...videoLines,
  ].join('\n')
}

async function buildFacebookContext(): Promise<string> {
  const base = '### Facebook Page\nURL: https://www.facebook.com/TheismEvents/'
  try {
    const res = await fetch('https://www.facebook.com/TheismEvents/', {
      headers: { 'User-Agent': BOT_UA, Accept: 'text/html' },
      signal: AbortSignal.timeout(6000),
    })
    if (!res.ok) return base
    const html = await res.text()

    const extract = (prop: string) =>
      html.match(new RegExp(`<meta[^>]+property="${prop}"[^>]+content="([^"]+)"`))?.[1] ??
      html.match(new RegExp(`<meta[^>]+content="([^"]+)"[^>]+property="${prop}"`))?.[1] ??
      ''

    const title = extract('og:title')
    const description = extract('og:description')

    return [
      '### Facebook Page',
      'URL: https://www.facebook.com/TheismEvents/',
      title ? `Name: ${title}` : '',
      description ? `About: ${description.slice(0, 600)}` : '',
    ].filter(Boolean).join('\n')
  } catch {
    return base
  }
}

export async function getEventContext(): Promise<string> {
  const now = Date.now()
  if (cachedContext && now < cacheExpiry) return cachedContext

  const [youtube, facebook] = await Promise.allSettled([
    buildYouTubeContext(),
    buildFacebookContext(),
  ])

  cachedContext = [
    '--- Live context from Theism Events social pages ---',
    youtube.status === 'fulfilled' ? youtube.value : '',
    '',
    facebook.status === 'fulfilled' ? facebook.value : '',
    '--- End of context ---',
  ].join('\n')

  cacheExpiry = now + CACHE_TTL_MS
  return cachedContext
}
