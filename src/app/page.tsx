import Link from 'next/link';
import HeroVideo from './HeroVideo';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';

const stats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '39,000+', label: 'Followers on Facebook' },
  { value: '7+', label: 'Seasons of Tomay Poreche Mone' },
  { value: '2', label: 'Iconic IPs Owned by Theism' },
];

const shows = [
  {
    id: 1,
    title: 'Tomay Poreche Mone',
    subtitle: "Kolkata's Most Awaited Evening of Retro Bollywood Magic",
    location: 'Kolkata',
    date: 'Every 4th August',
    desc: "Kolkata's iconic retro Bollywood concert, held every year on the birth anniversary of the legendary Kishore Kumar. Now in its seventh season — an unmissable institution graced by India's greatest voices.",
    artists: ['Amit Kumar', 'Kumar Sanu', 'Kavita Krishnamurthy', 'Bappi Lahiri', 'Abhijeet Bhattacharya'],
    tag: 'Flagship',
  },
  {
    id: 2,
    title: 'Aaye Tum Yaad Mujhe',
    subtitle: "Mumbai's Grandest Tribute to the Genius of Kishore Kumar",
    location: 'Mumbai',
    date: 'Annual',
    desc: "Taking the magic of Tomay Poreche Mone westward — a grand musical tribute featuring philharmonic orchestration and legendary artists embodying Kishore Kumar's immortal legacy.",
    artists: ['Amit Kumar', 'Sudesh Bhosle', 'Alok Katdare', 'Bela Sulakhe'],
    tag: 'Mumbai Edition',
  },
  {
    id: 3,
    title: 'Tribute to Legends',
    subtitle: 'A New Series. Timeless Voices.',
    location: 'Pan India',
    date: 'New Series',
    desc: 'A heartfelt concert series celebrating the immortal voices of Hemant Kumar, Lata Mangeshkar, Mukesh, and Manna Dey — performed by India\'s finest contemporary artists.',
    artists: ['Sagnik Sen', 'Shurjo Bhattacharya', 'Gul Saxena', 'Mukhtar Shah'],
    tag: 'New',
  },
];

