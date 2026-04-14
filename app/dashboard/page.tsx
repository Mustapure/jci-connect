import Link from 'next/link';

export const metadata = {
  title: 'Dashboard - JCI Connect',
  description: 'Your JCI Connect dashboard',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
              Welcome back, John! Here&apos;s what&apos;s happening.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard?tab=profile"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-3xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all whitespace-nowrap"
            >
              👤 Profile
            </Link>
            <Link
              href="/events"
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 font-bold rounded-3xl hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all whitespace-nowrap"
            >
              📅 Events
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="group bg-white/70 backdrop-blur-md dark:bg-gray-800/70 rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                👥
              </div>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-3 py-1 rounded-full">
                +12 this week
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">247</div>
            <div className="text-gray-600 dark:text-gray-400">Connections</div>
          </div>

          <div className="group bg-white/70 backdrop-blur-md dark:bg-gray-800/70 rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                📅
              </div>
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/50 px-3 py-1 rounded-full">
                3 upcoming
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">12</div>
            <div className="text-gray-600 dark:text-gray-400">Events</div>
          </div>

          <div className="group bg-white/70 backdrop-blur-md dark:bg-gray-800/70 rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                💬
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                8 unread
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">42</div>
            <div className="text-gray-600 dark:text-gray-400">Messages</div>
          </div>

          <div className="group bg-white/70 backdrop-blur-md dark:bg-gray-800/70 rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                👑
              </div>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-3 py-1 rounded-full">
                Level 7
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Silver</div>
            <div className="text-gray-600 dark:text-gray-400">Membership</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl dark:bg-gray-800/50 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                🚀 Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/dashboard?tab=post" className="group h-32 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:-translate-y-2 hover:from-purple-600 hover:to-pink-600 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✍️</div>
                  <div className="font-bold text-xl">Create Post</div>
                </Link>
                <Link href="/events" className="group h-32 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:-translate-y-2 hover:from-emerald-600 hover:to-teal-600 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📅</div>
                  <div className="font-bold text-xl">Find Events</div>
                </Link>
                <Link href="/connect" className="group h-32 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:-translate-y-2 hover:from-orange-600 hover:to-yellow-600 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <div className="font-bold text-xl">New Connections</div>
                </Link>
                <Link href="/dashboard?tab=groups" className="group h-32 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:-translate-y-2 hover:from-indigo-600 hover:to-blue-600 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
                  <div className="font-bold text-xl">Manage Groups</div>
                </Link>
                <Link href="/dashboard?tab=events" className="group h-32 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:-translate-y-2 hover:from-pink-600 hover:to-rose-600 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                  <div className="font-bold text-xl">My Events</div>
                </Link>
                <Link href="/dashboard?tab=profile" className="group h-32 bg-gradient-to-br from-gray-500 to-gray-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:-translate-y-2 hover:from-gray-600 hover:to-gray-700 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
                  <div className="font-bold text-xl">Settings</div>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl dark:bg-gray-800/50 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">📊 Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { type: 'Maria G. connected with you', time: '2 min ago', icon: '👥' },
                  { type: 'New message from Ahmed K.', time: '15 min ago', icon: '💬' },
                  { type: 'Leadership workshop RSVP confirmed', time: '1 hr ago', icon: '📅' },
                  { type: 'Your post got 23 reactions', time: '3 hrs ago', icon: '❤️' },
                  { type: 'Chapter President role verified', time: '1 day ago', icon: '✅' },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {activity.type}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors">→</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Summary */}
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-3xl p-8 shadow-2xl sticky top-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto mb-6 border-4 border-white/30 flex items-center justify-center text-4xl shadow-2xl">
                  🧑‍💼
                </div>
                <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                <p className="opacity-90 mb-1">Chapter President</p>
                <div className="inline-flex bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                  Silver Member
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Connections</span>
                  <span className="font-bold">247</span>
                </div>
                <div className="flex justify-between">
                  <span>Events</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Posts</span>
                  <span className="font-bold">89</span>
                </div>
                <div className="flex justify-between">
                  <span>Points</span>
                  <span className="font-bold">1,247</span>
                </div>
              </div>
              <Link
                href="/dashboard?tab=profile"
                className="w-full mt-8 bg-white/30 backdrop-blur-sm py-4 px-6 rounded-2xl font-bold hover:bg-white/50 transition-all border border-white/30 block text-center"
              >
                Edit Profile
              </Link>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/50 shadow-xl dark:bg-gray-800/50 dark:border-gray-700">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                📅 Upcoming
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'National Convention', date: 'Mar 15-18', location: 'Bangkok' },
                  { title: 'Leadership Workshop', date: 'Feb 5', location: 'Online' },
                ].map((event, idx) => (
                  <Link key={idx} href="/events/1" className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-2xl transition-colors -m-4">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">{event.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{event.date} • {event.location}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/50 shadow-xl dark:bg-gray-800/50 dark:border-gray-700">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">Navigation</h3>
              <nav className="space-y-2">
                {[
                  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
                  { href: '/dashboard?tab=profile', label: 'Profile', icon: '👤' },
                  { href: '/dashboard?tab=posts', label: 'My Posts', icon: '✍️' },
                  { href: '/dashboard?tab=events', label: 'My Events', icon: '📅' },
                  { href: '/dashboard?tab=connections', label: 'Connections', icon: '👥' },
                  { href: '/dashboard?tab=groups', label: 'Groups', icon: '🏛️' },
                  { href: '/dashboard?tab=settings', label: 'Settings', icon: '⚙️' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-2xl transition-colors text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

