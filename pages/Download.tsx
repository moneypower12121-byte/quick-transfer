import React from 'react';
import { Send, Download, Smartphone, Monitor, Globe, Apple, Chrome, Zap, Shield, Clock } from 'lucide-react';

const DownloadPage: React.FC = () => {
  const platforms = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      name: "Web App",
      description: "Use directly in your browser - no download needed",
      buttonText: "Open Web App",
      link: "/",
      available: true,
      badge: "Recommended"
    },
    {
      icon: <Chrome className="w-10 h-10 text-green-500" />,
      name: "Chrome Extension",
      description: "Quick access from your browser toolbar",
      buttonText: "Coming Soon",
      link: "#",
      available: false,
      badge: "Soon"
    },
    {
      icon: <Monitor className="w-10 h-10 text-purple-500" />,
      name: "Windows",
      description: "Desktop app for Windows 10/11",
      buttonText: "Coming Soon",
      link: "#",
      available: false,
      badge: "Soon"
    },
    {
      icon: <Apple className="w-10 h-10 text-gray-700" />,
      name: "macOS",
      description: "Desktop app for macOS 12+",
      buttonText: "Coming Soon",
      link: "#",
      available: false,
      badge: "Soon"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-cyan-500" />,
      name: "Android",
      description: "Mobile app for Android 8.0+",
      buttonText: "Coming Soon",
      link: "#",
      available: false,
      badge: "Soon"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-gray-500" />,
      name: "iOS",
      description: "Mobile app for iPhone & iPad",
      buttonText: "Coming Soon",
      link: "#",
      available: false,
      badge: "Soon"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Transfer files in seconds with our optimized technology"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Secure & Private",
      description: "End-to-end encryption keeps your files safe"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Auto-Delete",
      description: "Files automatically deleted after 10 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-red-500 p-1.5 rounded-lg">
              <Send className="w-5 h-5 text-white transform rotate-45" />
            </div>
            <span className="text-xl font-bold text-gray-800">QuickTransfer</span>
          </a>
          <a href="/" className="text-red-500 font-medium hover:underline">← Back to Home</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="bg-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Download className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
          Download QuickTransfer
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Get QuickTransfer on all your devices. Transfer files seamlessly across platforms with our fast and secure file sharing solution.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gray-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Options */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Platform</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all ${
                platform.available 
                  ? 'border-red-200 hover:border-red-400 hover:shadow-xl' 
                  : 'border-gray-100 opacity-75'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gray-100 p-3 rounded-xl">
                  {platform.icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  platform.available 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {platform.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{platform.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{platform.description}</p>
              {platform.available ? (
                <a 
                  href={platform.link}
                  className="block w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-bold text-center hover:opacity-90 transition-all"
                >
                  {platform.buttonText}
                </a>
              ) : (
                <button 
                  disabled
                  className="w-full bg-gray-200 text-gray-500 py-3 rounded-xl font-bold cursor-not-allowed"
                >
                  {platform.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Web App CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Start Transferring Now!</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            No download required. Use QuickTransfer directly in your browser and start sharing files instantly.
          </p>
          <a 
            href="/"
            className="inline-block bg-white text-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Open Web App →
          </a>
        </div>
      </section>

      {/* Notify Section */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Get Notified When Apps Launch</h3>
          <p className="text-gray-500 mb-6">Be the first to know when our desktop and mobile apps are ready.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
            <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition-all whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 text-sm">
          © 2026 QuickTransfer. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DownloadPage;
