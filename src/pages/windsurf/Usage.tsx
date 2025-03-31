
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { Code, GitBranch, GitMerge, PencilRuler } from 'lucide-react';

const WindsurfUsage = () => {
  return (
    <div className="px-12 py-10 max-w-4xl">
      <PageHeading 
        subtitle="Windsurf" 
        title="Daily Usage Guide"
        description="Learn how to effectively use Windsurf in your daily development workflow."
      />
      
      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Workflow Integration</h2>
          
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">Feature Development Workflow</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Planning Phase</h4>
                    <p className="text-devscribe-text-secondary text-sm mb-3">
                      Ask Cascade to analyze requirements and suggest implementation approaches. Describe your feature goals in natural language.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm italic">"I need to implement a user authentication system with email/password login and social auth. What would be the best approach for our React application?"</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Implementation</h4>
                    <p className="text-devscribe-text-secondary text-sm mb-3">
                      Use Cascade to generate code scaffolds, components, and functionality. Refine through iterative conversations.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm italic">"Create a login form component with validation that connects to our authentication API"</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Testing</h4>
                    <p className="text-devscribe-text-secondary text-sm mb-3">
                      Have Cascade generate tests for your implementation. Request test cases that cover edge cases and failure scenarios.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm italic">"Write unit tests for the login form component, focusing on validation logic and API error handling"</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Code Review Preparation</h4>
                    <p className="text-devscribe-text-secondary text-sm mb-3">
                      Ask Cascade to review your code for improvements, performance issues, or security concerns before submitting for human review.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm italic">"Review my authentication implementation for security best practices and potential performance issues"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Task-Specific Usage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Code Generation</h3>
              <p className="text-devscribe-text-secondary text-sm mb-4">
                Use Cascade to create boilerplate, components, or entire feature implementations.
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Effective prompts:</h4>
                <ul className="list-disc list-inside text-xs text-devscribe-text-secondary space-y-1">
                  <li>Be specific about required functionality</li>
                  <li>Mention frameworks, libraries, and patterns</li>
                  <li>Specify input/output requirements</li>
                  <li>Reference existing code patterns</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <PencilRuler size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Code Transformation</h3>
              <p className="text-devscribe-text-secondary text-sm mb-4">
                Refactor, optimize, or convert code between languages, frameworks, or styles.
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Effective prompts:</h4>
                <ul className="list-disc list-inside text-xs text-devscribe-text-secondary space-y-1">
                  <li>Select code before asking for transformation</li>
                  <li>Clearly state the desired outcome</li>
                  <li>Specify performance or readability goals</li>
                  <li>Mention what should remain unchanged</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <GitBranch size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Bug Fixing</h3>
              <p className="text-devscribe-text-secondary text-sm mb-4">
                Use Cascade to identify and fix bugs in your code with contextual understanding.
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Effective prompts:</h4>
                <ul className="list-disc list-inside text-xs text-devscribe-text-secondary space-y-1">
                  <li>Share error messages and stack traces</li>
                  <li>Provide steps to reproduce the issue</li>
                  <li>Explain expected vs. actual behavior</li>
                  <li>Share relevant code snippets</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <GitMerge size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Learning & Understanding</h3>
              <p className="text-devscribe-text-secondary text-sm mb-4">
                Use Cascade to explain complex code, learn new concepts, or understand unfamiliar codebases.
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Effective prompts:</h4>
                <ul className="list-disc list-inside text-xs text-devscribe-text-secondary space-y-1">
                  <li>Ask for explanations in simple terms</li>
                  <li>Request visual diagrams when appropriate</li>
                  <li>Ask for comparisons to familiar concepts</li>
                  <li>Request examples that illustrate the concept</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Iterative Refinement</h3>
                <p className="text-devscribe-text-secondary text-sm">
                  Start with broader requests and progressively refine through conversation rather than trying to get perfect results in a single prompt.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Contextual Clarity</h3>
                <p className="text-devscribe-text-secondary text-sm">
                  When switching topics, start new chat threads to maintain clear context boundaries and avoid confusion.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Code Review</h3>
                <p className="text-devscribe-text-secondary text-sm">
                  Always manually review AI-generated code before committing to production, especially for security-sensitive features.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Knowledge Sharing</h3>
                <p className="text-devscribe-text-secondary text-sm">
                  Save useful conversations as snippets to share with team members or reference later for similar problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Feedback Loop</h3>
                <p className="text-devscribe-text-secondary text-sm">
                  Provide feedback on AI responses to help improve future suggestions. Use the thumbs up/down buttons when available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WindsurfUsage;
