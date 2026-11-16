export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-display text-6xl md:text-8xl text-brand-text">
          NOT JUST A BURGER.<br />
          <span className="text-brand-red">AN OBSESSION.</span>
        </h1>
        <p className="text-body text-lg md:text-xl text-brand-muted max-w-xl mx-auto">
          Design system initialized. Solid colors, editorial typography, and custom layout.
        </p>
        <div className="flex items-center justify-center gap-4 pt-8">
          <button className="bg-brand-red text-brand-bg px-8 py-4 uppercase font-bold tracking-wider hover:bg-brand-text transition-colors">
            Order Now
          </button>
          <button className="border-2 border-brand-text text-brand-text px-8 py-4 uppercase font-bold tracking-wider hover:bg-brand-text hover:text-brand-bg transition-colors">
            Our Story
          </button>
        </div>
      </div>
    </main>
  );
}