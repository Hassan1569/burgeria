"use client";

export function BrandStory() {
  return (
    <section className="relative bg-brand-bg py-40 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        <span className="text-brand-red font-bold tracking-widest uppercase text-sm">
          Est. 2024
        </span>
        <h2 className="text-display text-5xl md:text-8xl leading-[0.9] text-brand-text">
          WE DIDN'T<br />SET OUT TO<br />MAKE A BURGER.
        </h2>
        <p className="text-body text-brand-muted text-xl md:text-2xl max-w-2xl leading-relaxed">
          We set out to make the last burger you'll ever need to look for. A perfect balance of science, craft, and absolute indulgence.
        </p>
      </div>
    </section>
  );
}