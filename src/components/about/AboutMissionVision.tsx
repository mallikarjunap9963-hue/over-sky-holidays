import { ScrollReveal } from "../ui/ScrollReveal"

const missionPoints = [
  "Personalized holiday packages",
  "Clear and transparent pricing",
  "Complete assistance throughout the journey",
]

const visionPoints = [
  "Trusted global travel services",
  "Strong destination expertise",
  "Reliable support around the clock",
]

const CheckIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

const MissionIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="m14.5 9.5 5-5" />
      <path d="M16.5 4.5h3v3" />
    </svg>
  )
}

const VisionIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 2v2" />
      <path d="M4.9 4.9 6.3 6.3" />
      <path d="M19.1 4.9 17.7 6.3" />
    </svg>
  )
}

const PlaneDecoration = () => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M107 14 76 46 28 32l-8 8 38 25-18 18-17-4-7 7 22 13 13 22 7-7-4-17 18-18 25 38 8-8-14-48 32-31c6-6 7-13 3-17-4-4-11-3-17 3Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function AboutMissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative overflow-hidden bg-[#f7f8fa] px-5 py-10 sm:px-8"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-10 h-80 w-80 rounded-full bg-[#0853a4]/10 blur-[100px]" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#fbb03b]/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0853a4 1px, transparent 0)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <ScrollReveal variant="fade-in-up" delay={50} duration={1100}>
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-[2px] w-7 bg-[#fbb03b]" />

              <p className="font-satisfy text-[24px] font-normal capitalize text-[#0853a4] sm:text-[27px]">
                Our Purpose
              </p>

              <span className="h-[2px] w-7 bg-[#fbb03b]" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-in-up" delay={130} duration={1100}>
            <h2 className="mt-3 font-rubik text-[28px] font-extrabold leading-tight text-[#102f50] sm:text-[34px] lg:text-[40px]">
              Our Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-in-up" delay={220} duration={1100}>
            <p className="mx-auto mt-3 max-w-[650px] font-jost text-[14px] leading-7 text-slate-600 sm:text-[15px]">
              We create dependable and memorable travel experiences by
              combining thoughtful planning, local knowledge, transparent
              service, and complete customer care.
            </p>
          </ScrollReveal>
        </div>

        {/* Main cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
          {/* Mission */}
          <ScrollReveal variant="fade-in-left" delay={100} duration={1200}>
            <article className="group relative h-full overflow-hidden rounded-[8px] bg-white shadow-[0_15px_45px_rgba(15,47,80,0.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,47,80,0.16)]">
              {/* Top colour line */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-[#0853a4]" />

              {/* Left decorative panel */}
              <div
                className="absolute inset-y-0 left-0 hidden w-[150px] bg-[#0853a4] sm:block"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 64% 100%, 0 100%)",
                }}
              />

              <div className="pointer-events-none absolute -bottom-8 -left-5 hidden h-32 w-32 text-white/10 sm:block">
                <PlaneDecoration />
              </div>

              <div className="relative flex h-full flex-col p-6 sm:min-h-[375px] sm:pl-[175px] sm:pr-8 sm:py-8">
                {/* Mobile icon and number */}
                <div className="mb-5 flex items-center justify-between sm:hidden">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#0853a4] text-white shadow-[0_10px_24px_rgba(8,83,164,0.25)]">
                    <MissionIcon />
                  </div>

                  <span className="font-rubik text-[52px] font-black leading-none text-[#0853a4]/10">
                    01
                  </span>
                </div>

                {/* Desktop icon */}
                <div className="absolute left-8 top-8 hidden h-16 w-16 items-center justify-center rounded-md border border-white/20 bg-white/15 text-white backdrop-blur-sm sm:flex">
                  <MissionIcon />
                </div>

                <span className="absolute right-7 top-5 hidden font-rubik text-[72px] font-black leading-none text-[#0853a4]/[0.06] sm:block">
                  01
                </span>

                <div>
                  <p className="font-rubik text-[11px] font-bold uppercase tracking-[0.18em] text-[#0853a4]">
                    What We Promise
                  </p>

                  <h3 className="mt-2 max-w-[420px] font-rubik text-[22px] font-extrabold leading-[1.25] text-[#102f50] sm:text-[24px]">
                    Making every journey simple, safe and memorable
                  </h3>

                  <p className="mt-3 font-jost text-[14px] leading-6 text-slate-600 sm:text-[14.5px]">
                    Our mission is to make domestic and international travel
                    accessible and rewarding through carefully designed
                    packages, dependable planning and personalized assistance
                    for every traveller.
                  </p>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                <ul className="mt-auto space-y-3">
                  {missionPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-jost text-[13.5px] font-medium text-slate-600"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0853a4]/10 text-[#0853a4]">
                        <CheckIcon />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal variant="fade-in-right" delay={180} duration={1200}>
            <article className="group relative h-full overflow-hidden rounded-[8px] bg-white shadow-[0_15px_45px_rgba(15,47,80,0.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,47,80,0.16)]">
              {/* Top colour line */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-[#fbb03b]" />

              {/* Left decorative panel */}
              <div
                className="absolute inset-y-0 left-0 hidden w-[150px] bg-[#153e6c] sm:block"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 64% 100%, 0 100%)",
                }}
              />

              <div className="pointer-events-none absolute -bottom-8 -left-5 hidden h-32 w-32 text-white/10 sm:block">
                <PlaneDecoration />
              </div>

              <div className="relative flex h-full flex-col p-6 sm:min-h-[375px] sm:pl-[175px] sm:pr-8 sm:py-8">
                {/* Mobile icon and number */}
                <div className="mb-5 flex items-center justify-between sm:hidden">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#fbb03b] text-[#102f50] shadow-[0_10px_24px_rgba(251,176,59,0.28)]">
                    <VisionIcon />
                  </div>

                  <span className="font-rubik text-[52px] font-black leading-none text-[#fbb03b]/15">
                    02
                  </span>
                </div>

                {/* Desktop icon */}
                <div className="absolute left-8 top-8 hidden h-16 w-16 items-center justify-center rounded-md border border-white/20 bg-white/15 text-white backdrop-blur-sm sm:flex">
                  <VisionIcon />
                </div>

                <span className="absolute right-7 top-5 hidden font-rubik text-[72px] font-black leading-none text-[#fbb03b]/10 sm:block">
                  02
                </span>

                <div>
                  <p className="font-rubik text-[11px] font-bold uppercase tracking-[0.18em] text-[#e59b21]">
                    Where We Are Going
                  </p>

                  <h3 className="mt-2 max-w-[420px] font-rubik text-[22px] font-extrabold leading-[1.25] text-[#102f50] sm:text-[24px]">
                    Becoming a trusted travel partner across the world
                  </h3>

                  <p className="mt-3 font-jost text-[14px] leading-6 text-slate-600 sm:text-[14.5px]">
                    Our vision is to establish high standards in travel
                    services and inspire people to explore confidently through
                    honest pricing, destination knowledge and reliable
                    round-the-clock support.
                  </p>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                <ul className="mt-auto space-y-3">
                  {visionPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-jost text-[13.5px] font-medium text-slate-600"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbb03b]/15 text-[#d88b0d]">
                        <CheckIcon />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}