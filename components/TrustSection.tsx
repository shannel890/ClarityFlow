export default function TrustSection() {
  const trustStatements = [
    {
      title: "Clinical judgment stays with the care team",
      detail:
        "ClarityFlow supports clinical work and documentation, but final decisions remain with licensed clinicians.",
    },
    {
      title: "Every output is reviewable before use",
      detail:
        "Drafts are presented for clinician review and can be edited before they are saved or shared.",
    },
    {
      title: "Patient data is protected by default",
      detail:
        "Data is encrypted in transit and at rest, and patient data is not used to train foundation models.",
    },
    {
      title: "No autonomous clinical decision-making",
      detail:
        "The system does not place orders, diagnose, or execute treatment actions without clinician direction.",
    },
    {
      title: "Built to fit institutional safeguards",
      detail:
        "Workflows are designed to align with healthcare operations, governance, and local policy requirements.",
    },
    {
      title: "Users retain full control",
      detail:
        "Clinicians and organizations decide what to accept, revise, or discard at every step.",
    },
  ];

  return (
    <section className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Built with clinical trust in mind
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {trustStatements.map((statement) => (
            <article
              key={statement.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {statement.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {statement.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
