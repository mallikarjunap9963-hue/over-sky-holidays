import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';
import breadcrumbImg from '../../assets/breadcrumb.png';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  heroImage?: string;
}

export function ServiceHero({ title, subtitle, heroImage }: ServiceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#100c08]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImage || breadcrumbImg}
          alt={title}
          className="h-full w-full object-cover object-[78%_center] sm:object-center"
        />
      </div>

      {/* Dark Left, Clear Right Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/55 to-black/15 sm:to-black/30" />

      {/* Bottom Subtle Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-24 -top-28 h-[340px] w-[340px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-10 -top-16 h-[240px] w-[240px] rounded-full border border-white/10" />

      <div className="relative mx-auto flex min-h-[260px] max-w-[1360px] items-center px-5 pt-10 pb-20 sm:min-h-[290px] sm:px-8 sm:pb-24 lg:min-h-[330px] lg:px-10 lg:pb-28">
        <ScrollReveal variant="fade-in-up" duration={1000}>
          <div className="max-w-[720px]">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 sm:py-2 backdrop-blur-md">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-[#fbb03b]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>

                <span className="font-jost text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  Our Services
                </span>
              </div>

              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-1.5 sm:py-2 backdrop-blur-md shadow-sm"
              >
                <Link
                  to="/"
                  className="flex items-center gap-2 font-jost text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#fbb03b]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m3 11 9-8 9 8" />
                    <path d="M5 10v10h14V10" />
                    <path d="M9 20v-6h6v6" />
                  </svg>
                  Home
                </Link>

                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-white/35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>

                <span className="font-jost text-[13px] font-semibold text-[#fbb03b]">
                  {title}
                </span>
              </nav>
            </div>

            {/* Page Title */}
            <h1 className="font-rubik text-[34px] font-black leading-[1.08] text-white sm:text-[46px] lg:text-[54px]">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-2.5 max-w-[620px] font-jost text-[14px] leading-relaxed text-white/80 sm:text-[15px] whitespace-pre-line">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
