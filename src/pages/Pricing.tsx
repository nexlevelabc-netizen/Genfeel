import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const accentColor = '#6366f1';
const gradientAccent = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)';
const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';
const checkColor = '#6366f1';

/* ========== HERO ========== */
function PricingHero() {
  return (
    <section className="relative z-10 min-h-[50vh] flex items-center justify-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="text-center px-6 max-w-4xl mx-auto pt-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white-muted mb-6">
          PRICING
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white leading-tight">
          Transparent pricing, exceptional value
        </h1>
      </div>
    </section>
  );
}

/* ========== PRICING TIERS ========== */
const plans = [
  { name: 'Starter', price: '\u00a3299', desc: 'Perfect for small businesses and personal brands', features: ['1-3 pages', 'Responsive design', 'Basic SEO', 'Contact form', '1 revision'], highlighted: false },
  { name: 'Professional', price: '\u00a3749', desc: 'Our most popular choice for growing companies', features: ['5-8 pages', 'CMS integration', 'Advanced SEO', 'Blog setup', 'Analytics', '3 revisions'], highlighted: true },
  { name: 'Business', price: '\u00a31,499', desc: 'Comprehensive solutions for established businesses', features: ['Unlimited pages', 'Custom features', 'E-commerce', 'Priority support', '6 revisions', '3 months maintenance'], highlighted: false },
];

function PricingTiers() {
  return (
    <section className="relative z-10 bg-cream py-section">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div className={`rounded-card p-12 h-full flex flex-col transition-all duration-400 hover:-translate-y-1 ${plan.highlighted ? 'bg-ink text-white shadow-elevated' : 'bg-white shadow-card hover:shadow-elevated'}`}>
                <p className={`font-body text-xs font-semibold uppercase tracking-[0.08em] mb-4 ${plan.highlighted ? 'text-[#ec4899]' : ''}`} style={plan.highlighted ? {} : { color: accentColor }}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`font-body text-2xl font-medium ${plan.highlighted ? 'text-white-muted' : 'text-ink-muted'}`}>{plan.price[0]}</span>
                  <span className={`font-display text-[64px] font-medium leading-none ${plan.highlighted ? 'text-white' : 'text-ink'}`}>{plan.price.slice(1)}</span>
                </div>
                <p className={`font-body text-base mb-8 ${plan.highlighted ? 'text-white-muted' : 'text-ink-light'}`}>{plan.desc}</p>
                <div className={`h-px w-full mb-8 ${plan.highlighted ? 'bg-white/10' : 'bg-ink/8'}`} />
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={plan.highlighted ? '#ec4899' : checkColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className={`font-body text-[15px] ${plan.highlighted ? 'text-white-muted' : 'text-ink-light'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/get-started" className={`block text-center font-body text-base font-medium py-4 rounded-button transition-all duration-300 ${plan.highlighted ? 'bg-white text-ink hover:bg-cream' : 'bg-ink text-white hover:shadow-glow'}`} style={plan.highlighted ? {} : { background: gradientAccent }}>
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== CUSTOM PROJECTS ========== */
function CustomProjectsCTA() {
  return (
    <section className="relative z-10 bg-cream-dark py-20">
      <div className="container-content">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-white rounded-card p-14 shadow-card text-center">
            <h3 className="font-display text-4xl font-medium text-ink">Need something custom?</h3>
            <p className="font-body text-[17px] text-ink-light mt-4 max-w-xl mx-auto leading-relaxed">
              Every business is unique. We tailor our services to match your specific requirements, timeline, and budget. Let's discuss your project.
            </p>
            <Link to="/contact" className="inline-block mt-8 font-body text-base font-medium px-9 py-4 rounded-button text-white hover:shadow-glow transition-all duration-300" style={{ background: gradientAccent }}>
              Get a Custom Quote
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========== SERVICE PRICES ========== */
const servicePrices = [
  { service: 'Website Development', from: '\u00a3299', to: '\u00a31,499' },
  { service: 'Mobile Application', from: '\u00a3499', to: '\u00a32,499' },
  { service: 'AI Chatbot', from: '\u00a3199', to: '\u00a3899' },
  { service: 'Voice Agent AI', from: '\u00a3249', to: '\u00a31,199' },
  { service: 'CRM System', from: '\u00a3599', to: '\u00a33,999' },
  { service: 'ERP Solution', from: '\u00a3999', to: '\u00a36,999' },
  { service: 'Process Automation', from: '\u00a3399', to: '\u00a32,499' },
  { service: 'AI Consulting', from: '\u00a3499', to: '\u00a33,999' },
];

function ServicePricesTable() {
  return (
    <section className="relative z-10 bg-cream py-section">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-medium text-ink mb-12 text-center">Service pricing overview</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-card shadow-card overflow-hidden max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 px-8 py-4 font-body text-sm font-semibold text-ink" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(236,72,153,0.03) 100%)' }}>
              <span>Service</span>
              <span className="text-center">Starting From</span>
              <span className="text-center">Typical Range</span>
            </div>
            {servicePrices.map((s, i) => (
              <div key={s.service} className={`grid grid-cols-3 gap-4 px-8 py-4 font-body text-[15px] ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                <span className="text-ink">{s.service}</span>
                <span className="text-center font-medium" style={{ color: accentColor }}>{s.from}</span>
                <span className="text-center text-ink-light">{s.to}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <main>
      <PricingHero />
      <PricingTiers />
      <CustomProjectsCTA />
      <ServicePricesTable />
    </main>
  );
}
