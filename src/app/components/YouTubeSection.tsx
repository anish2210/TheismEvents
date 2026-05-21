import Link from "next/link";
import { getLatestVideos } from "../lib/youtube";
import VideoThumbnail from "./VideoThumbnail";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function YouTubeSection() {
  const videos = await getLatestVideos(6);

  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-3">
              Watch &amp; Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
              Latest from{" "}
              <span className="text-red-600">YouTube</span>
            </h2>
          </div>
          <Link
            href="https://www.youtube.com/@theismevents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest border-b border-red-800 hover:border-red-500 pb-1 transition-colors self-start sm:self-auto"
          >
            Visit Our Channel →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <Link
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <VideoThumbnail id={video.id} title={video.title} priority={i < 3} />
                  {/* Dark scrim */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white/70 group-hover:border-red-500 group-hover:bg-red-600 flex items-center justify-center text-white/70 group-hover:text-white transition-all duration-300 scale-90 group-hover:scale-100">
                      <PlayIcon />
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex-1 bg-zinc-900 border border-zinc-800 group-hover:border-red-900 transition-colors p-5">
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-2">
                    {formatDate(video.publishedAt)}
                  </p>
                  <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
}
