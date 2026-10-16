import { Step } from "@/types/showcase";

/* Figma node 36-966 — setup / onboarding steps + device previews */
export const steps: Step[] = [
    {
      id: "step-1",
      stepLabel: "STEP 01",
      title: "Map your hospital structure",
      description:
        "Define how your facility actually works — floors, wings, rooms, and beds. This is a one-time setup that gives Cindera the context it needs to route every request accurately.",
      tags: [
        "Floors & wings",
        "Zones (for housekeeping)",
        "Room numbers",
        "Bed assignments",
        "Unit structure",
      ],
      image: "/assets/d-1.png",
      imageAlt: "Cindera dashboard: hospital mapping progress",
    },
    {
      id: "step-2",
      stepLabel: "STEP 02",
      title: "Onboard Your Staff",
      description:
        "Add every staff member who will receive patient requests. Assign their role, floor, shift, and charge nurse. Bulk CSV import or add individually — new hires get added as they come.",
      tags: [
        "Registered Nurses",
        "CNAs",
        "Charge Nurses",
        "Housekeeping",
        "Dietary / Food Service",
        "Support Staff",
      ],
      image: "/assets/d2.png",
      imageAlt: "Cindera staff onboarding interface",
    },
    {
      id: "step-3",
      stepLabel: "STEP 03",
      title: "Go Live",
      description:
        "Patients activate at admission with a 6-digit code or QR in under a minute. They send requests, staff receive them instantly. You can go live the same day.",
      highlightBadge: "Patients can be onboarded continuously from here",
      image: "/assets/d3.png",
      imageAlt: "Cindera go-live monitoring",
    },
  ];