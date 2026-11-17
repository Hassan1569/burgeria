import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="relative bg-brand-bg min-h-[200vh]">
      <Navbar />
      <HeroSection />
      
      {/* Temporary spacer to test scroll behavior for Phase 3 */}
      <section className="h-screen flex items-center justify-center bg-brand-bg">
        <p className="text-display text-brand-muted text-4xl">Next Scene Coming in Phase 3</p>
      </section>
    </main>
  );
}