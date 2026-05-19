'use client';

const artists = [
  { name: 'Amit Kumar',           active: false },
  // { name: 'Kumar Sanu',           active: true  },
  { name: 'Kavita Krishnamurthy', active: false },
  { name: 'Udit Narayan',         active: false },
  { name: 'Bappi Lahiri',         active: false },
  { name: 'Sudesh Bhosle',        active: false },
  { name: 'Abhijeet Bhattacharya',active: false },
  { name: 'Anuradha Paudwal',     active: false },
];

const gradients = [
  'linear-gradient(160deg,#3f2020 0%,#1a0a0a 45%,#0a0a0a 100%)',
  'linear-gradient(150deg,#1a1a2e 0%,#16213e 45%,#0f0f0f 100%)',
  'linear-gradient(160deg,#2d1a0e 0%,#1a0e00 45%,#0a0a0a 100%)',
  'linear-gradient(155deg,#1f1520 0%,#0d0d0d 45%,#0a0a0a 100%)',
  'linear-gradient(160deg,#1a1a00 0%,#0f0f00 45%,#0a0a0a 100%)',
  'linear-gradient(150deg,#0e1a1a 0%,#0a1010 45%,#0a0a0a 100%)',
  'linear-gradient(155deg,#1a0e1a 0%,#0d000d 45%,#0a0a0a 100%)',
  'linear-gradient(160deg,#001a0e 0%,#000f06 45%,#0a0a0a 100%)',
];

// Duplicate for seamless infinite loop
const track = [...artists, ...artists];

export default function HallOfFameCarousel() {
  return (
    <>
      <style>{`
        @keyframes hof-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hof-track {
          animation: hof-scroll 24s linear infinite;
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
        <div className="hof-track flex" style={{ gap: '20px', width: 'max-content' }}>
          {track.map((artist, i) => {
            const gi = i % gradients.length;
            const isActive = artist.active;
            return (
              <div
                key={i}
                className="shrink-0 flex flex-col items-center cursor-pointer group"
                style={{ width: '180px' }}
              >
                {/* Portrait frame */}
                <div
                  className="relative overflow-hidden w-full transition-shadow duration-300"
                  style={{
                    height: '250px',
                    border: isActive ? '2px solid #dc2626' : '2px solid rgba(82,82,91,0.55)',
                    boxShadow: isActive ? '0 0 20px rgba(220,38,38,0.35)' : 'none',
                  }}
                >
                  {/* Gradient portrait bg */}
                  <div className="absolute inset-0" style={{ background: gradients[gi] }} />
                  {/* Warm spotlight */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse at 50% 5%, rgba(255,170,70,0.2) 0%, transparent 55%)' }}
                  />
                  {/* Subtle grain */}
                  <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px',
                    }}
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  {/* Hover tint */}
                  <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/12 transition-colors duration-300" />
                </div>

                {/* Name tag */}
                <div
                  className="mt-3 w-full flex items-center justify-center px-3 py-1.5 transition-colors duration-300"
                  style={{
                    border: isActive ? '1px solid #dc2626' : '1px solid rgba(82,82,91,0.45)',
                    background: isActive ? 'rgba(220,38,38,0.09)' : 'transparent',
                  }}
                >
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest text-center leading-tight">
                    {artist.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
