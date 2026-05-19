import Link from 'next/link';
import Image from 'next/image';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Shows', href: '/shows' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
];

export default function SiteNav() {
  return (
    <nav className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Theism Events India"
              width={48}
              height={48}
              className="object-contain"
            />
          </Link>

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

          <span className="relative inline-block">
            <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
            <Link
              href="/contact"
              className="relative block bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Plan Your Event
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
