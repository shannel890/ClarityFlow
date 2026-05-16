"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, ListChecks, UserRound } from "lucide-react";

const dashboardCards = [
  {
    title: "Patient Summary",
    value: "4 High Priority",
    detail: "Triage list updated 5 min ago",
    icon: UserRound,
  },
  {
    title: "Daily Priorities",
    value: "8 Tasks Due",
    detail: "2 require physician sign-off",
    icon: ListChecks,
  },
  {
    title: "Documentation Queue",
    value: "11 Notes Pending",
    detail: "Average completion time down 14%",
    icon: FileText,
  },
  {
    title: "Handover Summary",
    value: "3 Critical Follow-ups",
    detail: "Shift transition at 18:00",
    icon: ClipboardList,
  },
];

export default function Hero() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-pill border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">
          Healthcare Workflow Clarity
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink-800 md:text-5xl">
          Reduce documentation overload without losing clinical confidence.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-ink-700">
          ClarityFlow is a trust-centered care workflow concept that helps teams prioritize follow-ups, streamline note handoffs, and keep patient context visible.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button className="rounded-pill bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-500">
            Explore Product Flow
          </button>
          <button className="rounded-pill border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition hover:border-brand-200 hover:text-brand-600">
            View Concept Deck
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50 p-5 shadow-soft"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Care Workflow Snapshot</h2>
          <span className="rounded-pill bg-accent-100 px-3 py-1 text-xs font-medium text-accent-500">Live Concept</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {dashboardCards.map(({ title, value, detail, icon: Icon }) => (
            <article key={title} className="rounded-card border border-slate-200 bg-white p-4 shadow-card">
              <Icon className="mb-3 h-4 w-4 text-brand-600" />
              <h3 className="text-sm font-semibold text-ink-800">{title}</h3>
              <p className="mt-1 text-base font-medium text-slate-900">{value}</p>
              <p className="mt-1 text-xs leading-5 text-ink-700">{detail}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
