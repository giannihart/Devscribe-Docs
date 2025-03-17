
import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import FeatureCard from '../components/ui/FeatureCard';
import TableOfContents from '../components/ui/TableOfContents';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const Index = () => {
  // Custom icons for feature cards
  const WindsurfIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7L17 11L13 15" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 17L11 13L7 9" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ExtensionsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H8C8.55228 9 9 8.55228 9 8V4C9 3.44772 8.55228 3 8 3Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 3H16C15.4477 3 15 3.44772 15 4V8C15 8.55228 15.4477 9 16 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H8C8.55228 21 9 20.5523 9 20V16C9 15.4477 8.55228 15 8 15Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 15H16C15.4477 15 15 15.4477 15 16V20C15 20.5523 15.4477 21 16 21H20C20.5523 21 21 20.5523 21 20V16C21 15.4477 20.5523 15 20 15Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ContextIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#0ED3B9" strokeWidth="2"/>
      <path d="M12 8V16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 12H16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const CascadeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4H6C4.89543 4 4 4.89543 4 6V8" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16V18C4 19.1046 4.89543 20 6 20H8" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 4H18C19.1046 4 20 4.89543 20 6V8" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 16V18C20 19.1046 19.1046 20 18 20H16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9V12" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="1" fill="#0ED3B9"/>
    </svg>
  );

  const tocItems = [
    { id: 'get-started', title: 'Get started' },
    { id: 'breakthrough-functionalities', title: 'Breakthrough functionalities' },
    { id: 'meet-the-modalities', title: 'Meet the modalities' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Get Started" 
          title="Welcome to Devscribe"
          description="Devscribe creates highly contextual, intuitive, and trustworthy AI-powered tools to help developers dream bigger."
        />
        
        <InfoBox>
          If you are an Enterprise user on a Hybrid or Self-Hosted plan, please refer to the instructions in your enterprise portal.
        </InfoBox>
        
        <section id="get-started" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Get started</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Introduction</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe is an AI-powered development platform designed to streamline your coding workflow. If you're new to Devscribe, start here to embark on your AI-powered coding journey.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Quickstart</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Get up and running with Devscribe in minutes. Choose the integration that works best for you:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard
                  title="Windsurf Editor"
                  description="Tomorrow's editor, today. The world's first truly agentic IDE."
                  icon={<WindsurfIcon />}
                  to="/windsurf/getting-started"
                />
                
                <FeatureCard
                  title="Devscribe Extensions"
                  description="Available in 40+ different IDEs with support for 70+ programming languages"
                  icon={<ExtensionsIcon />}
                  to="/extensions/getting-started"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Configure your development environment and optimize your experience with Devscribe's powerful customization options.
              </p>
              <a href="/download" className="inline-flex items-center gap-2 px-4 py-2 bg-devscribe-teal text-black rounded-md font-medium hover:bg-devscribe-teal/90 transition-colors">
                Download Development Tools
              </a>
            </div>
          </div>
        </section>
        
        <section id="breakthrough-functionalities" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Breakthrough functionalities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              title="Context Awareness"
              description="Devscribe's context engine builds a deep understanding of your codebase."
              icon={<ContextIcon />}
              to="/features/context-awareness"
            />
            
            <FeatureCard
              title="Cascade"
              description="Your agentic chatbot that can collaborate with you like never before."
              icon={<CascadeIcon />}
              to="/windsurf/cascade"
            />
          </div>
        </section>

        <section id="meet-the-modalities" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet the modalities</h2>
          
          <ul className="space-y-2">
            <li>
              <a href="/features/autocomplete" className="group flex items-center justify-between p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg hover:border-devscribe-teal/50 transition-all">
                <div className="flex items-center gap-2">
                  <span className="text-devscribe-teal">⟨/⟩</span>
                  <span>Autocomplete</span>
                </div>
                <ChevronRight size={16} className="text-devscribe-text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
            <li>
              <a href="/features/chat" className="group flex items-center justify-between p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg hover:border-devscribe-teal/50 transition-all">
                <div className="flex items-center gap-2">
                  <span className="text-devscribe-teal">💬</span>
                  <span>Chat</span>
                </div>
                <ChevronRight size={16} className="text-devscribe-text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
            <li>
              <a href="/features/command" className="group flex items-center justify-between p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg hover:border-devscribe-teal/50 transition-all">
                <div className="flex items-center gap-2">
                  <span className="text-devscribe-teal">&gt;_</span>
                  <span>Command</span>
                </div>
                <ChevronRight size={16} className="text-devscribe-text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          </ul>
        </section>
      </div>
      
      <div className="w-64 px-6 py-10">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default Index;
