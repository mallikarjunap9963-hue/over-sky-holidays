import { ScrollReveal } from '../ui/ScrollReveal';

export function AboutStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-50/40 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-amber-50/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story Images collage (Left) */}
          <ScrollReveal variant="fade-in-left" delay={50} duration={1200} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Tall image */}
              <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=85"
                  alt="Friends enjoying a mountain tour"
                  className="h-[380px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px]"
                />
              </div>
              {/* Stacked images */}
              <div className="flex flex-col gap-4 pt-10">
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=700&q=85"
                    alt="Maldives luxury resort"
                    className="h-[180px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[210px]"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=85"
                    alt="Tourists exploring landmarks"
                    className="h-[180px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[210px]"
                  />
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-2xl bg-gradient-to-br from-[#0b84d8]/10 to-amber-500/10 blur-sm" />
          </ScrollReveal>

          {/* Story Text content (Right) */}
          <div className="flex flex-col gap-5">
            <ScrollReveal variant="fade-in-right" delay={50} duration={1200}>
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-6 bg-[#0b84d8]" />
                <p className="font-satisfy text-[24px] font-normal capitalize text-[#0b84d8]">
                  Our Story
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-right" delay={200} duration={1300}>
              <h2 className="font-rubik text-[30px] font-extrabold leading-[1.2] tracking-tight text-[#100c08] sm:text-[38px] lg:text-[44px]">
                Crafting Unforgettable Journeys Since 2020.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-right" delay={350} duration={1300}>
              <div className="flex flex-col gap-4 font-jost text-[15.5px] leading-relaxed text-slate-600">
                <p>
                  Established in 2020, <strong>Open Sky Holidays</strong> has dedicated itself to transforming standard trips into deeply personalized, lifelong travel memories. Starting as a localized tours operator, our commitment to quality quickly expanded our horizon.
                </p>
                <p>
                  Today, we stand as one of India's trusted, comprehensive travel agencies. We are proud to offer seamlessly integrated domestic &amp; international holiday packages, flight bookings, premium hotels, passport support, and visa solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-right" delay={500} duration={1300}>
              <div className="mt-2 grid grid-cols-2 gap-4 font-rubik">
                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0b84d8] mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-800">100% Customized</h4>
                    <p className="text-[12px] text-slate-500">Tailored to your budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0b84d8] mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-800">End-To-End Care</h4>
                    <p className="text-[12px] text-slate-500">From flight to destination</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
