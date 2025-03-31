import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import TableOfContents from '../components/ui/TableOfContents';
import { ShieldCheck, Lock, Key, Server, UserCheck, Globe } from 'lucide-react';

const Auth = () => {
  const tocItems = [
    { id: 'authentication-methods', title: 'Authentication Methods' },
    { id: 'enterprise-security', title: 'Enterprise Security' },
    { id: 'compliance', title: 'Compliance' },
    { id: 'support', title: 'Enterprise Support' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Enterprise" 
          title="Authentication & Security"
          description="Learn about Devscribe's enterprise-grade authentication and security features."
        />
        
        <section id="authentication-methods" className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Authentication Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">SSO Integration</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Seamlessly integrate with your existing SSO providers, including Okta, Auth0, Azure AD, and Google Workspace.
              </p>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <Lock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">Multi-factor Authentication</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Enhance security with customizable MFA options, including app-based authenticators, SMS verification, and hardware keys.
              </p>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <Key size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">API Key Management</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Create and manage API keys with granular permission controls for secure programmatic access to Devscribe services.
              </p>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <div className="mb-4">
                <Server size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">LDAP Directory Integration</h3>
              <p className="text-devscribe-text-secondary text-sm">
                Connect Devscribe to your LDAP directories for centralized user management and automatic provisioning.
              </p>
            </div>
          </div>
        </section>
        
        <section id="enterprise-security" className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Enterprise Security Features</h2>
          
          <div className="space-y-6">
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-4">Data Isolation</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe Enterprise offers dedicated instances with complete data isolation. Your code never mixes with other organizations' data, ensuring maximum security and privacy.
              </p>
              <ul className="list-disc list-inside space-y-2 text-devscribe-text-secondary">
                <li>Private cloud deployment options</li>
                <li>On-premises installation available</li>
                <li>Dedicated compute resources</li>
                <li>Custom data retention policies</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="compliance" className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Compliance & Certifications</h2>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-devscribe-hover-bg p-4 rounded-lg flex flex-col items-center">
                <div className="text-xl font-semibold text-white mb-1">SOC 2</div>
                <div className="text-xs text-center">Type II Certified</div>
              </div>
              <div className="bg-devscribe-hover-bg p-4 rounded-lg flex flex-col items-center">
                <div className="text-xl font-semibold text-white mb-1">GDPR</div>
                <div className="text-xs text-center">Compliant</div>
              </div>
              <div className="bg-devscribe-hover-bg p-4 rounded-lg flex flex-col items-center">
                <div className="text-xl font-semibold text-white mb-1">HIPAA</div>
                <div className="text-xs text-center">Ready</div>
              </div>
              <div className="bg-devscribe-hover-bg p-4 rounded-lg flex flex-col items-center">
                <div className="text-xl font-semibold text-white mb-1">ISO 27001</div>
                <div className="text-xs text-center">Certified</div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="support" className="mt-12 bg-gradient-to-r from-devscribe-teal/20 to-transparent border border-devscribe-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Get Enterprise Support</h2>
          <p className="text-devscribe-text-secondary mb-6">
            Ready to deploy Devscribe with enterprise-grade security and authentication? Our team is here to help you customize a solution that meets your organization's specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors">
              <UserCheck size={18} />
              Contact Enterprise Sales
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-devscribe-hover-bg text-white rounded-md hover:bg-devscribe-hover-bg/80 transition-colors">
              <Globe size={18} />
              Download Security Whitepaper
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

export default Auth;
