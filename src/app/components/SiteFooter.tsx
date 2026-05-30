import Link from 'next/link';
import Image from 'next/image';

const navLinks = ['Home', 'Shows', 'Services', 'Gallery', 'Testimonials', 'About', 'Contact'];
const productions = ['Tomay Poreche Mone', 'Aaye Tum Yaad Mujhe', 'Tribute to Legends', 'Chete Pute', 'A Tribute to R.D. Burman'];

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/TheismEvents/',
    hoverClass: 'hover:opacity-80',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
        <path d="M16.671 15.469l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V4.922s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.643H7.078v3.47h3.047v8.385a12.09 12.09 0 0 0 3.75 0v-8.385h2.796z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@theismevents',
    hoverClass: 'hover:opacity-80',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#ffffff" />
      </svg>
    ),
  },
  { label: 'Instagram', href: '#', hoverClass: 'hover:text-pink-500', icon: null },
  { label: 'LinkedIn',  href: '#', hoverClass: 'hover:text-blue-400', icon: null },
];

export default function SiteFooter() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Theism Events India"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-xs mb-5">
              The entertainment arm of the Theism Group — over a decade of delivering India's
              finest live music experiences from Kolkata to Mumbai.
            </p>
            <p className="text-zinc-700 text-[10px] uppercase tracking-widest mb-4">Kolkata · Mumbai · Pan India</p>
            <div className="flex gap-4 mt-2">
              {socials.map(({ label, href, icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className={`text-zinc-600 ${hoverClass} transition-colors flex items-center gap-1.5`}
                >
                  {icon ?? <span className="text-[10px] uppercase tracking-wider">{label}</span>}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-zinc-600 hover:text-red-500 text-xs uppercase tracking-wider transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-5">Productions</h4>
            <ul className="space-y-3">
              {productions.map((show) => (
                <li key={show}>
                  <Link href="/shows" className="text-zinc-600 hover:text-red-500 text-xs leading-relaxed transition-colors">
                    {show}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-700 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Theism Events India. All rights reserved.
          </p>
          <p className="text-zinc-800 text-[10px] uppercase tracking-widest">
            An Enterprise of the Theism Group
          </p>
        </div>
      </div>
    </footer>
  );
}
