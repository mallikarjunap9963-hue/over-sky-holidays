import { useState, useEffect } from 'react';
import type { AttractionTab } from '../../types';
import { attractionTabs, attractionPackages } from '../../data';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BookingModal } from '../ui/BookingModal';

export function EliteTouristAttractions() {

  const [activeAttractionTab, setActiveAttractionTab] = useState<AttractionTab>("Domestic");
  const [attractionSlide, setAttractionSlide] = useState(0);
  const [pauseAttractionSlider, setPauseAttractionSlider] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
        className="relative overflow-hidden bg-[#fbf8f2] px-5 py-10 sm:px-8"
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
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
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
          </ScrollReveal>

          {/* Destination tabs */}
          <ScrollReveal variant="fade-in-up" delay={200} duration={1300} className="mx-auto mt-12 grid max-w-[850px] overflow-hidden rounded-[8px] border border-slate-200 bg-white grid-cols-2 sm:grid-cols-4 font-rubik">
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
          </ScrollReveal>

          {/* Package cards */}
          <div
            key={`${activeAttractionTab}-${attractionSlide}`}
            className="mt-12 grid animate-[attractionSlideIn_0.55s_ease-out] gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {visibleAttractionPackages.map((item, index) => (
              <ScrollReveal
                key={`${activeAttractionTab}-${item.id}`}
                variant="fade-in-up"
                delay={index * 100}
                duration={1300}
              >
                <article
                  className="group overflow-hidden rounded-[12px] border border-slate-200/70 bg-white p-3 shadow-[0_8px_24px_rgba(16,12,8,0.03)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(16,12,8,0.07)] h-full flex flex-col cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  {/* Shorter landscape image on top */}
                  <div className="relative overflow-hidden rounded-[8px] aspect-[16/10] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>

                  {/* Text details below */}
                  <div className="px-1 pb-1 pt-4 flex flex-col flex-grow font-jost">
                    {/* Country name */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0b84d8] font-rubik">
                      {item.country}
                    </span>

                    {/* Place Name */}
                    <h3 className="mt-1 font-rubik text-[20px] font-bold leading-snug text-[#100c08] transition duration-300 group-hover:text-[#0b84d8]">
                      {item.title}
                    </h3>

                    {/* Duration label */}
                    <p className="mt-1 text-[13px] font-medium text-slate-500">
                      {item.duration}
                    </p>

                    {/* Footer Book Button */}
                    <div className="mt-auto pt-4 flex items-center justify-end border-t border-slate-100">
                      <span className="font-rubik text-[12px] font-bold uppercase tracking-widest text-[#0b84d8] transition duration-300 flex items-center gap-1 group-hover:translate-x-1">
                        Book Now
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom controls */}
          <ScrollReveal variant="fade-in-up" delay={300} duration={1300} className="mt-12 grid items-center gap-6 sm:grid-cols-3">
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
          </ScrollReveal>
        </div>
      </section>
      {/* ================= ELITE TOURIST ATTRACTIONS END ================= */}
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

