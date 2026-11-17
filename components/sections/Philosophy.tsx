"use client";

export function Philosophy() {
  return (
    <section id="story" className="relative bg-brand-bg py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
          
          {/* Image Side */}
          <div className="relative aspect-[4/5] bg-brand-text/5 w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-brand-muted text-display text-4xl">
              Philosophy Image
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col gap-8 md:pl-12">
            <h2 className="text-display text-5xl md:text-7xl leading-none text-brand-text">
              OBSESSION<br />OVER<br />EVERYTHING.
            </h2>
            <div className="space-y-6 text-body text-brand-muted text-lg">
              <p>
                We don't just make burgers. We engineer flavor. From the precise temperature of our griddle to the exact moisture level of our buns, every detail is calculated.
              </p>
              <p>
                Our beef is ground daily from whole cuts. Our sauces are aged for 24 hours to let the spices bloom. We believe that true quality cannot be rushed.
              </p>
            </div>
            <div className="mt-8">
              <button className="border-b-2 border-brand-text text-brand-text pb-1 font-bold tracking-widest uppercase hover:text-brand-red hover:border-brand-red transition-all">
                Read Our Manifesto
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}