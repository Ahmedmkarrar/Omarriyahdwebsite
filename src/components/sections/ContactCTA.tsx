"use client";

import { Phone, Mail, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { AnimatedSection } from "@/components/ui/custom/AnimatedSection";

const socialLinks = [
  { name: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@omar_realtor" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/omar-riyad-9a78b520b/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Teamomarsold/" },
];

export function ContactCTA() {
  return (
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
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Get in Touch
            </span>
            <h2 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to Find Your Dream Property?
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8 mx-auto" />
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Contact Omar directly to discuss your real estate goals. Whether you&apos;re
              buying, selling, or investing, personalized guidance awaits.
            </p>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <a
                href="tel:+18052683615"
                className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm text-white/80 hover:text-gold hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Call Direct</p>
                  <p className="text-xl font-medium">805.268.3615</p>
                </div>
              </a>

              <a
                href="mailto:omar@revelrealestate.com"
                className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm text-white/80 hover:text-gold hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-medium">omar@revelrealestate.com</p>
                </div>
              </a>
            </div>

            {/* Call Omar Button */}
            <a href="tel:+18052683615" className="btn-luxury-primary inline-flex mb-10">
              <span className="flex items-center gap-2">
                Call Omar Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-white/40 text-sm mr-2">Follow Omar:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  aria-label={`Follow Omar on ${social.name}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
