"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/custom/AnimatedSection";

export function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              {/* Gold frame decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-sm" />

              {/* Main image container */}
              <div className="relative image-frame-gold">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/omarrealtor.avif"
                    alt="Omar Riyad - Elite Real Estate Advisor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-sm shadow-luxury-lg"
              >
                <div className="text-center">
                  <span className="block text-3xl font-light text-navy" style={{ fontFamily: "var(--font-serif)" }}>
                    15
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-gold">
                    Years of Excellence
                  </span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content Column */}
          <div className="lg:pl-8">
            <AnimatedSection>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
                About Omar
              </span>
              <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Your Trusted Advisor in Luxury Real Estate
              </h2>
              <div className="section-divider mb-8 mx-0" />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
                <p>
                  With over a decade of experience navigating California&apos;s most
                  prestigious real estate markets, I bring an unparalleled understanding
                  of what discerning buyers and sellers truly need. My approach combines
                  deep market expertise with a genuine commitment to exceptional service.
                </p>
                <p>
                  Specializing in Montecito, Beverly Hills, and the Central Coast, I&apos;ve
                  built my reputation on discretion, integrity, and results. Whether
                  you&apos;re seeking a waterfront estate, a commercial investment, or
                  an exclusive off-market opportunity, I provide the personalized
                  guidance that transforms your vision into reality.
                </p>
                <p>
                  As your dedicated advisor, I leverage an extensive network of
                  industry connections, cutting-edge marketing strategies, and
                  tireless advocacy to ensure every transaction exceeds expectations.
                  Your success is my priority—and my track record speaks for itself.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.4}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-navy font-medium hover:text-gold transition-colors group"
              >
                <span className="underline-gold">Learn More About Omar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
