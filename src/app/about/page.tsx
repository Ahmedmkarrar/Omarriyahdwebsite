"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Lock,
  TrendingUp,
  Waves,
  Hotel,
  Award,
  GraduationCap,
  Handshake,
  ArrowRight,
  Download,
  CheckCircle,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/custom/AnimatedSection";

const timeline = [
  {
    year: "2014",
    title: "Entered Real Estate",
    description: "Began career in California real estate, focusing on residential properties.",
  },
  {
    year: "2016",
    title: "First Luxury Sale",
    description: "Closed first multi-million dollar transaction in Montecito.",
  },
  {
    year: "2018",
    title: "First $10M+ Sale",
    description: "Represented buyer in landmark $12M beachfront estate acquisition.",
  },
  {
    year: "2020",
    title: "Commercial Expansion",
    description: "Expanded into commercial real estate and investment properties.",
  },
  {
    year: "2022",
    title: "100+ Properties Sold",
    description: "Milestone of over 100 luxury properties successfully closed.",
  },
  {
    year: "2024",
    title: "$100M+ in Sales",
    description: "Surpassed $100 million in total transaction volume.",
  },
];

const expertise = [
  {
    icon: Home,
    title: "Luxury Residential",
    description: "High-end homes, estates, and waterfront properties in California's most prestigious neighborhoods.",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description: "Office buildings, retail spaces, and mixed-use developments for investors and businesses.",
  },
  {
    icon: Lock,
    title: "Off-Market Deals",
    description: "Exclusive access to private listings and properties not available on the public market.",
  },
  {
    icon: TrendingUp,
    title: "Investment Strategy",
    description: "Data-driven market analysis and portfolio strategies for wealth building.",
  },
  {
    icon: Waves,
    title: "Waterfront Properties",
    description: "Specialized knowledge of coastal regulations and oceanfront property transactions.",
  },
  {
    icon: Hotel,
    title: "Boutique Hotels",
    description: "Acquisition and disposition of hospitality assets and vacation rental portfolios.",
  },
];

const certifications = [
  "Certified Luxury Home Marketing Specialist (CLHMS)",
  "California Real Estate License #02052562",
  "National Association of Realtors Member",
  "Certified Commercial Investment Member (CCIM) - In Progress",
  "Graduate, Realtor Institute (GRI)",
  "Accredited Buyer's Representative (ABR)",
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional results in every transaction.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Building trust through honest, transparent communication.",
  },
  {
    icon: GraduationCap,
    title: "Expertise",
    description: "Continuous learning to stay ahead in a dynamic market.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
              About Omar
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Meet Omar Riyad
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Elite Real Estate Advisor specializing in California&apos;s most
              prestigious luxury markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="section-padding bg-cream">
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
                    />
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
                  The Story
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
                    My clients range from first-time luxury buyers to seasoned investors,
                    and each receives the same level of dedicated, white-glove service.
                  </p>
                  <p>
                    Real estate is more than a transaction—it&apos;s a life decision.
                    I&apos;m committed to making that journey seamless, informed, and
                    ultimately rewarding. Your success is my priority, and my track
                    record speaks for itself.
                  </p>
                </div>
              </AnimatedSection>

              {/* CTA */}
              <AnimatedSection delay={0.4}>
                <button
                  className="inline-flex items-center gap-3 text-navy font-medium hover:text-gold transition-colors group"
                  onClick={() => window.print()}
                >
                  <Download className="w-4 h-4" />
                  <span className="underline-gold">Download Bio (PDF)</span>
                </button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
              The Journey
            </span>
            <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Professional Timeline
            </h2>
            <div className="section-divider mx-auto" />
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 0.1}
                  className={`relative lg:flex lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <div className="bg-cream p-8 rounded-sm border border-gray-100 hover:border-gold/30 transition-all duration-300 hover:shadow-luxury">
                      <span className="text-gold text-sm font-medium tracking-wider">
                        {item.year}
                      </span>
                      <h3
                        className="text-xl text-navy mt-2 mb-3"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg hidden lg:block" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Specializations
            </span>
            <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Areas of Expertise
            </h2>
            <div className="section-divider mx-auto" />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-luxury p-8 h-full">
                  <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3
                    className="text-xl text-navy mb-3"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications & Values */}
      <section className="section-padding bg-navy relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="container-luxury relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <AnimatedSection direction="left">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Credentials
              </span>
              <h2 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Certifications & Awards
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8" />

              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{cert}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection direction="right" delay={0.2}>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Philosophy
              </span>
              <h2 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Core Values
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8" />

              <div className="space-y-8">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3
                        className="text-lg text-white mb-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {value.title}
                      </h3>
                      <p className="text-white/60">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Let&apos;s Connect
            </span>
            <h2 className="text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to Work Together?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Whether you&apos;re buying your dream home, selling a luxury property,
              or exploring investment opportunities, I&apos;m here to guide you
              every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18052683615" className="btn-luxury-primary">
                Call Omar Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link href="/properties" className="btn-luxury-outline">
                View Properties
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
