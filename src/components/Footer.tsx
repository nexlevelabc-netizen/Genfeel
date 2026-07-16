import { Link } from 'react-router-dom';

const footerLinks = {
  services: [
    { label: 'Web Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'AI Solutions', path: '/services' },
    { label: 'CRM & ERP', path: '/services' },
    { label: 'Automation', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink relative z-10">
      {/* Gradient top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, #6366f1, #ec4899, #06b6d4)' }} />

      <div className="container-content py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold text-white tracking-tight">Genfeel</span>
                <span className="font-body text-[9px] font-medium uppercase tracking-[0.12em] text-white/60 -mt-0.5">Digital Made Human</span>
              </div>
            </Link>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs">
              Digital made human. We craft websites, mobile apps, and AI solutions that connect technology with people.
            </p>
            <div className="flex gap-3 mt-6">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-subtle border border-white/10 flex items-center justify-center text-white/70 hover:border-[#6366f1] hover:text-[#818cf8] hover:bg-[#6366f1]/10 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-body font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="font-body text-sm text-white/70 hover:text-[#818cf8] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="font-body text-sm text-white/70 hover:text-[#818cf8] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a href="mailto:hello@genfeel.co.uk" className="block font-body text-sm text-white/70 hover:text-[#818cf8] transition-colors duration-300">
                hello@genfeel.co.uk
              </a>
              <a href="tel:+447383027802" className="block font-body text-sm text-white/70 hover:text-[#818cf8] transition-colors duration-300">
                +44 7383 027802
              </a>
              <p className="font-body text-sm text-white/70">
                London, United Kingdom
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/get-started"
                className="inline-block font-body text-sm font-medium px-6 py-3 rounded-pill text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/60">
            &copy; {new Date().getFullYear()} Genfeel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-white/60 hover:text-[#818cf8] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-white/60 hover:text-[#818cf8] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
