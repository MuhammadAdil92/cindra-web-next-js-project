type InterfaceItem = {
  label: string;
  desktopPosition: string;
  featured?: boolean;
};

/* Positions as % of 1320×858 artboard so `w-full` ring + fluid canvas stay aligned */
const interfaceItems: InterfaceItem[] = [
  { label: "Analytics", desktopPosition: "left-[17.803%] top-[34.266%]" },
  { label: "Caregiver", desktopPosition: "left-[30.833%] top-[18.881%]" },
  { label: "Patient", desktopPosition: "left-[43.864%] top-0", featured: true },
  { label: "Staff", desktopPosition: "left-[59.167%] top-[18.881%]" },
  { label: "Nurse", desktopPosition: "left-[72.197%] top-[34.266%]" },
];

const iconMap: Record<string, string> = {
  Analytics: "/assets/8-1217/analytics.svg",
  Caregiver: "/assets/8-1217/caregiver.svg",
  Patient: "/assets/8-1217/patient.svg",
  Staff: "/assets/8-1217/staff.svg",
  Nurse: "/assets/8-1217/nurse.svg",
};

function InterfaceChip({
  label,
  featured,
  compact,
}: {
  label: string;
  featured?: boolean;
  compact?: boolean;
}) {
  if (featured) {
    if (compact) {
      return (
        <div className="flex h-[74px] w-[74px] flex-col items-center justify-center rounded-[10px] bg-[#3E2E6F] text-white shadow-[0_8px_20px_rgba(62,46,111,0.28)]">
          <img
            src={iconMap[label]}
            alt=""
            aria-hidden="true"
            className="mb-0.5 h-8 w-8"
            loading="lazy"
          />
          <p className="text-[11px] leading-[1.3]">{label}</p>
        </div>
      );
    }
    return (
      <div className="flex h-[162px] w-[162px] flex-col items-center justify-center rounded-2xl bg-[#3E2E6F] text-white shadow-[0_12px_32px_rgba(62,46,111,0.3)]">
        <img
          src={iconMap[label]}
          alt=""
          aria-hidden="true"
          className="mb-3 h-[90px] w-[90px]"
          loading="lazy"
        />
        <p className="text-[20px] leading-[1.4]">{label}</p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex h-[74px] w-[62px] flex-col items-center justify-center rounded-[10px] border border-[#B9B3DD] bg-white shadow-[inset_0_0_20px_rgba(185,179,221,0.2)]">
        <img
          src={iconMap[label]}
          alt=""
          aria-hidden="true"
          className="mb-0.5 h-7 w-7"
          loading="lazy"
        />
        <p className="max-w-[4rem] text-center text-[10px] leading-[1.3] text-[#2B214F]">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-[132px] w-[132px] flex-col items-center justify-center rounded-[10px] border border-[#B9B3DD] bg-white shadow-[inset_0_0_38.3px_rgba(185,179,221,0.2)]">
      <img src={iconMap[label]} alt="" aria-hidden="true" className="mb-1 h-16 w-16" loading="lazy" />
      <p className="text-[20px] leading-[1.4] text-[#2B214F]">{label}</p>
    </div>
  );
}

export default function InterfacesSection() {
  return (
    <section className="w-full pb-20 pt-[120px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="xl:hidden">
        <div className="relative mx-auto mt-10 w-full max-w-[370px] overflow-visible rounded-[22px] border-[3px] border-[#A59DD0] bg-gradient-to-b from-[#FAF9FD] to-[#F4F1FB] px-3 pb-8 pt-5">
          <div className="mx-auto flex w-full items-start justify-between gap-2">
            <InterfaceChip label="Analytics" compact />
            <InterfaceChip label="Caregiver" compact />
            <InterfaceChip label="Patient" featured compact />
            <InterfaceChip label="Staff" compact />
            <InterfaceChip label="Nurse" compact />
          </div>

          <div className="my-8 h-px w-full bg-[#D8D4EA]" />

          <div className="relative z-10 mx-auto max-w-[334px] px-1 text-center">
            <img
              src="/assets/8-1217/center-icon.svg"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-[14px] h-[80px] w-[80px]"
              loading="lazy"
            />
            <h2 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#2B214F]">
              Five interfaces. One
              <br className="hidden xl:block" />
              unified system.
            </h2>
            <p className="mx-auto my-5 max-w-[334px] text-[18px] leading-[1.4] text-[#0F172A]">
              From patient bedside to hospital leadership — every stakeholder gets the view they
              need.
            </p>
          </div>

          <div className="absolute bottom-[-22px] left-1/2 z-20 flex w-fit -translate-x-1/2 items-center justify-center gap-1 rounded-[24px] bg-gradient-to-r from-[#3E2E6F] to-[#6D4CD2] px-5 py-2 text-[30px] font-semibold leading-none text-white">
            <img
              src="/assets/8-1016/logo-2.svg"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Artboard scales with container (max 1320); absolute layers use % of this box */}
      <div className="relative mx-auto hidden aspect-[1320/858] container overflow-hidden xl:block">
        <img
          src="/assets/8-1217/ring.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[9.149%] h-[85.606%] w-full object-cover object-left"
        />

        {interfaceItems.map((item) => (
          <div key={item.label} className={`absolute ${item.desktopPosition}`}>
            <InterfaceChip label={item.label} featured={item.featured} />
          </div>
        ))}

        <div className="absolute left-[23.864%] top-[38.578%] w-[52.273%]  text-center">
          <img
            src="/assets/8-1217/center-icon.svg"
            alt=""
            aria-hidden="true"
            className="mx-auto mb-6 h-[124px] w-[124px]"
          />
          <h2 className="text-[62px] font-semibold leading-[1.2] text-[#2B214F]">
            Five interfaces. One
            <br />
            unified system.
          </h2>
          <p className="mx-auto mt-6 w-full max-w-[442px] text-[20px] leading-[1.4] text-[#0F172A]">
            From patient bedside to hospital leadership - every stakeholder gets the view they
            need.
          </p>
        </div>

        <div className="absolute left-[38.636%] top-[89.394%] flex h-[91px] w-[22.727%] min-w-[260px] max-w-[300px] items-center justify-center gap-[10px] rounded-[83px] bg-gradient-to-r from-[#3E2E6F] to-[#6D4CD2] text-[36px] font-semibold text-white">
          <img 
            src="/assets/8-1016/logo-2.svg"
            alt="" aria-hidden="true"  />
        </div>
      </div>
      </div>
    </section>
  );
}
