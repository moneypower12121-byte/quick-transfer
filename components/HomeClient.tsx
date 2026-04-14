"use client";

import React, { useState, useEffect } from 'react';
import TransferCard from './TransferCard';
import ResultView from './ResultView';
import TransferHistory from './TransferHistory';
import { AppState, TransferData } from '../types';
import { generateCode, saveData, getDataByCode } from '../services/storage';
import { addToHistory } from '../services/history';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, Send, X } from 'lucide-react';

export default function HomeClient() {
  const { t } = useLanguage();
  const [appState, setAppState] = useState<AppState>('IDLE');
  const [currentData, setCurrentData] = useState<TransferData | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<'SENT' | 'RECEIVED'>('SENT');
  const [urlCode, setUrlCode] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('code');
    if (codeFromUrl && codeFromUrl.length === 6) {
      setUrlCode(codeFromUrl);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleSend = async (file: File, expiryMinutes: number) => {
    setAppState('SENDING');
    setError(null);
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const transfer: TransferData = {
        id: crypto.randomUUID(),
        code: generateCode(),
        name: file.name,
        size: file.size,
        type: file.type,
        content: reader.result as string,
        createdAt: Date.now(),
        expiresAt: Date.now() + expiryMinutes * 60 * 1000,
      };

      try {
        await saveData(transfer);
        addToHistory({
          code: transfer.code,
          name: transfer.name,
          size: transfer.size,
          type: 'sent',
          expiryMinutes: expiryMinutes,
        });
        setCurrentData(transfer);
        setMode('SENT');
        setAppState('COMPLETE');
      } catch (err) {
        setError(t.failedUpload);
        setAppState('IDLE');
      }
    };
    reader.onerror = () => {
      setError(t.failedRead);
      setAppState('IDLE');
    };
  };

  const handleReceive = async (code: string) => {
    setAppState('RECEIVING');
    setError(null);

    try {
      const result = await getDataByCode(code);
      if (result.data) {
        addToHistory({
          code: result.data.code,
          name: result.data.name,
          size: result.data.size,
          type: 'received',
        });
        setCurrentData(result.data);
        setMode('RECEIVED');
        setAppState('COMPLETE');
      } else if (result.error === 'expired') {
        setError(t.codeExpiredDesc || 'This transfer code is no longer valid.');
        setAppState('IDLE');
      } else if (result.error === 'invalid') {
        setError(t.codeInvalid || 'Invalid code. Please check and try again.');
        setAppState('IDLE');
      } else {
        setError(t.invalidCode);
        setAppState('IDLE');
      }
    } catch (err) {
      setError(t.invalidCode);
      setAppState('IDLE');
    }
  };

  const reset = () => {
    setAppState('IDLE');
    setCurrentData(undefined);
    setError(null);
  };

  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {appState === 'COMPLETE' ? (
        <div className="lg:col-span-2">
          <ResultView data={currentData} mode={mode} onBack={reset} />
        </div>
      ) : (
        <>
          <section className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 w-8 h-2 rounded-full" />
                <span className="text-red-500 font-bold uppercase tracking-wider text-sm">{t.fastSecure}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 dark:text-white leading-tight mb-6">
                {t.shareAnything} <br />
                <span className="text-red-500 dark:text-red-400">{t.instantly}</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-300 leading-relaxed mb-4">
                {t.heroDescription}
              </p>
              <p className="text-sm font-semibold text-gray-400 dark:text-gray-400 tracking-wide">
                {t.trustLine}
              </p>
            </div>

            <div className="relative mt-8 hidden sm:block">
              <div className="bg-white/60 dark:bg-slate-800/60 dark:glass-effect backdrop-blur-sm p-4 rounded-2xl custom-shadow border border-white/40 dark:border-white/10 flex items-center gap-4 w-fit">
                <div className="bg-red-50 dark:bg-red-500/20 p-2 rounded-xl">
                  <Send className="w-6 h-6 text-red-500 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-100">Project_Final_v2.zip</p>
                  <p className="text-xs text-gray-400 dark:text-gray-400">12.4 MB • Sent 2m ago</p>
                </div>
                <div className="ml-4 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-lg text-xs font-mono font-bold text-gray-600 dark:text-gray-200">
                  492 103
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6 order-1 lg:order-2">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">{error}</p>
                <button onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-600 dark:text-red-500 dark:hover:text-red-300">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-6 sm:max-w-md mx-auto w-full">
              <TransferCard 
                type="send" 
                onSend={handleSend} 
                loading={appState === 'SENDING'} 
              />
              <TransferCard 
                type="receive" 
                onReceive={handleReceive} 
                loading={appState === 'RECEIVING'}
                initialCode={urlCode}
              />
            </div>
          </section>
        </>
      )}
      <TransferHistory onCodeClick={(code) => setUrlCode(code)} />
    </div>
  );
}

