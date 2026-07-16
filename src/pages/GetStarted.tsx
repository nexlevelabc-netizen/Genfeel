import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const gradientAccent = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)';
const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

const services = ['Website Development', 'Mobile App', 'AI Chatbot', 'Voice Agent', 'CRM System', 'ERP Solution', 'Process Automation', 'AI Consulting'];
const budgetOptions = ['Under \u00a3500', '\u00a3500 - \u00a31,000', '\u00a31,000 - \u00a35,000', '\u00a35,000 - \u00a310,000', '\u00a310,000+'];
const timelineOptions = ['Less than 1 month', '1-2 months', '3-6 months', 'Flexible'];

export default function GetStarted() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ service: '', name: '', email: '', company: '', budget: '', timeline: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const canContinue = () => {
    switch (step) {
      case 1: return !!formData.service;
      case 2: return !!formData.name && !!formData.email;
      case 3: return !!formData.budget && !!formData.timeline;
      default: return true;
    }
  };

  const handleSubmit = () => setSubmitted(true);

  const progressDotStyle = (s: number) => ({
    background: s <= step ? gradientAccent : undefined,
    boxShadow: s <= step ? '0 0 15px rgba(99,102,241,0.4)' : undefined,
    borderColor: s <= step ? 'transparent' : 'rgba(255,255,255,0.1)',
  });

  const progressLineStyle = (s: number) => ({
    background: s < step ? gradientAccent : 'rgba(255,255,255,0.1)',
  });

  const selectCardClass = (selected: boolean) =>
    `p-6 rounded-subtle border text-left transition-all duration-200 ${
      selected
        ? 'border-[#6366f1] bg-[#6366f1]/[0.08]'
        : 'border-white/10 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/[0.03]'
    }`;

  const selectPillClass = (selected: boolean) =>
    `p-4 rounded-subtle border text-center font-body text-sm transition-all duration-200 ${
      selected
        ? 'border-[#6366f1] bg-[#6366f1]/[0.08] text-[#818cf8] font-medium'
        : 'border-white/10 text-white/80 hover:border-[#6366f1]/40'
    }`;

  return (
    <main className="relative z-10">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-ink">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
        <div className="container-content pt-24">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/70 mb-6">GET STARTED</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white max-w-4xl leading-tight">Your project begins here</h1>
          <p className="font-body text-lg text-white/80 max-w-xl mt-6">
            Book a free consultation and let's discuss how Genfeel can help transform your digital presence.
          </p>
        </div>
      </section>

      {/* Booking Flow */}
      <section className="bg-matte py-section">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              {/* Progress */}
              <div className="flex items-center justify-between mb-12 px-4">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-body text-sm font-semibold transition-all duration-300 border-2 ${s <= step ? 'text-white' : 'text-white/70 bg-matte'}`} style={progressDotStyle(s)}>
                      {s}
                    </div>
                    {s < 4 && <div className="w-16 sm:w-24 h-0.5 ml-2 transition-all duration-300" style={progressLineStyle(s)} />}
                  </div>
                ))}
              </div>

              <div className="bg-matte-card rounded-card p-8 sm:p-16 shadow-card border border-white/[0.06]">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8' }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className="font-display text-3xl text-white mb-4">You're all set!</h3>
                    <p className="font-body text-base text-white/80 max-w-md mx-auto leading-relaxed">
                      We'll be in touch within 24 hours to schedule your free consultation. Thank you for choosing Genfeel!
                    </p>
                    <Link to="/" className="inline-block mt-8 font-body text-base font-medium px-8 py-3 rounded-button text-white hover:shadow-glow transition-all duration-300" style={{ background: gradientAccent }}>
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    {step === 1 && (
                      <div>
                        <h3 className="font-display text-3xl text-white mb-2">What do you need help with?</h3>
                        <p className="font-body text-base text-white/70 mb-8">Select the service that best matches your needs.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <button key={service} onClick={() => setFormData({ ...formData, service })} className={selectCardClass(formData.service === service)}>
                              <p className="font-body text-[15px] font-semibold text-white">{service}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h3 className="font-display text-3xl text-white mb-2">Tell us about yourself</h3>
                        <p className="font-body text-base text-white/70 mb-8">We'd love to know who we're working with.</p>
                        <div className="space-y-5">
                          <div>
                            <label className="block font-body text-sm text-white/70 mb-2">Full Name *</label>
                            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full h-[52px] px-4 bg-matte-light border border-white/10 rounded-subtle font-body text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300" placeholder="John Smith" />
                          </div>
                          <div>
                            <label className="block font-body text-sm text-white/70 mb-2">Email *</label>
                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full h-[52px] px-4 bg-matte-light border border-white/10 rounded-subtle font-body text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300" placeholder="john@example.com" />
                          </div>
                          <div>
                            <label className="block font-body text-sm text-white/70 mb-2">Company (optional)</label>
                            <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full h-[52px] px-4 bg-matte-light border border-white/10 rounded-subtle font-body text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300" placeholder="Your company name" />
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h3 className="font-display text-3xl text-white mb-2">Tell us about your project</h3>
                        <p className="font-body text-base text-white/70 mb-8">Help us understand your vision and constraints.</p>
                        <div className="space-y-5">
                          <div>
                            <label className="block font-body text-sm text-white/70 mb-2">Budget Range *</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {budgetOptions.map((opt) => (
                                <button key={opt} onClick={() => setFormData({ ...formData, budget: opt })} className={selectPillClass(formData.budget === opt)}>{opt}</button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block font-body text-sm text-white/70 mb-2">Timeline *</label>
                            <div className="grid grid-cols-2 gap-3">
                              {timelineOptions.map((opt) => (
                                <button key={opt} onClick={() => setFormData({ ...formData, timeline: opt })} className={selectPillClass(formData.timeline === opt)}>{opt}</button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block font-body text-sm text-white/70 mb-2">Project Description</label>
                            <textarea rows={4} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 bg-matte-light border border-white/10 rounded-subtle font-body text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#6366f1] focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 resize-vertical" placeholder="Tell us about your goals, challenges, and what success looks like..." />
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <h3 className="font-display text-3xl text-white mb-2">Review your submission</h3>
                        <p className="font-body text-base text-white/70 mb-8">Here's a summary of what you've told us.</p>
                        <div className="bg-matte-light rounded-card p-8 space-y-4 border border-white/[0.06]">
                          <div className="flex justify-between py-3 border-b border-white/5"><span className="font-body text-sm text-white/70">Service</span><span className="font-body text-sm font-medium text-white">{formData.service}</span></div>
                          <div className="flex justify-between py-3 border-b border-white/5"><span className="font-body text-sm text-white/70">Name</span><span className="font-body text-sm font-medium text-white">{formData.name}</span></div>
                          <div className="flex justify-between py-3 border-b border-white/5"><span className="font-body text-sm text-white/70">Email</span><span className="font-body text-sm font-medium text-white">{formData.email}</span></div>
                          {formData.company && <div className="flex justify-between py-3 border-b border-white/5"><span className="font-body text-sm text-white/70">Company</span><span className="font-body text-sm font-medium text-white">{formData.company}</span></div>}
                          <div className="flex justify-between py-3 border-b border-white/5"><span className="font-body text-sm text-white/70">Budget</span><span className="font-body text-sm font-medium text-white">{formData.budget}</span></div>
                          <div className="flex justify-between py-3 border-b border-white/5"><span className="font-body text-sm text-white/70">Timeline</span><span className="font-body text-sm font-medium text-white">{formData.timeline}</span></div>
                          {formData.description && <div className="py-3"><span className="font-body text-sm text-white/70 block mb-2">Description</span><span className="font-body text-sm text-white">{formData.description}</span></div>}
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between mt-10">
                      {step > 1 ? <button onClick={() => setStep(step - 1)} className="font-body text-sm text-white/70 hover:text-white transition-colors">Back</button> : <div />}
                      {step < 4 ? (
                        <button onClick={() => canContinue() && setStep(step + 1)} disabled={!canContinue()} className={`font-body text-base font-medium px-8 py-3 rounded-button transition-all duration-300 ${canContinue() ? 'text-white hover:shadow-glow' : 'bg-white/10 text-white/50 cursor-not-allowed'}`} style={canContinue() ? { background: gradientAccent } : {}}>Continue</button>
                      ) : (
                        <button onClick={handleSubmit} className="font-body text-base font-medium px-8 py-3 rounded-button text-white hover:shadow-glow transition-all duration-300" style={{ background: gradientAccent }}>Book Consultation</button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
