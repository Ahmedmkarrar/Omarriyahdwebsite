import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Luxury Typography Setup
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A1628",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://omarriyad.com"),
  title: {
    default: "Omar Riyad | Elite California Real Estate Advisor",
    template: "%s | Omar Riyad Real Estate",
  },
  description:
    "Elite real estate advisor specializing in luxury residential and commercial properties in Montecito, Beverly Hills, and Central Coast California markets. Over $100M in sales with 10+ years of experience.",
  keywords: [
    "luxury real estate",
    "Montecito homes",
    "Beverly Hills real estate",
    "Central Coast properties",
    "California luxury homes",
    "high-end real estate",
    "off-market properties",
    "commercial real estate California",
    "Omar Riyad",
    "Revel Real Estate",
  ],
  authors: [{ name: "Omar Riyad" }],
  creator: "Omar Riyad",
  publisher: "Omar Riyad - Revel Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omarriyad.com",
    siteName: "Omar Riyad Real Estate",
    title: "Omar Riyad | Elite California Real Estate Advisor",
    description:
      "Elite real estate advisor specializing in luxury residential and commercial properties in Montecito, Beverly Hills, and Central Coast California markets.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omar Riyad - Elite California Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Riyad | Elite California Real Estate Advisor",
    description:
      "Elite real estate advisor specializing in luxury properties in Montecito, Beverly Hills, and Central Coast.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://omarriyad.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Omar Riyad",
  image: "https://omarriyad.com/omar-riyad.jpg",
  "@id": "https://omarriyad.com",
  url: "https://omarriyad.com",
  telephone: "+1-805-268-3615",
  email: "omar@revelrealestate.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Barbara",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.4208,
    longitude: -119.6982,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Montecito",
    },
    {
      "@type": "City",
      name: "Beverly Hills",
    },
    {
      "@type": "City",
      name: "Santa Barbara",
    },
  ],
  priceRange: "$2M - $25M+",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/omarriyad",
    "https://www.linkedin.com/in/omarriyad",
    "https://www.facebook.com/omarriyad",
  ],
  description:
    "Elite real estate advisor with 10+ years experience specializing in luxury residential and commercial properties in California's most prestigious markets.",
  knowsAbout: [
    "Luxury Real Estate",
    "Commercial Real Estate",
    "Off-Market Properties",
    "Investment Properties",
    "Waterfront Properties",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    recognizedBy: {
      "@type": "Organization",
      name: "California Department of Real Estate",
    },
  },
  worksFor: {
    "@type": "RealEstateAgent",
    name: "Revel Real Estate",
    url: "https://revelrealestate.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
