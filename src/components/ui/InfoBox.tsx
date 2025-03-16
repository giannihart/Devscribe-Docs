
import React from 'react';
import { Info } from 'lucide-react';

interface InfoBoxProps {
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ children }) => {
  return (
    <div className="alert-box">
      <div className="text-codium-teal mt-0.5">
        <Info size={20} />
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default InfoBox;
