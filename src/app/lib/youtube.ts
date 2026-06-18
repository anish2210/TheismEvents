export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

const FIFTEEN_DAYS_SECONDS = 60 * 60 * 24 * 15;

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

// Shown when YOUTUBE_API_KEY is not configured.
// Update this list whenever you want to refresh the featured videos.
const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: "3b-nm-hj92Y",
    title: "Main Hoon Jhumroo | Kishore Kumar | Amit Kumar | Sumeet Kumar | Theism Events",
    thumbnail: ytThumb("3b-nm-hj92Y"),
    publishedAt: "2024-12-18T00:00:00Z",
    url: "https://www.youtube.com/watch?v=3b-nm-hj92Y",
  },
  {
    id: "AHjD0AFYjhs",
    title: "Om Shanti Om | Kishore Kumar | Amit Kumar | Sumeet Kumar | Theism Events",
    thumbnail: ytThumb("AHjD0AFYjhs"),
    publishedAt: "2024-08-24T00:00:00Z",
    url: "https://www.youtube.com/watch?v=AHjD0AFYjhs",
  },
  {
    id: "a0xirI0jBN4",
    title: "Hum The Woh Thi | Kishore Kumar | Amit Kumar | Sumeet Kumar | Theism Events",
    thumbnail: ytThumb("a0xirI0jBN4"),
    publishedAt: "2024-08-03T00:00:00Z",
    url: "https://www.youtube.com/watch?v=a0xirI0jBN4",
  },
  {
    id: "DY_n3K2tm-M",
    title: "Manzilen Apni Jagah Hain | Kishore Kumar | Amit Ganguly | Theism Events",
    thumbnail: ytThumb("DY_n3K2tm-M"),
    publishedAt: "2024-07-10T00:00:00Z",
    url: "https://www.youtube.com/watch?v=DY_n3K2tm-M",
  },
  {
    id: "6i_Q2Z09Mcw",
    title: "Humein Tumse Pyar Kitna | Kishore Kumar | Usha Uthup | Theism Events",
    thumbnail: ytThumb("6i_Q2Z09Mcw"),
    publishedAt: "2024-08-04T00:00:00Z",
    url: "https://www.youtube.com/watch?v=6i_Q2Z09Mcw",
  },
];

async function getUploadsPlaylistId(): Promise<string> {
  const key = process.env.YOUTUBE_API_KEY!;
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=theismevents&key=${key}`,
    { next: { revalidate: FIFTEEN_DAYS_SECONDS } }
  );
  if (!res.ok) throw new Error(`Channels API error ${res.status}`);
  const data = await res.json();
  const uploads: string = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads) throw new Error("uploads playlist not found");
  return uploads;
}

export async function getLatestVideos(maxResults = 6): Promise<YouTubeVideo[]> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return FALLBACK_VIDEOS.slice(0, maxResults);

  try {
    const playlistId = await getUploadsPlaylistId();

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${key}`,
      { next: { revalidate: FIFTEEN_DAYS_SECONDS } }
    );
    if (!res.ok) throw new Error(`PlaylistItems API error ${res.status}`);
    const data = await res.json();

    return (data.items ?? []).map((item: {
      snippet: {
        resourceId: { videoId: string };
        title: string;
        publishedAt: string;
        thumbnails: {
          maxres?: { url: string };
          high?: { url: string };
          medium?: { url: string };
        };
      };
    }) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      publishedAt: item.snippet.publishedAt,
      thumbnail:
        item.snippet.thumbnails.maxres?.url ??
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ??
        "",
      url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }));
  } catch (err) {
    console.error("[YouTube] Failed to fetch videos:", err);
    return [];
  }
}
