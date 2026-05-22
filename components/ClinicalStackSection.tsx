export default function ClinicalStackSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            How ClarityFlow fits into your clinical stack
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-[17px]">
            ClarityFlow does not replace your EHR. It organizes the work around
            it: pending notes, patient messages, follow-ups, handoffs, and
            operational signals that often get scattered across systems.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-stone-200 bg-[#FAFAF8] p-6 text-sm font-medium leading-relaxed text-stone-700 md:text-base">
          EHR + inbox + scheduling + labs + follow-ups{" "}
          <span className="font-semibold text-teal-700">
            → ClarityFlow workflow intelligence layer
          </span>{" "}
          → clinician cockpit + team coordination view
        </div>
      </div>
    </section>
  );
}
