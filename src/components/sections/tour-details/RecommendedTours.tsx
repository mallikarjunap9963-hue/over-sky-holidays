import { useMemo } from "react"
import { Link } from "react-router-dom"
import { MapPin, Clock, Star, ArrowRight, Sparkles } from "lucide-react"
import { attractionPackages } from "../../../data"
import { ScrollReveal } from "../../ui/ScrollReveal"

type RecommendedToursProps = {
  currentTourId?: number
  currentCategory?: string
  currentTour?: any
}

export default function RecommendedTours({
  currentTourId,
  currentCategory,
  currentTour,
}: RecommendedToursProps) {

  const recommendedList = useMemo(() => {
    const tourTitle = (currentTour?.title || currentTour?.tourType || "").toLowerCase()
    const tourType = (currentTour?.tourType || "").toLowerCase()
    const categoryLower = (currentCategory || "").toLowerCase()

    const isPilgrimage =
      tourTitle.includes("char dham") ||
      tourTitle.includes("kedarnath") ||
      tourTitle.includes("badrinath") ||
      tourTitle.includes("tirupati") ||
      tourTitle.includes("tirupathi") ||
      tourTitle.includes("yatra") ||
      tourTitle.includes("haridwar") ||
      tourType.includes("yatra") ||
      tourType.includes("pilgrimage") ||
      tourType.includes("balaji")

    const isDomestic = categoryLower === "domestic" || currentTour?.country === "INDIA"
    const isInternational = categoryLower === "international" || (currentTour?.country && currentTour.country !== "INDIA")

    let pool: any[] = []

    if (isPilgrimage) {
      // Collect Pilgrimage / Yatra tours from Domestic list
      const domesticTours = attractionPackages.Domestic || []
      pool = domesticTours
        .filter((item: any) => {
          const itemTitle = (item.title || item.tourType || "").toLowerCase()
          const itemType = (item.tourType || "").toLowerCase()
          const isItemPilgrimage =
            itemTitle.includes("char dham") ||
            itemTitle.includes("kedarnath") ||
            itemTitle.includes("badrinath") ||
            itemTitle.includes("tirupati") ||
            itemTitle.includes("tirupathi") ||
            itemTitle.includes("yatra") ||
            itemTitle.includes("haridwar") ||
            itemType.includes("yatra") ||
            itemType.includes("pilgrimage") ||
            itemType.includes("balaji")
          return isItemPilgrimage && item.id !== currentTourId
        })
        .map((item: any) => ({ ...item, categoryType: "Pilgrimage Yatra", routeType: "domestic" }))
    } else if (isInternational) {
      // Collect ONLY International tours
      const internationalTours = attractionPackages.International || []
      pool = internationalTours
        .filter((item: any) => item.id !== currentTourId)
        .map((item: any) => ({ ...item, categoryType: "International", routeType: "international" }))
    } else if (isDomestic) {
      // Collect ONLY Domestic tours (excluding pilgrimage if current is scenic/adventure domestic)
      const domesticTours = attractionPackages.Domestic || []
      pool = domesticTours
        .filter((item: any) => {
          if (item.id === currentTourId) return false
          const itemTitle = (item.title || item.tourType || "").toLowerCase()
          const itemType = (item.tourType || "").toLowerCase()
          const isItemPilgrimage =
            itemTitle.includes("char dham") ||
            itemTitle.includes("kedarnath") ||
            itemTitle.includes("badrinath") ||
            itemTitle.includes("tirupati") ||
            itemTitle.includes("tirupathi") ||
            itemTitle.includes("yatra") ||
            itemType.includes("yatra") ||
            itemType.includes("pilgrimage")
          return !isItemPilgrimage
        })
        .map((item: any) => ({ ...item, categoryType: "Domestic", routeType: "domestic" }))
    }

    // Fallback: If pool has less than 3, fill with items from appropriate category
    if (pool.length < 3) {
      const backupPool = isInternational
        ? (attractionPackages.International || [])
        : (attractionPackages.Domestic || [])

      backupPool.forEach((item: any) => {
        if (item.id !== currentTourId && !pool.some((p) => p.id === item.id)) {
          pool.push({
            ...item,
            categoryType: isInternational ? "International" : "Domestic",
            routeType: isInternational ? "international" : "domestic",
          })
        }
      })
    }

    return pool.slice(0, 3)
  }, [currentTourId, currentCategory, currentTour])

  if (recommendedList.length === 0) return null

  return (
    <section className="py-10 sm:py-12 bg-slate-50 font-jost border-t border-slate-200/60">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* YouTube / Instagram Style Header Bar */}
        <ScrollReveal variant="fade-in-up" duration={1000} className="mb-8">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0853a4] text-white shadow-sm">
                <Sparkles className="h-5 w-5 text-[#fbb03b]" />
              </div>
              <div>
                <h2 className="font-rubik text-[22px] sm:text-[26px] font-extrabold text-[#100c08] leading-none">
                  Recommended
                </h2>
                <p className="font-jost text-[13px] text-slate-500 mt-1">
                  Suggested for you
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#0853a4]/10 px-3.5 py-1 text-[12px] font-bold text-[#0853a4] font-rubik">
                Top Picks
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Recommended Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {recommendedList.map((tour, index) => {
            const tourTitle = tour.tourType || tour.title || "Tour Package"
            const tourDuration = tour.duration || "5 Days / 4 Nights"
            const tourPrice = tour.price || "Contact For Best Price"
            const tourLocations = Array.isArray(tour.locations)
              ? tour.locations.slice(0, 3).join(", ")
              : tour.locations || "Multiple Destinations"

            const detailLink = `/tour/${tour.routeType}/${tour.id}`

            return (
              <ScrollReveal
                key={`${tour.id}-${index}`}
                variant="fade-in-up"
                delay={index * 150}
                duration={1200}
              >
                <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#0853a4]/30 hover:shadow-[0_20px_45px_rgba(8,83,164,0.12)] h-full">

                  {/* Tour Image & Badges */}
                  <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                    <img
                      src={tour.image || "/slider1.png"}
                      alt={tourTitle}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />

                    {/* Category Badge */}
                    <div className="absolute top-3.5 left-3.5 rounded-full bg-[#0853a4]/90 px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider backdrop-blur-md font-rubik shadow-sm">
                      {tour.categoryType}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-800 backdrop-blur-md shadow-sm">
                      <Star className="h-3.5 w-3.5 fill-[#fbb03b] text-[#fbb03b]" />
                      <span>4.9</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-white text-[12px] font-medium font-jost">
                      <Clock className="h-4 w-4 text-[#fbb03b]" />
                      <span>{tourDuration}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-5 font-jost">
                    <div>
                      {/* Locations */}
                      <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0853a4]">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{tourLocations}</span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-2 font-rubik text-[20px] font-bold text-[#100c08] leading-snug transition duration-300 group-hover:text-[#0853a4]">
                        {tourTitle}
                      </h3>
                    </div>

                    {/* Card Footer: Price & CTA */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Starting From
                        </span>
                        <span className="font-rubik text-[18px] font-extrabold text-[#100c08]">
                          {tourPrice}
                        </span>
                      </div>

                      <Link
                        to={detailLink}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0853a4] px-4 py-2.5 text-[13px] font-bold text-white transition duration-300 hover:bg-[#064285] hover:shadow-md cursor-pointer font-rubik"
                      >
                        <span>Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                  </div>

                </article>
              </ScrollReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
