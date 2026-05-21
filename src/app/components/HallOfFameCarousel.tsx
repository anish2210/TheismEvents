'use client';

const events = [
  {
    title: "Legacy — Unforgettable Rafi",
    date: "1 Aug 2026",
    location: "Mumbai",
    image: "/events/event-legacy.png",
  },
  {
    title: "Tribute to Legends",
    date: "2 Aug 2026",
    location: "Mumbai",
    image: "/events/event-legends.jpg",
  },
  {
    title: "Shotoborshe Uttom",
    date: "6 Sep 2026",
    location: "Kolkata",
    image: "/events/event-uttom.jpg",
  },
  {
    title: "Humsafar o Musafiranaa",
    date: "14 Jun 2026",
    location: "Kolkata",
    image: "/events/event-humsafar.jpg",
  },
  {
    title: "Shotoborshe Uttom",
    date: "6 Sep 2026",
    location: "Kolkata",
    image: "/events/event-uttom.jpg",
  },
  {
    title: "Humsafar o Musafiranaa",
    date: "14 Jun 2026",
    location: "Kolkata",
    image: "/events/event-humsafar.jpg",
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
          {track.map((event, i) => (
            <div
              key={i}
              className="shrink-0 flex flex-col cursor-pointer group"
              style={{ width: '220px', marginRight: '20px' }}
            >
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
