"use client";

import { Rocket, Monitor, Smartphone, Sun, Moon } from 'lucide-react';
import InstallButton from '@/components/InstallButton';
import { useTheme } from '@/context/ThemeContext';
import Header from '@/components/Header';

export default function DownloadPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-24">
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
              <InstallButton label="Install APK" className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-semibold shadow hover:bg-cyan-700 transition" />
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
}
