import TestimonialMarquee from "@/components/ui/marquee-01";

export default function Testimonials() {
  return (
    <section className="relative z-10 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-accent),var(--color-gray-50),var(--color-brand-light),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
              Trusted by traders across India
            </h2>
            <p className="text-base text-zinc-400 sm:text-lg">
              See how TradeMind AI is helping beginners and professionals trade
              smarter every day.
            </p>
          </div>

          <div className="w-full">
            <TestimonialMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
