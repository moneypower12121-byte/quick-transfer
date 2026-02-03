
import React from 'react';
import { Send, Menu, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 p-1.5 rounded-lg">
            <Send className="w-5 h-5 text-white transform rotate-45" />
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">QuickTransfer</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-red-500 border-b-2 border-red-500 pb-1">Transfer</a>
          <a href="#" className="hover:text-red-500 transition-colors">Download</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1 text-sm text-gray-600 hover:text-red-500">
            <Globe className="w-4 h-4" />
            Language
          </button>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
