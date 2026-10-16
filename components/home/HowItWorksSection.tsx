type Step = {
  step: string;
  title: string;
  description: string;
  numberColor: string;
  iconBg: string;
  iconSrc: string;
};

/* Step icons: dark glyphs on pastel circles — see public/assets/8-1268/*.svg */
const steps: Step[] = [
  {
    step: "1",
    title: "Activate",
    description: "Patient scans QR or enters 6-digit code. No SignUp. No login.",
    numberColor: "#2B214F",
    iconBg: "#B9B3DD",
    iconSrc: "/assets/8-1268/1.svg",
  },
  {
    step: "2",
    title: "Request",
    description: "Taps one of six categories. Optional voice or text note.",
    numberColor: "#003E8A",
    iconBg: "#BFDBFE",
    iconSrc: "/assets/8-1268/3.svg",
  },
  {
    step: "3",
    title: "Route",
    description: "Engine identifies role, checks availability, delivers with SLA.",
    numberColor: "#E66410",
    iconBg: "#FCDBAC",
    iconSrc: "/assets/8-1268/2.svg",
  },
  {
    step: "4",
    title: "Resolve",
    description: "Real-time status. Staff resolves. All tracked in analytics.",
    numberColor: "#065C42",
    iconBg: "#A7F3D0",
    iconSrc: "/assets/8-1268/4.svg",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-x-hidden py-10 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="space-y-[60px]">
          <div className="space-y-6 text-left md:text-center">
            <p className="inline-flex rounded-[239px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[20px] leading-[1.4] text-[#0F172A]">
              How It Works
            </p>
            <h2 className="mx-auto max-w-[808px] text-[40px] font-semibold leading-[1.2] text-[#2B214F] md:text-[62px]">
              From request to resolution
              <br />
              in under four minutes
            </h2>
            <p className="text-[20px] text-[#0F172A]">
              Cindera routes each request to the right staff member automatically — <br />
              no intercom, no guesswork, no wasted steps.
            </p>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute left-1/2 top-[80px] z-0 hidden h-[4px] w-screen max-w-none -translate-x-1/2 bg-linear-to-r from-[#7C70C6] via-[#64A8FD] via-31% via-[#FCBB5E] via-55% to-[#12CC76] lg:block"
              aria-hidden
            />
            <div className="relative z-10 grid gap-10 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-6">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="flex flex-col items-start gap-4 text-left md:items-center md:text-center"
                >
                  <div className="flex flex-col items-start gap-0 md:items-center md:gap-[14px]">
                    <p
                      className="hidden w-[60px] text-[28px] font-semibold leading-[1.3] md:block md:text-center"
                      style={{ color: item.numberColor }}
                    >
                      {item.step}
                    </p>
                    <div
                      className="relative grid h-[60px] w-[60px] shrink-0 place-items-center rounded-full"
                      style={{ backgroundColor: item.iconBg }}
                      aria-hidden="true"
                    >
                      <img
                        src={item.iconSrc}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 shrink-0 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex w-full max-w-[280px] flex-col items-start gap-2 md:items-center">
                    <h3 className="text-[28px] font-semibold leading-[1.3] text-[#2B214F]">{item.title}</h3>
                    <p className="text-xl md:text-base leading-normal text-[#334155]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
