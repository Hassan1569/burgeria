import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SignatureBurgers } from "@/components/sections/SignatureBurgers";
import { Philosophy } from "@/components/sections/Philosophy";
import { FoodGallery } from "@/components/sections/FoodGallery";
import { BrandStory } from "@/components/sections/BrandStory";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-brand-bg">
      <Navbar />
      <HeroSection />
      <SignatureBurgers />
      <Philosophy />
      <FoodGallery />
      <BrandStory />
      <FinalCTA />
      <Footer />
    </main>
  );
}