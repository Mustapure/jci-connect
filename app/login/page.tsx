import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Login - JCI Connect',
  description: 'Sign in to your JCI Connect account',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans dark:from-gray-900 dark:to-black min-h-screen p-4">
      <main className="w-full max-w-md flex flex-col items-center py-12 px-8 bg-white/80 backdrop-blur-md dark:bg-black/50 rounded-3xl shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 text-3xl">
          🔑
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-2">
          Welcome Back
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-10">
          Sign in to continue connecting with leaders worldwide
        </p>

        <form className="w-full space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all"
              placeholder="your.email@jci.org"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500" />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Remember me</span>
            </label>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            Sign In
          </button>
        </form>

        <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-px mt-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="h-12 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                </svg>
                Google
              </button>
              <button className="h-12 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20.283 12c0-3.182-2.289-5.827-5.338-6.396V5.38h-3.672v7.848c0 .56.006 1.235.026 1.986h3.64v7.662h3.77l.6-7.662h5.332c-.065-.56-.1-1.13-.1-1.71z"/>
                </svg>
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            Sign up here
          </Link>
        </p>

        <p className="mt-6 text-xs text-gray-500 text-center dark:text-gray-500">
          Demo: user@jci.org / password123
        </p>
      </main>
    </div>
  );
}

