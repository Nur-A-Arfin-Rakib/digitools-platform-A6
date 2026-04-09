import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for freelancers and solo creators.',
    features: ['5 Digital Tools', 'Basic AI Features', '5GB Storage', 'Email Support'],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: 'Most popular for growing teams.',
    features: ['Unlimited Tools', 'Advanced AI Features', '50GB Storage', 'Priority Support 24/7', 'Team Collaboration', 'API Access'],
    cta: 'Buy Now',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'For large teams with advanced needs.',
    features: ['Everything in Pro', 'Unlimited Storage', 'Dedicated Manager', 'Custom Integrations', 'SSO & Security', 'SLA Guarantee'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
            No hidden fees. Cancel anytime. Start with a 14-day free trial.
          </p>
          <div className="inline-flex items-center gap-1 p-1 rounded-xl" style={{ background: '#F3F4F6' }}>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${!isYearly ? 'btn-primary' : 'text-gray-500'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${isYearly ? 'btn-primary' : 'text-gray-500'}`}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#D1FAE5', color: '#059669' }}>-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 flex flex-col ${plan.highlighted ? 'text-white scale-105 shadow-2xl' : 'card-hover'}`}
              style={plan.highlighted
                ? { background: '#7C3AED' }
                : { background: 'white', border: '1px solid #E5E7EB' }
              }
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Syne, sans-serif' }}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? 'text-purple-200' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-purple-200' : 'text-gray-400'}`}>/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                      style={plan.highlighted ? { background: 'rgba(255,255,255,0.2)', color: 'white' } : { background: '#EDE9FE', color: '#7C3AED' }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${plan.highlighted ? 'bg-white text-purple-700 hover:bg-purple-50' : 'btn-primary'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
