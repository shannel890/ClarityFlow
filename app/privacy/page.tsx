export default function PrivacyPage() {
  return (
    <main className="bg-[#FAFAF8] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
          Privacy
        </h1>
        <p className="text-sm leading-relaxed text-stone-700 md:text-base">
          ClarityFlow is a concept workflow platform created for healthcare
          systems exploration and portfolio demonstration purposes. It is not a
          production clinical system.
        </p>
        <p className="text-sm leading-relaxed text-stone-700 md:text-base">
          This site does not process live patient data, protected health
          information, or operational clinic records. Any workflows, patient
          scenarios, or data representations shown are illustrative and
          conceptual.
        </p>
        <p className="text-sm leading-relaxed text-stone-700 md:text-base">
          Basic visit analytics may be used to understand how the portfolio is
          viewed, but no identifiable clinical, patient, or user data is
          collected or stored.
        </p>
      </div>
    </main>
  );
}
