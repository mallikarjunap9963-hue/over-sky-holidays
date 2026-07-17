import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { ExperienceTab } from '../../types';
import { experienceTabs, experienceItems } from '../../data';
import { ScrollReveal } from '../ui/ScrollReveal';

export function UltimateTravelExperience() {

  const [activeExperienceTab, setActiveExperienceTab] = useState<ExperienceTab>("Tour Packages");

  return (
    <>
      {/* ================= ULTIMATE TRAVEL EXPERIENCE START ================= */}
      <section
        id="tours"
        className="relative overflow-hidden bg-white px-5 py-12 sm:px-8"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#0853a4]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#fbb03b]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* SECTION HEADING */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#0853a4]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                Tour Experience
              </p>

              <span className="h-px w-7 bg-[#0853a4]" />
            </div>

            <h2 className="mt-3 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
              Ultimate Travel Experience
            </h2>

            {/* TABS */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-9 font-rubik">
              {experienceTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveExperienceTab(tab)}
                  className={`group flex items-center gap-2 border-b-2 pb-2 text-[14px] font-semibold transition cursor-pointer ${
                    activeExperienceTab === tab
                      ? "border-[#0853a4] text-[#0853a4]"
                      : "border-transparent text-slate-500 hover:text-[#0853a4]"
                  }`}
                >
                  {tab === "Tour Packages" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  )}

                  {tab === "Hotel" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M4 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v10M2 21h20" />
                      <path d="M8 7h2M13 7h2M8 11h2M13 11h2" />
                    </svg>
                  )}

                  {tab === "Transport" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="4" y="3" width="16" height="15" rx="3" />
                      <path d="M7 18v3M17 18v3M4 13h16M8 7h8" />
                    </svg>
                  )}

                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* CARDS */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experienceItems[activeExperienceTab].map((item, index) => {
              const isTour = activeExperienceTab === "Tour Packages";
              const CardWrapper = isTour ? Link : 'article';
              const wrapperProps = isTour
                ? { to: `/tour/packages/${item.id}` }
                : {} as any;

              return (
                <ScrollReveal
                  key={`${activeExperienceTab}-${item.id}`}
                  variant="fade-in-up"
                  delay={index * 100}
                  duration={1300}
                >
                  <CardWrapper
                    {...wrapperProps}
                    className="group overflow-hidden rounded-[18px] border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(16,12,8,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(16,12,8,0.1)] h-full block"
                  >
                    {/* IMAGE */}
                    <div className="relative m-3 overflow-hidden rounded-[7px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-[235px] w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                      {/* DURATION */}
                      <span className="absolute left-0 top-0 bg-[#100c08] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.04em] text-white font-rubik">
                        {item.duration}
                      </span>

                      {/* COUNTRY AND TYPE */}
                      <div className="absolute left-3 top-11 flex flex-wrap gap-1.5 font-rubik">
                        <span className="flex items-center gap-1 bg-white px-2.5 py-1.5 text-[9px] font-semibold uppercase text-[#0853a4] shadow">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>

                          {item.country}
                        </span>

                        <span className="bg-white px-2.5 py-1.5 text-[9px] font-semibold uppercase text-[#100c08] shadow">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="px-5 pb-4 pt-2 font-jost text-left">
                      <h3 className="min-h-[56px] font-rubik text-[17px] font-semibold leading-[1.45] text-[#100c08] transition group-hover:text-[#0853a4]">
                        {item.title}
                      </h3>

                      {/* LOCATIONS */}
                      <div className="mt-4 flex min-h-[42px] flex-wrap items-center gap-x-2 gap-y-2 border-b border-dashed border-slate-200/60 pb-2">
                        {item.locations.map((location, index) => (
                          <span
                            key={location}
                            className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.03em] text-slate-500"
                          >
                            {index !== 0 && (
                              <svg
                                viewBox="0 0 24 24"
                                className="h-3 w-3 text-[#0853a4]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                              >
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            )}

                            {location}
                          </span>
                        ))}
                      </div>

                      {/* ACTION BUTTON */}
                      <div className="mt-5 flex items-center justify-end">
                        {isTour ? (
                          <span className="btn-primary min-h-[40px] shrink-0 rounded-[4px] px-4 text-[12px] font-bold text-white">
                            Book A Trip
                            <svg
                              viewBox="0 0 24 24"
                              className="ml-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        ) : (
                          <Link
                            to="/contact"
                            className="btn-primary min-h-[40px] shrink-0 rounded-[4px] px-4 text-[12px] font-bold text-white"
                          >
                            Book A Trip
                            <svg
                              viewBox="0 0 24 24"
                              className="ml-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardWrapper>
                </ScrollReveal>
              );
            })}
          </div>

          {/* VIEW ALL BUTTON */}
          <ScrollReveal variant="fade-in-up" delay={300} duration={1300} className="mt-12 text-center">
            <Link
              to="/tours/domestic"
              className="btn-primary min-h-[52px] rounded-[5px] px-8 text-[14px] font-bold"
            >
              View All Packages
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
            </Link>
          </ScrollReveal>
        </div>
      </section>
      {/* ================= ULTIMATE TRAVEL EXPERIENCE END ================= */}
    </>
  );
}

