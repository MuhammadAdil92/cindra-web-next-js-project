"use client";

import { useEffect, useState } from "react";

const options = [
  {
    label: "Nurse Help",
    icon: "/assets/8-1050/nurse-help.svg",
    hoverCard: "hover:border-[#574092] hover:bg-[#EEEBF7]",
    hoverIcon: "group-hover:[filter:brightness(0)_saturate(100%)_invert(25%)_sepia(18%)_saturate(1492%)_hue-rotate(221deg)_brightness(95%)_contrast(87%)]",
    activeCard: "border-[#574092] bg-[#574092]",
    screenOne: "/assets/8-1050/a1.png",
    screenTwo: "/assets/8-1050/a2.png",
  },
  {
    label: "Pain/Medication",
    icon: "/assets/8-1050/nurse.svg",
    hoverCard: "hover:border-[#157A60] hover:bg-[#E4F1EC]",
    hoverIcon: "group-hover:[filter:brightness(0)_saturate(100%)_invert(32%)_sepia(49%)_saturate(1022%)_hue-rotate(128deg)_brightness(90%)_contrast(90%)]",
    activeCard: "border-[#157A60] bg-[#157A60]",
    screenOne: "/assets/8-1050/b1.png",
    screenTwo: "/assets/8-1050/b2.png",
  },
  {
    label: "Bathroom Help",
    icon: "/assets/8-1050/bathroom-help.svg",
    hoverCard: "hover:border-[#A8841D] hover:bg-[#F4EFDE]",
    hoverIcon: "group-hover:[filter:brightness(0)_saturate(100%)_invert(56%)_sepia(44%)_saturate(849%)_hue-rotate(5deg)_brightness(95%)_contrast(88%)]",
    activeCard: "border-[#A8841D] bg-[#A8841D]",
    screenOne: "/assets/8-1050/c1.png",
    screenTwo: "/assets/8-1050/c2.png",
  },
  {
    label: "House Keeping",
    icon: "/assets/8-1050/house-keeping.svg",
    hoverCard: "hover:border-[#E56F1D] hover:bg-[#FAEFE5]",
    hoverIcon: "group-hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(92%)_saturate(1173%)_hue-rotate(346deg)_brightness(97%)_contrast(84%)]",
    activeCard: "border-[#E56F1D] bg-[#E56F1D]",
    screenOne: "/assets/8-1050/d1.png",
    screenTwo: "/assets/8-1050/d2.png",
  },
  {
    label: "Food/Water",
    icon: "/assets/8-1050/food-water.svg",
    hoverCard: "hover:border-[#2B62B1] hover:bg-[#E9F0FA]",
    hoverIcon: "group-hover:[filter:brightness(0)_saturate(100%)_invert(30%)_sepia(55%)_saturate(1152%)_hue-rotate(199deg)_brightness(94%)_contrast(90%)]",
    activeCard: "border-[#2B62B1] bg-[#2B62B1]",
    screenOne: "/assets/8-1050/e1.png",
    screenTwo: "/assets/8-1050/e2.png",
  },
  {
    label: "Urgent Help",
    icon: "/assets/8-1050/urgent-help.svg",
    hoverCard: "hover:border-[#CB2E2E] hover:bg-[#F9EBEE]",
    hoverIcon: "group-hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(84%)_saturate(1767%)_hue-rotate(342deg)_brightness(95%)_contrast(90%)]",
    activeCard: "border-[#CB2E2E] bg-[#CB2E2E]",
    screenOne: "/assets/8-1050/f1.png",
    screenTwo: "/assets/8-1050/f2.png",
  },
];

