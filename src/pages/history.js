import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const analyses = [
  {
    date: "Sep 17, 2026",
    time: "10:29 AM",
    status: "Abnormal",
    condition: "Pitting Nails",
    details: "Possible: Psoriasis, Eczema, Autoimmune conditions",
  },
  {
    date: "Sep 17, 2026",
    time: "10:29 AM",
    status: "Normal",
    condition: "Healthy Nails",
    details: "No abnormal signs detected.",
  },
];

export default function History() {
  return (
    <div className="min-h-full flex-1 bg-blue-100 text-stone-900">
      <Navbar />

      <main className="mx-auto w-full max-w-[1202px] px-6 pb-12 pt-10 sm:px-10 lg:px-0 lg:pt-12">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Analysis History
        </h1>

        <p className="mt-3 text-lg font-light text-black">
          View past nail analyses and results
        </p>

        <section className="mt-9 overflow-hidden rounded-[20px] bg-white">
          <div className="hidden grid-cols-[1.2fr_1fr_1.15fr_1.8fr_.65fr] gap-6 bg-zinc-300/30 px-10 py-5 text-lg font-bold text-black md:grid">
            <div>Date &amp; Time</div>
            <div>Image</div>
            <div>Result</div>
            <div>Details</div>
            <div>View</div>
          </div>

          <div className="divide-y divide-black/40">
            {analyses.map((analysis) => (
              <article
                key={`${analysis.condition}-${analysis.time}`}
                className="grid gap-5 px-8 py-8 md:grid-cols-[1.2fr_1fr_1.15fr_1.8fr_.65fr] md:items-center md:gap-6 md:px-10"
              >
                <div className="text-base text-black">
                  <span className="font-semibold md:hidden">
                    Date &amp; Time:{" "}
                  </span>

                  {analysis.date}
                  <br />
                  {analysis.time}
                </div>

                <div className="flex h-24 w-20 items-center justify-center rounded-[20px] border border-black bg-white text-[10px] font-bold text-black">
                  Image
                </div>

                <div>
                  <span className="mr-2 font-semibold md:hidden">
                    Result:
                  </span>

                  <span
                    className={`inline-block rounded-full px-5 py-1 text-base font-semibold ${
                      analysis.status === "Normal"
                        ? "bg-green-400/20 text-green-700"
                        : "bg-red-500/20 text-red-600"
                    }`}
                  >
                    {analysis.status}
                  </span>
                </div>

                <div>
                  <h2 className="text-base font-bold text-black">
                    {analysis.condition}
                  </h2>

                  <p className="mt-2 max-w-xs text-xs text-black">
                    {analysis.details}
                  </p>
                </div>

                <div>
                  <Link
                    to="/reports"
                    className="inline-flex rounded-lg border border-blue-300 bg-blue-300/50 px-4 py-2 text-xs font-bold text-sky-950 transition-colors hover:bg-blue-300"
                  >
                    View
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <nav
          aria-label="History pagination"
          className="mt-10 flex justify-end gap-3"
        >
          <button
            type="button"
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-blue-300 bg-neutral-50 text-lg text-sky-950 transition-colors hover:bg-blue-100"
          >
            ←
          </button>

          <button
            type="button"
            aria-current="page"
            className="h-10 w-10 rounded-[10px] bg-sky-700 text-xs font-semibold text-white"
          >
            1
          </button>

          <button
            type="button"
            className="h-10 w-10 rounded-[10px] border border-blue-300 bg-neutral-50 text-xs font-semibold text-black transition-colors hover:bg-blue-100"
          >
            2
          </button>

          <button
            type="button"
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-blue-300 bg-neutral-50 text-lg text-sky-950 transition-colors hover:bg-blue-100"
          >
            →
          </button>
        </nav>
      </main>
    </div>
  );
}