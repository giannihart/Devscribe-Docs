
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import InfoBox from '../../components/ui/InfoBox';
import { MessageSquare, Code, RefreshCw, Layers } from 'lucide-react';

const WindsurfCascade = () => {
  return (
    <div className="px-12 py-10 max-w-4xl">
      <PageHeading 
        subtitle="Windsurf" 
        title="Cascade AI Assistant"
        description="Learn about Cascade, Devscribe's agentic AI assistant that understands your codebase and helps solve complex problems."
      />
      
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is Cascade?</h2>
          <p className="text-devscribe-text-secondary mb-4">
            Cascade is an agentic AI assistant built into Windsurf that can understand and reason about your codebase. Unlike traditional AI tools that provide simple completions, Cascade can follow complex instructions, explore your code to gather context, and execute multi-step operations to solve programming challenges.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <Layers size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Contextual Understanding</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Cascade automatically explores and understands your codebase's structure, dependencies, and patterns, enabling it to provide suggestions that align with your project's architecture and style.
              </p>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <RefreshCw size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Agentic Workflow</h3>
              <p className="text-devscribe-text-secondary text-sm">
                When given a task, Cascade can break it down into subtasks, gather necessary information from your codebase, and execute a multi-step plan to achieve your goal.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Using Cascade</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Opening the Chat Interface</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  Access Cascade by clicking the chat icon in the sidebar or using the keyboard shortcut <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded text-xs">Ctrl</kbd> + <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded text-xs">Shift</kbd> + <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded text-xs">C</kbd>.
                </p>
                <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-4 flex items-center gap-4">
                  <MessageSquare size={32} className="text-white" />
                  <div>
                    <p className="text-sm font-medium">Chat Panel Location</p>
                    <p className="text-xs text-devscribe-text-secondary">
                      You can customize the chat panel position in Settings → Layout → Cascade Panel Position.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Crafting Effective Prompts</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  Cascade works best with clear, specific prompts that describe what you're trying to achieve. You can reference files, functions, or code patterns in your requests.
                </p>
                
                <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl overflow-hidden">
                  <div className="bg-devscribe-hover-bg p-3 border-b border-devscribe-border">
                    <p className="text-sm font-medium">Example prompts:</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm">"Create a React component for a user profile page that displays name, email, and avatar"</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm">"Refactor the authentication service to use async/await instead of promises"</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm">"Find performance bottlenecks in the data fetching logic in src/services/api.js"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Applying Suggestions</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  When Cascade generates code, you can directly apply suggested changes to your codebase. Hover over code blocks in the chat to reveal action buttons for applying, copying, or dismissing suggestions.
                </p>
                
                <InfoBox>
                  For complex changes affecting multiple files, Cascade will provide a summary of all changes and allow you to review them before applying.
                </InfoBox>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Multi-turn Conversations</h3>
                <p className="text-devscribe-text-secondary mb-3">
                  Cascade maintains context throughout your conversation, so you can refine, iterate, and build upon previous interactions. This makes it ideal for complex tasks that require back-and-forth communication.
                </p>
                
                <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={16} className="text-white" />
                    <span className="text-sm font-medium">Pro tip:</span>
                  </div>
                  <p className="text-sm text-devscribe-text-secondary">
                    You can select code in your editor and send it to Cascade by right-clicking and selecting "Ask Cascade about selected code" or using the shortcut <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded text-xs">Alt</kbd> + <kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded text-xs">C</kbd>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Advanced Cascade Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Code Generation</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Cascade can generate complete components, functions, or entire modules based on your specifications, ensuring they follow your project's coding style and architecture.
              </p>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Code Explanation</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Ask Cascade to explain complex code segments, algorithms, or patterns in your codebase to help you understand unfamiliar code.
              </p>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Refactoring</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Cascade can help refactor code to improve readability, performance, or to follow modern practices, while maintaining functionality.
              </p>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">Debugging</h3>
              <p className="text-devscribe-text-secondary text-sm">
                When you encounter errors, share them with Cascade to get analysis and solutions, including identifying root causes and suggesting fixes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-devscribe-teal/20 to-transparent border border-devscribe-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="text-devscribe-text-secondary mb-6">
            Now that you understand Cascade, explore these related topics to get the most out of your Windsurf experience:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/windsurf/models" className="flex-1 bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <h3 className="font-medium mb-1">AI Models</h3>
              <p className="text-sm text-devscribe-text-secondary">Learn about the different AI models available in Windsurf.</p>
            </a>
            <a href="/windsurf/usage" className="flex-1 bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <h3 className="font-medium mb-1">Daily Usage</h3>
              <p className="text-sm text-devscribe-text-secondary">Discover best practices for using Windsurf in your workflow.</p>
            </a>
            <a href="/windsurf/advanced" className="flex-1 bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <h3 className="font-medium mb-1">Advanced Features</h3>
              <p className="text-sm text-devscribe-text-secondary">Explore advanced capabilities for power users.</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WindsurfCascade;
