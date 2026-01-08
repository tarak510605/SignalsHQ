'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 70,
    suffix: '%',
    label: 'Time Saved',
    description: 'On average per return',
    icon: '⏱️'
  },
  {
    value: 500,
    suffix: '+',
    label: 'CPA Firms',
    description: 'Trust SignalsHQ daily',
    icon: '🏢'
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Accuracy Rate',
    description: 'AI-verified calculations',
    icon: '✅'
  },
  {
    value: 50,
    suffix: 'K+',
    label: 'Returns Processed',
    description: 'This tax season alone',
    icon: '📊'
  }
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end * 10) / 10);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  
  return count;
}

const StatCard: React.FC<{
  stat: typeof stats[0];
  isVisible: boolean;
  index: number;
}> = ({ stat, isVisible, index }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div 
      className="relative group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
        <div className="text-4xl mb-4">{stat.icon}</div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
            {count}
          </span>
          <span className="text-2xl font-bold text-primary-600">{stat.suffix}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{stat.label}</h3>
        <p className="text-gray-500 text-sm">{stat.description}</p>
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📈 Results That Speak
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Numbers don&apos;t lie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of CPA firms transforming their practice with SignalsHQ
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
