export default function Hero() {
  return (
    <section className="bg-slate-50 px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Spend less time charting and more time with patients.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            ClarityFlow organizes clinical notes, tasks, and follow-ups into one
            AI-assisted workflow so care teams can stay focused on care quality.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-300 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Watch Overview
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Patient Summary
              </p>
              <p className="mt-2 text-sm font-medium text-slate-900">
                Maria Jensen · Post-op day 3
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Recovery stable, pain level decreasing, discharge planning in
                progress.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Daily Tasks
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Review overnight labs</li>
                <li>• Update care note for rounds</li>
                <li>• Confirm medication reconciliation</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Follow-up Reminders
              </p>
              <div className="mt-2 flex items-center justify-between rounded-md bg-emerald-50 px-3 py-2">
                <span className="text-sm text-slate-700">
                  Call patient within 48 hours
                </span>
                <span className="text-xs font-medium text-emerald-700">
                  On Track
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
