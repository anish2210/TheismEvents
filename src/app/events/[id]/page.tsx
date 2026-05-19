import Link from 'next/link';
import { Calendar, Users, Clock, MapPin, Share2, Heart, ArrowLeft, CheckCircle } from 'lucide-react';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = {
    id: params.id,
    title: 'Web Development Conference 2026',
    date: 'June 15, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'San Francisco, CA',
    attendees: 245,
    image: '🎤',
    category: 'Conference',
    description: `
      Join us for the Web Development Conference 2026, the premier event for web developers, designers, and tech enthusiasts.
      
      This full-day conference features:
      - Keynote presentations from industry leaders
      - Interactive workshops and hands-on training
      - Networking opportunities with professionals
      - Latest tools and technologies showcase
      - Career development sessions
      
      Whether you're a beginner or an experienced developer, you'll find valuable insights and connections at this event.
    `,
    speakers: [
      { name: 'Sarah Johnson', role: 'Frontend Architect', company: 'Tech Corp' },
      { name: 'Mike Chen', role: 'Full Stack Developer', company: 'Web Solutions' },
      { name: 'Emma Davis', role: 'UI/UX Lead', company: 'Design Studio' },
    ],
    schedule: [
      { time: '9:00 AM', activity: 'Registration & Breakfast' },
      { time: '10:00 AM', activity: 'Keynote: Future of Web Development' },
      { time: '11:30 AM', activity: 'Workshop Track A: React Advanced Patterns' },
      { time: '1:00 PM', activity: 'Lunch Break' },
      { time: '2:00 PM', activity: 'Workshop Track B: Node.js Best Practices' },
      { time: '3:30 PM', activity: 'Networking Session' },
      { time: '5:00 PM', activity: 'Event Closes' },
    ],
  };

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
              <Link href="/create" className="text-white hover:text-blue-400 transition">Create Event</Link>
              <Link href="/docs" className="text-white hover:text-blue-400 transition">Documentation</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/events" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        {/* Hero Image */}
        <div className="h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-8xl mb-8">
          {event.image}
        </div>

        {/* Event Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              {event.category}
            </span>
            <span className="text-slate-400 text-sm">Event ID: #{event.id}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-white hover:text-blue-400 transition">
              <Heart className="w-6 h-6" />
              Save Event
            </button>
            <button className="flex items-center gap-2 text-white hover:text-blue-400 transition">
              <Share2 className="w-6 h-6" />
              Share
            </button>
          </div>
        </div>

        {/* Event Details Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm mb-1">Date</p>
                <p className="text-white font-semibold">{event.date}</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm mb-1">Time</p>
                <p className="text-white font-semibold">{event.time}</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm mb-1">Location</p>
                <p className="text-white font-semibold">{event.location}</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm mb-1">Attendees</p>
                <p className="text-white font-semibold">{event.attendees} people attending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg mb-8">
          Register for Event
        </button>

        {/* Description */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">About this Event</h2>
          <p className="text-slate-300 whitespace-pre-wrap">{event.description}</p>
        </div>

        {/* Speakers */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Speakers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {event.speakers.map((speaker, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h3 className="text-white font-semibold">{speaker.name}</h3>
                <p className="text-blue-400 text-sm">{speaker.role}</p>
                <p className="text-slate-400 text-sm">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Event Schedule</h2>
          <div className="space-y-4">
            {event.schedule.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 pb-4 border-b border-slate-700 last:border-b-0">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-blue-400 font-semibold">{item.time}</p>
                  <p className="text-white">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Don't Miss Out!</h2>
          <p className="text-blue-100 mb-6">Register now to secure your spot at this amazing event</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-slate-100 transition font-semibold">
            Register Now
          </button>
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
