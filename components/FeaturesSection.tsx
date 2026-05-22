export default function FeaturesSection() {
  const features = [
    {
      title: "Begin visits with clear patient context",
      description:
        "Before consultation, ClarityFlow prepares a concise history summary from prior notes, labs, and recent messages.",
      benefit:
        "Clinicians spend less time searching records and enter visits with clearer focus.",
    },
    {
      title: "Finish notes while details are still fresh",
      description:
        "After each encounter, ClarityFlow drafts structured clinical notes aligned to the visit timeline for quick review.",
      benefit:
        "Teams reduce documentation time and limit after-hours charting load.",
    },
    {
      title: "Keep follow-ups from being missed",
      description:
        "ClarityFlow extracts tasks and follow-up needs from inbox messages, visit outcomes, and care coordination threads for reliable task prioritization.",
      benefit:
        "Clinicians lower cognitive load and maintain safer, more reliable next steps.",
    },
    {
      title: "Hand over care with fewer gaps",
      description:
        "For care transitions, ClarityFlow creates a clean handover summary with active issues, pending actions, and recent decisions.",
      benefit:
        "Incoming clinicians get oriented faster with fewer missed details.",
    },
  ];

  return (
    <section className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Built for real clinical workflows
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {feature.benefit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
