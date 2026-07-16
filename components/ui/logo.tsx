import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="TradeMind AI">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-indigo-600">
        <svg
          className="h-4 w-4 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 17l6-6 4 4 8-10v3h2V3h-8v2h3L13 13l-4-4-8 8z" />
        </svg>
      </div>
      <span className="font-nacelle text-base font-semibold text-gray-200 sm:text-lg">
        TradeMind<span className="text-emerald-400">AI</span>
      </span>
    </Link>
  );
}
