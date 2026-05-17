"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "Unified patient context",
    desc: "Bring notes, follow-ups, labs, tasks, and communication into one organized workflow layer.",
  },
  {
    title: "AI-assisted documentation",
    desc: "Reduce repetitive charting work with structured summaries and faster clinical note generation.",
  },
  {
    title: "Workflow coordination",
    desc: "Track pending actions, handoffs, and follow-ups without relying on fragmented inbox workflows.",
  },
  {
    title: "Operational visibility",
    desc: "Surface bottlenecks, delays, and workload patterns across care operations in real time.",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-teal-500">
            The solution
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            Built to reduce administrative friction across care teams.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-[17px]">
            ClarityFlow acts as an operational layer that helps clinicians stay
            aligned, organized, and focused throughout the patient journey.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-stone-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-semibold text-teal-700">
                0{i + 1}
              </div>

              <h3 className="mb-2 text-lg font-medium text-stone-900">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-stone-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
