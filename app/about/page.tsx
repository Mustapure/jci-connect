import Link from 'next/link';

export const metadata = {
  title: 'About - JCI Connect',
  description: 'Learn about JCI Connect and our mission',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-black min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <main className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-24">
          <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-12 text-5xl shadow-2xl">
            🌍
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
            About JCI Connect
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The global social platform empowering 50K+ young leaders to connect, collaborate, and create impact.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our Mission</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-6xl mb-8">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Create Opportunities</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                JCI Connect brings together young active citizens aged 18-40 from 47 countries. We provide the platform for you to develop skills, network globally, and lead positive change in communities worldwide.
              </p>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center font-bold text-white flex-shrink-0 mt-0.5">1</div>
                  <span>Develop personal skills</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center font-bold text-white flex-shrink-0 mt-0.5">2</div>
                  <span>Network internationally</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center font-bold text-white flex-shrink-0 mt-0.5">3</div>
                  <span>Lead community projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-md rounded-3xl p-12 border border-indigo-200/50 shadow-2xl dark:border-indigo-800/50">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">🌍</div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">47</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">50K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Members</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">📅</div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">1K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Events</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">10Y</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">💬</div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">2M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Connections</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">⭐</div>
                    <div className="font-bold text-xl text-gray-900 dark:text-white">4.9</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-xl">1915</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">JCI Founded</div>
              <p className="text-gray-600 dark:text-gray-400">Junior Chamber International established in St. Louis, USA</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-xl">1944</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">UN Partnership</div>
              <p className="text-gray-600 dark:text-gray-400">NGO status with United Nations Economic and Social Council</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-xl">2024</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">JCI Connect</div>
              <p className="text-gray-600 dark:text-gray-400">Modern digital platform connecting Jaycees worldwide</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-4xl text-white font-bold">CEO</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Founder & CEO</p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-4xl text-white font-bold">CTO</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mike Chen</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Chief Technology Officer</p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-4xl text-white font-bold">CMO</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ana Rodriguez</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Chief Marketing Officer</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-4xl">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Make an Impact?</h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of young leaders creating positive change worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="h-14 px-12 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:from-indigo-700 hover:to-blue-700 transition-all flex items-center justify-center text-lg"
            >
              🚀 Get Started
            </Link>
            <Link
              href="/connect"
              className="h-14 px-12 border-2 border-gray-200 font-bold rounded-3xl hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center text-lg"
            >
              👥 Browse Members
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

