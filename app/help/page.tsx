import React from 'react';
import { HelpCircle, Book, Shield, Zap } from 'lucide-react';

export const metadata = {
  title: 'Help Center - QuickTransfer',
  description: 'Find answers to common questions and learn how to use QuickTransfer.',
};

export default function HelpPage() {
  const faqs = [
    {
      q: "How do I share a file?",
      a: "Simply drag and drop your file into the 'Send' card on the homepage. Once uploaded, you'll get a 6-digit code. Share this code with the recipient.",
      icon: <Zap className="w-6 h-6 text-red-500" />
    },
    {
      q: "Is it really secure?",
      a: "Yes. Files are encrypted during transfer and storage. The 6-digit code acts as a private key for the recipient.",
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      q: "What is the maximum file size?",
      a: "Currently, you can share files up to 100MB per transfer for free.",
      icon: <Book className="w-6 h-6 text-red-500" />
    },
    {
      q: "How long do codes last?",
      a: "By default, codes expire in 10 minutes. This ensures your data doesn't sit on our servers longer than necessary.",
      icon: <HelpCircle className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-4">Help Center</h1>
          <p className="text-xl text-gray-500 dark:text-gray-300">Quick answers to common questions about QuickTransfer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700/50">
              <div className="bg-red-50 dark:bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {faq.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
