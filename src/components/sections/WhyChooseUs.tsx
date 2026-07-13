import React from 'react';

export function WhyChooseUs() {

  return (
    <>
      {/* ================= WHY CHOOSE US SECTION START ================= */}
      <section
        id="why-choose-us"
        className="relative overflow-hidden bg-white px-5 py-12 sm:px-8"
      >
        {/* Decorative travel drawing */}
        <div className="pointer-events-none absolute right-0 top-0 hidden text-[#0b84d8]/[0.05] lg:block">
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

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#0b84d8]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* Section heading */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0b84d8]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Our Success
              </p>

              <span className="h-px w-8 bg-[#0b84d8]" />
            </div>

            <h2 className="mt-4 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
              Why Choose Open Sky Holidays
            </h2>
          </div>

          {/* Feature cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Worldwide Coverage",
                description:
                  "Explore domestic and international destinations with complete planning and trusted travel support.",
                background: "bg-[#f0f9ff]",
                iconBackground: "bg-[#bae6fd]",
                iconColor: "text-[#0b84d8]",
                icon: (
                  <svg
                    viewBox="0 0 64 64"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="32" cy="32" r="25" />
                    <path d="M8 32h48M32 7c8 8 12 16 12 25S40 49 32 57M32 7c-8 8-12 16-12 25s4 17 12 25" />
                    <path d="m39 21 13-7-6 13-4-4-7 6-3-3 7-5Z" />
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
                    viewBox="0 0 64 64"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M11 18h28l14 14-20 20L11 30V18Z" />
                    <circle cx="21" cy="27" r="4" />
                    <path d="M36 23c-5-4-12 3-5 7 7 3 1 11-6 7M30 21v19" />
                    <path d="m45 10-5 10M54 17l-10 5" />
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
                    viewBox="0 0 64 64"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="10" y="14" width="44" height="40" rx="6" />
                    <path d="M10 25h44M20 8v12M44 8v12" />
                    <path d="M20 33h7v7h-7zM36 33h7v7h-7zM20 44h7v7h-7z" />
                    <path d="m37 47 4 4 8-10" />
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
                    viewBox="0 0 64 64"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="25" cy="20" r="9" />
                    <path d="M10 52v-8c0-9 7-15 15-15s15 6 15 15v8" />
                    <path d="M47 17v30M47 17l10 6-10 6" />
                    <path d="M18 20h14M21 16v8M29 16v8" />
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
                    viewBox="0 0 64 64"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="39" cy="22" r="14" />
                    <path d="M39 14v8l6 4" />
                    <path d="M16 52c0-9 7-15 15-15 6 0 11 3 14 8" />
                    <path d="M9 45c7-2 13 0 18 6 4 5 11 5 17 1l11-8" />
                    <path d="M52 15h5v10h-5" />
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
                    viewBox="0 0 64 64"
                    className="h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="8" y="11" width="41" height="39" rx="5" />
                    <path d="M8 22h41M18 6v11M39 6v11" />
                    <path d="m19 34 8 8M27 34l-8 8" />
                    <path d="m33 34 8 8M41 34l-8 8" />
                    <circle cx="48" cy="46" r="10" />
                    <path d="M48 40v6l4 3" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-[18px] border border-slate-200/80 ${feature.background} px-6 py-8 transition duration-300 hover:-translate-y-2 hover:border-[#0b84d8]/30 hover:shadow-[0_20px_45px_rgba(16,12,8,0.06)] sm:px-8`}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center font-jost">
                  <div
                    className={`flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full ${feature.iconBackground} ${feature.iconColor} transition duration-500 group-hover:rotate-[8deg] group-hover:scale-105`}
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="font-rubik text-[21px] font-semibold leading-tight text-[#100c08] transition group-hover:text-[#0b84d8] sm:text-[22px]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US SECTION END ================= */}
    </>
  );
}
