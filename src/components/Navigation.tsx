import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Services', path: '/services', hasDropdown: false },
  { label: 'Portfolio', path: '/portfolio', hasDropdown: false },
  { label: 'About', path: '/about', hasDropdown: false },
  { label: 'Pricing', path: '/pricing', hasDropdown: false },
  { label: 'Contact', path: '/contact', hasDropdown: false },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/[0.06]"
        style={{ height: 72 }}
      >
        <div className="h-full flex items-center justify-between px-6 lg:px-10 xl:px-14">
          {/* Logo - pushed far left like Coderfy */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            {/* Icon */}
            <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[22px] font-semibold tracking-tight text-white group-hover:text-white/90 transition-colors">
                Genfeel
              </span>
              <span className="font-body text-[9px] font-medium uppercase tracking-[0.12em] text-white/60 -mt-0.5">
                Digital Made Human
              </span>
            </div>
          </Link>

          {/* Desktop Nav - centered like Coderfy */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={link.path}
                  className={`font-body text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1 ${
                    location.pathname === link.path ? 'text-white' : ''
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && dropdownOpen === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#111111]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl py-2 overflow-hidden">
                    <div className="px-4 py-2 font-body text-[13px] text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                      Option 1
                    </div>
                    <div className="px-4 py-2 font-body text-[13px] text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                      Option 2
                    </div>
                    <div className="px-4 py-2 font-body text-[13px] text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                      Option 3
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - pushed far right like Coderfy */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/get-started"
              className="font-body text-[13px] font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              Let's Chat
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Glassmorphism overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full gap-8 pt-20">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span className="font-display text-2xl font-semibold text-white">Genfeel</span>
          </Link>

          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl text-white/80 hover:text-white transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 0.05}s` : '0s',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            onClick={() => setMenuOpen(false)}
            className="font-body text-lg font-semibold px-8 py-3 rounded-full text-white mt-4 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              transitionDelay: menuOpen ? `${navLinks.length * 0.05}s` : '0s',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Let's Chat
          </Link>
        </div>
      </div>
    </>
  );
}
