"use client";

export function IngredientDetails() {
  return (
    <div className="w-full h-full flex flex-col justify-between py-12 md:py-24">
      {/* Top Section */}
      <div className="flex flex-col gap-4 md:gap-8">
        <div data-ingredient-text="top-bun" className="max-w-[200px] md:max-w-xs opacity-0">
          <span className="text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase mb-1 block">01</span>
          <h3 className="text-display text-xl md:text-5xl text-brand-text">The Perfect Bun</h3>
          <p className="text-body text-brand-muted mt-2 text-xs md:text-base leading-tight">
            Baked in-house daily. Soft, toasted, and finished with a light glaze.
          </p>
        </div>
        
        <div data-ingredient-text="lettuce" className="max-w-[200px] md:max-w-xs opacity-0 ml-auto text-right">
          <span className="text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase mb-1 block">02</span>
          <h3 className="text-display text-xl md:text-5xl text-brand-text">Freshness</h3>
          <p className="text-body text-brand-muted mt-2 text-xs md:text-base leading-tight">
            Crisp, hand-torn butter lettuce. Delivered fresh every morning.
          </p>
        </div>

        <div data-ingredient-text="tomato" className="max-w-[200px] md:max-w-xs opacity-0">
          <span className="text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase mb-1 block">03</span>
          <h3 className="text-display text-xl md:text-5xl text-brand-text">The Slice</h3>
          <p className="text-body text-brand-muted mt-2 text-xs md:text-base leading-tight">
            Thick-cut vine tomatoes. Juicy and perfectly seasoned.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col gap-4 md:gap-8 items-end">
        <div data-ingredient-text="sauce" className="max-w-[200px] md:max-w-xs opacity-0 text-right">
          <span className="text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase mb-1 block">04</span>
          <h3 className="text-display text-xl md:text-5xl text-brand-text">Signature Sauce</h3>
          <p className="text-body text-brand-muted mt-2 text-xs md:text-base leading-tight">
            A secret blend of smoked spices, house mayo, and citrus.
          </p>
        </div>

        <div data-ingredient-text="cheese" className="max-w-[200px] md:max-w-xs opacity-0">
          <span className="text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase mb-1 block">05</span>
          <h3 className="text-display text-xl md:text-5xl text-brand-text">Melted Gold</h3>
          <p className="text-body text-brand-muted mt-2 text-xs md:text-base leading-tight">
            Aged white cheddar, melted to perfection.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4 md:gap-8">
        <div data-ingredient-text="patty" className="max-w-[200px] md:max-w-xs opacity-0 ml-auto text-right">
          <span className="text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase mb-1 block">06</span>
          <h3 className="text-display text-xl md:text-5xl text-brand-text">The Perfect Sear</h3>
          <p className="text-body text-brand-muted mt-2 text-xs md:text-base leading-tight">
            Premium dry-aged beef grilled over an open flame.
          </p>
        </div>

        <div data-ingredient-text="bottom-bun" className="max-w-[200px] md:max-w-xs opacity-0">
          <span className="text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase mb-1 block">07</span>
          <h3 className="text-display text-xl md:text-5xl text-brand-text">The Foundation</h3>
          <p className="text-body text-brand-muted mt-2 text-xs md:text-base leading-tight">
            Sturdy enough to hold the masterpiece, soft enough to bite.
          </p>
        </div>
      </div>
    </div>
  );
}