import Link from 'next/link';
import { Calendar, BookOpen, Code, Users, Settings, Zap } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      content: `
        Welcome to EventHub documentation! EventHub is a modern event management platform
        built with Next.js and TypeScript.
        
        ## Key Features
        - Create and manage events
        - Track attendees
        - Share events
        - Responsive design
        - Beautiful UI
      `,
    },
    {
      id: 'creating-events',
      title: 'Creating Events',
      icon: Code,
      content: `
        To create an event on EventHub:
        
        1. Click "Create Event" from the navigation
        2. Fill in the event details:
           - Event name (required)
           - Description (required)
           - Date and time (required)
           - Location (required)
           - Category (required)
           - Max attendees (required)
           - Organizer information (required)
        3. Click "Create Event" to publish
        
        Your event will be immediately visible to other users.
      `,
    },
    {
      id: 'managing-events',
      title: 'Managing Your Events',
      icon: Settings,
      content: `
        Once you've created an event, you can:
        
        - View event details
        - Edit event information
        - Track attendees
        - Send announcements
        - View analytics
        - Delete events if needed
        
        All event management is done from your dashboard.
      `,
    },
    {
      id: 'attending-events',
      title: 'Attending Events',
      icon: Users,
      content: `
        To attend an event:
        
        1. Browse events or search for specific events
        2. Click on an event to view details
        3. Click "Register for Event"
        4. Fill in your information
        5. Confirm your registration
        
        You'll receive a confirmation email with event details.
      `,
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: BookOpen,
      content: `
        Tips for using EventHub effectively:
        
        ✓ Use descriptive event titles
        ✓ Include detailed descriptions
        ✓ Set realistic attendee limits
        ✓ Use appropriate categories
        ✓ Keep event information updated
        ✓ Engage with your attendees
        ✓ Share events across platforms
        ✓ Follow up with attendees after events
      `,
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: Calendar,
      content: `
        Q: Can I edit an event after creating it?
        A: Yes, you can edit most event details at any time.
        
        Q: How many people can attend an event?
        A: You set the maximum when creating the event.
        
        Q: Can I delete an event?
        A: Yes, event organizers can delete their events.
        
        Q: Is EventHub free?
        A: Yes, EventHub is free to use.
        
        Q: How do I contact support?
        A: Email us at support@eventhub.com
      `,
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
              <Link href="/events" className="text-white hover:text-blue-400 transition">Events</Link>
              <Link href="/create" className="text-white hover:text-blue-400 transition">Create Event</Link>
              <Link href="/docs" className="text-blue-400 hover:text-blue-300 transition font-semibold">Documentation</Link>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-slate-300">Learn how to use EventHub to manage your events</p>
        </div>

        {/* Table of Contents */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition group"
              >
                <IconComponent className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                  {section.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2">Learn more about {section.title.toLowerCase()}</p>
              </a>
            );
          })}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-8 scroll-mt-20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-8 h-8 text-blue-500" />
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* API Reference */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">API Reference</h2>
          <p className="text-slate-300 mb-6">
            EventHub provides a REST API for integrating event management into your applications.
          </p>
          
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <code className="text-blue-400">GET /api/events</code>
              <p className="text-slate-400 text-sm mt-2">Retrieve all events</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <code className="text-blue-400">GET /api/events/:id</code>
              <p className="text-slate-400 text-sm mt-2">Retrieve a specific event by ID</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <code className="text-blue-400">POST /api/events</code>
              <p className="text-slate-400 text-sm mt-2">Create a new event</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <code className="text-blue-400">PUT /api/events/:id</code>
              <p className="text-slate-400 text-sm mt-2">Update an event</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <code className="text-blue-400">DELETE /api/events/:id</code>
              <p className="text-slate-400 text-sm mt-2">Delete an event</p>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-blue-100 mb-6">Can't find what you're looking for? Contact our support team.</p>
          <a
            href="mailto:support@eventhub.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-slate-100 transition font-semibold inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>

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
