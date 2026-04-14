import Link from 'next/link';

export const metadata = {
  title: 'Events - JCI Connect',
  description: 'Discover upcoming JCI events worldwide',
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'National Convention 2025',
      location: 'Bangkok, Thailand',
      date: 'Mar 15-18, 2025',
      attendees: 1250,
      image: '/globe.svg',
      type: 'National'
    },
    {
      id: 2,
      title: 'Leadership Workshop',
      location: 'Online',
      date: 'Feb 5, 2025',
      attendees: 320,
      image: '/globe.svg',
      type: 'Online'
    },
    {
      id: 3,
      title: 'Local Chapter Meetup',
      location: 'Your City',
      date: 'Jan 25, 2025',
      attendees: 45,
      image: '/globe.svg',
      type: 'Local'
    }
  ];



  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-orange-50 to-yellow-50 font-sans dark:from-gray-900 dark:to-black min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Events Worldwide
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join 1K+ events. Network, learn, lead.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-200 font-semibold text-orange-700 hover:border-orange-300 hover:bg-orange-50 dark:bg-gray-800/50 dark:border-gray-700 dark:text-orange-400 transition-all">
            All Events
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-yellow-600 transition-all">
            Upcoming
          </button>
          <button className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 font-semibold text-gray-700 dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-300 hover:border-gray-300 transition-all">
            Online
          </button>
          <button className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 font-semibold text-gray-700 dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-300 hover:border-gray-300 transition-all">
            Local
          </button>
        </div>

        {/* Upcoming Events */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {event.type === 'World' ? '🌍' : event.type === 'National' ? '🏆' : event.type === 'Online' ? '💻' : '🏘️'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{event.location}</p>
                <p className="text-2xl font-bold text-emerald-600 mb-4">{event.date}</p>
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <span>👥 {event.attendees.toLocaleString()}</span>
                  <span>{event.type}</span>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/events/${event.id}`}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-6 rounded-2xl font-semibold text-center hover:shadow-xl hover:from-orange-600 hover:to-yellow-600 transition-all"
                  >
                    View Details
                  </Link>
                  <button className="w-12 h-12 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white dark:hover:bg-gray-600 transition-all">
                    ❤️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center py-20 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Create Your Event</h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Organize workshops, meetups, or conferences for your local chapter
          </p>
          <Link
            href="/dashboard?tab=events"
            className="inline-flex h-14 px-8 items-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:from-orange-700 hover:to-yellow-700 transition-all text-lg"
          >
            🛠️ Create Event
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-24 pt-20 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1.2K</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">98K</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">47</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.8⭐</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
          </div>
        </div>
      </main>
    </div>
  );
}

