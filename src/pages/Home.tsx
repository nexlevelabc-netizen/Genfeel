import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

/* ========== HERO ========== */
function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 z-10">
      <div className="text-center px-6 max-w-4xl mx-auto mt-auto mb-auto">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-[120px] font-medium leading-[0.95] tracking-tight text-white mb-4">
          Digital Made
        </h1>
        <h1
          className="font-display text-5xl sm:text-7xl lg:text-[120px] font-medium leading-[0.95] tracking-tight mb-8"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Human
        </h1>
        <p className="font-body text-lg text-white-muted max-w-xl mx-auto mb-12">
          We craft websites, mobile apps, and AI solutions that connect technology with people.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/get-started"
            className="font-body text-base font-medium px-9 py-4 rounded-button text-white hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}
          >
            Start Your Project
          </Link>
          <Link
            to="/portfolio"
            className="font-body text-base font-medium px-9 py-4 rounded-button border border-white/30 text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}

/* ========== TRUSTED BY ========== */
const clientLogos = [
  'NexLevel', '25th Avenue', 'B360', 'RaySoko', 'MyFitting', 'TechVenture',
];

function TrustedBy() {
  return (
    <section className="relative z-10 bg-cream-dark py-16 overflow-hidden">
      <div className="container-content">
        <p className="font-body text-sm text-ink-muted text-center mb-9">
          Trusted by forward-thinking brands
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-12 opacity-30 hover:opacity-60 transition-opacity duration-300"
            >
              <span className="font-display text-2xl text-ink tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== SERVICES PREVIEW ========== */
const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Custom websites and web applications built with modern technologies that scale with your business.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Native and cross-platform iOS and Android apps designed for engagement and performance.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 3.866 3.134 7 8 7s8-3.134 8-7a8 8 0 0 0-8-8z" /><path d="M9 13c1 1 2 1 3 0" /><path d="M9.5 9.5c.5-.5 1.5-.5 2 0" /><path d="M13.5 9.5c.5-.5 1.5-.5 2 0" />
      </svg>
    ),
    title: 'AI Solutions',
    desc: 'Intelligent chatbots, voice agents, and automation that transform how you interact with customers.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'CRM & ERP Systems',
    desc: 'Streamlined business operations with custom CRM and ERP solutions tailored to your workflow.',
  },
];

function ServicesPreview() {
  return (
    <section className="relative z-10 bg-cream py-section">
      <div className="container-content">
        <ScrollReveal>
          <p
            className="font-body text-xs font-semibold uppercase tracking-[0.08em] mb-4"
            style={{ color: '#6366f1' }}
          >
            WHAT WE DO
          </p>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-ink max-w-2xl mb-12 leading-tight">
            Technology that works for people
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="bg-white rounded-card p-12 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-400 group">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))', color: '#6366f1' }}
                >
                  {service.icon}
                </div>
                <h4 className="font-display text-[28px] font-medium text-ink mb-3">
                  {service.title}
                </h4>
                <p className="font-body text-base text-ink-light leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium group-hover:gap-3 transition-all duration-300"
                  style={{ color: '#6366f1' }}
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== FEATURED WORK ========== */
const featuredWork = [
  {
    name: '25th Avenue',
    category: 'Housing Platform',
    desc: 'Supported accommodation platform connecting people with safe housing.',
    image: '/assets/portfolio-25thavenue.jpg',
    link: 'https://www.25thavenue.org/',
  },
  {
    name: 'B360 Limited',
    category: 'Business Services',
    desc: 'Digital transformation for a modern business services company.',
    image: '/assets/portfolio-b360.jpg',
    link: 'https://www.b360ltd.com/',
  },
];

function FeaturedWork() {
  return (
    <section className="relative z-10 bg-cream-dark py-section">
      <div className="container-content">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#6366f1' }}>
            PORTFOLIO
          </p>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-ink mb-16 leading-tight">
            Work that speaks for itself
          </h2>
        </ScrollReveal>

        <div className="space-y-12">
          {featuredWork.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.2}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-card overflow-hidden group aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 gradient-dark-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <span className="inline-block px-4 py-1.5 rounded-pill bg-white/15 text-white font-body text-xs font-medium mb-4">
                    {project.category}
                  </span>
                  <h3 className="font-display text-4xl text-white mb-2">{project.name}</h3>
                  <p className="font-body text-base text-white-muted max-w-md">{project.desc}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-body text-base font-medium hover:gap-3 transition-all duration-300"
            style={{ color: '#6366f1' }}
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ========== STATS ========== */
const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: '+', label: 'Years of Excellence' },
];

function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const statElements = section.querySelectorAll('.stat-number');

    statElements.forEach((el) => {
      const target = parseInt(el.getAttribute('data-value') || '0');
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-ink py-24">
      {/* Subtle gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)' }} />
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10" />
              )}
              <div
                className="stat-number font-display text-5xl lg:text-[64px] font-medium text-white"
                data-value={stat.value}
                style={{
                  background: 'linear-gradient(135deg, #818cf8, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                0{stat.suffix}
              </div>
              <p className="font-body text-sm text-white-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== WHY GENFEEL ========== */
const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Human-Centered Design',
    desc: 'Every solution starts with understanding your users. We design experiences that feel natural and intuitive.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Rapid Delivery',
    desc: 'Our streamlined process means faster time-to-market without compromising on quality or attention to detail.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Enterprise-Grade Quality',
    desc: 'From startups to established businesses, we build with security, scalability, and performance in mind.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Ongoing Partnership',
    desc: "We don't disappear after launch. Our team provides continuous support, updates, and strategic guidance.",
  },
];

function WhyGenfeel() {
  return (
    <section className="relative z-10 bg-cream py-section">
      <div className="container-content">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#6366f1' }}>
            WHY GENFEEL
          </p>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-ink max-w-xl mb-16 leading-tight">
            We build partnerships, not just products
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.15}>
              <div className="bg-white rounded-card p-10 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-400">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))', color: '#6366f1' }}
                >
                  {value.icon}
                </div>
                <h4 className="font-display text-[28px] font-medium text-ink mt-5 mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-[15px] text-ink-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== CTA ========== */
function CTASection() {
  return (
    <section className="relative z-10 bg-ink py-section">
      {/* Subtle gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)' }} />
      <div className="container-content text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-7xl font-medium text-white max-w-3xl mx-auto leading-tight">
            Ready to bring your vision to life?
          </h2>
          <p className="font-body text-lg text-white-muted mt-6 max-w-lg mx-auto">
            Let's discuss how Genfeel can help transform your digital presence.
          </p>
          <Link
            to="/get-started"
            className="inline-block mt-10 font-body text-base font-medium px-10 py-4 rounded-button text-white hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}
          >
            Start a Conversation
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========== HOME PAGE ========== */
export default function Home() {
  return (
    <main>
      <HomeHero />
      <TrustedBy />
      <ServicesPreview />
      <FeaturedWork />
      <StatsSection />
      <WhyGenfeel />
      <CTASection />
    </main>
  );
}
