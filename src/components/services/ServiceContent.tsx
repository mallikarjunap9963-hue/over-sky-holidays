import { CheckCircle2 } from 'lucide-react';
import type { ServiceData } from '../../data/servicesData';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ServiceContentProps {
  data: ServiceData['content'];
  subtitle: string;
}

export function ServiceContent({ data, subtitle }: ServiceContentProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Text Area */}
        <div>
          <ScrollReveal variant="fade-in-right" duration={1300}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0853a4]" />
              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                About Our {subtitle}
              </p>
            </div>

            <h2 className="mt-4 mb-6 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
              {data.title}
            </h2>

            <p className="text-[#100c08]/80 text-lg leading-relaxed mb-8 font-rubik">
              {data.description}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {data.features.map((feature, index) => (
              <ScrollReveal 
                key={index}
                variant="fade-in-up"
                delay={index * 100}
                duration={1000}
                className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:bg-blue-50"
              >
                <CheckCircle2 className="w-5 h-5 text-[#22a66f] flex-shrink-0 mt-0.5" />
                <span className="text-[#100c08]/90 font-medium font-jost leading-snug">{feature}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <ScrollReveal variant="fade-in-left" duration={1400} className="relative mt-10 lg:mt-0">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src={data.sideImage}
              alt="Service representation"
              className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
