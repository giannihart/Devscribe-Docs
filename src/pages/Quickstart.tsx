import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Rocket, Download, Terminal, Code, Zap, ArrowRight } from 'lucide-react';

const Quickstart = () => {
  const tocItems = [
    { id: 'installation', title: 'Installation' },
    { id: 'first-steps', title: 'First Steps' },
    { id: 'key-features', title: 'Key Features' },
    { id: 'next-steps', title: 'Next Steps' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Get Started" 
          title="Quickstart"
          description="Get up and running with Devscribe in minutes."
        />
        
        <InfoBox>
          This quickstart guide will help you install Devscribe and start using its core features right away.
        </InfoBox>
        
        <section id="installation" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">System Requirements</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Before installing, make sure your system meets the following requirements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Windows</h4>
                  <ul className="list-disc pl-5 space-y-1 text-devscribe-text-secondary text-sm">
                    <li>Windows 10 or later</li>
                    <li>4GB RAM minimum (8GB recommended)</li>
                    <li>1GB free disk space</li>
                    <li>64-bit processor</li>
                  </ul>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">macOS</h4>
                  <ul className="list-disc pl-5 space-y-1 text-devscribe-text-secondary text-sm">
                    <li>macOS 10.15 (Catalina) or later</li>
                    <li>4GB RAM minimum (8GB recommended)</li>
                    <li>1GB free disk space</li>
                    <li>Intel or Apple Silicon processor</li>
                  </ul>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Linux</h4>
                  <ul className="list-disc pl-5 space-y-1 text-devscribe-text-secondary text-sm">
                    <li>Ubuntu 18.04+, Debian 10+, or compatible</li>
                    <li>4GB RAM minimum (8GB recommended)</li>
                    <li>1GB free disk space</li>
                    <li>64-bit processor</li>
                  </ul>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Web Version</h4>
                  <ul className="list-disc pl-5 space-y-1 text-devscribe-text-secondary text-sm">
                    <li>Chrome, Firefox, Edge, or Safari (latest versions)</li>
                    <li>Stable internet connection</li>
                    <li>Devscribe account</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Download & Install</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Follow these steps to download and install Devscribe on your system:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-devscribe-text-secondary">
                <li>
                  <div className="font-medium text-white">Download the installer</div>
                  <p className="mt-1">Visit the <a href="/download" className="text-devscribe-teal hover:underline">download page</a> and select the version for your operating system.</p>
                </li>
                <li>
                  <div className="font-medium text-white">Run the installer</div>
                  <p className="mt-1">Double-click the downloaded file and follow the installation wizard instructions.</p>
                </li>
                <li>
                  <div className="font-medium text-white">Launch Devscribe</div>
                  <p className="mt-1">Once installation is complete, launch Devscribe from your applications menu or desktop shortcut.</p>
                </li>
              </ol>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="/download" className="inline-flex items-center gap-2 px-4 py-2 bg-devscribe-teal text-black rounded-md hover:bg-devscribe-teal/90 transition-colors">
                  <Download size={18} />
                  <span>Download for Windows</span>
                </a>
                <a href="/download" className="inline-flex items-center gap-2 px-4 py-2 bg-devscribe-card-bg border border-devscribe-border text-white rounded-md hover:bg-devscribe-hover-bg transition-colors">
                  <span>See all platforms</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section id="first-steps" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">First Steps</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Creating Your First Document</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Let's create your first document in Devscribe:
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">1</div>
                  <div>
                    <div className="font-medium">Launch Devscribe and click "New Document" in the top-left corner</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Alternatively, use the keyboard shortcut <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+N</kbd> (Windows/Linux) or <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+N</kbd> (Mac)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">2</div>
                  <div>
                    <div className="font-medium">Choose a template or start with a blank document</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Templates provide pre-formatted structures for different types of documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">3</div>
                  <div>
                    <div className="font-medium">Start writing or add content blocks</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Use the "+" button or type "/" to access the command menu for adding blocks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">4</div>
                  <div>
                    <div className="font-medium">Save your document</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Press <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+S</kbd> (Windows/Linux) or <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+S</kbd> (Mac) to save</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Setting Up Your Workspace</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Customize your workspace to match your workflow:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-devscribe-teal flex items-center justify-center text-black text-xs font-medium">1</span>
                    Create a Project
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Click "New Project" in the sidebar to create a container for related documents.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-devscribe-teal flex items-center justify-center text-black text-xs font-medium">2</span>
                    Customize Theme
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Go to Settings {'>'}  Appearance to choose your preferred color theme.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-devscribe-teal flex items-center justify-center text-black text-xs font-medium">3</span>
                    Set Up Shortcuts
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Configure keyboard shortcuts in Settings {'>'}  Keyboard to speed up your workflow.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-devscribe-teal flex items-center justify-center text-black text-xs font-medium">4</span>
                    Connect Accounts
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Link your GitHub, Google Drive, or other accounts for seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="key-features" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Essential Features to Try</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Here are some key features to explore as you get started with Devscribe:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={18} className="text-devscribe-teal" />
                    <h4 className="font-medium">Code Blocks</h4>
                  </div>
                  <p className="text-sm text-devscribe-text-secondary flex-1">
                    Add syntax-highlighted code with support for 100+ programming languages.
                  </p>
                  <a href="/code-blocks" className="text-devscribe-teal text-sm mt-3 hover:underline">Learn more</a>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal size={18} className="text-devscribe-teal" />
                    <h4 className="font-medium">Command Palette</h4>
                  </div>
                  <p className="text-sm text-devscribe-text-secondary flex-1">
                    Access all commands quickly with <kbd className="px-1 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+P</kbd> or <kbd className="px-1 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+P</kbd>.
                  </p>
                  <a href="/navigation" className="text-devscribe-teal text-sm mt-3 hover:underline">Learn more</a>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={18} className="text-devscribe-teal" />
                    <h4 className="font-medium">AI Assistance</h4>
                  </div>
                  <p className="text-sm text-devscribe-text-secondary flex-1">
                    Get intelligent suggestions and autocompletions as you write.
                  </p>
                  <a href="/features/autocomplete" className="text-devscribe-teal text-sm mt-3 hover:underline">Learn more</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Tips</h3>
              <p className="text-devscribe-text-secondary mb-4">
                These tips will help you be more productive with Devscribe:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <div className="flex items-center gap-2">
                    <span className="text-devscribe-teal">💡</span>
                    <span>Type <code>/</code> anywhere to open the command menu for inserting blocks</span>
                  </div>
                </div>
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <div className="flex items-center gap-2">
                    <span className="text-devscribe-teal">💡</span>
                    <span>Use <kbd className="px-1 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+/</kbd> or <kbd className="px-1 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+/</kbd> to see all keyboard shortcuts</span>
                  </div>
                </div>
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <div className="flex items-center gap-2">
                    <span className="text-devscribe-teal">💡</span>
                    <span>Drag and drop images directly into your document</span>
                  </div>
                </div>
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <div className="flex items-center gap-2">
                    <span className="text-devscribe-teal">💡</span>
                    <span>Right-click on any block to see context-specific options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="next-steps" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Continue Your Learning</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Now that you've got the basics, here are some resources to help you master Devscribe:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/guides" className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md hover:border-devscribe-teal/50 transition-colors group">
                  <h4 className="font-medium mb-2 group-hover:text-devscribe-teal transition-colors">Guides & Tutorials</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Step-by-step tutorials for common workflows and advanced features.
                  </p>
                </a>
                <a href="/documentation" className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md hover:border-devscribe-teal/50 transition-colors group">
                  <h4 className="font-medium mb-2 group-hover:text-devscribe-teal transition-colors">Documentation</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Comprehensive reference for all Devscribe features and capabilities.
                  </p>
                </a>
                <a href="/community" className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md hover:border-devscribe-teal/50 transition-colors group">
                  <h4 className="font-medium mb-2 group-hover:text-devscribe-teal transition-colors">Community Forum</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Connect with other users, ask questions, and share your knowledge.
                  </p>
                </a>
                <a href="/development" className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md hover:border-devscribe-teal/50 transition-colors group">
                  <h4 className="font-medium mb-2 group-hover:text-devscribe-teal transition-colors">Development</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Learn how to extend Devscribe with plugins and integrations.
                  </p>
                </a>
              </div>
            </div>
            
            <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <Rocket size={20} className="text-devscribe-teal" />
                <h3 className="text-lg font-semibold">Ready to dive deeper?</h3>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Check out our comprehensive documentation to learn about all the powerful features Devscribe has to offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/documentation" className="px-4 py-2 bg-devscribe-teal text-black rounded-md font-medium hover:bg-devscribe-teal/90 transition-colors">
                  Explore Documentation
                </a>
                <a href="/community" className="px-4 py-2 bg-transparent border border-devscribe-border text-white rounded-md font-medium hover:bg-devscribe-hover-bg transition-colors">
                  Join Community
                </a>
              </div>
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

export default Quickstart; 