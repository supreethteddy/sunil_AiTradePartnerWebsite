"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Insights", href: "#insights" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-violet-900/40 bg-[#0a0118]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-4">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link
              href="/signin"
              className="hidden text-sm font-medium text-zinc-300 transition hover:text-white sm:inline"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-black shadow-[0_0_20px_rgba(255,214,0,0.35)] transition hover:bg-accent-dark sm:px-4 sm:text-sm"
            >
              Start Trading Free
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-300 hover:bg-violet-950 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                {mobileOpen ? (
                  <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" />
                ) : (
                  <path d="M2 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H3Z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-violet-900/40 py-3 lg:hidden">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-violet-950 hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/signin"
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-violet-950 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
