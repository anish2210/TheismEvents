'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

const slides = [
  {
    title: 'Legacy — Unforgettable Rafi',
    subtitle: 'A Grand Tribute to the Voice of a Million Hearts',
    date: '1 Aug 2026',
    location: 'Mumbai',
    tag: 'Mumbai Edition',
    image: '/artists/perf-1.jpg',
    objectPosition: 'center 20%',
    artists: ['Sudesh Bhosle', 'Roop Kumar Rathod', 'Anup Jalota'],
  },
  {
    title: 'Tribute to Legends',
    subtitle: 'Celebrating Hemant Kumar, Lata Mangeshkar & Mukesh',
    date: '2 Aug 2026',
    location: 'Mumbai',
    tag: 'New Series',
    image: '/artists/perf-15.jpg',
    objectPosition: 'center 15%',
    artists: ['Sagnik Sen', 'Shurjo Bhattacharya', 'Gul Saxena'],
  },
  {
    title: 'Shotoborshe Uttom',
    subtitle: 'Centenary Celebration of Uttam Kumar',
    date: '6 Sep 2026',
    location: 'Kolkata',
    tag: 'Special',
    image: '/artists/perf-11.jpg',
    objectPosition: 'center 25%',
    artists: ['Indrani Sen', 'Usha Uthup', 'Lopamudra Mitra'],
  },
];

const upcoming = [
  {
    title: 'Legacy — Unforgettable Rafi',
    subtitle: 'A Grand Tribute to the Voice of a Million Hearts',
    date: '1 Aug 2026',
    location: 'Mumbai',
    tag: 'Mumbai Edition',
    image: '/events/event-legacy.png',
    artists: ['Sudesh Bhosle', 'Roop Kumar Rathod', 'Anup Jalota'],
  },
  {
    title: 'Tribute to Legends',
    subtitle: 'Celebrating Hemant Kumar, Lata Mangeshkar & Mukesh',
    date: '2 Aug 2026',
    location: 'Mumbai',
    tag: 'New Series',
    image: '/shows/tribute-to-legends.jpg',
    artists: ['Sagnik Sen', 'Shurjo Bhattacharya', 'Gul Saxena'],
  },
  {
    title: 'Shotoborshe Uttom',
    subtitle: 'Centenary Celebration of Uttam Kumar',
    date: '6 Sep 2026',
    location: 'Kolkata',
    tag: 'Special',
    image: '/events/event-uttom.jpg',
    artists: ['Indrani Sen', 'Usha Uthup', 'Lopamudra Mitra'],
  },
];

const past = [
  {
    title: 'Main Hoon Jhumroo',
    subtitle: 'Kishore Kumar Tribute — Live Performance',
    date: '18 Dec 2024',
    location: 'Kolkata',
    image: 'https://i.ytimg.com/vi/3b-nm-hj92Y/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=3b-nm-hj92Y',
  },
  {
    title: 'Humein Tumse Pyar Kitna',
    subtitle: 'Kishore Kumar Tribute — Live at Kolkata',
    date: '4 Aug 2024',
    location: 'Kolkata',
    image: 'https://i.ytimg.com/vi/6i_Q2Z09Mcw/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=6i_Q2Z09Mcw',
  },
  {
    title: 'Om Shanti Om',
    subtitle: 'Kishore Kumar Tribute — Live Performance',
    date: '24 Aug 2024',
    location: 'Kolkata',
    image: 'https://i.ytimg.com/vi/AHjD0AFYjhs/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=AHjD0AFYjhs',
  },
  {
    title: 'Aaye Tum Yaad Mujhe',
    subtitle: "Mumbai's Grandest Kishore Kumar Tribute",
    date: 'Annual',
    location: 'Mumbai',
    image: '/shows/aaye-tum-yaad-mujhe.jpg',
    youtubeUrl: null,
  },
  {
    title: 'Manzilen Apni Jagah Hain',
    subtitle: 'Kishore Kumar Tribute — Live Performance',
    date: '10 Jul 2024',
    location: 'Kolkata',
    image: 'https://i.ytimg.com/vi/DY_n3K2tm-M/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=DY_n3K2tm-M',
  },
];

