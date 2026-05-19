import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import Link from 'next/link';

const featured = [
  {
    quote:
      "It's a privilege to celebrate a genius like Kishore Da every time with Theism Events. The level of preparation, the quality of production, and the love for the music — it is evident in every minute of their shows.",
    name: 'Sudesh Bhosle',
    role: 'Celebrated Playback Artist',
    show: 'Aaye Tum Yaad Mujhe',
  },
  {
    quote:
      "Aaye Tum Yaad Mujhe has given Mumbai audiences something very special. Theism Events understands what it means to honour a legacy — not just perform it.",
    name: 'Amit Kumar',
    role: 'Son of Kishore Kumar',
    show: 'Aaye Tum Yaad Mujhe',
  },
];

const testimonials = [
  {
    quote:
      'Exceptionally enjoyable with a touch of class. The choice of performers, decoration, lighting, selection of venue, and above all the professionalism in handling the event exhibited the highest level of efficiency. Truly a premium experience.',
    name: 'Corporate Client',
    role: 'Kolkata',
  },
  {
    quote:
      'At this moment, Theism Events is the best in Kolkata to stage big musical nights. Simply one of the best event management organisations I have ever worked with.',
    name: 'Industry Professional',
    role: 'Kolkata',
  },
  {
    quote:
      'Exceptional professionalism, perfect management of events at remarkable efficiency. They turn your dream event into reality — not approximately, but precisely.',
    name: 'Event Attendee',
    role: 'Mumbai',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav />

      {/* Page Header */}
      <section className="bg-zinc-950 border-b border-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-4">
            What Our Audiences & Clients Say
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight mb-6">
            Told by the People<br />
            <span className="text-zinc-500 font-light normal-case italic text-3xl md:text-4xl">
              Who Were There.
            </span>
          </h1>
          <div className="w-12 h-px bg-red-700 mb-8" />
          <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
            The most honest measure of our work is not found in our portfolio or our press coverage
            — it is found in the words of those who experienced our events firsthand. Here is what
            they have said.
          </p>
        </div>
      </section>

      {/* Featured Artist Testimonials */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-10">From the Artists</p>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((t) => (
              <div key={t.name} className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-zinc-900 to-black" />
                <div className="absolute top-0 left-0 w-1 h-full bg-red-700" />
                <div className="relative p-8 md:p-10">
                  <div className="text-red-700 text-4xl font-serif leading-none mb-5">&ldquo;</div>
                  <p className="text-white text-base md:text-lg font-light italic leading-relaxed mb-8">
                    {t.quote}
                  </p>
                  <div className="border-t border-zinc-800 pt-6">
                    <p className="text-white font-bold text-sm uppercase tracking-widest">{t.name}</p>
                    <p className="text-zinc-500 text-xs mt-1">{t.role}</p>
                    <span className="inline-block mt-3 bg-red-700/20 border border-red-900/50 text-red-500 text-[9px] uppercase tracking-widest px-2 py-1">
                      {t.show}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience & Client Testimonials */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-10">From Our Audiences & Clients</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="relative bg-zinc-900 border border-zinc-800 hover:border-red-900 transition-colors p-8 flex flex-col">
                <div className="text-red-700/60 text-5xl font-serif leading-none mb-4">&ldquo;</div>
                <p className="text-zinc-300 text-sm font-light italic leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-zinc-800 pt-5">
                  <p className="text-white font-semibold text-xs uppercase tracking-wider">{t.name}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-t border-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-500 text-sm mb-6">
            Ready to experience a Theism Events production for yourself?
          </p>
          <span className="relative inline-block">
            <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
            <Link
              href="/contact"
              className="relative block bg-red-700 hover:bg-red-800 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
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
