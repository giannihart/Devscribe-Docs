import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Settings, Moon, Sun, Globe, Shield, Database, Laptop } from 'lucide-react';

const GlobalSettings = () => {
  const tocItems = [
    { id: 'appearance', title: 'Appearance' },
    { id: 'editor', title: 'Editor' },
    { id: 'ai', title: 'AI & Privacy' },
    { id: 'advanced', title: 'Advanced' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Essentials" 
          title="Global Settings"
          description="Configure Devscribe to match your preferences and workflow requirements."
        />
        
        <InfoBox>
          Settings are automatically synchronized across all your devices when you're signed in with your Devscribe account.
        </InfoBox>
        
        <section id="appearance" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Theme</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Choose between light, dark, or system-based theme for the Devscribe interface.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <Moon size={18} className="text-devscribe-text-secondary" />
                  <span>Dark</span>
                  <div className="ml-auto w-4 h-4 rounded-full bg-devscribe-teal"></div>
                </div>
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <Sun size={18} className="text-devscribe-text-secondary" />
                  <span>Light</span>
                </div>
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <Laptop size={18} className="text-devscribe-text-secondary" />
                  <span>System</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Font Size</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Adjust the font size used throughout the application.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm">Small</span>
                <div className="flex-1 h-2 bg-devscribe-card-bg rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-devscribe-teal"></div>
                </div>
                <span className="text-sm">Large</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Language</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Select your preferred language for the Devscribe interface.
              </p>
              <div className="relative">
                <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-devscribe-text-secondary" />
                <select className="w-full pl-10 pr-4 py-2 bg-devscribe-card-bg border border-devscribe-border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="es">Español</option>
                  <option value="ja">日本語</option>
                  <option value="zh">中文</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="editor" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Editor</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Default Editor Mode</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Choose the default editing mode when creating new documents.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <span>Visual</span>
                  <div className="ml-auto w-4 h-4 rounded-full bg-devscribe-teal"></div>
                </div>
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <span>Markdown</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Code Editor Theme</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Select a syntax highlighting theme for code blocks.
              </p>
              <div className="relative">
                <select className="w-full px-4 py-2 bg-devscribe-card-bg border border-devscribe-border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50">
                  <option value="dark">Dark (Default)</option>
                  <option value="light">Light</option>
                  <option value="monokai">Monokai</option>
                  <option value="github">GitHub</option>
                  <option value="dracula">Dracula</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Auto Save</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Configure how frequently your documents are automatically saved.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center h-6">
                  <input
                    id="auto-save"
                    type="checkbox"
                    className="w-4 h-4 text-devscribe-teal bg-devscribe-card-bg border-devscribe-border rounded focus:ring-devscribe-teal"
                    defaultChecked
                  />
                  <label htmlFor="auto-save" className="ml-2 text-sm">
                    Enable auto save
                  </label>
                </div>
                <div className="relative flex-1">
                  <select className="w-full px-4 py-2 bg-devscribe-card-bg border border-devscribe-border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50">
                    <option value="30">Every 30 seconds</option>
                    <option value="60">Every minute</option>
                    <option value="300">Every 5 minutes</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">AI & Privacy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Assistance</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Configure how AI features work within Devscribe.
              </p>
              <div className="space-y-3">
                <div className="flex items-center h-6">
                  <input
                    id="ai-suggestions"
                    type="checkbox"
                    className="w-4 h-4 text-devscribe-teal bg-devscribe-card-bg border-devscribe-border rounded focus:ring-devscribe-teal"
                    defaultChecked
                  />
                  <label htmlFor="ai-suggestions" className="ml-2 text-sm">
                    Enable AI code suggestions
                  </label>
                </div>
                <div className="flex items-center h-6">
                  <input
                    id="ai-completions"
                    type="checkbox"
                    className="w-4 h-4 text-devscribe-teal bg-devscribe-card-bg border-devscribe-border rounded focus:ring-devscribe-teal"
                    defaultChecked
                  />
                  <label htmlFor="ai-completions" className="ml-2 text-sm">
                    Enable AI text completions
                  </label>
                </div>
                <div className="flex items-center h-6">
                  <input
                    id="ai-context"
                    type="checkbox"
                    className="w-4 h-4 text-devscribe-teal bg-devscribe-card-bg border-devscribe-border rounded focus:ring-devscribe-teal"
                    defaultChecked
                  />
                  <label htmlFor="ai-context" className="ml-2 text-sm">
                    Allow AI to use document context for better suggestions
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Privacy</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Control how your data is used and shared.
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={18} className="text-devscribe-teal" />
                  <span className="font-medium">Data Privacy Settings</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center h-6">
                    <input
                      id="telemetry"
                      type="checkbox"
                      className="w-4 h-4 text-devscribe-teal bg-devscribe-card-bg border-devscribe-border rounded focus:ring-devscribe-teal"
                      defaultChecked
                    />
                    <label htmlFor="telemetry" className="ml-2 text-sm">
                      Share anonymous usage data to help improve Devscribe
                    </label>
                  </div>
                  <div className="flex items-center h-6">
                    <input
                      id="crash-reports"
                      type="checkbox"
                      className="w-4 h-4 text-devscribe-teal bg-devscribe-card-bg border-devscribe-border rounded focus:ring-devscribe-teal"
                      defaultChecked
                    />
                    <label htmlFor="crash-reports" className="ml-2 text-sm">
                      Send crash reports automatically
                    </label>
                  </div>
                  <div className="flex items-center h-6">
                    <input
                      id="third-party"
                      type="checkbox"
                      className="w-4 h-4 text-devscribe-teal bg-devscribe-card-bg border-devscribe-border rounded focus:ring-devscribe-teal"
                    />
                    <label htmlFor="third-party" className="ml-2 text-sm">
                      Allow third-party integrations to access your data
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="advanced" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advanced</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Storage Location</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Choose where your documents are stored.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <Database size={18} className="text-devscribe-text-secondary" />
                  <span>Cloud</span>
                  <div className="ml-auto w-4 h-4 rounded-full bg-devscribe-teal"></div>
                </div>
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <Laptop size={18} className="text-devscribe-text-secondary" />
                  <span>Local</span>
                </div>
                <div className="flex-1 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center gap-3 cursor-pointer hover:border-devscribe-teal/50 transition-colors">
                  <Settings size={18} className="text-devscribe-text-secondary" />
                  <span>Custom</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Adjust settings to optimize performance based on your system capabilities.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">
                    Memory Usage Limit
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">Low</span>
                    <div className="flex-1 h-2 bg-devscribe-card-bg rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-devscribe-teal"></div>
                    </div>
                    <span className="text-sm">High</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    Process Priority
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2 bg-devscribe-card-bg border border-devscribe-border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50">
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="low">Low</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Reset Settings</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Restore all settings to their default values.
              </p>
              <button className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/30 rounded-md hover:bg-red-600/30 transition-colors">
                Reset to Defaults
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <div className="w-64 px-6 py-10">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default GlobalSettings; 