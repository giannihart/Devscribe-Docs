
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="w-full relative group">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-devscribe-text-secondary">
        <Search size={16} />
      </div>
      <input 
        type="text" 
        placeholder="Search or ask..." 
        className="w-full bg-black/40 border border-devscribe-border rounded-md py-1.5 pl-9 pr-12 text-sm placeholder:text-devscribe-text-secondary focus:outline-none focus:ring-1 focus:ring-devscribe-teal/50 transition-all"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-devscribe-text-secondary text-xs px-1.5 py-0.5 rounded border border-devscribe-border/50 bg-devscribe-hover-bg">
        ⌘K
      </div>
    </div>
  );
};

export default SearchBar;
