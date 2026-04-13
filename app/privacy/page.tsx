import { Shield, Eye, Lock, Database, Trash2, Globe } from 'lucide-react';
import DemoAd from '@/components/DemoAd';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – QuickTransfer',
  description: 'QuickTransfer respects your privacy. Files are transferred securely and automatically deleted. No tracking, no sign-up, no data selling.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-24">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl">
              <Shield className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white">Privacy Policy</h1>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: February 3, 2026</p>

          <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-500" />
                1. Information We Collect
              </h2>
              <p className="mb-3">We collect minimal information to provide our service:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>File Data:</strong> Files you upload are temporarily stored to enable transfer</li>
                <li><strong>Usage Data:</strong> Anonymous analytics about how you use our service</li>
                <li><strong>Device Info:</strong> Browser type, device type for optimization purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-green-500" />
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain our file transfer service</li>
                <li>To improve and optimize user experience</li>
                <li>To monitor usage and prevent abuse</li>
                <li>To display relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-red-500" />
                3. Data Retention & Deletion
              </h2>
              <p>
                <strong>Your files are automatically deleted after 10 minutes.</strong> We do not permanently 
                store your transferred files. Once the expiration time passes, all file data is permanently 
                removed from our servers. We do not backup or archive your transferred content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-500" />
                4. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your data during transfer 
                and temporary storage. However, no method of transmission over the Internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-500" />
                5. Third-Party Services
              </h2>
              <p className="mb-3">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Firebase:</strong> For secure data storage and transfer</li>
                <li><strong>Google Analytics:</strong> For anonymous usage statistics</li>
                <li><strong>Advertising Partners:</strong> To display ads and support our free service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">6. Cookies</h2>
              <p>
                We use cookies and similar technologies to improve your experience, analyze traffic, 
                and for advertising purposes. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">7. Children's Privacy</h2>
              <p>
                QuickTransfer is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Know what data we collect about you</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of analytics tracking</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">9. Contact Us</h2>
              <p>
                For any privacy-related questions or concerns, please visit our{' '}
                <a href="/contact" className="text-red-500 hover:underline">Contact Page</a>.
              </p>
            </section>
          </div>
          
          <div className="mt-8 flex justify-center">
            <DemoAd size="468x60" mobileSize="320x50" />
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 dark:text-gray-500 text-sm">
          © 2026 QuickTransfer. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
