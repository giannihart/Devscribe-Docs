
import React from 'react';
import { Menu } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  return (
    <div className="sticky top-20 animate-fade-in-right">
      <div className="flex items-center gap-2 text-sm text-devscribe-text-secondary mb-4">
        <Menu size={14} />
        <span>On this page</span>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className="text-devscribe-text-secondary hover:text-white transition-colors block py-1"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
