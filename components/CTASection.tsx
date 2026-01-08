import React from 'react';
import { Button } from './Button';

export const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>Limited Time: Extended 15-day trial</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Get hands-on with AI-powered<br className="hidden sm:block" /> tax automation today.
        </h2>
        <p className="text-xl sm:text-2xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Join <span className="font-bold text-white">500+</span> tax firms who&apos;ve already transformed their practice. 
          Start free. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="secondary" size="lg" className="bg-white text-primary-700 hover:bg-gray-50 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
            Start 15-day Free Trial
          </Button>
          <Button variant="primary" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
            Schedule Demo
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-primary-100">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Free 15-day trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Setup in 5 minutes</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center space-x-2 text-white/80">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className="font-semibold">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span className="font-semibold">256-bit SSL</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span className="font-semibold">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
