
import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Search } from 'lucide-react';
import SearchBar from '../ui/SearchBar';
import GroupLogo from '@/lib/Group 19.png';

const Navbar = () => {
  return (
    <header className="w-full h-16 border-b border-devscribe-border flex items-center px-6 bg-devscribe-dark-gray z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between w-full">
        <div className="w-64 flex items-center pl-5">
          <Link to="/" className="flex items-center">
            <img src={GroupLogo} alt="Logo" className="w-auto h-8" />
          </Link>
        </div>
        
        <div className="flex-1 max-w-xl mx-8">
          <SearchBar />
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/feature-request" className="text-sm text-devscribe-text-secondary hover:text-white transition-colors">
            Feature Request
          </Link>
          
          <Link to="/api-marketplace" className="bg-devscribe-teal text-black font-medium px-4 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-devscribe-teal/90 transition-colors">
            APIs
            <span className="text-xs bg-black/20 px-1.5 py-0.5 rounded-full">↓</span>
          </Link>
          
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-devscribe-hover-bg transition-colors">
            <Moon size={18} className="text-devscribe-text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
