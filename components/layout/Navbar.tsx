"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { name: "Menu", href: "#menu" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "Our Story", href: "#story" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6",
        isScrolled ? "bg-brand-bg/90 backdrop-blur-md py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-display text-2xl md:text-3xl tracking-tighter text-brand-text hover:text-brand-red transition-colors">
          OBSESSION<span className="text-brand-red">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase text-brand-text hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="bg-brand-red text-brand-bg px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-brand-text transition-colors">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-text p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-bg border-t border-brand-text/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-display text-3xl text-brand-text hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-red text-brand-bg px-6 py-4 text-sm font-bold tracking-widest uppercase mt-4 w-full hover:bg-brand-text transition-colors">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}