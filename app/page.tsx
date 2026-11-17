import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SignatureBurgers } from "@/components/sections/SignatureBurgers";

export default function Home() {
  return (
    <main className="relative bg-brand-bg">
      <Navbar />
      <HeroSection />
      
      {/* Next Section: Signature Burgers */}
      <SignatureBurgers />

      {/* Temporary Footer Spacer */}
      <div className="h-[50vh] bg-brand-bg" />
    </main>
  );
}