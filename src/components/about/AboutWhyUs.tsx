import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

const reasons = [
  {
    title: '24/7 Expert Support',
    desc: 'Our travel assistants are always available to help you navigate queries or itinerary shifts, anytime, anywhere.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Completely Transparent Pricing',
    desc: 'No hidden charges or unexpected surprise fees. We outline every invoice line item so you can choose exactly what fits your budget.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Unmatched Local Expertise',
    desc: 'We work directly with local, vetted destination representatives and drivers to offer safer excursions and authentic details.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Handpicked Accommodations',
    desc: 'Every hotel and resort in our network is verified for quality, safety, and comfort to guarantee your peace of mind.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function AboutWhyUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-slate-50 px-5 py-10 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-amber-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <ScrollReveal variant="fade-in-left" delay={50} duration={1200}>
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-6 bg-[#0853a4]" />
                <p className="font-satisfy text-[24px] font-normal capitalize text-[#0853a4]">
                  Why Choose Us
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-left" delay={200} duration={1300}>
              <h2 className="font-rubik text-[30px] font-extrabold leading-[1.2] tracking-tight text-[#100c08] sm:text-[38px] lg:text-[44px]">
                Setting Standard for Trust and Comfort.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-left" delay={350} duration={1300}>
              <p className="font-jost text-[15.5px] leading-relaxed text-slate-600">
                We believe that traveling shouldn't be stressful. We ensure every segment of your journey—from flights to accommodation and ground transportation—is organized with precise dedication.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-4 mt-2">
              {reasons.map((item, index) => (
                <ScrollReveal key={item.title} variant="fade-in-left" delay={450 + 100 * index} duration={1200}>
                  <div className="flex items-start gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0853a4] transition-all duration-300 group-hover:bg-[#0853a4] group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-rubik text-[15.5px] font-bold text-slate-800">{item.title}</h4>
                      <p className="font-jost text-[13.5px] leading-relaxed text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal variant="fade-in-left" delay={850} duration={1200}>
              <Link
                to="/contact"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 font-rubik text-[14px] font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #0853a4, #0066b0)' }}
              >
                Get in Touch
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — image with overlay badge */}
          <ScrollReveal variant="fade-in-right" delay={200} duration={1400} className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=85"
                alt="Road trip along beautiful landscapes"
                className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px]"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-slate-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0853a4]" style={{ background: 'linear-gradient(135deg, #e8f4fd, #dbeeff)' }}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="font-rubik text-[14px] font-bold text-[#100c08]">Trusted by 15,000+</p>
                <p className="font-jost text-[12px] text-slate-500">Happy travelers worldwide</p>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl bg-blue-50" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
