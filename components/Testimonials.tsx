"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "./icons";
import { usePerView } from "./useSlider";

const items = [
  {
    quote:
      "You work directly with the builders. We eliminate account managers and corporate telephone games to keep alignment fast, clear, and precise.",
    title: "Direct Founder Access",
    sub: "Communication, No Middlemen",
  },
  {
    quote:
      "We engineer fast, SEO-optimized digital products built with long-term maintainability in mind. No bloat, no heavy templates.",
    title: "Performance by Design",
    sub: "Engineering, Sub-Second Delivery",
  },
  {
    quote:
      "We intentionally limit the number of projects we take on concurrently. This guarantees your product receives our undivided architectural attention.",
    title: "Quality Over Quantity",
    sub: "Exclusivity, Boutique Focus",
  },
  {
    quote:
      "We don't just deploy and disappear. We stay available after launch and continue supporting products as they evolve in the real world.",
    title: "Long-Term Partnership",
    sub: "Ownership, Continuous Reliability",
  },
];

export default function Testimonials() {
  const perView = usePerView(1, 2, 1024);
  const slides = items.length - perView + 1;
  const [index, setIndex] = useState(0);
  const current = Math.min(index, slides - 1);

  return (
    <section className="bg-secondary/40 px-6 py-16 lg:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Philosophy</span>
          <h2 className="mt-3 font-[var(--font-jakarta)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Founders Choose Krateus
          </h2>
        </div>
        <div className="relative mt-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {items.map((t) => (
                <div key={t.title} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm">
                    <Quote className="h-6 w-6 text-primary/40" />
                    <div className="mt-3 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-muted-foreground">“{t.quote}”</p>
                    <div className="mt-6 border-t border-border pt-4">
                      <div className="font-semibold text-foreground">{t.title}</div>
                      <div className="text-sm text-muted-foreground">{t.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((current - 1 + slides) % slides)}
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:-translate-x-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((current + 1) % slides)}
            className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:translate-x-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: slides }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
