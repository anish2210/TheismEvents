import Link from "next/link";
import Image from "next/image";
import HeroVideo from "./HeroVideo";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import HallOfFameCarousel from "./components/HallOfFameCarousel";
import StarsCollage from "./components/StarsCollage";
import AnimatedStats from "./components/AnimatedStats";
import YouTubeSection from "./components/YouTubeSection";

const shows = [
  {
    id: 1,
    title: "Aaye Tum Yaad Mujhe",
    subtitle: "Mumbai's Grandest Tribute to the Genius of Kishore Kumar",
    location: "Mumbai",
    date: "Annual",
    desc: "A grand musical tribute featuring philharmonic orchestration and legendary artists embodying Kishore Kumar's immortal legacy — brought to Mumbai's grandest stages.",
    artists: ["Amit Kumar", "Sudesh Bhosle", "Alok Katdare", "Bela Sulakhe"],
    tag: "Mumbai Edition",
    image: "/shows/aaye-tum-yaad-mujhe.jpg",
  },
  {
    id: 2,
    title: "Tribute to Legends",
    subtitle: "A New Series. Timeless Voices.",
    location: "Pan India",
    date: "New Series",
    desc: "A heartfelt concert series celebrating the immortal voices of Hemant Kumar, Lata Mangeshkar, Mukesh, and Manna Dey — performed by India's finest contemporary artists.",
    artists: [
      "Sagnik Sen",
      "Shurjo Bhattacharya",
      "Gul Saxena",
      "Mukhtar Shah",
    ],
    tag: "New",
    image: "/shows/tribute-to-legends.jpg",
  },
];

