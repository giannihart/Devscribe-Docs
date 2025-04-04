import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import TableOfContents from '../components/ui/TableOfContents';

const Documentation = () => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'installation', title: 'Installation' },
    { id: 'configuration', title: 'Configuration' },
    { id: 'usage', title: 'Usage' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Documentation" 
          title="Devscribe Documentation"
          description="Comprehensive guides to help you get the most out of Devscribe's AI-powered tools."
        />
        
        <section id="introduction" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-devscribe-text-secondary mb-8">
            Devscribe is a suite of AI-powered developer tools designed to enhance productivity, code quality, and developer experience. Through contextual understanding of your codebase, Devscribe provides intelligent code suggestions, autocompletions, and insights that help you write better code faster.
          </p>
        </section>
        
        <section id="getting-started" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-devscribe-text-secondary mb-8">
            Getting started with Devscribe is straightforward. You can choose to use our Windsurf editor or install extensions for your favorite IDE. Both options provide access to Devscribe's powerful AI features.
          </p>
        </section>
        
        <section id="installation" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p className="text-devscribe-text-secondary mb-4">
            There are several ways to start using Devscribe based on your workflow:
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-devscribe-card-bg border border-devscribe-border p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-2">Windsurf Editor</h3>
              <p className="text-devscribe-text-secondary text-sm mb-3">
                Download and install the Windsurf editor for a fully integrated Devscribe experience.
              </p>
              <a href="/download" className="text-white text-sm hover:underline inline-flex items-center gap-1">
                Download Windsurf
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-2">IDE Extensions</h3>
              <p className="text-devscribe-text-secondary text-sm mb-3">
                Install Devscribe extensions for your preferred IDE (VSCode, JetBrains, Neovim, etc).
              </p>
              <a href="/extensions/getting-started" className="text-white text-sm hover:underline inline-flex items-center gap-1">
                Browse Extensions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        <section id="configuration" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          <p className="text-devscribe-text-secondary mb-4">
            Configure Devscribe to suit your workflow and preferences:
          </p>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border p-6 rounded-xl mb-8">
            <h3 className="text-lg font-medium mb-2">Authorization</h3>
            <p className="text-devscribe-text-secondary text-sm">
              After installation, you'll need to authenticate your Devscribe account. Follow the prompts in your application or extension to sign in or create a new account.
            </p>
          </div>
        </section>
        
        <section id="usage" className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-devscribe-text-secondary mb-6">
            Devscribe offers multiple ways to interact with its AI capabilities:
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 8L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">Autocomplete</h4>
                <p className="text-devscribe-text-secondary text-sm">
                  Start typing and Devscribe will offer intelligent code completions based on your context.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">Chat Interface</h4>
                <p className="text-devscribe-text-secondary text-sm">
                  Ask questions, request explanations, or get suggestions using the Cascade chat interface.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">Command Mode</h4>
                <p className="text-devscribe-text-secondary text-sm">
                  Use command mode for specific actions like refactoring, generating tests, or explaining code.
                </p>
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

export default Documentation;
