"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      } border-b border-stone-100 bg-[#FAFAF8]/90 backdrop-blur-md`}
    >
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <span className="font-serif text-xl text-teal-600">
          Clarity<span className="text-stone-900">Flow</span>
        </span>

        {/* Nav links */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#product"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            Product
          </a>
          <a
            href="#workflow-scenarios"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            Workflow Scenarios
          </a>
          <a
            href="#systems-work"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            Systems Work
          </a>
          <a
            href="#about"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-stone-600 transition-colors hover:text-stone-900"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800"
        >
          Request a workflow pilot
        </a>
      </div>
    </header>
  );
}
