const steps = [
  "Collect daily patient and task context",
  "Highlight unresolved priorities and dependencies",
  "Support concise handoff-ready summaries",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell">
      <h2 className="section-title">How It Works</h2>
      <ol className="mt-6 space-y-3 text-sm text-ink-700">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3 rounded-2xl border border-slate-200 bg-surface-100 px-4 py-3">
            <span className="font-semibold text-brand-600">{index + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
