import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const gradientAccent = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)';
const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

/* ========== HERO ========== */
function ContactHero() {
  return (
    <section className="relative z-10 min-h-[50vh] flex items-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content pt-24">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/70 mb-6">
          CONTACT
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white max-w-4xl leading-tight">
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

  const inputClass = "w-full h-[52px] px-4 bg-matte-input border border-white/[0.10] rounded-subtle font-body text-base text-white placeholder:text-white/50 focus:outline-none transition-all duration-300 focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]";
  const textareaClass = "w-full px-4 py-3 bg-matte-input border border-white/[0.10] rounded-subtle font-body text-base text-white placeholder:text-white/50 focus:outline-none transition-all duration-300 focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] resize-vertical";

  return (
    <section className="relative z-10 bg-matte py-section">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h3 className="font-display text-4xl font-medium text-white mb-10">Get in touch</h3>
              <div className="space-y-8">
                <div>
                  <p className="font-body text-sm text-white/70 mb-1">Email</p>
                  <a href="mailto:hello@genfeel.co.uk" className="font-body text-[17px] text-[#818cf8] hover:underline">hello@genfeel.co.uk</a>
                </div>
                <div>
                  <p className="font-body text-sm text-white/70 mb-1">Phone</p>
                  <a href="tel:+447383027802" className="font-body text-[17px] text-white/80">+44 7383 027802</a>
                </div>
                <div>
                  <p className="font-body text-sm text-white/70 mb-1">Location</p>
                  <p className="font-body text-[17px] text-white/80">London, United Kingdom</p>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                {/* LinkedIn */}
                <a href="#" className="w-11 h-11 rounded-full border border-white/[0.12] flex items-center justify-center text-white hover:border-[#6366f1] hover:text-[#818cf8] hover:bg-[#6366f1]/10 transition-all duration-300" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* Twitter/X */}
                <a href="#" className="w-11 h-11 rounded-full border border-white/[0.12] flex items-center justify-center text-white hover:border-[#6366f1] hover:text-[#818cf8] hover:bg-[#6366f1]/10 transition-all duration-300" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-11 h-11 rounded-full border border-white/[0.12] flex items-center justify-center text-white hover:border-[#6366f1] hover:text-[#818cf8] hover:bg-[#6366f1]/10 transition-all duration-300" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2}>
              {submitted ? (
                <div className="bg-matte-card rounded-card p-12 shadow-card text-center border border-white/[0.10]">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h4 className="font-display text-2xl text-white mb-3">Message sent!</h4>
                  <p className="font-body text-base text-white/80">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-matte-card rounded-card p-12 shadow-card border border-white/[0.10]">
                  <div className="space-y-5">
                    <div>
                      <label className="block font-body text-sm text-white/70 mb-2">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-white/70 mb-2">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-white/70 mb-2">Service</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass + " appearance-none"}>
                        <option value="" className="bg-matte-light text-white">Select a service</option>
                        <option value="website" className="bg-matte-light text-white">Website Development</option>
                        <option value="mobile" className="bg-matte-light text-white">Mobile App</option>
                        <option value="chatbot" className="bg-matte-light text-white">AI Chatbot</option>
                        <option value="voice" className="bg-matte-light text-white">Voice Agent</option>
                        <option value="crm" className="bg-matte-light text-white">CRM System</option>
                        <option value="erp" className="bg-matte-light text-white">ERP Solution</option>
                        <option value="automation" className="bg-matte-light text-white">Process Automation</option>
                        <option value="consulting" className="bg-matte-light text-white">AI Consulting</option>
                        <option value="other" className="bg-matte-light text-white">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm text-white/70 mb-2">Message</label>
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
    <section className="relative z-10 bg-matte-light py-20">
      <div className="container-content">
        <ScrollReveal>
          <h3 className="font-display text-4xl font-medium text-white">Prefer to chat?</h3>
          <p className="font-body text-[17px] text-white/80 max-w-lg mt-4 leading-relaxed">
            Our AI assistant is available 24/7 to answer questions and help you book a consultation.
          </p>
          <p className="font-body text-sm mt-6 text-[#818cf8]">Click the chat icon in the bottom right corner</p>
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
