"use client";

export function FinalCTA() {
  return (
    <section className="relative bg-brand-red py-32 px-6 md:px-12 text-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div>
          <h2 className="text-display text-6xl md:text-8xl leading-none mb-6">
            YOUR NEXT<br />OBSESSION.
          </h2>
          <p className="text-body text-brand-bg/80 text-xl max-w-md">
            Stop scrolling. Start eating. The perfect burger is waiting for you.
          </p>
        </div>
        <button className="bg-brand-bg text-brand-red px-12 py-6 text-xl font-bold tracking-widest uppercase hover:bg-brand-text hover:text-brand-bg transition-colors shrink-0">
          Order Now
        </button>
      </div>
    </section>
  );
}