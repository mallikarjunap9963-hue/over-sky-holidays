import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slides } from '../../data';

import { ScrollReveal } from '../ui/ScrollReveal';

export function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[calc(100vh-212px)] lg:h-[calc(100vh-199px)] min-h-[480px] lg:min-h-[320px] overflow-hidden bg-[#100c08] shadow-[0_30px_80px_rgba(16,12,8,0.15)]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${currentSlide === index
              ? "visible scale-100 opacity-100"
              : "invisible scale-105 opacity-0"
              }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/[0.30]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center px-5 py-4 pb-10 sm:pb-14 lg:pb-20 text-center sm:px-8 lg:px-10">
          <ScrollReveal variant="fade-in-up" delay={400} duration={1450}>
            <h1 className="max-w-none text-[26px] sm:text-[38px] lg:text-[48px] xl:text-[52px] font-extrabold leading-tight tracking-[-0.02em] text-white font-rubik whitespace-normal md:whitespace-nowrap">
              {activeSlide.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-in-up" delay={650} duration={1500}>
            <p className="mt-4 max-w-[680px] text-[13px] sm:text-[15.5px] font-normal leading-relaxed text-white/80 font-jost">
              {activeSlide.description}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-in-up" delay={900} duration={1550}>
            <div className="mt-7 flex justify-center">
              <Link
                to="/tours/domestic"
                className="btn-primary min-h-[46px] sm:min-h-[52px] min-w-[150px] sm:min-w-[170px] rounded-[6px] text-sm sm:text-base shadow-[0_10px_24px_rgba(11,132,216,0.18)]"
              >
                Explore More
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* SLIDER DOTS */}
        <ScrollReveal variant="fade-in" delay={1150} duration={1500} className="absolute bottom-9 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 sm:flex">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${currentSlide === index
                ? "w-10 bg-[#0b84d8]"
                : "w-5 bg-white/55 hover:bg-white"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </ScrollReveal>
      </div>

      {/* BOOKING SEARCH PANEL */}
    </>
  );
}

