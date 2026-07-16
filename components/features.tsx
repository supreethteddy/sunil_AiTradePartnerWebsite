const features = [
  {
    title: "Instant Account Opening",
    description:
      "Open your trading & demat account in minutes with paperless KYC and instant verification.",
    icon: (
      <path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h8v2H8V8Zm0 4h5v2H8v-2Z" />
    ),
  },
  {
    title: "AI Trading Assistant",
    description:
      "Your personal AI co-pilot for beginners and pros — answers questions, suggests strategies, and explains market moves.",
    icon: (
      <path d="M12 2a7 7 0 0 0-4.95 11.95L2 22l8.05-5.05A7 7 0 1 0 12 2Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-3 5h6v2H9v-2Z" />
    ),
  },
  {
    title: "Live Market Analysis",
    description:
      "Real-time market scanning with AI-powered guidance on trends, breakouts, and key price levels.",
    icon: (
      <path d="M3 17l6-6 4 4 8-10v3h2V3h-8v2h3L13 13l-4-4-8 8z" />
    ),
  },
  {
    title: "Buy/Sell Insights",
    description:
      "AI-generated entry and exit signals with confidence scores, backed by multi-factor analysis.",
    icon: (
      <path d="M7 14l5-5 5 5H7Zm5-12C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
    ),
  },
  {
    title: "Technical & Fundamental Analysis",
    description:
      "Deep-dive charts, indicators, earnings data, and AI-synthesized research reports in one place.",
    icon: (
      <path d="M3 3h2v18H3V3Zm4 10h2v8H7v-8Zm4-6h2v14h-2V7Zm4 4h2v10h-2V11Zm4-8h2v18h-2V3Z" />
    ),
  },
  {
    title: "Portfolio & Risk Management",
    description:
      "Track holdings, measure risk exposure, set stop-losses, and get rebalancing recommendations.",
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm0 2.18l7 3.11v5.71c0 4.54-3.07 8.83-7 9.93-3.93-1.1-7-5.39-7-9.93V6.29l7-3.11ZM11 7v6l4.25 2.52.75-1.23L13 12.27V7h-2Z" />
    ),
  },
  {
    title: "Automated Strategies",
    description:
      "Deploy pre-built or custom algo strategies — set rules, backtest, and let AI execute for you.",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 14.59V13H8v-2h3V7.41L16.59 12 11 16.59Z" />
    ),
  },
  {
    title: "Multi-Asset Trading",
    description:
      "Trade options, futures, stocks, ETFs, commodities, and forex — all from a single platform.",
    icon: (
      <path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h10v2H4v-2ZM20 16h2v4h-4v-2h2v-2Z" />
    ),
  },
  {
    title: "Personalized Education",
    description:
      "Learn at your pace with AI-curated courses, market explainers, and interactive trading simulations.",
    icon: (
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3Zm0 2.18L18.82 9 12 12.82 5.18 9 12 5.18ZM3 13v6h6v-2H5v-4H3Zm16 0v4h-4v2h6v-6h-2Z" />
    ),
  },
  {
    title: "24/7 AI Support",
    description:
      "Get instant answers anytime — from order status to strategy questions, our AI never sleeps.",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12h2a8 8 0 1 1 8 8v2c5.52 0 10-4.48 10-10S17.52 2 12 2Zm-1 6h2v5h-2V8Zm0 6h2v2h-2v-2Z" />
    ),
  },
  {
    title: "Secure & Lightning Fast",
    description:
      "Bank-grade encryption, two-factor auth, and sub-millisecond order execution you can trust.",
    icon: (
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z" />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-indigo-200 bg-clip-text text-transparent">
                Platform Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
              Everything you need to trade with an edge
            </h2>
            <p className="text-base text-indigo-200/65 sm:text-lg">
              A complete AI-powered trading ecosystem — from your first trade to
              advanced automated strategies.
            </p>
          </div>
          {/* AI Trading flow graphic */}
          <div className="mx-auto mb-8 max-w-4xl md:mb-12" data-aos="fade-up">
            <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-linear-to-br from-gray-900 via-gray-950 to-gray-900 p-3 sm:p-6 md:p-10">
              {/* Ambient glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"
                aria-hidden="true"
              />

              <svg
                viewBox="0 0 720 280"
                className="relative z-10 mx-auto h-auto w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="AI trading flow: Analyze, AI Insight, Execute, Grow"
              >
                {/* Connection paths */}
                <path
                  d="M140 140 C 200 140, 220 80, 280 80"
                  stroke="url(#flowGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.7"
                />
                <path
                  d="M440 80 C 500 80, 520 140, 580 140"
                  stroke="url(#flowGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.7"
                />
                <path
                  d="M360 160 C 360 200, 360 210, 360 220"
                  stroke="url(#flowGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />

                <defs>
                  <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                  <linearGradient id="nodeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#111827" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Node 1 — Analyze */}
                <g transform="translate(40, 85)">
                  <rect width="100" height="110" rx="14" fill="url(#nodeGrad)" stroke="#374151" strokeWidth="1" />
                  {/* Mini candlesticks */}
                  <line x1="22" y1="28" x2="22" y2="62" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="17" y="35" width="10" height="20" rx="1" fill="#10b981" />
                  <line x1="40" y1="22" x2="40" y2="55" stroke="#ef4444" strokeWidth="1.5" />
                  <rect x="35" y="30" width="10" height="18" rx="1" fill="#ef4444" />
                  <line x1="58" y1="25" x2="58" y2="58" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="53" y="32" width="10" height="16" rx="1" fill="#10b981" />
                  <line x1="76" y1="20" x2="76" y2="50" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="71" y="26" width="10" height="14" rx="1" fill="#10b981" />
                  <text x="50" y="88" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontWeight="600" fontFamily="system-ui">
                    ANALYZE
                  </text>
                  <text x="50" y="102" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="system-ui">
                    Charts &amp; Data
                  </text>
                </g>

                {/* Node 2 — AI Insight (center top) */}
                <g transform="translate(280, 30)">
                  <rect width="160" height="100" rx="16" fill="url(#nodeGrad)" stroke="#10b981" strokeWidth="1.5" filter="url(#glow)" />
                  {/* AI brain / circuit icon */}
                  <circle cx="80" cy="38" r="18" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1.5" />
                  <circle cx="80" cy="38" r="8" fill="#10b981" />
                  <circle cx="80" cy="38" r="3" fill="#ecfdf5" />
                  <line x1="62" y1="38" x2="55" y2="38" stroke="#10b981" strokeWidth="1.5" />
                  <line x1="98" y1="38" x2="105" y2="38" stroke="#10b981" strokeWidth="1.5" />
                  <line x1="80" y1="20" x2="80" y2="13" stroke="#10b981" strokeWidth="1.5" />
                  <line x1="68" y1="26" x2="62" y2="20" stroke="#10b981" strokeWidth="1.5" />
                  <line x1="92" y1="26" x2="98" y2="20" stroke="#10b981" strokeWidth="1.5" />
                  <circle cx="55" cy="38" r="2.5" fill="#818cf8" />
                  <circle cx="105" cy="38" r="2.5" fill="#818cf8" />
                  <circle cx="80" cy="13" r="2.5" fill="#818cf8" />
                  <text x="80" y="72" textAnchor="middle" fill="#e5e7eb" fontSize="12" fontWeight="600" fontFamily="system-ui">
                    AI INSIGHT
                  </text>
                  <text x="80" y="86" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="system-ui">
                    Buy / Sell Signals
                  </text>
                </g>

                {/* Node 3 — Execute */}
                <g transform="translate(580, 85)">
                  <rect width="100" height="110" rx="14" fill="url(#nodeGrad)" stroke="#374151" strokeWidth="1" />
                  {/* Lightning / execute */}
                  <path
                    d="M58 22 L42 48 H52 L46 72 L68 42 H56 Z"
                    fill="#818cf8"
                    fillOpacity="0.9"
                  />
                  <text x="50" y="88" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontWeight="600" fontFamily="system-ui">
                    EXECUTE
                  </text>
                  <text x="50" y="102" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="system-ui">
                    Instant Orders
                  </text>
                </g>

                {/* Node 4 — Grow (bottom center) */}
                <g transform="translate(285, 195)">
                  <rect width="150" height="70" rx="14" fill="url(#nodeGrad)" stroke="#374151" strokeWidth="1" />
                  {/* Rising chart line */}
                  <polyline
                    points="28,50 48,42 65,45 85,28 110,32 130,18"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="130" cy="18" r="3" fill="#10b981" />
                  <text x="75" y="62" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontWeight="600" fontFamily="system-ui">
                    GROW PORTFOLIO
                  </text>
                </g>

                {/* Floating signal badges */}
                <g transform="translate(175, 55)">
                  <rect width="52" height="22" rx="11" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                  <text x="26" y="15" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="600" fontFamily="system-ui">
                    BUY
                  </text>
                </g>
                <g transform="translate(490, 55)">
                  <rect width="52" height="22" rx="11" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
                  <text x="26" y="15" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontWeight="600" fontFamily="system-ui">
                    SELL
                  </text>
                </g>
              </svg>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} data-aos="fade-up">
                <svg
                  className="mb-3 fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-indigo-200/65">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
