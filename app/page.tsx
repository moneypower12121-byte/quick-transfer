import React from 'react';
import HomeClient from '../components/HomeClient';
import { Rocket, Shield, Clock, Smartphone, FileUp, Zap } from 'lucide-react';

export const dynamic = "force-static";

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to send files without login?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can use QuickTransfer to send files instantly without creating an account. Simply upload your file, receive a 6-digit code, and share it with the recipient."
        }
      },
      {
        "@type": "Question",
        "name": "Is QuickTransfer free and secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, QuickTransfer is completely free to use. All transfers are encrypted, and files are automatically deleted after expiration or download to ensure your privacy."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum file size limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, QuickTransfer supports files up to 100MB per transfer for free users. This is perfect for documents, photos, and high-quality videos."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-100 dark:bg-red-500/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-100 dark:bg-purple-500/10 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-transparent dark:bg-blue-500/5 rounded-full blur-3xl opacity-0 dark:opacity-100 -z-10" />

        {/* Client Interactive Section */}
        <HomeClient />

        {/* SEO Static Content Sections */}
        <div className="max-w-7xl mx-auto px-4 mt-24 space-y-24">
          
          {/* How It Works Section */}
          <section id="how-it-works" className="py-16 scroll-mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-6">How QuickTransfer Works</h2>
              <p className="text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience the simplest file sharing process on the web. We've eliminated the friction of sign-ups and email verification so you can focus on moving your data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl custom-shadow border border-gray-100 dark:border-slate-700/50 text-center group hover:bg-red-50/50 dark:hover:bg-red-500/5 transition-all">
                <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-lg shadow-red-500/20">
                  <FileUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Upload Your File</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Drag and drop any document, image, or video directly into your browser. Your data is prepared for secure transfer instantly using edge-optimized workers.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl custom-shadow border border-gray-100 dark:border-slate-700/50 text-center group hover:bg-red-50/50 dark:hover:bg-red-500/5 transition-all">
                <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:-rotate-12 transition-transform shadow-lg shadow-red-500/20">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Get Your Code</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A unique 6-digit alphanumeric code is generated just for your transfer. This code acts as a secure key that only you and your recipient possess.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl custom-shadow border border-gray-100 dark:border-slate-700/50 text-center group hover:bg-red-50/50 dark:hover:bg-red-500/5 transition-all">
                <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-lg shadow-red-500/20">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. Download Instantly</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The recipient enters the code on any device to start the download. No apps to install or accounts to create – it just works in the browser.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-purple-900/10 rounded-[3rem] px-8 md:px-16 border border-red-100 dark:border-red-900/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-8">Why Use QuickTransfer?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm h-fit">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">Privacy First Architecture</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">We don't track who you are. Your files are yours alone, and we delete them from our ephemeral storage the moment they expire.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm h-fit">
                      <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">Zero Wait Time</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">No "waiting for worker" screens or throttled speeds. QuickTransfer utilizes global CDN nodes to ensure your file reaches the destination as fast as your fiber allows.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm h-fit">
                      <Rocket className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">Multi-Device Compatible</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Transfer files from your iPhone to your Windows PC, or from your Mac to an Android tablet effortlessly. If it has a browser, it has QuickTransfer.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 dark:border-white/5">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6 divide-y divide-gray-100 dark:divide-slate-700">
                    <div className="pt-0">
                      <p className="font-bold text-gray-800 dark:text-white mb-2">Is it free to use?</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Yes, QuickTransfer is 100% free with no hidden subscriptions or data collection. We believe in open, fast utility for everyone.</p>
                    </div>
                    <div className="pt-6">
                      <p className="font-bold text-gray-800 dark:text-white mb-2">What happens to my files?</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Files are automatically purged from our servers after the chosen expiration time or immediately after the maximum allowed downloads.</p>
                    </div>
                    <div className="pt-6">
                      <p className="font-bold text-gray-800 dark:text-white mb-2">Do I need an account?</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Never. We don't ask for your name, email, or any personal details. Just drag, drop, and share.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed SEO Paragraph Section */}
          <section className="py-24 max-w-4xl mx-auto border-t border-gray-100 dark:border-slate-800">
             <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-8">The Best Way to Send Large Files Online for Free</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  In today's fast-paced digital world, sharing files should be as easy as sending a text message. Yet, many services require you to jump through hoops—creating accounts, verifying email addresses, and dodging invasive advertisements. QuickTransfer was built to solve this problem. Our platform provides a streamlined, browser-based solution for **sending large files online without login** or registration. Whether you need to transfer a high-resolution project to a client or send a collection of vacation photos to a friend, QuickTransfer handles it with speed and security.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Our system utilizes a secure 6-digit code architecture. This means you don't have to share long, complicated URLs that can be intercepted or guessed. Instead, you get a short, memorable key that confirms you are the intended sender. Coupled with our **end-to-end encryption**, your data remains private and protected during the entire transit process. Once the recipient enters the code, the file is streamed directly to their device, ensuring the fastest possible download speeds regardless of geographic location.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  One of the standout features of QuickTransfer is its **cross-platform compatibility**. Since our tool runs entirely in the browser, it bridges the gap between different operating systems. You can effortlessly start a transfer on an Android smartphone and pick it up on a MacBook, or send complex zip archives from a Linux server to a Windows workstation. There are no native apps to download and no background processes to worry about—everything is contained within your secure browser session.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Security is not just a feature; it's our foundation. QuickTransfer employs advanced temporary storage management. Unlike cloud storage providers that keep your data indefinitely, we treat your files as transient packets. You can set custom expiry times, and our automated cleanup scripts ensure that no shard of your data remains on our platform longer than necessary. This ephemeral approach makes QuickTransfer one of the most privacy-conscious **free file sharing tools** available today.
                </p>
             </div>
          </section>
        </div>
      </main>
    </>
  );
}
