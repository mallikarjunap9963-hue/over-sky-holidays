import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { AttractionTab } from '../../types';
import { toursApi } from '../../api/toursApi';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BookingModal } from '../ui/BookingModal';

const ATTRACTION_TABS: { name: AttractionTab; image: string }[] = [
  {
    name: "Domestic",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "International",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=90",
  },
];

export function EliteTouristAttractions() {
  const [activeAttractionTab, setActiveAttractionTab] = useState<AttractionTab>("Domestic");
  const [attractionSlide, setAttractionSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [domesticApiPackages, setDomesticApiPackages] = useState<any[]>([]);
  const [internationalApiPackages, setInternationalApiPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchLiveTours() {
      try {
        setLoading(true);
        const [domRes, intRes] = await Promise.all([
          toursApi.getDomesticTours(),
          toursApi.getInternationalTours(),
        ]);
        if (!isMounted) return;

        if (domRes.isLive) {
          setDomesticApiPackages(domRes.tours || []);
        }
        if (intRes.isLive) {
          setInternationalApiPackages(intRes.tours || []);
        }
      } catch (err) {
        console.error("Failed to fetch live tours for homepage attractions:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchLiveTours();
    return () => {
      isMounted = false;
    };
  }, []);

  const selectedAttractionPackages = activeAttractionTab === "Domestic"
    ? domesticApiPackages
    : internationalApiPackages;

  // Auto-scroll continuously through packages
  useEffect(() => {
    if (selectedAttractionPackages.length <= 1) return;

    const autoSlider = window.setInterval(() => {
      setAttractionSlide((previous) => (previous + 1) % selectedAttractionPackages.length);
    }, 3500);

    return () => window.clearInterval(autoSlider);
  }, [selectedAttractionPackages]);

  const visibleAttractionPackages = selectedAttractionPackages.length > 0
    ? Array.from(
        { length: Math.min(3, selectedAttractionPackages.length) },
        (_, offset) => selectedAttractionPackages[(attractionSlide + offset) % selectedAttractionPackages.length]
      )
    : [];


  const totalMobileSlides = selectedAttractionPackages.length;

  // Auto-scroll on mobile
  useEffect(() => {
    if (totalMobileSlides <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % totalMobileSlides);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalMobileSlides, isPaused]);

  const prevMobileSlide = () => {
    if (totalMobileSlides === 0) return;
    setMobileSlide((prev) => (prev - 1 + totalMobileSlides) % totalMobileSlides);
  };

  const nextMobileSlide = () => {
    if (totalMobileSlides === 0) return;
    setMobileSlide((prev) => (prev + 1) % totalMobileSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      nextMobileSlide();
    } else if (diff < -45) {
      prevMobileSlide();
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 2500);
  };

  const selectAttractionTab = (tab: AttractionTab) => {
    setActiveAttractionTab(tab);
    setAttractionSlide(0);
    setMobileSlide(0);
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
            {ATTRACTION_TABS.map((tab) => {
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
          {loading ? (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-[12px] border border-slate-200/70 bg-white p-3 shadow-[0_8px_24px_rgba(16,12,8,0.03)] h-full flex flex-col animate-pulse"
                >
                  {/* Shorter landscape image skeleton */}
                  <div className="aspect-[16/10] w-full rounded-[8px] bg-slate-200" />

                  {/* Text details skeleton */}
                  <div className="px-1 pb-1 pt-4 flex flex-col flex-grow">
                    {/* Country name */}
                    <div className="h-3 w-16 rounded bg-slate-200" />

                    {/* Place Name */}
                    <div className="mt-2.5 h-6 w-3/4 rounded bg-slate-200" />

                    {/* Duration label */}
                    <div className="mt-2 h-4 w-24 rounded bg-slate-100" />

                    {/* Footer Explore Button */}
                    <div className="mt-6 pt-4 flex items-center justify-end border-t border-slate-100">
                      <div className="h-4 w-16 rounded bg-slate-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : visibleAttractionPackages.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-12 text-center font-jost">
              <p className="font-rubik text-base font-semibold text-slate-700">No {activeAttractionTab} Tours Available</p>
              <p className="mt-1 text-sm text-slate-500">Check back soon for new travel packages.</p>
            </div>
          ) : (
            <>
              {/* ================= MOBILE AUTO-SCROLL SLIDER (< md only) ================= */}
              <div
                className="relative md:hidden mt-8"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Mobile Slider Track */}
                <div className="overflow-hidden rounded-[16px] border border-slate-200/80 bg-white shadow-md">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
                  >
                    {selectedAttractionPackages.map((item) => (
                      <div key={item.id} className="w-full shrink-0 p-3.5">
                        <Link
                          to={`/tour/${activeAttractionTab.toLowerCase()}/${item.id}`}
                          className="group block overflow-hidden rounded-[12px] bg-white cursor-pointer"
                        >
                          {/* Landscape Image */}
                          <div className="relative overflow-hidden rounded-[10px] aspect-[16/10] w-full bg-slate-100">
                            <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <span className="absolute top-3 left-3 bg-[#100c08]/85 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-white rounded font-rubik">
                              {item.duration}
                            </span>
                          </div>

                          {/* Text Details */}
                          <div className="px-1 pt-3.5 pb-1 flex flex-col font-jost">
                            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0853a4] font-rubik">
                              {item.country}
                            </span>

                            <h3 className="mt-1 font-rubik text-[20px] font-bold leading-snug text-[#100c08] transition group-hover:text-[#0853a4]">
                              {item.title}
                            </h3>

                            <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100">
                              <span className="text-xs text-slate-500 font-medium">Click to view details</span>
                              <span className="font-rubik text-[12px] font-bold uppercase tracking-wider text-[#0853a4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Explore
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Navigation Controls: Centered Dots */}
                <div className="mt-5 flex items-center justify-center gap-2 overflow-hidden py-1">
                  {Array.from({ length: Math.min(8, totalMobileSlides) }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setMobileSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                        mobileSlide % Math.min(8, totalMobileSlides) === idx
                          ? 'w-7 bg-[#0853a4]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Below dots on mobile: View All Packages button */}
                <div className="mt-6 flex justify-center">
                  <Link
                    to={activeAttractionTab === "Domestic" ? "/tours/domestic" : "/tours/international"}
                    className="btn-primary rounded-[6px] min-h-[46px] px-8 text-[14px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.22)] inline-flex items-center justify-center font-rubik"
                  >
                    View All Packages
                  </Link>
                </div>
              </div>

              {/* ================= DESKTOP VIEW (Hidden on mobile < md) ================= */}
              <div className="hidden md:block">
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
                    className="btn-primary rounded-[6px] min-h-[52px] px-9 text-[14px] font-bold shadow-[0_12px_28px_rgba(8,83,164,0.25)] inline-flex items-center justify-center font-rubik"
                  >
                    View All Packages
                  </Link>
                </ScrollReveal>
              </div>
            </>
          )}
        </div>
      </section>
      {/* ================= ELITE TOURIST ATTRACTIONS END ================= */}
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

