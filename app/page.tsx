import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans dark:from-gray-900 dark:to-black min-h-screen">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center py-24 px-8 sm:py-32 sm:px-16 bg-white/80 backdrop-blur-md dark:bg-black/50 rounded-3xl mx-8 shadow-2xl sm:mx-0">
        <Image
          className="dark:invert mb-12"
          src="/globe.svg"
          alt="JCI Connect Global Network"
          width={120}
          height={120}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            JCI Connect
          </h1>
          <p className="max-w-2xl text-xl leading-9 text-gray-700 dark:text-gray-300">
            Your Global Social Network for Young Leaders. Join thousands worldwide to connect, share ideas, organize events, and grow together in the JCI community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">
            <span>🌍 50K+ Members</span>
            <span>📅 1K+ Events</span>
            <span>🔗 Global Reach</span>
          </div>
        </div>
        
        <section className="w-full mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Join JCI Connect?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                👥
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Find and network with fellow JCI members across the globe.</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                📅
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Events</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Discover, join, and create impactful events in your community.</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-700">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                💬
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Share</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Post updates, ideas, and achievements to inspire others.</p>
            </div>
          </div>
        </section>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <a
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-white font-semibold shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 md:w-auto"
            href="/signup"
          >
            🚀 Sign Up Free
          </a>
          <a
            className="flex h-14 w-full items-center justify-center rounded-2xl border-2 border-gray-200 px-8 font-semibold hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800/50 transition-all duration-300 md:w-auto"
            href="/login"
          >
            🔑 Login
          </a>
        </div>
        
        <p className="mt-16 text-sm text-gray-500 text-center dark:text-gray-500">
          Powered by Next.js and Tailwind CSS
        </p>
      </main>
    </div>
  );
}
