import Link from 'next/link';
import Image from 'next/image';

const navLinks = ['Home', 'Shows', 'Services', 'Gallery', 'Testimonials', 'About', 'Contact'];
const productions = ['Tomay Poreche Mone', 'Aaye Tum Yaad Mujhe', 'Tribute to Legends', 'Chete Pute', 'A Tribute to R.D. Burman'];

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
              {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((s) => (
                <a key={s} href="#" className="text-zinc-700 hover:text-red-500 text-[10px] uppercase tracking-wider transition-colors">{s}</a>
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
