const pilotSteps = [
  "Start with one clinic, service line, or care team.",
  "Map documentation, inbox, follow-up, and handoff pain points.",
  "Configure workflow views around existing operational routines.",
  "Review unresolved work before and after clinic sessions.",
  "Expand only after the workflow model proves useful.",
];

export default function PilotReadinessSection() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-500">
          Pilot readiness
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-stone-900 md:text-4xl">
          Built for workflow pilots, not disruptive rollouts.
        </h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700 md:text-base">
          {pilotSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
