import { Link } from "react-router-dom"
import { CalendarDays, MapPin, ChevronRight, Home } from "lucide-react"
import { ScrollReveal } from "../../ui/ScrollReveal"
import breadcrumbImg from "../../../assets/breadcrumb.png"

type TourDetailsHeroProps = {
  tour: any
  tourName: string
  categoryLabel: string
  categoryLink: string
  detail: any
}

export default function TourDetailsHero({
  tour,
  tourName,
  categoryLabel,
  categoryLink,
}: TourDetailsHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#100c08] font-jost">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={breadcrumbImg}
          alt={tourName}
          className="h-full w-full object-cover object-center opacity-85"
        />
      </div>

      {/* Dark Left, Clear Right Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-24 -top-28 h-[340px] w-[340px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-10 -top-16 h-[240px] w-[240px] rounded-full border border-white/10" />

      {/* Main Banner Content */}
      <div className="relative mx-auto flex min-h-[260px] max-w-[1320px] items-center px-5 py-10 sm:min-h-[290px] sm:px-8 lg:min-h-[320px] lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <ScrollReveal variant="fade-in-up" duration={1000} className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-[720px]">
              {/* Small Category Badge */}
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-[#fbb03b]" />
                <span className="font-jost text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {categoryLabel}
                </span>
              </div>

              {/* Page Main Title */}
              <h1 className="font-rubik text-[34px] sm:text-[46px] lg:text-[54px] font-black leading-[1.08] text-white">
                {tourName}
              </h1>

              {/* Tour Quick Meta (Duration & Location) */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-white/90 text-sm sm:text-base font-medium">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#fbb03b]" />
                  <span>{tour.duration}</span>
                </div>

                {tour.locations && tour.locations.length > 0 && (
                  <>
                    <span className="text-white/40 font-light">•</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#fbb03b]" />
                      <span>{tour.locations.join(", ")}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Breadcrumb Navigation Pill */}
              <nav
                aria-label="Breadcrumb"
                className="mt-4.5 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md shadow-sm"
              >
                <Link
                  to="/"
                  className="flex items-center gap-2 font-jost text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#fbb03b]"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>

                <ChevronRight className="h-3.5 w-3.5 text-white/40" />

                <Link
                  to={categoryLink}
                  className="font-jost text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#fbb03b]"
                >
                  {categoryLabel}
                </Link>

                <ChevronRight className="h-3.5 w-3.5 text-white/40" />

                <span className="font-jost text-[13px] font-semibold text-white max-w-[200px] truncate sm:max-w-none">
                  {tourName}
                </span>
              </nav>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom White Wave Curve */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 55"
          preserveAspectRatio="none"
          className="block h-[28px] w-full sm:h-[40px] lg:h-[55px]"
        >
          <path
            d="M0,36 C260,58 420,3 720,27 C1010,50 1180,5 1440,25 L1440,55 L0,55 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
