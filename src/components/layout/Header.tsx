"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-navy/95 backdrop-blur-lg shadow-luxury py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group relative z-10"
              aria-label="Omar Riyad - Home"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                <span
                  className="text-2xl md:text-3xl font-light tracking-wide text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Omar Riyad
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold/80 font-medium">
                  Luxury Real Estate
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:flex items-center gap-8"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide uppercase transition-colors duration-300",
                    pathname === item.href
                      ? "text-gold"
                      : "text-white/80 hover:text-white"
                  )}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </motion.div>

            {/* CTA Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <a
                href="tel:+18052683615"
                className="btn-luxury-primary group"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  Call Omar
                </span>
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex items-center justify-center"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-navy z-50 lg:hidden shadow-luxury-lg"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Mobile Navigation Links */}
                <nav className="flex-1 space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-4 text-2xl font-light tracking-wide border-b border-white/10 transition-colors",
                          pathname === item.href
                            ? "text-gold"
                            : "text-white/80 hover:text-white"
                        )}
                        style={{ fontFamily: "var(--font-serif)" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 space-y-4"
                >
                  <a
                    href="tel:+18052683615"
                    className="btn-luxury-primary w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Omar
                    </span>
                  </a>

                  {/* Contact Info */}
                  <div className="pt-6 border-t border-white/10">
                    <a
                      href="tel:+18052683615"
                      className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">805.268.3615</span>
                    </a>
                  </div>
                </motion.div>

                {/* License */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 text-center">
                    DRE License #02052562
                    <br />
                    Revel Real Estate
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
