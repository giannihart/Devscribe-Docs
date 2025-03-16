
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { Code, Zap, Sparkles, Settings } from 'lucide-react';

const FeaturesAutocomplete = () => {
  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Features" 
        title="AI-Powered Autocomplete"
        description="Boost your productivity with Codium's intelligent code completion."
      />
      
      <div className="mt-8 space-y-6">
        <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-codium-teal/10 rounded-lg">
              <Zap size={24} className="text-codium-teal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contextual Code Completion</h3>
              <p className="text-codium-text-secondary">
                Codium's autocomplete understands not just the syntax of your code, but also its context and intent. It uses advanced machine learning to suggest code that makes sense for what you're trying to accomplish.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center p-3 bg-codium-hover-bg rounded-full mb-3">
                <Code size={24} className="text-codium-teal" />
              </div>
              <h3 className="text-lg font-semibold">Understands Your Code</h3>
            </div>
            <p className="text-sm text-codium-text-secondary text-center">
              Analyzes your codebase to understand your coding style, patterns, and dependencies.
            </p>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center p-3 bg-codium-hover-bg rounded-full mb-3">
                <Sparkles size={24} className="text-codium-teal" />
              </div>
              <h3 className="text-lg font-semibold">Generates Suggestions</h3>
            </div>
            <p className="text-sm text-codium-text-secondary text-center">
              Creates intelligent code completion suggestions as you type, often predicting entire functions or blocks.
            </p>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center p-3 bg-codium-hover-bg rounded-full mb-3">
                <Settings size={24} className="text-codium-teal" />
              </div>
              <h3 className="text-lg font-semibold">Learns From You</h3>
            </div>
            <p className="text-sm text-codium-text-secondary text-center">
              Continuously adapts to your coding style and preferences, becoming more accurate over time.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Example</h2>
        
        <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6 overflow-hidden">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-codium-text-secondary ml-2">main.js</span>
            </div>
            
            <pre className="text-sm font-mono overflow-x-auto"><code className="text-codium-text-secondary">
{`// User types:
function calculateTotal(items) {
  
// Codium suggests:
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}`}
            </code></pre>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Key Features</h2>
        
        <div className="space-y-4">
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Multi-line Completions</h3>
            <p className="text-codium-text-secondary">
              Suggests complete functions, methods, and code blocks that span multiple lines, saving you significant typing time.
            </p>
          </div>
          
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Language Awareness</h3>
            <p className="text-codium-text-secondary">
              Supports over 40 programming languages with tailored suggestions that align with language-specific best practices.
            </p>
          </div>
          
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Project Context</h3>
            <p className="text-codium-text-secondary">
              Considers your entire project structure, imported libraries, and custom components when making suggestions.
            </p>
          </div>
          
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Customization Options</h3>
            <p className="text-codium-text-secondary">
              Adjust suggestion frequency, style preferences, and other settings to tailor the autocomplete experience to your workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAutocomplete;
