"use client";

import { forwardRef } from "react";
import { INGREDIENTS } from "@/lib/constants/burger";
import { cn } from "@/lib/utils/cn";

export const ExplodedBurger = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref} 
      className="relative w-full max-w-[800px] aspect-square flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {INGREDIENTS.map((ingredient) => (
          <div
            key={ingredient.id}
            data-ingredient={ingredient.id}
            className={cn(
              // Made the layers much bigger
              "absolute w-[280px] md:w-[450px] h-[50px] md:h-[90px] rounded-[50%]",
              ingredient.id === "top-bun" && "rounded-t-full rounded-b-[60px] shadow-xl border-b-8 border-[#b07135]",
              ingredient.id === "bottom-bun" && "rounded-b-full rounded-t-[60px] shadow-xl border-t-8 border-[#a8652a]",
              ingredient.id === "patty" && "rounded-[30px] border-b-8 border-[#2e1a0d] shadow-lg",
              ingredient.id === "cheese" && "rotate-2 opacity-90",
              ingredient.id === "tomato" && "rotate-[-3deg]",
              ingredient.id === "lettuce" && "rotate-3 opacity-90 scale-y-50",
              ingredient.id === "sauce" && "scale-y-75 opacity-80"
            )}
            style={{
              backgroundColor: ingredient.color,
              zIndex: ingredient.zIndex,
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