import { User, ClipboardList, Clock, ShieldCheck, Headphones } from 'lucide-react';
import type { ServiceHighlight } from '../../data/servicesData';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ServiceHighlightsProps {
  highlights: ServiceHighlight[];
}

const iconMap = {
  user: User,
  list: ClipboardList,
  clock: Clock,
  shield: ShieldCheck,
  headset: Headphones,
};

export function ServiceHighlights({ highlights }: ServiceHighlightsProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="relative z-20 -mt-12 sm:-mt-14 lg:-mt-16 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
      <ScrollReveal variant="fade-in-up" duration={1000}>
        <div className="bg-white rounded-2xl sm:rounded-[22px] shadow-[0_16px_45px_rgba(8,83,164,0.08)] border border-slate-100/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 p-2 sm:p-3 lg:p-3.5">
          {highlights.map((item, index) => {
            const IconComponent = (item.iconType && iconMap[item.iconType]) || User;

            return (
              <div
                key={item.title || index}
                className="flex items-center gap-3.5 px-3.5 py-3 lg:px-4 lg:py-2 min-w-0"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-sky-100 bg-sky-50/70 text-[#0853a4]">
                    <IconComponent className="w-5 h-5 text-[#0853a4]" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="min-w-0">
                  <h4 className="font-rubik text-[14px] sm:text-[15px] font-bold text-[#100c08] leading-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-500 font-jost leading-snug mt-0.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
