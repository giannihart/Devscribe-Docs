
import React, { useState } from 'react';
import { ArrowLeft, Copy, Download, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeading from '@/components/ui/PageHeading';
import InfoBox from '@/components/ui/InfoBox';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { useToast } from '@/hooks/use-toast';

// Mock API data - in a real app, this would come from an API or database
const apiData = {
  'analyticshq': {
    name: 'AnalyticsHQ',
    description: 'Comprehensive analytics API for tracking user behavior and engagement.',
    version: 'v2.0',
    baseURL: 'https://api.analyticshq.com/v2',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Free tier, then $0.01 per event',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json', // This is just a placeholder
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
  'paystream': {
    name: 'PayStream',
    description: 'Secure payment processing API with support for multiple currencies.',
    version: 'v3.2',
    baseURL: 'https://api.paystream.com/v3',
    authentication: 'Bearer Token (Authorization header)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Pay as you go: 2.5% + $0.30 per transaction',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json', // Placeholder
    documentation: {
      overview: `
        PayStream API offers a complete set of payment processing capabilities for businesses of all sizes. 
        With support for 135+ currencies and robust fraud detection, you can securely process payments globally.
        Our API follows RESTful principles and returns responses in JSON format.
      `,
      endpoints: [
        {
          name: 'Create Payment',
          method: 'POST',
          path: '/payments',
          description: 'Create a new payment charge',
          parameters: [
            { name: 'amount', type: 'number', required: true, description: 'Payment amount in cents' },
            { name: 'currency', type: 'string', required: true, description: 'Three-letter currency code (e.g., USD)' },
            { name: 'payment_method_id', type: 'string', required: true, description: 'ID of saved payment method or token' },
            { name: 'description', type: 'string', required: false, description: 'Description of the payment' },
          ],
          response: '{ "id": "pay_123456789", "status": "succeeded", "amount": 2000, "currency": "USD" }',
        },
        {
          name: 'Get Payment',
          method: 'GET',
          path: '/payments/{payment_id}',
          description: 'Retrieve details about a specific payment',
          parameters: [
            { name: 'payment_id', type: 'string', required: true, description: 'Unique identifier for the payment' },
          ],
          response: '{ "id": "pay_123456789", "status": "succeeded", "amount": 2000, "currency": "USD", "created": "2023-05-15T12:30:00Z" }',
        },
        {
          name: 'Create Refund',
          method: 'POST',
          path: '/payments/{payment_id}/refunds',
          description: 'Refund a previously processed payment',
          parameters: [
            { name: 'payment_id', type: 'string', required: true, description: 'ID of the payment to refund' },
            { name: 'amount', type: 'number', required: false, description: 'Amount to refund (defaults to full amount)' },
            { name: 'reason', type: 'string', required: false, description: 'Reason for the refund' },
          ],
          response: '{ "id": "ref_987654321", "status": "succeeded", "amount": 2000, "payment_id": "pay_123456789" }',
        },
      ],
      codeExamples: {
        javascript: `
const createPayment = async () => {
  const response = await fetch('https://api.paystream.com/v3/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      amount: 2000, // $20.00
      currency: 'USD',
      payment_method_id: 'pm_card_visa',
      description: 'Order #12345'
    })
  });
  
  const data = await response.json();
  console.log('Payment created:', data.id);
};

createPayment();
        `,
        python: `
import requests

def create_payment():
    response = requests.post(
        'https://api.paystream.com/v3/payments',
        headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        json={
            'amount': 2000,  # $20.00
            'currency': 'USD',
            'payment_method_id': 'pm_card_visa',
            'description': 'Order #12345'
        }
    )
    
    data = response.json()
    print(f'Payment created: {data["id"]}')

create_payment()
        `,
        curl: `
curl -X POST https://api.paystream.com/v3/payments \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "amount": 2000,
    "currency": "USD",
    "payment_method_id": "pm_card_visa", 
    "description": "Order #12345"
  }'
        `
      }
    }
  },
  // Add other APIs with similar structure...
  'messagenet': {
    name: 'MessageNet',
    description: 'Send SMS, email, and push notifications through a single API.',
    version: 'v1.5',
    baseURL: 'https://api.messagenet.io/v1',
    authentication: 'API Key (Query param: api_key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $0.005 per SMS, $0.0001 per email',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json', // Placeholder
    documentation: {
      overview: `
        MessageNet provides a unified API for all your communication needs. Send SMS, emails, and push notifications
        through a single integration. Our API abstracts away the complexity of managing multiple communication channels
        and providers, letting you focus on your core business.
      `,
      endpoints: [
        {
          name: 'Send SMS',
          method: 'POST',
          path: '/sms',
          description: 'Send an SMS message to a recipient',
          parameters: [
            { name: 'to', type: 'string', required: true, description: 'Recipient phone number in E.164 format' },
            { name: 'from', type: 'string', required: true, description: 'Sender phone number or name' },
            { name: 'message', type: 'string', required: true, description: 'SMS message content' },
          ],
          response: '{ "id": "sms_123456", "status": "sent", "to": "+15551234567" }',
        },
        {
          name: 'Send Email',
          method: 'POST',
          path: '/email',
          description: 'Send an email to a recipient',
          parameters: [
            { name: 'to', type: 'string', required: true, description: 'Recipient email address' },
            { name: 'from', type: 'string', required: true, description: 'Sender email address' },
            { name: 'subject', type: 'string', required: true, description: 'Email subject line' },
            { name: 'html', type: 'string', required: false, description: 'HTML content of the email' },
            { name: 'text', type: 'string', required: false, description: 'Plain text content of the email' },
          ],
          response: '{ "id": "email_789012", "status": "queued", "to": "recipient@example.com" }',
        },
      ],
      codeExamples: {
        javascript: `
const sendSMS = async () => {
  const response = await fetch('https://api.messagenet.io/v1/sms?api_key=YOUR_API_KEY', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: '+15551234567',
      from: 'YourCompany',
      message: 'Your verification code is 123456'
    })
  });
  
  const data = await response.json();
  console.log('SMS sent:', data.id);
};

sendSMS();
        `,
        python: `
import requests

def send_sms():
    response = requests.post(
        'https://api.messagenet.io/v1/sms',
        params={'api_key': 'YOUR_API_KEY'},
        json={
            'to': '+15551234567',
            'from': 'YourCompany',
            'message': 'Your verification code is 123456'
        }
    )
    
    data = response.json()
    print(f'SMS sent: {data["id"]}')

send_sms()
        `,
        curl: `
curl -X POST 'https://api.messagenet.io/v1/sms?api_key=YOUR_API_KEY' \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+15551234567",
    "from": "YourCompany",
    "message": "Your verification code is 123456"
  }'
        `
      }
    }
  },
};

const APIDocumentation = () => {
  const { apiId } = useParams();
  const apiInfo = apiData[apiId as keyof typeof apiData];
  const { toast } = useToast();
  
  const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'python' | 'curl'>('javascript');
  const [showSwagger, setShowSwagger] = useState(false);
  
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
    toast({
      title: "Copied to clipboard",
      description: "The code snippet has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-devscribe-dark-gray to-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
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
              <button 
                onClick={() => {
                  copyToClipboard(apiInfo.baseURL);
                }} 
                className="text-devscribe-text-secondary hover:text-white"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <h3 className="text-sm font-medium text-devscribe-text-secondary mb-2">Authentication</h3>
            <p>{apiInfo.authentication}</p>
          </div>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
            <h3 className="text-sm font-medium text-devscribe-text-secondary mb-2">Pricing</h3>
            <p>{apiInfo.pricing}</p>
          </div>
        </div>
        
        {/* Modified layout to make Swagger UI wider */}
        <div className="mb-10">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold">API Explorer</h2>
            <div className="space-y-2 flex items-center gap-4">
              <Button 
                onClick={() => setShowSwagger(!showSwagger)} 
                variant="outline" 
                className="bg-devscribe-teal text-black hover:bg-devscribe-teal/90 border-none">
                {showSwagger ? 'Hide API Explorer' : 'Try API Explorer'}
              </Button>
              <a href="#" className="text-devscribe-teal hover:underline flex items-center gap-1 text-sm">
                <Download size={16} />
                Download SDK
              </a>
              <a href="#" className="text-devscribe-teal hover:underline flex items-center gap-1 text-sm">
                <ExternalLink size={16} />
                View Full API Reference
              </a>
            </div>
          </div>
          
          {showSwagger && (
            <div className="bg-white rounded-xl p-4 mb-10 overflow-hidden">
              <SwaggerUI url={apiInfo.swaggerUrl} />
            </div>
          )}
          
          <InfoBox className="mb-10">
            Need help integrating this API? Our support team is available to assist you. Contact us at support@devscribe.com
          </InfoBox>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
          </div>

          <div className="lg:col-span-1">
            {/* Additional content can be placed here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;
