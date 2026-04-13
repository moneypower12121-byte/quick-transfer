"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language, languageNames } from '../services/i18n';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['en', 'es', 'fr', 'de', 'pt', 'ar', 'zh', 'ja', 'ko', 'hi', 'ru', 'it', 'tr', 'nl', 'pl', 'ur'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{languageNames[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 dark:border dark:border-white/10 rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-red-300 dark:scrollbar-thumb-red-800 scrollbar-track-gray-100 dark:scrollbar-track-slate-700 scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-red-300 dark:[&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-red-400 dark:[&::-webkit-scrollbar-thumb]:hover:bg-red-500">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${
                language === lang ? 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/20' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <span>{languageNames[lang]}</span>
              {language === lang && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
