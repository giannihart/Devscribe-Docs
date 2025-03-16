
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import InfoBox from '../../components/ui/InfoBox';
import { Zap, Shield, BarChart4, Cpu } from 'lucide-react';

const WindsurfModels = () => {
  return (
    <div className="px-12 py-10 max-w-4xl">
      <PageHeading 
        subtitle="Windsurf" 
        title="AI Models"
        description="Learn about the different AI models available in Windsurf and how to choose the right one for your needs."
      />
      
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Available Models</h2>
          
          <div className="space-y-6">
            <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codium-teal to-blue-500 flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Codium Standard</h3>
                    <span className="text-xs bg-codium-teal/20 text-codium-teal px-2 py-0.5 rounded-full">Default</span>
                  </div>
                  <p className="text-codium-text-secondary mt-2">
                    A balanced model optimized for everyday coding tasks with fast response times and broad language support.
                  </p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Best for</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Code completion</li>
                        <li>• Simple refactoring</li>
                        <li>• Documentation generation</li>
                        <li>• Everyday coding tasks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Specifications</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Context window: 16K tokens</li>
                        <li>• Languages: 20+ programming languages</li>
                        <li>• Response time: Very fast</li>
                        <li>• Included in: Free & Paid plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <BarChart4 size={24} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Codium Advanced</h3>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">Pro & Team</span>
                  </div>
                  <p className="text-codium-text-secondary mt-2">
                    Our most capable model with enhanced reasoning abilities for complex tasks and larger context understanding.
                  </p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Best for</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Complex problem solving</li>
                        <li>• System design</li>
                        <li>• Advanced refactoring</li>
                        <li>• In-depth code analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Specifications</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Context window: 32K tokens</li>
                        <li>• Languages: 30+ programming languages</li>
                        <li>• Response time: Fast</li>
                        <li>• Included in: Pro & Team plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <Cpu size={24} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Codium Enterprise</h3>
                    <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">Enterprise</span>
                  </div>
                  <p className="text-codium-text-secondary mt-2">
                    Specialized for enterprise needs with maximum context retention, industry-specific optimizations, and enhanced security.
                  </p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Best for</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Large codebase understanding</li>
                        <li>• Industry-specific development</li>
                        <li>• Enterprise architecture</li>
                        <li>• Compliance-focused projects</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Specifications</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Context window: 100K+ tokens</li>
                        <li>• Languages: All major languages</li>
                        <li>• Response time: Optimized</li>
                        <li>• Included in: Enterprise plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Local Models</h3>
                    <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded-full">All Plans</span>
                  </div>
                  <p className="text-codium-text-secondary mt-2">
                    Run selected AI capabilities directly on your machine without sending data to external servers. Perfect for air-gapped environments or sensitive projects.
                  </p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Best for</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Security-sensitive code</li>
                        <li>• Air-gapped environments</li>
                        <li>• Basic code completion</li>
                        <li>• Offline development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Specifications</h4>
                      <ul className="text-xs text-codium-text-secondary space-y-1">
                        <li>• Context window: 4K tokens</li>
                        <li>• Languages: Common languages</li>
                        <li>• Response time: Varies by hardware</li>
                        <li>• Hardware: 16GB+ RAM recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Choosing the Right Model</h2>
          
          <p className="text-codium-text-secondary mb-6">
            Selecting the appropriate model depends on your specific needs, hardware capabilities, and the complexity of your tasks.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-codium-border">
                  <th className="text-left py-3 px-4 text-sm font-medium">Task Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium">Recommended Model</th>
                  <th className="text-left py-3 px-4 text-sm font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="text-codium-text-secondary">
                <tr className="border-b border-codium-border">
                  <td className="py-3 px-4 text-sm">Quick code completions</td>
                  <td className="py-3 px-4 text-sm">Standard</td>
                  <td className="py-3 px-4 text-sm">Fastest response times</td>
                </tr>
                <tr className="border-b border-codium-border">
                  <td className="py-3 px-4 text-sm">Debugging complex issues</td>
                  <td className="py-3 px-4 text-sm">Advanced</td>
                  <td className="py-3 px-4 text-sm">Better at identifying root causes</td>
                </tr>
                <tr className="border-b border-codium-border">
                  <td className="py-3 px-4 text-sm">System architecture</td>
                  <td className="py-3 px-4 text-sm">Advanced/Enterprise</td>
                  <td className="py-3 px-4 text-sm">Handles complex relationships</td>
                </tr>
                <tr className="border-b border-codium-border">
                  <td className="py-3 px-4 text-sm">Private/sensitive code</td>
                  <td className="py-3 px-4 text-sm">Local/Enterprise</td>
                  <td className="py-3 px-4 text-sm">Data never leaves your environment</td>
                </tr>
                <tr className="border-b border-codium-border">
                  <td className="py-3 px-4 text-sm">Large codebase analysis</td>
                  <td className="py-3 px-4 text-sm">Enterprise</td>
                  <td className="py-3 px-4 text-sm">Largest context window</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <InfoBox>
            <p>You can switch between available models at any time in Windsurf by clicking the model selector in the Cascade chat interface or via Settings → AI → Default Model.</p>
          </InfoBox>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Model Updates</h2>
          
          <p className="text-codium-text-secondary mb-6">
            Codium regularly updates all models to improve capabilities, fix issues, and add support for new languages and frameworks. Updates are automatically applied to cloud-based models, while local models may require manual updates.
          </p>
          
          <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6">
            <h3 className="text-lg font-medium mb-3">Release Schedule</h3>
            <div className="space-y-3 text-sm text-codium-text-secondary">
              <div className="flex justify-between">
                <span>Standard & Advanced Models</span>
                <span>Updated bi-weekly</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise Models</span>
                <span>Updated monthly (configurable)</span>
              </div>
              <div className="flex justify-between">
                <span>Local Models</span>
                <span>Updated quarterly</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WindsurfModels;
