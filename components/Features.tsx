'use client';

import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: 'Always Current on Tax Rules',
    description: 'Delivers the latest updates across SALT and Federal taxes directly in your workflow. Never miss a regulatory change.',
    icon: '⏰',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Turn Raw Data into Insight',
    description: 'Uses AI to locate, organize, and surface client insights hidden in documents. Transform chaos into clarity.',
    icon: '📊',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Surface Savings & Risks',
    description: 'Analyze your client data to unlock opportunities and spot risks proactively.',
    icon: '🎯',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Complex Advisory Ready',
    description: 'Automates nexus studies, maps P&L, and handles K-1s for complex pass-through entities.',
    icon: '💼',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Work seamlessly with your team. Share notes, assign tasks, and track progress.',
    icon: '👥',
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    title: 'Export to Your Favorite Tools',
    description: 'Seamless integration with Drake, ProConnect, Lacerte, and more.',
    icon: '🔗',
    gradient: 'from-rose-500 to-red-500'
  }
];

export const Features: React.FC = () => {
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
    <section ref={sectionRef} id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Focus on high-value
            <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              client outcomes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you wish your tax tools could do — now in one platform.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group cursor-pointer h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div className={`mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-auto pt-4`}>
                  <span>Learn more</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
