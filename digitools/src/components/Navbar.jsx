import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{ borderBottom: '1px solid #E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center text-white font-bold text-sm">D</div>
            <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>
              Digi<span style={{ color: '#7C3AED' }}>Tools</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'Pricing', 'Blog', 'Contact Us'].map((link, i) => (
              <a key={i} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a href="#products" className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </a>
            <button className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
