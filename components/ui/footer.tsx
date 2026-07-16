import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gray-950">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#insights">
                  Market Insights
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Markets</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Stocks &amp; ETFs
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Options &amp; Futures
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Commodities
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Forex
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Trading Academy
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Market Blog
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  API Documentation
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  SEBI Registration
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © TradeMind AI
                <span className="text-gray-700"> · </span>
                <a className="text-indigo-200/65 transition hover:text-emerald-400" href="#0">
                  Terms
                </a>
              </p>
              <p className="mb-3 text-xs text-gray-600">
                Investments in securities market are subject to market risks.
                Read all related documents carefully before investing.
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-emerald-500 transition hover:text-emerald-400"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-emerald-500 transition hover:text-emerald-400"
                    href="#0"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 11h3v12h-3V11ZM10 7.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM14 11h2.9v1.6h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V23H20v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95V23h-3V11Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-emerald-500 transition hover:text-emerald-400"
                    href="#0"
                    aria-label="Github"
                  >
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
