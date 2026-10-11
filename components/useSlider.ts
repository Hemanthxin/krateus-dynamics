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

/** Horizontal swipe handlers: calls onSwipe(-1 | 1) for a drag past the threshold. */
export function useSwipe(onSwipe: (dir: -1 | 1) => void, threshold = 40) {
  const [start, setStart] = useState<{ x: number; y: number } | null>(null);
  return {
    onTouchStart: (e: React.TouchEvent) => setStart({ x: e.touches[0].clientX, y: e.touches[0].clientY }),
    onTouchEnd: (e: React.TouchEvent) => {
      if (!start) return;
      const dx = e.changedTouches[0].clientX - start.x;
      const dy = e.changedTouches[0].clientY - start.y;
      setStart(null);
      if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) onSwipe(dx < 0 ? 1 : -1);
    },
  };
}
