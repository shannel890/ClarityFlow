export default function PricingSection() {
  const tiers = [
    {
      name: "Individual Clinician",
      price: "$39 / month",
      description:
        "For clinicians exploring personal documentation flow, inbox organization, and follow-up workflow habits before team rollout.",
      includes: [
        "Daily workflow summary and priority list",
        "Personal workflow and notification preferences",
        "Email and calendar integration placeholders",
      ],
    },
    {
      name: "Clinic / Team",
      price: "$199 / month",
      description:
        "Best for 3–20 clinician teams piloting structured day-start huddles, follow-up tracking, and shared workflow visibility.",
      includes: [
        "Everything in Individual Clinician",
        "Team-level routing and shared follow-up views",
        "Role-based preferences by specialty and workflow style",
        "Centralized onboarding for new staff",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description:
        "Designed for pilot deployments by service line or unit before broader rollout.",
      includes: [
        "Everything in Clinic / Team",
        "Security and compliance review support",
        "Multi-site deployment planning",
        "Dedicated implementation coordination",
      ],
    },
  ];

  return (
    <section className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Directional pilot packaging for clinical teams
        </h2>

        <p className="text-sm leading-relaxed text-slate-700">
          These packages are intended for pilot planning and workflow validation.
          Final deployment scope is aligned to each clinic, service line, or
          operational unit.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {tier.price}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {tier.description}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {tier.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
