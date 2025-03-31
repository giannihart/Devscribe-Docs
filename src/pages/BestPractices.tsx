import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import TableOfContents from '../components/ui/TableOfContents';
import { Code, Shield, Zap, Lock, Terminal, BookOpen } from 'lucide-react';

const BestPractices = () => {
  const tocItems = [
    { id: 'code-generation', title: 'Code Generation' },
    { id: 'ai-collaboration', title: 'AI Collaboration' },
    { id: 'security', title: 'Security Practices' },
    { id: 'performance', title: 'Performance Optimization' },
    { id: 'workflow', title: 'Workflow Integration' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Developer Guidelines" 
          title="Best Practices"
          description="Maximize your productivity and code quality with Devscribe's recommended practices."
        />
        
        <section id="code-generation" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Code Generation Best Practices</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Code size={24} className="text-white" />
                <h3 className="text-lg font-medium">Review and Validate AI-Generated Code</h3>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Always review AI-generated code carefully. While Devscribe provides intelligent suggestions, human oversight is crucial:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>Check for logical correctness</li>
                <li>Verify security implications</li>
                <li>Ensure code follows your project's coding standards</li>
                <li>Run comprehensive tests on generated code</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="ai-collaboration" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">AI Collaboration Guidelines</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Zap size={24} className="text-white" />
                <h3 className="text-lg font-medium">Effective AI Interaction</h3>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Maximize the potential of AI collaboration by following these guidelines:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>Provide clear, specific context in your prompts</li>
                <li>Break complex tasks into smaller, manageable steps</li>
                <li>Use precise language and technical terminology</li>
                <li>Iterate and refine AI suggestions</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="security" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Security Practices</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield size={24} className="text-white" />
                <h3 className="text-lg font-medium">Protecting Sensitive Information</h3>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Ensure the security of your code and sensitive information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>Never share API keys or credentials in AI prompts</li>
                <li>Use environment variables for sensitive data</li>
                <li>Sanitize inputs before processing</li>
                <li>Regularly audit and rotate access tokens</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="performance" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Performance Optimization</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Lock size={24} className="text-white" />
                <h3 className="text-lg font-medium">Efficient AI Interactions</h3>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Optimize your workflow and AI interactions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>Use context windows efficiently</li>
                <li>Avoid redundant or overly verbose prompts</li>
                <li>Leverage code completion and inline suggestions</li>
                <li>Use project-wide context for more accurate suggestions</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="workflow" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Terminal size={24} className="text-white" />
                <h3 className="text-lg font-medium">Seamless Development Workflow</h3>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Integrate Devscribe smoothly into your existing development process:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>Configure IDE extensions for native experience</li>
                <li>Set up custom shortcuts and workflows</li>
                <li>Use version control integration</li>
                <li>Customize AI suggestions to match team standards</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mt-12 bg-gradient-to-r from-devscribe-teal/20 to-transparent border border-devscribe-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Continue Learning</h2>
          <p className="text-devscribe-text-secondary mb-6">
            Want to dive deeper into Devscribe's best practices and guidelines?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/guides" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors">
              <BookOpen size={18} />
              Explore Guides
            </a>
            <a href="/documentation" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-devscribe-hover-bg text-white rounded-md hover:bg-devscribe-hover-bg/80 transition-colors">
              Full Documentation
            </a>
          </div>
        </section>
      </div>
      
      <div className="w-64 px-6 py-10">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default BestPractices; 