export default function TrustSection() {
  const trustStatements = [
    {
      title: "Human-reviewed workflows by design",
      detail:
        "Workflow outputs are always reviewed by clinicians or designated staff before they are used in live operations.",
    },
    {
      title: "Operational support, not diagnosis",
      detail:
        "ClarityFlow helps coordinate documentation, inbox, follow-up, and handoff work, and does not recommend diagnosis or treatment.",
    },
    {
      title: "No autonomous clinical decision-making",
      detail:
        "The platform does not place orders, diagnose, or execute treatment actions without clinician direction.",
    },
    {
      title: "Privacy-aware workflow design",
      detail:
        "Designed with HIPAA-aware workflows in mind, with data minimization and practical controls aligned to care operations.",
    },
    {
      title: "Encrypted data handling",
      detail:
        "Data is encrypted in transit and at rest, and access patterns are designed to support protected healthcare workflows.",
    },
    {
      title: "Role-based workflow visibility",
      detail:
        "Teams can align workflow visibility by role so clinicians, managers, and coordinators see the work relevant to their responsibilities.",
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
