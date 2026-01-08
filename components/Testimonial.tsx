import React from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  role?: string;
  company?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ text, author, role, company }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{author}</p>
        {role && <p className="text-sm text-gray-600">{role}</p>}
        {company && <p className="text-sm text-gray-500">{company}</p>}
      </div>
    </div>
  );
};
