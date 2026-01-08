import React from 'react';

const testimonials = [
  {
    text: "Research used to be a black hole. Now, I just type the question and get a citable IRS answer in seconds. It's changed how we operate.",
    author: "Sarah Chen",
    role: "Tax Manager",
    company: "Sama Tributa",
    image: "/avatars/1.jpg",
    rating: 5,
  },
  {
    text: "80% faster first drafts. What used to take us two days is now done in two hours. The ROI is incredible.",
    author: "Michael Rodriguez",
    role: "Managing Partner",
    company: "Northbridge Tax Advisory",
    image: "/avatars/2.jpg",
    rating: 5,
  },
  {
    text: "The compliance alerts alone have saved us from multiple costly mistakes. SignalsHQ pays for itself ten times over every quarter.",
    author: "Jennifer Williams",
    role: "Senior CPA",
    company: "Capital Tax Solutions",
    image: "/avatars/3.jpg",
    rating: 5,
  },
  {
    text: "Finally, a tool that actually understands tax complexity. Multi-state returns that took days now take hours. Our team loves it.",
    author: "David Park",
    role: "Tax Director",
    company: "Summit Financial Group",
    image: "/avatars/4.jpg",
    rating: 5,
  },
  {
    text: "We've cut our busy season hours by 40%. The AI document extraction is shockingly accurate. Game changer for our firm.",
    author: "Lisa Thompson",
    role: "Partner",
    company: "Thompson & Associates",
    image: "/avatars/5.jpg",
    rating: 5,
  },
  {
    text: "The integration with our existing software was seamless. Within a week, our entire team was using it daily.",
    author: "Robert Kim",
    role: "Operations Manager",
    company: "Pacific Tax Advisors",
    image: "/avatars/6.jpg",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Customer Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted by 500+ tax firms
          </h2>
          <p className="text-xl text-gray-600">
            See why leading accounting firms are switching to SignalsHQ.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
              <div className="text-primary-200 font-medium">Active Firms</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">85%</div>
              <div className="text-primary-200 font-medium">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">50K+</div>
              <div className="text-primary-200 font-medium">Returns Filed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">4.9/5</div>
              <div className="text-primary-200 font-medium">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
