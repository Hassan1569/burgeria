"use client";

import { forwardRef } from "react";
import Image from "next/image";

export const ExplodedBurger = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref} 
      className="relative w-full max-w-[600px] aspect-square flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90"
          alt="Premium Burger"
          width={800}
          height={800}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
});

ExplodedBurger.displayName = "ExplodedBurger";