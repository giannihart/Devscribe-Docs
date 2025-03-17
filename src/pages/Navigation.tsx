import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Navigation as NavIcon, Search, Menu, ChevronRight, Command, Keyboard } from 'lucide-react';

const Navigation = () => {
  const tocItems = [
    { id: 'basics', title: 'Basics' },
    { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts' },
    { id: 'command-palette', title: 'Command Palette' },
    { id: 'advanced', title: 'Advanced Navigation' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Essentials" 
          title="Navigation"
          description="Learn how to efficiently navigate through Devscribe's interface and features."
        />
        
        <InfoBox>
          Mastering navigation shortcuts and techniques can significantly improve your productivity when using Devscribe.
        </InfoBox>
        
        <section id="basics" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Basics</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Sidebar Navigation</h3>
              <p className="text-devscribe-text-secondary mb-4">
                The sidebar provides quick access to all major sections of Devscribe. You can collapse or expand the sidebar by clicking the menu icon in the top-left corner or by pressing <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+B</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+B</kbd> (Mac).
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <div className="flex items-center gap-3 mb-4">
                  <Menu size={18} className="text-devscribe-teal" />
                  <span className="font-medium">Sidebar Sections</span>
                </div>
                <ul className="space-y-2 pl-7">
                  <li className="text-devscribe-text-secondary">Documentation</li>
                  <li className="text-devscribe-text-secondary">Guides</li>
                  <li className="text-devscribe-text-secondary">Community</li>
                  <li className="text-devscribe-text-secondary">Blog</li>
                  <li className="text-devscribe-text-secondary">Get Started</li>
                  <li className="text-devscribe-text-secondary">Essentials</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Quickly find content by using the search bar at the top of the interface. Access the search bar by clicking on it or by pressing <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+K</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+K</kbd> (Mac).
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border flex items-center gap-3">
                <Search size={18} className="text-devscribe-text-secondary" />
                <span className="text-devscribe-text-secondary">Search documentation...</span>
                <span className="ml-auto px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border text-xs">Ctrl+K</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Breadcrumbs</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Breadcrumbs at the top of each page help you understand your current location and navigate back to parent sections.
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <div className="flex items-center gap-2 text-sm">
                  <a href="/" className="text-devscribe-text-secondary hover:text-devscribe-teal transition-colors">Home</a>
                  <ChevronRight size={14} className="text-devscribe-text-secondary" />
                  <a href="/documentation" className="text-devscribe-text-secondary hover:text-devscribe-teal transition-colors">Documentation</a>
                  <ChevronRight size={14} className="text-devscribe-text-secondary" />
                  <a href="/essentials" className="text-devscribe-text-secondary hover:text-devscribe-teal transition-colors">Essentials</a>
                  <ChevronRight size={14} className="text-devscribe-text-secondary" />
                  <span className="text-white">Navigation</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="keyboard-shortcuts" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Keyboard Shortcuts</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Navigation Shortcuts</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Use these keyboard shortcuts to navigate quickly through Devscribe:
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-devscribe-border">
                      <th className="text-left py-2 px-4">Action</th>
                      <th className="text-left py-2 px-4">Windows/Linux</th>
                      <th className="text-left py-2 px-4">Mac</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4">Toggle Sidebar</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+B</kbd></td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+B</kbd></td>
                    </tr>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4">Focus Search</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+K</kbd></td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+K</kbd></td>
                    </tr>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4">Go to Home</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Alt+H</kbd></td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Option+H</kbd></td>
                    </tr>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4">Go to Documentation</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Alt+D</kbd></td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Option+D</kbd></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Open Command Palette</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+Shift+P</kbd></td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+Shift+P</kbd></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Page Navigation</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Navigate within a page using these shortcuts:
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-devscribe-border">
                      <th className="text-left py-2 px-4">Action</th>
                      <th className="text-left py-2 px-4">Shortcut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4">Scroll to Top</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Home</kbd></td>
                    </tr>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4">Scroll to Bottom</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">End</kbd></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Jump to Section</td>
                      <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Alt+[1-9]</kbd> or <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Option+[1-9]</kbd></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="command-palette" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Command Palette</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Using the Command Palette</h3>
              <p className="text-devscribe-text-secondary mb-4">
                The Command Palette provides quick access to all Devscribe features and commands. Access it by pressing <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+Shift+P</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+Shift+P</kbd> (Mac).
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <div className="flex items-center gap-3 mb-4">
                  <Command size={18} className="text-devscribe-teal" />
                  <span className="font-medium">Command Palette</span>
                </div>
                <div className="bg-devscribe-hover-bg p-3 rounded-md mb-3 flex items-center gap-3">
                  <Search size={16} className="text-devscribe-text-secondary" />
                  <span className="text-devscribe-text-secondary">Type a command or search...</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 hover:bg-devscribe-hover-bg rounded-md transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <NavIcon size={16} className="text-devscribe-text-secondary" />
                      <span>Go to Documentation</span>
                    </div>
                    <span className="text-xs text-devscribe-text-secondary">Alt+D</span>
                  </div>
                  <div className="p-2 hover:bg-devscribe-hover-bg rounded-md transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Search size={16} className="text-devscribe-text-secondary" />
                      <span>Search Documentation</span>
                    </div>
                    <span className="text-xs text-devscribe-text-secondary">Ctrl+K</span>
                  </div>
                  <div className="p-2 hover:bg-devscribe-hover-bg rounded-md transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Keyboard size={16} className="text-devscribe-text-secondary" />
                      <span>Show Keyboard Shortcuts</span>
                    </div>
                    <span className="text-xs text-devscribe-text-secondary">Ctrl+/</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Command Types</h3>
              <p className="text-devscribe-text-secondary mb-4">
                The Command Palette provides access to various types of commands:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li><strong>Navigation commands:</strong> Quickly jump to different sections of the application</li>
                <li><strong>Action commands:</strong> Perform specific actions like creating a new document</li>
                <li><strong>Search commands:</strong> Search for content within the documentation</li>
                <li><strong>Setting commands:</strong> Adjust application settings</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="advanced" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advanced Navigation</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Custom Navigation Shortcuts</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can create custom keyboard shortcuts for frequently used navigation paths in the settings menu.
              </p>
              <a href="/global-settings" className="inline-flex items-center gap-2 text-devscribe-teal hover:underline">
                Configure custom shortcuts <ChevronRight size={16} />
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Navigation History</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe keeps track of your navigation history, allowing you to quickly go back and forward between pages you've visited.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Alt+←</kbd>
                  <span className="text-devscribe-text-secondary">Go back</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Alt+→</kbd>
                  <span className="text-devscribe-text-secondary">Go forward</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Access Bookmarks</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Bookmark frequently visited pages for quick access. Add a bookmark by pressing <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+D</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+D</kbd> (Mac) on any page.
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-medium">Bookmarked Pages</span>
                </div>
                <ul className="space-y-2">
                  <li className="p-2 hover:bg-devscribe-hover-bg rounded-md transition-colors">
                    <a href="/documentation" className="text-devscribe-text-secondary hover:text-white transition-colors">Documentation Home</a>
                  </li>
                  <li className="p-2 hover:bg-devscribe-hover-bg rounded-md transition-colors">
                    <a href="/features/autocomplete" className="text-devscribe-text-secondary hover:text-white transition-colors">Autocomplete Feature</a>
                  </li>
                  <li className="p-2 hover:bg-devscribe-hover-bg rounded-md transition-colors">
                    <a href="/windsurf/getting-started" className="text-devscribe-text-secondary hover:text-white transition-colors">Windsurf Getting Started</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Need help with navigation?</h3>
            <p className="text-devscribe-text-secondary mb-4">
              Check out our comprehensive documentation or join our community forum to learn more about navigating Devscribe efficiently.
            </p>
            <div className="flex items-center gap-4">
              <a href="/documentation" className="px-4 py-2 bg-devscribe-teal text-black rounded-md font-medium hover:bg-devscribe-teal/90 transition-colors">
                View Documentation
              </a>
              <a href="/community" className="px-4 py-2 bg-transparent border border-devscribe-border text-white rounded-md font-medium hover:bg-devscribe-hover-bg transition-colors">
                Join Community
              </a>
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

export default Navigation; 