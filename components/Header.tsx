'use client';

import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>
                Signals<span className="text-primary-600">HQ</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {['Features', 'How it Works', 'Pricing', 'Security', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  scrolled 
                    ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-white/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
              Log in
            </button>
            <button 
              onClick={() => scrollToSection('cta')} 
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2.5 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 duration-200"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-700 hover:bg-white/50'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-1 bg-white rounded-2xl mt-2 shadow-xl border border-gray-100 px-2">
            {['Features', 'How it Works', 'Pricing', 'Security', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3 px-4 space-y-2">
              <button className="block w-full text-left py-2 text-gray-600 font-medium">Log in</button>
              <button 
                onClick={() => scrollToSection('cta')} 
                className="block w-full text-center py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-xl font-semibold shadow-lg"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
