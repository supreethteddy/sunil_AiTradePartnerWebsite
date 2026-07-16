const steps = [
  {
    number: "01",
    title: "Open Your Account",
    description:
      "Complete KYC and open your trading & demat account in minutes. No paperwork, no waiting.",
    tag: "5-Min Setup",
  },
  {
    number: "02",
    title: "Connect & Explore",
    description:
      "Access stocks, options, futures, ETFs, commodities, and forex — all from one unified dashboard.",
    tag: "Multi-Asset",
  },
  {
    number: "03",
    title: "Get AI Insights",
    description:
      "Receive real-time buy/sell signals, technical & fundamental analysis, and personalized market guidance.",
    tag: "AI-Powered",
  },
  {
    number: "04",
    title: "Trade with Confidence",
    description:
      "Execute trades manually or deploy automated strategies with built-in risk management controls.",
    tag: "Smart Execution",
  },
  {
    number: "05",
    title: "Grow & Optimize",
    description:
      "Track portfolio performance, learn with personalized education, and get 24/7 AI support as you scale.",
    tag: "Always On",
  },
];

export default function Workflows() {
  return (
    <section id="how-it-works" className="relative z-10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-indigo-200 bg-clip-text text-transparent">
                How It Works
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
              Your trading journey, simplified
            </h2>
            <p className="text-base text-indigo-200/65 sm:text-lg">
              Five simple steps from account opening to profitable trading —
              guided by AI at every stage.
            </p>
          </div>

          <ol className="mx-auto grid max-w-3xl gap-4 sm:gap-5">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-gray-800/80 bg-gray-900/50 p-4 sm:p-5"
              >
                <div className="flex gap-3 sm:gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-600 to-indigo-600 font-nacelle text-sm font-semibold text-white sm:h-12 sm:w-12 sm:text-base"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="mb-1 inline-block rounded-full bg-gray-800 px-2.5 py-0.5 text-xs text-emerald-400">
                      {step.tag}
                    </span>
                    <h3 className="mb-1.5 font-nacelle text-base font-semibold text-gray-200 sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-indigo-200/65 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
