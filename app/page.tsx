import Header from "@/components/Header";
import HomeClient from "@/components/HomeClient";
import { Rocket, Send, AlertCircle, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col hero-gradient dark:bg-slate-900">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-100 dark:bg-red-500/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-100 dark:bg-purple-500/10 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-transparent dark:bg-blue-500/5 rounded-full blur-3xl opacity-0 dark:opacity-100 -z-10" />

        {/* This is the interactive UI */}
        <HomeClient />

        {/* SEO CONTENT SECTION - STATICALLY RENDERED FOR GOOGLE */}
        <section className="max-w-4xl mx-auto mt-24 px-4 prose prose-slate dark:prose-invert">
          <h2 className="text-3xl font-bold text-center mb-8">Send Files Online with QuickTransfer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 border-t border-gray-100 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-bold mb-4">How it works: Securely Transfer Data Between Any Device</h3>
              <p>
                QuickTransfer is a revolutionary <strong>free file sharing tool</strong> designed for the modern web. We understand that in a world of complex cloud storage, sometimes you just need to <strong>send files online</strong> without the overhead of enterprise accounts.
              </p>
              <p>
                Our system uses a unique 6-digit code architecture. This means your data isn't just floating in a cloud indefinitely. Instead, it creates a temporary, secure bridge between the sender and the recipient. Whether you're transferring high-quality photos from your phone to your PC or sending important documents to a colleague, the process takes seconds.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Why use a File Transfer Without Login?</h3>
              <p>
                Privacy is our priority. Most "free" services capture your email address and sell your behavior data to advertisers. QuickTransfer offers a true <strong>file transfer without login</strong> experience. No email verification, no password management, and no tracking.
              </p>
              <p>
                Simply upload your file, get your code, and share. Your files are encrypted at rest and in transit, and they are automatically purged from our servers once the transfer is complete or the code expires. It's the cleanest, fastest way to move data across the internet.
              </p>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 p-8 rounded-2xl custom-shadow border border-white/40 dark:border-white/10 mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">How to send files without login?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  You can use QuickTransfer to send files instantly without creating an account. Simply visit our homepage, select the "Send a File" card, upload your document, and share the generated 6-digit code with your recipient. They can enter that code on our site to download the file immediately.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">What is the maximum file size?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Our free tier allows for generous file transfers suitable for photos, documents, and most standard media files. For exceptionally large video files, we ensure high-speed upload protocols to minimize waiting time.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Are my files encrypted?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes. Security is at the core of QuickTransfer. Every file uploaded is encrypted, and access is restricted only to those who possess the unique, temporary 6-digit code. We do not store your files permanently.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-50/50 dark:bg-slate-900/80 py-8 md:py-12 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-2 grayscale opacity-50">
              <Rocket className="w-5 h-5 dark:text-white" />
              <span className="font-bold dark:text-white">QuickTransfer</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-400 dark:text-gray-400 font-medium">
              <a href="/help" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">How It Works</a>
              <a href="/terms" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">Privacy</a>
              <a href="/contact" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">Contact</a>
            </div>
            <p className="text-xs text-gray-300 dark:text-gray-500">© 2026 QuickTransfer Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* FAQ SCHEMA JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How to send files without login?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can use QuickTransfer to send files instantly without creating an account. Simply visit our homepage, select the 'Send a File' card, upload your document, and share the generated 6-digit code with your recipient."
                }
              },
              {
                "@type": "Question",
                "name": "What is the maximum file size?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "QuickTransfer supports high-speed transfers for documents, photos, and media. We offer generous limits without requiring a sign-up."
                }
              },
              {
                "@type": "Question",
                "name": "Are my files encrypted?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all files are encrypted during the transfer process and are protected by a secure 6-digit access code."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
