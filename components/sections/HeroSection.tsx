"use client";

import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-brand-bg pt-20">
      {/* Editorial Text Layer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center h-full">
        
        {/* Left Asymmetric Typography */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 mt-12 md:mt-0">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm md:text-base">
            The Signature Collection
          </span>
          <h1 className="text-display text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] leading-[0.85] text-brand-text">
            NOT JUST<br />
            A BURGER.
          </h1>
          <p className="text-body text-brand-muted max-w-md text-lg md:text-xl mt-4">
            An obsession with the perfect sear, the freshest layers, and the ultimate bite. Scroll to unfold the experience.
          </p>
        </div>

        {/* Right Space - Reserved for the Hero Burger */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center pointer-events-none">
          {/* This container will house the initial complete burger composition */}
          <div 
            id="hero-burger-container" 
            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center border border-brand-text/10"
          >
            {/* Placeholder text to be replaced with actual image in Phase 3 */}
            <span className="text-brand-muted text-sm uppercase tracking-widest">
              Burger Composition
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-brand-text/50 text-xs uppercase tracking-[0.2em] font-semibold">
          Scroll to Unfold
        </span>
        <ChevronDown className="text-brand-red animate-bounce" size={24} />
      </div>
    </section>
  );
}