"use client";

import { useRef } from "react";
import { ExplodedBurger } from "./ExplodedBurger";
import { IngredientDetails } from "./IngredientDetails";
import { gsap } from "@/lib/animations/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BurgerExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !burgerRef.current) return;

    const ingredients = burgerRef.current.querySelectorAll("[data-ingredient]");
    const texts = containerRef.current.querySelectorAll("[data-ingredient-text]");

    // Initial state: Burger is fully assembled
    gsap.set(ingredients, { y: 0, x: "-50%", top: "50%", left: "50%" });

    // Define the vertical spacing for the exploded view
    // Order: Patty, Cheese, Sauce, Tomato, Lettuce, Top Bun, Bottom Bun
    const explodePositions = [
      -20, // Patty
      -80, // Cheese
      -140, // Sauce
      -200, // Tomato
      -260, // Lettuce
      -380, // Top Bun
      120,  // Bottom Bun
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smoother scrubbing
      },
    });

    // 1. Explode the burger
    tl.to(ingredients, {
      y: (index) => explodePositions[index],
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.1,
    }, "explode");

    // 2. Reveal Texts
    texts.forEach((text, index) => {
      // Fade in
      tl.to(text, {
        opacity: 1,
        y: -20,
        duration: 0.4,
        ease: "power1.out",
      }, `explode+=${index * 0.3}`);
      
      // Fade out
      tl.to(text, {
        opacity: 0,
        y: -40,
        duration: 0.4,
        ease: "power1.in",
      }, `explode+=${index * 0.3 + 0.4}`);
    });

    // 3. Reassemble the burger
    tl.to(ingredients, {
      y: 0,
      duration: 2,
      ease: "power3.inOut",
      stagger: 0.05,
    }, "reassemble")
    // 4. Subtle scale down as we prepare to exit
    .to(burgerRef.current, {
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
    }, "reassemble+=1");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
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