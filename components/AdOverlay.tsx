import React, { useState, useEffect, useRef } from 'react';
import { X, Clock, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AdOverlayProps {
  onComplete: () => void;
  adType: 'send' | 'receive';
}

const AdOverlay: React.FC<AdOverlayProps> = ({ onComplete, adType }) => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState(5);
  const [canSkip, setCanSkip] = useState(false);
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanSkip(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Load the ad script
  useEffect(() => {
    if (adContainerRef.current) {
      // Set atOptions on window
      (window as any).atOptions = {
        'key': '522d4ea741d98fdef7a995b1e977847e',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };

      // Create and append the script
      const script = document.createElement('script');
      script.src = 'https://www.highperformanceformat.com/522d4ea741d98fdef7a995b1e977847e/invoke.js';
      script.async = true;
      adContainerRef.current.appendChild(script);

      return () => {
        // Cleanup
        if (adContainerRef.current) {
          adContainerRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
        {/* Ad Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Zap className="w-5 h-5" />
            <span className="font-bold text-sm">{t.sponsored}</span>
          </div>
          <div className="flex items-center gap-3">
            {!canSkip ? (
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white font-bold text-sm">{countdown}s</span>
              </div>
            ) : (
              <button
                onClick={onComplete}
                className="flex items-center gap-1 bg-white text-red-500 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-all"
              >
                {t.skip} <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Ad Content - Real Ad */}
        <div className="p-6">
          <div className="flex justify-center items-center min-h-[250px]">
            {/* Ad Container - 300x250 */}
            <div 
              ref={adContainerRef} 
              className="flex justify-center items-center"
              style={{ minWidth: '300px', minHeight: '250px' }}
            />
          </div>

          {/* Ad Footer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              {adType === 'send' 
                ? t.preparingFile 
                : t.fetchingFile}
            </p>
            <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-1000"
                style={{ width: `${((5 - countdown) / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdOverlay;
