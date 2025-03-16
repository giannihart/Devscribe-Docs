
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, MessageSquare, FileText, HelpCircle, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'get-started': true,
    'windsurf': false,
    'extensions': false,
    'features': false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto pt-4 border-r border-codium-border fixed top-16 left-0 bg-codium-dark-gray">
      <div className="flex flex-col h-full">
        <div className="px-2 py-2">
          {/* Main navigation */}
          <nav className="space-y-1">
            <Link to="/documentation" className={`sidebar-link ${isActive('/documentation') ? 'active' : ''}`}>
              <BookOpen size={18} />
              <span>Documentation</span>
            </Link>
            <Link to="/community" className={`sidebar-link ${isActive('/community') ? 'active' : ''}`}>
              <MessageSquare size={18} />
              <span>Discord Community</span>
            </Link>
            <Link to="/blog" className={`sidebar-link ${isActive('/blog') ? 'active' : ''}`}>
              <FileText size={18} />
              <span>Codium Blog</span>
            </Link>
            <Link to="/support" className={`sidebar-link ${isActive('/support') ? 'active' : ''}`}>
              <HelpCircle size={18} />
              <span>Support</span>
            </Link>
          </nav>
        </div>

        {/* Get Started Section */}
        <div className="sidebar-section">
          <div onClick={() => toggleSection('get-started')} className="sidebar-heading flex items-center justify-between cursor-pointer">
            <span>Get Started</span>
            <ChevronRight size={16} className={`transition-transform duration-200 ${expandedSections['get-started'] ? 'rotate-90' : ''}`} />
          </div>
          
          {expandedSections['get-started'] && (
            <div className="mt-1 space-y-1">
              <Link to="/" className={`sidebar-link ${isActive('/') ? 'active' : ''}`}>
                Overview
              </Link>
              <Link to="/auth" className={`sidebar-link ${isActive('/auth') ? 'active' : ''}`}>
                Authentication (Enterprise)
              </Link>
            </div>
          )}
        </div>

        {/* Windsurf Section */}
        <div className="sidebar-section">
          <div onClick={() => toggleSection('windsurf')} className="sidebar-heading flex items-center justify-between cursor-pointer">
            <span>Windsurf</span>
            <ChevronRight size={16} className={`transition-transform duration-200 ${expandedSections['windsurf'] ? 'rotate-90' : ''}`} />
          </div>
          
          {expandedSections['windsurf'] && (
            <div className="mt-1 space-y-1">
              <Link to="/windsurf/getting-started" className="sidebar-link">
                Getting Started
              </Link>
              <Link to="/windsurf/cascade" className="sidebar-link">
                Cascade
              </Link>
              <Link to="/windsurf/models" className="sidebar-link">
                Models
              </Link>
              <Link to="/windsurf/usage" className="sidebar-link">
                Usage
              </Link>
              <Link to="/windsurf/terminal" className="sidebar-link">
                Terminal
              </Link>
              <Link to="/windsurf/advanced" className="sidebar-link">
                Advanced
              </Link>
            </div>
          )}
        </div>

        {/* Extensions Section */}
        <div className="sidebar-section">
          <div onClick={() => toggleSection('extensions')} className="sidebar-heading flex items-center justify-between cursor-pointer">
            <span>Extensions</span>
            <ChevronRight size={16} className={`transition-transform duration-200 ${expandedSections['extensions'] ? 'rotate-90' : ''}`} />
          </div>
          
          {expandedSections['extensions'] && (
            <div className="mt-1 space-y-1">
              <Link to="/extensions/getting-started" className="sidebar-link">
                Getting Started
              </Link>
              <Link to="/extensions/compatibility" className="sidebar-link">
                Compatibility
              </Link>
              <Link to="/extensions/profile" className="sidebar-link">
                Profile & Analytics (Teams)
              </Link>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="sidebar-section">
          <div onClick={() => toggleSection('features')} className="sidebar-heading flex items-center justify-between cursor-pointer">
            <span>Features</span>
            <ChevronRight size={16} className={`transition-transform duration-200 ${expandedSections['features'] ? 'rotate-90' : ''}`} />
          </div>
          
          {expandedSections['features'] && (
            <div className="mt-1 space-y-1">
              <Link to="/features/autocomplete" className="sidebar-link">
                Autocomplete
              </Link>
              <Link to="/features/chat" className="sidebar-link">
                Chat
              </Link>
              <Link to="/features/command" className="sidebar-link">
                Command
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
