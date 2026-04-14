import Link from 'next/link';

export const metadata = {
  title: 'Sign Up - JCI Connect',
  description: 'Join JCI Connect - Global network for young leaders',
};

export default function SignupPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 font-sans dark:from-gray-900 dark:to-black min-h-screen p-4">
      <main className="w-full max-w-md flex flex-col items-center py-12 px-8 bg-white/80 backdrop-blur-md dark:bg-black/50 rounded-3xl shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-8 text-3xl">
          🚀
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-2">
          Join the Network
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-10">
          Create your free account and connect with 50K+ leaders worldwide
        </p>

        <form className="w-full space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all"
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
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all"
              placeholder="Create strong password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all"
              placeholder="Repeat password"
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" required className="rounded border-gray-300 text-emerald-600 shadow-sm focus:ring-emerald-500" />
              <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                I agree to the{' '}
                <a href="/terms" className="text-emerald-600 hover:text-emerald-700 font-semibold">Terms</a> and{' '}
                <a href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-semibold">Privacy Policy</a>
              </span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-emerald-600 shadow-sm focus:ring-emerald-500" />
              <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Receive JCI event updates</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
            Sign in here
          </Link>
        </p>
      </main>
    </div>
  );
}

