"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { AnimatedSection } from "@/components/ui/custom/AnimatedSection";

const socialLinks = [
  { name: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@omar_realtor" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/omar-riyad-9a78b520b/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Teamomarsold/" },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Direct",
    value: "805.268.3615",
    href: "tel:+18052683615",
    description: "Available 7 days a week",
  },
  {
    icon: Mail,
    title: "Email",
    value: "omar@revelrealestate.com",
    href: "mailto:omar@revelrealestate.com",
    description: "Response within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Revel Real Estate",
    href: "https://maps.google.com",
    description: "Santa Barbara, California",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Mon - Sun",
    href: null,
    description: "9:00 AM - 8:00 PM PST",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Luxury real estate background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        </div>

        <div className="container-luxury relative z-10 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Get in Touch
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Contact Omar
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Ready to find your dream property or discuss your real estate goals?
              Let&apos;s start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Reach Out
            </span>
            <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Ways to Connect
            </h2>
            <div className="section-divider mx-auto" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 0.1}>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block card-luxury p-8 text-center h-full hover:border-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <method.icon className="w-7 h-7 text-gold" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      {method.title}
                    </p>
                    <p className="text-xl text-navy font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </a>
                ) : (
                  <div className="card-luxury p-8 text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center">
                      <method.icon className="w-7 h-7 text-gold" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      {method.title}
                    </p>
                    <p className="text-xl text-navy font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* Main CTA */}
          <AnimatedSection className="text-center">
            <a href="tel:+18052683615" className="btn-luxury-primary inline-flex">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Omar Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Message Section */}
      <section className="section-padding bg-navy relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%),
                               radial-gradient(ellipse at 70% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Message */}
            <AnimatedSection direction="left">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Personal Service
              </span>
              <h2 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Why Work With Omar?
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8" />

              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  When you reach out to Omar, you&apos;re not getting a call center or an
                  assistant—you&apos;re connecting directly with a dedicated real estate
                  professional who treats every client like family.
                </p>
                <p>
                  Whether you&apos;re a first-time buyer, a seasoned investor, or looking
                  to sell your luxury property, Omar provides the personalized attention
                  and market expertise that sets him apart.
                </p>
                <p>
                  With over $100 million in transactions and 100+ properties sold,
                  Omar brings unparalleled experience to every conversation. Your
                  real estate journey deserves nothing less than exceptional service.
                </p>
              </div>

              {/* License Info */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  DRE License #02052562 | Revel Real Estate
                </p>
              </div>
            </AnimatedSection>

            {/* Right Column - Social & Quick Contact */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-10">
                <h3 className="text-white text-2xl mb-8" style={{ fontFamily: "var(--font-serif)" }}>
                  Connect With Omar
                </h3>

                {/* Quick Contact */}
                <div className="space-y-4 mb-10">
                  <a
                    href="tel:+18052683615"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-sm text-white/80 hover:text-gold hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-lg font-medium">805.268.3615</p>
                    </div>
                  </a>

                  <a
                    href="mailto:omar@revelrealestate.com"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-sm text-white/80 hover:text-gold hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-lg font-medium">omar@revelrealestate.com</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-white/50 text-sm mb-4">Follow Omar on Social Media</p>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                        aria-label={`Follow Omar on ${social.name}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Service Areas
            </span>
            <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Serving California&apos;s Premier Markets
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Omar specializes in luxury real estate throughout Santa Barbara County,
              including Montecito, Hope Ranch, and the Central Coast. Serving clients
              from Beverly Hills to San Luis Obispo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="px-4 py-2 bg-white rounded-sm border border-gray-100">Montecito</span>
              <span className="px-4 py-2 bg-white rounded-sm border border-gray-100">Santa Barbara</span>
              <span className="px-4 py-2 bg-white rounded-sm border border-gray-100">Hope Ranch</span>
              <span className="px-4 py-2 bg-white rounded-sm border border-gray-100">Beverly Hills</span>
              <span className="px-4 py-2 bg-white rounded-sm border border-gray-100">Central Coast</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
