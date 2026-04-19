import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Trash2, EyeOff, Globe, Server, UserCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Security & Privacy — QuickTransfer',
  description: 'QuickTransfer uses end-to-end encryption and ephemeral storage to keep your files private. No accounts, no tracking, no data retained.',
};

export default function SecurityPage() {
  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-red-50 dark:bg-red-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-100 dark:border-red-500/20 shadow-lg shadow-red-500/10">
            <Shield className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            How QuickTransfer Keeps Your Files Secure
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            At QuickTransfer, our entire architecture is built around the core principle of zero-knowledge sharing. 
            We provide a <strong className="text-red-500">secure file transfer</strong> environment where privacy is the default setting, not a premium feature.
          </p>
        </div>

        {/* Detailed Content Sections */}
        <div className="grid grid-cols-1 gap-12">
          
          <section className="group p-8 md:p-12 bg-gray-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-red-500/20 shrink-0">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">End-to-End Encryption</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Encryption is the primary line of defense in our model. When you initialize an <strong className="text-red-500 font-bold">encrypted file sharing</strong> session, 
                    the encryption process occurs locally within your browser. This means that before a single packet of your data leaves your local 
                    network, it has already been transformed into an unreadable cipher. We utilize industry-standard cryptographic protocols to 
                    ensure that the 6-digit code provided is the only master key required for restoration.
                  </p>
                  <p>
                    This browser-side approach is fundamentally more secure than server-side encryption because it ensures that our administrators 
                    and infrastructure providers have zero visibility into your content. By executing the heavy lifting of security on the edge (the user client), 
                    QuickTransfer bridges the gap between high-speed utility and enterprise-grade confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="group p-8 md:p-12 bg-gray-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:-rotate-6 transition-transform shadow-lg shadow-pink-500/20 shrink-0">
                <Trash2 className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">Ephemeral File Storage</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    In traditional cloud storage, data lives indefinitely unless manually deleted. We believe this "data hoarding" is a massive 
                    security risk. QuickTransfer utilizes a sophisticated ephemeral storage engine. Every <strong className="text-red-500 font-bold">private file transfer no account</strong> 
                    transaction is governed by a strict TTL (Time To Live) policy. 
                  </p>
                  <p>
                    Once the transaction window (ranging from 5 to 10 minutes) expires, or the recipient completes their one-time download, 
                    our global purge engine initiates a block-level wipe of the underlying data shards. This ensures that no "digital residue" 
                    is left waiting on our servers to be discovered by future threats. We don't just delete the pointers; we wipe the files.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-8 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-gray-100 dark:border-slate-700/50">
              <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/10">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">No Account = No Data Risk</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Most breaches happen because of stored user credentials. QuickTransfer avoids this entirely by requiring no registration. 
                We don't collect emails, passwords, or personal details. Because <strong className="italic">we never have your data</strong>, 
                it is impossible for it to be leaked, sold, or shared by us or any third party. This is the ultimate form of digital security.
              </p>
            </section>

            <section className="p-8 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-gray-100 dark:border-slate-700/50">
              <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-green-500/10">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">HTTPS & Secure Transmission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond file-level encryption, every interaction is wrapped in modern SSL/TLS (HTTPS) transmission protocols. 
                This protects your data from "man-in-the-middle" attacks and ensures that the connection between your device 
                and our edge workers is encrypted and untamperable. We use only the most secure TLS 1.2+ certificates.
              </p>
            </section>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-red-50 dark:bg-red-500/5 p-8 md:p-12 rounded-[3.5rem] border border-red-100 dark:border-red-500/10">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-10 text-center">Frequently Asked Security Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Are my files encrypted?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Yes. Every file uploaded is processed through AES-256 browser-side encryption. This ensures a truly <strong className="text-red-500">anonymous file sharing</strong> experience where even our servers cannot read your data.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Who can access my files?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Only someone who has the unique 6-digit code generated for that specific transfer. We do not store a directory of files, and we do not provide search tools to find existing transfers.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">How long are files stored?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Files are kept for an absolute maximum of 10 minutes. This window is intentionally short to provide temporary utility 
                while enforcing a zero-knowledge data retention policy.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Do you keep logs?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                No. We do not track IP addresses, physical locations, or browser fingerprints. Our internal logs contain only service 
                uptime data and success/failure metrics that are completely anonymized.
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center pt-8 border-t border-gray-100 dark:border-slate-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Trust is earned through transparency. Try our platform and experience the difference of a privacy-first utility.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-500/20 group"
          >
            Start Secure Transfer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
