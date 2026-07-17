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
  return (
    <section className="relative z-20 -mt-16 mx-auto max-w-[1440px] px-6 lg:px-10">
      <ScrollReveal variant="fade-in-up" duration={1300}>
        <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(8,83,164,0.08)] flex flex-wrap lg:flex-nowrap items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 py-2">
          {highlights.map((item, index) => {
            const IconComponent = iconMap[item.iconType];
            
            return (
              <ScrollReveal 
                key={index} 
                variant="fade-in-up" 
                delay={index * 100}
                duration={1200}
                className="flex flex-1 items-start gap-4 p-6 min-w-[250px] lg:min-w-0"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-50 bg-white">
                    <IconComponent className="w-5 h-5 text-[#0853a4]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#100c08] mb-1 font-jost text-[17px]">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-rubik leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
