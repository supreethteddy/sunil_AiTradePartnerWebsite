"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const HERO_IMAGE =
  "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778846245/ExtraMile_Play_Raises_USD_500K_Seed_Round_to_Scale_Its_Gamified_Employee_Engagement_Platform_l5kszu.jpg";

export default function HeroHome() {
  return (
    <section id="hero" className="relative z-10 overflow-hidden bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ContainerScroll
          titleComponent={
            <>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                AI-Powered Trading Platform
              </div>
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl lg:text-[5.5rem] lg:leading-none">
                Trade Smarter with AI
                <br />
                <span className="text-emerald-300">at Every Step</span>
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="mb-6 text-base text-indigo-200/65 sm:mb-8 sm:text-xl">
                  From opening your trading account to executing winning
                  strategies — TradeMind AI guides beginners and professionals
                  with real-time market insights, portfolio analysis, and 24/7
                  intelligent support.
                </p>
                <div className="mx-auto flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-0">
                  <a
                    className="btn group w-full bg-linear-to-t from-emerald-600 to-emerald-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                    href="/signup"
                  >
                    <span className="relative inline-flex items-center">
                      Start Trading with AI
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="/signup"
                  >
                    Open Your Free Trading Account
                  </a>
                </div>
                <p className="mt-5 text-xs text-gray-500 sm:mt-6 sm:text-sm">
                  No minimum deposit · Account setup in under 5 minutes ·
                  Bank-grade security
                </p>
              </div>
            </>
          }
        >
          <Image
            src={HERO_IMAGE}
            alt="TradeMind AI community and platform highlight"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
            priority
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
