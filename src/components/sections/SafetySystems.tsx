import { useState, useEffect } from 'react';
import { contentApi } from '../../api/contentApi';
import { formatImageUrl } from '../../api/imageHelper';
import { ScrollReveal } from '../ui/ScrollReveal';
import homePageFacilityImg from '../../assets/home page facilty.png';
import homePageAssistanceImg from '../../assets/home page assitence.png';

interface ProcessSlide {
  id: number | string;
  subtitle: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

const DEFAULT_SLIDE_IMAGES = [homePageFacilityImg, homePageAssistanceImg];

export function SafetySystems() {
  const [slides, setSlides] = useState<ProcessSlide[]>([]);
  const [activeSafetySlide, setActiveSafetySlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadProcesses() {
      try {
        const supportRes = await contentApi.getTravelSupportActive();
        if (!isMounted) return;

        if (supportRes.isLive && Array.isArray(supportRes.items) && supportRes.items.length > 0) {
          // Sort by ID ascending: 1 (Our Facility) -> 2 (Complete Assistance)
          const sorted = [...supportRes.items].sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0));
          const mapped: ProcessSlide[] = sorted.map((item: any, i: number) => ({
            id: item.id || i,
            subtitle: item.small_heading || "Our Facility",
            title: item.heading || "Finest Safety Systems",
            description: item.description || "",
            points: Array.isArray(item.features)
              ? item.features.map((f: any) => (typeof f === 'object' ? f.text || f.title || '' : String(f))).filter(Boolean)
              : (Array.isArray(item.promises) ? item.promises.map((p: any) => p.text || String(p)) : []),
            image: formatImageUrl(item.image_url || item.image, DEFAULT_SLIDE_IMAGES[i % DEFAULT_SLIDE_IMAGES.length]),
          }));
          setSlides(mapped);
          return;
        }

        // Fallback to our processes if travel support is empty
        const res = await contentApi.getOurProcessesActive();
        if (!isMounted) return;

        if (res.items && Array.isArray(res.items) && res.items.length > 0) {
          const mapped: ProcessSlide[] = res.items.map((item: any, i: number) => ({
            id: item.id || i,
            subtitle: item.small_heading || "",
            title: item.heading || "",
            description: item.description || "",
            points: Array.isArray(item.promises)
              ? item.promises.map((p: any) => (typeof p === 'object' ? p.text || p.title || '' : String(p))).filter(Boolean)
              : [],
            image: formatImageUrl(item.image_url || item.image, DEFAULT_SLIDE_IMAGES[i % DEFAULT_SLIDE_IMAGES.length]),
          }));
          setSlides(mapped);
        } else {
          setSlides([]);
        }
      } catch (err) {
        console.error("Error loading travel support API:", err);
        setSlides([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadProcesses();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const autoSlide = window.setInterval(() => {
      setActiveSafetySlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(autoSlide);
  }, [slides.length]);

  if (loading) {
    return (
      <section id="services" className="relative overflow-hidden bg-[#fbf8f2] py-10">
        <div className="relative mx-auto max-w-[1320px]">
          <div className="min-h-[460px] animate-pulse rounded-[14px] bg-slate-200/60" />
        </div>
      </section>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  const current = slides[activeSafetySlide] || slides[0];

  return (
    <>
      {/* ================= SAFETY SYSTEMS SECTION START ================= */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#fbf8f2] py-10"
      >
        <div className="relative mx-auto max-w-[1320px]">
          <div className="relative grid min-h-[460px] lg:min-h-[480px] lg:grid-cols-2 rounded-[14px] overflow-hidden border border-slate-200/60 shadow-sm">
            {/* LEFT CONTENT */}
            <ScrollReveal
              variant="fade-in-left"
              duration={1300}
              className="relative flex items-center overflow-hidden bg-[#fdfaf7] px-6 py-10 sm:px-10 lg:px-12 xl:px-16 h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(8,83,164,0.08) 0 2px, transparent 2px), radial-gradient(circle at 75% 70%, rgba(8,83,164,0.06) 0 2px, transparent 2px)",
                backgroundSize: "85px 85px, 110px 110px",
              }}
            >
              {/* Decorative map-style circles */}
              <div className="pointer-events-none absolute -left-36 bottom-0 h-80 w-80 rounded-full border border-[#0853a4]/5" />
              <div className="pointer-events-none absolute -left-20 bottom-14 h-52 w-52 rounded-full border border-[#0853a4]/5" />

              <div className="relative z-10 w-full max-w-[660px]">
                {/* SMALL TITLE */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#0853a4]" />

                  <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                    {current.subtitle}
                  </p>

                  <span className="h-px w-9 bg-[#0853a4]" />
                </div>

                {/* MAIN TITLE */}
                <h2 className="mt-4 font-rubik text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-[#100c08] sm:text-[46px] lg:text-[52px]">
                  {current.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-[610px] text-[15px] leading-8 text-slate-600 sm:text-[16px] font-jost">
                  {current.description}
                </p>

                {/* SAFETY POINTS */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {current.points.map((point: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 font-jost">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0853a4] text-xs font-bold text-white shadow-sm">
                        ✓
                      </span>
                      <span className="text-[15px] font-medium text-[#100c08]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* SLIDER CONTROLS */}
                <div className="mt-10 flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSafetySlide(
                        (previous) =>
                          (previous - 1 + slides.length) % slides.length,
                      )
                    }
                    className="flex items-center gap-3 text-[#0853a4] transition hover:text-[#100c08]"
                    aria-label="Previous safety slide"
                  >
                    <span className="h-px w-10 bg-current" />
                  </button>

                  <div className="flex items-end gap-3 font-rubik">
                    <span className="text-[30px] font-medium text-[#0853a4]">
                      {activeSafetySlide + 1}
                    </span>

                    <span className="pb-1 text-[20px] text-slate-400">/</span>

                    <span className="pb-1 text-[20px] text-[#fbb03b]">
                      {slides.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveSafetySlide(
                        (previous) => (previous + 1) % slides.length,
                      )
                    }
                    className="flex items-center gap-3 text-[#0853a4] transition hover:text-[#100c08]"
                    aria-label="Next safety slide"
                  >
                    <span className="h-px w-10 bg-current" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT IMAGE */}
            <ScrollReveal
              variant="fade-in-right"
              duration={1400}
              className="relative min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden h-full"
            >
              {slides.map((slide, index) => (
                <img
                  key={slide.id || index}
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${activeSafetySlide === index
                    ? "visible scale-100 opacity-100"
                    : "invisible scale-105 opacity-0"
                    }`}
                />
              ))}

              <div className="absolute inset-0 bg-[#100c08]/10" />
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* ================= SAFETY SYSTEMS SECTION END ================= */}
    </>
  );
}
