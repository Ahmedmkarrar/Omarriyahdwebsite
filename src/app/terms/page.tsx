"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/custom/AnimatedSection";

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="container-luxury relative z-10 text-center pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Legal
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Terms of Service
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 md:p-12 rounded-sm shadow-luxury space-y-8">
                <div>
                  <p className="text-gray-600 text-sm mb-8">
                    Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using the website of Omar Riyad (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                    you agree to be bound by these Terms of Service. If you do not agree with any part
                    of these terms, you may not access the website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Services Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Omar Riyad provides real estate advisory services, including but not limited to
                    property buying and selling assistance, market analysis, property valuations,
                    and investment consulting. All services are subject to applicable California
                    real estate laws and regulations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Website Use
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You agree to use this website only for lawful purposes. You may not:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Use the website in any way that violates applicable laws or regulations</li>
                    <li>Attempt to gain unauthorized access to any part of the website</li>
                    <li>Use automated systems to access the website without permission</li>
                    <li>Transmit any harmful code, viruses, or malicious software</li>
                    <li>Copy, reproduce, or distribute content without authorization</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Property Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    While we strive to provide accurate property information, all listings,
                    descriptions, prices, and availability are subject to change without notice.
                    We do not guarantee the accuracy or completeness of any property information
                    displayed on this website. Buyers should independently verify all information
                    before making any purchasing decisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Intellectual Property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and
                    software, is the property of Omar Riyad or its content suppliers and is
                    protected by copyright and trademark laws. You may not reproduce, distribute,
                    or create derivative works without our express written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    No Professional Advice
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    The information on this website is provided for general informational purposes
                    only and does not constitute legal, financial, or professional advice. You should
                    consult with appropriate professionals before making any real estate decisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To the fullest extent permitted by law, Omar Riyad shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages, including
                    loss of profits, data, or other intangible losses, resulting from your use
                    of the website or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Indemnification
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to indemnify and hold harmless Omar Riyad, its affiliates, and their
                    respective officers, directors, employees, and agents from any claims, damages,
                    losses, liabilities, and expenses arising out of your use of the website or
                    violation of these Terms of Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Governing Law
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with
                    the laws of the State of California, without regard to its conflict of law
                    provisions. Any disputes arising under these terms shall be subject to the
                    exclusive jurisdiction of the courts located in Santa Barbara County, California.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Changes to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Any changes
                    will be effective immediately upon posting on this page. Your continued use of
                    the website after any changes constitutes your acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-6 bg-cream rounded-sm">
                    <p className="text-navy font-medium" style={{ fontFamily: "var(--font-serif)" }}>
                      Omar Riyad
                    </p>
                    <p className="text-gray-600 mt-2">
                      Email: <a href="mailto:omar@revelrealestate.com" className="text-gold hover:underline">omar@revelrealestate.com</a>
                    </p>
                    <p className="text-gray-600">
                      Phone: <a href="tel:+18052683615" className="text-gold hover:underline">805.268.3615</a>
                    </p>
                    <p className="text-gray-600">
                      Location: Santa Barbara, CA
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      DRE License #02052562
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
