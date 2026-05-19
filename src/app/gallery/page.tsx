import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

const categories = [
  {
    label: 'Tomay Poreche Mone',
    sub: 'Seasons I through VII',
    count: '7 Seasons',
    desc: "Seven consecutive years of Kolkata's most beloved retro Bollywood concert — captured frame by frame.",
    accent: 'from-red-950 via-zinc-900 to-black',
    span: 'md:col-span-2',
  },
  {
    label: 'Aaye Tum Yaad Mujhe',
    sub: 'Mumbai Seasons I, II & III',
    count: '3 Seasons',
    desc: "The grand Mumbai tribute to Kishore Kumar — the stage, the orchestra, the roaring applause.",
    accent: 'from-zinc-900 via-red-950/30 to-black',
    span: '',
  },
  {
    label: 'Tribute to Legends',
    sub: 'Upcoming 2025',
    count: 'Coming Soon',
    desc: "The newest chapter — photographs from rehearsals, artists, and the anticipation of a first night.",
    accent: 'from-zinc-900 to-zinc-950',
    span: '',
  },
  {
    label: 'Chete Pute Food Festival',
    sub: '2019 & 2020',
    count: '2 Editions',
    desc: "Four days of food, culture, and the warmth of Kolkata — Santosh Mitra Square in full celebration.",
    accent: 'from-stone-900 via-zinc-900 to-black',
    span: '',
  },
  {
    label: 'A Tribute to R.D. Burman',
    sub: '2021 — Raajkutir Swabhumi',
    count: '1 Night',
    desc: "An unforgettable evening honouring Pancham Da — sultry lights, dancing flames, and pure genius.",
    accent: 'from-red-950/60 via-zinc-900 to-black',
    span: '',
  },
  {
    label: 'Corporate & Private Events',
    sub: 'Select Portfolio',
    count: 'Curated',
    desc: "Behind the velvet rope — a glimpse into the productions that never make the public programme.",
    accent: 'from-zinc-800 to-zinc-950',
    span: '',
  },
  {
    label: 'Behind the Scenes',
    sub: 'Production & Rehearsals',
    count: 'Exclusive',
    desc: "The cables, the call sheets, the quick corrections — the invisible labour that makes the magic look effortless.",
    accent: 'from-zinc-900 via-red-950/20 to-black',
    span: 'md:col-span-2',
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav />

      {/* Page Header */}
      <section className="bg-zinc-950 border-b border-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-4">The Theism Events Gallery</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight mb-6">
            Moments Captured.<br />
            <span className="text-zinc-500 font-light normal-case italic text-3xl md:text-4xl">Memories Immortalised.</span>
          </h1>
          <div className="w-12 h-px bg-red-700 mb-8" />
          <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
            Every photograph in this gallery is a fragment of a larger experience — a single frame
            from an evening that moved thousands of people. Browse the faces in the audience. See
            the light falling on the stage. Feel the energy of the crowd. This is what we do, and
            this is why we do it.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className={`relative overflow-hidden group cursor-pointer ${cat.span}`}
                style={{ minHeight: cat.span ? '320px' : '260px' }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent}`} />

                {/* Dot texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-500" />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Camera icon placeholder */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/>
                    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                  </svg>
                </div>

                {/* Count badge */}
                <div className="absolute top-5 right-5">
                  <span className="border border-zinc-700 text-zinc-500 text-[9px] uppercase tracking-widest px-2 py-1">
                    {cat.count}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">{cat.sub}</p>
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-2 group-hover:text-red-400 transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                    {cat.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 w-7 h-7 border border-red-900/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-red-600 text-xs">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-700 text-5xl font-serif leading-none mb-6">&ldquo;</div>
          <p className="text-white text-lg md:text-xl font-light italic leading-relaxed">
            Every image tells a story. Every story begins the same way — with someone deciding
            to create something extraordinary.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
