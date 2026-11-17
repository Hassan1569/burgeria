"use client";

import { forwardRef } from "react";
import { INGREDIENTS } from "@/lib/constants/burger";
import { cn } from "@/lib/utils/cn";

export const ExplodedBurger = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref} 
      className="relative w-full max-w-[400px] aspect-square flex items-center justify-center pointer-events-none"
    >
      {/* 
        This wrapper will be pinned. 
        The ingredients are absolutely positioned relative to the center.
      */}
      <div className="relative w-full h-full flex items-center justify-center">
        {INGREDIENTS.map((ingredient) => (
          <div
            key={ingredient.id}
            data-ingredient={ingredient.id}
            className={cn(
              "absolute w-[240px] md:w-[280px] h-[40px] md:h-[50px] rounded-[50%]",
              // CSS styles simulating the burger layers
              ingredient.id === "top-bun" && "rounded-t-full rounded-b-[40px] shadow-lg border-b-4 border-[#b07135]",
              ingredient.id === "bottom-bun" && "rounded-b-full rounded-t-[40px] shadow-lg border-t-4 border-[#a8652a]",
              ingredient.id === "patty" && "rounded-[20px] border-b-4 border-[#2e1a0d] shadow-md",
              ingredient.id === "cheese" && "rotate-2 opacity-90",
              ingredient.id === "tomato" && "rotate-[-3deg]",
              ingredient.id === "lettuce" && "rotate-3 opacity-90 scale-y-50",
              ingredient.id === "sauce" && "scale-y-75 opacity-80"
            )}
            style={{
              backgroundColor: ingredient.color,
              zIndex: ingredient.zIndex,
              // Initial stacked position (centered)
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
});

ExplodedBurger.displayName = "ExplodedBurger";