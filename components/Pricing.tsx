'use client';

import React, { useState } from 'react';
import { Button } from './Button';

const plans = [
  {
    name: 'Starter',
    price: '99',
    description: 'Perfect for small practices getting started with AI automation.',
    features: [
      'Up to 50 tax returns/month',
      'Basic tax research AI',
      'Document upload & extraction',
      'Email support',
      '1 user seat',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '299',
    description: 'For growing firms that need advanced automation and collaboration.',
    features: [
      'Unlimited tax returns',
      'Advanced tax research with citations',
      'AI document analysis & extraction',
      'Priority support',
      'Up to 10 user seats',
      'Custom workflows',
      'API access',
      'Drake & ProConnect export',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large firms with complex needs and custom requirements.',
    features: [
      'Everything in Professional',
      'Unlimited user seats',
      'Custom AI training',
      'Dedicated success manager',
      'SSO & advanced security',
      'Custom integrations',
      'On-premise deployment option',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your firm. All plans include a 15-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-gradient-to-r from-primary-500 to-blue-500' : 'bg-gray-300'}`}
            >
              <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></span>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-green-600 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? 'border-primary-500 shadow-xl scale-105 lg:scale-110 z-10'
                  : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {plan.price !== 'Custom' && <span className="text-xl text-gray-500">$</span>}
                  <span className="text-5xl font-black text-gray-900">
                    {plan.price === 'Custom' ? plan.price : isAnnual ? Math.round(parseInt(plan.price) * 0.8) : plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-gray-500 ml-2">/month</span>}
                </div>
                {plan.price !== 'Custom' && isAnnual && (
                  <p className="text-sm text-green-600 mt-1">Billed annually</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">30-day money-back guarantee. No questions asked.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
