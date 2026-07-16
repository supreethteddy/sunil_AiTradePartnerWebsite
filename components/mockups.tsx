import Image from "next/image";

const insights = [
  {
    image:
      "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844719/trading_rqwchw.jpg",
    title: "Trade from Anywhere",
    tag: "Live Trading",
    description:
      "Modern traders use AI-powered platforms on the go. Real-time charts, instant order execution, and smart alerts — all from your laptop.",
  },
  {
    image:
      "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844786/Stock_Market_Institute_in_Delhi_Build_Your_Career_in_Trading_zslf4i.jpg",
    title: "Build Your Trading Career",
    tag: "Education",
    description:
      "Professional institutes offer structured programs in technical analysis, risk management, and live market practice to launch your trading career.",
  },
  {
    image:
      "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844746/Trading_Lounge_Scenes_bimalinstitute_mh3pks.jpg",
    title: "Hands-On Trading Lounges",
    tag: "Practice",
    description:
      "Dedicated trading lounges give students real-market exposure with mentor guidance, live screens, and collaborative learning environments.",
  },
  {
    image:
      "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844762/Trading_event_nyyzus.jpg",
    title: "Trading Events & Seminars",
    tag: "Community",
    description:
      "Industry events bring together traders, analysts, and educators to share strategies, market outlooks, and the latest AI-driven trading tools.",
  },
  {
    image:
      "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844830/In_many_top_universities_abroad_design_is_intentionally_simple__taggwn.jpg",
    title: "World-Class Learning Spaces",
    tag: "Global",
    description:
      "Top universities abroad emphasize clean, focused classroom design — the same clarity TradeMind AI brings to your trading dashboard.",
  },
  {
    image:
      "https://res.cloudinary.com/dij4v6vtx/image/upload/v1778844772/TERPERCAYA_0852-5877-3400_Pelatihan_Digital_Marketing_Organik_di_Surakarta_bzeu6x.jpg",
    title: "Professional Training Programs",
    tag: "Growth",
    description:
      "Structured training programs — from digital skills to financial literacy — help professionals stay competitive in fast-moving markets.",
  },
];

export default function Mockups() {
  return (
    <section id="insights" className="relative z-10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-emerald-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-emerald-200/50">
              <span className="inline-flex bg-linear-to-r from-emerald-500 to-indigo-200 bg-clip-text text-transparent">
                Market Insights
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-emerald-300),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Learn, practice, and grow as a trader
            </h2>
            <p className="text-lg text-indigo-200/65">
              From trading lounges to global seminars — see how the ecosystem
              around modern trading is evolving.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-900/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-xs font-medium text-white">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 font-nacelle text-[1rem] font-semibold text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-indigo-200/65">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
