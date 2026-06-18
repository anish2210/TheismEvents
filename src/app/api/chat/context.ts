let cachedContext: string | null = null
let cacheExpiry = 0
const CACHE_TTL_MS = 60 * 60 * 1000 // 1 hour

function buildWebsiteContext(): string {
  return `### About Theism Events India
India's premier live experience company. Headquartered with offices in Kolkata and Mumbai. Over a decade of staging India's finest live shows, backed by the 50-year heritage of the Theism Group. Year of Establishment: 2015. Pan-India reach.

### Contact & Office Details
- **Phone:** 062901 81800
- **Kolkata Office Address:** 14F/N, Dum Dum Rd, RBI Staff Quarters, Bir Para, Paikpara, Kolkata, West Bengal 700030
- **Working Hours:** Monday – Saturday, 12:00 PM – 9:00 PM
- **Website:** https://theismevents.in
- **Enquiries / Contact Form:** https://theismevents.in/contact

### Ratings & Reviews
- JustDial: 4.8/5 (66 votes)
- Sulekha: 5/5 (3 reviews)

### Notable Clients & Artists
- **Corporate Clients:** Hindustan Unilever Limited, Nestlé, Mahindra Group
- **Artists Worked With:** Arijit Singh, A.R. Rahman (among many others)
- **Venues:** St. Xavier's College Kolkata, and marquee venues pan-India

### Key Stats
- 10+ Years of Excellence
- 119K+ Followers on Facebook
- 7+ Kishore Kumar Tribute Seasons
- 2 Iconic IPs Owned by Theism

### Services Offered
1. Live Concerts & Events (flagship offering)
2. Tribute Shows
3. Celebrity Night
4. Birthday Events
5. Glam Night
6. The Music Band
7. Weddings & Private Events (Destination Weddings, Sangeet, Mehendi, Engagement, Naming Ceremony, Baby Shower, Bachelorette)
8. Corporate & Brand Events (Conferences, Seminars, Product Launches, Roadshows, Exhibition & Trade Fairs)
9. Celebrity Management
10. Entertainment & Cultural Events
11. Sports Event Management
12. Stage Shows & Theme Events
13. Office Parties & Anniversary Celebrations
14. Magic Shows
15. Charity & Donation Camp Organization

### Why Choose Theism Events
1. A Legacy You Can Trust — Over a decade of delivering India's finest live shows, backed by the 50-year heritage of the Theism Group.
2. Curatorial Excellence — Only the best artists, the most resonant repertoire, and the most fitting venues.
3. End-to-End Production Mastery — Stage design, AV engineering, artist coordination, and post-event debrief under one roof.
4. Audience-First Philosophy — Every decision filtered through: will this create a memory worth keeping?
5. National Reach, Local Sensitivity — Two offices, pan-India execution, deep understanding of regional culture and sensibility.

### Signature Shows (Flagship IPs)
1. Aaye Tum Yaad Mujhe
   - Type: Mumbai Edition
   - Location: Mumbai
   - Date: Annual
   - Description: Mumbai's grandest tribute to the genius of Kishore Kumar. Grand musical tribute with philharmonic orchestration.
   - Artists: Amit Kumar, Sudesh Bhosle, Alok Katdare, Bela Sulakhe

2. Tribute to Legends
   - Type: New Series
   - Location: Pan India
   - Date: New Series (ongoing)
   - Description: Concert series celebrating immortal voices of Hemant Kumar, Lata Mangeshkar, Mukesh, and Manna Dey.
   - Artists: Sagnik Sen, Shurjo Bhattacharya, Gul Saxena, Mukhtar Shah

### Upcoming Events (2026)
1. Legacy — Unforgettable Rafi
   - Date: 1 Aug 2026 | Location: Mumbai | Tag: Mumbai Edition
   - Subtitle: A Grand Tribute to the Voice of a Million Hearts
   - Artists: Sudesh Bhosle, Roop Kumar Rathod, Anup Jalota

2. Tribute to Legends
   - Date: 2 Aug 2026 | Location: Mumbai | Tag: New Series
   - Subtitle: Celebrating Hemant Kumar, Lata Mangeshkar & Mukesh
   - Artists: Sagnik Sen, Shurjo Bhattacharya, Gul Saxena

4. Shotoborshe Uttom
   - Date: 6 Sep 2026 | Location: Kolkata | Tag: Special
   - Subtitle: Centenary Celebration of Uttam Kumar
   - Artists: Indrani Sen, Usha Uthup, Lopamudra Mitra

### Past Events (Archive)
1. Main Hoon Jhumroo — Kishore Kumar Live Performance | 18 Dec 2024 | Kolkata | https://www.youtube.com/watch?v=3b-nm-hj92Y
2. Humein Tumse Pyar Kitna — Kishore Kumar Tribute Live at Kolkata | 4 Aug 2024 | Kolkata | https://www.youtube.com/watch?v=6i_Q2Z09Mcw
3. Om Shanti Om — Kishore Kumar Live Performance | 24 Aug 2024 | Kolkata | https://www.youtube.com/watch?v=AHjD0AFYjhs
4. Aaye Tum Yaad Mujhe — Mumbai's Grandest Kishore Kumar Tribute | Annual | Mumbai
5. Manzilen Apni Jagah Hain — Kishore Kumar Live Performance | 10 Jul 2024 | Kolkata | https://www.youtube.com/watch?v=DY_n3K2tm-M

### Social Media
- Facebook: https://www.facebook.com/TheismEvents/ (119K+ followers)
- YouTube: https://www.youtube.com/@theismevents`
}

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
      '- "Hum The Woh Thi | Kishore Kumar | Amit Kumar | Theism Events" | 2024-08-03 | https://www.youtube.com/watch?v=a0xirI0jBN4',
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
    '--- Theism Events India — Website & Social Context ---',
    buildWebsiteContext(),
    '',
    youtube.status === 'fulfilled' ? youtube.value : '',
    '',
    facebook.status === 'fulfilled' ? facebook.value : '',
    '--- End of context ---',
  ].join('\n')

  cacheExpiry = now + CACHE_TTL_MS
  return cachedContext
}
