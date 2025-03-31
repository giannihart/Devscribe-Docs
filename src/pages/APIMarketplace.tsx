import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import PageHeading from '@/components/ui/PageHeading';
import InfoBox from '@/components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';

// API Category type
type APICategory = 'All' | 'Analytics' | 'Payments' | 'Communication' | 'AI' | 'Storage' | 'Authentication' | 'Document Management' | 'Data Analytics';

// API Provider interface
interface APIProvider {
  id: string;
  name: string;
  category: APICategory;
  description: string;
  pricing: string;
  popularity: number;
  url: string;
}

const APIMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<APICategory>('All');

  const tocItems = [
    { id: 'all-apis', title: 'All APIs' },
    { id: 'categories', title: 'Categories' },
    { id: 'featured', title: 'Featured APIs' },
  ];

  // Sample API providers
  const apiProviders: APIProvider[] = [
    {
      id: '1',
      name: 'AnalyticsHQ',
      category: 'Analytics',
      description: 'Comprehensive analytics API for tracking user behavior and engagement.',
      pricing: 'Free tier available',
      popularity: 4.7,
      url: '/api-docs/analyticshq',
    },
    {
      id: '2',
      name: 'PayStream',
      category: 'Payments',
      description: 'Secure payment processing API with support for multiple currencies.',
      pricing: 'Usage-based',
      popularity: 4.9,
      url: '/api-docs/paystream',
    },
    {
      id: '3',
      name: 'MessageNet',
      category: 'Communication',
      description: 'Send SMS, email, and push notifications through a single API.',
      pricing: 'Per message',
      popularity: 4.5,
      url: '/api-docs/messagenet',
    },
    {
      id: '4',
      name: 'AI Insights',
      category: 'AI',
      description: 'Natural language processing and machine learning APIs for your applications.',
      pricing: 'Token-based',
      popularity: 4.8,
      url: '/api-docs/ai-insights',
    },
    {
      id: '5',
      name: 'CloudStore',
      category: 'Storage',
      description: 'Scalable object storage API for developers.',
      pricing: 'Pay as you go',
      popularity: 4.6,
      url: '/api-docs/cloudstore',
    },
    {
      id: '6',
      name: 'AuthGuard',
      category: 'Authentication',
      description: 'Secure authentication and authorization API for your applications.',
      pricing: 'Free tier available',
      popularity: 4.7,
      url: '/api-docs/authguard',
    },
    {
      id: '7',
      name: 'MetricFlow',
      category: 'Analytics',
      description: 'Advanced data analytics and metric calculation platform for businesses.',
      pricing: 'Tiered pricing starting at $99/month',
      popularity: 4.6,
      url: '/api-docs/metricflow',
    },
    {
      id: '8',
      name: 'InsightIQ',
      category: 'Analytics',
      description: 'Business intelligence and data visualization platform.',
      pricing: 'Starting at $249/month',
      popularity: 4.5,
      url: '/api-docs/insightiq',
    },
    {
      id: '9',
      name: 'InvoicePal',
      category: 'Payments',
      description: 'Automated invoicing and billing management solution.',
      pricing: 'Starting at $49/month',
      popularity: 4.4,
      url: '/api-docs/invoicepal',
    },
    {
      id: '10',
      name: 'Transacto',
      category: 'Payments',
      description: 'Financial transaction monitoring and fraud detection API.',
      pricing: 'Pay per transaction',
      popularity: 4.6,
      url: '/api-docs/transacto',
    },
    {
      id: '11',
      name: 'ChatBridge',
      category: 'Communication',
      description: 'Unified communication and chat integration API.',
      pricing: 'Starting at $99/month',
      popularity: 4.5,
      url: '/api-docs/chatbridge',
    },
    {
      id: '12',
      name: 'NotifyPlus',
      category: 'Communication',
      description: 'Advanced notification and alert management system.',
      pricing: 'Free tier available',
      popularity: 4.4,
      url: '/api-docs/notifyplus',
    },
    {
      id: '13',
      name: 'Vision AI',
      category: 'AI',
      description: 'Advanced computer vision and image recognition API.',
      pricing: 'Pay per API call',
      popularity: 4.6,
      url: '/api-docs/visionai',
    },
    {
      id: '14',
      name: 'PredictionML',
      category: 'AI',
      description: 'Machine learning model deployment and prediction API.',
      pricing: 'Starting at $199/month',
      popularity: 4.5,
      url: '/api-docs/predictionml',
    },
    {
      id: 'bobvault',
      name: 'BobVault',
      category: 'Document Management',
      description: 'Secure document storage and management solution with advanced encryption and access controls.',
      pricing: 'Starting at $29/month',
      popularity: 4.2,
      url: '/api-documentation?api=bobvault'
    },
    {
      id: 'datawarehouse',
      name: 'DataWarehouse',
      category: 'Data Analytics',
      description: 'Cloud-based data warehousing platform for storing, transforming, and analyzing large volumes of data.',
      pricing: 'Starting at $499/month',
      popularity: 4.7,
      url: '/api-documentation?api=datawarehouse'
    },
  ];

  // Filter APIs based on search query and selected category
  const filteredApis = apiProviders.filter((api) => {
    const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         api.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || api.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="API Marketplace" 
          title="Find the right API for your project"
          description="Browse our curated collection of high-quality APIs to integrate into your applications."
        />

        <div className="mb-8">
          <InfoBox>
            Looking for our SDK instead? Visit our <a href="/download" className="text-devscribe-teal hover:underline">download page</a> to get Devscribe tools for your development environment.
          </InfoBox>
        </div>

        <section id="all-apis" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Search APIs</h2>
          {/* Search bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-devscribe-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search APIs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-devscribe-card-bg border border-devscribe-border rounded-xl pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-devscribe-teal/50 focus:border-devscribe-teal/50"
            />
          </div>

          <section id="categories" className="mt-12 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <div className="flex gap-2 mb-6 flex-wrap">
              {(['All', 'Analytics', 'Payments', 'Communication', 'AI', 'Storage', 'Authentication', 'Document Management', 'Data Analytics'] as APICategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors min-w-[120px] text-center whitespace-nowrap ${
                    selectedCategory === category 
                    ? 'bg-devscribe-teal text-black' 
                    : 'bg-devscribe-card-bg text-devscribe-text-secondary hover:bg-devscribe-hover-bg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          <section id="featured" className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Featured APIs</h2>
            {/* API cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredApis.map((api) => (
                <div key={api.id} className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all relative group">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{api.name}</h3>
                      <span className="text-xs px-2 py-0.5 bg-devscribe-hover-bg rounded-full text-devscribe-text-secondary">
                        {api.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-devscribe-text-secondary text-sm mb-6">{api.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-devscribe-text-secondary">{api.pricing}</span>
                  </div>
                  <a
                    href={api.url}
                    className="absolute inset-0 rounded-xl"
                    aria-hidden="true"
                  ></a>
                  <ArrowUpRight 
                    size={20} 
                    className="absolute top-6 right-6 text-devscribe-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
      
      <div className="w-64 px-6 py-10">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default APIMarketplace;
