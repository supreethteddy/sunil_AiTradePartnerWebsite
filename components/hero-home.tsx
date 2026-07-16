import Image from "next/image";

const HERO_IMAGE =
  "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778846245/ExtraMile_Play_Raises_USD_500K_Seed_Round_to_Scale_Its_Gamified_Employee_Engagement_Platform_l5kszu.jpg";

export default function HeroHome() {
  return (
    <section id="hero" className="relative z-10 overflow-hidden bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AI-Powered Trading Platform
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
              Trade Smarter with AI at Every Step
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl text-indigo-200/65">
                From opening your trading account to executing winning strategies
                — TradeMind AI guides beginners and professionals with real-time
                market insights, portfolio analysis, and 24/7 intelligent support.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-emerald-600 to-emerald-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
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
                  className="btn relative mb-4 w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:mb-0 sm:w-auto"
                  href="/signup"
                >
                  Open Your Free Trading Account
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                No minimum deposit · Account setup in under 5 minutes ·
                Bank-grade security
              </p>
            </div>
          </div>

          <div className="mx-auto flex max-w-4xl justify-center">
            <div className="w-full overflow-hidden rounded-2xl border border-gray-800/80 shadow-2xl shadow-emerald-500/5">
              <Image
                src={HERO_IMAGE}
                alt="ExtraMile Play team celebrating USD 500K seed round"
                width={1104}
                height={576}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
