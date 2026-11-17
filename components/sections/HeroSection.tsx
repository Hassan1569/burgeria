"use client";

import { ChevronDown } from "lucide-react";
import { BurgerExperience } from "@/components/burger/BurgerExperience";

export function HeroSection() {
  return (
    <section className="relative w-full bg-brand-bg">
      {/* Increased top padding to pt-40 to clear the fixed navbar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center pt-40 pb-16">
        
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 mt-12 md:mt-0 z-20 pointer-events-none">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm md:text-base pointer-events-auto">
            The Signature Collection
          </span>
          <h1 className="text-display text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.8] text-brand-text">
            NOT<br />JUST<br />A BURGER.
          </h1>
          <p className="text-body text-brand-muted max-w-md text-lg md:text-xl mt-4 pointer-events-auto">
            An obsession with the perfect sear, the freshest layers, and the ultimate bite. Scroll to unfold the experience.
          </p>
        </div>
      </div>

      <div className="relative w-full -mt-[30vh] md:-mt-[40vh] z-10">
        <BurgerExperience />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
        <span className="text-brand-text/50 text-xs uppercase tracking-[0.2em] font-semibold">
          Scroll to Unfold
        </span>
        <ChevronDown className="text-brand-red animate-bounce" size={24} />
      </div>
    </section>
  );
}