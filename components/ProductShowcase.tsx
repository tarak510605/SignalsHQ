'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';

const products = [
  {
    id: 'research',
    label: 'Tax Research',
    badge: 'Tax Research',
    badgeColor: 'bg-primary-100 text-primary-700',
    title: 'Instant, reliable answers to your tax questions.',
    description: 'Clear, citable answers backed by laws and court rulings.',
    features: [
      'Direct IRS citations & references',
      'Federal & state jurisdiction switch',
      'Real-time tax law updates',
      'Court case precedents included'
    ],
    gradient: 'from-primary-50 to-blue-100',
    icon: '🔍',
    mockup: 'research'
  },
  {
    id: 'neural',
    label: 'Neural AI',
    badge: 'Neural AI',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Client Data in One Place.',
    description: 'Centralized. Searchable. Always current.',
    features: [
      '98.5% extraction accuracy',
      'Multi-format document support',
      'Real-time processing',
      'Smart categorization'
    ],
    gradient: 'from-purple-50 to-pink-100',
    icon: '🧠',
    mockup: 'neural'
  },
  {
    id: 'workpapers',
    label: 'Workpapers',
    badge: 'Workpapers',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'Audit-ready workpapers, generated automatically.',
    description: 'Standardized. Reviewable. IRS-ready.',
    features: [
      'Auto-generated documentation',
      'Customizable templates',
      'Version control built-in',
      'Export to multiple formats'
    ],
    gradient: 'from-green-50 to-emerald-100',
    icon: '📋',
    mockup: 'workpapers'
  },
  {
    id: 'review',
    label: 'Tax Review',
    badge: 'Tax Review',
    badgeColor: 'bg-orange-100 text-orange-700',
    title: 'Find Tax Errors Before They Find You.',
    description: 'AI-powered review catches what humans miss.',
    features: [
      'Multi-pass error detection',
      'Risk scoring system',
      'Compliance verification',
      'Actionable suggestions'
    ],
    gradient: 'from-orange-50 to-amber-100',
    icon: '✅',
    mockup: 'review'
  }
];

const MockupResearch = () => (
  <div className="bg-white rounded-2xl p-6 shadow-lg">
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-10 bg-gray-100 rounded-lg px-3 flex items-center">
          <span className="text-gray-400 text-sm">What is the deadline for 1099-K filing?</span>
        </div>
        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-500">
        <div className="text-sm font-semibold text-primary-900 mb-2">IRC Section 6050W</div>
        <div className="text-xs text-primary-700">Filing deadline: January 31st following the calendar year...</div>
      </div>
      <div className="flex gap-2">
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">IRS.gov</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Treasury Reg</span>
      </div>
    </div>
  </div>
);

const MockupNeural = () => (
  <div className="bg-white rounded-2xl p-6 shadow-lg">
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-blue-500 to-primary-600 rounded-xl p-4 text-white">
        <div className="text-sm font-semibold mb-2">Client Data</div>
        <div className="text-2xl font-bold">1,247</div>
        <div className="text-xs opacity-80">Documents</div>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
        <div className="text-sm font-semibold mb-2">Extracted</div>
        <div className="text-2xl font-bold">98.5%</div>
        <div className="text-xs opacity-80">Accuracy</div>
      </div>
      <div className="col-span-2 bg-gray-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">Processing</span>
          <span className="text-xs text-gray-500">Real-time</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full w-3/4 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const MockupWorkpapers = () => (
  <div className="bg-white rounded-2xl p-6 shadow-lg">
    <div className="flex items-center justify-between mb-6">
      <span className="font-bold text-gray-900">Workpapers</span>
      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Auto-generated</span>
    </div>
    <div className="space-y-2">
      {['Schedule K-1 Analysis', 'Depreciation Summary', 'Income Reconciliation', 'Deduction Support'].map((item, i) => (
        <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">{item}</span>
          <svg className="w-4 h-4 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      ))}
    </div>
  </div>
);

const MockupReview = () => (
  <div className="bg-white rounded-2xl p-6 shadow-lg">
    <div className="flex items-center justify-between mb-6">
      <span className="font-bold text-gray-900">Tax Review</span>
      <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">3 Issues Found</span>
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700">Missing Schedule C</span>
        </div>
        <span className="text-xs text-red-600 font-semibold">High Risk</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700">Depreciation Mismatch</span>
        </div>
        <span className="text-xs text-yellow-600 font-semibold">Medium</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700">12 Items Verified</span>
        </div>
        <span className="text-xs text-green-600 font-semibold">Passed</span>
      </div>
    </div>
  </div>
);

const mockups: Record<string, React.FC> = {
  research: MockupResearch,
  neural: MockupNeural,
  workpapers: MockupWorkpapers,
  review: MockupReview
};

export const ProductShowcase: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
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
    let currentProduct = 0;
    
    const interval = setInterval(() => {
      currentProduct = (currentProduct + 1) % 4;
      setActiveProduct(currentProduct);
      setProgress(0);
    }, 5000); // Change every 5 seconds

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const product = products[activeProduct];
  const MockupComponent = mockups[product.mockup];

  return (
    <section ref={sectionRef} id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Product Suite
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              automate tax work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful tools working together seamlessly to transform your practice.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {products.map((p, index) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProduct(index);
                setProgress(0);
              }}
              className={`px-4 sm:px-6 py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                activeProduct === index
                  ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-primary-300'
              }`}
            >
              <span className="text-lg">{p.icon}</span>
              <span className="hidden sm:inline">{p.label}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {products.map((_, index) => (
            <div key={index} className="h-1 w-16 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-600 to-blue-600 transition-all duration-100 ease-linear"
                style={{ width: activeProduct === index ? `${progress}%` : '0%' }}
              />
            </div>
          ))}
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="order-2 lg:order-1" key={product.id}>
            <div className={`inline-block ${product.badgeColor} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
              {product.badge}
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {product.title}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {product.description}
            </p>
            <div className="space-y-4 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-200 transition-colors">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className={`bg-gradient-to-br ${product.gradient} rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500`}>
              <MockupComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
