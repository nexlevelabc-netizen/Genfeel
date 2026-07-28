import ScrollReveal from '@/components/ScrollReveal';

const borderGradient = 'linear-gradient(90deg, transparent, #6366f1, #ec4899, #06b6d4, transparent)';

function PrivacyHero() {
  return (
    <section className="relative z-10 min-h-[40vh] flex items-center bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content pt-24">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/75 mb-6">
          LEGAL
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-[96px] font-medium text-white max-w-4xl leading-tight">
          Privacy Policy
        </h1>
        <p className="font-body text-lg text-white/80 mt-6">
          Last updated: July 2025
        </p>
      </div>
    </section>
  );
}

function PrivacyContent() {
  return (
    <section className="relative z-10 bg-matte py-section">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: borderGradient }} />
      <div className="container-content max-w-3xl">
        <ScrollReveal>
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">1. Introduction</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Genfeel (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">2. Information We Collect</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="font-body text-[17px] text-white/80 leading-relaxed list-disc list-inside space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided when you contact us or request our services.</li>
                <li><strong>Project Information:</strong> Business requirements, technical specifications, and other details necessary to deliver our services.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyse website traffic.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">3. How We Use Your Information</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="font-body text-[17px] text-white/80 leading-relaxed list-disc list-inside space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Communicate with you about your project or enquiry</li>
                <li>Improve our website and services</li>
                <li>Send promotional communications (you may opt out at any time)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">4. Data Sharing & Disclosure</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">5. Data Security</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">6. Data Retention</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Project-related data is retained for the duration of the engagement plus 2 years.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">7. Your Rights</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed mb-3">
                Under UK data protection law, you have the right to:
              </p>
              <ul className="font-body text-[17px] text-white/80 leading-relaxed list-disc list-inside space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">8. Third-Party Links</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">9. Changes to This Policy</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-4">10. Contact Us</h2>
              <p className="font-body text-[17px] text-white/80 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at hello@genfeel.co.uk or call +44 7383 027802.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Privacy() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
    </main>
  );
}
