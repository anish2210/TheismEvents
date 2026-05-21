'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { label: 'Home',         href: '/' },
  { label: 'Shows',        href: '/shows' },
  { label: 'Services',     href: '/services' },
  { label: 'Gallery',      href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About',        href: '/about' },
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
        </div>
      </div>
    </nav>
  );
}
