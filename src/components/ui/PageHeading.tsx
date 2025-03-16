
import React from 'react';

interface PageHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ subtitle, title, description }) => {
  return (
    <div className="mb-10 animate-fade-in">
      <div className="text-codium-teal text-sm font-medium mb-2">{subtitle}</div>
      <h1 className="text-3xl font-semibold mb-3">{title}</h1>
      {description && <p className="text-codium-text-secondary max-w-2xl">{description}</p>}
    </div>
  );
};

export default PageHeading;
