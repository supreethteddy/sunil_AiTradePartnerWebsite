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
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-indigo-200 bg-clip-text text-transparent">
                How It Works
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Your trading journey, simplified
            </h2>
            <p className="text-lg text-indigo-200/65">
              Five simple steps from account opening to profitable trading —
              guided by AI at every stage.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-8 top-0 hidden h-full w-px bg-linear-to-b from-emerald-500/50 via-indigo-500/30 to-transparent md:left-1/2 md:block md:-translate-x-px"
              aria-hidden="true"
            />
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <div className="relative rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                        <div className="relative z-10">
                          <div
                            className={`mb-3 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                          >
                            <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                              <span className="bg-linear-to-r from-emerald-500 to-indigo-200 bg-clip-text text-transparent">
                                {step.tag}
                              </span>
                            </span>
                          </div>
                          <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                            {step.title}
                          </h3>
                          <p className="text-indigo-200/65">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 top-6 z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-600 to-indigo-600 font-nacelle text-xl font-semibold text-white shadow-lg shadow-emerald-500/20 md:left-1/2 md:-translate-x-1/2">
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
