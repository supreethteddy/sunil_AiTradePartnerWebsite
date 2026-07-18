"use client";

import { useState, type FormEvent } from "react";

export default function LeadForm({ id = "start-trading" }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Client lead capture — ready to wire to API / CRM later
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Lead submitted:", data);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 600);
  };

  if (submitted) {
    return (
      <div
        id={id}
        className="rounded-2xl border border-violet-500/40 bg-[#12082a] p-6 text-center shadow-[0_0_40px_rgba(124,58,237,0.35)] sm:p-8"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <h3 className="mb-2 font-nacelle text-xl font-semibold text-white">
          Thanks! We&apos;ve got your details
        </h3>
        <p className="mb-6 text-sm text-zinc-400">
          Our team will contact you shortly to help open your free trading
          account.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-accent hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <div
      id={id}
      className="rounded-2xl border border-violet-500/40 bg-[#12082a] p-5 shadow-[0_0_40px_rgba(124,58,237,0.35)] sm:p-6"
    >
      <div className="mb-5">
        <h3 className="font-nacelle text-lg font-semibold text-white">
          Start Trading Free
        </h3>
        <p className="mt-1 text-sm text-zinc-400">
          Share your details and we&apos;ll help you open an account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="form-input w-full rounded-xl border-violet-800/60 bg-violet-950/40 text-white placeholder:text-zinc-500 focus:border-violet-500 focus:ring-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Phone / WhatsApp <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="10-digit mobile number"
            pattern="[0-9+\-\s]{10,15}"
            className="form-input w-full rounded-xl border-violet-800/60 bg-violet-950/40 text-white placeholder:text-zinc-500 focus:border-violet-500 focus:ring-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="form-input w-full rounded-xl border-violet-800/60 bg-violet-950/40 text-white placeholder:text-zinc-500 focus:border-violet-500 focus:ring-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            City <span className="text-accent">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Your city"
            className="form-input w-full rounded-xl border-violet-800/60 bg-violet-950/40 text-white placeholder:text-zinc-500 focus:border-violet-500 focus:ring-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="experience"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Trading Experience
          </label>
          <select
            id="experience"
            name="experience"
            defaultValue=""
            className="form-select w-full rounded-xl border-violet-800/60 bg-violet-950/40 text-white focus:border-violet-500 focus:ring-violet-500"
          >
            <option value="" disabled>
              Select experience level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced / Professional</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(255,214,0,0.35)] transition hover:bg-accent-dark disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Start Trading Free"}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-zinc-500">
          By submitting, you agree to be contacted about opening a trading
          account. Your details are kept secure.
        </p>
      </form>
    </div>
  );
}
