
import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeading from '@/components/ui/PageHeading';
import InfoBox from '@/components/ui/InfoBox';

// API Category type
type APICategory = 'All' | 'Analytics' | 'Payments' | 'Communication' | 'AI' | 'Storage' | 'Authentication';

// API Provider interface
interface APIProvider {
  id: string;
  name: string;
  logo: string;
  category: APICategory;
  description: string;
  pricing: string;
  popularity: number;
  url: string;
}

const APIMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<APICategory>('All');

  // Sample API providers
  const apiProviders: APIProvider[] = [
    {
      id: '1',
      name: 'AnalyticsHQ',
      logo: 'https://via.placeholder.com/50',
      category: 'Analytics',
      description: 'Comprehensive analytics API for tracking user behavior and engagement.',
      pricing: 'Free tier available',
      popularity: 4.7,
      url: '/api-docs/analyticshq',
    },
    {
      id: '2',
      name: 'PayStream',
      logo: 'https://via.placeholder.com/50',
      category: 'Payments',
      description: 'Secure payment processing API with support for multiple currencies.',
      pricing: 'Usage-based',
      popularity: 4.9,
      url: '/api-docs/paystream',
    },
    {
      id: '3',
      name: 'MessageNet',
      logo: 'https://via.placeholder.com/50',
      category: 'Communication',
      description: 'Send SMS, email, and push notifications through a single API.',
      pricing: 'Per message',
      popularity: 4.5,
      url: '/api-docs/messagenet',
    },
    {
      id: '4',
      name: 'AI Insights',
      logo: 'https://via.placeholder.com/50',
      category: 'AI',
      description: 'Natural language processing and machine learning APIs for your applications.',
      pricing: 'Token-based',
      popularity: 4.8,
      url: '/api-docs/ai-insights',
    },
    {
      id: '5',
      name: 'CloudStore',
      logo: 'https://via.placeholder.com/50',
      category: 'Storage',
      description: 'Scalable object storage API for developers.',
      pricing: 'Pay as you go',
      popularity: 4.6,
      url: '/api-docs/cloudstore',
    },
    {
      id: '6',
      name: 'AuthGuard',
      logo: 'https://via.placeholder.com/50',
      category: 'Authentication',
      description: 'Secure authentication and authorization API for your applications.',
      pricing: 'Free tier available',
      popularity: 4.7,
      url: '/api-docs/authguard',
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
    <div className="min-h-screen bg-gradient-to-b from-devscribe-dark-gray to-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <PageHeading 
          subtitle="API Marketplace" 
          title="Find the right API for your project"
          description="Browse our curated collection of high-quality APIs to integrate into your applications."
        />

        <InfoBox>
          Looking for our SDK instead? Visit our <a href="/download" className="text-devscribe-teal hover:underline">download page</a> to get Devscribe tools for your development environment.
        </InfoBox>

        <div className="mt-8">
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

          {/* API cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApis.map((api) => (
              <div key={api.id} className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6 hover:border-devscribe-teal/50 transition-all relative group">
                <div className="flex items-center gap-4 mb-4">
                  <img src={api.logo} alt={api.name} className="w-12 h-12 rounded-lg bg-black/20" />
                  <div>
                    <h3 className="font-medium">{api.name}</h3>
                    <span className="text-xs px-2 py-0.5 bg-devscribe-hover-bg rounded-full text-devscribe-text-secondary">
                      {api.category}
                    </span>
                  </div>
                </div>
                <p className="text-devscribe-text-secondary text-sm mb-6">{api.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-devscribe-text-secondary">{api.pricing}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{api.popularity}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(api.popularity) ? 'text-devscribe-teal' : 'text-devscribe-border'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default APIMarketplace;
