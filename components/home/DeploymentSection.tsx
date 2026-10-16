import { Check, X } from "lucide-react";

const comparisonRows = [
  {
    label: "Hardware cost per bed",
    cindera: "Zero",
    legacy: "$2-5K",
  },
  {
    label: "Deployment timeline",
    cindera: "30 Minutes",
    legacy: "6-18 months",
  },
  {
    label: "EHR integration required",
    cindera: "No",
    legacy: "Yes",
  },
  {
    label: "Request categorization",
    cindera: "AI-routed by role",
    legacy: "Undifferentiated alerts",
  },
];

const cinderaList = [
  "BYOD only",
  "Zero maintenance",
  "Real-time status tracking",
  "Full SLA and HCAHPS analytics",
];

const legacyList = ["Wired infrastructure", "Maintenance burden", "No real-time tracking", "No analytics"];

function CheckIcon({ negative = false }: { negative?: boolean }) {
  if (negative) {
    return (
      <X className="h-6 w-6 " />
    );
  }
  return (
     <Check className="h-6 w-6 " />
  );
}

export default function DeploymentSection() {
  return (
    <section className="mx-auto container px-4 py-20 ">
      <div className="space-y-[60px]">
        <div className="space-y-6 text-left md:text-center">
          <p className="inline-flex rounded-[239px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[20px] text-[#2B214F]">
            Deployment
          </p>
          <h2 className="mx-auto max-w-[794px] text-[34px] font-semibold leading-[1.2] text-[#2B214F] md:text-[62px]">
            No hardware. No IT project. No waiting.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[415px_1fr_1fr]">
          <div className="pt-26 hidden md:block">
            <div className="space-y-6 border-y border-transparent py-6">
              {comparisonRows.map((row, index) => (
                <div key={row.label}>
                  <p className="text-[24px] leading-[1.5] text-[#020617]">{row.label}</p>
                  {index < comparisonRows.length - 1 ? <div className="mt-6 h-px bg-[#D9D9D9]" /> : null}
                </div>
              ))}
            </div>
          </div>

          <article className="rounded-[20px] border-2 border-[#3E2E6F] bg-[rgba(241,240,248,0.2)]">
            <div className=" px-6 py-6 text-center text-[36px] font-semibold text-[#2B214F]">
              Cindera
            </div>
            <div className="space-y-8 px-6 py-6">
              <div className="space-y-6">
                {comparisonRows.map((row, index) => (
                  <div key={row.label}>
                    <p className="mb-2 text-left text-[24px] font-medium leading-snug text-[#475569] md:hidden">
                      {row.label}
                    </p>
                    <p className="text-left text-[24px] font-semibold leading-[1.5] text-[#2B214F]">
                      {row.cindera}
                    </p>
                    {index < comparisonRows.length - 1 ?
                     <div className="mt-6 h-px bg-[#B9B3DD]" /> 
                     : null}
                  </div>
                ))}
              </div>
              <div className="h-px bg-[#B9B3DD]" />
              <div className="space-y-6">
                {cinderaList.map((item) => (
                  <div key={item} className="flex items-start gap-4 text-[#2B214F]">
                    <p className="flex-1 text-[20px] font-semibold leading-[1.5] text-[#2B214F]">{item}</p>
                    <CheckIcon />
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[20px] border border-[#FECACA] bg-[rgba(254,242,242,0.2)]">
            <div className="px-6 py-6 text-center text-[36px] font-semibold text-[#BA1B1B]">
              Legacy
            </div>
            <div className="space-y-8 px-6 py-6">
              <div className="space-y-6">
                {comparisonRows.map((row, index) => (
                  <div key={row.label}>
                    <p className="mb-2 text-left text-[24px] font-medium leading-snug text-[#BA1B1B]/80 md:hidden">
                      {row.label}
                    </p>
                    <p className="text-left text-[24px] leading-[1.5] text-[#BA1B1B]">{row.legacy}</p>
                    {index < comparisonRows.length - 1 ? <div className="mt-6 h-px bg-[#FECACA]" /> : null}
                  </div>
                ))}
              </div>
              <div className="h-px bg-[#FECACA]" />
              <div className="space-y-6">
                {legacyList.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 text-[#BA1B1B]">
                    <p className="flex-1 text-[20px] leading-[1.5] text-[#BA1B1B]">{item}</p>
                    <CheckIcon negative={index >= 2} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
