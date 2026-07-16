export const metadata = {
  title: "TradeMind AI — AI-Powered Stock Market Platform",
  description:
    "Trade smarter with AI. Open a trading account in minutes, get real-time market analysis, buy/sell insights, portfolio management, and 24/7 AI support.",
};

import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
import Mockups from "@/components/mockups";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflows />
      <Features />
      <Benefits />
      <Mockups />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
