"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Bed,
  Bath,
  Square,
  MapPin,
  Star,
  ChevronDown,
  X,
  Grid3X3,
  List,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/custom/AnimatedSection";
import {
  properties,
  formatPrice,
  formatNumber,
  getStatusLabel,
  Property,
} from "@/data/properties";

const statusFilters = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "sold", label: "Sold" },
  { value: "off-market", label: "Off-Market" },
];

const typeFilters = [
  { value: "all", label: "All Types" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "land", label: "Land" },
];

const priceRanges = [
  { value: "all", label: "Any Price", min: 0, max: Infinity },
  { value: "0-5m", label: "Under $5M", min: 0, max: 5000000 },
  { value: "5m-10m", label: "$5M - $10M", min: 5000000, max: 10000000 },
  { value: "10m-20m", label: "$10M - $20M", min: 10000000, max: 20000000 },
  { value: "20m+", label: "$20M+", min: 20000000, max: Infinity },
];

const bedFilters = [
  { value: "any", label: "Any Beds" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
  { value: "6", label: "6+" },
];

const locations = [
  { value: "all", label: "All Locations" },
  { value: "Montecito", label: "Montecito" },
  { value: "Beverly Hills", label: "Beverly Hills" },
  { value: "Malibu", label: "Malibu" },
  { value: "Santa Barbara", label: "Santa Barbara" },
  { value: "Newport Beach", label: "Newport Beach" },
  { value: "Santa Ynez", label: "Santa Ynez" },
];

const sortOptions = [
  { value: "price-high", label: "Price (High to Low)" },
  { value: "price-low", label: "Price (Low to High)" },
  { value: "newest", label: "Newest First" },
  { value: "beds", label: "Most Bedrooms" },
  { value: "sqft", label: "Largest First" },
];

function PropertyCard({ property }: { property: Property }) {
  const statusColors = {
    active: "bg-green-500",
    pending: "bg-yellow-500",
    sold: "bg-gray-500",
    "off-market": "bg-gold",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/properties/${property.id}`}>
        <div className="card-luxury overflow-hidden h-full">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`inline-flex items-center px-3 py-1 text-xs font-medium text-white rounded-sm ${
                  statusColors[property.status]
                }`}
              >
                {getStatusLabel(property.status)}
              </span>
            </div>

            {/* Featured Badge */}
            {property.featured && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-gold text-navy rounded-sm">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </span>
              </div>
            )}

            {/* Quick View Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-6 py-3 bg-white/95 text-navy font-medium rounded-sm shadow-luxury">
                View Details
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Price */}
            <div className="flex items-baseline justify-between mb-3">
              <span
                className="text-2xl text-navy font-light"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {formatPrice(property.price)}
              </span>
              {property.daysOnMarket !== undefined && property.daysOnMarket > 0 && (
                <span className="text-xs text-gray-400">
                  {property.daysOnMarket} days
                </span>
              )}
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-navy font-medium">{property.address}</p>
                <p className="text-gray-500 text-sm">
                  {property.city}, {property.state} {property.zipCode}
                </p>
              </div>
            </div>

            {/* Details */}
            {property.propertyType !== "land" && (
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Bed className="w-4 h-4" />
                  <span className="text-sm">{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Bath className="w-4 h-4" />
                  <span className="text-sm">{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Square className="w-4 h-4" />
                  <span className="text-sm">{formatNumber(property.sqft)} sqft</span>
                </div>
              </div>
            )}

            {property.propertyType === "land" && property.lotSize && (
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100 text-gray-600">
                <Square className="w-4 h-4" />
                <span className="text-sm">{property.lotSize}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [bedsFilter, setBedsFilter] = useState("any");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price-high");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.address.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.mlsNumber?.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      result = result.filter((p) => p.status === statusFilter);
    }

    // Type filter
    if (typeFilter !== "all") {
      result = result.filter((p) => p.propertyType === typeFilter);
    }

    // Price filter
    if (priceFilter !== "all") {
      const range = priceRanges.find((r) => r.value === priceFilter);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    // Beds filter
    if (bedsFilter !== "any") {
      const minBeds = parseInt(bedsFilter);
      result = result.filter((p) => p.beds >= minBeds);
    }

    // Location filter
    if (locationFilter !== "all") {
      result = result.filter((p) => p.city === locationFilter);
    }

    // Sort
    switch (sortBy) {
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "newest":
        result.sort((a, b) => (a.daysOnMarket || 0) - (b.daysOnMarket || 0));
        break;
      case "beds":
        result.sort((a, b) => b.beds - a.beds);
        break;
      case "sqft":
        result.sort((a, b) => b.sqft - a.sqft);
        break;
    }

    return result;
  }, [searchQuery, statusFilter, typeFilter, priceFilter, bedsFilter, locationFilter, sortBy]);

  const activeFiltersCount = [
    statusFilter !== "all",
    typeFilter !== "all",
    priceFilter !== "all",
    bedsFilter !== "any",
    locationFilter !== "all",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setStatusFilter("all");
    setTypeFilter("all");
    setPriceFilter("all");
    setBedsFilter("any");
    setLocationFilter("all");
    setSearchQuery("");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.3) 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href="https://revelrealestate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-[0.2em] uppercase text-gold mb-6 hover:text-gold/80 transition-colors"
            >
              Powered by Revel Real Estate
            </a>
            <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Exclusive California Properties
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Curated luxury listings in Montecito, Beverly Hills, and
              California&apos;s most prestigious coastal markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-[73px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-luxury py-4">
          {/* Top Row - Search and Toggle */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by address, city, or MLS#..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-navy placeholder:text-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-navy" />
                </button>
              )}
            </div>

            {/* Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 border rounded-sm transition-colors ${
                showFilters || activeFiltersCount > 0
                  ? "border-gold bg-gold/5 text-navy"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-gold text-navy text-xs font-medium rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 bg-gray-50 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="hidden md:flex items-center border border-gray-200 rounded-sm overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 ${
                  viewMode === "grid" ? "bg-navy text-white" : "bg-white text-gray-600"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 ${
                  viewMode === "list" ? "bg-navy text-white" : "bg-white text-gray-600"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filter Options (Collapsible) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-gray-100">
                  {/* Status */}
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Status
                    </label>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-gold text-sm"
                    >
                      {statusFilters.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Property Type
                    </label>
                    <select
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-gold text-sm"
                    >
                      {typeFilters.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Price Range
                    </label>
                    <select
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-gold text-sm"
                    >
                      {priceRanges.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Beds */}
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Bedrooms
                    </label>
                    <select
                      value={bedsFilter}
                      onChange={(e) => setBedsFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-gold text-sm"
                    >
                      {bedFilters.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Location
                    </label>
                    <select
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-gold text-sm"
                    >
                      {locations.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {activeFiltersCount > 0 && (
                  <div className="flex items-center justify-end pt-4">
                    <button
                      onClick={clearFilters}
                      className="text-sm text-gold hover:text-gold/80 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-medium text-navy">
                {filteredProperties.length}
              </span>{" "}
              {filteredProperties.length === 1 ? "property" : "properties"}
            </p>
          </div>

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <motion.div
              layout
              className={`grid gap-8 ${
                viewMode === "grid"
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              <AnimatePresence>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <AnimatedSection className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3
                className="text-2xl text-navy mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                No Properties Found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search criteria
              </p>
              <button
                onClick={clearFilters}
                className="btn-luxury-primary"
              >
                Clear All Filters
              </button>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.3) 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="container-luxury relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Off-Market Opportunities
            </span>
            <h2 className="text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Looking for Something Special?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Many of the finest properties never reach the public market.
              Contact Omar for exclusive access to private listings and
              off-market opportunities.
            </p>
            <a href="tel:+18052683615" className="btn-luxury-primary">
              Call Omar Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
