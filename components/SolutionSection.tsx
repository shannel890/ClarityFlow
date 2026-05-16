export default function SolutionSection() {
  const pillars = [
    {
      title: "Summarize",
      description:
        "ClarityFlow turns charts, messages, and recent events into a focused patient snapshot inside your current workflow.",
      benefit:
        "Clinicians spend less time gathering context and can make decisions with greater clarity.",
    },
    {
      title: "Prioritize",
      description:
        "ClarityFlow highlights the next most important tasks across inboxes, follow-ups, and care-team handoffs.",
      benefit:
        "Teams protect attention for high-impact work and reduce cognitive load throughout the day.",
    },
    {
      title: "Document",
      description:
        "ClarityFlow drafts structured documentation from visit context for review and sign-off in existing systems.",
      benefit:
        "Clinicians finish notes faster and reduce after-hours administrative time.",
    },
  ];

  return (
    <section className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Meet ClarityFlow
        </h2>

        <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          ClarityFlow is an AI layer that works on top of the clinical tools
          your team already uses, helping workflows stay connected without
          replacing core systems.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {pillar.benefit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
