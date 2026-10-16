import { steps } from "@/utils/static";

/**
 * Stacked step → image pairs for small screens. No scroll-sync or tap interaction.
 */
export default function DeviceShowcaseMobile() {
  return (
    <div className="space-y-10">
      <div className="space-y-6 text-left">
        <p className="inline-flex rounded-[239px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[18px] leading-[1.4] text-[#0F172A] sm:text-[20px]">
          Three steps and you are live.
        </p>
        <h2 className="max-w-[560px] text-[32px] font-semibold leading-[1.2] text-[#2B214F] sm:text-[42px] md:text-[50px]">
          Set up once. <br /> Run effortlessly.
        </h2>
        <p className="max-w-[520px] text-lg leading-[1.5] text-[#0F172A] md:text-xl md:leading-[1.4]">
          Map your hospital, onboard your staff, and go live — Cindera fits into your system
          without disrupting it.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col gap-6">
            <article className="w-full overflow-hidden rounded-[20px] border border-transparent bg-[#43317C] px-6 py-8 text-left text-white shadow-[0_12px_40px_rgba(67,49,124,0.28)] sm:px-8 sm:py-9">
              <span className="text-lg font-semibold tracking-wide sm:text-xl">{step.stepLabel}</span>
              <h3 className="mt-4 text-[22px] font-semibold leading-tight md:text-2xl">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed sm:text-lg">{step.description}</p>

              {step.highlightBadge ? (
                <div className="mt-7">
                  <span className="inline-flex rounded-[6px] bg-[#D1FAE5] px-4 py-3 text-base font-medium leading-snug text-[#065F46]">
                    {step.highlightBadge}
                  </span>
                </div>
              ) : (
                <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                  {(step.tags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[6px] bg-[#F8FAFC4D] px-3 py-2 text-sm font-medium leading-none text-white sm:px-4 sm:py-3 sm:text-base"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

            <div className="relative w-full overflow-hidden rounded-[24px]">
              <img
                src={step.image}
                alt={step.imageAlt}
                width={780}
                height={1688}
                className="h-auto w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
