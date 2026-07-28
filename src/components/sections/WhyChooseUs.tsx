import { ScrollReveal } from '../ui/ScrollReveal';

export function WhyChooseUs() {

  return (
    <>
      {/* ================= WHY CHOOSE US SECTION START ================= */}
      <section
        id="why-choose-us"
        className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
      >
        {/* Decorative travel drawing */}
        <div className="pointer-events-none absolute right-0 top-0 hidden text-[#0853a4]/[0.05] lg:block">
          <svg
            viewBox="0 0 500 330"
            className="h-[330px] w-[500px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path d="M10 230c70-65 135-90 200-72 55 15 79 77 145 78 51 1 85-27 135-76" />
            <path d="m264 185 55-83 69 105" />
            <path d="m324 151 28-37 69 94" />
            <path d="M410 78c-21-12-39-7-50 7 22 2 36 11 42 27" />
            <path d="M425 64c14 10 18 24 15 43" />
            <path d="m204 35 33 20-42 14 9-34Z" />
            <path d="M237 55c45 10 77 24 111 60" strokeDasharray="8 10" />
          </svg>
        </div>

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#0853a4]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* Section heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0853a4]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                Our Success
              </p>

              <span className="h-px w-8 bg-[#0853a4]" />
            </div>

            <h2 className="mt-4 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
              Why Choose Open Sky Holidays
            </h2>
          </ScrollReveal>

          {/* Feature cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Worldwide Coverage",
                description:
                  "Explore domestic and international destinations with complete planning and trusted travel support.",
                background: "bg-[#f0f9ff]",
                iconBackground: "bg-[#bae6fd]",
                iconColor: "text-[#0853a4]",
                icon: (
                  <svg
                    viewBox="0 0 80 80"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Globe circle */}
                    <circle cx="34" cy="44" r="22" />
                    {/* Latitude and Longitude lines */}
                    <path d="M12 44h44" />
                    <path d="M34 22c6.5 7 10 14.5 10 22s-3.5 15-10 22" />
                    <path d="M34 22c-6.5 7-10 14.5-10 22s3.5 15 10 22" />
                    {/* Airplane flying across top left of globe */}
                    <path d="M32 18 L52 8 L44 26 L38 20 L28 26 L26 21 L32 18 Z" strokeWidth="2.2" />
                    <path d="M44 12 L38 20" />
                    {/* Motion lines / sparkles around plane */}
                    <path d="M18 16c-2 2-3 4-3 6" strokeWidth="1.8" />
                    <path d="M24 10c-1-3 0-5 2-6" strokeWidth="1.8" />
                    <path d="M54 18c3 0 5-1 7-3" strokeWidth="1.8" />
                  </svg>
                ),
              },
              {
                title: "Value For Money",
                description:
                  "Enjoy transparent pricing and thoughtfully designed packages suited to your travel needs and budget.",
                background: "bg-[#fff9f1]",
                iconBackground: "bg-[#fff0d9]",
                iconColor: "text-[#f4a51c]",
                icon: (
                  <svg
                    viewBox="0 0 80 80"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Lightning bolt badge */}
                    <path
                      d="M42 8 L22 40 h14 L26 70 L56 34 H40 L48 8 Z"
                      strokeWidth="2.5"
                    />
                    {/* Circle badge with % inside */}
                    <circle cx="30" cy="28" r="9" fill="white" strokeWidth="2.2" />
                    <path d="M26 32 l8-8" strokeWidth="2" />
                    <circle cx="27" cy="25" r="1.5" fill="currentColor" />
                    <circle cx="33" cy="31" r="1.5" fill="currentColor" />
                    {/* Burst lines around lightning */}
                    <path d="M58 16l6-4" strokeWidth="2" />
                    <path d="M62 28h7" strokeWidth="2" />
                    <path d="M52 50l6 5" strokeWidth="2" />
                    <path d="M16 20l-5-4" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: "Fast Booking",
                description:
                  "Book tours, flights, hotels, visa assistance and transport services conveniently in one place.",
                background: "bg-[#fffef1]",
                iconBackground: "bg-[#fbf7c9]",
                iconColor: "text-[#c9be00]",
                icon: (
                  <svg
                    viewBox="0 0 80 80"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Spiral binder loops on top */}
                    <path d="M24 10v8M38 10v8M52 10v8" strokeWidth="3" />
                    <path d="M20 12c0-3 8-3 8 0M34 12c0-3 8-3 8 0M48 12c0-3 8-3 8 0" strokeWidth="2.2" />
                    {/* Calendar body */}
                    <rect x="14" y="16" width="50" height="50" rx="7" strokeWidth="2.4" />
                    <path d="M14 28h50" strokeWidth="2" />
                    {/* Grid dots / squares */}
                    <rect x="22" y="34" width="5" height="5" rx="1" />
                    <rect x="32" y="34" width="5" height="5" rx="1" />
                    <rect x="42" y="34" width="5" height="5" rx="1" />
                    <rect x="22" y="44" width="5" height="5" rx="1" />
                    <rect x="32" y="44" width="5" height="5" rx="1" />
                    <rect x="22" y="54" width="5" height="5" rx="1" />
                    {/* Checkmark badge inside calendar */}
                    <circle cx="48" cy="50" r="10" fill="white" strokeWidth="2.2" />
                    <path d="m43 50 3.5 3.5 7.5-7.5" strokeWidth="2.5" />
                  </svg>
                ),
              },
              {
                title: "Customized Tours",
                description:
                  "Personalized holiday packages for families, couples, groups, corporate travelers and special events.",
                background: "bg-[#fffef3]",
                iconBackground: "bg-[#fbf6cd]",
                iconColor: "text-[#d4c500]",
                icon: (
                  <svg
                    viewBox="0 0 80 80"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Person / Guide head */}
                    <circle cx="28" cy="24" r="8" strokeWidth="2.3" />
                    {/* Guide Cap with visor */}
                    <path d="M18 22h20" strokeWidth="2.8" />
                    <path d="M20 22c0-5 3.5-8 8-8s8 3.5 8 8" strokeWidth="2" />
                    {/* Guide body */}
                    <path d="M14 62v-10c0-7 6-12 14-12s14 5 14 12v10" strokeWidth="2.3" />
                    {/* Arm holding flag pole */}
                    <path d="M38 48l16-12" strokeWidth="2.3" />
                    {/* Flag pole */}
                    <path d="M54 14v50" strokeWidth="2.6" />
                    {/* Triangular flag */}
                    <path d="M54 16l18 8-18 8Z" fill="none" strokeWidth="2.3" />
                  </svg>
                ),
              },
              {
                title: "Complete Support 24/7",
                description:
                  "Our travel team assists you before, during and after your journey for a smooth and worry-free experience.",
                background: "bg-[#f2faf7]",
                iconBackground: "bg-[#daf1e7]",
                iconColor: "text-[#22a66f]",
                icon: (
                  <svg
                    viewBox="0 0 80 80"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Clock face */}
                    <circle cx="36" cy="30" r="16" strokeWidth="2.4" />
                    <path d="M36 20v10l6 4" strokeWidth="2.4" />
                    {/* Circular arrow around clock */}
                    <path d="M22 24a18 18 0 0 1 26-6" strokeWidth="2" />
                    <path d="M48 14l3 5-5 1" strokeWidth="2" />
                    {/* '24' text next to clock */}
                    <path d="M54 32h5v6h-5v-6z" strokeWidth="1.5" />
                    <path d="M55 24h3v5M61 24v9" strokeWidth="1.8" />
                    {/* Open hand supporting clock underneath */}
                    <path d="M10 60c8-6 16-5 24-2l16 4c6 2 12-1 16-6" strokeWidth="2.5" />
                    <path d="M10 52c6-1 12 1 18 5" strokeWidth="2.2" />
                  </svg>
                ),
              },
              {
                title: "Safe & Flexible Travel",
                description:
                  "Travel confidently with verified partners, secure arrangements and flexible customized travel planning.",
                background: "bg-[#fff8ef]",
                iconBackground: "bg-[#ffead0]",
                iconColor: "text-[#f39b19]",
                icon: (
                  <svg
                    viewBox="0 0 80 80"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Calendar top edge with dashes */}
                    <path d="M14 18h46" strokeWidth="2.8" strokeDasharray="3 3" />
                    {/* Calendar box frame */}
                    <rect x="14" y="20" width="46" height="44" rx="6" strokeWidth="2.4" />
                    {/* Criss-cross / shuffle arrows */}
                    {/* Top curve left to right */}
                    <path d="M22 36c8 0 12 12 24 12" strokeWidth="2.4" />
                    <path d="M42 44l4 4-4 4" strokeWidth="2.2" />
                    {/* Bottom curve left to right */}
                    <path d="M22 48c8 0 12-12 24-12" strokeWidth="2.4" />
                    <path d="M42 32l4 4-4 4" strokeWidth="2.2" />
                    {/* Clock face on bottom right corner */}
                    <circle cx="56" cy="56" r="11" fill="white" strokeWidth="2.3" />
                    <path d="M56 49v7l4 3" strokeWidth="2.2" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                variant="fade-in-up"
                delay={index * 100}
                duration={1300}
              >
                <article className="group relative h-full overflow-hidden rounded-[18px] border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0853a4]/20 hover:shadow-[0_20px_40px_rgba(8,83,164,0.08)] sm:p-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center font-jost">
                    <div
                      className={`flex shrink-0 items-center justify-center ${feature.iconColor} transition duration-500 group-hover:rotate-[6deg] group-hover:scale-105`}
                    >
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="font-rubik text-[21px] font-semibold leading-tight text-[#100c08] transition group-hover:text-[#0853a4] sm:text-[22px]">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US SECTION END ================= */}
    </>
  );
}

