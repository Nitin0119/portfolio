import { useState, useEffect } from 'react';

export function useSectionInView(sectionIds, offset = 0.5) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: offset,
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, offset]);

  return activeSection;
}
