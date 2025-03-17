
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import InfoBox from '../../components/ui/InfoBox';
import { Terminal, Download, Settings, Play } from 'lucide-react';

const WindsurfGettingStarted = () => {
  return (
    <div className="px-12 py-10 max-w-4xl">
      <PageHeading 
        subtitle="Windsurf" 
        title="Getting Started with Windsurf"
        description="Learn how to install and set up the Windsurf editor for a powerful AI-assisted coding experience."
      />
      
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is Windsurf?</h2>
          <p className="text-devscribe-text-secondary mb-4">
            Windsurf is Devscribe's flagship editor, built from the ground up with AI capabilities at its core. It combines the familiar feel of a modern code editor with revolutionary AI features that understand your codebase and help you write better code faster.
          </p>
          
          <div className="mt-6 aspect-video bg-black rounded-xl overflow-hidden border border-devscribe-border">
            <div className="w-full h-full bg-gradient-to-br from-devscribe-card-bg to-black flex items-center justify-center">
              <div className="text-center">
                <Play size={48} className="mx-auto mb-4 text-devscribe-teal" />
                <p className="text-sm text-devscribe-text-secondary">Windsurf Demo Video</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-devscribe-teal/10 text-devscribe-teal flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Download Windsurf</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  Download the latest version of Windsurf for your operating system.
                </p>
                <a href="/download" className="inline-flex items-center gap-2 px-4 py-2 bg-devscribe-teal text-black rounded-md font-medium hover:bg-devscribe-teal/90 transition-colors">
                  <Download size={16} />
                  Download Windsurf
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-devscribe-teal/10 text-devscribe-teal flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Run the Installer</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  Follow the installation wizard to complete the setup process. The installer will guide you through configuring basic settings.
                </p>
                <div className="bg-devscribe-card-bg border border-devscribe-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal size={16} className="text-devscribe-teal" />
                    <span className="text-sm font-medium">Or install via command line:</span>
                  </div>
                  <div className="bg-black rounded p-2 font-mono text-sm">
                    <p># macOS/Linux</p>
                    <p>curl -fsSL https://get.devscribe.ai | sh</p>
                    <p className="mt-2"># Windows (PowerShell)</p>
                    <p>iwr -useb https://get.devscribe.ai/win | iex</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-devscribe-teal/10 text-devscribe-teal flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Set Up Authentication</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  Launch Windsurf and sign in with your Devscribe account. If you don't have an account yet, you can create one during this step.
                </p>
                <InfoBox>
                  Enterprise users: If your organization uses SSO, select "Sign in with SSO" and enter your company domain.
                </InfoBox>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-devscribe-teal/10 text-devscribe-teal flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Configure Settings</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  Customize your Windsurf experience by configuring settings like theme, keybindings, and AI preferences.
                </p>
                <div className="bg-devscribe-card-bg border border-devscribe-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings size={16} className="text-devscribe-teal" />
                    <span className="text-sm font-medium">Recommended settings:</span>
                  </div>
                  <ul className="text-sm space-y-2 text-devscribe-text-secondary">
                    <li>• Enable "AI Suggestions" for real-time code completion</li>
                    <li>• Set your preferred AI model (Standard or Advanced)</li>
                    <li>• Configure code indexing settings for your projects</li>
                    <li>• Customize the Cascade chat interface position</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/windsurf/cascade" className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-5 hover:border-devscribe-teal/50 transition-all">
              <h3 className="text-lg font-medium mb-2">Try Cascade</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Learn how to use the Cascade AI assistant for code generation and problem-solving.
              </p>
            </a>
            
            <a href="/windsurf/models" className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-5 hover:border-devscribe-teal/50 transition-all">
              <h3 className="text-lg font-medium mb-2">Explore Models</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Understand the different AI models available and when to use each one.
              </p>
            </a>
            
            <a href="/windsurf/usage" className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-5 hover:border-devscribe-teal/50 transition-all">
              <h3 className="text-lg font-medium mb-2">Daily Usage</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Discover workflows and best practices for integrating Windsurf into your daily coding.
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WindsurfGettingStarted;
