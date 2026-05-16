export default function ProblemSection() {
  const problems = [
    {
      title: "Documentation overload",
      description:
        "Clinical teams spend hours each day completing notes, coding details, and chart updates that pull time away from direct patient care.",
    },
    {
      title: "Fragmented patient information",
      description:
        "Patient context is split across EHR views, inboxes, referrals, and external tools, making it hard to build a reliable, complete picture quickly.",
    },
    {
      title: "Constant context switching",
      description:
        "Clinicians repeatedly switch between tabs, systems, and message threads just to complete a single workflow, increasing cognitive load and error risk.",
    },
    {
      title: "Missed follow-ups in scattered systems",
      description:
        "When reminders and action items live in different places, critical follow-ups can be delayed or lost in handoffs between teams.",
    },
    {
      title: "After-hours administrative burden",
      description:
        "Unfinished documentation and inbox triage spill into evenings, contributing to burnout and reducing time available for recovery.",
    },
  ];

  return (
    <section className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          The reality of modern clinical work
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {problem.description}
              </p>
            </article>
          ))}
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          Care teams need a unified layer that sits across existing tools to
          organize work, preserve context, and keep patient follow-through
          reliable.
        </p>
      </div>
    </section>
  );
}
