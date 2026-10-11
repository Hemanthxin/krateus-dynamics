"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades/slides content in as it enters the viewport. Elements are tagged on the
 * client only, so the page stays fully visible without JavaScript.
 */
const TARGETS = [
  "section > div > div",
  "section > div > p",
  "section > div > h2",
  "section > div > span",
  "section > div > a",
  "section > div > div > div",
  "footer > div > div > div",
].join(",");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    // The hero is above the fold and has its own entrance animation.
    const hero = main.querySelector("section.hero");
    const nodes = Array.from(main.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => !hero?.contains(el) && !el.closest("canvas") && !el.closest("header"),
    );

    // Skip nested targets whose ancestor is already being revealed.
    const set = new Set(nodes);
    const top = nodes.filter((el) => {
      let p = el.parentElement;
      while (p && p !== main) {
        if (set.has(p)) return false;
        p = p.parentElement;
      }
      return true;
    });

    top.forEach((el) => {
      // Stagger siblings of grids / flex rows.
      const idx = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
      el.style.setProperty("--reveal-delay", `${Math.min(idx, 6) * 70}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });

    // Also stagger the cards inside revealed grids.
    const cards = Array.from(
      main.querySelectorAll<HTMLElement>("section .grid > div, section .flex-wrap > div"),
    ).filter((el) => !hero?.contains(el) && !el.classList.contains("reveal"));
    cards.forEach((el) => {
      if (el.closest(".reveal")) return;
      const idx = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
      el.style.setProperty("--reveal-delay", `${Math.min(idx, 6) * 80}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
