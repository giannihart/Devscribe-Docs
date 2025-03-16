
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { BarChart, PieChart, LineChart } from 'lucide-react';

const ExtensionsProfile = () => {
  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Extensions" 
        title="Profile & Analytics"
        description="Monitor and optimize your development workflow with advanced analytics and profiling tools."
      />
      
      <div className="mt-8 space-y-6">
        <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Team Performance Insights</h2>
          <p className="text-codium-text-secondary">
            The Profile & Analytics extension provides enterprise teams with detailed insights into
            development patterns, code quality metrics, and AI assistance impact across your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Code Quality Metrics</h3>
              <PieChart size={20} className="text-codium-teal" />
            </div>
            <div className="h-40 bg-codium-hover-bg rounded-md flex items-center justify-center">
              <span className="text-sm text-codium-text-secondary">Code Quality Chart</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Maintainability</span>
                <span>92%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Test Coverage</span>
                <span>78%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Complexity Score</span>
                <span>Low</span>
              </div>
            </div>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Time Distribution</h3>
              <BarChart size={20} className="text-codium-teal" />
            </div>
            <div className="h-40 bg-codium-hover-bg rounded-md flex items-center justify-center">
              <span className="text-sm text-codium-text-secondary">Time Distribution Chart</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Coding</span>
                <span>65%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Debugging</span>
                <span>20%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Documentation</span>
                <span>15%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">AI Impact</h3>
              <LineChart size={20} className="text-codium-teal" />
            </div>
            <div className="h-40 bg-codium-hover-bg rounded-md flex items-center justify-center">
              <span className="text-sm text-codium-text-secondary">AI Impact Chart</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Productivity Gain</span>
                <span>+32%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Time Saved</span>
                <span>14.2 hrs/week</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-codium-text-secondary">Suggestions Accepted</span>
                <span>87%</span>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Team Dashboard</h2>
        <p className="text-codium-text-secondary mb-6">
          Monitor your team's performance and identify areas for improvement with the comprehensive dashboard.
        </p>
        
        <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Team Members</h3>
            
            <div className="space-y-4">
              {[
                { name: "Alex Thompson", role: "Senior Developer", efficiency: 94, aiUsage: "High" },
                { name: "Jamie Rivera", role: "Frontend Developer", efficiency: 88, aiUsage: "Medium" },
                { name: "Sam Lee", role: "Backend Developer", efficiency: 92, aiUsage: "High" },
                { name: "Taylor Kim", role: "Junior Developer", efficiency: 79, aiUsage: "Very High" }
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-codium-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-codium-hover-bg rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-xs text-codium-text-secondary">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xs text-codium-text-secondary mb-1">Efficiency</p>
                      <p className="font-medium">{member.efficiency}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-codium-text-secondary mb-1">AI Usage</p>
                      <p className="font-medium">{member.aiUsage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Enterprise Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Custom Reports</h3>
            <p className="text-codium-text-secondary">
              Generate custom reports for management, focusing on specific metrics that matter to your organization.
            </p>
          </div>
          
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Integration APIs</h3>
            <p className="text-codium-text-secondary">
              Connect analytics data with your existing project management and reporting tools through our robust API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionsProfile;
