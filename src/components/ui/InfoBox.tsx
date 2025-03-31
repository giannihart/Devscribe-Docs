
import React from 'react';
import { Info } from 'lucide-react';

interface InfoBoxProps {
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ children }) => {
  return (
    <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-xl p-6 flex gap-4 items-start mb-8">
      <div className="text-devscribe-teal mt-0.5">
        <Info size={20} />
      </div>
      <div className="text-sm [&_a]:text-devscribe-teal [&_a]:hover:underline">{children}</div>
    </div>
  );
};

export default InfoBox;
