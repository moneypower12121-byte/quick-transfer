'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Rocket } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()
  const pathname = usePathname()
  const navLinks = [
    { href: '/', label: t.transfer },
    { href: '/help', label: t.howItWorks },
    { href: '/security', label: 'Security' },
    { href: '/privacy', label: t.privacy },
    { href: '/contact', label: t.contact },
  ]
  return (
    <footer className="bg-gray-50/50 dark:bg-slate-900/80 py-8 md:py-12 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Footer */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 p-1.5 rounded-lg">
              <Rocket className="w-4 h-4 text-white" aria-label="QuickTransfer logo" />
            </div>
            <span className="font-bold text-gray-700 dark:text-white">QuickTransfer</span>
          </Link>
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`transition-colors ${
                    isActive
                      ? 'text-red-500 dark:text-red-400 font-medium'
                      : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          
          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
          
          {/* Copyright */}
          <p className="text-xs text-gray-400 dark:text-gray-500">© 2026 QuickTransfer Inc.</p>
          <p className="text-xs text-gray-300 dark:text-gray-600">{t.allRightsReserved}</p>
        </div>
        
        {/* Desktop Footer */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <Rocket className="w-5 h-5 dark:text-white" aria-label="QuickTransfer logo" />
            <span className="font-bold dark:text-white">QuickTransfer</span>
          </Link>
          <div className="flex gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`transition-colors ${
                    isActive
                      ? 'text-red-500 dark:text-red-400'
                      : 'text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <p className="text-xs text-gray-300 dark:text-gray-500">© 2026 QuickTransfer Inc. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
