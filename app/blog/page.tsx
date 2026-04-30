import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, MousePointer2 } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Blog — QuickTransfer Sharing Insights',
  description: 'Learn about safe file sharing, WeTransfer alternatives, and the future of anonymous data transfer. Expert tips for sending files online free.',
};

const blogPosts = [
  {
    slug: 'fastest-way-to-share-files',
    title: "Fastest Way to Share Multiple Files Online Free (No Sign-Up, Instant Transfer)",
    excerpt: "What's the fastest way to share multiple files online? Skip the email attachments and slow upload links. Here's the quickest method in 2026 — free and no account needed.",
    date: 'May 1, 2026',
    readTime: '5 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'expiring-file-sharing',
    title: "How to Share Files With Expiry Dates (Links That Auto-Expire in 2026)",
    excerpt: "Want to share files that automatically expire? Learn how to set expiration dates on shared files to protect your privacy and prevent unauthorized access.",
    date: 'May 1, 2026',
    readTime: '6 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'are-my-files-actually-deleted',
    title: "Are My Shared Files Actually Deleted? The Shocking Truth (2026)",
    excerpt: "When you delete a shared file, is it really gone? The truth might surprise you. Learn how file deletion actually works and which tools guarantee permanent deletion.",
    date: 'April 30, 2026',
    readTime: '7 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'cloud-storage-vs-file-sharing',
    title: "Cloud Storage vs File Sharing: What's the Difference? (2026 Guide)",
    excerpt: "Google Drive vs QuickTransfer — what's the difference between cloud storage and file sharing? Learn which tool to use and when for maximum efficiency and security.",
    date: 'April 30, 2026',
    readTime: '8 min read',
    category: 'Guides',
    image: '/blog/cloud-storage-vs-file-sharing.png'
  },
  {
    slug: 'file-sharing-mistakes',
    title: '7 File Sharing Mistakes That Put Your Data at Risk',
    excerpt: 'Are you making these dangerous file sharing mistakes? Learn how to send files securely without exposing your data. Tip #4 surprises most people.',
    date: 'May 1, 2026',
    readTime: '7 min read',
    category: 'Security',
    image: '/blog/file-sharing-mistakes.png'
  },
  {
    slug: 'easiest-way-to-share-files',
    title: 'Easiest Way to Share Files Online (No Tech Skills Needed)',
    excerpt: 'Need to send a file to someone who isn\'t tech-savvy? QuickTransfer is the simplest file sharing tool online. Just a 6-digit code — no apps, no accounts needed.',
    date: 'April 30, 2026',
    readTime: '4 min read',
    category: 'Tutorials',
    image: '/blog/easiest-way-to-share-files.png'
  },
  {
    slug: 'self-destructing-file-transfer',
    title: 'Self-Destructing File Transfer — Auto-Delete in 10 Min',
    excerpt: 'Send files that automatically delete after download. QuickTransfer creates self-destructing transfers with a 6-digit code. No account needed. 100% free.',
    date: 'April 29, 2026',
    readTime: '6 min read',
    category: 'Security',
    image: '/blog/self-destructing-file-transfer.png'
  },
  {
    slug: 'anonymous-file-sharing',
    title: 'Anonymous File Sharing Free — No Account Needed',
    excerpt: 'Share files anonymously online with zero registration. QuickTransfer lets you send files privately using a secure 6-digit code. No email, no tracking, no ads.',
    date: 'April 28, 2026',
    readTime: '5 min read',
    category: 'Privacy',
    image: '/blog/anonymous-file-sharing.png'
  },
  {
    slug: 'wetransfer-alternatives',
    title: '5 Best Free WeTransfer Alternatives in 2026 (No Sign-Up Required)',
    excerpt: 'Looking for a WeTransfer alternative? Compare the top 5 free file sharing tools with no sign-up required. Send files instantly in 2026.',
    date: 'April 19, 2026',
    readTime: '12 min read',
    category: 'Guides',
    image: '/blog/wetransfer-alternatives.png'
  },
  {
    slug: 'send-large-files',
    title: 'How to Send Large Files Without Email in 2026 (Free & No Account)',
    excerpt: 'Sharing huge files? Learn how to send large files free without email or registration. Compare QuickTransfer, Google Drive, and Dropbox.',
    date: 'April 19, 2026',
    readTime: '10 min read',
    category: 'Tutorials',
    image: '/blog/send-large-files.png'
  }
];

export default function BlogIndex() {
  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-6 border border-red-100 dark:border-red-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            QuickTransfer Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Sharing Insights <br />& <span className="text-red-500">File Tech</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Stay updated with the latest trends in secure file sharing, data privacy, and high-speed transfer technologies.
          </p>
        </div>

        {/* Featured Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-gray-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50 overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-red-500 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-red-500 group-hover:gap-3 transition-all">
                    Read Full Guide 
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="p-3 rounded-2xl bg-white dark:bg-slate-700 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <MousePointer2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories / Newsletter placeholder */}
        <div className="mt-24 p-12 rounded-[3.5rem] bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-3xl font-black mb-4">Never miss an update</h3>
              <p className="text-gray-400 leading-relaxed">
                Join our community of 10,000+ users and stay informed about the latest security tools and sharing guides.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
              <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