const tabs = ['All Events', 'Upcoming', 'Past', 'Featured'] as const;
type Tab = (typeof tabs)[number];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('All Events');
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setPrev(current);
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 800);
  }, [current, transitioning]);

  useEffect(() => {
    const id = setInterval(() => goTo((current + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [current, goTo]);

  const showFeatured = activeTab === 'All Events' || activeTab === 'Featured';
  const showUpcoming = activeTab === 'All Events' || activeTab === 'Upcoming';
  const showPast = activeTab === 'All Events' || activeTab === 'Past';

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav />

      <section
        className="relative overflow-hidden bg-zinc-950 border-b border-zinc-800 py-28 md:py-36"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      >
        <span
          aria-hidden="true"
          className="text-[180px] md:text-[280px] font-black text-white/[0.03] absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
        >
          01
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 mb-5">
            <span className="w-px h-16 bg-red-700" />
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em]">
              Our Events
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white uppercase leading-[1.1] tracking-wide mb-6">
            Where Every Show
            <br />
            Becomes a{' '}
            <span className="italic font-semibold font-museo lowercase">Memory.</span>
          </h1>
          <p className="text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
            For over a decade, Theism Events has staged India&apos;s most beloved
            live experiences — concerts, tributes, and cultural evenings that
            honour the legends and move every audience that fills the hall.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-zinc-700 text-zinc-400 text-[10px] uppercase tracking-widest px-3 py-1.5">
              10+ Years
            </span>
            <span className="text-zinc-700">·</span>
            <span className="border border-zinc-700 text-zinc-400 text-[10px] uppercase tracking-widest px-3 py-1.5">
              Pan India
            </span>
          </div>
          <div className="w-full border-b border-zinc-800 mt-12" />
        </div>
      </section>

      <div className="bg-black border-b border-zinc-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto no-scrollbar -mb-px">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              const count =
                tab === 'All Events'
                  ? upcoming.length + past.length + 1
                  : tab === 'Upcoming'
                    ? upcoming.length
                    : tab === 'Past'
                      ? past.length
                      : 1;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap py-5 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors ${
                    isActive
                      ? 'text-white border-red-600'
                      : 'text-zinc-500 border-transparent hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {tab}
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded-sm tabular-nums ${
                        isActive
                          ? 'bg-red-900/40 text-red-400'
                          : 'bg-zinc-800 text-zinc-500'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {showFeatured && (
        <section className="bg-black">
          <div
            className="relative overflow-hidden min-h-[420px] md:min-h-[580px] flex items-center"
            onMouseEnter={() => {}}
          >
            {/* Slides */}
            {slides.map((slide, i) => (
              <div
                key={slide.image}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
                aria-hidden={i !== current}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: slide.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
              </div>
            ))}

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-2xl relative pl-6 border-l-2 border-red-700">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="transition-all duration-700"
                    style={{ opacity: i === current ? 1 : 0, position: i === current ? 'relative' : 'absolute', top: 0, left: '1.5rem' }}
                    aria-hidden={i !== current}
                  >
                    <span className="bg-red-700 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 inline-block mb-4">
                      {slide.tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-3">
                      {slide.title}
                    </h2>
                    <p className="text-zinc-300 text-base md:text-lg italic mb-5">
                      {slide.subtitle}
                    </p>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest mb-5">
                      {slide.date} · {slide.location}
                    </p>
                    <div className="mb-8">
                      <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-2">Featuring</p>
                      <p className="text-zinc-300 text-sm">{slide.artists.join(' · ')}</p>
                    </div>
                    <span className="relative inline-block">
                      <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
                      <Link href="/contact" className="relative block bg-red-700 hover:bg-red-800 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors">
                        Enquire Now
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-none ${i === current ? 'w-8 h-[3px] bg-red-600' : 'w-3 h-[3px] bg-zinc-600 hover:bg-zinc-400'}`}
                />
              ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-6 right-6 z-10 text-zinc-600 text-[10px] uppercase tracking-widest tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </section>
      )}

      {showUpcoming && (
        <section className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-3">
                Upcoming
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
                Live Experiences Ahead
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcoming.map((event, i) => (
                <article
                  key={`${event.title}-${event.date}`}
                  className="group flex flex-col transition-shadow duration-500 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-700 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                        {event.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="border border-zinc-700 text-zinc-400 text-[9px] uppercase tracking-widest px-2 py-1 bg-black/40 backdrop-blur-sm">
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <div className="relative overflow-visible bg-zinc-900 border border-zinc-800 group-hover:border-red-900 transition-colors p-6 flex-1 flex flex-col">
                    <span
                      aria-hidden="true"
                      className="text-zinc-800 text-5xl font-black leading-none absolute -top-5 right-4 tabular-nums select-none pointer-events-none"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        {event.date}
                      </span>
                    </p>
                    <h3 className="text-white font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-zinc-500 text-xs italic mb-4">
                      {event.subtitle}
                    </p>
                    <div className="border-t border-zinc-800 pt-4 mt-auto">
                      <p className="text-zinc-400 text-xs mb-4">
                        {event.artists.join(' · ')}
                      </p>
                      <Link
                        href="/contact"
                        className="text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest transition-colors"
                      >
                        Enquire →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {showUpcoming && showPast && (
        <div className="bg-zinc-950 border-y border-zinc-800/50 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            <span className="text-zinc-700 text-[10px] uppercase tracking-[0.4em]">
              Theism Events India · Est. 2013
            </span>
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-700 text-[10px] uppercase tracking-[0.4em]">
              Kolkata · Mumbai · Pan India
            </span>
          </div>
        </div>
      )}

      {showPast && (
        <section className="bg-zinc-950 py-20 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden mb-12">
              <span
                aria-hidden="true"
                className="text-[100px] font-black text-white/[0.025] absolute -top-8 left-0 uppercase select-none pointer-events-none leading-none"
              >
                Archive
              </span>
              <p className="relative text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-3">
                Archive
              </p>
              <h2 className="relative text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
                A Legacy of Performances
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((event) => {
                const isLocal = event.image.startsWith('/');
                const card = (
                  <div className="group flex flex-col h-full opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="relative overflow-hidden aspect-video">
                      {isLocal ? (
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={event.image}
                          alt={event.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      {event.youtubeUrl && (
                        <div className="absolute top-4 left-4">
                          <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-3.5 h-3.5 text-red-500"
                              aria-hidden="true"
                            >
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Watch
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800/60 group-hover:border-red-900 transition-colors p-6 flex-1 flex flex-col">
                      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-zinc-500 text-xs italic mb-4">
                        {event.subtitle}
                      </p>
                      <div className="border-t border-zinc-800 pt-4 mt-auto flex items-center justify-between gap-3">
                        <span className="text-zinc-600 text-[10px] uppercase tracking-widest">
                          {event.date}
                        </span>
                        <span className="border border-zinc-700 text-zinc-400 text-[9px] uppercase tracking-widest px-2 py-1">
                          {event.location}
                        </span>
                      </div>
                      <div className="pt-3">
                        <span className="text-[9px] text-zinc-600 uppercase tracking-widest">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                );

                return event.youtubeUrl ? (
                  <a
                    key={`${event.title}-${event.date}`}
                    href={event.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={`${event.title}-${event.date}`}>{card}</div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section
        className="relative bg-red-700 py-16"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-red-200 text-xs uppercase tracking-widest mb-1">
              Ready to Begin?
            </p>
            <h3 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Let&apos;s Build Something Unforgettable.
            </h3>
          </div>
          <span className="relative inline-block shrink-0">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]"
            />
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
