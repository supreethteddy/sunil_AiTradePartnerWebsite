"use client";

import { useState } from "react";
import Image from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Rahul S.",
    company: "Day Trader",
    role: "Pro Trader",
    content:
      "I went from losing money on gut feelings to making consistent profits. The AI buy/sell signals with confidence scores changed everything for me. Setup took 4 minutes.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg02,
    name: "Priya M.",
    company: "Options Trader",
    role: "Part-time Trader",
    content:
      "As a working professional, I don't have hours to analyze charts. TradeMind's AI does the heavy lifting and alerts me to opportunities. My returns improved 3x in 6 months.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg03,
    name: "Arjun K.",
    company: "Swing Trader",
    role: "Active Investor",
    content:
      "The portfolio risk management alone is worth it. I finally understand my exposure across asset classes. The AI assistant explains complex concepts in plain language.",
    categories: [1, 2, 3],
  },
  {
    img: TestimonialImg04,
    name: "Sneha R.",
    company: "Beginner Investor",
    role: "New Trader",
    content:
      "I had zero trading experience. The personalized education path and 24/7 AI support helped me place my first confident trade within a week. Couldn't recommend more.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg05,
    name: "Vikram P.",
    company: "Algo Trader",
    role: "Quant Trader",
    content:
      "Deployed three automated strategies in my first month. The backtesting tools are solid and execution is lightning fast. This is what modern trading should feel like.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg06,
    name: "Ananya D.",
    company: "F&O Trader",
    role: "Derivatives Trader",
    content:
      "Switched from my old broker and never looked back. Real-time AI guidance during market hours, especially for options, has been a game-changer for my P&L.",
    categories: [1, 3],
  },
];

const categories = [
  { id: 1, label: "All Traders" },
  { id: 2, label: "Beginners" },
  { id: 3, label: "Professionals" },
];

export default function Testimonials() {
  const [category, setCategory] = useState(1);

  const visible = testimonials.filter((t) => t.categories.includes(category));

  return (
    <section className="relative z-10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Trusted by traders across India
            </h2>
            <p className="text-lg text-indigo-200/65">
              See how TradeMind AI is helping beginners and professionals trade
              smarter every day.
            </p>
          </div>

          <div className="flex justify-center pb-10 md:pb-14">
            <div className="inline-flex flex-wrap justify-center gap-1 rounded-[1.25rem] bg-gray-800/40 p-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    category === cat.id
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  aria-pressed={category === cat.id}
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-gray-800/80 bg-gray-900/60 p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    {testimonial.role}
                  </span>
                  <div className="flex text-emerald-400" aria-hidden="true">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mb-6 grow text-[15px] leading-relaxed text-gray-300">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t border-gray-800/80 pt-4">
                  <Image
                    className="rounded-full"
                    src={testimonial.img}
                    width={40}
                    height={40}
                    alt={testimonial.name}
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-200">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-indigo-200/65">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
