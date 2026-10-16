"use client";

import { steps } from "@/utils/static";
import clsx from "clsx";
import type { KeyboardEvent } from "react";

type DeviceShowcaseDesktopProps = {
  active: number;
  setActive: (index: number) => void;
};

export default function DeviceShowcaseDesktop({ active, setActive }: DeviceShowcaseDesktopProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-20">
      <div className="order-2 space-y-8 text-left lg:order-1">
        <div className="space-y-6">
          <p className="inline-flex rounded-[239px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[20px] leading-[1.4] text-[#0F172A]">
            Three steps and you are live.
          </p>
          <h2 className="max-w-[560px] text-[42px] font-semibold leading-[1.2] text-[#2B214F] md:text-[50px] lg:text-6xl">
            Set up once. <br /> Run effortlessly.
          </h2>
          <p className="max-w-[520px] text-xl leading-[1.5] text-[#0F172A] md:leading-[1.4]">
            Map your hospital, onboard your staff, and go live — Cindera fits into your system
            without disrupting it.
          </p>
        </div>

        <div className="flex flex-col gap-3" role="tablist" aria-label="Setup steps">
          {steps.map((step, index) => {
            const isActive = active === index;
            const handleStepSelect = () => {
              setActive(index);
            };
            const handleStepKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActive(index);
              }
            };

            return (
              <div
                key={step.id}
                id={`device-step-panel-${index}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`device-step-image-${index}`}
                tabIndex={0}
                onClick={handleStepSelect}
                onKeyDown={handleStepKeyDown}
                className={clsx(
                  "w-full cursor-pointer overflow-hidden rounded-[20px] border text-left transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43317C] focus-visible:ring-offset-2",
                  isActive
                    ? "border-transparent bg-[#43317C] px-6 py-8 text-white shadow-[0_12px_40px_rgba(67,49,124,0.28)] md:px-8 md:py-9"
                    : "border-[#E8E4F2] bg-[#F5F3FA] px-8 py-4 text-[#2B214F]",
                )}
              >
                <span
                  className={clsx(
                    "text-xl font-semibold tracking-wide",
                    isActive ? "text-white" : "text-[#2B214F]",
                  )}
                >
                  {step.stepLabel}
                </span>

                <div
                  className={clsx(
                    "grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out",
                    isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <h3 className="text-[22px] font-semibold leading-tight md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed">{step.description}</p>

                    {step.highlightBadge ? (
                      <div className="mt-7">
                        <span className="inline-flex rounded-[6px] bg-[#D1FAE5] px-4 py-3 text-base font-medium leading-snug text-[#065F46]">
                          {step.highlightBadge}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-7 flex w-[85%] flex-wrap gap-4">
                        {(step.tags ?? []).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[6px] bg-[#F8FAFC4D] px-4 py-3 text-base font-medium leading-none text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="relative w-full lg:sticky lg:top-24">
          <div className="relative min-h-[440px] w-full overflow-hidden rounded-[24px] md:min-h-[560px] lg:min-h-[780px]">
            {steps.map((step, index) => {
              const isActive = active === index;
              const isPassed = index < active;

              return (
                <img
                  key={step.image}
                  id={`device-step-image-${index}`}
                  src={step.image}
                  alt={step.imageAlt}
                  width={780}
                  height={1688}
                  className={clsx(
                    "absolute inset-0 h-full w-full object-cover object-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "translate-y-0 opacity-100"
                      : isPassed
                        ? "-translate-y-[24%] opacity-0"
                        : "translate-y-[24%] opacity-0",
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
