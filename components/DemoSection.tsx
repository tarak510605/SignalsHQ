'use client';

import React, { useState } from 'react';

export const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            See It In Action
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Watch how tax firms are saving 4+ hours per return
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See SignalsHQ transform a complex multi-state return in under 3 minutes.
          </p>
        </div>

        {/* Video container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
          
          <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Browser mockup header */}
            <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-gray-600 rounded-lg px-4 py-1.5 text-sm text-gray-300 max-w-md mx-auto flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  app.signalshq.io/dashboard
                </div>
              </div>
            </div>
            
            {/* Video/Demo area */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
              {!isPlaying ? (
                <>
                  {/* Placeholder content - mockup of the app */}
                  <div className="absolute inset-0 p-6">
                    <div className="h-full grid grid-cols-12 gap-4">
                      {/* Sidebar */}
                      <div className="col-span-2 bg-gray-700/50 rounded-lg p-3 space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`h-8 rounded ${i === 2 ? 'bg-primary-500/50' : 'bg-gray-600/50'}`}></div>
                        ))}
                      </div>
                      
                      {/* Main content */}
                      <div className="col-span-7 space-y-4">
                        <div className="bg-gray-700/50 rounded-lg p-4 h-24">
                          <div className="h-4 bg-gray-600/50 rounded w-1/3 mb-3"></div>
                          <div className="h-3 bg-gray-600/50 rounded w-2/3 mb-2"></div>
                          <div className="h-3 bg-gray-600/50 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-700/50 rounded-lg p-4">
                            <div className="h-3 bg-primary-500/50 rounded w-1/2 mb-3"></div>
                            <div className="h-16 bg-gray-600/30 rounded"></div>
                          </div>
                          <div className="bg-gray-700/50 rounded-lg p-4">
                            <div className="h-3 bg-green-500/50 rounded w-1/2 mb-3"></div>
                            <div className="h-16 bg-gray-600/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right panel */}
                      <div className="col-span-3 bg-gray-700/50 rounded-lg p-3 space-y-3">
                        <div className="h-4 bg-primary-500/50 rounded w-2/3"></div>
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-12 bg-gray-600/30 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group hover:bg-black/30 transition-colors"
                  >
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <svg className="w-12 h-12 text-primary-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>Loading demo...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature highlights below video */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="w-14 h-14 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors">
              <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Research</h3>
            <p className="text-gray-400">Get citable IRS answers in seconds, not hours</p>
          </div>
          <div className="group">
            <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Auto-extraction</h3>
            <p className="text-gray-400">AI pulls key data from any document format</p>
          </div>
          <div className="group">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
              <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">1-Click Export</h3>
            <p className="text-gray-400">Send to Drake, ProConnect, Lacerte & more</p>
          </div>
        </div>
      </div>
    </section>
  );
};
