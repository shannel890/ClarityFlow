const challenges = [
  "Fragmented clinical systems create disconnected queues across EHR, inbox, referrals, and scheduling tools.",
  "Hidden coordination work accumulates between visits as teams reconcile tasks, ownership, and timing by hand.",
  "Clinicians absorb cognitive switching costs as they move between systems to reconstruct what still needs action.",
  "Unresolved follow-ups and handoff dependencies are easy to miss when responsibility is spread across teams.",
  "Without shared operational visibility, it is difficult to see workflow status, bottlenecks, and pending closeout work.",
  "Care-team coordination becomes harder as callback, referral, and documentation tasks cross roles and settings.",
];

export default function WhyWorkflowIntelligenceSection() {
  return (
    <section
      id="workflow-intelligence"
      className="border-y border-stone-100 bg-stone-50 px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
          Why workflow intelligence matters
        </h2>
        <p className="max-w-4xl text-sm leading-relaxed text-stone-700 md:text-base">
          In healthcare delivery, coordination failure is often operational, not
          clinical. The core challenge is not generating more notes, but
          maintaining reliable execution across fragmented systems, distributed
          teams, and time-sensitive follow-up obligations.
        </p>
        <div className="max-w-4xl rounded-lg border border-stone-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-500">
            Intended operational outcomes
          </p>
          <p className="mt-2 text-sm font-medium text-stone-700">
            Designed to support:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-stone-700 md:text-base">
            <li>reduced after-hours documentation burden</li>
            <li>improved follow-up visibility</li>
            <li>clearer task ownership</li>
            <li>fewer coordination blind spots</li>
          </ul>
        </div>
        <p className="max-w-4xl text-sm leading-relaxed text-stone-700 md:text-base">
          ClarityFlow is positioned as workflow orchestration infrastructure, an
          operational visibility layer, and a coordination system for clinical
          workflows. It differs from AI note-taking by focusing on shared
          workflow state, ownership, and closeout reliability, without making
          autonomous or diagnostic decisions.
        </p>
        <ul className="grid gap-3 md:grid-cols-2">
          {challenges.map((challenge) => (
            <li
              key={challenge}
              className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm leading-relaxed text-stone-700"
            >
              {challenge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
