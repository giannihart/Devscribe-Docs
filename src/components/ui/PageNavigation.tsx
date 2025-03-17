import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageNavigationProps {
  prevPage?: {
    name: string;
    path: string;
  };
  nextPage?: {
    name: string;
    path: string;
  };
}

const PageNavigation: React.FC<PageNavigationProps> = ({ prevPage, nextPage }) => {
  return (
    <div className="flex justify-between items-center mt-8 pt-4 border-t border-devscribe-border">
      {prevPage ? (
        <Link 
          to={prevPage.path} 
          className="
            flex items-center gap-2 
            text-devscribe-text-secondary 
            hover:text-white 
            transition-colors 
            group
          "
        >
          <ChevronLeft 
            size={20} 
            className="
              group-hover:text-white 
              transition-colors
            " 
          />
          <span className="text-sm">
            Previous: {prevPage.name}
          </span>
        </Link>
      ) : (
        <div></div>
      )}

      {nextPage && (
        <Link 
          to={nextPage.path} 
          className="
            flex items-center gap-2 
            text-devscribe-text-secondary 
            hover:text-white 
            transition-colors 
            group
          "
        >
          <span className="text-sm">
            Next: {nextPage.name}
          </span>
          <ChevronRight 
            size={20} 
            className="
              group-hover:text-white 
              transition-colors
            " 
          />
        </Link>
      )}
    </div>
  );
};

export default PageNavigation; 