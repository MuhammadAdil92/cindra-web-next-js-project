import type { ReactNode } from "react";

type FeatureCard = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  bgColor: string;
  iconSrc: string;
  iconAlt: string;
};

const cardClassName =
  "flex flex-col gap-[18px] rounded-[20px] p-[34px] text-left text-[#2B214F] shadow-[0_8px_24px_rgba(43,33,79,0.08)]";

/* Figma node 8-972 — assets exported from Frame 324 */
const featureCards: FeatureCard[] = [
  {
    id: "categorized",
    title: "Categorized Requests",
    description: (
      <>
        Patients choose from 6 <br />
        clear categories. No more undifferentiated call lights.
      </>
    ),
    bgColor: "#AC93EC",
    iconSrc: "/assets/8-972/feature-categorized.svg",
    iconAlt: "",
  },
  {
    id: "routing",
    title: <>Intelligent <br /> Routing</>,
    description:
      "Every request auto-routes to the right role - RN, CNA, housekeeping or dieatry",
    bgColor: "#21C9B5",
    iconSrc: "/assets/8-972/feature-routing.svg",
    iconAlt: "",
  },
  {
    id: "tracking",
    title: (
      <>
        Real-Time <br />
        Tracking
      </>
    ),
    description:
      "Patients see live status updates. Staff see SLA timers. Charge nurses sees everything",
    bgColor: "#ECCD93",
    iconSrc: "/assets/8-972/feature-tracking.svg",
    iconAlt: "",
  },
  {
    id: "analytics",
    title: (
      <>
        Analytics &<br />
        HCAHPR
      </>
    ),
    description: "Every request tracked, timed, and tied to the scores hospital leadership measures.",
    bgColor: "#93B3EC",
    iconSrc: "/assets/8-972/feature-analytics.svg",
    iconAlt: "",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-10 md:py-20 lg:py-24">
      <div className="container mx-auto  px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {featureCards.map((card) => (
            <article
              key={card.id}
              className={cardClassName}
              style={{ backgroundColor: card.bgColor }}
            >
              <img
                src={card.iconSrc}
                alt={card.iconAlt}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0"
                aria-hidden={card.iconAlt === ""}
              />
              <h3 className="text-2xl font-medium leading-[1.2] text-[#2B214F]">{card.title}</h3>
              <p className="text-[18px] font-normal leading-[1.4] text-[#334155]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
