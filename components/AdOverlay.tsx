import React, { useState, useEffect } from 'react';
import { X, Clock, Zap } from 'lucide-react';

interface AdOverlayProps {
  onComplete: () => void;
  adType: 'send' | 'receive';
}

const AdOverlay: React.FC<AdOverlayProps> = ({ onComplete, adType }) => {
  const [countdown, setCountdown] = useState(5);
  const [canSkip, setCanSkip] = useState(false);

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

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
        {/* Ad Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Zap className="w-5 h-5" />
            <span className="font-bold text-sm">Sponsored</span>
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
                Skip <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Ad Content - Placeholder Ad */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
            {/* Sample Ad 1 */}
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-800">
                Quick Transfer Pro
              </h3>
              <p className="text-gray-500">
                Upgrade to Pro for unlimited transfers, no ads, and faster speeds!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
                  Get Pro - $4.99/mo
                </button>
                <button className="bg-gray-200 text-gray-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Ad Footer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              {adType === 'send' 
                ? 'Your file is being prepared...' 
                : 'Fetching your file...'}
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
