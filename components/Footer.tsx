'use client'

import React from 'react'
import { Rocket } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50/50 dark:bg-slate-900/80 py-8 md:py-12 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Footer */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 p-1.5 rounded-lg">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-700 dark:text-white">QuickTransfer</span>
          </div>
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center text-sm">
            <a href="/help" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.howItWorks}</a>
            <a href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.terms}</a>
            <a href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.privacy}</a>
            <a href="/contact" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.contact}</a>
          </div>
          
          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
          
          {/* Copyright */}
          <p className="text-xs text-gray-400 dark:text-gray-500">© 2026 QuickTransfer Inc.</p>
          <p className="text-xs text-gray-300 dark:text-gray-600">{t.allRightsReserved}</p>
        </div>
        
        {/* Desktop Footer */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-2 grayscale opacity-50">
            <Rocket className="w-5 h-5 dark:text-white" />
            <span className="font-bold dark:text-white">QuickTransfer</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-400 dark:text-gray-400 font-medium">
            <a href="/help" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.howItWorks}</a>
            <a href="/terms" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.terms}</a>
            <a href="/privacy" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.privacy}</a>
            <a href="/contact" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">{t.contact}</a>
          </div>
          <p className="text-xs text-gray-300 dark:text-gray-500">© 2026 QuickTransfer Inc. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
