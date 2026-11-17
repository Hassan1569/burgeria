"use client";

export function Footer() {
  return (
    <footer className="bg-brand-text text-brand-bg py-16 px-6 md:px-12 border-t border-brand-bg/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <a href="/" className="text-display text-4xl tracking-tighter text-brand-bg hover:text-brand-red transition-colors">
            OBSESSION<span className="text-brand-red">.</span>
          </a>
          <p className="text-brand-muted text-sm mt-6 max-w-xs">
            Not just a burger. An obsession. Crafting the finest burgers since 2024.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-brand-bg font-bold uppercase tracking-widest mb-6">Explore</h4>
          <ul className="flex flex-col gap-4 text-brand-muted text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Ingredients</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Locations</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-brand-bg font-bold uppercase tracking-widest mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-brand-muted text-sm">
            <li>hello@obsession.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Burger Lane<br />New York, NY 10001</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-muted text-xs uppercase tracking-widest">
        <p>© 2024 Obsession Burger. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-bg transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-bg transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}