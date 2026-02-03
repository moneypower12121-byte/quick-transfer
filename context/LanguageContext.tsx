import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translation, translations, getStoredLanguage, setStoredLanguage } from '../services/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setStoredLanguage(lang);
    // Set document direction for RTL languages
    document.documentElement.dir = ['ar', 'ur'].includes(lang) ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = ['ar', 'ur'].includes(language) ? 'rtl' : 'ltr';
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
