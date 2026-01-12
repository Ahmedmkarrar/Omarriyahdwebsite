"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Bed,
  Bath,
  Square,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  Mail,
  Share2,
  Heart,
  Check,
} from "lucide-react";
import {
  properties,
  formatPrice,
  formatNumber,
  getStatusLabel,
} from "@/data/properties";

export default function PropertyDetailPage() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  const statusColors = {
    active: "bg-green-500",
    pending: "bg-yellow-500",
    sold: "bg-gray-500",
    "off-market": "bg-gold",
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Link
          href="/properties"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-sm shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Properties</span>
        </Link>
      </div>

      {/* Image Gallery Section */}
      <section className="pt-20">
        <div className="relative">
          {/* Main Image */}
          <div
            className="relative h-[50vh] md:h-[70vh] cursor-pointer"
            onClick={() => setShowLightbox(true)}
          >
            <Image
              src={property.images[currentImageIndex]}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

            {/* Image Navigation */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-navy" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-navy" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-navy">
                {currentImageIndex + 1} / {property.images.length}
              </span>
            </div>

            {/* Status Badge */}
            <div className="absolute top-6 left-6">
              <span
                className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-sm ${
                  statusColors[property.status]
                }`}
              >
                {getStatusLabel(property.status)}
              </span>
            </div>

            {/* Featured Badge */}
            {property.featured && (
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gold text-navy rounded-sm">
                  <Star className="w-4 h-4 fill-current" />
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          {property.images.length > 1 && (
            <div className="bg-navy py-4">
              <div className="container-luxury">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-sm overflow-hidden transition-all ${
                        index === currentImageIndex
                          ? "ring-2 ring-gold ring-offset-2 ring-offset-navy"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Property Details */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h1
                    className="text-navy"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {property.title}
                  </h1>
                  <div className="flex gap-2">
                    <button className="p-3 border border-gray-200 rounded-sm hover:border-gold transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-3 border border-gray-200 rounded-sm hover:border-gold transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>
                    {property.address}, {property.city}, {property.state}{" "}
                    {property.zipCode}
                  </span>
                </div>

                <div
                  className="text-4xl md:text-5xl text-navy font-light"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {formatPrice(property.price)}
                </div>
              </div>

              {/* Quick Stats */}
              {property.propertyType !== "land" && (
                <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-gold mb-2">
                      <Bed className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-medium text-navy">
                      {property.beds}
                    </div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                  </div>
                  <div className="text-center border-x border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-gold mb-2">
                      <Bath className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-medium text-navy">
                      {property.baths}
                    </div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-gold mb-2">
                      <Square className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-medium text-navy">
                      {formatNumber(property.sqft)}
                    </div>
                    <div className="text-sm text-gray-500">Sq. Ft.</div>
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <h2
                  className="text-2xl text-navy mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  About This Property
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2
                  className="text-2xl text-navy mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Features & Amenities
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-sm"
                    >
                      <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-navy">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h2
                  className="text-2xl text-navy mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Property Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-sm">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">Property Type</span>
                    <span className="text-navy font-medium capitalize">
                      {property.propertyType}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">Status</span>
                    <span className="text-navy font-medium">
                      {getStatusLabel(property.status)}
                    </span>
                  </div>
                  {property.mlsNumber && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">MLS #</span>
                      <span className="text-navy font-medium">
                        {property.mlsNumber}
                      </span>
                    </div>
                  )}
                  {property.lotSize && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Lot Size</span>
                      <span className="text-navy font-medium">
                        {property.lotSize}
                      </span>
                    </div>
                  )}
                  {property.yearBuilt && property.yearBuilt > 0 && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Year Built</span>
                      <span className="text-navy font-medium">
                        {property.yearBuilt}
                      </span>
                    </div>
                  )}
                  {property.daysOnMarket !== undefined && property.daysOnMarket > 0 && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Days on Market</span>
                      <span className="text-navy font-medium">
                        {property.daysOnMarket}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white p-8 rounded-sm shadow-luxury">
                <h3
                  className="text-xl text-navy mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Schedule a Viewing
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-cream rounded-sm">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Call Direct</div>
                      <a
                        href="tel:+18052683615"
                        className="text-navy font-medium hover:text-gold transition-colors"
                      >
                        805.268.3615
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-cream rounded-sm">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <a
                        href="mailto:omar@revelrealestate.com"
                        className="text-navy font-medium hover:text-gold transition-colors"
                      >
                        omar@revelrealestate.com
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+18052683615"
                  className="w-full btn-luxury-primary flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Omar Now
                </a>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Or send an email to schedule a private showing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setShowLightbox(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div
              className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={property.images[currentImageIndex]}
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white font-medium">
                {currentImageIndex + 1} / {property.images.length}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-gold"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
