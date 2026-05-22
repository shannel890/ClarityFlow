export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#FAFAF8] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl rounded-xl border border-stone-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
          Contact
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm leading-relaxed text-stone-700 md:text-base">
              Open to discussions around:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-stone-700 md:text-base">
              <li>healthcare workflow systems</li>
              <li>operational coordination tooling</li>
              <li>workflow intelligence concepts</li>
              <li>
                product and systems-thinking roles in healthcare technology
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-stone-700 md:text-base">
              ClarityFlow is a concept workflow platform created for healthcare
              systems exploration and workflow design discussion.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
            <p className="text-sm font-semibold text-stone-900">Kevin Kirui</p>
            <p className="text-xs text-stone-600">
              Healthcare AI Product Systems Specialist
            </p>
            <div className="mt-3 space-y-2 text-sm text-stone-700">
              <a
                href="mailto:kiruikevin388@gmail.com"
                className="block text-teal-700 transition-colors hover:text-teal-900"
              >
                kiruikevin388@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-kirui-ba9593275/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="block text-teal-700 transition-colors hover:text-teal-900"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/arapkirui513-hub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                className="block text-teal-700 transition-colors hover:text-teal-900"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
