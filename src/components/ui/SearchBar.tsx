import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Comprehensive search content
const searchableContent = [
  // Pages
  { 
    title: 'Home', 
    path: '/', 
    keywords: ['home', 'welcome', 'start', 'introduction', 'devscribe'], 
    category: 'Pages' 
  },
  { 
    title: 'API Marketplace', 
    path: '/api-marketplace', 
    keywords: ['api', 'marketplace', 'services', 'providers', 'integrations'], 
    category: 'API' 
  },
  { 
    title: 'API Deepsearch', 
    path: '/api-deepsearch', 
    keywords: ['search', 'ai', 'discovery', 'deep search', 'api search'], 
    category: 'API' 
  },
  { 
    title: 'Documentation', 
    path: '/documentation', 
    keywords: ['docs', 'guide', 'help', 'reference', 'manual'], 
    category: 'Pages' 
  },
  { 
    title: 'Download', 
    path: '/download', 
    keywords: ['install', 'download', 'version', 'sdk', 'tools'], 
    category: 'Pages' 
  },
  { 
    title: 'Guides', 
    path: '/guides', 
    keywords: ['tutorial', 'help', 'getting started', 'best practices'], 
    category: 'Pages' 
  },
  { 
    title: 'Development', 
    path: '/development', 
    keywords: ['plugin', 'extension', 'architecture', 'development', 'integration'], 
    category: 'Technical' 
  },
  { 
    title: 'Global Settings', 
    path: '/global-settings', 
    keywords: ['settings', 'configuration', 'preferences', 'customize'], 
    category: 'Pages' 
  },
  { 
    title: 'Navigation', 
    path: '/navigation', 
    keywords: ['shortcuts', 'command', 'palette', 'navigation', 'keyboard'], 
    category: 'Technical' 
  },

  // Windsurf Pages
  { 
    title: 'Windsurf Getting Started', 
    path: '/windsurf/getting-started', 
    keywords: ['windsurf', 'start', 'tutorial', 'first steps'], 
    category: 'Windsurf' 
  },
  { 
    title: 'Windsurf Models', 
    path: '/windsurf/models', 
    keywords: ['ai', 'models', 'machine learning', 'windsurf', 'ml'], 
    category: 'Windsurf' 
  },
  { 
    title: 'Windsurf Cascade', 
    path: '/windsurf/cascade', 
    keywords: ['cascade', 'ai', 'workflow', 'windsurf', 'advanced'], 
    category: 'Windsurf' 
  },

  // Extensions Pages
  { 
    title: 'Extensions Getting Started', 
    path: '/extensions/getting-started', 
    keywords: ['extensions', 'plugin', 'install', 'start', 'setup'], 
    category: 'Extensions' 
  },

  // Features Pages
  { 
    title: 'Autocomplete', 
    path: '/features/autocomplete', 
    keywords: ['autocomplete', 'code', 'suggestion', 'ai', 'productivity'], 
    category: 'Features' 
  },
  { 
    title: 'Chat', 
    path: '/features/chat', 
    keywords: ['chat', 'ai', 'conversation', 'assistant', 'help'], 
    category: 'Features' 
  },
  { 
    title: 'Command Palette', 
    path: '/features/command', 
    keywords: ['command', 'palette', 'shortcut', 'productivity'], 
    category: 'Features' 
  },
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchableContent>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Advanced search algorithm
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm) {
      // More sophisticated search algorithm
      const filteredResults = searchableContent.filter(item => {
        // Exact match
        if (item.title.toLowerCase() === searchTerm) return true;
        
        // Starts with
        if (item.title.toLowerCase().startsWith(searchTerm)) return true;
        
        // Contains keywords
        const matchesKeywords = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm)
        );
        
        // Partial title match
        const partialTitleMatch = item.title.toLowerCase().includes(searchTerm);
        
        return matchesKeywords || partialTitleMatch;
      }).slice(0, 5); // Limit to top 5 results

      setResults(filteredResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  // Keyboard navigation for search results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : prev
          );
          break;
        case 'Enter':
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            handleResultClick(results[selectedIndex].path);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, results, selectedIndex]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigate to selected result
  const handleResultClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  // Clear search
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="w-full relative group">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-devscribe-text-secondary">
        <Search size={16} />
      </div>
      <input 
        type="text" 
        value={query}
        onChange={handleSearch}
        placeholder="Search or ask..." 
        className="w-full bg-black/40 border border-devscribe-border rounded-md py-1.5 pl-9 pr-12 text-sm placeholder:text-devscribe-text-secondary focus:outline-none focus:ring-1 focus:ring-devscribe-teal/50 transition-all"
      />
      {query && (
        <button 
          onClick={clearSearch} 
          className="absolute right-10 top-1/2 -translate-y-1/2 text-devscribe-text-secondary hover:text-white"
        >
          <X size={16} />
        </button>
      )}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-devscribe-text-secondary text-xs px-1.5 py-0.5 rounded border border-devscribe-border/50 bg-devscribe-hover-bg">
        ⌘K
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 top-full mt-2 w-full bg-devscribe-card-bg border border-devscribe-border rounded-md shadow-lg">
          {results.map((result, index) => (
            <div 
              key={result.path}
              onClick={() => handleResultClick(result.path)}
              className={`
                px-4 py-2 
                cursor-pointer 
                transition-colors 
                flex justify-between items-center
                ${index === selectedIndex 
                  ? 'bg-devscribe-hover-bg/30' 
                  : 'hover:bg-devscribe-hover-bg/10'}
              `}
            >
              <div>
                <span className="font-medium">{result.title}</span>
                <span className="text-xs text-devscribe-text-secondary ml-2">
                  {result.category}
                </span>
              </div>
              <span className="text-xs text-devscribe-text-secondary">
                Go to page
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
