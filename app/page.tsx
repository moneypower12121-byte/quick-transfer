import React from 'react';
import HomeClient from '../components/HomeClient';
import { Rocket, Shield, Clock, Smartphone, FileUp, Zap } from 'lucide-react';

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
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

          {/* Detailed SEO Feature Grid Section */}
          <section className="py-24 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                  The Best Way to Send <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Large Files Online</span> for Free
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature 1: Simplicity */}
                <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-red-50 dark:bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">No Account, No Hassle</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    In today's fast-paced digital world, sharing files should be as easy as sending a text message. Many services require you to jump through hoops—creating accounts and verifying emails. QuickTransfer provides a streamlined, browser-based solution for <strong>sending large files online without login</strong> or registration.
                  </p>
                </div>

                {/* Feature 2: Security */}
                <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-700/50 hover:border-pink-200 dark:hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-pink-50 dark:bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Secure 6-Digit Codes</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our system utilizes a secure 6-digit code architecture. No long, complicated URLs that can be intercepted. Coupled with <strong>end-to-end encryption</strong>, your data remains protected. Once the recipient enters the code, the file is streamed directly, ensuring the fastest speeds.
                  </p>
                </div>

                {/* Feature 3: Compatibility */}
                <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-red-50 dark:bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Cross-Platform Sync</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our tool bridges the gap between operating systems. Effortlessly start a transfer on an Android smartphone and pick it up on a MacBook. No native apps to download and no background processes—everything is contained within your <strong>secure browser session</strong>.
                  </p>
                </div>

                {/* Feature 4: Privacy */}
                <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-700/50 hover:border-pink-200 dark:hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-pink-50 dark:bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Ephemeral Storage</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We treat your files as transient packets. Automated cleanup scripts ensure no shard of your data remains on our platform longer than necessary. This ephemeral approach makes QuickTransfer one of the most privacy-conscious <strong>free file sharing tools</strong> available today.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
