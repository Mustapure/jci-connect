import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - JCI Connect',
  description: 'Privacy Policy for JCI Connect platform',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-12">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl">
            🔒
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Last updated: December 1, 2024
          </p>
        </div>

        <div className="space-y-12 text-lg leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
JCI Connect ({'"we", "our", "us"'}) respects your privacy and is committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">jci-connect.com</Link>, 
              use our mobile application, or otherwise engage with our services.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By using JCI Connect, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">2. Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Full name, email address, phone number</li>
                  <li>• Profile photo and bio</li>
                  <li>• Location and professional details</li>
                  <li>• JCI chapter and membership ID</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Usage Data</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Device information and IP address</li>
                  <li>• Browser type and pages visited</li>
                  <li>• Time and date of interactions</li>
                  <li>• Event RSVPs and connections made</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">3. How We Use Your Information</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
              <li>• To create and manage your account</li>
              <li>• To connect you with other JCI members</li>
              <li>• To organize and promote events</li>
              <li>• To personalize your experience</li>
              <li>• To send important updates and newsletters</li>
              <li>• To improve our platform and services</li>
              <li>• To prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">4. Sharing Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We share your information only in these limited circumstances:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl border-l-4 border-emerald-400">
                  <span className="font-bold text-emerald-800 dark:text-emerald-200 text-lg">✅</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">With Your Consent</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">When you choose to make profile visible or share posts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border-l-4 border-blue-400">
                  <span className="font-bold text-blue-800 dark:text-blue-200 text-lg">🔒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Service Providers</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Email delivery, hosting, analytics (all GDPR compliant)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-2xl border-l-4 border-orange-400">
                  <span className="font-bold text-orange-800 dark:text-orange-200 text-lg">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Legal Requirements</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Court orders, law enforcement when required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-l-4 border-gray-400">
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">📈</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Aggregated Data</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Anonymous statistics for research</p>
                  </div>
                </div>
              </div>
            </div>
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 py-4 rounded-r-lg">
              {"We never sell your personal data to third parties"}
            </blockquote>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">5. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              You have full control over your data. Contact us to:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl border border-blue-200/50">
                <h4 className="font-bold text-xl text-blue-900 dark:text-blue-100 mb-2">📥 Access</h4>
                <p className="text-gray-700 dark:text-gray-300">Request copy of your data</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl border border-emerald-200/50">
                <h4 className="font-bold text-xl text-emerald-900 dark:text-emerald-100 mb-2">🗑️ Delete</h4>
                <p className="text-gray-700 dark:text-gray-300">Remove your account and data</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-2xl border border-orange-200/50">
                <h4 className="font-bold text-xl text-orange-900 dark:text-orange-100 mb-2">⚙️ Update</h4>
                <p className="text-gray-700 dark:text-gray-300">Correct inaccurate information</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl border border-purple-200/50">
                <h4 className="font-bold text-xl text-purple-900 dark:text-purple-100 mb-2">🚫 Object</h4>
                <p className="text-gray-700 dark:text-gray-300">Stop certain processing</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl border border-indigo-200/50">
                <h4 className="font-bold text-xl text-indigo-900 dark:text-indigo-100 mb-2">📧 Export</h4>
                <p className="text-gray-700 dark:text-gray-300">Download portable format</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">6. Data Security</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• End-to-end encryption for messages</li>
                <li>• HTTPS everywhere</li>
                <li>• Regular security audits</li>
                <li>• GDPR &amp; CCPA compliant</li>
                <li>• SOC 2 Type II certified infrastructure</li>
              </ul>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Two-factor authentication</li>
                <li>• Data stored in EU/US compliant regions</li>
                <li>• 90-day deletion after account removal</li>
                <li>• Bug bounty program active</li>
              </ul>
            </div>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-12 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Questions about this Privacy Policy? Contact our Data Protection Officer:
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-3xl">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div>
                  <p className="font-semibold text-2xl text-gray-900 dark:text-white mb-1">privacy@jci-connect.com</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Response within 48 hours</p>
                </div>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all whitespace-nowrap"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-16 pt-12 border-t border-gray-200/50 dark:border-gray-700/50 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © 2024 JCI Connect. All rights reserved. |{' '}
              <Link href="/terms" className="hover:text-blue-600 font-semibold">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

