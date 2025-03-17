
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-devscribe-dark-gray">
      <div className="text-center max-w-md px-6">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-lg bg-devscribe-hover-bg flex items-center justify-center">
            <span className="text-devscribe-teal text-4xl">404</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-devscribe-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <Link
          to="/"
          className="bg-devscribe-teal text-black font-medium px-6 py-2 rounded-md text-sm inline-flex items-center gap-2 hover:bg-devscribe-teal/90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
