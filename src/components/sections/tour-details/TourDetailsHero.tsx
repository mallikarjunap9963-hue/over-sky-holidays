import { Link } from "react-router-dom"
import { CalendarDays, MapPin, Headphones } from "lucide-react"
import HeroInfo from "../../ui/HeroInfo"

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
  detail,
}: TourDetailsHeroProps) {
  return (
    <section className="relative min-h-[570px] overflow-hidden lg:min-h-[620px]">
      <img
        src={tour.image}
        alt={tourName}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30" />

      <div className="relative mx-auto flex min-h-[570px] max-w-[1320px] flex-col px-5 pb-20 pt-7 sm:px-8 lg:min-h-[620px] lg:px-10 lg:pb-24">
        {/* Top Row */}
        <div className="flex items-start justify-between gap-6 font-jost">
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#071f36]/40 px-4 py-2.5 backdrop-blur-md font-jost"
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#fbb03b]"
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

            <Link
              to={categoryLink}
              className="text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#fbb03b]"
            >
              {categoryLabel}
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

            <span className="text-[13px] font-semibold text-white max-w-[180px] truncate sm:max-w-none">
              {tourName}
            </span>
          </nav>

          <a
            href="tel:+919908117712"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#063f91] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#052f6e] sm:flex"
          >
            <Headphones size={19} />
            24x7 Support
          </a>
        </div>

        {/* Main Hero Content */}
        <div className="mt-auto max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#075bb8] px-4 py-2 text-xs font-black uppercase tracking-wide font-rubik">
            <MapPin size={16} />
            {categoryLabel}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[82px] font-rubik">
            {tourName}
          </h1>

          <div className="mt-5 h-1.5 w-20 rounded-full bg-[#ffb400]" />

          <p className="mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg font-jost">
            {detail.about}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5 font-rubik">
            <HeroInfo
              icon={<CalendarDays size={25} />}
              value={tour.duration}
              label="Duration"
            />

            <HeroInfo
              icon={<MapPin size={25} />}
              value={
                tour.locations?.length
                  ? tour.locations.slice(0, 2).join(", ")
                  : tour.country || "Tour Destination"
              }
              label="Destination"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
