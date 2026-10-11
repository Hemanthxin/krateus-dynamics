"use client";

import { useEffect, useState } from "react";

/** Slides-per-view that follows the viewport width. */
export function usePerView(small: number, large: number, breakpoint: number) {
  const [perView, setPerView] = useState(large);
  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= breakpoint ? large : small);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [small, large, breakpoint]);
  return perView;
}
