import { useEffect, useRef, useState } from 'react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';
import { animate, useInView } from 'framer-motion';
import { contentApi } from '../../api/contentApi';

function AnimatedCounter({ from, to, suffix, duration = 2.5 }: { from: number, to: number, suffix: string, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toLocaleString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

interface ServiceCTAProps {
  cta?: {
    title?: string;
    description?: string;
    image?: string;
    stats?: Array<{ number: string; label: string }>;
  };
}

export function ServiceCTA({ cta }: ServiceCTAProps = {}) {
  const [liveStats, setLiveStats] = useState<Array<{ number: string; label: string }>>([]);

  useEffect(() => {
    let isMounted = true;
    if (!cta?.stats || cta.stats.length === 0) {
      contentApi.getCountersActive().then((res) => {
        if (isMounted && res.isLive && res.counters.length > 0) {
          setLiveStats(
            res.counters.slice(0, 3).map((c: any) => ({
              number: String(c.value || c.name || '') + (String(c.value).includes('+') ? '' : '+'),
              label: c.name || c.value || 'Accomplishment',
            }))
          );
        }
      }).catch((err) => console.error("Error loading counters in ServiceCTA:", err));
    }
    return () => {
      isMounted = false;
    };
  }, [cta?.stats]);

  const statsList = (Array.isArray(cta?.stats) && cta.stats.length > 0) ? cta.stats : liveStats;

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-20 overflow-hidden">
      <ScrollReveal variant="fade-in-up" duration={1400} className="relative rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={cta?.image || "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop"}
            alt="Travel Journey"
            className="w-full h-full object-cover object-center opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031d47]/80 via-[#031d47]/50 to-[#031d47]/10" />
        </div>

        <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-3xl md:text-[42px] font-extrabold text-white mb-4 font-jost leading-tight">
              {cta?.title || "Ready To Start Your Journey?"}
            </h2>
            <p className="text-white/90 text-[15.5px] leading-relaxed font-rubik mb-8 max-w-lg">
              {cta?.description || "Let us take care of your travel process while you focus on making unforgettable memories."}
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#031d47] px-8 py-3.5 rounded-md font-bold font-jost hover:bg-[#0853a4] hover:text-white transition-all duration-300 w-max shadow-lg"
            >
              <PhoneCall className="w-5 h-5" />
              Contact Our Expert
            </Link>
          </div>

          {/* Right Stats */}
          <div className="lg:w-1/2 flex flex-wrap lg:flex-nowrap items-center justify-end gap-8 lg:gap-12 w-full">
            {statsList.map((stat, idx) => {
              const numMatch = (stat.number || '').match(/^([\d,]+)(.*)$/);
              const numericVal = numMatch ? parseInt(numMatch[1].replace(/,/g, ''), 10) : null;
              const suffix = numMatch ? numMatch[2] : '';

              return (
                <div key={idx} className="flex items-center gap-8 lg:gap-12">
                  <ScrollReveal variant="fade-in-up" delay={200 * (idx + 1)} className="flex flex-col text-white w-28 lg:w-32">
                    <span className="text-3xl lg:text-4xl font-black font-jost">
                      {numericVal !== null && !isNaN(numericVal) ? (
                        <AnimatedCounter from={0} to={numericVal} suffix={suffix} duration={2.5} />
                      ) : (
                        stat.number
                      )}
                    </span>
                    <span className="text-white/80 font-rubik text-sm mt-1">{stat.label}</span>
                  </ScrollReveal>
                  {idx < statsList.length - 1 && (
                    <div className="w-px h-12 bg-white/20 hidden lg:block" />
                  )}
                </div>
              );
            })}
          </div>
          
        </div>
      </ScrollReveal>
    </section>
  );
}
