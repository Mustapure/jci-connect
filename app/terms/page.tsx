import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - JCI Connect',
  description: 'Terms of Service for JCI Connect platform',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-12">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl">
            📜
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Effective: December 1, 2024
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
By accessing and using JCI Connect (the {"Service"}), operated by JCI Connect Inc. ("us", "we", 
or "our"), you agree to be bound by these Terms of Service ("Terms"), our{' '}
              <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-semibold">Privacy Policy</Link>, 
              and all applicable laws and regulations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-6">
              If you do not agree with any part of these Terms, you must not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">2. Eligibility</h2>
            <p className="text-gray-700 dark:text-gray-300">
              You must be at least 18 years old and a verified member of Junior Chamber International (JCI) to create an account. 
              By using the Service, you represent that you meet these requirements and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">3. Account Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4 p-6 bg-emerald-50/80 dark:bg-emerald-900/30 rounded-2xl border border-emerald-200/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">✅ Your Duties</h3>
                <ul className="list-disc list-inside space-y-2 text-emerald-800 dark:text-emerald-200 text-lg">
                  <li>Keep your password confidential</li>
                  <li>Provide accurate information</li>
                  <li>Verify your JCI membership</li>
                  <li>Notify us of unauthorized access</li>
                </ul>
              </div>
              <div className="space-y-4 p-6 bg-orange-50/80 dark:bg-orange-900/30 rounded-2xl border border-orange-200/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100">⚠️ Our Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200 text-lg">
                  <li>Suspend accounts for violations</li>
                  <li>Remove inappropriate content</li>
                  <li>Terminate repeat offenders</li>
                  <li>Verify membership status</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">4. Acceptable Use</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              You agree not to use the Service for:
            </p>
            <div className="grid md:grid-cols-2 gap-6 p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl border border-red-200/50">
              <ul className="list-disc list-inside space-y-3 text-red-800 dark:text-red-200 text-lg md:col-span-1">
                <li>Illegal activities</li>
                <li>Harassment or bullying</li>
                <li>Spam or commercial solicitation</li>
                <li>False information or impersonation</li>
              </ul>
              <ul className="list-disc list-inside space-y-3 text-red-800 dark:text-red-200 text-lg md:col-span-1">
                <li>Hate speech or discrimination</li>
                <li>Adult content</li>
                <li>Violence incitement</li>
                <li>Copyright infringement</li>
              </ul>
            </div>
            <blockquote className="border-l-8 border-emerald-400 bg-emerald-50 dark:bg-emerald-900/50 pl-8 py-6 my-12 italic rounded-r-2xl">
              Violations result in immediate account suspension and potential legal action.
            </blockquote>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">5. Content Ownership</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You retain ownership of content you post. By posting, you grant us a worldwide, non-exclusive, royalty-free license to:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-blue-50/80 dark:bg-blue-900/30 rounded-2xl border border-blue-200/50">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-lg">Display</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">On our platform</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-bold text-lg">Distribute</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">To other members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔧</div>
                <div className="font-bold text-lg">Adapt</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">For functionality</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">6. Service Availability</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
<strong>{'"AS IS" Basis:'}</strong> No warranty of uninterrupted access</li>
              <li><strong>Maintenance:</strong> Scheduled downtime with advance notice</li>
              <li><strong>Backups:</strong> Daily automatic backups retained 30 days</li>
              <li><strong>Uptime:</strong> 99.9% SLA guarantee</li>
              <li><strong>Force Majeure:</strong> Not liable for events beyond control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">7. Termination</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">You Can:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Delete account anytime (irreversible)</li>
                  <li>Download data export first</li>
                  <li>Data purged within 90 days</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">We Can:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Suspend for violations (7-day appeal)</li>
                  <li>Terminate repeat offenders permanently</li>
                  <li>No refunds (free service)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">8. Limitation of Liability</h2>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl mb-8">
              <p className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW</p>
              <p className="text-lg font-semibold text-center text-orange-800 dark:text-orange-200">
                JCI Connect is not liable for indirect, incidental, or consequential damages.
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Total liability shall not exceed $100 USD or the amount paid (whichever greater).
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">9. Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              These Terms are governed by Delaware, USA law. Disputes resolved in Delaware courts.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              JCI retains right to modify Terms (notice via email/app). Continued use = acceptance.
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-12 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-3xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                <div>
                  <p className="font-bold text-2xl text-emerald-900 dark:text-emerald-100 mb-1">legal@jci-connect.com</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Legal Department</p>
                </div>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all whitespace-nowrap"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200/50 dark:border-gray-700/50 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-500">
            © 2024 JCI Connect. All rights reserved. |{' '}
            <Link href="/privacy" className="hover:text-emerald-600 font-semibold">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

