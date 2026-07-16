import ScrollReveal from '@/components/ScrollReveal';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const gradientAccent = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)';
const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

/* ========== HERO ========== */
function PortfolioHero() {
  return (
    <section className="relative z-10 min-h-[50vh] flex items-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content pt-24">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/70 mb-6">
          PORTFOLIO
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white leading-tight">
          Work we're proud of
        </h1>
      </div>
    </section>
  );
}

/* ========== PROJECTS ========== */
const projects = [
  { name: '25th Avenue', category: 'Housing Platform', image: './assets/portfolio-25thavenue.jpg', link: 'https://www.25thavenue.org/' },
  { name: 'RaySoko Art', category: 'Creative Portfolio', image: './assets/portfolio-raysoko.jpg', link: 'https://nexlevelabc-netizen.github.io/RAYSOKOART/#/' },
  { name: 'MyFitting', category: 'Fashion Tech App', image: './assets/portfolio-myfitting.jpg', link: 'https://nexlevelabc-netizen.github.io/Myfitting/' },
  { name: 'B360 Limited', category: 'Business Services', image: './assets/portfolio-b360.jpg', link: 'https://www.b360ltd.com/' },
];

function PortfolioGrid() {
  return (
    <section className="relative z-10 bg-matte py-section">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.15} scale={0.95}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative rounded-card overflow-hidden group aspect-[4/3] border border-white/[0.06]">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/85 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-center">
                    <p className="font-body text-sm font-medium mb-2 text-[#ec4899]">{project.category}</p>
                    <h3 className="font-display text-[28px] text-white mb-4">{project.name}</h3>
                    <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#818cf8]">
                      View Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== RESULTS BAR ========== */
const metrics = [
  { value: 4, label: 'Live Projects' },
  { value: 15, suffix: '+', label: 'Technologies Used' },
  { value: 100, suffix: '%', label: 'Client Retention' },
  { value: 2, suffix: 'x', label: 'Average ROI for Clients' },
];

function ResultsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const statElements = section.querySelectorAll('.metric-number');
    statElements.forEach((el) => {
      const target = parseInt(el.getAttribute('data-value') || '0');
      gsap.fromTo(el, { innerText: 0 }, {
        innerText: target, duration: 2, ease: 'power2.out', snap: { innerText: 1 },
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      });
    });
    return () => { ScrollTrigger.getAll().forEach((t) => { if (t.trigger === section) t.kill(); }); };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-ink py-20">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="metric-number font-display text-5xl lg:text-[56px] font-medium" data-value={m.value} style={{ background: gradientAccent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                0{m.suffix || ''}
              </div>
              <p className="font-body text-sm text-white/75 mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== CTA ========== */
function PortfolioCTA() {
  return (
    <section className="relative z-10 bg-matte-light py-section">
      <div className="container-content">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-6xl font-medium text-white max-w-2xl leading-tight">
            Have a project in mind?
          </h2>
          <p className="font-body text-lg text-white/80 mt-6 max-w-lg">
            We'd love to add your project to our portfolio. Let's create something amazing together.
          </p>
          <a href="/get-started" className="inline-block mt-10 font-body text-base font-medium px-10 py-4 rounded-button text-white hover:shadow-glow transition-all duration-300" style={{ background: gradientAccent }}>
            Start Your Project
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioGrid />
      <ResultsBar />
      <PortfolioCTA />
    </main>
  );
}
