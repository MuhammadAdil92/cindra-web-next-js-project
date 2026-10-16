import { ReactNode } from "react";

type ProblemCard = {
  value: string;
  label: ReactNode;
  description: string;
  valueColor: string;
};

const problemCards: ProblemCard[] = [
  {
    value: "53%",
    label: <> of nurses say call lights <br /> disrupt work </>,
    description: "Nurses are forced to triage and route every Unsorted request manually.",
    valueColor: "#BA1B1B",
  },
  {
    value: "40-50%",
    label: <> of calls are non-<br />nursing tasks </>,
    description: "Water, food, housekeeping - requests that should never reach a registered nurse.",
    valueColor: "#907018",
  },
  {
    value: "13+ min",
    label: <> average response <br /> time </>,
    description:
      "Slower response times correlate directly with increased patient falls and injuries.",
    valueColor: "#065C42",
  },
  {
    value: "$61K",
    label: <> average cost to  <br /> replace one nurse </>,
    description: "Burnout-driven turnover costs hospitals $3.9-$5.8M annually.",
    valueColor: "#E66410",
  },
];

export default function ProblemSection() {
  return (
    <section className="px-2 md:px-4">
      <div className="rounded-[30px] border border-[#B9B3DD] bg-[#271C4A] px-0 py-10 md:px-12 md:py-[60px]">
       <div className="container mx-auto  px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 xl:grid-cols-[534px_1fr] xl:gap-[60px]">
            <div className="space-y-6">
              <p className="inline-flex rounded-[239px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[20px] font-normal leading-none text-[#271C4A]">
                Problem
              </p>
              <h2 className="text-[40px] font-semibold leading-[1.2] text-white md:text-[52px] xl:text-[62px]">
                Every request triggers the same undifferentiated alert
              </h2>
              <p className="text-[18px] font-normal leading-[1.5] text-white/90 md:text-[20px]">
                Patient presses a button. A light turns on. Someone walks to the room to find out what they
                need. Water, bathroom assist, clinical emergency — {"it's"} all the same signal.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {problemCards.map((card) => (
                <article
                  key={card.value}
                  className="rounded-[20px] border border-[#E8E8E8] bg-white p-6 shadow-[0_8px_24px_rgba(13,6,32,0.08)]"
                >
                  <p className="text-[44px] font-semibold leading-[1.3] md:text-[54px]" style={{ color: card.valueColor }}>
                    {card.value}
                  </p>
                  <p className="mt-[14px] text-[22px] font-medium leading-[1.4] text-[#020617] md:text-[24px]">
                    {card.label}
                  </p>
                  <p className="mt-[14px] text-[17px] font-normal leading-[1.5] text-[#334155] md:text-[18px]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
