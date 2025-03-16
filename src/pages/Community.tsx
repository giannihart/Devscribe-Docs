
import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import { MessageSquare, Users, Code, Globe } from 'lucide-react';

const Community = () => {
  return (
    <div className="px-12 py-10 max-w-5xl">
      <PageHeading 
        subtitle="Community" 
        title="Join the Codium Community"
        description="Connect with fellow developers, share experiences, and get help from the Codium community."
      />
      
      <div className="mt-10 space-y-10">
        {/* Discord Section */}
        <div className="bg-gradient-to-r from-[#5865F2]/20 to-black/0 border border-codium-border rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-[#5865F2]/20 rounded-xl">
              <MessageSquare size={32} className="text-[#5865F2]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Discord Community</h2>
              <p className="text-codium-text-secondary mb-4">
                Join our Discord server to connect with developers using Codium. Get help with questions, share what you're building, and participate in community events.
              </p>
              <a href="https://discord.gg/codium" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-[#5865F2] text-white rounded-md hover:bg-[#4752c4] transition-colors">
                Join Our Discord
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Community Forums */}
        <div className="bg-codium-card-bg border border-codium-border rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-codium-teal/10 rounded-xl">
              <Users size={32} className="text-codium-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Community Forums</h2>
              <p className="text-codium-text-secondary mb-4">
                Browse our community forums to find solutions, share knowledge, and engage in discussions about Codium features and development best practices.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2 bg-codium-hover-bg text-white rounded-md hover:bg-codium-hover-bg/80 transition-colors">
                Visit Forums
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* GitHub */}
        <div className="bg-codium-card-bg border border-codium-border rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-codium-teal/10 rounded-xl">
              <Code size={32} className="text-codium-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">GitHub</h2>
              <p className="text-codium-text-secondary mb-4">
                Explore our GitHub repositories, contribute to open-source components, report issues, and help improve Codium for everyone.
              </p>
              <a href="https://github.com/codium-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-codium-hover-bg text-white rounded-md hover:bg-codium-hover-bg/80 transition-colors">
                GitHub Repositories
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Events */}
        <div className="bg-codium-card-bg border border-codium-border rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-codium-teal/10 rounded-xl">
              <Globe size={32} className="text-codium-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Community Events</h2>
              <p className="text-codium-text-secondary mb-4">
                Join our webinars, workshops, and meetups to learn from experts, see live demonstrations, and connect with other Codium users.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2 bg-codium-hover-bg text-white rounded-md hover:bg-codium-hover-bg/80 transition-colors">
                Upcoming Events
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
