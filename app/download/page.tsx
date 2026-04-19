import React from 'react';
import { Download, Monitor, Smartphone, Globe } from 'lucide-react';

export const metadata = {
  title: 'Download QuickTransfer - Apps for Desktop & Mobile',
  description: 'Download the QuickTransfer app for Windows, macOS, Android, and iOS for even faster file sharing.',
};

export default function DownloadPage() {
  return (
    <main className="flex-1 px-4 pt-28 pb-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-4">Download QuickTransfer</h1>
          <p className="text-xl text-gray-500 dark:text-gray-300">Take your file sharing to the next level with our native applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700/50 flex flex-col items-center">
            <Monitor className="w-16 h-16 text-red-500 mb-6" aria-label="transfer files between devices" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Desktop App</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-8">Get the full experience on Windows and macOS with system-wide file menus.</p>
            <button className="w-full py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" aria-label="download file instantly" /> Download for Windows
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700/50 flex flex-col items-center">
            <Smartphone className="w-16 h-16 text-red-500 mb-6" aria-label="transfer files between devices" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Mobile App</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-8">Share photos and videos directly from your camera roll on Android and iOS.</p>
            <button className="w-full py-4 border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
               Download for Android
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-12 rounded-3xl text-white text-center shadow-xl shadow-red-500/20">
          <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" aria-hidden="true" />
          <h2 className="text-3xl font-black mb-4">No Download Needed?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">You can always use our web app on any device without installing a thing! It works perfectly in every modern browser.</p>
          <a href="/" className="inline-block px-12 py-4 bg-white text-red-500 font-bold rounded-xl hover:shadow-2xl transition-all">
            Return to Web App
          </a>
        </div>
      </div>
    </main>
  );
}