export default function PatientExperienceSection() {
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const [activeScreenStep, setActiveScreenStep] = useState<1 | 2>(1);

  useEffect(() => {
    const onActivate = (event: Event) => {
      const customEvent = event as CustomEvent<{ index?: number }>;
      const incomingIndex = customEvent.detail?.index;
      if (typeof incomingIndex !== "number") return;

      const safeIndex = Math.max(0, Math.min(options.length - 1, incomingIndex));
      setActiveOption(safeIndex);
      setActiveScreenStep(1);
    };

    window.addEventListener("patient-experience:activate", onActivate);
    return () => {
      window.removeEventListener("patient-experience:activate", onActivate);
    };
  }, []);

  const activeScreenSrc =
    activeOption === null
      ? "/assets/8-1050/phone-screen.png"
      : activeScreenStep === 1
        ? options[activeOption].screenOne
        : options[activeOption].screenTwo;

  const handleOptionClick = (index: number) => {
    if (activeOption !== index) {
      setActiveOption(index);
      setActiveScreenStep(1);
      return;
    }
    setActiveScreenStep((currentStep) => (currentStep === 1 ? 2 : 1));
  };

  return (
    <section id="patient-experience" className="bg-white py-12 md:py-20 lg:py-24 xl:py-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start  lg:gap-12 xl:gap-16">
          {/* Mobile: copy + grid first; desktop: phone left */}
          <div className="relative order-2 mx-auto aspect-[549/868] w-full max-w-[549px] shrink-0 overflow-hidden rounded-[24px] bg-gradient-to-b from-[#BDB5D7] to-[#3E2E6F] lg:order-1 lg:mx-0 lg:h-[868px] lg:aspect-auto">
            <div className="absolute left-[12%] top-[5%] aspect-[389/789] w-[71%] overflow-hidden rounded-[20px_20px_0_20px] lg:left-20 lg:top-10 lg:h-[789px] lg:w-[389px] lg:aspect-auto">
              <img
                src={activeScreenSrc}
                alt="Patient app screen"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 flex w-full min-w-0 flex-1 self-center flex-col gap-10 text-left lg:order-2  lg:gap-14">
            <div className="flex flex-col gap-6">
              <p className="inline-flex w-fit rounded-[96px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[18px] font-normal leading-[1.4] text-[#2B214F] sm:text-[20px]">
                The Patient Experience
              </p>
              <h2 className="max-w-[622px] text-[32px] font-semibold leading-[1.2] tracking-tight text-[#2B214F] sm:text-[40px] lg:text-[45px]">
                Six Clear Options.
                <br />
                No Confusion, No Waiting.
              </h2>
              <p className="max-w-[622px] text-[17px] leading-[1.5] text-[#334155] sm:text-[18px] md:text-[20px] md:leading-[1.4]">
                The patient opens Cindera on their phone and sees exactly six things they can ask for.
                They tap one, add an optional note, and the right person is notified. That&apos;s it.
              </p>
            </div>

            {/* Mobile: 2×3 · md+: 3×2 to match desktop mock */}
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6">
              {options.map((option, index) => (
                <button
                  type="button"
                  key={option.label}
                  onClick={() => handleOptionClick(index)}
                  className={`group flex min-h-[140px] flex-col cursor-pointer items-center justify-center gap-3 rounded-[20px] border-solid border-t-2 border-r-2 border-b-8 border-l-2 p-4 shadow-[0px_2.849px_126.91px_0px_rgba(216,216,217,0.2)] transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out hover:shadow-[0_10px_28px_rgba(62,46,111,0.16)] sm:min-h-[170px] sm:gap-5 sm:p-6 lg:min-h-[191px] lg:gap-6 ${
                    activeOption === index
                      ? option.activeCard
                      : `border-[#E2E1E7] bg-white ${option.hoverCard}`
                  }`}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center transition-transform duration-200 ease-out  sm:h-20 sm:w-20 lg:h-[104px] lg:w-[104px]">
                    <img
                      src={option.icon}
                      alt=""
                      aria-hidden="true"
                      className={`h-full w-full object-contain transition-[filter] duration-200 ${activeOption === index ? "[filter:brightness(0)_saturate(100%)_invert(100%)]" : option.hoverIcon}`}
                    />
                  </div>
                  <p className={`text-center text-[15px] leading-tight sm:text-[17px] lg:text-[18.5px] ${activeOption === index ? "text-white" : "text-[#2B214F]"}`}>
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
