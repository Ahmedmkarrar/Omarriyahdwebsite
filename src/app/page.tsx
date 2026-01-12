import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProperties />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
