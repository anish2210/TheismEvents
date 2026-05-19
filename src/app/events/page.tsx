import Link from 'next/link';
import { Calendar, Users, Clock, MapPin, Search } from 'lucide-react';

export default function EventsPage() {
  const allEvents = [
    {
      id: 1,
      title: 'Web Development Conference 2026',
      date: 'June 15, 2026',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      attendees: 245,
      image: '🎤',
      category: 'Conference',
    },
    {
      id: 2,
      title: 'React Masterclass',
      date: 'June 22, 2026',
      time: '2:00 PM - 6:00 PM',
      location: 'New York, NY',
      attendees: 89,
      image: '⚛️',
      category: 'Workshop',
    },
    {
      id: 3,
      title: 'UI/UX Design Workshop',
      date: 'July 5, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Los Angeles, CA',
      attendees: 156,
      image: '🎨',
      category: 'Workshop',
    },
    {
      id: 4,
      title: 'JavaScript Advanced Topics',
      date: 'July 12, 2026',
      time: '1:00 PM - 5:00 PM',
      location: 'Boston, MA',
      attendees: 120,
      image: '💛',
      category: 'Workshop',
    },
    {
      id: 5,
      title: 'Web3 & Blockchain Expo',
      date: 'July 20, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Austin, TX',
      attendees: 420,
      image: '⛓️',
      category: 'Expo',
    },
    {
      id: 6,
      title: 'Mobile App Development Summit',
      date: 'August 3, 2026',
      time: '8:00 AM - 5:00 PM',
      location: 'Seattle, WA',
      attendees: 200,
      image: '📱',
      category: 'Conference',
    },
  ];

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
              <Link href="/events" className="text-blue-400 hover:text-blue-300 transition font-semibold">Events</Link>
              <Link href="/create" className="text-white hover:text-blue-400 transition">Create Event</Link>
              <Link href="/docs" className="text-white hover:text-blue-400 transition">Documentation</Link>
            </div>
            <Link
              href="/create"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create Event
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Browse Events</h1>
        <p className="text-slate-300 mb-8">Discover and join amazing events happening near you</p>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search events by name, location, or category..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allEvents.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition cursor-pointer group h-full">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl group-hover:scale-110 transition relative">
                  {event.image}
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition line-clamp-2">{event.title}</h3>
                  <div className="space-y-3 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-700">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50">
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
