'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { label: 'Home',         href: '/' },
  { label: 'Events',       href: '/events' },
  // { label: 'Services',     href: '/services' },
  // { label: 'Gallery',      href: '/gallery' },
  // { label: 'Testimonials', href: '/testimonials' },
  // { label: 'About',        href: '/about' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="Theism Events India"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Social icons — desktop */}
            <div className="hidden md:flex items-center gap-3 mr-1">
              <a
                href="https://www.facebook.com/TheismEvents/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                  <path d="M16.671 15.469l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V4.922s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.643H7.078v3.47h3.047v8.385a12.09 12.09 0 0 0 3.75 0v-8.385h2.796z" fill="#ffffff" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@theismevents"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
                  <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#ffffff" />
                </svg>
              </a>
            </div>

            {/* Desktop CTA */}
            <span className="hidden md:inline-block relative">
              <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
              <Link
                href="/contact"
                className="relative block bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Plan Your Event
              </Link>
            </span>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            >
              <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden border-t border-zinc-800 bg-black overflow-hidden transition-all duration-300 ${open ? 'max-h-[28rem]' : 'max-h-0'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-400 hover:text-white text-sm font-semibold uppercase tracking-widest py-3.5 border-b border-zinc-900 last:border-0 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-red-700 hover:bg-red-800 text-white py-3 text-xs font-bold uppercase tracking-widest text-center transition-colors"
          >
            Plan Your Event
          </Link>
          <div className="flex items-center gap-5 mt-5 pt-4 border-t border-zinc-900">
            <a
              href="https://www.facebook.com/TheismEvents/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 text-[10px] uppercase tracking-widest transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                <path d="M16.671 15.469l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V4.922s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.643H7.078v3.47h3.047v8.385a12.09 12.09 0 0 0 3.75 0v-8.385h2.796z" fill="#ffffff" />
              </svg>
              <span className="text-zinc-400">Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@theismevents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 text-[10px] uppercase tracking-widest transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
                <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#ffffff" />
              </svg>
              <span className="text-zinc-400">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
