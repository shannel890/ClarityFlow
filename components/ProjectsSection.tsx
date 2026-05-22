export default function ProjectsSection() {
  const projects = [
    {
      title: "ClarityFlow",
      summary:
        "Workflow orchestration infrastructure exploration focused on clinician cockpit design, day-start alignment, and follow-up visibility in healthcare settings.",
      badge: "Core systems concept",
    },
    {
      title: "Remote HealthAI Role Matcher",
      summary:
        "Healthcare workflow pipeline experiment in structured signal collection, ranking logic, and operational handoff visibility.",
      githubUrl:
        "https://github.com/arapkirui513-hub/remote-healthai-role-matcher",
    },
    {
      title: "Clinically Clear Copy",
      summary:
        "Healthcare communication systems exploration focused on clarity, trust, and operational workflow usability.",
      linkUrl: "https://shannel890.github.io/wizz1/",
      linkLabel: "View Writing Portfolio",
    },
  ];

  return (
    <section id="systems-work" className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Systems Work
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-700">
          Related workflow concepts and healthcare systems explorations that
          inform ClarityFlow&apos;s orchestration approach, operational visibility
          model, and care-team coordination design.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {project.title}
                </h3>
                {project.badge && (
                  <span
                    className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-medium text-teal-800"
                    aria-label={`Project status: ${project.badge}`}
                  >
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {project.summary}
              </p>
              {(project.githubUrl || project.linkUrl) && (
                <a
                  href={project.githubUrl ?? project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title}: ${project.linkLabel ?? "View GitHub"} (opens in a new tab)`}
                  className="mt-4 inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors duration-200 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2"
                >
                  {project.linkLabel ?? "View GitHub"}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
