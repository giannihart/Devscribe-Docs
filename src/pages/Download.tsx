
import React from 'react';
import { ArrowDown, Monitor, Apple, Terminal } from 'lucide-react';

const Download = () => {
  const operatingSystems = [
    {
      name: 'Windows',
      icon: <Monitor size={24} />,
      versions: [
        { name: 'Windows x64', size: '84.2 MB', url: '#' },
        { name: 'Windows ARM64', size: '82.1 MB', url: '#' }
      ]
    },
    {
      name: 'macOS',
      icon: <Apple size={24} />,
      versions: [
        { name: 'macOS Universal', size: '92.5 MB', url: '#' },
        { name: 'macOS Apple Silicon', size: '86.3 MB', url: '#' },
        { name: 'macOS Intel', size: '90.7 MB', url: '#' }
      ]
    },
    {
      name: 'Linux',
      icon: <Terminal size={24} />,
      versions: [
        { name: 'Linux x64 (.deb)', size: '80.1 MB', url: '#' },
        { name: 'Linux x64 (.rpm)', size: '81.4 MB', url: '#' },
        { name: 'Linux x64 (AppImage)', size: '83.6 MB', url: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-codium-dark-gray to-black py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-codium-teal flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <span className="text-codium-teal font-medium text-2xl">codium</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Download Codium</h1>
          <p className="text-codium-text-secondary max-w-xl mx-auto">
            Get started with Codium's AI-powered development tools. Download the latest version for your platform.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {operatingSystems.map((os) => (
            <div key={os.name} className="bg-black/40 backdrop-blur-sm border border-codium-border rounded-xl p-6">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-codium-hover-bg flex items-center justify-center">
                  {os.icon}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">{os.name}</h2>
              
              <div className="space-y-3">
                {os.versions.map((version) => (
                  <a 
                    key={version.name} 
                    href={version.url}
                    className="flex items-center justify-between p-3 bg-codium-card-bg border border-codium-border rounded-lg hover:border-codium-teal/50 transition-all"
                  >
                    <div>
                      <p className="text-sm">{version.name}</p>
                      <p className="text-xs text-codium-text-secondary">{version.size}</p>
                    </div>
                    <ArrowDown size={16} className="text-codium-teal" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">IDE Extensions</h3>
          <p className="text-codium-text-secondary mb-6">
            Prefer to use your existing IDE? Install Codium extensions for your favorite editor.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="flex flex-col items-center p-4 bg-codium-card-bg border border-codium-border rounded-lg hover:border-codium-teal/50 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" className="w-10 h-10 mb-2" />
              <span className="text-sm">VS Code</span>
            </a>
            
            <a href="#" className="flex flex-col items-center p-4 bg-codium-card-bg border border-codium-border rounded-lg hover:border-codium-teal/50 transition-all">
              <img src="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png" alt="IntelliJ" className="w-10 h-10 mb-2" />
              <span className="text-sm">IntelliJ</span>
            </a>
            
            <a href="#" className="flex flex-col items-center p-4 bg-codium-card-bg border border-codium-border rounded-lg hover:border-codium-teal/50 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Neovim-logo.svg" alt="Neovim" className="w-10 h-10 mb-2" />
              <span className="text-sm">Neovim</span>
            </a>
            
            <a href="#" className="flex flex-col items-center p-4 bg-codium-card-bg border border-codium-border rounded-lg hover:border-codium-teal/50 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" alt="Emacs" className="w-10 h-10 mb-2" />
              <span className="text-sm">Emacs</span>
            </a>
            
            <a href="#" className="flex flex-col items-center p-4 bg-codium-card-bg border border-codium-border rounded-lg hover:border-codium-teal/50 transition-all">
              <img src="https://www.sublimehq.com/images/sublime_text.png" alt="Sublime Text" className="w-10 h-10 mb-2" />
              <span className="text-sm">Sublime Text</span>
            </a>
            
            <a href="/extensions/getting-started" className="flex flex-col items-center justify-center p-4 bg-codium-card-bg border border-codium-border rounded-lg hover:border-codium-teal/50 transition-all">
              <span className="text-3xl mb-1">...</span>
              <span className="text-sm">More Editors</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
