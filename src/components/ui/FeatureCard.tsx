
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  to
}) => {
  return (
    <Link to={to} className="feature-card block">
      <div className="mb-6">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-codium-text-secondary text-sm">{description}</p>
      <ArrowUpRight size={18} className="arrow-icon" />
    </Link>
  );
};

export default FeatureCard;
