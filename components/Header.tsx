"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Rocket, Menu, Moon, Sun, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import InstallButton from './InstallButton';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: t.transfer },
    { href: '/help', label: t.howItWorks },
    { href: '/blog', label: 'Blog' },
    { href: '/security', label: 'Security' },
    { href: '/privacy', label: t.privacy },
    { href: '/contact', label: t.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-pink-100 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-red-500 to-pink-500 p-1.5 rounded-lg shadow-lg shadow-red-500/20">
            <Rocket className="w-8 h-8 text-white" aria-label="QuickTransfer logo" />
          </div>
          <span className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">QuickTransfer</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`transition-colors pb-1 ${
                  isActive 
                    ? 'text-red-500 dark:text-red-400 border-b-2 border-red-500 dark:border-red-400' 
                    : 'hover:text-red-500 dark:hover:text-red-400 border-b-2 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all hover:scale-105"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <LanguageSelector />
          <Link
            href="/download"
            className={`hidden sm:inline-block px-3 py-2 rounded-lg font-medium transition ${
              pathname === '/download' 
                ? 'bg-red-600 text-white shadow-inner' 
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
          >
            Download
          </Link>
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link 
              href="/download" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                pathname === '/download'
                  ? 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Download App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
