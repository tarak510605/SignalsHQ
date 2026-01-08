'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'How does SignalsHQ integrate with my existing tax software?',
    answer: 'SignalsHQ seamlessly integrates with Drake, ProConnect, Lacerte, Thomson Reuters UltraTax, and more. You can export prepared returns directly to your software of choice with a single click. Our team also provides custom integration support for enterprise clients.',
  },
  {
    question: 'Is my client data secure with SignalsHQ?',
    answer: 'Absolutely. We\'re SOC 2 Type II certified and use 256-bit AES encryption for all data at rest and in transit. We employ multi-factor authentication, role-based access controls, and conduct quarterly penetration tests. Your client data never leaves our secure cloud infrastructure.',
  },
  {
    question: 'How accurate is the AI tax research feature?',
    answer: 'Our AI is trained on millions of IRS publications, court rulings, and tax codes. Every answer includes direct citations to authoritative sources so you can verify accuracy. Our accuracy rate exceeds 98% for federal tax questions, and we continuously update our knowledge base with new regulations.',
  },
  {
    question: 'Can I try SignalsHQ before committing?',
    answer: 'Yes! We offer a 15-day free trial with full access to all features. No credit card required to start. You\'ll have access to our support team throughout your trial to help you get the most out of the platform.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support with 24-hour response times. Professional and Enterprise plans include priority phone and chat support. Enterprise clients get a dedicated success manager and custom onboarding. We also offer extensive documentation, video tutorials, and weekly webinars.',
  },
  {
    question: 'How long does it take to get started?',
    answer: 'Most firms are up and running within 30 minutes. Simply sign up, connect your data sources, and start asking questions. Our AI begins learning your practice patterns immediately. For enterprise deployments with custom integrations, we typically complete setup within 2-4 weeks.',
  },
  {
    question: 'Do you offer training for my team?',
    answer: 'Yes! We provide free onboarding sessions for all new accounts. Professional and Enterprise plans include quarterly training sessions and access to our certification program. We also offer on-site training for enterprise clients.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You own your data. Upon cancellation, you can export all your data at any time. We retain your data for 30 days after cancellation in case you want to reactivate, then it\'s permanently deleted from our servers.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SignalsHQ.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary-300 shadow-lg' : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-100 text-gray-600'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary-50 to-purple-50 rounded-3xl border border-primary-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Our team is here to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span>Contact Support</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
