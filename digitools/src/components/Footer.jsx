import React from 'react';

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-20" style={{ background: '#7C3AED' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-purple-200 text-sm mb-8 max-w-lg mx-auto">
            Join 50,000+ professionals who use DigiTools to supercharge their productivity every day.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-purple-700 px-7 py-3 rounded-lg font-semibold text-sm hover:bg-purple-50 transition-colors">
              Get Started Free
            </button>
            <button className="px-7 py-3 rounded-lg font-semibold text-sm text-white transition-colors hover:bg-white/10" style={{ border: '2px solid rgba(255,255,255,0.4)' }}>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center text-white font-bold text-sm">D</div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>DigiTools</span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
                The ultimate platform for digital professionals. 100+ AI-powered tools to supercharge your workflow.
              </p>
              <div className="flex gap-3">
                {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-colors hover:bg-purple-600"
                    style={{ background: '#1F2937', color: '#9CA3AF' }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold mb-4 text-white text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Products</h4>
              <ul className="space-y-2.5">
                {['ResumeAI Pro', 'LogoForge', 'VideoScript AI', 'SocialSync', 'DataViz Studio'].map((item, i) => (
                  <li key={i}><a href="#products" className="text-sm hover:text-purple-400 transition-colors" style={{ color: '#9CA3AF' }}>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-white text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Company</h4>
              <ul className="space-y-2.5">
                {['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'].map((item, i) => (
                  <li key={i}><a href="#" className="text-sm hover:text-purple-400 transition-colors" style={{ color: '#9CA3AF' }}>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4 text-white text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Support</h4>
              <ul className="space-y-2.5">
                {['Help Center', 'Documentation', 'API Reference', 'Status Page', 'Community'].map((item, i) => (
                  <li key={i}><a href="#" className="text-sm hover:text-purple-400 transition-colors" style={{ color: '#9CA3AF' }}>{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid #1F2937' }}>
            <p className="text-xs" style={{ color: '#6B7280' }}>© 2025 DigiTools Platform. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-xs hover:text-purple-400 transition-colors" style={{ color: '#6B7280' }}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
