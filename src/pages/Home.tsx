import { useEffect, useState } from 'react';
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
  { name: '25th Avenue Housing', image: './assets/logo-25thavenue.png' },
  { name: 'B360 Limited', image: './assets/logo-b360.png' },
  { name: 'RaySoko Art', image: './assets/logo-raysoko.png' },
  { name: 'Conquest Property', image: './assets/logo-conquest.png' },
  { name: 'Pinpoint Finance', image: './assets/logo-pinpoint.png' },
];

function TrustedBy() {
  return (
    <section className="relative z-10 py-16 overflow-hidden border-y border-white/[0.06]" style={{ background: '#0a0a0a' }}>
      <div className="container-content mb-10">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-white/80 text-center">
          Trusted by forward-thinking brands
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 lg:mx-12 flex-shrink-0"
            >
              <img
                src={client.image}
                alt={client.name}
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                style={{ maxWidth: '180px', filter: 'brightness(1.3) contrast(1.05)' }}
              />
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
    image: './assets/service-web.jpg',
    title: 'Web Development',
    desc: 'Custom websites and web applications built with modern technologies that scale with your business.',
  },
  {
    image: './assets/service-mobile.jpg',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform iOS and Android apps designed for engagement and performance.',
  },
  {
    image: './assets/service-chatbot.jpg',
    title: 'AI Solutions',
    desc: 'Intelligent chatbots, voice agents, and automation that transform how you interact with customers.',
  },
  {
    image: './assets/service-crm.jpg',
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
              <div className="bg-matte-card rounded-card p-12 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-400 group border border-white/[0.10]">
                <div className="w-36 h-20 rounded-xl overflow-hidden mb-6" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.1))' }}>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
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
    name: 'Conquest Property',
    category: 'Property Development',
    desc: 'UK land acquisition, development finance, and property investment platform connecting landowners with investors.',
    image: './assets/portfolio-conquest.jpg',
    link: 'https://conquest-property.co.uk/',
  },
  {
    name: 'Pinpoint Finance',
    category: 'Finance & Compliance',
    desc: 'Professional accounting, financial management and compliance services for charities and non-profits across England and Wales.',
    image: './assets/portfolio-pinpoint.jpg',
    link: 'https://nexlevelabc-netizen.github.io/pinpoint/',
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

        <div className="space-y-16">
          {featuredWork.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.2}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col lg:flex-row items-stretch rounded-card overflow-hidden group border border-white/[0.10] hover:border-white/[0.18] transition-all duration-400 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image — left side, fully visible */}
                <div className="lg:w-3/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                  />
                </div>
                {/* Text — right side, clean no overlay */}
                <div className="lg:w-2/5 flex flex-col justify-center p-10 lg:p-14 bg-matte-card">
                  <span className="inline-block self-start px-4 py-1.5 rounded-pill bg-white/[0.08] text-[#818cf8] font-body text-xs font-medium mb-5 border border-white/[0.08]">
                    {project.category}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl text-white mb-4">{project.name}</h3>
                  <p className="font-body text-base text-white/80 leading-relaxed mb-8">{project.desc}</p>
                  <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#818cf8] group-hover:gap-3 transition-all duration-300">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14">
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

/* ========== WHY GENFEEL ========== */
const values = [
  {
    image: './assets/why-human-centered.jpg',
    title: 'Human Centered Design',
    desc: 'Every solution starts with understanding your users. We design experiences that feel natural and intuitive.',
  },
  {
    image: './assets/why-rapid-delivery.jpg',
    title: 'Rapid Delivery',
    desc: 'Our streamlined process means faster time-to-market without compromising on quality or attention to detail.',
  },
  {
    image: './assets/why-enterprise.jpg',
    title: 'Enterprise Grade Quality',
    desc: 'From startups to established businesses, we build with security, scalability, and performance in mind.',
  },
  {
    image: './assets/why-ongoing.jpg',
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
              <div className="bg-matte-card rounded-card p-10 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-400 border border-white/[0.10]">
                <div className="w-36 h-20 rounded-xl overflow-hidden mb-4" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.1))' }}>
                  <img src={value.image} alt={value.title} className="w-full h-full object-cover" />
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
      <WhyGenfeel />
      <CTASection />
    </main>
  );
}
