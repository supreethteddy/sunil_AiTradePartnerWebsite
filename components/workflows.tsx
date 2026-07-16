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
            <p className="px-1 text-base text-indigo-200/65 sm:text-lg">
              Five simple steps from account opening to profitable trading —
              guided by AI at every stage.
            </p>
          </div>

          <div className="mx-auto flex max-w-2xl flex-col gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-800 bg-gray-900 p-5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-lg bg-emerald-600 px-2.5 py-1 font-nacelle text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-emerald-500/30 px-2.5 py-0.5 text-xs text-emerald-400">
                    {step.tag}
                  </span>
                </div>
                <h3 className="mb-2 font-nacelle text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
