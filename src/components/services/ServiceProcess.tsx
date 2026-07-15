import { MessageSquareText, FileCheck, Edit3, CreditCard, Hourglass, CheckCircle } from 'lucide-react';
import type { ServiceProcessStep } from '../../data/servicesData';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ServiceProcessProps {
  steps: ServiceProcessStep[];
  title: string;
}

const iconMap = {
  chat: MessageSquareText,
  document: FileCheck,
  edit: Edit3,
  card: CreditCard,
  hourglass: Hourglass,
  check: CheckCircle,
};

export function ServiceProcess({ steps, title }: ServiceProcessProps) {
  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-in-up" duration={1200} className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#0b84d8]" />
            <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
              How It Works
            </p>
            <span className="h-px w-8 bg-[#0b84d8]" />
          </div>

          <h2 className="mt-4 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
            Our {title} Process
          </h2>
        </ScrollReveal>

        {/* Process Steps Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-[45px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0b84d8]/20 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.iconType];
              const stepNumber = (index + 1).toString().padStart(2, '0');
              
              return (
                <ScrollReveal 
                  key={index}
                  variant="fade-in-up"
                  delay={index * 150}
                  duration={1200}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-[90px] h-[90px] rounded-full bg-white border-4 border-[#e0f2fe] flex items-center justify-center mb-6 shadow-lg group-hover:border-[#0b84d8] group-hover:bg-[#0b84d8] transition-all duration-300 relative z-10">
                    <IconComponent className="w-8 h-8 text-[#0b84d8] group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="text-sm font-bold text-[#0b84d8] mb-2 font-jost">
                    {stepNumber}
                  </div>
                  
                  <h3 className="text-[17px] font-bold text-[#100c08] mb-3 font-jost leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed font-rubik px-2">
                    {step.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
