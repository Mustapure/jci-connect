import Link from 'next/link';

export const metadata = {
  title: 'Connect - JCI Connect',
  description: 'Network with JCI members worldwide',
};

export default function ConnectPage() {
  const featuredMembers = [
    {
      id: 1,
      name: 'Maria Gonzalez',
      role: 'Chapter President',
      location: 'Mexico City, MX',
      connections: 247,
      image: '/globe.svg'
    },
    {
      id: 2,
      name: 'Ahmed Khalil',
      role: 'VP Training',
      location: 'Cairo, EG',
      connections: 189,
      image: '/globe.svg'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Marketing Lead',
      location: 'Mumbai, IN',
      connections: 312,
      image: '/globe.svg'
    },
    {
      id: 4,
      name: 'Lucas Silva',
      role: 'Events Coordinator',
      location: 'São Paulo, BR',
      connections: 156,
      image: '/globe.svg'
    }
  ];

  const groups = [
    { id: 1, name: 'Leadership Development', members: 1245, image: '/globe.svg' },
    { id: 2, name: 'Young Entrepreneurs', members: 892, image: '/globe.svg' },
    { id: 3, name: 'Public Speaking', members: 673, image: '/globe.svg' }
  ];

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-purple-50 to-pink-50 font-sans dark:from-gray-900 dark:to-black min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Connect Globally
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            50K+ members ready to collaborate and grow together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Search & Filters */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl dark:bg-gray-800/50 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Find Members</h2>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, skills, location..."
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900/50 transition-all"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <button className="py-3 px-4 rounded-xl bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition-all dark:bg-purple-900/50 dark:text-purple-300">
                  Online
                </button>
                <button className="py-3 px-4 rounded-xl bg-pink-100 text-pink-800 font-semibold hover:bg-pink-200 transition-all dark:bg-pink-900/50 dark:text-pink-300">
                  Nearby
                </button>
                <button className="py-3 px-4 rounded-xl bg-emerald-100 text-emerald-800 font-semibold hover:bg-emerald-200 transition-all dark:bg-emerald-900/50 dark:text-emerald-300">
                  Leaders
                </button>
                <button className="py-3 px-4 rounded-xl bg-orange-100 text-orange-800 font-semibold hover:bg-orange-200 transition-all dark:bg-orange-900/50 dark:text-orange-300">
                  Entrepreneurs
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-3xl shadow-2xl">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-100">Active Members</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-8 rounded-3xl shadow-2xl">
              <div className="text-4xl font-bold mb-2">12M</div>
              <div className="text-emerald-100">Connections Made</div>
            </div>
          </div>
        </div>

        {/* Featured Members */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white">👥</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Members</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredMembers.map((member) => (
              <Link key={member.id} href={`/profile/${member.id}`} className="group bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/50 hover:shadow-2xl hover:-translate-y-2 hover:bg-white dark:bg-gray-800/50 dark:border-gray-700 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform flex items-center justify-center text-3xl">
                  🧑‍💼
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">{member.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mb-4">{member.location}</p>
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600 mb-4">
                  {member.connections}+ Connections
                </div>
                <button className="w-full h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all group-hover:scale-[1.02]">
                  Connect
                </button>
              </Link>
            ))}
          </div>
        </section>

        {/* Groups */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Join Groups</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {groups.map((group) => (
              <div key={group.id} className="group bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all dark:bg-gray-800/50 dark:border-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform">
                  👥
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">{group.name}</h3>
                <p className="text-center text-emerald-600 font-semibold mb-8">{group.members.toLocaleString()} members</p>
                <Link
                  href={`/groups/${group.id}`}
                  className="block w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-6 rounded-2xl font-semibold text-center hover:shadow-xl hover:from-indigo-600 hover:to-purple-600 transition-all"
                >
                  Join Group
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl mb-20">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Ready to Connect?
          </h3>
          <Link
            href="/dashboard"
            className="inline-flex h-14 px-12 items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:from-purple-700 hover:to-pink-700 transition-all text-lg"
          >
            Go to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}

