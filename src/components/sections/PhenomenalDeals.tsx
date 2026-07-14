import { ScrollReveal } from '../ui/ScrollReveal';

export function PhenomenalDeals() {

  return (
    <>
      {/* ================= PHENOMENAL DEALS START ================= */}
      <section
        id="special-deals"
        className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#0b84d8]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#fbb03b]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* Section heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0b84d8]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Hurry Up
              </p>

              <span className="h-px w-8 bg-[#0b84d8]" />
            </div>

            <h2 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]">
              Phenomenal Deals Offered
            </h2>
          </ScrollReveal>

          {/* Deals grid */}
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {/* LEFT LARGE CARD */}
            <ScrollReveal
              variant="fade-in-up"
              delay={100}
              duration={1300}
              className="lg:col-span-3 h-full"
            >
              <article className="group relative min-h-[490px] overflow-hidden rounded-[7px] h-full">
                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=90"
                  alt="Traveler enjoying a mountain holiday"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b84d8]/95 via-transparent to-[#100c08]/10" />

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-4 rounded-[6px] border border-white/55" />

                {/* Bottom offer content */}
                <div className="absolute inset-x-0 bottom-0 z-10 px-7 pb-4 text-center text-white font-jost">
                  <p className="font-satisfy text-[18px] font-normal capitalize">
                    Savings Worldwide
                  </p>

                  <h3 className="mt-3 font-rubik text-[38px] font-bold leading-none text-[#fbb03b]">
                    20% Off
                  </h3>

                  <p className="mt-3 text-[15px] font-semibold">
                    Discover Great Deals
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-[5px] bg-white px-6 text-[13px] font-bold text-[#0b84d8] transition hover:-translate-y-1 hover:bg-[#100c08] hover:text-white font-rubik"
                  >
                    Book Now
                  </a>
                </div>
              </article>
            </ScrollReveal>

            {/* CENTER CARDS */}
            <div className="grid gap-5 lg:col-span-5">
              {/* CENTER TOP CARD */}
              <ScrollReveal
                variant="fade-in-up"
                delay={250}
                duration={1350}
              >
                <article className="group relative min-h-[235px] overflow-hidden rounded-[7px]">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=90"
                    alt="Couple enjoying a kayaking tour"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                  {/* Bottom colored shape */}
                  <div className="absolute inset-x-0 bottom-0 min-h-[106px] bg-[#0b84d8] px-6 py-5 text-white [clip-path:polygon(0_18%,70%_0,100%_24%,100%_100%,0_100%)] sm:px-8">
                    <div className="flex h-full items-end justify-between gap-5">
                      <div>
                        <p className="font-satisfy text-[16px] font-normal capitalize">
                          Couple Tour
                        </p>

                        <h3 className="mt-1 font-rubik text-[19px] font-semibold">
                          4 Days In Switzerland
                        </h3>
                      </div>

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fbb03b] text-center font-rubik text-[16px] font-bold leading-tight text-[#100c08]">
                        50%
                        <span className="block text-[11px]">Off</span>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* CENTER BOTTOM CARD */}
              <ScrollReveal
                variant="fade-in-up"
                delay={400}
                duration={1350}
              >
                <article className="group relative min-h-[235px] overflow-hidden rounded-[7px] bg-[#100c08]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#100c08] via-[#100c08] to-[#0b84d8]" />

                  {/* Decorative circles */}
                  <div className="absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full bg-[#0b84d8]/45" />

                  <div className="absolute -right-12 bottom-[-130px] h-[280px] w-[280px] overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=90"
                      alt="International honeymoon destination"
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="relative z-10 flex h-full max-w-[60%] flex-col justify-center px-7 py-8 text-white sm:px-9 font-jost">
                    <p className="font-satisfy text-[17px] font-normal capitalize">
                      Honeymoon Tour
                    </p>

                    <h3 className="mt-3 font-rubik text-[25px] font-semibold">
                      Enjoy 40% Off
                    </h3>

                    <p className="mt-3 text-[12px] font-medium text-white/85">
                      2 Countries &amp; 15 Locations
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex min-h-[44px] w-fit items-center justify-center rounded-[5px] bg-[#fbb03b] px-6 text-[13px] font-bold text-[#100c08] transition hover:-translate-y-1 hover:bg-white hover:text-[#100c08] font-rubik"
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* RIGHT LARGE CARD */}
            <ScrollReveal
              variant="fade-in-up"
              delay={550}
              duration={1400}
              className="lg:col-span-4 h-full"
            >
              <article className="group relative min-h-[490px] overflow-hidden rounded-[7px] bg-[#fbb03b] h-full">
                {/* Top offer area */}
                <div className="relative z-10 min-h-[185px] bg-[#fbb03b] px-7 py-7 sm:px-9">
                  <div className="flex items-start justify-between gap-5 font-jost">
                    <div>
                      <p className="font-satisfy text-[16px] font-normal text-[#100c08] capitalize">
                        Savings Worldwide
                      </p>

                      <h3 className="mt-2 font-rubik text-[38px] font-bold leading-none text-[#100c08]">
                        50% Off
                      </h3>

                      <p className="mt-3 text-[12px] font-semibold text-[#100c08]">
                        For Your First Book
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="mt-8 inline-flex min-h-[43px] shrink-0 items-center justify-center rounded-[5px] bg-[#100c08] px-6 text-[13px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#0b84d8] font-rubik"
                    >
                      Book Now
                    </a>
                  </div>
                </div>

                {/* Bottom image */}
                <div className="absolute inset-x-0 bottom-0 h-[330px] overflow-hidden [clip-path:polygon(0_16%,100%_0,100%_100%,0_100%)]">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1300&q=90"
                    alt="Family holiday beside a peaceful lake"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-[#100c08]/10" />
                </div>

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-4 z-20 rounded-[6px] border border-white/55" />
              </article>
            </ScrollReveal>
          </div>

          {/* Bottom CTA */}
          <ScrollReveal variant="fade-in-up" delay={700} duration={1300} className="mt-12 text-center">
            <a
              href="#tours"
              className="btn-primary rounded-full min-h-[52px] px-9 text-[14px] font-bold shadow-[0_12px_30px_rgba(11,132,216,0.22)]"
            >
              View All Special Offers
              <svg
                viewBox="0 0 24 24"
                className="ml-3 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
      {/* ================= PHENOMENAL DEALS END ================= */}
    </>
  );
}

