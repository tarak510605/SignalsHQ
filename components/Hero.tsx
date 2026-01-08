'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-primary-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg border border-primary-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            <span>AI-Powered Tax Intelligence Platform</span>
          </div>

          {/* Main headline with animated gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Powering Tax Experts.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 animate-gradient bg-[length:200%_auto]">
              Fueling Firm Growth.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Cut research time by <span className="text-primary-600 font-bold">80%</span>. Automate busy-season grind. 
            Deliver advisory that scales your practice.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary" size="lg" className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Start Free 15-Day Trial
            </Button>
            <Button variant="secondary" size="lg" className="hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </Button>
          </div>

          {/* Metric badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-primary-200">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-2">4+ hrs</div>
              <div className="text-gray-600 font-semibold">Saved Per Return</div>
              <div className="mt-2 text-xs text-gray-400">Average time reduction</div>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-primary-200">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400 mb-2">2X</div>
              <div className="text-gray-600 font-semibold">Advisory Revenue</div>
              <div className="mt-2 text-xs text-gray-400">Year over year growth</div>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-primary-200">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 mb-2">95%+</div>
              <div className="text-gray-600 font-semibold">Client Satisfaction</div>
              <div className="mt-2 text-xs text-gray-400">NPS score improvement</div>
            </div>
          </div>

          {/* Trust logos */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wider">Integrates with your favorite tools</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['Drake', 'ProConnect', 'Lacerte', 'Thomson Reuters', 'Wolters Kluwer'].map((name, i) => (
                <div key={i} className="text-lg font-bold text-gray-400 hover:text-primary-600 transition-colors cursor-pointer">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
