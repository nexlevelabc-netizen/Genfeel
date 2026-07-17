import ScrollReveal from '@/components/ScrollReveal';

const gradientAccent = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)';
const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

/* ========== HERO ========== */
function AboutHero() {
  return (
    <section className="relative z-10 min-h-[60vh] flex items-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content pt-24">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/70 mb-6">
          ABOUT US
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white max-w-4xl leading-tight">
          We believe technology should feel human
        </h1>
      </div>
    </section>
  );
}

/* ========== MISSION ========== */
function MissionSection() {
  return (
    <section className="relative z-10 bg-matte py-section">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-[64px] font-medium text-white leading-tight">
              Our story
            </h2>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-lg text-white/80 leading-relaxed">
                Genfeel was founded with a simple belief: technology should serve people, not the other way around. We started as a small web development team and have grown into a full-service digital agency.
              </p>
              <p className="font-body text-lg text-white/80 leading-relaxed mt-6">
                Today, we help businesses of all sizes navigate the digital landscape — from their first website to enterprise AI implementations. Our approach combines technical expertise with genuine care for the people who use our products.
              </p>
              <p className="font-body text-base mt-8 font-medium" style={{ background: gradientAccent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Tech with a heartbeat.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== VALUES ========== */
const values = [
  { num: '01', title: 'People First', desc: 'We design for humans, not metrics. Every decision we make starts with understanding the real people who will use our products.' },
  { num: '02', title: 'Technical Excellence', desc: 'We stay at the forefront of technology so our clients don\'t have to worry about it. Clean code, modern architecture, best practices.' },
  { num: '03', title: 'Lasting Impact', desc: 'We build solutions that grow with your business. No quick fixes — just sustainable technology that delivers value for years.' },
];

function ValuesSection() {
  return (
    <section className="relative z-10 bg-matte-light py-section">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-white mb-16 leading-tight">
            What drives us
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.num} delay={i * 0.15}>
              <div className="bg-matte-card rounded-card p-12 shadow-card h-full border border-white/[0.10]">
                <span className="font-display text-[80px] font-medium leading-none" style={{ color: 'rgba(99,102,241,0.2)' }}>{v.num}</span>
                <h3 className="font-display text-[28px] font-medium text-white -mt-4 mb-3">{v.title}</h3>
                <p className="font-body text-base text-white/80 leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== CTA ========== */
function AboutCTA() {
  return (
    <section className="relative z-10 bg-ink py-section">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-6xl font-medium text-white max-w-2xl leading-tight">
            Let's build something meaningful
          </h2>
          <p className="font-body text-lg text-white/80 mt-6 max-w-lg">
            We're always looking for new challenges and exciting collaborations.
          </p>
          <a href="/contact" className="inline-block mt-10 font-body text-base font-medium px-10 py-4 rounded-button text-white hover:-translate-y-0.5 transition-all duration-300" style={{ background: gradientAccent }}>
            Get in Touch
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <AboutCTA />
    </main>
  );
}
