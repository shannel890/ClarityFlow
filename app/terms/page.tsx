export default function TermsPage() {
  return (
    <main className="bg-[#FAFAF8] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
          Terms
        </h1>
        <p className="text-sm leading-relaxed text-stone-700 md:text-base">
          ClarityFlow is provided for educational and portfolio purposes only.
          It is a conceptual exploration of clinical workflow orchestration and
          operational visibility, not a live product or medical device.
        </p>
        <p className="text-sm leading-relaxed text-stone-700 md:text-base">
          Nothing on this site should be used for diagnosis, treatment
          decisions, or real-world clinical operations. Any described workflows,
          pilots, or integrations are illustrative and not production
          commitments.
        </p>
        <p className="text-sm leading-relaxed text-stone-700 md:text-base">
          By viewing this site, you acknowledge that ClarityFlow is a
          systems-thinking artifact and should not be relied upon for clinical,
          operational, or commercial decision-making.
        </p>
      </div>
    </main>
  );
}
