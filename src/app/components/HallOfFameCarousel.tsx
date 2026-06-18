'use client';

import React from 'react';

const events = [
  {
    title: "Legacy — Unforgettable Rafi",
    date: "1 Aug 2026",
    location: "Mumbai",
    image: "/events/event-legacy.png",
    href: null,
  },
  {
    title: "Tribute to Legends",
    date: "2 Aug 2026",
    location: "Mumbai",
    image: "/events/event-legends.jpg",
    href: null,
  },
  {
    title: "Shotoborshe Uttom",
    date: "6 Sep 2026",
    location: "Kolkata",
    image: "/events/event-uttom.jpg",
    href: null,
  },
  {
    title: "Shotoborshe Uttom",
    date: "6 Sep 2026",
    location: "Kolkata",
    image: "/events/event-uttom.jpg",
    href: null,
  },
  {
    title: "Humein Tumse Pyar Kitna",
    date: "4 Aug 2024",
    location: "Kolkata",
    image: "https://i.ytimg.com/vi/6i_Q2Z09Mcw/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=6i_Q2Z09Mcw",
  },
];

// Duplicate for seamless infinite loop
const track = [...events, ...events];

export default function HallOfFameCarousel() {
  return (
    <>
      <style>{`
        @keyframes hof-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hof-track {
          animation: hof-scroll 28s linear infinite;
          will-change: transform;
        }
        .hof-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Outer mask — hides overflow + applies left/right fade */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div className="hof-track flex" style={{ width: 'max-content' }}>
          {track.map((event, i) => {
            const Wrapper = event.href
              ? ({ children }: { children: React.ReactNode }) => (
                  <a href={event.href!} target="_blank" rel="noopener noreferrer" className="shrink-0 flex flex-col cursor-pointer group" style={{ width: '220px', marginRight: '20px' }}>
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="shrink-0 flex flex-col cursor-pointer group" style={{ width: '220px', marginRight: '20px' }}>
                    {children}
                  </div>
                );

            return (
              <Wrapper key={i}>
                {/* Poster frame */}
                <div
                  className="relative overflow-hidden w-full transition-all duration-300 group-hover:scale-[1.02]"
                  style={{
                    height: '300px',
                    border: '2px solid rgba(82,82,91,0.45)',
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    width={220}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300" />
                  {/* Play button for YouTube entries */}
                  {event.href && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* YouTube badge */}
                  {event.href && (
                    <div className="absolute top-2 right-2">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Name tag */}
                <div
                  className="mt-3 w-full flex flex-col items-center justify-center px-3 py-2 gap-0.5 transition-colors duration-300"
                  style={{ border: '1px solid rgba(82,82,91,0.45)', background: 'transparent' }}
                >
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest text-center leading-tight">
                    {event.title}
                  </span>
                  <span className="text-zinc-500 text-[8px] uppercase tracking-wider text-center">
                    {event.date} · {event.location}
                  </span>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </>
  );
}
