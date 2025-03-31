
import React from 'react';
import { ArrowLeft, Copy, Download, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeading from '@/components/ui/PageHeading';
import InfoBox from '@/components/ui/InfoBox';

// Mock API data - in a real app, this would come from an API or database
const apiData = {
  'analyticshq': {
    name: 'AnalyticsHQ',
    description: 'Comprehensive analytics API for tracking user behavior and engagement.',
    version: 'v2.0',
    baseURL: 'https://api.analyticshq.com/v2',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    documentation: {
      overview: `
        The AnalyticsHQ API allows you to track user events, analyze user behavior, and generate insights 
        from your application data. This API provides endpoints for tracking events, creating custom 
        dashboards, and exporting analytics data in various formats.
      `,
      endpoints: [
        {
          name: 'Track Event',
          method: 'POST',
          path: '/events',
          description: 'Record a user event in your application',
          parameters: [
            { name: 'event_name', type: 'string', required: true, description: 'Name of the event' },
            { name: 'properties', type: 'object', required: false, description: 'Additional event properties' },
            { name: 'user_id', type: 'string', required: true, description: 'Unique identifier for the user' },
            { name: 'timestamp', type: 'string', required: false, description: 'ISO 8601 timestamp' },
          ],
          response: '{ "success": true, "event_id": "evt_123456789" }',
        },
        {
          name: 'Get User Profile',
          method: 'GET',
          path: '/users/{user_id}',
          description: 'Retrieve a user profile with associated events and properties',
          parameters: [
            { name: 'user_id', type: 'string', required: true, description: 'Unique identifier for the user' },
            { name: 'include_events', type: 'boolean', required: false, description: 'Include user events in response' },
          ],
          response: '{ "user_id": "usr_123456", "first_seen": "2023-01-15T00:00:00Z", "properties": {}, "events": [...] }',
        },
        {
          name: 'Create Custom Report',
          method: 'POST',
          path: '/reports',
          description: 'Generate a custom analytics report',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Report name' },
            { name: 'metrics', type: 'array', required: true, description: 'Metrics to include in the report' },
            { name: 'dimensions', type: 'array', required: false, description: 'Dimensions to segment the data' },
            { name: 'date_range', type: 'object', required: true, description: 'Start and end dates for the report' },
          ],
          response: '{ "report_id": "rpt_789012", "status": "processing", "download_url": null }',
        },
      ],
      codeExamples: {
        javascript: `
const trackEvent = async () => {
  const response = await fetch('https://api.analyticshq.com/v2/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
      event_name: 'button_click',
      user_id: 'usr_123456',
      properties: {
        button_id: 'signup_button',
        page: '/landing'
      }
    })
  });
  
  const data = await response.json();
  console.log('Event tracked:', data.event_id);
};

trackEvent();
        `,
        python: `
import requests

def track_event():
    response = requests.post(
        'https://api.analyticshq.com/v2/events',
        headers={
            'Content-Type': 'application/json',
            'X-API-Key': 'YOUR_API_KEY'
        },
        json={
            'event_name': 'button_click',
            'user_id': 'usr_123456',
            'properties': {
                'button_id': 'signup_button',
                'page': '/landing'
            }
        }
    )
    
    data = response.json()
    print(f'Event tracked: {data["event_id"]}')

track_event()
        `,
        curl: `
curl -X POST https://api.analyticshq.com/v2/events \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "event_name": "button_click",
    "user_id": "usr_123456",
    "properties": {
      "button_id": "signup_button",
      "page": "/landing"
    }
  }'
        `
      }
    }
  },
  // Add more APIs here following the same structure
};

