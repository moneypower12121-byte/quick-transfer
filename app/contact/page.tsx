import React from 'react';
import { Mail, MessageSquare, Twitter } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - QuickTransfer',
  description: 'Get in touch with the QuickTransfer team for support or feedback.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 px-4 pt-32 pb-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-8 text-center">Contact Us</h1>
        
        <p className="text-xl text-gray-500 dark:text-gray-300 text-center mb-12">
          Have a question or feedback? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="mailto:support@quicktransfer.site" className="flex flex-col items-center p-8 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
            <Mail className="w-8 h-8 text-red-500 mb-4" aria-label="contact support via email" />
            <h3 className="font-bold text-gray-800 dark:text-white">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Reach out via email</p>
          </a>
          
          <div className="flex flex-col items-center p-8 bg-gray-50 dark:bg-slate-700/50 rounded-2xl">
            <Twitter className="w-8 h-8 text-red-500 mb-4" aria-label="follow us on twitter" />
            <h3 className="font-bold text-gray-800 dark:text-white">Twitter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Follow us for updates</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-50 dark:bg-slate-700/50 rounded-2xl">
            <MessageSquare className="w-8 h-8 text-red-500 mb-4" aria-label="live support chat" />
            <h3 className="font-bold text-gray-800 dark:text-white">Live Support</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}
