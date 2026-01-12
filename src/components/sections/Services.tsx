"use client";

import { motion } from "framer-motion";
import { Home, Building2, Key, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/custom/AnimatedSection";

const services = [
  {
    icon: Home,
    title: "Luxury Residential Sales",
    description:
      "Expert representation for buying and selling high-end properties in California's most sought-after neighborhoods. From historic estates to modern architectural masterpieces.",
    features: ["Montecito Estates", "Beverly Hills Mansions", "Coastal Properties", "New Construction"],
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description:
      "Strategic guidance for commercial investments, boutique hotels, and high-yield portfolios. Comprehensive analysis and negotiation for maximum returns.",
    features: ["Boutique Hotels", "Office Buildings", "Retail Spaces", "Mixed-Use Development"],
  },
  {
    icon: Key,
    title: "Off-Market Opportunities",
    description:
      "Exclusive access to private listings and off-market properties not available to the public. Discretion and privacy for discerning clients.",
    features: ["Private Listings", "Pre-Market Access", "Confidential Sales", "Exclusive Network"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Data-driven market analysis and investment strategies for portfolio growth. Identifying opportunities that align with your financial objectives.",
    features: ["Market Analysis", "Portfolio Strategy", "ROI Optimization", "Risk Assessment"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
            What I Offer
          </span>
          <h2 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Comprehensive Real Estate Solutions
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-white/60 text-lg">
            From luxury residential to commercial investments, I provide tailored solutions
            that meet the unique needs of discerning clients in California&apos;s premier markets.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div className="card-glass p-8 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl text-white mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/50"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-gold/30 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
