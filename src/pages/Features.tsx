
import React from 'react';
import PageHeading from '../components/ui/PageHeading';

const Features = () => {
  return (
    <div className="px-12 py-10 max-w-5xl">
      <PageHeading 
        subtitle="Features" 
        title="Devscribe Features"
        description="Explore the full range of Devscribe's AI-powered capabilities designed to enhance your development workflow."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Autocomplete */}
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all">
          <div className="w-10 h-10 bg-devscribe-teal/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-devscribe-teal font-mono">⟨/⟩</span>
          </div>
          <h3 className="text-lg font-medium mb-2">Autocomplete</h3>
          <p className="text-devscribe-text-secondary text-sm">
            Get intelligent code suggestions as you type, considering the full context of your codebase.
          </p>
          <div className="mt-4">
            <a href="/features/autocomplete" className="text-devscribe-teal text-sm hover:underline inline-flex items-center gap-1">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all">
          <div className="w-10 h-10 bg-devscribe-teal/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-devscribe-teal">💬</span>
          </div>
          <h3 className="text-lg font-medium mb-2">Chat</h3>
          <p className="text-devscribe-text-secondary text-sm">
            Interact with an AI assistant that understands your code and can help solve problems.
          </p>
          <div className="mt-4">
            <a href="/features/chat" className="text-devscribe-teal text-sm hover:underline inline-flex items-center gap-1">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Command Mode */}
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all">
          <div className="w-10 h-10 bg-devscribe-teal/10 rounded-full flex items-center justify-center mb-4">
            <span className="text-devscribe-teal">&gt;_</span>
          </div>
          <h3 className="text-lg font-medium mb-2">Command</h3>
          <p className="text-devscribe-text-secondary text-sm">
            Execute specific actions like refactoring, generating tests, or explaining code.
          </p>
          <div className="mt-4">
            <a href="/features/command" className="text-devscribe-teal text-sm hover:underline inline-flex items-center gap-1">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Context Awareness */}
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all">
          <div className="w-10 h-10 bg-devscribe-teal/10 rounded-full flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#0ED3B9" strokeWidth="2"/>
              <path d="M12 8V16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 12H16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Context Awareness</h3>
          <p className="text-devscribe-text-secondary text-sm">
            Experience AI that truly understands your codebase's structure, patterns, and dependencies.
          </p>
          <div className="mt-4">
            <a href="/features/context-awareness" className="text-devscribe-teal text-sm hover:underline inline-flex items-center gap-1">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Cascade */}
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all">
          <div className="w-10 h-10 bg-devscribe-teal/10 rounded-full flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4H6C4.89543 4 4 4.89543 4 6V8" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 16V18C4 19.1046 4.89543 20 6 20H8" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 4H18C19.1046 4 20 4.89543 20 6V8" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 16V18C20 19.1046 19.1046 20 18 20H16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9V12" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="15" r="1" fill="#0ED3B9"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Cascade</h3>
          <p className="text-devscribe-text-secondary text-sm">
            Collaborate with an agentic AI that can understand tasks and execute multi-step operations.
          </p>
          <div className="mt-4">
            <a href="/windsurf/cascade" className="text-devscribe-teal text-sm hover:underline inline-flex items-center gap-1">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Windsurf Editor */}
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all">
          <div className="w-10 h-10 bg-devscribe-teal/10 rounded-full flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7L17 11L13 15" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 17L11 13L7 9" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Windsurf Editor</h3>
          <p className="text-devscribe-text-secondary text-sm">
            A complete IDE built from the ground up with AI at its core for maximum productivity.
          </p>
          <div className="mt-4">
            <a href="/windsurf/getting-started" className="text-devscribe-teal text-sm hover:underline inline-flex items-center gap-1">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
