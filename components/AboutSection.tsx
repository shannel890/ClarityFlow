export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          About
        </h2>
        <p className="text-sm leading-relaxed text-slate-700 md:text-base">
          ClarityFlow is built from a biomedical engineering perspective centered
          on clinical workflow systems, healthcare operations, and AI-assisted
          coordination. The focus is practical workflow intelligence that helps
          care teams see work clearly, coordinate reliably, and reduce
          operational friction.
        </p>
      </div>
    </section>
  );
}
