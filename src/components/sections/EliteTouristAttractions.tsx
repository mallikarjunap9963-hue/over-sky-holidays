import { useState, useEffect } from 'react';
import type { AttractionTab } from '../../types';
import { attractionTabs, attractionPackages } from '../../data';


export function EliteTouristAttractions() {

  const [activeAttractionTab, setActiveAttractionTab] = useState<AttractionTab>("Kerala");
  const [attractionSlide, setAttractionSlide] = useState(0);
  const [pauseAttractionSlider, setPauseAttractionSlider] = useState(false);

  useEffect(() => {
    if (pauseAttractionSlider) return;
    const currentPackages = attractionPackages[activeAttractionTab];
    if (currentPackages.length <= 1) return;

    const autoSlider = window.setInterval(() => {
      setAttractionSlide((previous) => (previous + 1) % currentPackages.length);
    }, 4000);

    return () => window.clearInterval(autoSlider);
  }, [activeAttractionTab, pauseAttractionSlider]);

  const selectedAttractionPackages = attractionPackages[activeAttractionTab];
  const visibleAttractionPackages = Array.from(
    { length: Math.min(3, selectedAttractionPackages.length) },
    (_, offset) => selectedAttractionPackages[(attractionSlide + offset) % selectedAttractionPackages.length]
  );

  const selectAttractionTab = (tab: AttractionTab) => {
    setActiveAttractionTab(tab);
    setAttractionSlide(0);
  };

  const previousAttractionSlide = () => {
    setAttractionSlide((previous) =>
      previous === 0 ? selectedAttractionPackages.length - 1 : previous - 1,
    );
  };

  const nextAttractionSlide = () => {
    setAttractionSlide((previous) => (previous + 1) % selectedAttractionPackages.length);
  };

  return (
    <>
      {/* ================= ELITE TOURIST ATTRACTIONS START ================= */}
      <section
        id="elite-attractions"
        onMouseEnter={() => setPauseAttractionSlider(true)}
        onMouseLeave={() => setPauseAttractionSlider(false)}
        onTouchStart={() => setPauseAttractionSlider(true)}
        onTouchEnd={() => setPauseAttractionSlider(false)}
        className="relative overflow-hidden bg-[#fbf8f2] px-5 py-12 sm:px-8"
      >
        {/* Left decorative landmark */}
        <div className="pointer-events-none absolute -left-12 top-0 hidden text-[#0b84d8]/[0.07] lg:block">
          <svg
            viewBox="0 0 350 430"
            className="h-[430px] w-[350px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path d="M58 42v245M32 287h52M40 287l18-245 18 245" />
            <path d="M45 105h27M42 160h33M38 220h41" />
            <path d="M120 235c22-49 49-73 80-73s58 24 80 73" />
            <path d="M140 235c16-33 36-50 60-50s44 17 60 50" />
            <path d="M112 235h176M133 235v55M267 235v55" />
            <circle cx="285" cy="95" r="35" />
            <path d="M260 95h50M285 60c12 12 17 23 17 35s-5 23-17 35M285 60c-12 12-17 23-17 35s5 23 17 35" />
          </svg>
        </div>

        {/* Right decorative landmark */}
        <div className="pointer-events-none absolute -right-16 bottom-0 hidden text-[#0b84d8]/[0.07] lg:block">
          <svg
            viewBox="0 0 340 420"
            className="h-[420px] w-[340px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path d="M170 40c-16 30-28 74-31 122h62c-3-48-15-92-31-122Z" />
            <path d="M139 162h62v41h-62zM125 203h90v38h-90z" />
            <path d="M108 241h124v101H108z" />
            <path d="M132 342v-55h25v55M183 342v-55h25v55" />
            <path d="M93 342h154" />
            <path d="M26 105c42-33 79-27 105 18" />
            <path d="M28 105c18 4 31 14 40 29M70 87c8 13 12 28 10 44" />
          </svg>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* Heading */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0b84d8]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Popular Tour
              </p>

              <span className="h-px w-8 bg-[#0b84d8]" />
            </div>

            <h2 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]">
              Elite Tourist Attractions
            </h2>
          </div>

          {/* Destination tabs */}
          <div className="mx-auto mt-12 grid max-w-[930px] overflow-hidden rounded-[8px] border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-5 font-rubik">
            {attractionTabs.map((tab) => {
              const isActive = activeAttractionTab === tab.name;

              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => selectAttractionTab(tab.name)}
                  className={`relative min-h-[66px] overflow-hidden border-b border-[#dce6df] px-6 text-[15px] font-bold transition last:border-b-0 sm:border-r lg:border-b-0 ${
                    isActive
                      ? "text-white"
                      : "bg-white text-[#100c08] hover:bg-[#f0f9ff] hover:text-[#0b84d8]"
                  }`}
                >
                  {isActive && (
                    <>
                      <span
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url("${tab.image}")`,
                        }}
                      />

                      <span className="absolute inset-0 bg-[#100c08]/65" />
                    </>
                  )}

                  <span className="relative z-10">{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Package cards */}
          <div
            key={`${activeAttractionTab}-${attractionSlide}`}
            className="mt-12 grid animate-[attractionSlideIn_0.55s_ease-out] gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleAttractionPackages.map((item) => (
              <article
                key={`${activeAttractionTab}-${item.id}`}
                className="group overflow-hidden rounded-[10px] border border-slate-200/80 bg-white p-3 shadow-[0_10px_30px_rgba(16,12,8,0.03)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(16,12,8,0.08)]"
              >
                <div className="relative overflow-hidden rounded-[8px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-[245px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <span className="absolute left-0 top-4 bg-[#100c08] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.04em] text-white font-rubik">
                    {item.duration}
                  </span>

                  <div className="absolute left-0 top-[58px] flex flex-wrap font-rubik">
                    <span className="flex items-center gap-1.5 bg-white px-3 py-2 text-[9px] font-semibold uppercase text-[#0b84d8]">
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

                    <span className="bg-white px-3 py-2 text-[9px] font-semibold uppercase text-[#100c08]">
                      {item.tourType}
                    </span>
                  </div>
                </div>

                <div className="px-3 pb-2 pt-5 font-jost">
                  <h3 className="min-h-[62px] font-rubik text-[19px] font-semibold leading-[1.45] text-[#100c08] transition group-hover:text-[#0b84d8]">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex min-h-[48px] flex-wrap items-center gap-x-2 gap-y-2 border-b border-dashed border-slate-300 pb-2">
                    {item.locations.map((location, index) => (
                      <span
                        key={location}
                        className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.03em] text-slate-500"
                      >
                        {index !== 0 && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3 w-3 text-[#0b84d8]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        )}

                        {location}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-medium text-slate-500">
                        Starting From:
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <p className="font-rubik text-[24px] font-bold leading-none text-[#0b84d8]">
                          {item.price}
                        </p>

                        {item.oldPrice && (
                          <p className="text-[12px] text-slate-400 line-through">
                            {item.oldPrice}
                          </p>
                        )}
                      </div>

                      <p className="mt-2 text-[9px] font-medium uppercase tracking-wide text-slate-400">
                        Taxes Incl / Person
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="btn-primary min-h-[42px] shrink-0 rounded-[5px] px-5 text-[12px] font-bold text-white shadow-none"
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
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom controls */}
          <div className="mt-12 grid items-center gap-6 sm:grid-cols-3">
            <div className="flex justify-center sm:justify-start">
              <button
                type="button"
                onClick={previousAttractionSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0b84d8] text-[#0b84d8] transition hover:bg-[#0b84d8] hover:text-white"
                aria-label="Previous attraction packages"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <a
                href="#tours"
                className="btn-primary rounded-full min-h-[52px] px-9 text-[14px] font-bold shadow-[0_12px_28px_rgba(11,132,216,0.25)]"
              >
                View All Packages
              </a>
            </div>

            <div className="flex justify-center sm:justify-end">
              <button
                type="button"
                onClick={nextAttractionSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0b84d8] text-[#0b84d8] transition hover:bg-[#0b84d8] hover:text-white"
                aria-label="Next attraction packages"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ================= ELITE TOURIST ATTRACTIONS END ================= */}
    </>
  );
}
