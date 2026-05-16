const navLinks = ["Problem", "Solution", "Features", "Trust", "Pricing"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-surface-50/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <span className="text-lg font-semibold tracking-tight text-ink-800">ClarityFlow</span>
        <nav className="hidden items-center gap-6 text-sm text-ink-700 md:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-brand-600">
              {link}
            </a>
          ))}
        </nav>
        <button className="rounded-pill bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-500">
          Request Demo
        </button>
      </div>
    </header>
  );
}
