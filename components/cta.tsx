export default function Cta() {
  return (
    <section className="relative z-10 border-t border-violet-900/40 bg-background">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="absolute left-1/2 top-1/2 -z-10 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[80px]" aria-hidden="true" />
            <h2
              className="pb-4 font-nacelle text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              data-aos="fade-up"
            >
              Ready to trade smarter with{" "}
              <span className="text-accent">AI</span>?
            </h2>
            <p
              className="mb-8 text-base text-zinc-400 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Join thousands of traders who&apos;ve upgraded their strategy.
              Open your free account in minutes and let AI guide your next move.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(124,58,237,0.55)] transition hover:brightness-110 sm:w-auto"
                href="#start-trading"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                Start Trading with AI
              </a>
              <a
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(255,214,0,0.35)] transition hover:bg-accent-dark sm:w-auto"
                href="#start-trading"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Open Your Free Trading Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
