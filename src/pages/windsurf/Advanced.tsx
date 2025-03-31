
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { Sliders, Code, Cpu, RefreshCw } from 'lucide-react';

const WindsurfAdvanced = () => {
  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Windsurf" 
        title="Advanced Features"
        description="Explore the advanced capabilities and customization options of Windsurf."
      />
      
      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Custom Model Configuration</h2>
        <p className="text-devscribe-text-secondary mb-6">
          Windsurf allows advanced users to fine-tune the behavior of the AI models to better suit their specific needs and workflows.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-white/10 rounded-md">
                <Sliders size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Parameter Tuning</h3>
            </div>
            <p className="text-devscribe-text-secondary">
              Adjust temperature, top-p, and other parameters to control the creativity and predictability of AI responses.
            </p>
            <div className="mt-4 bg-devscribe-dark-gray p-3 rounded-md">
              <code className="text-xs text-devscribe-text-secondary">
                {`// In .windsurf/config.json
{
  "models": {
    "cascade-pro": {
      "temperature": 0.3,
      "top_p": 0.95,
      "max_tokens": 8192
    }
  }
}`}
              </code>
            </div>
          </div>
          
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-white/10 rounded-md">
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Code Style Enforcement</h3>
            </div>
            <p className="text-devscribe-text-secondary">
              Configure Windsurf to adhere to your team's specific coding style and conventions.
            </p>
            <div className="mt-4 bg-devscribe-dark-gray p-3 rounded-md">
              <code className="text-xs text-devscribe-text-secondary">
                {`// In .windsurf/config.json
{
  "codeStyle": {
    "indentation": "spaces",
    "indentSize": 2,
    "quoteStyle": "single",
    "semicolons": true
  }
}`}
              </code>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">AI Engine Customization</h2>
        <p className="text-devscribe-text-secondary mb-6">
          For enterprise users, Windsurf offers ways to customize the underlying AI engine to better integrate with proprietary systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-white/10 rounded-md">
                <Cpu size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Private Model Deployment</h3>
            </div>
            <p className="text-devscribe-text-secondary">
              Connect Windsurf to your organization's private AI models for enhanced security and customization.
            </p>
          </div>
          
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-white/10 rounded-md">
                <RefreshCw size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Continuous Learning</h3>
            </div>
            <p className="text-devscribe-text-secondary">
              Enable fine-tuning based on your team's feedback to constantly improve code suggestions and explanations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindsurfAdvanced;
