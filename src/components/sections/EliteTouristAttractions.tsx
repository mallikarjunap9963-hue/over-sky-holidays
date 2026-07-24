import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { AttractionTab } from '../../types';
import { attractionTabs, attractionPackages } from '../../data';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BookingModal } from '../ui/BookingModal';

export function EliteTouristAttractions() {
  const [activeAttractionTab, setActiveAttractionTab] = useState<AttractionTab>("Domestic");
  const [attractionSlide, setAttractionSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Auto-scroll continuously through packages
  useEffect(() => {
    const currentPackages = attractionPackages[activeAttractionTab];
    if (currentPackages.length <= 1) return;

    const autoSlider = window.setInterval(() => {
      setAttractionSlide((previous) => (previous + 1) % currentPackages.length);
    }, 3500);

    return () => window.clearInterval(autoSlider);
  }, [activeAttractionTab]);

  const selectedAttractionPackages = attractionPackages[activeAttractionTab];
  const visibleAttractionPackages = Array.from(
    { length: Math.min(3, selectedAttractionPackages.length) },
    (_, offset) => selectedAttractionPackages[(attractionSlide + offset) % selectedAttractionPackages.length]
  );

  const selectAttractionTab = (tab: AttractionTab) => {
    setActiveAttractionTab(tab);
    setAttractionSlide(0);
  };

  return (
    <>
      {/* ================= ELITE TOURIST ATTRACTIONS START ================= */}
      <section
        id="elite-attractions"
        className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
      >
        {/* Anchor targets for header routing */}
        <div id="domestic-tours" className="absolute top-0 left-0" />
        <div id="international-tours" className="absolute top-0 left-0" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* Heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0853a4]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                Popular Tour
              </p>

              <span className="h-px w-8 bg-[#0853a4]" />
            </div>

            <h2 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]">
              Elite Tourist Attractions
            </h2>
          </ScrollReveal>

          {/* Destination tabs */}
          <ScrollReveal variant="fade-in-up" delay={200} duration={1300} className="mx-auto mt-12 grid max-w-[450px] overflow-hidden rounded-[8px] border border-slate-200 bg-white grid-cols-2 sm:grid-cols-2 font-rubik">
            {attractionTabs.map((tab) => {
              const isActive = activeAttractionTab === tab.name;

              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => selectAttractionTab(tab.name)}
                  className={`relative min-h-[66px] overflow-hidden border-b border-[#dce6df] px-6 text-[15px] font-bold tracking-wide transition last:border-b-0 sm:border-r lg:border-b-0 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "bg-white text-[#100c08] hover:bg-[#f0f9ff] hover:text-[#0853a4]"
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

          {/* Package cards with auto-scroll */}
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
                <Link
                  to={`/tour/${activeAttractionTab.toLowerCase()}/${item.id}`}
                  className="group overflow-hidden rounded-[12px] border border-slate-200/70 bg-white p-3 shadow-[0_8px_24px_rgba(16,12,8,0.03)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(16,12,8,0.07)] h-full flex flex-col cursor-pointer"
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
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0853a4] font-rubik">
                      {item.country}
                    </span>

                    {/* Place Name */}
                    <h3 className="mt-1 font-rubik text-[20px] font-bold leading-snug text-[#100c08] transition duration-300 group-hover:text-[#0853a4]">
                      {item.title}
                    </h3>

                    {/* Duration label */}
                    <p className="mt-1 text-[13px] font-medium text-slate-500">
                      {item.duration}
                    </p>

                    {/* Footer Explore Button */}
                    <div className="mt-auto pt-4 flex items-center justify-end border-t border-slate-100">
                      <span className="font-rubik text-[12px] font-bold uppercase tracking-widest text-[#0853a4] transition duration-300 flex items-center gap-1 group-hover:translate-x-1">
                        Explore
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
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom View All Button */}
          <ScrollReveal variant="fade-in-up" delay={300} duration={1300} className="mt-12 flex justify-center">
            <Link
              to={activeAttractionTab === "Domestic" ? "/tours/domestic" : "/tours/international"}
              className="btn-primary rounded-full min-h-[52px] px-9 text-[14px] font-bold shadow-[0_12px_28px_rgba(8,83,164,0.25)] inline-flex items-center justify-center"
            >
              View All Packages
            </Link>
          </ScrollReveal>
        </div>
      </section>
      {/* ================= ELITE TOURIST ATTRACTIONS END ================= */}
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

