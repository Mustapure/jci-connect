import { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - JCI Connect',
  description: 'Get in touch with JCI Connect support team',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Message sent! We\'ll reply within 24 hours.');
    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-900 dark:to-black min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <main className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-24">
          <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-12 text-4xl shadow-2xl">
            💬
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <section className="bg-white/70 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-2xl dark:bg-gray-800/50 dark:border-gray-700 sticky top-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all text-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all text-lg"
                  placeholder="your.email@jci.org"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 transition-all text-lg"
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:focus:bg-gray-900 resize-vertical transition-all text-lg"
                  placeholder="Tell us more about your question or feedback..."
                />
              </div>

              <button
                type="submit"
                disabled={!!status}
                className="w-full h-16 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status ? '✅ Sent!' : 'Send Message'}
              </button>
            </form>

            {status && (
              <div className="mt-6 p-6 bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-emerald-800 dark:text-emerald-200 text-center font-semibold">
                {status}
              </div>
            )}
          </section>

          {/* Contact Info */}
          <section className="space-y-12">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-2xl dark:bg-gray-800/50 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📧 Email Support</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white">
                    💌
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">support@jci-connect.com</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">General inquiries - 24h response</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white">
                    🛠️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">help@jci-connect.com</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Technical support</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white">
                    👑
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">premium@jci-connect.com</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">VIP / Chapter accounts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-2xl dark:bg-gray-800/50 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📱 Other Channels</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📱</div>
                  <div className="font-bold text-xl mb-1">Mobile App</div>
                  <p className="opacity-90">Download on App Store &amp; Play Store</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                  <div className="font-bold text-xl mb-1">Live Chat</div>
                  <p className="opacity-90">Available 9AM-6PM UTC</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group md:col-span-2">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                  <div className="font-bold text-xl mb-1">Phone Support</div>
                  <p className="opacity-90">+1 (555) 123-JCI1 (Business hours)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10 rounded-3xl shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">🌍</div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <p className="opacity-90">Email Support</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">⭐</div>
                  <div className="text-3xl font-bold mb-2">4.9</div>
                  <p className="opacity-90">Avg Rating</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">⚡</div>
                  <div className="text-3xl font-bold mb-2"><24h</div>
                  <p className="opacity-90">Response Time</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

