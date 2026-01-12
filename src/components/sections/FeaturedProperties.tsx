"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/custom/AnimatedSection";
import { properties, formatPrice, formatNumber, getStatusBadgeClass, getStatusLabel } from "@/data/properties";

export function FeaturedProperties() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-luxury">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <a
              href="https://revelrealestate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-[0.2em] uppercase text-gold mb-4 hover:text-gold/80 transition-colors"
            >
              Powered by Revel Real Estate
            </a>
            <h2 className="text-navy" style={{ fontFamily: "var(--font-serif)" }}>
              Exclusive Properties
            </h2>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300"
              aria-label="Previous properties"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300"
              aria-label="Next properties"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>

        {/* Properties Carousel */}
        <div className="relative -mx-6 md:-mx-12 lg:-mx-16">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-16 pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[340px] md:w-[400px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <Link href={`/properties/${property.id}`} className="group block">
                  <div className="card-luxury overflow-hidden">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden property-card-image">
                      <Image
                        src={property.images[0]}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 340px, 400px"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={getStatusBadgeClass(property.status)}>
                          {getStatusLabel(property.status)}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {property.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="badge-luxury">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Hover CTA */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="btn-luxury-primary text-sm py-3 px-6">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Price */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-2xl font-light text-navy"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {formatPrice(property.price)}
                        </span>
                        {property.daysOnMarket && property.daysOnMarket < 30 && (
                          <span className="text-xs text-gold font-medium">
                            Just Listed
                          </span>
                        )}
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-2 mb-4">
                        <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-800 font-medium">
                            {property.address}
                          </p>
                          <p className="text-sm text-gray-500">
                            {property.city}, {property.state}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 border-t border-gray-100">
                        {property.beds > 0 && (
                          <div className="flex items-center gap-2">
                            <Bed className="w-4 h-4 text-gold" />
                            <span>{property.beds} Beds</span>
                          </div>
                        )}
                        {property.baths > 0 && (
                          <div className="flex items-center gap-2">
                            <Bath className="w-4 h-4 text-gold" />
                            <span>{property.baths} Baths</span>
                          </div>
                        )}
                        {property.sqft > 0 && (
                          <div className="flex items-center gap-2">
                            <Maximize className="w-4 h-4 text-gold" />
                            <span>{formatNumber(property.sqft)} sqft</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-flex items-center gap-3 text-navy font-medium hover:text-gold transition-colors group"
          >
            <span className="underline-gold">View All Properties</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>

      {/* Custom scrollbar hide style */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
