"use client";

import { useState } from "react";
import { ArrowUpRight } from "./icons";

const projects = [
  {
    name: "Pavithra Beauty Parlour",
    category: "Beauty & Wellness",
    blurb: "Elegant booking and services showcase",
    image: "/images/portfolio/beauty-parlour.avif",
    href: "https://pavithra-beauty-parl-k97f.bolt.host/",
  },
  {
    name: "Vinod Resort",
    category: "Hospitality",
    blurb: "Luxury room booking & resort management",
    image: "/images/portfolio/resort.avif",
    href: "https://vinod-resort-next-js-xxn1.bolt.host/",
  },
  {
    name: "Vyshaka Resturant",
    category: "Food & Beverage",
    blurb: "Digital menu and table reservation platform",
    image: "/images/portfolio/resturant.avif",
    href: "https://vyshaka-restaurant-w-s7ub.bolt.host/",
  },
  {
    name: "Krateus International School",
    category: "Education",
    blurb: "Student portal and curriculum showcase",
    image: "/images/portfolio/school-portfolio.avif",
    href: "https://krateus-international-school.web.app/",
  },
];

const categories = ["All", ...projects.map((p) => p.category)];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="px-6 py-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Portfolio</span>
          <h2 className="mt-3 font-[var(--font-jakarta)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Premium Industry Templates
          </h2>
          <p className="mt-4 text-muted-foreground">
            Production-ready layouts built for the industries we know best — customizable, fast to deploy, and
            engineered for conversion.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-12 flex w-full flex-wrap justify-center gap-6">
          {shown.map((p) => (
            <div
              key={p.name}
              className="group flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-emerald-900/5 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.name} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex h-5 w-fit items-center justify-center rounded-4xl bg-white/90 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-foreground">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-4">
                  <button
                    type="button"
                    className="group/btn inline-flex h-8 w-full shrink-0 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium whitespace-nowrap transition-all hover:bg-muted hover:text-foreground"
                  >
                    Show Preview
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
