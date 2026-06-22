import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const accentColor = '#6366f1';
const gradientAccent = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)';
const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

/* ========== HERO ========== */
function ContactHero() {
  return (
    <section className="relative z-10 min-h-[50vh] flex items-center justify-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="text-center px-6 max-w-4xl mx-auto pt-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white-muted mb-6">
          CONTACT
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white leading-tight">
          Let's start a conversation
        </h1>
      </div>
    </section>
  );
}

/* ========== CONTACT FORM ========== */
function ContactFormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full h-[52px] px-4 bg-cream border border-ink/10 rounded-subtle font-body text-base text-ink placeholder:text-ink-muted focus:outline-none transition-all duration-300 focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]";
  const textareaClass = "w-full px-4 py-3 bg-cream border border-ink/10 rounded-subtle font-body text-base text-ink placeholder:text-ink-muted focus:outline-none transition-all duration-300 focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] resize-vertical";

  return (
    <section className="relative z-10 bg-cream py-section">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h3 className="font-display text-4xl font-medium text-ink mb-10">Get in touch</h3>
              <div className="space-y-8">
                <div>
                  <p className="font-body text-sm text-ink-muted mb-1">Email</p>
                  <a href="mailto:hello@genfeel.co.uk" className="font-body text-[17px] hover:underline" style={{ color: accentColor }}>hello@genfeel.co.uk</a>
                </div>
                <div>
                  <p className="font-body text-sm text-ink-muted mb-1">Phone</p>
                  <a href="tel:+447383027802" className="font-body text-[17px] text-ink-light">+44 7383 027802</a>
                </div>
                <div>
                  <p className="font-body text-sm text-ink-muted mb-1">Location</p>
                  <p className="font-body text-[17px] text-ink-light">London, United Kingdom</p>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="w-11 h-11 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:border-[#6366f1] hover:text-[#6366f1] hover:bg-[#6366f1]/5 transition-all duration-300" aria-label={social}>
                    <span className="text-xs font-body font-medium">{social[0]}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2}>
              {submitted ? (
                <div className="bg-white rounded-card p-12 shadow-card text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(99,102,241,0.1)', color: accentColor }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h4 className="font-display text-2xl text-ink mb-3">Message sent!</h4>
                  <p className="font-body text-base text-ink-light">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-card p-12 shadow-card">
                  <div className="space-y-5">
                    <div>
                      <label className="block font-body text-sm text-ink-muted mb-2">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-ink-muted mb-2">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-ink-muted mb-2">Service</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass + " appearance-none"}>
                        <option value="">Select a service</option>
                        <option value="website">Website Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="chatbot">AI Chatbot</option>
                        <option value="voice">Voice Agent</option>
                        <option value="crm">CRM System</option>
                        <option value="erp">ERP Solution</option>
                        <option value="automation">Process Automation</option>
                        <option value="consulting">AI Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm text-ink-muted mb-2">Message</label>
                      <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={textareaClass} placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="w-full h-[52px] rounded-button font-body text-base font-medium text-white hover:shadow-glow transition-all duration-300" style={{ background: gradientAccent }}>
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== CHATBOT CTA ========== */
function ChatbotCTA() {
  return (
    <section className="relative z-10 bg-cream-dark py-20">
      <div className="container-content text-center">
        <ScrollReveal>
          <h3 className="font-display text-4xl font-medium text-ink">Prefer to chat?</h3>
          <p className="font-body text-[17px] text-ink-light max-w-lg mx-auto mt-4 leading-relaxed">
            Our AI assistant is available 24/7 to answer questions and help you book a consultation.
          </p>
          <p className="font-body text-sm mt-6" style={{ color: accentColor }}>Click the chat icon in the bottom right corner</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactFormSection />
      <ChatbotCTA />
    </main>
  );
}
