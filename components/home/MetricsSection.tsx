import React from "react";

type MetricCard = {
  title: React.ReactNode;
  description: string;
  background: string;
  border: string;
  iconBg: string;
  iconSrc: string;
};

const metricCards: MetricCard[] = [
  {
    title: <>HCAHPS <br className="hidden md:block" /> Responsiveness</>,
    description:
      "Staff responsiveness is one of the lowest-scoring HCAHPS domains at ~68% top-box nationally. Cindera directly targets this metric with tracked, timed, accountable response workflows.",
    background: "#F1F0F8",
    border: "#B9B3DD",
    iconBg: "#B9B3DD",
    iconSrc: "/assets/8-1075/hcahps.svg",
  },
  {
    title: <>Patient Fall <br className="hidden md:block" /> Reduction</>,
    description:
      "38-47% of hospital falls occur during bathroom and toileting activities. Faster bathroom assistance response times directly reduce fall risk and associated liability.",
    background: "#ECFDF5",
    border: "#A7F3D0",
    iconBg: "#A7F3D0",
    iconSrc: "/assets/8-1075/fall-reduction.svg",
  },
  {
    title: <>Nurse Burnout & <br className="hidden md:block" /> Retention</>,
    description:
      "58% of US nurses report daily burnout. By routing non nursing requests away from RNs, Cindera reduces cognitive load and lets nurses focus on clinical work.",
    background: "#FFF8ED",
    border: "#FCDBAC",
    iconBg: "#FCDBAC",
    iconSrc: "/assets/8-1075/burnout.svg",
  },
];

export default function MetricsSection() {
  return (
    <section className="mx-auto container px-4 py-20 ">
      <div className="space-y-[60px]">
        <div className="space-y-6 text-left md:text-center">
          <p className="inline-flex items-center justify-center rounded-[239px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[18px] md:text-[20px] leading-[1.4] text-[#2B214F]">
            Built for the Metrics That Matter
          </p>
          <h2 className="mx-auto max-w-[1320px] text-[36px] font-semibold leading-[1.2] text-[#2B214F] md:text-[62px]">
            Designed around the outcomes
            <br className="hidden md:block" /> hospital leadership measures
          </h2>
          <p className="mx-auto text-base max-w-[492px] md:text-[20px] text-[#0F172A]">
            Every feature in Cindera traces back to a measurable hospital performance indicator.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {metricCards.map((card) => (
            <article
              key={card.title as string}
              className="flex h-full flex-col gap-6 rounded-[20px] border p-8 md:p-11"
              style={{ backgroundColor: card.background, borderColor: card.border }}
            >
              <div
                className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-[10px]"
                style={{ backgroundColor: card.iconBg }}
              >
                <img src={card.iconSrc} alt="" aria-hidden="true" className="md:h-14 h-10 w-10 md:w-14" />
              </div>
              <div className="space-y-4">
                <h3 className="text-[24px] font-semibold leading-[1.3] text-[#2B214F] md:text-[32px]">
                  {card.title}
                </h3>
                <p className="text-[19px] leading-[1.5] text-[#334155] md:text-[24px] w-full md:w-[90%]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>  
    </section>
  );
}
