import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Reports() {
  return (
    <div className="min-h-full flex-1 bg-blue-100 text-stone-900">
      <Navbar />

      <main className="mx-auto w-full max-w-[1298px] px-6 pb-12 pt-10 sm:px-10 lg:px-0 lg:pt-12">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Analysis Done
        </h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-[384px_minmax(0,1fr)] lg:items-start">
          <section className="rounded-[20px] bg-white p-9">
            <div className="flex h-80 items-center justify-center rounded-[20px] border border-black text-xl font-extralight text-black">
              Image Placeholder
            </div>

            <h2 className="mt-5 text-xl font-semibold text-black">
              Image Analyzed
            </h2>

            <p className="mt-3 text-base text-black">
              Uploaded on Oct. 4, 2026 - 10:44 AM
            </p>
          </section>

          <div className="flex flex-col gap-8">
            <section className="rounded-[20px] border border-red-500 bg-red-100 px-12 py-7">
              <p className="text-base font-semibold text-rose-800">
                Condition Detected
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-5">
                <h2 className="text-3xl font-semibold text-black sm:text-4xl">
                  Pitting Nails
                </h2>

                <span className="rounded-full bg-red-500/20 px-5 py-1 text-base font-semibold text-red-600">
                  Abnormal
                </span>
              </div>

              <p className="mt-6 max-w-xl text-base text-black">
                Nail image shows small depressions or pits on the surface,
                which is a sign of pitting.
              </p>
            </section>

            <section className="rounded-[20px] bg-white px-12 py-8">
              <h2 className="text-base font-semibold text-black">
                Possible Systemic Conditions
              </h2>

              <div className="mt-6 text-base text-black">
                <p>Pitting nails may be associated with:</p>

                <ul className="mt-5 list-disc space-y-2 pl-5">
                  <li>Psoriasis</li>
                  <li>Autoimmune diseases</li>
                  <li>Eczema</li>
                </ul>
              </div>

              <div className="mt-8 border-t border-indigo-800/10 pt-5">
                <h2 className="text-base font-semibold text-black">
                  What this means
                </h2>

                <p className="mt-5 text-base text-black">
                  Pitting nails can be a sign of an underlying health
                  condition, this includes autoimmune or inflammatory
                  disorders.
                </p>
              </div>
            </section>

            <div className="rounded-[10px] bg-sky-400/10 px-5 py-4 text-xs text-black">
              <span className="font-semibold text-indigo-800">
                Note:{" "}
              </span>
              This AI analysis is for informational and educational purposes
              only and is not a substitute for professional medical advice.
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/"
            className="flex h-16 w-56 items-center justify-center rounded-xl bg-sky-400 text-xl font-bold text-white transition-colors hover:bg-sky-500"
          >
            Continue
          </Link>
        </div>
      </main>
    </div>
  );
}