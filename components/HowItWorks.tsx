export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Connect your tools",
      description:
        "Link your EHR, email, and scheduling systems using standard integrations and placeholders configured for your environment.",
      reassurance:
        "Setup is designed to be lightweight, so teams can start without changing core clinical workflows.",
    },
    {
      id: "02",
      title: "Set preferences",
      description:
        "Define specialties, workflow style, and notification preferences so daily outputs match your care setting and priorities.",
      reassurance:
        "Preferences can be adjusted anytime, allowing each clinician and unit to work in their existing rhythm.",
    },
    {
      id: "03",
      title: "Start your day with clarity",
      description:
        "Review AI-prepared summaries, priority items, and follow-ups at the start of each shift or clinic session.",
      reassurance:
        "You remain in control of what is accepted, edited, or ignored before anything is used in practice.",
    },
  ];

  return (
    <section className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          How ClarityFlow fits into your day
        </h2>

        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.id}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm font-semibold text-slate-500">{step.id}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {step.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {step.reassurance}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
