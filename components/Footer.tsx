export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-ink-700 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} ClarityFlow</p>
        <p>Healthcare workflow clarity concept for trust-centered product communication.</p>
      </div>
    </footer>
  );
}
