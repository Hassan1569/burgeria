"use client";

export function SignatureBurgers() {
  return (
    <section className="relative bg-brand-text text-brand-bg py-32 px-6 md:px-12 z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-display text-6xl md:text-8xl leading-none">
            SIGNATURE<br />SELECTION
          </h2>
          <p className="text-body text-brand-muted max-w-sm text-lg">
            Three masterpieces. Each crafted with obsessive attention to detail. Choose your obsession.
          </p>
        </div>

        {/* Editorial Product List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Burger 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-brand-bg/10 overflow-hidden relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-brand-bg/20 text-display text-4xl">
                Image Here
              </div>
            </div>
            <div className="flex justify-between items-start border-t border-brand-bg/20 pt-4">
              <div>
                <h3 className="text-display text-3xl mb-1 group-hover:text-brand-red transition-colors">THE CLASSIC</h3>
                <p className="text-body text-brand-muted text-sm">Aged Beef, Cheddar, House Sauce</p>
              </div>
              <span className="text-xl font-bold">$14</span>
            </div>
          </div>

          {/* Burger 2 */}
          <div className="group cursor-pointer md:mt-24">
            <div className="aspect-[4/5] bg-brand-bg/10 overflow-hidden relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-brand-bg/20 text-display text-4xl">
                Image Here
              </div>
            </div>
            <div className="flex justify-between items-start border-t border-brand-bg/20 pt-4">
              <div>
                <h3 className="text-display text-3xl mb-1 group-hover:text-brand-red transition-colors">THE SMASH</h3>
                <p className="text-body text-brand-muted text-sm">Double Patty, American Cheese, Onion</p>
              </div>
              <span className="text-xl font-bold">$16</span>
            </div>
          </div>

          {/* Burger 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-brand-bg/10 overflow-hidden relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-brand-bg/20 text-display text-4xl">
                Image Here
              </div>
            </div>
            <div className="flex justify-between items-start border-t border-brand-bg/20 pt-4">
              <div>
                <h3 className="text-display text-3xl mb-1 group-hover:text-brand-red transition-colors">THE HEAT</h3>
                <p className="text-body text-brand-muted text-sm">Pepper Jack, Jalapeño, Spicy Mayo</p>
              </div>
              <span className="text-xl font-bold">$15</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}