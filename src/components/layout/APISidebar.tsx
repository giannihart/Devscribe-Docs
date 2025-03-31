import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight, 
  Database, 
  MessageSquare, 
  CreditCard, 
  BarChart, 
  Lock, 
  Cloud,
  Brain,
  Search
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// API category type and data structure
type APICategory = {
  name: string;
  icon: React.ElementType;
  apis: {
    id: string;
    name: string;
    description: string;
  }[];
};

const apiCategories: APICategory[] = [
  {
    name: 'Analytics',
    icon: BarChart,
    apis: [
      { id: 'analyticshq', name: 'AnalyticsHQ', description: 'User behavior tracking & insights' },
      { id: 'metricflow', name: 'MetricFlow', description: 'Real-time data analytics pipeline' },
      { id: 'insightiq', name: 'InsightIQ', description: 'Business intelligence metrics' }
    ]
  },
  {
    name: 'Payments',
    icon: CreditCard,
    apis: [
      { id: 'paystream', name: 'PayStream', description: 'Multi-currency payment processing' },
      { id: 'invoicepal', name: 'InvoicePal', description: 'Automated invoicing system' },
      { id: 'transacto', name: 'Transacto', description: 'Secure transaction management' }
    ]
  },
  {
    name: 'Communication',
    icon: MessageSquare,
    apis: [
      { id: 'messagenet', name: 'MessageNet', description: 'SMS, email & push notifications' },
      { id: 'chatbridge', name: 'ChatBridge', description: 'Real-time chat integration' },
      { id: 'notifyplus', name: 'NotifyPlus', description: 'Multi-channel notification system' }
    ]
  },
  {
    name: 'AI',
    icon: Brain,
    apis: [
      { id: 'ai-insights', name: 'AI Insights', description: 'Natural language processing' },
      { id: 'visionai', name: 'VisionAI', description: 'Image recognition & analysis' },
      { id: 'predictionml', name: 'PredictionML', description: 'Machine learning predictions' }
    ]
  },
  {
    name: 'Storage',
    icon: Cloud,
    apis: [
      { id: 'cloudstore', name: 'CloudStore', description: 'Scalable object storage' },
      { id: 'blobvault', name: 'BlobVault', description: 'Secure blob storage service' },
      { id: 'datawarehouse', name: 'DataWarehouse', description: 'Big data storage solutions' }
    ]
  },
  {
    name: 'Authentication',
    icon: Lock,
    apis: [
      { id: 'authguard', name: 'AuthGuard', description: 'Secure authentication & authorization' },
      { id: 'identitycore', name: 'IdentityCore', description: 'Identity management system' },
      { id: 'ssoprovider', name: 'SSOProvider', description: 'Single sign-on integration' }
    ]
  },
  {
    name: 'Database',
    icon: Database,
    apis: [
      { id: 'querymaster', name: 'QueryMaster', description: 'Advanced database operations' },
      { id: 'nosqlcloud', name: 'NoSQLCloud', description: 'Document-based database service' },
      { id: 'relationalx', name: 'RelationalX', description: 'SQL database as a service' }
    ]
  }
];

const APISidebar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter API categories and items based on search term
  const filteredCategories = apiCategories.map(category => ({
    ...category,
    apis: category.apis.filter(api => 
      api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.apis.length > 0);

  const isApiPath = (path: string) => {
    return path.startsWith('/api-docs/');
  };

  const currentApiId = isApiPath(location.pathname) ? 
    location.pathname.split('/api-docs/')[1] : '';

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto pt-4 border-r border-devscribe-border fixed top-16 left-0 bg-devscribe-dark-gray">
      <div className="px-6 py-2 mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-devscribe-text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Search APIs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-devscribe-card-bg border border-devscribe-border rounded-md pl-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-devscribe-teal"
          />
        </div>
      </div>
      
      <div className="flex flex-col h-full">
        <div className="px-6">
          <Link 
            to="/api-marketplace" 
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
              location.pathname === '/api-marketplace' 
                ? 'bg-devscribe-hover-bg text-white' 
                : 'text-devscribe-text-secondary hover:bg-devscribe-hover-bg hover:text-white'
            }`}
          >
            <span className="font-medium">API Marketplace</span>
          </Link>
          
          <h3 className="font-semibold text-xs uppercase text-devscribe-text-secondary mt-6 mb-2 px-3">API Categories</h3>
          
          <div className="space-y-1">
            {filteredCategories.map((category) => (
              <Collapsible key={category.name} defaultOpen={category.apis.some(api => api.id === currentApiId)}>
                <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm text-devscribe-text-secondary hover:bg-devscribe-hover-bg hover:text-white transition-colors">
                  <div className="flex items-center gap-2">
                    <category.icon size={16} />
                    <span>{category.name}</span>
                  </div>
                  {/* Using a function that returns ReactNode instead of a render prop */}
                  {({ open }: { open: boolean }) => (
                    open ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-2 pl-4 border-l border-devscribe-border space-y-1 py-1">
                    {category.apis.map((api) => (
                      <Link
                        key={api.id}
                        to={`/api-docs/${api.id}`}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          currentApiId === api.id
                            ? 'bg-devscribe-teal/20 text-devscribe-teal'
                            : 'text-devscribe-text-secondary hover:bg-devscribe-hover-bg hover:text-white'
                        }`}
                      >
                        <div>
                          <div>{api.name}</div>
                          <div className="text-xs text-devscribe-text-secondary truncate mt-1">{api.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default APISidebar;
