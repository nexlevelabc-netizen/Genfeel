import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const gradientAccent = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)';
const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

/* ========== HERO ========== */
function ServicesHero() {
  return (
    <section className="relative z-10 min-h-[60vh] flex items-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content pt-24">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/70 mb-6">
          OUR SERVICES
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white max-w-4xl leading-tight">
          Everything you need to grow digital
        </h1>
        <p className="font-body text-lg text-white/80 max-w-xl mt-6">
          From websites to AI solutions, we provide end to end technology services that scale with your ambitions.
        </p>
      </div>
    </section>
  );
}

/* ========== SERVICES GRID ========== */
const allServices = [
  { image: './assets/service-web.jpg', title: 'Website Development', desc: 'Custom websites built with modern frameworks that load fast, rank well, and convert visitors into customers.', features: ['Responsive design', 'SEO optimization', 'CMS integration', 'Performance tuning'], price: 'From \u00a3299' },
  { image: './assets/service-mobile.jpg', title: 'Mobile Applications', desc: 'Native and cross platform apps for iOS and Android that deliver seamless user experiences on every device.', features: ['Native performance', 'Push notifications', 'Offline support', 'App store optimization'], price: 'From \u00a3499' },
  { image: './assets/service-chatbot.jpg', title: 'AI Chatbots', desc: 'Intelligent conversational agents that engage your customers 24/7 with natural, human-like interactions.', features: ['Natural language processing', 'Multi-platform integration', 'Custom training', 'Analytics dashboard'], price: 'From \u00a3199' },
  { image: './assets/service-voice.jpg', title: 'Voice Agent AI', desc: 'Voice powered assistants that handle calls, bookings, and customer queries with natural speech synthesis.', features: ['Speech recognition', 'Voice synthesis', 'Call handling', 'CRM integration'], price: 'From \u00a3249' },
  { image: './assets/service-crm.jpg', title: 'CRM Systems', desc: 'Custom customer relationship management tools that streamline sales, marketing, and support workflows.', features: ['Contact management', 'Pipeline tracking', 'Automated workflows', 'Reporting & analytics'], price: 'From \u00a3599' },
  { image: './assets/service-erp.jpg', title: 'ERP Solutions', desc: 'Enterprise resource planning systems that integrate finance, HR, inventory, and operations in one platform.', features: ['Financial management', 'Inventory tracking', 'HR integration', 'Real-time reporting'], price: 'From \u00a3999' },
  { image: './assets/service-automation.jpg', title: 'Process Automation', desc: 'Workflow automation that eliminates repetitive tasks and frees your team to focus on what matters.', features: ['Workflow design', 'Integration APIs', 'Error handling', 'Performance monitoring'], price: 'From \u00a3399' },
  { image: './assets/service-ai-consulting.jpg', title: 'AI Consulting', desc: 'Strategic guidance on implementing AI and automation technologies to drive business growth and efficiency.', features: ['AI readiness assessment', 'Strategy development', 'Vendor selection', 'Implementation roadmap'], price: 'From \u00a3499' },
];

function ServicesGrid() {
  return (
    <section className="relative z-10 bg-matte py-section">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="bg-matte-card rounded-card p-14 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-400 h-full border border-white/[0.10]">
                <div className="w-40 h-24 rounded-xl flex items-center justify-center mb-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.1))' }}>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-[32px] font-medium text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-[17px] text-white/80 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-[15px] text-white/80">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(99,102,241,0.12)' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm font-medium" style={{ color: '#818cf8' }}>{service.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== PROCESS ========== */
const steps = [
  { num: '01', title: 'Discovery', desc: 'We understand your goals, users, and constraints through in depth research and workshops.' },
  { num: '02', title: 'Design', desc: 'We create wireframes, prototypes, and visual designs that align with your brand and user needs.' },
  { num: '03', title: 'Develop', desc: 'We build your solution using modern technologies with regular check ins and iterative feedback.' },
  { num: '04', title: 'Deliver', desc: 'We launch, monitor, and optimize providing ongoing support to ensure long-term success.' },
];

function ProcessTimeline() {
  return (
    <section className="relative z-10 bg-matte-light py-section">
      <div className="container-content">
        <ScrollReveal>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: '#818cf8' }}>
            OUR PROCESS
          </p>
          <h2 className="font-display text-4xl lg:text-[64px] font-medium text-white mb-20 leading-tight">
            How we work
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5" style={{ background: 'linear-gradient(90deg, #6366f1, #ec4899)' }} />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.2}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center font-body text-lg font-semibold mx-auto relative z-10"
                    style={{ background: gradientAccent, boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
                  >
                    {step.num}
                  </div>
                  <h4 className="font-display text-2xl text-white mt-6 mb-2">{step.title}</h4>
                  <p className="font-body text-[15px] text-white/80 max-w-[220px] mx-auto leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== CTA ========== */
function ServicesCTA() {
  return (
    <section className="relative z-10 bg-ink py-section">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content">
        <ScrollReveal>
          <h2 className="font-display text-4xl lg:text-6xl font-medium text-white max-w-2xl leading-tight">
            Ready to start your project?
          </h2>
          <p className="font-body text-lg text-white/80 mt-6 max-w-lg">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <Link
            to="/get-started"
            className="inline-block mt-10 font-body text-base font-medium px-10 py-4 rounded-button text-white hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: gradientAccent }}
          >
            Get Started
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ProcessTimeline />
      <ServicesCTA />
    </main>
  );
}
