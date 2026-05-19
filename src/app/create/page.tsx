import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function CreateEventPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">EventHub</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-blue-400 transition">Home</Link>
              <Link href="/events" className="text-white hover:text-blue-400 transition">Events</Link>
              <Link href="/create" className="text-blue-400 hover:text-blue-300 transition font-semibold">Create Event</Link>
              <Link href="/docs" className="text-white hover:text-blue-400 transition">Documentation</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/events" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Create a New Event</h1>
        <p className="text-slate-300 mb-8">Fill in the details below to create your event</p>

        <form className="space-y-6">
          {/* Event Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Event Name *</label>
            <input
              type="text"
              placeholder="Enter event name"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Description *</label>
            <textarea
              placeholder="Enter event description"
              rows={5}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              required
            ></textarea>
          </div>

          {/* Date and Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Date *</label>
              <input
                type="date"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Time *</label>
              <input
                type="time"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Location *</label>
            <input
              type="text"
              placeholder="Enter event location"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Category *</label>
            <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition">
              <option value="">Select a category</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="expo">Expo</option>
              <option value="meetup">Meetup</option>
              <option value="webinar">Webinar</option>
              <option value="training">Training</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Max Attendees *</label>
            <input
              type="number"
              placeholder="Enter maximum number of attendees"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              min="1"
              required
            />
          </div>

          {/* Organizer Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Organizer Name *</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email *</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Create Event
            </button>
            <Link
              href="/events"
              className="flex-1 border-2 border-slate-700 text-white py-3 rounded-lg hover:border-slate-600 transition font-semibold text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-white">EventHub</span>
              </div>
              <p className="text-slate-400 text-sm">Manage your events with ease and style.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/events" className="hover:text-blue-400">Events</Link></li>
                <li><Link href="/create" className="hover:text-blue-400">Create Event</Link></li>
                <li><Link href="/docs" className="hover:text-blue-400">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 EventHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
