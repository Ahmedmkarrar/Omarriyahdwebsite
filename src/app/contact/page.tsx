"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, ArrowRight, User, Send, CheckCircle } from "lucide-react";
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
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "lead-capture",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "New Lead from Omar Riyad Website",
        }).toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

      {/* Lead Capture Form Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Form */}
            <AnimatedSection direction="left">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Get Started
              </span>
              <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Request a Consultation
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8" />
              <p className="text-gray-600 mb-8">
                Fill out the form below and Omar will personally reach out to discuss
                your real estate needs.
              </p>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-sm p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl text-navy mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your information has been received. Omar will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  name="lead-capture"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="lead-capture" />
                  <input type="hidden" name="subject" value="New Lead from Omar Riyad Website" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 bg-white"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(805) 555-1234"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 bg-white"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full btn-luxury-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-2">
                      {formStatus === "submitting" ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Request
                        </>
                      )}
                    </span>
                  </button>

                  {formStatus === "error" && (
                    <p className="text-red-500 text-sm text-center">
                      Something went wrong. Please try again or call Omar directly.
                    </p>
                  )}
                </form>
              )}
            </AnimatedSection>

            {/* Right Column - Contact Methods */}
            <AnimatedSection direction="right" delay={0.2}>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Or Reach Out Directly
              </span>
              <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Contact Information
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8" />

              <div className="space-y-4 mb-10">
                {contactMethods.map((method) => (
                  method.href ? (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:border-gold/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                        <method.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          {method.title}
                        </p>
                        <p className="text-navy font-medium">{method.value}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={method.title}
                      className="flex items-center gap-4 p-4 bg-white rounded-sm border border-gray-100"
                    >
                      <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          {method.title}
                        </p>
                        <p className="text-navy font-medium">{method.value}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-navy/5 rounded-sm p-6">
                <p className="text-gray-600 text-sm mb-4">Follow Omar on Social Media</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                      aria-label={`Follow Omar on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Work With Omar Section */}
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
                Personal Service
              </span>
              <h2 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Why Work With Omar?
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8 mx-auto" />

              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  When you reach out to Omar, you&apos;re not getting a call center or an
                  assistant—you&apos;re connecting directly with a dedicated real estate
                  professional who treats every client like family.
                </p>
                <p>
                  With over $100 million in transactions and 100+ properties sold,
                  Omar brings unparalleled experience to every conversation. Your
                  real estate journey deserves nothing less than exceptional service.
                </p>
              </div>

              {/* License Info */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  DRE License #02052562 | Revel Real Estate
                </p>
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
