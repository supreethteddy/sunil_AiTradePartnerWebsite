const benefits = [
  {
    traditional: "Hours of manual chart analysis",
    trademind: "AI analyzes markets in seconds",
  },
  {
    traditional: "Generic tips from unreliable sources",
    trademind: "Data-driven buy/sell insights with confidence scores",
  },
  {
    traditional: "Complex onboarding with paperwork",
    trademind: "Open account in minutes, paperless KYC",
  },
  {
    traditional: "Limited support during market hours",
    trademind: "24/7 AI assistant always available",
  },
  {
    traditional: "Separate tools for analysis & execution",
    trademind: "All-in-one platform from research to trade",
  },
  {
    traditional: "One-size-fits-all education",
    trademind: "Personalized learning paths for your skill level",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative z-10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-indigo-200 bg-clip-text text-transparent">
                Why TradeMind AI
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Beyond traditional trading platforms
            </h2>
            <p className="text-lg text-indigo-200/65">
              See how AI-powered trading gives you an unfair advantage over
              conventional brokers and tools.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-800/80">
            <div className="grid grid-cols-2 bg-gray-900/50 text-sm font-medium">
              <div className="border-b border-r border-gray-800/80 px-6 py-4 text-gray-500">
                Traditional Platforms
              </div>
              <div className="border-b border-gray-800/80 bg-emerald-500/5 px-6 py-4 text-emerald-400">
                TradeMind AI
              </div>
            </div>
            {benefits.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-b border-gray-800/80 last:border-b-0"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex items-center gap-3 border-r border-gray-800/80 px-6 py-5 text-indigo-200/50">
                  <svg
                    className="shrink-0 fill-gray-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <span className="line-through decoration-gray-600">
                    {row.traditional}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-emerald-500/5 px-6 py-5 text-gray-200">
                  <svg
                    className="shrink-0 fill-emerald-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 11.5 3 8l1-1 2.5 2.5L12 4l1 1-6.5 6.5Z" />
                  </svg>
                  {row.trademind}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3" data-aos="fade-up">
            {[
              { stat: "2M+", label: "Trades Executed" },
              { stat: "94%", label: "User Satisfaction" },
              { stat: "<50ms", label: "Order Latency" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-gray-800/40 p-6 text-center before:pointer-events-none"
              >
                <div className="bg-linear-to-r from-emerald-400 to-indigo-300 bg-clip-text font-nacelle text-3xl font-semibold text-transparent">
                  {item.stat}
                </div>
                <div className="mt-1 text-sm text-indigo-200/65">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
