import { useState, useEffect } from 'react';
import { safetySlides } from '../../data';


export function SafetySystems() {

  const [activeSafetySlide, setActiveSafetySlide] = useState(0);

  useEffect(() => {
    const autoSlide = window.setInterval(() => {
      setActiveSafetySlide((previous) => (previous + 1) % safetySlides.length);
    }, 5000);

    return () => window.clearInterval(autoSlide);
  }, []);

  return (
    <>
      {/* ================= SAFETY SYSTEMS SECTION START ================= */}
      <section
        id="services"
        className="relative overflow-hidden bg-white py-12"
      >
        <div className="relative mx-auto max-w-[1320px]">
          <div className="relative grid min-h-[650px] lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div
              className="relative flex items-center overflow-hidden bg-[#fdfaf7] px-5 py-16 sm:px-10 lg:px-16 xl:px-24"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(11,132,216,0.08) 0 2px, transparent 2px), radial-gradient(circle at 75% 70%, rgba(11,132,216,0.06) 0 2px, transparent 2px)",
                backgroundSize: "85px 85px, 110px 110px",
              }}
            >
              {/* Decorative map-style circles */}
              <div className="pointer-events-none absolute -left-36 bottom-0 h-80 w-80 rounded-full border border-[#0b84d8]/5" />

              <div className="pointer-events-none absolute -left-20 bottom-14 h-52 w-52 rounded-full border border-[#0b84d8]/5" />

              <div className="relative z-10 w-full max-w-[660px]">
                {/* SMALL TITLE */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#0b84d8]" />

                  <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                    {safetySlides[activeSafetySlide].subtitle}
                  </p>

                  <span className="h-px w-9 bg-[#0b84d8]" />
                </div>

                {/* MAIN TITLE */}
                <h2 className="mt-4 font-rubik text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-[#100c08] sm:text-[46px] lg:text-[52px]">
                  {safetySlides[activeSafetySlide].title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-[610px] text-[15px] leading-8 text-slate-600 sm:text-[16px] font-jost">
                  {safetySlides[activeSafetySlide].description}
                </p>

                {/* SAFETY POINTS */}
                <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2 font-jost">
                  {safetySlides[activeSafetySlide].points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0b84d8]" />

                      <p className="text-[14px] font-semibold text-[#100c08] sm:text-[15px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>



                {/* SLIDER CONTROLS */}
                <div className="mt-12 flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSafetySlide((previous) =>
                        previous === 0 ? safetySlides.length - 1 : previous - 1,
                      )
                    }
                    className="flex items-center gap-3 text-[#0b84d8] transition hover:text-[#100c08]"
                    aria-label="Previous safety slide"
                  >


                    <span className="h-px w-10 bg-current" />
                  </button>

                  <div className="flex items-end gap-3 font-rubik">
                    <span className="text-[30px] font-medium text-[#0b84d8]">
                      {activeSafetySlide + 1}
                    </span>

                    <span className="pb-1 text-[20px] text-slate-400">/</span>

                    <span className="pb-1 text-[20px] text-[#fbb03b]">
                      {safetySlides.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveSafetySlide(
                        (previous) => (previous + 1) % safetySlides.length,
                      )
                    }
                    className="flex items-center gap-3 text-[#0b84d8] transition hover:text-[#100c08]"
                    aria-label="Next safety slide"
                  >
                    <span className="h-px w-10 bg-current" />


                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[520px] overflow-hidden lg:min-h-[650px]">
              {safetySlides.map((slide, index) => (
                <img
                  key={slide.id}
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
            </div>
          </div>
        </div>
      </section>
      {/* ================= SAFETY SYSTEMS SECTION END ================= */}
    </>
  );
}

