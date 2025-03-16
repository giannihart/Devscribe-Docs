
import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Search } from 'lucide-react';
import SearchBar from '../ui/SearchBar';

const Navbar = () => {
  return (
    <header className="w-full h-16 border-b border-codium-border flex items-center px-6 bg-codium-dark-gray z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-codium-teal flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="text-codium-teal font-medium text-xl">codium</span>
        </Link>
        
        <div className="flex-1 max-w-xl mx-8">
          <SearchBar />
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/feature-request" className="text-sm text-codium-text-secondary hover:text-white transition-colors">
            Feature Request
          </Link>
          
          <Link to="/download" className="bg-codium-teal text-black font-medium px-4 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-codium-teal/90 transition-colors">
            Download
            <span className="text-xs bg-black/20 px-1.5 py-0.5 rounded-full">↓</span>
          </Link>
          
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-codium-hover-bg transition-colors">
            <Moon size={18} className="text-codium-text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
