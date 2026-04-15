import React from 'react';

export const metadata = {
  title: 'Privacy Policy - QuickTransfer',
  description: 'Privacy policy for QuickTransfer. We value your data security and anonymity.',
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 px-4 pt-32 pb-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Data Collection</h2>
            <p>QuickTransfer is designed to be anonymous. We do not require account registration, and we do not collect personal information like your name or email address.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. File Storage</h2>
            <p>Uploaded files are stored temporarily on our servers. They are encrypted at rest and are automatically deleted once the transfer expires or the maximum download limit is reached. We do not inspect or keep logs of your shared files.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. Cookies & Tracking</h2>
            <p>We use minimal technical cookies to maintain your current session and language preferences. We do not use third-party tracking cookies for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Data Security</h2>
            <p>Protecting your data is our top priority. We use industry-standard encryption protocols during transit and storage to ensure your files remain secure.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
