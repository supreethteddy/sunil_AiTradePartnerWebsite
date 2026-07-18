export const metadata = {
  title: "Start Trading Free — TradeMind AI",
  description:
    "Share your details to open a free trading account with TradeMind AI.",
};

import LeadForm from "@/components/lead-form";

export default function SignUp() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto mb-10 max-w-lg text-center">
            <h1 className="pb-3 font-nacelle text-3xl font-semibold text-white md:text-4xl">
              Start Trading <span className="text-accent">Free</span>
            </h1>
            <p className="text-zinc-400">
              Fill in your details and our team will help you open your trading
              &amp; demat account.
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <LeadForm id="signup-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
