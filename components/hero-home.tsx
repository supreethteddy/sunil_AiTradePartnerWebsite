import Image from "next/image";

const HERO_IMAGE =
  "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778846245/ExtraMile_Play_Raises_USD_500K_Seed_Round_to_Scale_Its_Gamified_Employee_Engagement_Platform_l5kszu.jpg";

export default function HeroHome() {
  return (
    <section id="hero" className="relative z-10 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[300px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Left copy */}
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              India&apos;s Own AI-Powered Trading Ecosystem
            </div>

            <h1 className="pb-5 font-nacelle text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              The Future Belongs To Those Who{" "}
              <span className="text-accent">Trade</span> Today
            </h1>

            <p className="mb-8 text-base text-zinc-400 sm:text-lg">
              From opening your trading account to executing winning strategies —
              TradeMind AI guides beginners and professionals with real-time
              market insights, portfolio analysis, and 24/7 intelligent support.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/signup"
                className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(124,58,237,0.55)] transition hover:brightness-110 sm:w-auto"
              >
                Start Trading Free
              </a>
              <a
                href="#insights"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-violet-500/40 bg-violet-950/40 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/60 hover:bg-violet-900/40 sm:w-auto"
              >
                <svg className="h-4 w-4 fill-accent" viewBox="0 0 20 20">
                  <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.34-5.89a1.5 1.5 0 0 0 0-2.54L6.3 2.84Z" />
                </svg>
                Watch Demo
              </a>
            </div>

            <p className="mt-5 text-xs text-zinc-500">
              No minimum deposit · Account setup in under 5 minutes · Bank-grade
              security
            </p>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-violet-600/20 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-violet-500/40 bg-[#12082a] p-2 shadow-[0_0_40px_rgba(124,58,237,0.35)]">
              <div className="mb-2 flex items-center justify-between px-2 pt-1">
                <span className="text-xs font-medium text-zinc-400">
                  TradeMind AI
                </span>
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
                  LIVE
                </span>
              </div>
              <Image
                src={HERO_IMAGE}
                alt="TradeMind AI platform highlight"
                width={1400}
                height={720}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
