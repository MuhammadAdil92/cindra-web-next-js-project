"use client";

import Link from "next/link";
import SiteHeader from "@/components/home/SiteHeader";

export default function LandingHeroSection() {


  const ctaIcons = [
    {
      src: "/assets/1.svg",
      bg: "bg-[#F1F0F8]",
      border: "hover:border-[#7F6BAA]",
      shadow: "hover:shadow-[0_4px_11px_rgba(127,107,170,0.26)]",
    },
    {
      src: "/assets/2.svg",
      bg: "bg-[#A7F3D0]",
      border: "hover:border-[#5BBEA0]",
      shadow: "hover:shadow-[0_4px_11px_rgba(194,215,209,0.85)]",
    },
    {
      src: "/assets/3.svg",
      bg: "bg-[#FBFCEA]",
      border: "hover:border-[#BBBE5B]",
      shadow: "hover:shadow-[0_4px_11px_rgba(212,205,185,0.5)]",
    },
    {
      src: "/assets/4.svg",
      bg: "bg-[#FFF8ED]",
      border: "hover:border-[#FCDBAC]",
      shadow: "hover:shadow-[0_4px_11px_rgba(230,100,16,0.22)]",
    },
    {
      src: "/assets/5.svg",
      bg: "bg-[#EFF6FF]",
      border: "hover:border-[#7192BA]",
      shadow: "hover:shadow-[0_4px_11px_rgba(113,146,186,0.32)]",
    },
    {
      src: "/assets/6.svg",
      bg: "bg-[#FEF2F2]",
      border: "hover:border-[#CB6363]",
      shadow: "hover:shadow-[0_4px_11px_rgba(212,211,211,0.95)]",
    },
  ];

  // const handleBannerCtaClick = (index: number) => {
  //   window.dispatchEvent(
  //     new CustomEvent("patient-experience:activate", {
  //       detail: { index },
  //     }),
  //   );

  //   document.getElementById("patient-experience")?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };


  return (
    <section className="landing-hero-section custom-hero-section pb-12 pt-6 sm:pb-16 sm:pt-8  lg:pb-0 lg:pt-0">
      <div className="container mx-auto  px-4 md:px-6 lg:px-8">
        <div className="relative z-10 mx-auto grid  grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-11 lg:pt-0">
          <div className="lg:col-span-12 lg:self-start lg:pt-[50px]">
            <SiteHeader />
          </div>

          <div className="mt-5 max-w-[668px] justify-self-start lg:col-span-6 lg:row-start-2 lg:mt-0 lg:w-full lg:max-w-[668px] lg:self-start lg:pt-[114px]">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-left text-3xl font-semibold leading-[1.2] tracking-tight text-[#2B214F] lg:text-[clamp(28px,6vw,54px)] lg:leading-[1.28]">
                <span className="block lg:hidden">
                  The nurse call button <br className="block md:hidden" />
                  hasn&apos;t changed since the
                  1950s. Your patients <br className="block md:hidden" />
                  have.
                </span>
                <span className="hidden lg:inline">
                  The nurse call button hasn&apos;t changed since the 1950s. Your patients have.
                </span>
              </h1>
              <p className="text-left text-[16px] font-normal leading-[1.45] text-[#0F172A] lg:max-w-[532px] lg:text-[20px] lg:leading-[1.4]">
                <span className="block lg:hidden">
                  Cindera replaces the undifferentiated call light
                  with intelligent, mobile-first request routing — on
                  the patient&apos;s own phone. No hardware. No IT
                  project. Live in Minutes.
                </span>
                <span className="hidden lg:inline">
                  Cindera replaces the undifferentiated call light with intelligent, mobile-first request
                  routing — on the patient&apos;s own phone. No hardware. No IT project. Live in Minutes.
                </span>
              </p>
            </div>

            <div className="mt-3 flex w-full flex-col items-start gap-4 md:mt-11 max-w-[532px] md:flex-row  lg:flex-row items-center gap:[12px] lg:gap-[18px]">
              <Link
                href="#early-access"
                className="bg-[#3E2E6F] cursor-pointer text-[15px] px-8 py-3 text-center  font-medium leading-tight text-white shadow-sm transition-opacity hover:opacity-95 w-auto rounded-[12px] md:py-5 md:text-[20px]"
              >
                Request Early Access
              </Link>
              <Link
                href="#how-it-works"
                className="border border-[#3E2E6F] cursor-pointer text-[15px] bg-white px-8 py-3 text-center  font-medium leading-tight text-[#3E2E6F] transition-colors hover:bg-[#F8F7FC] w-auto rounded-[12px] md:py-5 md:text-[20px]"
              >
                See How It Works
              </Link>
            </div>
          </div>






          <div className="absolute right-[40px] top-[270px] hidden lg:block">
            <article className="flex custom-bg-cta">
              {ctaIcons.map((icon, index) => (
                <button
                  key={icon.src}
                  type="button"
                  aria-label={`cta-icon-${index + 1}`}
                  // onClick={() => handleBannerCtaClick(index)}
                  className={`relative h-[42px] w-[42px] cursor-pointer rounded-full border border-transparent ${icon.bg} ${icon.border} ${icon.shadow} ${index > 0 ? "-ml-[12px]" : ""} transition-all 
                  duration-200 ease-out hover:scale-130 hover:translate-y-[-5px]`}
                >
                  <img
                    src={icon.src}
                    alt={icon.src}
                    className="h-full w-full rounded-full object-cover"
                  />
                </button>
              ))}
            </article>
          </div>






        </div>
      </div>
    </section>
  );
}
