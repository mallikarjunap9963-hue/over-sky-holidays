import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedGlobe } from '../ui/AnimatedGlobe';

export function AboutUs() {
  const [activeAboutTab, setActiveAboutTab] = useState<'mission' | 'customer'>('mission');
  const [customerCount, setCustomerCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 1400;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const counter = window.setInterval(() => {
            frame += 1;
            const progress = Math.min(frame / totalFrames, 1);
            setCustomerCount(Math.round(progress * 10200));

            if (progress === 1) {
              window.clearInterval(counter);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= ABOUT US SECTION START ================= */}
      <section
        ref={sectionRef}
        id="about"
        className="relative overflow-hidden bg-white px-5 py-8 sm:py-10 sm:px-8"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-[#f0f9ff]/90" />
        </div>

        {/* Left decorative circles */}
        <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full border border-[#0853a4]/5" />
        <div className="pointer-events-none absolute -left-16 bottom-10 h-52 w-52 rounded-full border border-[#0853a4]/5" />

        {/* Right dot-pattern decoration */}
        <div className="pointer-events-none absolute right-[5%] top-16 grid grid-cols-8 gap-[10px] opacity-[0.07]">
          {Array.from({ length: 64 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0853a4]" />
          ))}
        </div>

        <div className="relative mx-auto grid max-w-[1360px] items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ===== LEFT: TEXT CONTENT ===== */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-6 xl:col-span-6">
            {/* Section label */}
            <ScrollReveal variant="fade-in-left" delay={50} duration={1200}>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#0853a4]" />

                <p className="font-satisfy text-[22px] sm:text-[24px] font-normal text-[#0853a4] capitalize">
                  About Us
                </p>

                <span className="h-[1px] w-8 bg-[#0853a4]" />
              </div>
            </ScrollReveal>

            {/* Main heading */}
            <ScrollReveal variant="fade-in-left" delay={200} duration={1300}>
              <h2 className="font-rubik text-[26px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] font-bold leading-[1.2] tracking-[-0.015em] text-[#100c08]">
                Let&apos;s know About Our Journey For Open Sky Holidays.
              </h2>
            </ScrollReveal>

            {/* Tab buttons */}
            <ScrollReveal variant="fade-in-left" delay={350} duration={1300}>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveAboutTab('mission')}
                  className={`flex items-center gap-2 text-[14.5px] sm:text-[15px] font-semibold transition ${activeAboutTab === 'mission' ? 'text-[#0853a4]' : 'text-slate-500 hover:text-[#0853a4]'
                    }`}
                >
                  <span className={activeAboutTab === 'mission' ? 'text-[#0853a4]' : 'text-slate-400'}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                      <path d="m16 8 4-4M17 4h3v3" />
                    </svg>
                  </span>
                  Mission &amp; Vision
                </button>

                <button
                  type="button"
                  onClick={() => setActiveAboutTab('customer')}
                  className={`flex items-center gap-2 text-[14.5px] sm:text-[15px] font-semibold transition ${activeAboutTab === 'customer' ? 'text-[#0853a4]' : 'text-slate-500 hover:text-[#0853a4]'
                    }`}
                >
                  <span className={activeAboutTab === 'customer' ? 'text-[#0853a4]' : 'text-slate-400'}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
                      <path d="m5 6-2-2M19 6l2-2M12 3V1" />
                      <path d="m8.5 13 3.5 2 3.5-2" />
                    </svg>
                  </span>
                  Focus On Customer
                </button>
              </div>
            </ScrollReveal>

            {/* Tab content */}
            <ScrollReveal variant="fade-in-left" delay={500} duration={1300}>
              <div className="min-h-[120px] sm:min-h-[130px] font-jost text-[14px] sm:text-[15px] leading-[1.75] text-slate-600">
                {activeAboutTab === 'mission' ? (
                  <p>
                    Established in 2020, Open Sky Holidays is one of India&apos;s
                    trusted travel agents and tour operators. Our mission is to make
                    domestic and international travel simple, memorable and accessible
                    through carefully planned tours, reliable services and complete
                    customer support. We offer holiday packages, flight tickets, hotel
                    bookings, passport guidance, visa assistance and MICE travel
                    solutions.
                  </p>
                ) : (
                  <p>
                    Every traveler has different expectations, budgets and interests.
                    Our team listens carefully and creates customized holiday packages
                    for families, couples, groups and corporate travelers. From the
                    first inquiry until the journey is completed, we provide safe
                    arrangements and dependable travel assistance.
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Button + customer count */}
            <ScrollReveal variant="fade-in-left" delay={650} duration={1400}>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 sm:pt-3">
                <Link
                  to="/about"
                  className="btn-primary min-h-[48px] sm:min-h-[52px] rounded-[5px] px-7 sm:px-8 text-[14.5px] sm:text-[15px] font-bold shadow-[0_12px_30px_rgba(8,83,164,0.2)]"
                >
                  More About
                </Link>

                <div className="flex items-center gap-3">
                  {/* Stacked avatars */}
                  <div className="flex -space-x-3">
                    {[
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
                      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80',
                    ].map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt={`Customer ${i + 1}`}
                        className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-[3px] border-white object-cover shadow"
                      />
                    ))}
                  </div>

                  <div className="font-rubik">
                    <p className="text-[18px] sm:text-[20px] font-bold leading-none text-[#100c08]">
                      {customerCount}+
                    </p>
                    <p className="mt-1 text-[12.5px] sm:text-[13px] text-slate-500">Customer</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ===== RIGHT: 3D ANIMATED GLOBE ===== */}
          <ScrollReveal variant="fade-in-right" delay={200} duration={1450} className="relative w-full flex items-center justify-center lg:col-span-6 xl:col-span-6 overflow-visible">
            <AnimatedGlobe />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
