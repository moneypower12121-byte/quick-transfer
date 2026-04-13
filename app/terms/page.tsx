import React from 'react';

export const metadata = {
  title: 'Terms of Service - QuickTransfer',
  description: 'Terms and conditions for using QuickTransfer file sharing service.',
};

export default function TermsPage() {
  return (
    <main className="flex-1 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-8 text-center">Terms of Service</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using QuickTransfer, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Description of Service</h2>
            <p>QuickTransfer provides a temporary file sharing service. We allow users to upload files and receive a temporary code for others to download those files. Files are automatically deleted after a specified period or number of downloads.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. User Responsibilities</h2>
            <p>You are solely responsible for the content you upload. You agree not to use the service to share illegal, harmful, or copyrighted material without permission. We reserve the right to remove any content that violates these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Limitation of Liability</h2>
            <p>QuickTransfer is provided "as is" without warranties of any kind. We are not responsible for any data loss or damage resulting from the use of our service.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
