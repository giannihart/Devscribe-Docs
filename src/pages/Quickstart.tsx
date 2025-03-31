import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import TableOfContents from '../components/ui/TableOfContents';
import { Download, Settings, Rocket, BookOpen, Terminal } from 'lucide-react';

const Quickstart = () => {
  const tocItems = [
    { id: 'system-requirements', title: 'System Requirements' },
    { id: 'installation', title: 'Installation' },
    { id: 'configuration', title: 'Configuration' },
    { id: 'first-project', title: 'First Project' },
    { id: 'next-steps', title: 'Next Steps' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Get Started" 
          title="Quickstart Guide"
          description="Quickly set up Devscribe and start leveraging AI-powered development tools."
        />
        
        <section id="system-requirements" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Terminal size={24} className="text-white" />
                <h3 className="text-lg font-medium">Supported Environments</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>macOS 10.15+ (Catalina) or Windows 10/11</li>
                <li>Node.js 16.14+ or 18.x LTS</li>
                <li>npm 8.x+ or yarn 1.22+</li>
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="installation" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Download size={24} className="text-white" />
                <h3 className="text-lg font-medium">Install Devscribe CLI</h3>
              </div>
              <div className="bg-devscribe-code-bg rounded-lg p-4 mb-4">
                <code className="text-devscribe-code-text">
                  # Install globally using npm<br />
                  npm install -g devscribe<br /><br />
                  # Or using yarn<br />
                  yarn global add devscribe
                </code>
              </div>
              <p className="text-devscribe-text-secondary">
                This command installs the Devscribe Command Line Interface (CLI) globally on your system.
              </p>
            </div>
          </div>
        </section>
        
        <section id="configuration" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Settings size={24} className="text-white" />
                <h3 className="text-lg font-medium">Initial Setup</h3>
              </div>
              <div className="bg-devscribe-code-bg rounded-lg p-4 mb-4">
                <code className="text-devscribe-code-text">
                  # Initialize Devscribe configuration<br />
                  devscribe init<br /><br />
                  # Configure your preferences<br />
                  devscribe config set ai.model=advanced
                </code>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Configure Devscribe to match your development workflow:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>Choose default AI model</li>
                <li>Set up IDE integrations</li>
                <li>Configure privacy and data sharing preferences</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="first-project" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Create Your First Project</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Rocket size={24} className="text-white" />
                <h3 className="text-lg font-medium">Project Initialization</h3>
              </div>
              <div className="bg-devscribe-code-bg rounded-lg p-4 mb-4">
                <code className="text-devscribe-code-text">
                  # Create a new project<br />
                  devscribe create my-first-project<br /><br />
                  # Navigate to project directory<br />
                  cd my-first-project<br /><br />
                  # Start development server<br />
                  devscribe dev
                </code>
              </div>
              <p className="text-devscribe-text-secondary">
                Your first project is set up with a basic template and ready for AI-assisted development.
              </p>
            </div>
          </div>
        </section>
        
        <section id="next-steps" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen size={24} className="text-white" />
                <h3 className="text-lg font-medium">Explore and Learn</h3>
              </div>
              <p className="text-devscribe-text-secondary mb-4">
                Now that you've set up Devscribe, here are some recommended next steps:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-devscribe-text-secondary">
                <li>Read the comprehensive documentation</li>
                <li>Join our developer community</li>
                <li>Explore advanced AI features</li>
                <li>Customize your workflow</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mt-12 bg-gradient-to-r from-devscribe-teal/20 to-transparent border border-devscribe-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <p className="text-devscribe-text-secondary mb-6">
            Our support team is ready to assist you in getting started with Devscribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/support" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors">
              Contact Support
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

export default Quickstart; 