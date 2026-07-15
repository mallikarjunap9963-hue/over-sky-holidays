import { Link, useSearchParams } from "react-router-dom"
import { MapPin, ArrowRight } from "lucide-react"
import { attractionPackages } from "../data"
import { ScrollReveal } from "../components/ui/ScrollReveal"

export function InternationalToursPage() {
  const [searchParams] = useSearchParams();
  const searchDestination = searchParams.get("destination");
  
  let internationalTours = attractionPackages.International;
  if (searchDestination) {
    internationalTours = internationalTours.filter(
      (tour) => tour.title.toLowerCase() === searchDestination.toLowerCase()
    );
  }

  return (
    <main className="min-h-screen bg-slate-50/50 font-jost">
      {/* ================= PROFESSIONAL BREADCRUMB BANNER ================= */}
      <section className="relative isolate overflow-hidden bg-[#071f36]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90"
            alt="International Tours Hero"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071f36]/95 via-[#071f36]/82 to-[#0b84d8]/45" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071f36]/60 to-transparent" />

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-[340px] w-[340px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-[240px] w-[240px] rounded-full border border-white/10" />

        {/* Decorative Dots */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 grid-cols-6 gap-3 opacity-20 lg:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[220px] max-w-[1320px] items-center px-5 py-10 sm:min-h-[250px] sm:px-8 lg:min-h-[280px] lg:px-10">
          <ScrollReveal variant="fade-in-up" duration={1000}>
            <div className="max-w-[680px]">
              {/* Small Label */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
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
                  World Awaits
                </span>
              </div>

              {/* Page Title */}
              <h1 className="font-rubik text-[38px] font-black leading-[1.08] text-white sm:text-[48px] lg:text-[58px]">
                International Tours
              </h1>

              {/* Description */}
              <p className="mt-2.5 max-w-[570px] font-jost text-[14px] leading-7 text-white/75 sm:text-[15px]">
                Discover amazing global destinations, tropical island resorts, exotic cultures, and world-famous cities with our premium international tour packages.
              </p>

              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mt-4.5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#071f36]/40 px-4 py-2.5 backdrop-blur-md"
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

                <span className="font-jost text-[13px] font-semibold text-white">
                  International Tours
                </span>
              </nav>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom White Curve */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 55"
            preserveAspectRatio="none"
            className="block h-[30px] w-full sm:h-[42px] lg:h-[55px]"
          >
            <path
              d="M0,36 C260,58 420,3 720,27 C1010,50 1180,5 1440,25 L1440,55 L0,55 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* TOUR GRID LIST */}
      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internationalTours.map((tour, index) => (
            <ScrollReveal
              key={tour.id}
              variant="fade-in-up"
              delay={(index % 3) * 100}
              duration={1200}
            >
              <Link
                to={`/tour/international/${tour.id}`}
                className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(7,31,67,0.06)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[#100c08] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white font-rubik rounded-md">
                    {tour.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <span className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#0b84d8] font-rubik">
                    <MapPin size={13} className="shrink-0" />
                    {tour.country}
                  </span>

                  <h3 className="mt-2 font-rubik text-xl font-bold leading-snug text-[#100c08] transition group-hover:text-[#0b84d8]">
                    {tour.title}
                  </h3>

                  {/* Locations Covered */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tour.locations.slice(0, 4).map((loc) => (
                      <span
                        key={loc}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {loc}
                      </span>
                    ))}
                    {tour.locations.length > 4 && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        +{tour.locations.length - 4} More
                      </span>
                    )}
                  </div>

                  {/* Footer Button */}
                  <div className="mt-auto pt-6 flex items-center justify-end border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b84d8]/10 px-4 py-2.5 text-xs font-bold text-[#0b84d8] transition group-hover:bg-[#0b84d8] group-hover:text-white font-rubik">
                      Explore More
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}
