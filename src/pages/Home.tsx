import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

/* ========== ROTATING TEXT HERO (Coderfy-style) ========== */
const rotatingWords = [
  'Websites',
  'Mobile Apps',
  'AI Solutions',
  'CRM Systems',
  'ERP Platforms',
  'Automations',
];

function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex items-center min-w-[280px] sm:min-w-[400px] lg:min-w-[600px]">
      <span
        className={`
          inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-2.5 lg:py-3 rounded-pill
          font-display text-3xl sm:text-5xl lg:text-[72px] xl:text-[80px] font-medium leading-[1.1] tracking-tight
          transition-all duration-300
          ${isAnimating ? 'opacity-0 translate-y-3 scale-95' : 'opacity-100 translate-y-0 scale-100'}
        `}
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(236,72,153,0.15), rgba(6,182,212,0.1))',
          border: '1px solid rgba(255,255,255,0.12)',
          color: '#ffffff',
          textShadow: '0 0 40px rgba(99,102,241,0.3)',
        }}
      >
        {rotatingWords[currentIndex]}
      </span>
    </span>
  );
}

function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 z-10">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center">
          {/* LEFT: Text content — flush left aligned with logo */}
          <div className="flex-1 pl-6 lg:pl-10 xl:pl-14 text-left">
            {/* Line 1: "We Build" */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] font-medium leading-[1.1] tracking-tight text-white">
              We Build
            </h1>

            {/* Line 2: Rotating word — with generous space above and below */}
            <div className="my-4 lg:my-5">
              <RotatingText />
            </div>

            {/* Line 3: Gradient tagline */}
            <h2
              className="font-display text-2xl sm:text-4xl lg:text-[38px] xl:text-[46px] font-medium leading-[1.5] tracking-tight pb-1"
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #ec4899 50%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              That Connects Technology With People
            </h2>

            {/* Description */}
            <p className="font-body text-lg text-white/80 max-w-lg mt-8 mb-10">
              Premium digital solutions crafted with human-centered design. From concept to launch in weeks, not months.
            </p>

            {/* CTA Button */}
            <Link
              to="/get-started"
              className="inline-block font-body text-base font-medium px-9 py-4 rounded-button text-white hover:-translate-y-0.5 transition-all duration-300 shadow-glow hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}
            >
              Start Your Project
            </Link>
          </div>

          {/* RIGHT: 3D Crystal Icon — pushed far right like Coderfy */}
          <div className="flex-1 flex items-center justify-end pr-6 lg:pr-10 xl:pr-14">
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] animate-float">
              {/* Glow behind crystal */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 scale-75"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4), rgba(236,72,153,0.2), transparent 70%)' }}
              />
              <img
                src="./assets/hero-crystal.png"
                alt="Genfeel 3D Crystal"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_60px_rgba(139,92,246,0.3)]"
              />
            </div>
          </div>
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
  { name: 'NexLevel', gradient: 'linear-gradient(135deg, #6366f1, #818cf8)' },
  { name: '25th Avenue', gradient: 'linear-gradient(135deg, #ec4899, #f472b6)' },
  { name: 'B360', gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)' },
  { name: 'RaySoko', gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
  { name: 'MyFitting', gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)' },
  { name: 'TechVenture', gradient: 'linear-gradient(135deg, #10b981, #34d399)' },
];

function TrustedBy() {
  return (
    <section className="relative z-10 bg-matte-light py-16 overflow-hidden border-y border-white/[0.06]">
      <div className="container-content mb-10">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-white/75 text-center">
          Trusted by forward-thinking brands
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-5"
            >
              <div
                className="flex items-center gap-3 px-7 py-3.5 rounded-pill border border-white/[0.08] shadow-card hover:shadow-elevated hover:scale-105 transition-all duration-300 cursor-default"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))' }}
              >
                {/* Colored dot */}
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: client.gradient }}
                />
                <span className="font-display text-xl sm:text-2xl font-medium text-white tracking-wide">
                  {client.name}
                </span>
              </div>
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
    <section className="relative z-10 bg-matte py-section">
      <div className="container-content">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-[#818cf8] mb-4">
            WHAT WE DO
          </p>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-white max-w-2xl mb-12 leading-tight">
            Technology that works for people
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="bg-matte-card rounded-card p-12 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-400 group border border-white/[0.06]">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.1))', color: '#818cf8' }}
                >
                  {service.icon}
                </div>
                <h4 className="font-display text-[28px] font-medium text-white mb-3">
                  {service.title}
                </h4>
                <p className="font-body text-base text-white/80 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#818cf8] group-hover:gap-3 transition-all duration-300"
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
    image: './assets/portfolio-25thavenue.jpg',
    link: 'https://www.25thavenue.org/',
  },
  {
    name: 'B360 Limited',
    category: 'Business Services',
    desc: 'Digital transformation for a modern business services company.',
    image: './assets/portfolio-b360.jpg',
    link: 'https://www.b360ltd.com/',
  },
];

function FeaturedWork() {
  return (
    <section className="relative z-10 bg-matte-light py-section">
      <div className="container-content">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-[#818cf8] mb-4">
            PORTFOLIO
          </p>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-white mb-16 leading-tight">
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
                className="block relative rounded-card overflow-hidden group aspect-video border border-white/[0.06]"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <span className="inline-block px-4 py-1.5 rounded-pill bg-white/15 text-white font-body text-xs font-medium mb-4 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="font-display text-4xl text-white mb-2">{project.name}</h3>
                  <p className="font-body text-base text-white/80 max-w-md">{project.desc}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-body text-base font-medium text-[#818cf8] hover:gap-3 transition-all duration-300"
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
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)' }} />
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10" />
              )}
              <div
                className="stat-number font-display text-5xl lg:text-[64px] font-medium"
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
              <p className="font-body text-sm text-white/75 mt-2">{stat.label}</p>
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
    <section className="relative z-10 bg-matte py-section">
      <div className="container-content">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-[#818cf8] mb-4">
            WHY GENFEEL
          </p>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-white max-w-xl mb-16 leading-tight">
            We build partnerships, not just products
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.15}>
              <div className="bg-matte-card rounded-card p-10 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-400 border border-white/[0.06]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.1))', color: '#818cf8' }}
                >
                  {value.icon}
                </div>
                <h4 className="font-display text-[28px] font-medium text-white mt-5 mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-[15px] text-white/80 leading-relaxed">
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
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)' }} />
      <div className="container-content">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-7xl font-medium text-white max-w-3xl leading-tight">
            Ready to bring your vision to life?
          </h2>
          <p className="font-body text-lg text-white/80 mt-6 max-w-lg">
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
