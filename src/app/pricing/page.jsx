import React from "react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    desc: "For personal projects and exploration.",
    featured: false,
    cta: "Get started",
    href: "/signup",
    features: [
      { text: "50 photo uploads", included: true },
      { text: "Public gallery", included: true },
      { text: "Basic search", included: true },
      { text: "Private albums", included: false },
      { text: "Download originals", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    desc: "For creators who share and grow their portfolio.",
    featured: true,
    badge: "Most popular",
    cta: "Upgrade to Pro",
    href: "/signup?plan=pro",
    features: [
      { text: "2,000 photo uploads", included: true },
      { text: "Public & private albums", included: true },
      { text: "Advanced search & tags", included: true },
      { text: "Download originals", included: true },
      { text: "Custom profile URL", included: true },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Studio",
    price: "$24",
    period: "/ month",
    desc: "For professional photographers and studios.",
    featured: false,
    cta: "Get Studio",
    href: "/signup?plan=studio",
    features: [
      { text: "Unlimited uploads", included: true },
      { text: "All Pro features", included: true },
      { text: "Client delivery links", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Team members (3 seats)", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

const PricingPage = () => {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <p className="text-center text-xs tracking-widest uppercase text-gray-400 mb-2">
        Plans & pricing
      </p>
      <h1 className="text-center text-3xl font-medium text-gray-900 mb-2">
        Pay for what you use
      </h1>
      <p className="text-center text-base text-gray-500 mb-12">
        Start free. Upgrade when your gallery grows.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl p-6 flex flex-col ${
              plan.featured
                ? "border-2 border-blue-500 bg-white"
                : "border border-gray-200 bg-white"
            }`}
          >
            {/* Badge */}
            {plan.badge ? (
              <span className="inline-block text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-md mb-4 w-fit">
                {plan.badge}
              </span>
            ) : (
              <span className="block h-6 mb-4" />
            )}

            {/* Tier & Price */}
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
              {plan.name}
            </p>
            <p className="text-4xl font-medium text-gray-900 leading-none mb-1">
              {plan.price}
              <span className="text-sm font-normal text-gray-400 ml-1">
                {plan.period}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2 mb-5 min-h-[40px]">
              {plan.desc}
            </p>

            <hr className="border-gray-100 mb-5" />

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-6 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f.text}
                  className={`flex items-center gap-2 text-sm ${
                    f.included ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {f.included ? (
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-gray-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  )}
                  {f.text}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href={plan.href}>
              <button
                className={`w-full py-2.5 rounded-lg text-sm font-medium transition cursor-pointer ${
                  plan.featured
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "border border-gray-300 text-gray-800 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-gray-400 mt-10">
        All plans include SSL, Vercel CDN, and Google/GitHub login.{" "}
        <Link href="/contact" className="text-blue-500 hover:underline">
          Need a custom plan?
        </Link>
      </p>
    </section>
  );
};

export default PricingPage;