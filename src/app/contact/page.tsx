import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import ContactForm from './ContactForm';

const contactDetails = [
  {
    label: 'Registered Office — Kolkata',
    lines: [
      'Theism Events India Pvt. Ltd.',
      '5/3D Dum Dum Road',
      'Kolkata – 700030',
      'West Bengal, India',
    ],
  },
  {
    label: 'Mumbai Office',
    lines: [
      'Available for corporate, concert, and brand events',
      'across Maharashtra and Western India.',
    ],
  },
  {
    label: 'Get In Touch',
    lines: ['info@theismevents.in', '+91 82404 61559'],
  },
];

const socials = [
  { name: 'Facebook', handle: 'TheismEvents', href: '#' },
  { name: 'Instagram', handle: '@theismevents', href: '#' },
  { name: 'YouTube', handle: '@theismevents', href: '#' },
  { name: 'LinkedIn', handle: 'theismevents', href: '#' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav />

      {/* Page Header */}
      <section className="bg-zinc-950 border-b border-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-4">
            Let's Create Something Extraordinary Together
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight mb-6">
            Every Great Event Begins<br />
            <span className="text-zinc-500 font-light normal-case italic text-3xl md:text-4xl">
              With a Conversation.
            </span>
          </h1>
          <div className="w-12 h-px bg-red-700 mb-8" />
          <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
            Whether you wish to attend one of our upcoming shows, partner with us on a production,
            commission us to manage your event, or simply learn more about what we do — we welcome
            your enquiry. Our team is ready to listen, to advise, and to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-16">

            {/* Left — Contact Info */}
            <div className="md:col-span-2 space-y-10">
              {contactDetails.map((block) => (
                <div key={block.label}>
                  <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                    {block.label}
                  </p>
                  <div className="space-y-1">
                    {block.lines.map((line, i) => (
                      <p key={i} className="text-zinc-400 text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div>
                <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                  Social Media
                </p>
                <div className="space-y-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="flex items-center gap-3 group"
                    >
                      <span className="text-zinc-600 text-[10px] uppercase tracking-widest w-20">{s.name}</span>
                      <span className="text-zinc-400 text-xs group-hover:text-red-400 transition-colors">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative block */}
              <div className="relative overflow-hidden border border-zinc-900 p-6 mt-6">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-700/40" />
                <p className="text-zinc-600 text-xs leading-relaxed italic">
                  "We respond to every enquiry with care. We will be in touch within one working day."
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="md:col-span-3">
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-[0.3em] mb-8 border-b border-zinc-900 pb-4">
                We Respond to Every Enquiry With Care
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
