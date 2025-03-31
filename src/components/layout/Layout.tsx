import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import APISidebar from './APISidebar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Determine which pages should show a sidebar and which one
  const showSidebar = location.pathname !== '/download';
  const isApiRelatedPage = location.pathname === '/api-marketplace' || 
    location.pathname === '/api-deepsearch' || 
    location.pathname.startsWith('/api-docs/');
  
  // Choose the appropriate sidebar
  const SidebarComponent = isApiRelatedPage ? APISidebar : Sidebar;

  return (
    <div className="min-h-screen bg-devscribe-dark-gray text-white">
      <Navbar />
      <div className="flex pt-16">
        {showSidebar && <SidebarComponent />}
        <main className={`${showSidebar ? 'ml-64' : ''} flex-1 min-h-[calc(100vh-4rem)]`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
