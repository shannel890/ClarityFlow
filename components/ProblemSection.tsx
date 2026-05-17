"use client";

import { motion } from "framer-motion";

const problems = [
  {
    num: "01",
    title: "Documentation overload",
    desc: "Hours each day completing notes, coding details, and chart updates that pull time away from direct patient care.",
  },
  {
    num: "02",
    title: "Fragmented patient information",
    desc: "Patient context split across EHR views, inboxes, referrals, and external tools — no reliable, complete picture.",
  },
  {
    num: "03",
    title: "Constant context switching",
    desc: "Clinicians switch between tabs, systems, and threads just to complete a single workflow, increasing cognitive load and error risk.",
  },
  {
    num: "04",
    title: "After-hours administrative burden",
    desc: "Unfinished documentation and inbox triage spill into evenings, contributing to burnout and reduced recovery time.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-y border-stone-100 bg-stone-50 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-teal-400">
          The challenge
        </p>
        <h2 className="mb-4 font-serif text-4xl leading-snug tracking-tight text-stone-900">
          The reality of modern clinical work
        </h2>
        <p className="mb-12 max-w-lg text-base leading-relaxed text-stone-600">
          Care teams face a growing administrative burden that competes with
          time that should go to patients.
        </p>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-stone-200 sm:grid-cols-2">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              className="bg-white px-7 py-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="mb-3 text-[11px] font-medium tracking-widest text-stone-200">
                {p.num}
              </p>
              <h3 className="mb-2 text-base font-medium text-stone-900">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
