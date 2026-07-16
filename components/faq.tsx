"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const faqs = [
  {
    question: "How quickly can I open a trading account?",
    answer:
      "You can open your trading and demat account in under 5 minutes. Our paperless KYC process uses Aadhaar-based verification, so there's no paperwork or branch visits required.",
  },
  {
    question: "Is TradeMind AI suitable for beginners?",
    answer:
      "Absolutely. Our AI trading assistant is designed for all skill levels. Beginners get guided explanations, risk warnings, and personalized education, while experienced traders get advanced signals and automation tools.",
  },
  {
    question: "What markets and instruments can I trade?",
    answer:
      "TradeMind AI supports stocks, ETFs, options, futures, commodities, and forex — all from a single unified platform with real-time data and AI-powered analysis for each asset class.",
  },
  {
    question: "How accurate are the AI buy/sell insights?",
    answer:
      "Our AI models analyze technical indicators, fundamental data, market sentiment, and historical patterns to generate insights with confidence scores. While no system guarantees profits, our signals are backtested and continuously improved.",
  },
  {
    question: "Is my money and data secure?",
    answer:
      "Yes. We use bank-grade 256-bit encryption, two-factor authentication, and segregated client accounts. Your funds are held with SEBI-registered custodians, and we never share your data with third parties.",
  },
  {
    question: "Can I use automated trading strategies?",
    answer:
      "Pro and Enterprise plans include automated strategy deployment. You can use pre-built strategies or create custom rules, backtest them on historical data, and let the AI execute trades on your behalf with built-in risk controls.",
  },
  {
    question: "What are the brokerage and hidden charges?",
    answer:
      "Starter accounts have zero brokerage on delivery trades. Pro plans include competitive intraday and F&O rates with no hidden charges. All fees are displayed transparently before you place any order.",
  },
  {
    question: "How does 24/7 AI support work?",
    answer:
      "Our AI assistant is available around the clock via in-app chat. It can help with order status, strategy questions, market explanations, and platform navigation. Pro users also get priority response times.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative z-10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-indigo-200 bg-clip-text text-transparent">
                FAQ
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-lg text-indigo-200/65">
              Everything you need to know before you start trading with AI.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" data-aos="fade-up" data-aos-delay={index * 50}>
                {({ open }) => (
                  <div className="overflow-hidden rounded-2xl bg-gray-800/40 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    <DisclosureButton className="flex w-full items-center justify-between px-6 py-4 text-left">
                      <span className="font-nacelle text-[1rem] font-semibold text-gray-200">
                        {faq.question}
                      </span>
                      <svg
                        className={`shrink-0 fill-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 11 3 6h10l-5 5Z" />
                      </svg>
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-4 text-indigo-200/65">
                      {faq.answer}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
