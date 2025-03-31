import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  MessageSquare, 
  FileText, 
  FileEdit, 
  Code2, 
  Link2, 
  Settings, 
  Navigation, 
  Scissors,
  BookOpenText 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto pt-4 border-r border-codium-border fixed top-16 left-0 bg-codium-dark-gray">
      <div className="flex flex-col h-full">
        <div className="px-6 py-2">
          {/* Main navigation */}
          <nav className="space-y-1">
            <Link 
              to="/documentation" 
              className={`
                sidebar-link text-white font-bold
                flex items-center gap-4 
                px-4 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                hover:text-white 
                ${isActive('/documentation') ? 'bg-codium-hover-bg' : ''}
              `}
            >
              <BookOpen size={18} />
              <span>Documentation</span>
            </Link>
            <Link 
              to="/guides" 
              className={`
                sidebar-link text-white font-bold
                flex items-center gap-4 
                px-4 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                hover:text-white 
                ${isActive('/guides') ? 'bg-codium-hover-bg' : ''}
              `}
            >
              <BookOpenText size={18} />
              <span>Guides</span>
            </Link>
            <Link 
              to="/community" 
              className={`
                sidebar-link text-white font-bold
                flex items-center gap-4 
                px-4 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                hover:text-white 
                ${isActive('/community') ? 'bg-codium-hover-bg' : ''}
              `}
            >
              <MessageSquare size={18} />
              <span>Community</span>
            </Link>
            <Link 
              to="/blog" 
              className={`
                sidebar-link text-white font-bold
                flex items-center gap-4 
                px-4 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                hover:text-white 
                ${isActive('/blog') ? 'bg-codium-hover-bg' : ''}
              `}
            >
              <FileText size={18} />
              <span>Blog</span>
            </Link>
          </nav>
        </div>

        {/* Get Started Section */}
        <div className="sidebar-section">
          <div className="sidebar-heading text-white mb-2 px-6 font-bold">
            <span>Get Started</span>
          </div>
          
          <div className="mt-1 space-y-1">
            <Link 
              to="/" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              Introduction
            </Link>
            <Link 
              to="/quickstart" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/quickstart') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              Quickstart
            </Link>
            <Link 
              to="/development" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/development') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              Development
            </Link>
          </div>
        </div>

        {/* Essentials Section */}
        <div className="sidebar-section">
          <div className="sidebar-heading text-white mb-2 px-6 font-bold">
            <span>Essentials</span>
          </div>
          
          <div className="mt-1 space-y-1">
            <Link 
              to="/doc-editing" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/doc-editing') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              <span>Doc Editing</span>
            </Link>
            <Link 
              to="/code-blocks" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/code-blocks') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              <span>Code Blocks</span>
            </Link>
            <Link 
              to="/embeds" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/embeds') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              <span>Embeds</span>
            </Link>
            <Link 
              to="/global-settings" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/global-settings') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              <span>Global Settings</span>
            </Link>
            <Link 
              to="/navigation" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/navigation') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              <span>Navigation</span>
            </Link>
            <Link 
              to="/snippets" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                ${isActive('/snippets') ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
              `}
            >
              <span>Snippets</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
