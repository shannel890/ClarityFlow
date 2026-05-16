const features = [
  "Priority-based documentation queue",
  "Daily workflow checkpoints",
  "Care handoff summaries with context",
  "Operational visibility for unresolved actions",
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-shell">
      <h2 className="section-title">Feature Direction</h2>
      <p className="section-copy">Initial feature scope focuses on communication quality and workflow continuity.</p>
      <ul className="mt-6 grid gap-3 text-sm text-ink-700 md:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="rounded-2xl border border-slate-200 bg-surface-100 px-4 py-3">
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
