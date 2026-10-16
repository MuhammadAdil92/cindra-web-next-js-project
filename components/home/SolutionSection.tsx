const solutionItems = [
  {
    title: <>Categorize at <br /> the source</>,
    body: "The patient tells Cindera what they need - nurse, medication, bathroom, housekeeping, food, or urgent - before the request is sent.",
  },
  {
    title: <>Route to the <br /> right role</>,
    body: "Bathroom requests go to the CNA. Housekeeping goes to the zone housekeeper. Nurses only get what nurses need to handle.",
  },
  {
    title: "Track, escalate, report",
    body: <>Every request is timed. If it breaches the SLA, it escalates automatically. Leadership sees it all — response times, resolution rates, HCAHPS <br />
      impact.</>,
  },
];


export default function SolutionSection() {
  return (
    <section className="px-4 py-10 md:py-20 lg:py-24">
      <div className="container mx-auto  px-4 md:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 xl:grid-cols-2 xl:gap-6">
          <div className="space-y-18">
            <div className="space-y-7">
              <p className="inline-flex rounded-[239px] border border-[#E3E0EB] bg-[#E7E2F9] px-6 py-3 text-[20px] leading-[1.4] text-[#0F172A]">
                Solution
              </p>
              <h2 className="max-w-[621px] text-[36px] font-semibold leading-[1.2] text-[#2B214F] md:text-[42px]">
                Cindera turns every patient request into a routed, tracked, accountable action.
              </h2>
              <p className="max-w-[536px] text-[20px] leading-[1.4] text-[#0F172A]">
                Instead of a single alert, Cindera lets patients categorize requests from their phone.
                Each request auto-routes to the right staff, tracks SLA times, and escalates if missed.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 ">
              {solutionItems.map((item, idx) => (
                <article
                  key={item.title as string}
                  className={`rounded-[20px] border border-[#C5C9CD] bg-[#F8FAFC] p-6 ${idx === 2 ? "md:col-span-2" : ""
                    }`}
                >
                  <h3 className="text-[26px] font-semibold text-[#2B214F]">{item.title}</h3>
                  <p className="mt-3 text-base text-[#334155]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="h-full w-full min-h-0">
            <img src="/assets/solutions.svg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
