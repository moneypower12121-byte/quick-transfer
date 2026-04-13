import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – QuickTransfer',
  description: "Contact QuickTransfer for support, feedback, or questions. We're here to help you share files faster and securely.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <ContactForm />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 dark:text-gray-500 text-sm">
          © 2026 QuickTransfer. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
