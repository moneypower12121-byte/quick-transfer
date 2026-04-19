import React from 'react';
import Link from 'next/link';
import { 
  HelpCircle, 
  Book, 
  Shield, 
  Zap, 
  FileText, 
  Download, 
  Clock, 
  Smartphone, 
  Lock, 
  AlertCircle,
  RefreshCw,
  WifiOff,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Help Center - QuickTransfer Support',
  description: 'Learn how to send files online free without signup. Get support for secure file sharing, 6-digit code transfers, and troubleshooting.',
};

export default function HelpPage() {
  const faqs = [
    {
      q: "How do I share a file?",
      a: "Sharing is designed to be effortless. Simply drag and drop your file into the 'Send' card on our homepage. Once the upload is complete, our system generates a unique 6-digit code transfer key. You can then copy this code or the direct link to share with your recipient instantly via any messaging app.",
      icon: <Zap className="w-6 h-6 text-red-500" aria-label="upload file icon" />
    },
    {
      q: "Is it really secure?",
      a: "Yes, security is our core priority. Every file you upload is protected by end-to-end encryption during the transit process. The secure 6-digit code acts as a private key that only the recipient can use to access the data. We use industry-standard protocols to ensure your secure file sharing experience is never compromised.",
      icon: <Shield className="w-6 h-6 text-red-500" aria-label="secure encrypted file transfer" />
    },
    {
      q: "What is the maximum file size?",
      a: "Currently, QuickTransfer allows you to send files up to 100MB per transfer for free. This limit is perfect for documents, photographs, and even high-quality short videos. If you need to send larger archives, we suggest splitting them into multiple transfers to maintain optimal upload speeds.",
      icon: <Book className="w-6 h-6 text-red-500" aria-hidden="true" />
    },
    {
      q: "How long do codes last?",
      a: "By default, your transfer codes and files expire exactly 10 minutes after a successful upload. This auto-deletion policy ensures that your data doesn't sit on our servers indefinitely, providing a truly ephemeral and private way to send files online free without leaving a digital footprint.",
      icon: <HelpCircle className="w-6 h-6 text-red-500" aria-hidden="true" />
    },
    {
      q: "What file types can I send?",
      a: "QuickTransfer is extremely versatile and supports almost any file format imaginable. From standard PDF and Word documents to complex ZIP archives, MP4 videos, and RAW image files. As long as the file is within the 100MB limit, our platform can process and deliver it securely.",
      icon: <FileText className="w-6 h-6 text-red-500" aria-hidden="true" />
    },
    {
      q: "Is there a download limit per code?",
      a: "To ensure your data remains secure and private, each 6-digit code is typically restricted to a single successful download session. Once the recipient has successfully retrieved the file, the code and the underlying data are flagged for immediate deletion from our temporary staging servers.",
      icon: <Download className="w-6 h-6 text-red-500" aria-label="download file instantly" />
    },
    {
      q: "What happens if the recipient doesn't download in time?",
      a: "If the 10-minute window closes before the recipient enters the code, the transfer will automatically expire for security reasons. In this case, you will simply need to upload the file again on the homepage to generate a fresh, new code to share.",
      icon: <Clock className="w-6 h-6 text-red-500" aria-label="6-digit secure transfer code" />
    },
    {
      q: "Can I use QuickTransfer on mobile?",
      a: "Absolutely! QuickTransfer is a progressive web-based tool, meaning it works flawlessly on any smartphone or tablet browser. Whether you are on iOS or Android, you can enjoy a seamless no sign-up file transfer experience without ever needing to download a native application.",
      icon: <Smartphone className="w-6 h-6 text-red-500" aria-label="transfer files between devices" />
    },
    {
      q: "Is QuickTransfer safe for sensitive documents?",
      a: "We have built our architecture around the principle of zero-knowledge sharing. Since we don't ask for your email or personal details, and all files are encrypted and automatically purged, QuickTransfer is one of the safest platforms for sharing transient, sensitive documents that shouldn't live in the cloud forever.",
      icon: <Lock className="w-6 h-6 text-red-500" aria-label="secure encrypted file transfer" />
    }
  ];

  const troubleshooting = [
    {
      title: "My code is not working",
      desc: "Double-check the 6 digits carefully. Codes are case-sensitive where applicable and expire after 10 minutes. If it fails, the file has likely been deleted for your protection.",
      icon: <AlertCircle className="w-5 h-5" aria-hidden="true" />
    },
    {
      title: "File upload is stuck",
      desc: "This is usually caused by a momentary loss of internet connection. Try refreshing the browser and restarting the upload; our system handles resume-style attempts where possible.",
      icon: <RefreshCw className="w-5 h-5" aria-hidden="true" />
    },
    {
      title: "Transfer was slow",
      desc: "Upload speed depends on your local internet connection. For the best experience, ensure you are on a stable Wi-Fi network rather than a congested mobile data connection.",
      icon: <WifiOff className="w-5 h-5" aria-hidden="true" />
    }
  ];

  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Help Center — QuickTransfer Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            QuickTransfer is a premier <strong className="text-red-500">no sign-up file transfer</strong> service designed for users who value speed and total anonymity. 
            Whether you're a professional sending client assets or a student sharing homework, we provide a 
            <strong className="text-red-500"> secure file sharing</strong> environment that works entirely in your browser.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-gray-100 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-white dark:bg-slate-700 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {faq.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Troubleshooting Section */}
        <div className="bg-red-50 dark:bg-red-500/5 p-8 md:p-12 rounded-[2.5rem] border border-red-100 dark:border-red-500/10">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Troubleshooting</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Common solutions for technical hurdles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {troubleshooting.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3 text-red-500">
                  {item.icon}
                  <h4 className="font-bold text-gray-800 dark:text-white">{item.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8 border-t border-gray-100 dark:border-slate-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Still have questions? Our platform is designed to be self-explanatory. The best way to learn is to try it yourself.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-500/20 group"
          >
            Send Files Online Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
