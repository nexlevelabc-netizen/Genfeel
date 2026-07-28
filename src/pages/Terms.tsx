import ScrollReveal from '@/components/ScrollReveal';

const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

function TermsHero() {
  return (
    <section className="relative z-10 min-h-[40vh] flex items-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content pt-24">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/75 mb-6">
          LEGAL
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white max-w-4xl leading-tight">
          Terms of Service
        </h1>
        <p className="font-body text-lg text-white/80 mt-6">
          Last updated: July 2025
        </p>
      </div>
    </section>
  );
}

function TermsContent() {
  return (
    <section className="relative z-10 bg-matte py-section">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content max-w-3xl">
        <ScrollReveal>
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">1. Acceptance of Terms</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                By accessing and using the services of Genfeel (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">2. Services</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Genfeel provides digital solutions including but not limited to website development, mobile application development, AI chatbots, voice agent AI, CRM systems, ERP solutions, process automation, and AI consulting. The specific scope of services will be outlined in your individual project agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">3. Project Engagement</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                All projects begin with a consultation and formal proposal. Work commences upon signed agreement and initial payment. Project timelines, deliverables, and payment terms are specified in your individual service agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">4. Intellectual Property</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Upon full payment, ownership of custom code, designs, and deliverables created specifically for your project transfers to you. Genfeel retains the right to use non-confidential work samples for portfolio and marketing purposes unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">5. Payment Terms</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Payment terms are specified in your project agreement. Typically, projects require an initial deposit before work begins, with milestone payments throughout the project lifecycle. Final payment is due before project delivery.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">6. Confidentiality</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Genfeel agrees to keep all client information, business data, and proprietary materials confidential. We will not disclose any confidential information to third parties without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">7. Limitation of Liability</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Genfeel&apos;s liability is limited to the total amount paid for the specific project. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">8. Support & Maintenance</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Post-launch support terms are defined in your service agreement. Ongoing maintenance packages are available separately. Bug fixes for deliverables are covered for 30 days post-launch at no additional cost.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">9. Termination</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Either party may terminate the engagement with written notice. Upon termination, you are responsible for payment for all work completed up to the termination date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">10. Governing Law</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                These Terms of Service are governed by the laws of the United Kingdom. Any disputes will be resolved in accordance with UK law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">11. Contact</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                For questions about these Terms of Service, please contact us at hello@genfeel.co.uk.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Terms() {
  return (
    <main>
      <TermsHero />
      <TermsContent />
    </main>
  );
}
