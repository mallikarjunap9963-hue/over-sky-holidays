import { useEffect, useState, type ReactNode } from 'react';
import { contentApi } from '../../api/contentApi';
import { formatImageUrl } from '../../api/imageHelper';
import { ScrollReveal } from '../ui/ScrollReveal';

const ICON_COLORS = [
  'text-[#0853a4]',
  'text-[#f4a51c]',
  'text-[#c9be00]',
  'text-[#d4c500]',
  'text-[#22a66f]',
  'text-[#f39b19]',
];

function renderFeatureIcon(item: any): ReactNode {
  if (item.image_url) {
    return (
      <img
        src={formatImageUrl(item.image_url)}
        alt={item.title || 'Icon'}
        className="h-12 w-12 object-contain"
      />
    );
  }

  if (item.icon && typeof item.icon === 'string') {
    const rawIcon = item.icon.trim();
    if (
      rawIcon.startsWith('http://') ||
      rawIcon.startsWith('https://') ||
      rawIcon.startsWith('/') ||
      rawIcon.startsWith('data:image')
    ) {
      return (
        <img
          src={formatImageUrl(rawIcon)}
          alt={item.title || 'Icon'}
          className="h-12 w-12 object-contain"
        />
      );
    }

    if (rawIcon.includes('fa-')) {
      return (
        <i
          className={`${rawIcon} text-[38px] leading-none`}
          aria-hidden="true"
        />
      );
    }
  }

  // Generic fallback travel icon if neither fontawesome nor image is provided
  return (
    <svg viewBox="0 0 80 80" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="40" cy="40" r="24" />
      <path d="M16 40h48M40 16c8 9 12 16 12 24s-4 15-12 24M40 16c-8 9-12 16-12 24s4 15 12 24" />
    </svg>
  );
}

export function WhyChooseUs() {
  const [whyItems, setWhyItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadWhyChooseUs() {
      try {
        const res = await contentApi.getWhyChooseSectionsActive();
        if (!isMounted) return;

        if (res.isLive && Array.isArray(res.items) && res.items.length > 0) {
          const mapped = res.items.map((item: any, i: number) => ({
            id: item.id || i,
            title: item.title,
            description: item.description,
            iconColor: ICON_COLORS[i % ICON_COLORS.length],
            icon: renderFeatureIcon(item),
          }));
          setWhyItems(mapped);
        } else {
          setWhyItems([]);
        }
      } catch (err) {
        console.error("Error loading Why Choose Us API:", err);
        setWhyItems([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadWhyChooseUs();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="why-choose-us" className="relative overflow-hidden bg-white px-5 py-10 sm:px-8">
        <div className="relative mx-auto max-w-[1320px]">
          <div className="text-center">
            <div className="mx-auto h-4 w-28 animate-pulse rounded bg-slate-200" />
            <div className="mx-auto mt-4 h-10 w-80 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-36 animate-pulse rounded-[18px] border border-slate-100 bg-slate-50 p-6" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (whyItems.length === 0) {
    return null;
  }

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
    >
      {/* Decorative travel drawing */}
      <div className="pointer-events-none absolute right-0 top-0 hidden text-[#0853a4]/[0.05] lg:block">
        <svg
          viewBox="0 0 500 330"
          className="h-[330px] w-[500px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          aria-hidden="true"
        >
          <path d="M10 230c70-65 135-90 200-72 55 15 79 77 145 78 51 1 85-27 135-76" />
          <path d="m264 185 55-83 69 105" />
          <path d="m324 151 28-37 69 94" />
          <path d="M410 78c-21-12-39-7-50 7 22 2 36 11 42 27" />
          <path d="M425 64c14 10 18 24 15 43" />
          <path d="m204 35 33 20-42 14 9-34Z" />
          <path d="M237 55c45 10 77 24 111 60" strokeDasharray="8 10" />
        </svg>
      </div>

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#0853a4]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Section heading */}
        <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#0853a4]" />
            <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
              Our Success
            </p>
            <span className="h-px w-8 bg-[#0853a4]" />
          </div>

          <h2 className="mt-4 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
            Why Choose Open Sky Holidays
          </h2>
        </ScrollReveal>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyItems.map((feature: any, index: number) => (
            <ScrollReveal
              key={feature.id || feature.title}
              variant="fade-in-up"
              delay={index * 100}
              duration={1300}
            >
              <article className="group relative h-full overflow-hidden rounded-[18px] border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0853a4]/20 hover:shadow-[0_20px_40px_rgba(8,83,164,0.08)] sm:p-8 flex flex-col items-center text-center">
                <div className="flex flex-col items-center text-center font-jost w-full">
                  <div
                    className={`mx-auto flex h-14 w-14 shrink-0 items-center justify-center ${feature.iconColor || 'text-[#0853a4]'} transition duration-500 group-hover:rotate-[6deg] group-hover:scale-105`}
                  >
                    {feature.icon}
                  </div>

                  <div className="mt-4">
                    <h3 className="font-rubik text-[21px] font-semibold leading-tight text-[#100c08] transition group-hover:text-[#0853a4] sm:text-[22px]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
