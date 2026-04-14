import Link from 'next/link';

export const metadata = {
  title: 'Profile - JCI Connect',
  description: 'Your JCI Connect profile',
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-75"></div>
          <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-start lg:items-center">
            {/* Profile Image & Stats */}
            <div className="lg:col-span-1 text-center lg:text-left lg:order-1">
              <div className="w-40 h-40 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-full mx-auto lg:mx-0 border-8 border-white/30 shadow-2xl mb-8 flex items-center justify-center text-6xl">
                🧑‍💼
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">John Doe</h1>
                <p className="text-xl opacity-90">Chapter President</p>
                <p className="text-2xl font-bold">Mexico City Chapter</p>
                <div className="flex gap-6 justify-center lg:justify-start mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1.2K</div>
                    <div className="text-sm opacity-80">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">247</div>
                    <div className="text-sm opacity-80">Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">89</div>
                    <div className="text-sm opacity-80">Posts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio & Actions */}
            <div className="lg:col-span-2 lg:order-2">
              <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 border border-white/40 mb-8">
                <p className="text-xl leading-relaxed opacity-95 mb-8">
                  Passionate JCI leader with 8+ years experience organizing impactful events and mentoring young professionals. 
                  Currently serving as Chapter President for Mexico City, driving community development projects and international collaborations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href="/dashboard?tab=edit"
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all flex items-center gap-3"
                  >
                    ✏️ Edit Profile
                  </Link>
                  <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-white/80 shadow-lg hover:shadow-xl transition-all flex items-center gap-3">
                    📤 Share Profile
                  </button>
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center gap-3">
                    💼 Verify Role
                  </button>
                </div>
              </div>

              {/* Skills & Interests */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 opacity-95">🎯 Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Public Speaking', 'Leadership', 'Event Planning', 'Networking', 'Project Management', 'Mentoring'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-xl font-semibold border border-white/40 hover:bg-white/40 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 opacity-95">🌍 Interests</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Sustainability', 'Entrepreneurship', 'Community Service', 'Youth Development', 'International Relations'].map((interest) => (
                      <span key={interest} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl font-semibold text-sm border border-white/20 hover:bg-white/30 transition-all">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/20 mb-12 overflow-x-auto pb-4 -mx-6 px-6">
          {[
            { href: '#posts', label: 'Posts', count: 89 },
            { href: '#events', label: 'Events', count: 12 },
            { href: '#connections', label: 'Connections', count: 247 },
            { href: '#groups', label: 'Groups', count: 5 },
            { href: '#reviews', label: 'Reviews', count: 28 },
          ].map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex items-center gap-2 px-6 py-4 font-bold text-white/90 hover:text-white border-b-4 border-transparent hover:border-white/50 transition-all whitespace-nowrap flex-shrink-0 mr-2 last:mr-0 bg-white/5 backdrop-blur-sm rounded-2xl"
            >
              {tab.label}
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-bold">{tab.count}</span>
            </Link>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Posts Section */}
          <section className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">✍️ Recent Posts</h2>
            <div className="space-y-6">
              {[
                {
                  content: 'Thrilled to announce our chapter raised $15K for local education projects! Grateful for 120 volunteers. #JCIImpact #CommunityFirst',
                  reactions: 127,
                  comments: 34,
                  time: '2h ago'
                },
                {
                  content: 'Reminder: Leadership workshop tomorrow! Still 15 spots available. DM for details. #Leadership #JCI',
                  reactions: 89,
                  comments: 22,
                  time: '1d ago'
                },
              ].map((post, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all dark:bg-gray-800/60 dark:border-gray-700">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                      JD
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">John Doe</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2h ago</p>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-8 whitespace-pre-wrap">{post.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm">
                      <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                        ❤️ {post.reactions}
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                        💬 {post.comments}
                      </button>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-sm">
                      ...
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Events Section */}
          <section className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">📅 Events Organized</h2>
            <div className="space-y-4">
              {[
                { title: 'National Convention 2025', role: 'Organizer', date: 'Mar 15-18', status: 'Confirmed 1.2K attendees' },
                { title: 'Leadership Workshop', role: 'Host', date: 'Feb 5', status: '320 registered' },
                { title: 'Chapter Meetup', role: 'Speaker', date: 'Jan 25', status: '45 attending' },
              ].map((event, idx) => (
                <Link key={idx} href="#" className="block p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-white dark:bg-gray-800/60 dark:border-gray-700 group">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{event.title}</h4>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold mb-2">{event.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{event.date}</p>
                  <p className="text-xs bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full font-semibold">
                    {event.status}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Recommendations */}
        <section className="bg-white/70 backdrop-blur-md rounded-4xl p-12 border border-white/50 shadow-2xl dark:bg-gray-800/50 dark:border-gray-700 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-8">🎉</div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Great Profile!</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              Your profile is 95% complete. Add your professional experience and current projects to connect with more leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard?tab=edit"
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-indigo-700 transition-all text-lg"
              >
                Complete Profile
              </Link>
              <Link
                href="/connect"
                className="px-12 py-5 border-2 border-gray-200 font-bold rounded-3xl hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800/50 transition-all text-lg"
              >
                Find Connections
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

