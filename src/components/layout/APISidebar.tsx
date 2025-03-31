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
  BookOpen,
  MessageCircle,
  HelpCircle,
  Grid
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
  
  const isApiPath = (path: string) => {
    return path.startsWith('/api-docs/');
  };

  const currentApiId = isApiPath(location.pathname) ? 
    location.pathname.split('/api-docs/')[1] : '';

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden pt-4 border-r border-codium-border fixed top-16 left-0 bg-codium-dark-gray">
      <div className="flex flex-col h-full">
        <div className="px-6 py-2">
          <nav className="space-y-1">
            <Link 
              to="/api-marketplace" 
              className={`
                sidebar-link text-white font-bold
                flex items-center gap-4 
                px-4 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                hover:text-white 
                ${location.pathname === '/api-marketplace' ? 'bg-codium-hover-bg' : ''}
              `}
            >
              <Grid size={18} />
              <span>API Marketplace</span>
            </Link>
          </nav>
        </div>

        {/* Resources Section */}
        <div className="sidebar-section">
          <div className="sidebar-heading text-white mb-2 px-6 font-bold">
            <span>Resources</span>
          </div>
          
          <div className="mt-1 space-y-1">
            <Link 
              to="/community" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                text-codium-text-secondary
              `}
            >
              <MessageCircle size={18} />
              <span>Community</span>
            </Link>
            <Link 
              to="/blog" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                text-codium-text-secondary
              `}
            >
              <BookOpen size={18} />
              <span>Devscribe Blog</span>
            </Link>
            <Link 
              to="/support" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                text-codium-text-secondary
              `}
            >
              <HelpCircle size={18} />
              <span>Support</span>
            </Link>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="sidebar-section mt-4">
          <div className="sidebar-heading text-white mb-2 px-6 font-bold">
            <span>Getting Started</span>
          </div>
          
          <div className="mt-1 space-y-1">
            <Link 
              to="/api-quickstart" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                text-codium-text-secondary
              `}
            >
              <span>Quickstart Guide</span>
            </Link>
            <Link 
              to="/api-authentication" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                text-codium-text-secondary
              `}
            >
              <span>Authentication</span>
            </Link>
            <Link 
              to="/api-best-practices" 
              className={`
                sidebar-link font-bold
                flex items-center gap-4 
                px-10 py-2 rounded-md 
                transition-all duration-200 
                hover:bg-codium-hover-bg 
                text-codium-text-secondary
              `}
            >
              <span>Best Practices</span>
            </Link>
          </div>
        </div>

        {/* API Categories Section */}
        <div className="sidebar-section mt-4">
          <div className="sidebar-heading text-white mb-2 px-6 font-bold">
            <span>API Categories</span>
          </div>
          
          <div className="mt-1 space-y-1">
            {apiCategories.map((category) => {
              const [isOpen, setIsOpen] = useState(category.apis.some(api => api.id === currentApiId));
              
              return (
                <Collapsible 
                  key={category.name} 
                  open={isOpen} 
                  onOpenChange={setIsOpen}
                >
                  <CollapsibleTrigger className={`
                    sidebar-link font-bold
                    flex items-center justify-between 
                    px-10 py-2 rounded-md 
                    transition-all duration-200 
                    hover:bg-codium-hover-bg 
                    text-codium-text-secondary
                    w-full
                  `}>
                    <div className="flex items-center gap-4 flex-grow">
                      <category.icon size={18} className="flex-shrink-0" />
                      <span className="truncate">{category.name}</span>
                    </div>
                    <div className="flex-shrink-0">
                      {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-2 pl-4 border-l border-codium-border space-y-1 py-1">
                      {category.apis.map((api) => (
                        <Link
                          key={api.id}
                          to={`/api-docs/${api.id}`}
                          className={`
                            sidebar-link font-bold
                            flex items-center 
                            px-10 py-2 rounded-md 
                            transition-all duration-200 
                            hover:bg-codium-hover-bg 
                            w-full
                            ${currentApiId === api.id ? 'bg-codium-hover-bg text-white' : 'text-codium-text-secondary'}
                          `}
                        >
                          <div className="w-full text-left">
                            <div className="truncate">{api.name}</div>
                            <div className="text-xs text-codium-text-secondary truncate">{api.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default APISidebar;
