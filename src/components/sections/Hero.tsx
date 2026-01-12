"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder - Using gradient for now */}
      <div className="absolute inset-0">
        {/* Luxury gradient background as video placeholder */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, #0A1628 0%, #1a2942 50%, #0A1628 100%)
            `,
          }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)
            `,
          }}
        />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-gold/80 border border-gold/30 rounded-sm">
              Elite California Real Estate
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Omar Riyad
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-white/80 font-light mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Elite Real Estate Advisor | California&apos;s Luxury Markets
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gold/90 mb-12"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Specializing in Montecito, Beverly Hills & Central Coast Properties
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:+18052683615" className="btn-luxury-primary group">
              <span className="flex items-center gap-2">
                Call Omar Now
              </span>
            </a>
            <Link
              href="/properties"
              className="btn-luxury-secondary group"
            >
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                View Exclusive Listings
              </span>
            </Link>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-gold">✦</span>
              <span>7 Years of Excellence</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors cursor-pointer z-10"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase">Discover More</span>
          <ChevronDown className="w-6 h-6 scroll-indicator" />
        </div>
      </motion.button>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-gold/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-gold/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-gold/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-gold/20" />
    </section>
  );
}
