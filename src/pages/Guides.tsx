import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { ChevronRight } from 'lucide-react';

const Guides = () => {
  const tocItems = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'advanced-techniques', title: 'Advanced Techniques' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Documentation" 
          title="Guides"
          description="Comprehensive guides to help you get the most out of Devscribe's features and capabilities."
        />
        
        <InfoBox>
          These guides are regularly updated to reflect the latest features and best practices. If you have suggestions for improvements, please share them in our community forum.
        </InfoBox>
        
        <section id="getting-started" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Installation Guide</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Step-by-step instructions for installing Devscribe on different platforms and environments.
              </p>
              <a href="/quickstart" className="inline-flex items-center gap-2 text-devscribe-teal hover:underline">
                View installation guide <ChevronRight size={16} />
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">First Steps with Devscribe</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Learn the basics of using Devscribe's interface and core features to enhance your development workflow.
              </p>
              <a href="/documentation" className="inline-flex items-center gap-2 text-devscribe-teal hover:underline">
                Explore documentation <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>
        
        <section id="best-practices" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Optimizing Your Workflow</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Discover strategies to integrate Devscribe seamlessly into your development process for maximum productivity.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Code Organization</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Learn how to structure your projects to take full advantage of Devscribe's context awareness capabilities.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Collaboration Techniques</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Best practices for using Devscribe in team environments to enhance collaboration and code quality.
              </p>
            </div>
          </div>
        </section>

        <section id="advanced-techniques" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Advanced Techniques</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Custom Configurations</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Advanced configuration options to tailor Devscribe to your specific development needs and preferences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Integration with CI/CD Pipelines</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Learn how to incorporate Devscribe into your continuous integration and deployment workflows.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Techniques to ensure Devscribe runs efficiently, even with large codebases and complex projects.
              </p>
            </div>
          </div>
        </section>
        
        <section id="troubleshooting" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Common Issues</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Solutions to frequently encountered problems and challenges when using Devscribe.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Error Messages</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Comprehensive guide to understanding and resolving error messages in Devscribe.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Getting Help</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Resources for getting additional support, including community forums, documentation, and direct support channels.
              </p>
              <a href="/support" className="inline-flex items-center gap-2 text-devscribe-teal hover:underline">
                Visit support page <ChevronRight size={16} />
              </a>
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

export default Guides; 