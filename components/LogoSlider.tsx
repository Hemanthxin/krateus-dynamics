"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "./icons";
import { usePerView } from "./useSlider";

const logos = [
  { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Firebase", src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
  { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
];

export default function LogoSlider() {
  const perView = usePerView(2, 4, 640);
  const slides = logos.length - perView + 1;
  const [index, setIndex] = useState(0);
  const current = Math.min(index, slides - 1);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (Math.min(i, slides - 1) + 1) % slides), 3500);
    return () => clearInterval(id);
  }, [slides]);

  return (
    <section className="border-y border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          What powers our digital products
        </p>
        <div className="relative mt-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {logos.map((l) => (
                <div
                  key={l.name}
                  className="flex shrink-0 items-center justify-center px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.name}
                    className="h-20 w-full rounded-lg border border-border bg-white object-contain p-3 opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous clients"
            onClick={() => setIndex((current - 1 + slides) % slides)}
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next clients"
            onClick={() => setIndex((current + 1) % slides)}
            className="absolute right-0 top-1/2 flex h-9 w-9 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
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
