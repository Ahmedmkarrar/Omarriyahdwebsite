"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/custom/AnimatedSection";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect,
              use, and protect your information.
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
                    Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Omar Riyad (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed
                    to protecting your personal information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website or use our
                    real estate services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Information We Collect
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may collect information about you in various ways, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      <strong>Personal Data:</strong> Name, email address, phone number, and mailing
                      address that you voluntarily provide when contacting us or filling out forms.
                    </li>
                    <li>
                      <strong>Property Preferences:</strong> Information about your real estate needs,
                      including property types, locations, and budget preferences.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Information about how you access and use our website,
                      including your IP address, browser type, pages visited, and time spent on our site.
                    </li>
                    <li>
                      <strong>Cookies:</strong> Small data files stored on your device to improve your
                      browsing experience and analyze website traffic.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide, maintain, and improve our real estate services</li>
                    <li>Respond to your inquiries and communicate with you about properties</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Analyze website usage to enhance user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Information Sharing
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may
                    share your information with trusted partners who assist us in operating our website
                    and conducting our business, provided they agree to keep your information confidential.
                    We may also disclose your information when required by law or to protect our rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate security measures to protect your personal information from
                    unauthorized access, alteration, disclosure, or destruction. However, no method of
                    transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Your Rights
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Access, update, or delete your personal information</li>
                    <li>Opt-out of marketing communications at any time</li>
                    <li>Request a copy of the data we hold about you</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Third-Party Links
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for
                    the privacy practices or content of these external sites. We encourage you to review
                    their privacy policies before providing any personal information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    California Privacy Rights
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you are a California resident, you have specific rights under the California
                    Consumer Privacy Act (CCPA), including the right to know what personal information
                    we collect, the right to delete your information, and the right to opt-out of the
                    sale of your information. To exercise these rights, please contact us using the
                    information below.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Changes to This Policy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on
                    this page with an updated &quot;Last Updated&quot; date. We encourage you to review this
                    policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about this Privacy Policy or our practices, please contact us:
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
