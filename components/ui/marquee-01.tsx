import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";

const reviews = [
  {
    name: "Rahul S.",
    username: "@daytrader",
    body: "I went from gut-feel trades to consistent setups. TradeMind AI buy/sell signals with confidence scores changed how I enter the market.",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "Priya M.",
    username: "@optionspro",
    body: "As a working professional I can't stare at charts all day. The AI alerts and live guidance help me catch opportunities without missing work.",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "Arjun K.",
    username: "@swingtrader",
    body: "Portfolio risk tools alone are worth it. I finally understand my exposure, and the AI explains complex moves in plain language.",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "Sneha R.",
    username: "@newinvestor",
    body: "Zero trading experience. Personalized education and 24/7 AI support helped me place my first confident trade within a week.",
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "Vikram P.",
    username: "@algotrader",
    body: "Deployed three automated strategies in month one. Backtesting is solid and execution is fast — this is modern trading done right.",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "Ananya D.",
    username: "@fotrader",
    body: "Switched from my old broker and never looked back. Real-time AI guidance during market hours has been a game-changer for F&O.",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "Rahul S.",
    username: "@daytrader2",
    body: "Account opening took minutes. From KYC to first AI insight, TradeMind felt built for Indian traders who want speed and clarity.",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-64 cursor-pointer overflow-hidden border-border bg-card p-4 shadow-none">
      <CardContent className="flex flex-col gap-2 p-0">
        <div className="flex flex-row items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-full object-cover"
            width={32}
            height={32}
            alt={name}
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-foreground">{name}</p>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <p className="line-clamp-3 text-sm text-foreground">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background" />
    </div>
  );
}