const differentiators = [
  {
    title: 'A Legacy You Can Trust',
    desc: "Over a decade of delivering India's finest live shows, backed by the 50-year heritage of the Theism Group.",
  },
  {
    title: 'Curatorial Excellence',
    desc: 'We select only the best: the finest artists, the most resonant repertoire, and the most fitting venues.',
  },
  {
    title: 'End-to-End Production Mastery',
    desc: 'From stage design and AV engineering to artist coordination and post-event debrief — everything under one roof.',
  },
  {
    title: 'Audience-First Philosophy',
    desc: 'Every decision we make is filtered through one question: will this create a memory worth keeping?',
  },
  {
    title: 'National Reach, Local Sensitivity',
    desc: 'Two offices, Pan India execution, and a deep understanding of regional culture and sensibility.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <SiteNav />

      {/* ── Hero Section ── */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-5">
                India's Premier Live Experience Company
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6">
                Where Every Note{' '}
                <span className="italic font-semibold font-museo">Resonates.</span>
                <br />
                Where Every Moment{' '}
                <span className="italic font-semibold font-museo">Endures.</span>
              </h1>
              <p className="text-base text-zinc-400 mb-10 max-w-xl leading-relaxed">
                From the concert halls of Kolkata to the grand stages of Mumbai — Theism Events India
                has spent over a decade crafting live experiences that move audiences, honour legends,
                and create memories that outlast the evening.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <span className="relative inline-block">
                  <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
                  <Link href="/shows" className="relative block bg-red-700 hover:bg-red-800 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors">
                    Discover Our Shows
                  </Link>
                </span>
                <span className="relative inline-block">
                  <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
                  <Link href="/contact" className="relative block border bg-black hover:border-white hover:bg-black/90 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors">
                    Plan Your Event With Us
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white" />
          <span className="text-white text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800 divide-y md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.value} className="px-8 py-10 text-center">
                <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.value}</p>
                <p className="text-zinc-500 text-xs uppercase tracking-widest leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Introduction Section ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-4">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
                Born in Kolkata.<br />
                <span className="text-zinc-500 font-light normal-case text-3xl italic">Grown Across India.</span>
              </h2>
              <div className="w-12 h-px bg-red-700 mb-8" />
              <p className="text-zinc-400 text-sm leading-loose mb-6">
                Theism Events India was born in 2013 with a singular belief — that a truly extraordinary
                event is not merely organised, it is <em className="text-white">felt</em>. We are the entertainment arm of the Theism Group,
                a Kolkata-based conglomerate with over five decades of excellence across industries.
              </p>
              <p className="text-zinc-400 text-sm leading-loose mb-8">
                With offices in Kolkata and Mumbai and a footprint that spans the breadth of India,
                Theism Events has become one of the country's most trusted names in live concert production,
                cultural event management, and brand experience creation.
              </p>
              <Link
                href="/about"
                className="text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest border-b border-red-800 hover:border-red-500 pb-1 transition-colors"
              >
                Our Full Story →
              </Link>
            </div>

            {/* Right — decorative block */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-zinc-900 to-black" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.15) 39px, rgba(255,255,255,0.15) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.15) 39px, rgba(255,255,255,0.15) 40px)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-6">The Theism Group</p>
                  <p className="text-7xl font-bold text-white/5 leading-none mb-4">50</p>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2">Years of Heritage</p>
                  <div className="w-8 h-px bg-red-700 my-4" />
                  <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
                    The entertainment arm of a conglomerate built on five decades of trust, quality, and vision.
                  </p>
                </div>
              </div>
              {/* Offset accent border */}
              <div className="absolute -bottom-3 -right-3 inset-0 border border-red-900/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Shows ── */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-3">Our Productions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Our Most Celebrated<br />Productions
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
              For over a decade, Theism Events has been the custodian of two of India's most beloved
              live experiences — annual pilgrimages for those who love the golden era of Indian music.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {shows.map((show, i) => (
              <div key={show.id} className="relative group flex flex-col overflow-hidden">
                {/* Card visual */}
                <div
                  className="relative overflow-hidden"
                  style={{ minHeight: '260px' }}
                >
                  <div className={`absolute inset-0 ${i === 0 ? 'bg-gradient-to-br from-red-950 via-zinc-900 to-black' : i === 1 ? 'bg-gradient-to-br from-zinc-900 via-red-950/40 to-black' : 'bg-gradient-to-br from-zinc-900 to-black'}`} />
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  {/* Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-red-700 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                      {show.tag}
                    </span>
                  </div>
                  {/* Location */}
                  <div className="absolute top-5 right-5">
                    <span className="border border-zinc-700 text-zinc-400 text-[9px] uppercase tracking-widest px-2 py-1">
                      {show.location}
                    </span>
                  </div>
                  {/* Show number watermark */}
                  <div className="absolute bottom-4 right-5 text-8xl font-bold text-white/[0.04] leading-none select-none">
                    0{show.id}
                  </div>
                </div>

                {/* Card content */}
                <div className="bg-zinc-900 border border-zinc-800 group-hover:border-red-900 transition-colors p-6 flex-1 flex flex-col">
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">{show.date}</p>
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">
                    {show.title}
                  </h3>
                  <p className="text-zinc-500 text-xs italic mb-4">{show.subtitle}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5 flex-1">{show.desc}</p>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-2">Featuring</p>
                    <p className="text-zinc-400 text-xs">{show.artists.join(' · ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <span className="relative inline-block">
              <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
              <Link
                href="/shows"
                className="relative block border border-red-700 text-white bg-red-600 hover:bg-red-700 px-10 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                View All Productions
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* ── Why Choose Theism ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — heading */}
            <div className="flex flex-col justify-start">
              <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-4">Why Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
                Crafted with Care.<br />
                Delivered with<br />
                <span className="italic font-museo font-semibold text-red-600">Precision.</span>
              </h2>
              <div className="w-12 h-px bg-red-700 mb-8" />
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                We do not simply manage events. We build the architecture of unforgettable evenings —
                from the first note of sound check to the final round of applause.
              </p>
            </div>

            {/* Right — list */}
            <div className="flex flex-col gap-0">
              {differentiators.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-5 py-6 border-b border-zinc-900 group"
                >
                  <span className="text-red-700/60 text-xs font-bold mt-1 w-5 shrink-0 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-1.5 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-700 text-6xl leading-none mb-8 font-serif">&ldquo;</div>
          <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mb-10 italic">
            At this moment, Theism Events is the best in Kolkata to stage big musical nights.
            Professionalism, passion, and an eye for detail — all in one place.
          </blockquote>
          <div className="w-8 h-px bg-red-700 mx-auto mb-6" />
          <cite className="not-italic text-zinc-500 text-xs uppercase tracking-[0.3em]">
            — Industry Professional, Kolkata
          </cite>
          <div className="mt-10">
            <Link
              href="/reviews"
              className="text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest border-b border-red-800 hover:border-red-500 pb-1 transition-colors"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA Band ── */}
      <section className="bg-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-red-200 text-xs uppercase tracking-widest mb-1">Ready to Begin?</p>
            <h3 className="text-white text-3xl font-bold uppercase tracking-wide">
              Let's Build Something Unforgettable.
            </h3>
          </div>
          <span className="relative inline-block shrink-0">
            <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
            <Link
              href="/contact"
              className="relative block bg-black hover:bg-zinc-900 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Plan Your Event With Us
            </Link>
          </span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
