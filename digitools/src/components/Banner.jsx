import React from 'react';

const Banner = () => {
  return (
    <section className="pt-16 min-h-screen flex flex-col bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 flex-grow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              New: AI-Powered Tools Available
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Supercharge Your
              <br />
              <span style={{ color: '#7C3AED' }}>Digital Workflow</span>
            </h1>
            <p className="text-base text-gray-500 mb-8 max-w-md leading-relaxed">
              Access 100+ premium digital tools designed to boost your productivity. 
              From AI writing to design automation — everything in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products">
                <button className="btn-primary px-7 py-3 rounded-lg font-semibold text-sm">
                  Explore Products
                </button>
              </a>
              <button className="px-7 py-3 rounded-lg font-semibold text-sm text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-2" style={{ border: '2px solid #E5E7EB' }}>
                ▶ Watch Demo
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:flex justify-center items-center float-anim">
            <img src="../assets/banner.png" alt="banner" className="w-full max-w-md rounded-2xl object-cover shadow-xl" />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="py-6" style={{ background: '#7C3AED' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            {[
              { value: '50K+', label: 'Active Users' },
              { value: '200+', label: 'Premium Tools' },
              { value: '4.9', label: 'Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.value}</div>
                <div className="text-xs opacity-80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;