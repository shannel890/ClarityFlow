export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-base font-semibold text-slate-900">ClarityFlow</p>
            <p className="text-sm text-slate-700">
              AI assistant for clinical workflow clarity.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="space-y-2">
            <p className="text-sm font-medium text-slate-900">Navigation</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-900">Legal</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#" className="hover:text-slate-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-slate-600">
          Built to reduce clinical workload and improve focus on patient care.
        </p>
      </div>
    </footer>
  );
}
