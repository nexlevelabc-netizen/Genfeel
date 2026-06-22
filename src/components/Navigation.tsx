import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const showAsTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showAsTransparent
            ? 'bg-transparent'
            : 'bg-cream/90 backdrop-blur-xl shadow-card'
        }`}
        style={{ height: 80 }}
      >
        <div className="container-content h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                showAsTransparent ? 'text-white' : 'text-ink'
              }`}
            >
              Genfeel
            </span>
            <span
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                showAsTransparent
                  ? 'bg-[#ec4899]'
                  : 'bg-[#6366f1]'
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium transition-colors duration-300 ${
                  showAsTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-ink/80 hover:text-[#6366f1]'
                } ${location.pathname === link.path ? 'opacity-100' : 'opacity-80'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className={`font-body text-sm font-medium px-6 py-2.5 rounded-pill transition-all duration-300 ${
                showAsTransparent
                  ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  : 'bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white hover:shadow-glow'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                showAsTransparent ? 'bg-white' : 'bg-ink'
              } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                showAsTransparent ? 'bg-white' : 'bg-ink'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                showAsTransparent ? 'bg-white' : 'bg-ink'
              } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-ink hover:text-[#6366f1] transition-all duration-300"
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
            className="font-body text-lg font-medium px-8 py-3 rounded-pill bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white hover:shadow-glow transition-all duration-300 mt-4"
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 0.05}s` : '0s',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
