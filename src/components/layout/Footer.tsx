"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  ArrowUp,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Omar", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

const propertyTypes = [
  { name: "Luxury Estates", href: "/properties?type=residential" },
  { name: "Commercial Properties", href: "/properties?type=commercial" },
  { name: "Off-Market Deals", href: "/properties?status=off-market" },
  { name: "Waterfront Homes", href: "/properties?feature=waterfront" },
];

const socialLinks = [
  { name: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@omar_realtor" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/omar-riyad-9a78b520b/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Teamomarsold/" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <span
                className="text-3xl font-light tracking-wide text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Omar Riyad
              </span>
              <span className="block text-xs tracking-[0.3em] uppercase text-gold/80 font-medium mt-1">
                Luxury Real Estate
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Elite real estate advisor specializing in California&apos;s most
              prestigious luxury markets. Over $100M in sales with personalized
              service that exceeds expectations.
            </p>
            <div className="flex items-center gap-4">
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
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-lg font-medium text-white mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Property Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-lg font-medium text-white mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Properties
            </h4>
            <ul className="space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4
              className="text-lg font-medium text-white mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18052683615"
                  className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors duration-300 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-gold" />
                  <span className="text-sm">805.268.3615</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:omar@revelrealestate.com"
                  className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-gold" />
                  <span className="text-sm">omar@revelrealestate.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span className="text-sm">
                    Santa Barbara, CA
                    <br />
                    Serving Montecito, Beverly Hills
                    <br />& Central Coast
                  </span>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="tel:+18052683615"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gold/10 border border-gold/30 rounded-sm text-gold text-sm font-medium hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Call Omar Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-white/40">
              <span>
                &copy; {currentYear} Omar Riyad. All Rights Reserved.
              </span>
              <span className="hidden md:inline">|</span>
              <span>DRE License #02052562</span>
              <span className="hidden md:inline">|</span>
              <a
                href="https://revelrealestate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Powered by Revel Real Estate
              </a>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-white/40 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/40 hover:text-gold transition-colors"
              >
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
