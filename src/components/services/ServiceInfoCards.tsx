import { Check, Users, UserPlus, Building, BadgeDollarSign, LifeBuoy, Clock } from 'lucide-react';
import type { ServiceWhyChooseItem } from '../../data/servicesData';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ServiceInfoCardsProps {
  documents: string[];
  whyChooseUs: ServiceWhyChooseItem[];
}

const chooseIconMap = {
  agent: Users,
  user: UserPlus,
  building: Building,
  price: BadgeDollarSign,
  support: LifeBuoy,
  clock: Clock
};

export function ServiceInfoCards({ documents, whyChooseUs }: ServiceInfoCardsProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-20 mt-10">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Left Card - Documents */}
        <ScrollReveal variant="fade-in-right" duration={1300} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(8,83,164,0.04)] border border-[#bae6fd] p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl md:text-[22px] font-bold text-[#031d47] mb-6 font-jost">
              Documents Usually Required
            </h3>
            
            <ul className="space-y-3.5">
              {documents.map((doc, index) => (
                <ScrollReveal 
                  key={index} 
                  variant="fade-in-up" 
                  delay={index * 100}
                  duration={1000}
                  className="flex items-start gap-3"
                >
                  <Check className="w-[18px] h-[18px] text-[#0853a4] shrink-0 mt-[2px] stroke-[3]" />
                  <span className="text-[#100c08]/80 font-medium text-[14px] font-rubik leading-snug">
                    {doc}
                  </span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
          
          <div className="absolute bottom-4 right-4 pointer-events-none z-0">
            <svg
              viewBox="0 0 64 64"
              className="h-24 w-24 text-[#0853a4] opacity-[0.15]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="10" y="10" width="44" height="44" rx="4" />
              <path d="M10 22h44M22 10v44" />
              <path d="M30 30h16M30 38h16M30 46h10" />
            </svg>
          </div>
        </ScrollReveal>

        {/* Right Card - Why Choose Us */}
        <ScrollReveal variant="fade-in-left" duration={1300} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(8,83,164,0.04)] border border-[#bae6fd] p-8 md:p-10 h-full">
          <h3 className="text-xl md:text-[22px] font-bold text-[#031d47] mb-6 font-jost">
            Why Choose Open Sky Holidays?
          </h3>
          
          <div className="space-y-5">
            {whyChooseUs.map((item, index) => {
              const IconComp = chooseIconMap[item.iconType];
              
              return (
                <ScrollReveal 
                  key={index} 
                  variant="fade-in-up" 
                  delay={index * 100}
                  duration={1000}
                  className="flex items-center gap-4"
                >
                  <IconComp className="w-5 h-5 text-[#0853a4] shrink-0 stroke-[2]" />
                  <span className="text-[#100c08]/80 font-medium text-[14.5px] font-rubik">
                    {item.title}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
