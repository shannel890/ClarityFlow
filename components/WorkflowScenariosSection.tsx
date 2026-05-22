const scenarios = [
  {
    title: "Morning clinic overload",
    points: [
      "Unread patient messages",
      "Pending lab reviews",
      "Fragmented scheduling updates",
      "Overdue follow-ups",
      "Incomplete notes",
    ],
    summary:
      "ClarityFlow creates one coordinated queue with operational visibility, task prioritization, and escalation visibility so care teams can align quickly before the first visit.",
  },
  {
    title: "Follow-up coordination breakdown",
    points: [
      "Unresolved referrals",
      "Unclear ownership",
      "Incomplete handoffs",
      "Delayed follow-ups",
    ],
    summary:
      "ClarityFlow reduces coordination gaps by clarifying ownership across care transitions, surfacing stalled items, and keeping continuity visible for managers and clinicians.",
  },
  {
    title: "End-of-day documentation burden",
    points: [
      "Unfinished notes",
      "Inbox backlog",
      "Delayed callbacks",
      "Fragmented reminders",
    ],
    summary:
      "ClarityFlow groups unresolved work into actionable closeout views, reducing fragmented workflows and after-hours charting pressure before teams sign off.",
  },
];

const views = [
  {
    title: "Clinician cockpit",
    detail:
      "At-a-glance status for pending notes, inbox load, urgent follow-ups, and care transitions requiring same-day attention.",
  },
  {
    title: "Follow-up coordination panel",
    detail:
      "Shared ownership board for referrals, callbacks, and handoffs with clear accountability and escalation visibility.",
  },
  {
    title: "Workflow prioritization view",
    detail:
      "Operational lane view that ranks today’s high-risk tasks, delays, and blockers for team-level task prioritization.",
  },
];

export default function WorkflowScenariosSection() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-teal-500">
            Workflow scenarios
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            Designed for real clinic-day coordination
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <article
              key={scenario.title}
              className="rounded-xl border border-stone-200 bg-white p-5"
            >
              <h3 className="text-base font-semibold text-stone-900">
                {scenario.title}
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-stone-600">
                {scenario.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {scenario.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {views.map((view) => (
            <article
              key={view.title}
              className="rounded-xl border border-stone-200 bg-white p-5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-teal-600">
                Placeholder workflow view
              </p>
              <h3 className="mt-2 text-base font-semibold text-stone-900">
                {view.title}
              </h3>
              <div className="mt-3 rounded-lg border border-stone-200 bg-stone-50 px-4 py-6 text-center text-sm text-stone-500">
                Screenshot container
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {view.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