const APIDocumentation = () => {
  const { apiId } = useParams();
  const apiInfo = apiData[apiId as keyof typeof apiData];
  
  const [selectedLanguage, setSelectedLanguage] = React.useState<'javascript' | 'python' | 'curl'>('javascript');
  
  if (!apiInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-devscribe-dark-gray to-black py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">API Not Found</h1>
          <p className="text-devscribe-text-secondary mb-8">The API documentation you're looking for doesn't exist.</p>
          <Link to="/api-marketplace" className="text-devscribe-teal hover:underline">
            Return to API Marketplace
          </Link>
        </div>
      </div>
    );
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you would show a toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-devscribe-dark-gray to-black py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/api-marketplace" className="inline-flex items-center text-devscribe-text-secondary hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to API Marketplace
          </Link>
        </div>
        
        <div className="flex items-center gap-6 mb-8">
          <img src={apiInfo.logo} alt={apiInfo.name} className="w-16 h-16 rounded-xl bg-black/20" />
          <div>
            <PageHeading 
              subtitle={`API Documentation • ${apiInfo.version}`} 
              title={apiInfo.name}
              description={apiInfo.description}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <h3 className="text-sm font-medium text-devscribe-text-secondary mb-2">Base URL</h3>
            <div className="flex items-center justify-between">
              <code className="text-devscribe-teal">{apiInfo.baseURL}</code>
              <button onClick={() => copyToClipboard(apiInfo.baseURL)} className="text-devscribe-text-secondary hover:text-white">
                <Copy size={16} />
              </button>
            </div>
          </div>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <h3 className="text-sm font-medium text-devscribe-text-secondary mb-2">Authentication</h3>
            <p>{apiInfo.authentication}</p>
          </div>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <h3 className="text-sm font-medium text-devscribe-text-secondary mb-2">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="text-devscribe-teal hover:underline flex items-center gap-1">
                <Download size={16} />
                Download SDK
              </a>
              <a href="#" className="text-devscribe-teal hover:underline flex items-center gap-1">
                <ExternalLink size={16} />
                Full Reference
              </a>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <p className="text-devscribe-text-secondary whitespace-pre-line">{apiInfo.documentation.overview}</p>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl overflow-hidden">
            <div className="flex border-b border-devscribe-border">
              <button 
                className={`px-4 py-3 text-sm ${selectedLanguage === 'javascript' ? 'bg-black/20 text-white' : 'text-devscribe-text-secondary'}`}
                onClick={() => setSelectedLanguage('javascript')}
              >
                JavaScript
              </button>
              <button 
                className={`px-4 py-3 text-sm ${selectedLanguage === 'python' ? 'bg-black/20 text-white' : 'text-devscribe-text-secondary'}`}
                onClick={() => setSelectedLanguage('python')}
              >
                Python
              </button>
              <button 
                className={`px-4 py-3 text-sm ${selectedLanguage === 'curl' ? 'bg-black/20 text-white' : 'text-devscribe-text-secondary'}`}
                onClick={() => setSelectedLanguage('curl')}
              >
                cURL
              </button>
            </div>
            
            <div className="relative">
              <pre className="p-6 overflow-x-auto text-sm">
                <code>{apiInfo.documentation.codeExamples[selectedLanguage]}</code>
              </pre>
              <button 
                onClick={() => copyToClipboard(apiInfo.documentation.codeExamples[selectedLanguage])} 
                className="absolute top-4 right-4 text-devscribe-text-secondary hover:text-white p-1 rounded-md hover:bg-devscribe-hover-bg"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Endpoints</h2>
          
          <div className="space-y-6">
            {apiInfo.documentation.endpoints.map((endpoint, index) => (
              <div key={index} className="bg-devscribe-card-bg border border-devscribe-border rounded-xl overflow-hidden">
                <div className="flex items-center p-6 border-b border-devscribe-border">
                  <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${
                    endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                    endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                    endpoint.method === 'DELETE' ? 'bg-red-500/20 text-red-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <span className="font-mono text-devscribe-teal">{endpoint.path}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{endpoint.name}</h3>
                  <p className="text-devscribe-text-secondary mb-6">{endpoint.description}</p>
                  
                  <h4 className="text-sm font-medium text-devscribe-text-secondary mb-2">Parameters</h4>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-devscribe-border">
                          <th className="text-left py-2 pr-4 font-medium">Name</th>
                          <th className="text-left py-2 pr-4 font-medium">Type</th>
                          <th className="text-left py-2 pr-4 font-medium">Required</th>
                          <th className="text-left py-2 pr-4 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.parameters.map((param, pIndex) => (
                          <tr key={pIndex} className="border-b border-devscribe-border/50">
                            <td className="py-2 pr-4 font-mono">{param.name}</td>
                            <td className="py-2 pr-4">{param.type}</td>
                            <td className="py-2 pr-4">{param.required ? 'Yes' : 'No'}</td>
                            <td className="py-2 pr-4 text-devscribe-text-secondary">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <h4 className="text-sm font-medium text-devscribe-text-secondary mb-2">Response</h4>
                  <div className="bg-black/20 p-4 rounded font-mono text-sm overflow-x-auto">
                    {endpoint.response}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <InfoBox>
          Need help integrating this API? Our support team is available to assist you. Contact us at support@devscribe.com
        </InfoBox>
      </div>
    </div>
  );
};

export default APIDocumentation;
