import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname !== '/download';

  return (
    <div className="min-h-screen bg-devscribe-dark-gray text-white">
      <Navbar />
      <div className="flex pt-16">
        {showSidebar && <Sidebar />}
        <main className={`${showSidebar ? 'ml-72' : ''} flex-1 min-h-[calc(100vh-4rem)]`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
