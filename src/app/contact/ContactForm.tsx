'use client';

import { useState } from 'react';

const interests = [
  'Attending a Show',
  'Corporate Event',
  'Brand Activation',
  'Concert Production',
  'Food Festival',
  'Wedding & Private Events',
  'Media Partnership',
  'General Enquiry',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-red-900/50 bg-red-950/20 p-10 text-center">
        <div className="text-red-600 text-4xl mb-4">✓</div>
        <p className="text-white font-semibold uppercase tracking-widest text-sm mb-2">
          Thank you for reaching out.
        </p>
        <p className="text-zinc-500 text-xs leading-relaxed">
          A member of our team will be in touch with you within one working day.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-zinc-900 border border-zinc-800 focus:border-red-700 outline-none text-white text-sm px-4 py-3 placeholder:text-zinc-700 transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Full Name</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Email Address</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2">I Am Interested In</label>
          <select
            name="interest"
            required
            value={form.interest}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select an option</option>
            {interests.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2">
          Tell Us About Your Event or Enquiry
        </label>
        <textarea
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Please describe what you have in mind. The more detail you share, the better we can assist you."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="pt-2">
        <span className="relative inline-block">
          <span aria-hidden="true" className="absolute inset-0 bg-white pointer-events-none translate-x-[5px] translate-y-[5px]" />
          <button
            type="submit"
            className="relative block bg-red-700 hover:bg-red-800 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            Send Your Enquiry
          </button>
        </span>
      </div>
    </form>
  );
}
