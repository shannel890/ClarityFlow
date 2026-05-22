const challenges = [
  "Fragmented healthcare systems create disconnected work queues across EHR, inbox, and scheduling tools.",
  "Care teams absorb operational coordination burden that is often hidden between visits and handoffs.",
  "Clinicians face constant cognitive switching between systems, delaying focused clinical work.",
  "Workflow visibility gaps make it hard to see unresolved follow-ups before and after clinic sessions.",
  "Unclear ownership and handoff friction increase the risk of delayed callbacks, referrals, and closeout tasks.",
];

export default function WhyWorkflowIntelligenceSection() {
  return (
    <section className="border-y border-stone-100 bg-stone-50 px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
          Why workflow intelligence matters
        </h2>
        <p className="max-w-4xl text-sm leading-relaxed text-stone-700 md:text-base">
          ClarityFlow is designed as workflow orchestration infrastructure and an
          operational visibility layer for care teams. It supports clinician
          workflow coordination across documentation, inbox, follow-up, and
          handoff work without acting as autonomous diagnostic AI.
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
