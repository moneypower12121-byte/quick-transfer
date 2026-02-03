import React from 'react';

interface DemoAdProps {
  size: '468x60' | '300x250' | '160x300' | '160x600' | '320x50' | '728x90';
  label?: string;
}

const DemoAd: React.FC<DemoAdProps> = ({ size, label }) => {
  const dimensions = {
    '468x60': { width: '468px', height: '60px' },
    '300x250': { width: '300px', height: '250px' },
    '160x300': { width: '160px', height: '300px' },
    '160x600': { width: '160px', height: '600px' },
    '320x50': { width: '320px', height: '50px' },
    '728x90': { width: '728px', height: '90px' },
  };

  const style = dimensions[size];

  return (
    <div 
      className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-500 rounded-xl flex flex-col items-center justify-center mx-auto"
      style={{ width: style.width, height: style.height, maxWidth: '100%' }}
    >
      <div className="bg-gray-300 dark:bg-slate-500 px-3 py-1 rounded-full text-xs font-bold text-gray-600 dark:text-gray-200 mb-2">
        DEMO AD
      </div>
      <p className="text-gray-500 dark:text-gray-300 text-sm font-medium">{size}</p>
      {label && <p className="text-gray-400 dark:text-gray-400 text-xs mt-1">{label}</p>}
    </div>
  );
};

export default DemoAd;
