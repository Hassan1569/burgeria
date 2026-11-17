"use client";

import { motion } from "motion/react";

const images = [
  { id: 1, class: "md:col-span-2 md:row-span-2 aspect-square" },
  { id: 2, class: "md:col-span-1 md:row-span-1 aspect-square" },
  { id: 3, class: "md:col-span-1 md:row-span-1 aspect-square" },
  { id: 4, class: "md:col-span-2 md:row-span-1 aspect-video" },
];

export function FoodGallery() {
  return (
    <section className="bg-brand-text py-24 px-6 md:px-12 text-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-display text-5xl md:text-7xl">THE GALLERY</h2>
          <span className="text-brand-red font-bold tracking-widest uppercase hidden md:block">
            Shot on location
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
          {images.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 0.98 }}
              className={`relative bg-brand-bg/10 overflow-hidden ${img.class}`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-brand-bg/30 text-display text-2xl">
                Image {img.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}