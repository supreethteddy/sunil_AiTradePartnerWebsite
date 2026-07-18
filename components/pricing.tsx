const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for beginners exploring AI-powered trading.",
    features: [
      "Free demat & trading account",
      "Basic AI trading assistant",
      "Real-time market data",
      "Stocks & ETFs trading",
      "Educational content library",
      "Email support",
    ],
    cta: "Open Free Account",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "For active traders who want full AI capabilities.",
    features: [
      "Everything in Starter",
      "Advanced AI buy/sell signals",
      "Options, futures & forex",
      "Automated trading strategies",
      "Portfolio risk analytics",
      "Priority 24/7 AI support",
      "Technical & fundamental reports",
    ],
    cta: "Start Trading with AI",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For institutions and high-volume professional traders.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI model training",
      "API access & integrations",
      "White-label solutions",
      "SLA-backed uptime guarantee",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-violet-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-violet-200/50">
              <span className="inline-flex bg-linear-to-r from-violet-500 to-violet-200 bg-clip-text text-transparent">
                Pricing
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-accent),var(--color-gray-50),var(--color-brand-light),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-zinc-400">
              Start free and upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="mx-auto grid max-w-sm gap-8 lg:max-w-none lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-px ${
                  plan.highlighted
                    ? "bg-linear-to-b from-violet-500 to-fuchsia-500"
                    : "bg-gray-800"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">
                    Most Popular
                  </div>
                )}
                <div className="flex h-full flex-col rounded-[inherit] bg-background p-6 after:absolute after:inset-0 after:rounded-[inherit] after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div className="relative z-10 flex h-full flex-col">
                    <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                      {plan.name}
                    </h3>
                    <p className="mb-4 text-sm text-zinc-400">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="font-nacelle text-4xl font-semibold text-gray-200">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-zinc-400">{plan.period}</span>
                      )}
                    </div>
                    <ul className="mb-8 grow space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-zinc-400"
                        >
                          <svg
                            className="mt-0.5 shrink-0 fill-violet-500"
                            width={14}
                            height={14}
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 11.5 3 8l1-1 2.5 2.5L12 4l1 1-6.5 6.5Z" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#start-trading"
                      className={`btn w-full text-center ${
                        plan.highlighted
                          ? "bg-accent font-semibold text-black shadow-[0_0_24px_rgba(255,214,0,0.35)] hover:bg-accent-dark"
                          : "bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
