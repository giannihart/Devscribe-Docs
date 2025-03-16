
import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import { MessageCircle, File, Mail, HelpCircle } from 'lucide-react';
import InfoBox from '../components/ui/InfoBox';

const Support = () => {
  const faqs = [
    {
      question: "How do I get started with Codium?",
      answer: "To get started, download Codium for your platform from our download page, or install one of our IDE extensions. Follow the installation instructions and you'll be up and running in minutes."
    },
    {
      question: "Is Codium free to use?",
      answer: "Codium offers both free and paid plans. The free plan includes basic features, while our paid plans include additional capabilities like access to more powerful models, higher usage limits, and team collaboration features."
    },
    {
      question: "How does Codium handle my code data?",
      answer: "Codium takes data privacy seriously. We do not store your code permanently on our servers, and all data transmission is encrypted. Your code is only used to provide suggestions and is not used to train our models without explicit consent."
    },
    {
      question: "Can I use Codium offline?",
      answer: "Some features of Codium require an internet connection to communicate with our AI models. However, we do offer offline capabilities for certain features with our Enterprise plan."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings page. If you cancel, you'll still have access to the paid features until the end of your billing period."
    }
  ];

  return (
    <div className="px-12 py-10 max-w-5xl">
      <PageHeading 
        subtitle="Support" 
        title="Get Help with Codium"
        description="Find resources, answers to common questions, and ways to contact our support team."
      />
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Live Chat Support */}
        <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
          <div className="mb-4">
            <MessageCircle size={24} className="text-codium-teal" />
          </div>
          <h3 className="text-lg font-medium mb-2">Live Chat Support</h3>
          <p className="text-codium-text-secondary text-sm mb-4">
            Get real-time help from our support team. Available Monday through Friday, 9am-5pm PT.
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-codium-teal text-black rounded-md font-medium hover:bg-codium-teal/90 transition-colors">
            Start Chat
          </button>
        </div>
        
        {/* Documentation */}
        <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
          <div className="mb-4">
            <File size={24} className="text-codium-teal" />
          </div>
          <h3 className="text-lg font-medium mb-2">Documentation</h3>
          <p className="text-codium-text-secondary text-sm mb-4">
            Browse our comprehensive documentation to find guides, tutorials, and reference materials.
          </p>
          <a href="/documentation" className="inline-flex items-center gap-2 px-4 py-2 bg-codium-hover-bg text-white rounded-md hover:bg-codium-hover-bg/80 transition-colors">
            View Documentation
          </a>
        </div>
        
        {/* Email Support */}
        <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
          <div className="mb-4">
            <Mail size={24} className="text-codium-teal" />
          </div>
          <h3 className="text-lg font-medium mb-2">Email Support</h3>
          <p className="text-codium-text-secondary text-sm mb-4">
            Send us an email and we'll get back to you within 24 hours on business days.
          </p>
          <a href="mailto:support@codium.ai" className="inline-flex items-center gap-2 px-4 py-2 bg-codium-hover-bg text-white rounded-md hover:bg-codium-hover-bg/80 transition-colors">
            Email Us
          </a>
        </div>
        
        {/* Community Help */}
        <div className="bg-codium-card-bg border border-codium-border rounded-xl p-6 hover:border-codium-teal/50 transition-all">
          <div className="mb-4">
            <HelpCircle size={24} className="text-codium-teal" />
          </div>
          <h3 className="text-lg font-medium mb-2">Community Help</h3>
          <p className="text-codium-text-secondary text-sm mb-4">
            Join our Discord community to get help from other users and Codium team members.
          </p>
          <a href="/community" className="inline-flex items-center gap-2 px-4 py-2 bg-codium-hover-bg text-white rounded-md hover:bg-codium-hover-bg/80 transition-colors">
            Join Community
          </a>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-codium-card-bg border border-codium-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-codium-text-secondary">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12">
        <InfoBox>
          For enterprise support options including dedicated support engineers, custom SLAs, and on-premises solutions, please contact our <a href="#" className="text-codium-teal hover:underline">enterprise sales team</a>.
        </InfoBox>
      </div>
    </div>
  );
};

export default Support;
