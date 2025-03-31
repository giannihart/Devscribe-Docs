
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { Terminal as TerminalIcon } from 'lucide-react';

const WindsurfTerminal = () => {
  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Windsurf" 
        title="Terminal Integration"
        description="Learn how to use Windsurf's terminal integration features for a seamless development experience."
      />
      
      <div className="mt-8 space-y-6">
        <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <TerminalIcon size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Command Line Interface</h3>
              <p className="text-devscribe-text-secondary">
                Windsurf provides a powerful terminal-based interface that allows developers to interact with the AI assistant directly from their command line.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started with Terminal Commands</h2>
        <p className="text-devscribe-text-secondary mb-4">
          The Windsurf terminal integration allows you to access AI capabilities without leaving your terminal environment. Here are some of the most useful commands:
        </p>
        
        <div className="grid gap-4">
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-4">
            <code className="text-white">windsurf ask "How do I implement authentication in Next.js?"</code>
            <p className="text-sm text-devscribe-text-secondary mt-2">Ask Windsurf AI a question directly from your terminal</p>
          </div>
          
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-4">
            <code className="text-white">windsurf explain ./path/to/file.js</code>
            <p className="text-sm text-devscribe-text-secondary mt-2">Get an explanation of what a file or code snippet does</p>
          </div>
          
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-4">
            <code className="text-white">windsurf refactor ./path/to/file.js --pattern="singleton"</code>
            <p className="text-sm text-devscribe-text-secondary mt-2">Refactor a file to implement a specific design pattern</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Terminal Configuration</h2>
        <p className="text-devscribe-text-secondary mb-4">
          You can customize the terminal integration by creating a <code className="bg-devscribe-dark-gray px-1.5 py-0.5 rounded text-sm">.windsurfrc</code> file in your home directory or project root.
        </p>
        
        <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-4 mb-8">
          <pre className="text-devscribe-text-secondary">
{`{
  "model": "cascade-pro",
  "logLevel": "info",
  "maxTokens": 4096,
  "temperature": 0.7,
  "enableTerminalHistory": true
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default WindsurfTerminal;
