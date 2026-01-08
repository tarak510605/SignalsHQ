'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Data Sources',
    description: 'Link your accounting software, upload client documents, or import spreadsheets in seconds.',
    icon: '🔗',
    features: ['QuickBooks sync', 'Document upload', 'CSV import'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'AI Analyzes & Extracts',
    description: 'Our intelligent engine processes data, identifies patterns, and surfaces critical insights automatically.',
    icon: '🧠',
    features: ['Smart extraction', 'Pattern recognition', 'Risk detection'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '03',
    title: 'Review & Export',
    description: 'Verify AI-generated reports, make adjustments, and export polished deliverables to your clients.',
    icon: '✨',
    features: ['Quality review', 'One-click export', 'Multi-format'],
    color: 'from-green-500 to-emerald-500'
  }
];

export const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
            ⚡ Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Three steps to
            <span className="block bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              transform your practice
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Get up and running in minutes. Our intuitive platform guides you every step of the way.
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full opacity-30"></div>
          
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-500 ${activeStep === index ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step card */}
              <div className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-300 ${
                activeStep === index 
                  ? 'border-white/30 shadow-2xl shadow-primary-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                {/* Step number badge */}
                <div className={`absolute -top-4 left-8 px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${step.color}`}>
                  Step {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4 transform ${activeStep === index ? 'scale-110 rotate-3' : ''} transition-transform duration-300`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-6">{step.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#cta"
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg group transition-all duration-300 shadow-lg shadow-primary-500/30"
          >
            Start Your Free Trial
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
