import React from 'react';

interface StepProps {
  number: string;
  title: string;
  description?: string;
}

export const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};
