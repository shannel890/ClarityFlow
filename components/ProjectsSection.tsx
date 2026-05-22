export default function ProjectsSection() {
  const projects = [
    {
      title: "ClarityFlow",
      summary:
        "AI-assisted clinical workflow platform that helps care teams organize notes, tasks, and follow-ups with less documentation friction.",
      badge: "Flagship project",
    },
    {
      title: "Remote HealthAI Role Matcher",
      summary:
        "A Python-based workflow pipeline that collects, filters, scores, and ranks remote healthcare AI roles.",
    },
    {
      title: "Clinically Clear Copy",
      summary:
        "A healthcare UX writing and communication systems portfolio focused on clarity, trust, and operational usability.",
    },
  ];

  return (
    <section id="projects" className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Featured Projects
        </h2>

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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
