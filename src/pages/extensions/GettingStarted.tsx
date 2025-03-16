
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { Puzzle, Download, Settings, Check } from 'lucide-react';

const ExtensionsGettingStarted = () => {
  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Extensions" 
        title="Getting Started with Extensions"
        description="Learn how to enhance Codium with extensions that expand its capabilities."
      />
      
      <div className="mt-8 space-y-6">
        <p className="text-codium-text-secondary">
          Codium extensions allow you to customize and extend the functionality of your development environment. 
          This guide will help you get started with finding, installing, and using extensions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-codium-teal/10 rounded-lg">
                <Puzzle size={24} className="text-codium-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are Extensions?</h3>
                <p className="text-codium-text-secondary">
                  Extensions are add-ons that enhance Codium with new features, themes, language support, and integrations with other tools and services.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-codium-teal/10 rounded-lg">
                <Download size={24} className="text-codium-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Extension Marketplace</h3>
                <p className="text-codium-text-secondary">
                  Browse and install extensions from the Codium Extension Marketplace, accessible directly within the application.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Installing Your First Extension</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-8 w-8 bg-codium-teal/10 rounded-full flex items-center justify-center">
              <span className="text-codium-teal font-medium">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Open the Extensions Panel</h3>
              <p className="text-codium-text-secondary">
                Click on the Extensions icon in the activity bar or use the keyboard shortcut <kbd className="bg-codium-dark-gray px-2 py-1 rounded text-xs">Ctrl+Shift+X</kbd> (Windows/Linux) or <kbd className="bg-codium-dark-gray px-2 py-1 rounded text-xs">Cmd+Shift+X</kbd> (macOS).
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-8 w-8 bg-codium-teal/10 rounded-full flex items-center justify-center">
              <span className="text-codium-teal font-medium">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Search for Extensions</h3>
              <p className="text-codium-text-secondary">
                Use the search bar to find extensions by name, category, or functionality. You can also browse featured and recommended extensions.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-8 w-8 bg-codium-teal/10 rounded-full flex items-center justify-center">
              <span className="text-codium-teal font-medium">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Install and Enable</h3>
              <p className="text-codium-text-secondary">
                Click the "Install" button on the extension you want to add. Most extensions are enabled automatically after installation, but you can manage them in the Extensions panel.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Recommended Extensions for Developers</h2>
        
        <div className="space-y-4">
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-800 rounded-md flex items-center justify-center">
                  <Check size={18} className="text-green-200" />
                </div>
                <div>
                  <h4 className="font-medium">Codium GitHub Integration</h4>
                  <p className="text-xs text-codium-text-secondary">Seamlessly connect Codium with GitHub repositories</p>
                </div>
              </div>
              <button className="text-xs bg-codium-teal/10 text-codium-teal px-3 py-1 rounded hover:bg-codium-teal/20 transition-colors">
                Install
              </button>
            </div>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center">
                  <Settings size={18} className="text-blue-200" />
                </div>
                <div>
                  <h4 className="font-medium">Codium Theme Customizer</h4>
                  <p className="text-xs text-codium-text-secondary">Create and customize your own Codium themes</p>
                </div>
              </div>
              <button className="text-xs bg-codium-teal/10 text-codium-teal px-3 py-1 rounded hover:bg-codium-teal/20 transition-colors">
                Install
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionsGettingStarted;
