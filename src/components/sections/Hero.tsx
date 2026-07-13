import { useState, useEffect } from 'react';
import { slides } from '../../data';
import { LocationIcon, ArrowLeftIcon, ArrowRightIcon } from '../icons/Icons';


export function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <>
      {/* HERO SECTION */}
        <div className="relative min-h-[620px] overflow-hidden rounded-[32px] bg-[#100c08] shadow-[0_30px_80px_rgba(16,12,8,0.22)] sm:min-h-[680px] lg:min-h-[720px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
                currentSlide === index
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-105 opacity-0"
              }`}
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            />
          ))}

          <div className="absolute inset-0 bg-black/[0.46]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1120px] flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[680px] sm:px-8 lg:min-h-[720px] lg:px-10">
            <div className="mb-7 flex min-w-[220px] items-center justify-center gap-2 bg-[#0b84d8] px-9 py-3 text-white [clip-path:polygon(8%_0,92%_0,100%_18%,94%_86%,8%_100%,0_80%)]">
              <LocationIcon />

              <span className="text-lg font-semibold font-rubik">
                {activeSlide.location}
              </span>
            </div>

            <h1 className="max-w-[920px] text-[42px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[72px] font-rubik">
              {activeSlide.title}
            </h1>

            <p className="mt-7 max-w-[930px] text-[15px] font-medium leading-7 text-white/95 sm:text-[17px] sm:leading-8 font-jost">
              {activeSlide.description}
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="#domestic-tours"
                className="btn-primary min-h-[56px] min-w-[182px] rounded-[6px] shadow-[0_12px_30px_rgba(11,132,216,0.28)]"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* SLIDER DOTS */}
          <div className="absolute bottom-9 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 sm:flex">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-10 bg-[#0b84d8]"
                    : "w-5 bg-white/55 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* BOOKING SEARCH PANEL */}
    </>
  );
}
