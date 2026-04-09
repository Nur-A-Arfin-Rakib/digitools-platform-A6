import React from 'react';

const steps = [
  {
    title: 'Create Account',
    description: 'Sign up in seconds and get instant access to our platform with a free 14-day trial.',
    icon: '👤',
    color: '#EDE9FE',
    iconColor: '#7C3AED',
  },
  {
    title: 'Choose Products',
    description: 'Browse 100+ digital tools and pick the ones that match your workflow and goals.',
    icon: '🛒',
    color: '#DBEAFE',
    iconColor: '#2563EB',
  },
  {
    title: 'Start Creating',
    description: 'Get instant access and start using your tools to supercharge your productivity.',
    icon: '🚀',
    color: '#D1FAE5',
    iconColor: '#059669',
  },
];

const Steps = () => {
  return (
    <section id="steps" className="py-24" style={{ background: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Get Started in 3 Steps
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Getting started with DigiTools is incredibly simple. Follow these easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center bg-white rounded-2xl p-8 shadow-sm" style={{ border: '1px solid #E5E7EB' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5" style={{ background: step.color }}>
                {step.icon}
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-4 -mt-2" style={{ background: step.iconColor }}>
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
