
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, MessageSquare, FileText, HelpCircle, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'get-started': true
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
              <span>Blog</span>
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
                Introduction
              </Link>
              <Link to="/quickstart" className={`sidebar-link ${isActive('/quickstart') ? 'active' : ''}`}>
                Quickstart
              </Link>
              <Link to="/development" className={`sidebar-link ${isActive('/development') ? 'active' : ''}`}>
                Development
              </Link>
              <Link to="/auth" className={`sidebar-link ${isActive('/auth') ? 'active' : ''}`}>
                Authentication (Enterprise)
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
