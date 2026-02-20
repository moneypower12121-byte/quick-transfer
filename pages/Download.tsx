import React, { useEffect } from 'react';
import { Rocket, Monitor, Smartphone, Download, Sun, Moon } from 'lucide-react';
import InstallButton from '../components/InstallButton';
import { useTheme } from '../context/ThemeContext';

const DownloadPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    document.title = 'Download – QuickTransfer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download QuickTransfer for Android, Windows, or use the web app. Fast, secure file sharing across devices.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-pink-100 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 p-1.5 rounded-lg shadow-lg shadow-red-500/20">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">QuickTransfer</span>
          </a>
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <a href="/" className="text-red-500 font-medium hover:underline">← Back to Home</a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-gray-800 dark:text-white">Download QuickTransfer</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Get QuickTransfer for your device or use the web app. Fast, secure file sharing across Android, Windows, and browsers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Android Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-pink-100 dark:border-pink-900">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                <Smartphone className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Android</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Install the PWA or download the APK for offline use.</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap mt-2">
              <a
                href="/downloads/quicktransfer-android.apk"
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow hover:opacity-95 transition"
                download
              >
                <Download className="inline w-4 h-4 mr-2 align-middle" />
                  Install APK
              </a>
                {/* InstallButton removed as requested */}
            </div>
          </div>

          {/* Windows Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-pink-100 dark:border-pink-900">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <Monitor className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Windows / Desktop</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Install the PWA as a desktop app or use the web version.</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap mt-2">
              <InstallButton label="Install for Windows" className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          Prefer using the web app? <a href="/" className="text-red-500 hover:underline">Go to homepage</a> and start transferring files instantly.
        </div>
      </main>
    </div>
  );
};

export default DownloadPage;
