"use client";

import { useRef } from "react";
import { ExplodedBurger } from "./ExplodedBurger";
import { IngredientDetails } from "./IngredientDetails";
import { gsap } from "@/lib/animations/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BurgerExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (!containerRef.current || !burgerRef.current) return;

    const ingredients = burgerRef.current.querySelectorAll("[data-ingredient]");
    const texts = containerRef.current.querySelectorAll("[data-ingredient-text]");

    // Accessibility Fallback: If user prefers reduced motion, show a static exploded view
    if (prefersReducedMotion) {
      // Set heights to auto so there's no empty scroll space
      containerRef.current.style.height = "auto";
      
      // Set a static, beautiful exploded state
      gsap.set(ingredients, {
        y: (index) => [-20, -80, -140, -200, -260, -380, 120][index],
        x: "-50%",
        top: "50%",
        left: "50%",
      });
      
      // Show all text statically
      gsap.set(texts, { opacity: 1, y: 0 });
      return;
    }

    // Standard GSAP MatchMedia for responsive animation
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.set(ingredients, { y: 0, x: "-50%", top: "50%", left: "50%" });
      
      const explodePositions = [-20, -80, -140, -200, -260, -380, 120];
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      tl.to(ingredients, {
        y: (index) => explodePositions[index],
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.1,
      }, "explode");

      texts.forEach((text, index) => {
        tl.to(text, { opacity: 1, y: -20, duration: 0.4, ease: "power1.out" }, `explode+=${index * 0.3}`);
        tl.to(text, { opacity: 0, y: -40, duration: 0.4, ease: "power1.in" }, `explode+=${index * 0.3 + 0.4}`);
      });

      tl.to(ingredients, {
        y: 0,
        duration: 2,
        ease: "power3.inOut",
        stagger: 0.05,
      }, "reassemble")
      .to(burgerRef.current, { scale: 0.9, duration: 1, ease: "power2.inOut" }, "reassemble+=1");
    });

    mm.add("(max-width: 767px)", () => {
      gsap.set(ingredients, { y: 0, x: "-50%", top: "50%", left: "50%" });
      
      const explodePositionsMobile = [-10, -40, -70, -100, -130, -190, 60];
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(ingredients, {
        y: (index) => explodePositionsMobile[index],
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.05,
      }, "explode");

      texts.forEach((text, index) => {
        tl.to(text, { opacity: 1, y: -10, duration: 0.3, ease: "power1.out" }, `explode+=${index * 0.25}`);
        tl.to(text, { opacity: 0, y: -20, duration: 0.3, ease: "power1.in" }, `explode+=${index * 0.25 + 0.3}`);
      });

      tl.to(ingredients, {
        y: 0,
        duration: 2,
        ease: "power3.inOut",
        stagger: 0.05,
      }, "reassemble")
      .to(burgerRef.current, { scale: 0.85, duration: 1, ease: "power2.inOut" }, "reassemble+=1");
    });

    return () => mm.revert();
  }, { scope: containerRef, dependencies: [prefersReducedMotion] });

  return (
    <div ref={containerRef} className="relative h-[300vh] md:h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">
        <div className="relative z-10 w-full flex justify-center">
          <ExplodedBurger ref={burgerRef} />
        </div>
        <div className="absolute inset-0 z-20 pointer-events-none px-6 md:px-24 max-w-7xl mx-auto w-full flex">
           <IngredientDetails />
        </div>
      </div>
    </div>
  );
}