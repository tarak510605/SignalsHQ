'use client';

import React, { useEffect, useRef, useState } from 'react';

const integrations = [
  { name: 'Northbridge', style: 'bg-gray-800 text-white px-4 py-2 rounded font-bold text-sm tracking-wide' },
  { name: 'Pinnacle Co.', icon: '◈', style: 'text-gray-700 font-semibold' },
  { name: 'ZENITH', icon: '△', style: 'text-gray-600 font-bold tracking-widest' },
  { name: 'EK Tax Consultancy', style: 'text-gray-500 font-medium' },
  { name: 'Votex. Co', style: 'text-gray-700 font-light text-xl' },
  { name: 'Tahoe Capital', icon: '⊡', style: 'text-gray-600 font-semibold' },
];

export const LogoCloud: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Trusted by leading firms
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {integration.icon && (
                <span className="text-lg text-gray-600">{integration.icon}</span>
              )}
              <span className={integration.style}>{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