const differentiators = [
  {
    title: "A Legacy You Can Trust",
    desc: "Over a decade of delivering India's finest live shows, backed by the 50-year heritage of the Theism Group.",
  },
  {
    title: "Curatorial Excellence",
    desc: "We select only the best: the finest artists, the most resonant repertoire, and the most fitting venues.",
  },
  {
    title: "End-to-End Production Mastery",
    desc: "From stage design and AV engineering to artist coordination and post-event debrief — everything under one roof.",
  },
  {
    title: "Audience-First Philosophy",
    desc: "Every decision we make is filtered through one question: will this create a memory worth keeping?",
  },
  {
    title: "National Reach, Local Sensitivity",
    desc: "Two offices, Pan India execution, and a deep understanding of regional culture and sensibility.",
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
                India&apos;s Premier Live Experience Company
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6">
                Where Every Note{" "}
                <span className="italic font-semibold font-museo">
                  Resonates.
                </span>
                <br />
                Where Every Moment{" "}
                <span className="italic font-semibold font-museo">
                  Endures.
                </span>
              </h1>
              <p className="text-base text-zinc-400 mb-10 max-w-xl leading-relaxed">
                From the concert halls of Kolkata to the grand stages of Mumbai
                — Theism Events India has spent over a decade crafting live
                experiences that move audiences, honour legends, and create
                memories that outlast the evening.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]"
                  />
                  <Link
                    href="/shows"
                    className="relative block bg-red-700 hover:bg-red-800 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors"
                  >
                    Discover Our Shows
                  </Link>
                </span>
                {/* <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]"
                  />
                  <Link
                    href="/contact"
                    className="relative block border bg-black hover:border-white hover:bg-black/90 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors"
                  >
                    Plan Your Event With Us
                  </Link>
                </span> */}
              </div>

              {/* Social follow strip */}
              <div className="flex items-center gap-5 mt-2">
                <span className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">Follow us</span>
                <a
                  href="https://www.facebook.com/TheismEvents/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center gap-2 text-zinc-500 hover:text-white text-[10px] uppercase tracking-wider transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@theismevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center gap-2 text-zinc-500 hover:text-red-500 text-[10px] uppercase tracking-wider transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white" />
          <span className="text-white text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats />
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-10">
            Our <span className="text-red-600">Services</span>
          </h2>

          {/* ── Mobile services grid (< md) ── */}
          <div className="md:hidden flex flex-col gap-3">
            {/* Featured card — image on mobile instead of autoplay video */}
            <div className="relative overflow-hidden cursor-pointer group" style={{ height: "200px" }}>
              <Image src="/artists/perf-7.jpg" alt="Live Concerts & Events" fill sizes="100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">Featured</p>
                <h3 className="text-white font-bold text-base uppercase tracking-wide group-hover:text-red-400 transition-colors">Live Concerts &amp; Events</h3>
              </div>
            </div>
            {/* 2-column grid */}
            <div className="grid grid-cols-2 gap-3">
              {([
                { src: "/artists/perf-15.jpg", label: "Tribute Shows",          pos: "object-top" },
                { src: "/artists/perf-10.jpg", label: "Celebrity Night",         pos: "object-center" },
                { src: "/artists/perf-12.jpg", label: "Birthday Event",          pos: "object-center" },
                { src: "/artists/perf-5.jpg",  label: "Glam Night",              pos: "object-center" },
                { src: "/artists/perf-4.jpg",  label: "The Music Band",          pos: "object-center" },
                { src: "/artists/perf-14.jpg", label: "Weddings & Private",      pos: "object-center" },
              ] as const).map(({ src, label, pos }) => (
                <div key={label} className="relative overflow-hidden cursor-pointer group" style={{ height: "130px" }}>
                  <Image src={src} alt={label} fill sizes="50vw" className={`object-cover ${pos} transition-transform duration-500 group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-bold text-[10px] uppercase tracking-wider group-hover:text-red-400 transition-colors">{label}</h3>
                  </div>
                </div>
              ))}
              {/* Corporate — full width */}
              <div className="col-span-2 relative overflow-hidden cursor-pointer group" style={{ height: "130px" }}>
                <Image src="/artists/perf-13.jpg" alt="Corporate & Brand Events" fill sizes="100vw" className="object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-[10px] uppercase tracking-wider group-hover:text-red-400 transition-colors">Corporate &amp; Brand Events</h3>
                </div>
              </div>
            </div>
          </div>

          {/* ── Desktop bento grid (md+) ── */}
          <div
            className="hidden md:grid gap-3"
            style={{
              gridTemplateColumns: "1fr 1.6fr 1.6fr 1fr",
              gridTemplateRows: "200px 200px 120px",
              gridTemplateAreas: `
                "photo  large  large  retro1"
                "perf   large  large  retro2"
                "music  corp   corp   weddings"
              `,
            }}
          >
            {/* photo — small top-left (tribute shows) */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "photo" }}
            >
              <Image
                src="/artists/perf-15.jpg"
                alt="Tribute Shows"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  Tribute Shows
                </h3>
              </div>
            </div>

            {/* large — big center concert card spanning 2×2 */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "large" }}
            >
              <video
                src="/services-live.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">
                  Featured
                </p>
                <h3 className="text-white font-bold text-xl uppercase tracking-wide group-hover:text-red-400 transition-colors">
                  Live Concerts &amp; Events
                </h3>
              </div>
            </div>

            {/* retro1 — top right (celebrity night) */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "retro1" }}
            >
              <Image
                src="/artists/perf-10.jpg"
                alt="Celebrity Night"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  Celebrity Night
                </h3>
              </div>
            </div>

            {/* perf — mid left (birthday event) */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "perf" }}
            >
              <Image
                src="/artists/perf-12.jpg"
                alt="Birthday Event"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  Birthday Event
                </h3>
              </div>
            </div>

            {/* retro2 — mid right (glam night) */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "retro2" }}
            >
              <Image
                src="/artists/perf-5.jpg"
                alt="Glam Night"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  Glam Night
                </h3>
              </div>
            </div>

            {/* music — bottom far left */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "music" }}
            >
              <Image
                src="/artists/perf-4.jpg"
                alt="Music event"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-[10px] uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  The Music Band
                </h3>
              </div>
            </div>

            {/* corp — bottom center wide */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "corp" }}
            >
              <Image
                src="/artists/perf-13.jpg"
                alt="Corporate & Brand Events"
                fill
                className="object-cover object-[center_35%]
               transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-[10px] uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  Corporate &amp; Brand Events
                </h3>
              </div>
            </div>

            {/* weddings — bottom far right */}
            <div
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: "weddings" }}
            >
              <Image
                src="/artists/perf-14.jpg"
                alt="Weddings & Private Events"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-[10px] uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  Weddings &amp; Private Events
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Introduction Section ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-4">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
                Born in Kolkata.
                <br />
                <span className="text-zinc-500 font-light normal-case text-3xl italic">
                  Grown Across India.
                </span>
              </h2>
              <div className="w-12 h-px bg-red-700 mb-8" />
              <p className="text-zinc-400 text-sm leading-loose mb-6">
                Theism Events India was born in 2013 with a singular belief —
                that a truly extraordinary event is not merely organised, it is{" "}
                <em className="text-white">felt</em>. We are the entertainment
                arm of the Theism Group, a Kolkata-based conglomerate with over
                five decades of excellence across industries.
              </p>
              <p className="text-zinc-400 text-sm leading-loose mb-8">
                With offices in Kolkata and Mumbai and a footprint that spans
                the breadth of India, Theism Events has become one of the
                country&apos;s most trusted names in live concert production,
                cultural event management, and brand experience creation.
              </p>
              <Link
                href="/about"
                className="text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest border-b border-red-800 hover:border-red-500 pb-1 transition-colors"
              >
                Our Full Story →
              </Link>
            </div>

            {/* Right — photo collage */}
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{ minHeight: "400px" }}
              >
                <Image
                  src="/about-collage.jpg"
                  alt="Theism Events performances"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-3">
              Our Productions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Our Most Celebrated
              <br />
              Productions
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
              For over a decade, Theism Events has been the custodian of two of
              India&apos;s most beloved live experiences — annual pilgrimages for
              those who love the golden era of Indian music.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {shows.map((show, i) => (
              <div
                key={show.id}
                className="relative group flex flex-col overflow-hidden"
              >
                {/* Card visual */}
                <div
                  className="relative overflow-hidden"
                  style={{ minHeight: "260px" }}
                >
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                </div>

                {/* Card content */}
                <div className="bg-zinc-900 border border-zinc-800 group-hover:border-red-900 transition-colors p-6 flex-1 flex flex-col">
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">
                    {show.date}
                  </p>
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-red-400 transition-colors">
                    {show.title}
                  </h3>
                  <p className="text-zinc-500 text-xs italic mb-4">
                    {show.subtitle}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5 flex-1">
                    {show.desc}
                  </p>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-2">
                      Featuring
                    </p>
                    <p className="text-zinc-400 text-xs">
                      {show.artists.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]"
              />
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

      {/* ── Hall of Fame ── */}
      <section className="relative bg-zinc-950 py-20 overflow-hidden">
        {/* Cassette image — top right decorative */}
        <div className="absolute -top-4 right-0 w-72 md:w-96 opacity-80 pointer-events-none select-none z-10">
          <img
            src="/cassets.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full object-contain"
          />
        </div>

        <div className="relative z-20">
          {/* Heading — constrained */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.35em] mb-2">
              Festival Events
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
              Explore The <span className="text-red-600">Hall of Fame</span>
            </h2>
          </div>

          {/* Full-width carousel — no padding so cards bleed to edges */}
          <HallOfFameCarousel />
        </div>
      </section>

      <StarsCollage />

      {/* ── Why Choose Theism ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — heading */}
            <div className="flex flex-col justify-start">
              <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-4">
                Why Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
                Crafted with Care.
                <br />
                Delivered with
                <br />
                <span className="italic font-museo font-semibold text-red-600">
                  Precision.
                </span>
              </h2>
              <div className="w-12 h-px bg-red-700 mb-8" />
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                We do not simply manage events. We build the architecture of
                unforgettable evenings — from the first note of sound check to
                the final round of applause.
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
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── YouTube Videos ── */}
      <YouTubeSection />

      {/* ── Testimonial ── */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-700 text-6xl leading-none mb-8 font-serif">
            &ldquo;
          </div>
          <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mb-10 italic">
            At this moment, Theism Events is the best in Kolkata to stage big
            musical nights. Professionalism, passion, and an eye for detail —
            all in one place.
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
            <p className="text-red-200 text-xs uppercase tracking-widest mb-1">
              Ready to Begin?
            </p>
            <h3 className="text-white text-3xl font-bold uppercase tracking-wide">
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
