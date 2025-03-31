import React, { useState, useEffect, useCallback } from 'react';
import { Menu } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport
    let mostVisibleSection: string | null = null;
    let maxVisibility = 0;

    for (const item of items) {
      const section = document.getElementById(item.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        // Calculate visibility percentage
        const visibleStart = Math.max(sectionTop, window.scrollY);
        const visibleEnd = Math.min(sectionBottom, window.scrollY + window.innerHeight);
        const visibleHeight = Math.max(0, visibleEnd - visibleStart);
        const visibilityPercentage = visibleHeight / rect.height;

        // Update most visible section
        if (visibilityPercentage > maxVisibility) {
          maxVisibility = visibilityPercentage;
          mostVisibleSection = item.id;
        }
      }
    }

    // Only update if a section is significantly visible
    if (maxVisibility > 0.1) {
      setActiveSection(mostVisibleSection);
    }
  }, [items]);

  useEffect(() => {
    // Throttle scroll event to improve performance
    let rafId: number;
    const throttledHandleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [handleScroll]);

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
              className={`
                block py-1 transition-all duration-300 ease-in-out
                ${activeSection === item.id 
                  ? 'text-devscribe-teal font-semibold scale-105' 
                  : 'text-devscribe-text-secondary'}
                hover:text-white hover:translate-x-1 hover:scale-110
              `}
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
