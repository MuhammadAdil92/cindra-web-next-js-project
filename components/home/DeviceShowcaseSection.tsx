"use client";

import DeviceShowcaseDesktop from "@/components/home/DeviceShowcaseDesktop";
import DeviceShowcaseMobile from "@/components/home/DeviceShowcaseMobile";
import { steps } from "@/utils/static";
import { useEffect, useRef, useState } from "react";

function useIsLg() {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isLg;
}

export default function DeviceShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const isLg = useIsLg();

  useEffect(() => {
    if (!isLg) return;

    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const trackStart = viewportHeight * 0.2;
      const trackEnd = rect.height - viewportHeight * 0.65;

      if (rect.top > trackStart) {
        setActive(0);
        return;
      }

      if (rect.bottom < viewportHeight * 0.35) {
        setActive(steps.length - 1);
        return;
      }

      const rawProgress = (trackStart - rect.top) / Math.max(trackEnd, 1);
      const progress = Math.min(Math.max(rawProgress, 0), 0.9999);
      const nextIndex = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length),
      );

      setActive(nextIndex);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isLg]);

  return (
    <section ref={sectionRef} className="px-4 py-10 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="lg:hidden">
          <DeviceShowcaseMobile />
        </div>

        <div className="hidden lg:block">
          <DeviceShowcaseDesktop active={active} setActive={setActive} />
        </div>
      </div>
    </section>
  );
}
