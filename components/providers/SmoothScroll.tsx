"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.085,
      duration: 1.25,
      wheelMultiplier: 0.95,
      touchMultiplier: 0.9,
    });

    const update = (timeInSeconds: number) => {
      lenis.raf(timeInSeconds * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
