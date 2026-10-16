"use client";

const chipItems: {
  label: string;
  src: string;
  bg: string;
  ring?: string;
  size?: "md" | "lg";
}[] = [
  { label: "Nurse Help", src: "/assets/8-1050/nurse-help.svg", bg: "bg-[#F1F0F8]" },
  {
    label: "Nurse",
    src: "/assets/8-1050/nurse.svg",
    bg: "bg-[#A7F3D0]",
    ring: "ring-1 ring-[#5BBEA0]",
    size: "lg",
  },
  { label: "Bathroom Help", src: "/assets/8-1050/bathroom-help.svg", bg: "bg-[#FBFCEA]" },
  { label: "House Keeping", src: "/assets/8-1050/house-keeping.svg", bg: "bg-[#FFF8ED]" },
  { label: "Food/Water", src: "/assets/8-1050/food-water.svg", bg: "bg-[#EFF6FF]" },
  { label: "Urgent Help", src: "/assets/8-1050/urgent-help.svg", bg: "bg-[#FEF2F2]" },
];

type HeroStatusChipProps = {
  className?: string;
};

export default function HeroStatusChip({ className = "" }: HeroStatusChipProps) {
  return (
    <div className={`relative pointer-events-auto w-[197px] ${className}`}>
      <div className="rounded-[30px] border border-[#C7C4D6] bg-white px-1.5 pt-1.5 shadow-[0_4px_22px_rgba(199,196,215,0.35)]">
        <div className="flex min-h-[50px] items-end justify-center gap-0 pr-1">
          <div className="z-0 flex items-end -space-x-3">
            {chipItems.map((item) => {
              const isLg = item.size === "lg";
              return (
                <button
                  key={item.label}
                  type="button"
                  title={item.label}
                  aria-label={item.label}
                  className={[
                    "relative z-0 flex shrink-0 items-center justify-center rounded-full",
                    "outline-none transition-[transform,box-shadow] duration-200 ease-out",
                    "hover:z-20 hover:scale-[1.12] hover:shadow-[0_8px_24px_rgba(62,46,111,0.18)]",
                    "active:scale-100 active:duration-100",
                    "focus-visible:ring-2 focus-visible:ring-[#3E2E6F] focus-visible:ring-offset-2",
                    item.bg,
                    item.ring ?? "",
                    isLg ? "h-[50px] w-[50px] -mt-1" : "h-[38px] w-[38px]",
                  ].join(" ")}
                >
                  <img
                    src={item.src}
                    alt=""
                    className={[
                      "select-none object-contain pointer-events-none",
                      isLg ? "h-8 w-8" : "h-6 w-6",
                    ].join(" ")}
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-1 left-0 h-4 w-4 rounded-full border border-[#E3E0EB] bg-white shadow-sm"
        aria-hidden="true"
      />
    </div>
  );
}
