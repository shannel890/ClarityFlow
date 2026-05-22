"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
} as const;

export default function Hero() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">

        {/* Left — copy */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-teal-400">
            AI-powered clinical workflow
          </p>
          <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-stone-900 md:text-[52px]">
            A clinician workflow cockpit for less after-hours charting and fewer
            missed follow-ups.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-stone-600 md:text-[17px]">
            ClarityFlow sits on top of your EHR, inbox, scheduling tools, and
            follow-up workflows to organize clinical work into one operational
            layer for care teams.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              type="button"
              className="rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-teal-800"
            >
              Book a workflow walkthrough
            </button>
            <button
              type="button"
              className="rounded-lg border border-stone-200 bg-transparent px-5 py-3 text-sm font-medium text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-900"
            >
              View workflow scenarios
            </button>
          </div>
        </motion.div>

        {/* Right — patient card */}
        <motion.div
          className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card"
          initial="hidden"
          animate="show"
          variants={cardFade}
        >
          {/* Card chrome bar */}
          <div className="flex items-center gap-2 border-b border-[#CCEADF] bg-teal-50 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5A7A7]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FACA75]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#97C459]" />
            <span className="ml-2 text-xs font-medium text-teal-800">
              Patient Summary
            </span>
          </div>

          <div className="space-y-4 p-5">
            {/* Patient info */}
            <div>
              <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-[11px] font-medium text-teal-800">
                Post-op · Day 3
              </span>
              <p className="mt-2 text-base font-medium text-stone-900">
                Maria Jensen
              </p>
              <p className="text-sm text-stone-500">
                General Surgery · Dr. Patel
              </p>
            </div>

            {/* Summary */}
            <div className="rounded-lg border-l-[3px] border-teal-400 bg-stone-50 px-4 py-3 text-sm leading-relaxed text-stone-700">
              Recovery stable, pain level decreasing. Discharge planning in
              progress. Medication reconciliation pending sign-off.
            </div>

            {/* Tasks */}
            <ul className="divide-y divide-stone-100">
              {[
                { label: "Review overnight labs", done: true },
                { label: "Update care note for rounds", done: false },
                { label: "Confirm medication reconciliation", done: false },
              ].map((task) => (
                <li key={task.label} className="flex items-center gap-3 py-2.5">
                  <span
                    className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                      task.done
                        ? "bg-teal-400 text-white"
                        : "border-[1.5px] border-stone-200"
                    }`}
                  >
                    {task.done && "✓"}
                  </span>
                  <span className="text-sm text-stone-700">{task.label}</span>
                </li>
              ))}
            </ul>

            {/* Follow-up */}
            <div className="flex items-center justify-between rounded-lg border border-[#D5F0E6] bg-white px-4 py-2.5">
              <span className="text-sm text-stone-600">
                Call patient within 48 hrs
              </span>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-medium text-teal-800">
                On track
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-500">
          Who it’s for
        </p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">
          Built for clinic managers, care coordination leads, physician
          champions, and outpatient teams managing high-volume documentation,
          follow-ups, and handoffs.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Clinic managers",
            "Care coordination leads",
            "Physician champions",
            "Outpatient specialty teams",
          ].map((audience) => (
            <div
              key={audience}
              className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-700"
            >
              {audience}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
