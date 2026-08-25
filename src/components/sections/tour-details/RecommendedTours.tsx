import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { MapPin, ArrowRight, Sparkles } from "lucide-react"
import { toursApi } from "../../../api/toursApi"
import { ScrollReveal } from "../../ui/ScrollReveal"

type RecommendedToursProps = {
  currentTourId?: number | string
  currentCategory?: string
  currentTour?: any
}

export default function RecommendedTours({
  currentTourId,
  currentCategory,
  currentTour,
}: RecommendedToursProps) {
  const [allTours, setAllTours] = useState<any[]>([])

  useEffect(() => {
    let isMounted = true
    async function loadRecommended() {
      try {
        const res = await toursApi.getTours({ per_page: 50 })
        if (isMounted && res.tours) {
          setAllTours(res.tours)
        }
      } catch (err) {
        console.error("Error loading recommended tours:", err)
      }
    }
    loadRecommended()
    return () => {
      isMounted = false
    }
  }, [])

  const recommendedList = useMemo(() => {
    const categoryLower = (currentCategory || currentTour?.category || "").toLowerCase()
    const isDomestic = categoryLower.includes("domestic")

    const filtered = allTours.filter(
      (t) => String(t.id) !== String(currentTourId) && String(t.slug) !== String(currentTourId)
    )

    const sameCategory = filtered.filter((t) => {
      const cat = (t.category || t.tourType || "").toLowerCase()
      return isDomestic ? cat.includes("domestic") : cat.includes("international")
    })

    const pool = sameCategory.length > 0 ? sameCategory : filtered
    return pool.slice(0, 3)
  }, [allTours, currentTourId, currentCategory, currentTour])

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedList.map((tour, index) => {
            const tourTitle = tour.title || tour.tourType || "Tour Package"
            const tourDuration = tour.duration || "5 Days / 4 Nights"
            const tourCountry = tour.country || "INDIA"
            const tourCat = (tour.category || tour.tourType || "").toLowerCase().includes("international") ? "international" : "domestic"
            const detailLink = `/tour/${tourCat}/${tour.id || tour.slug}`
            const locationsList = Array.isArray(tour.locations) ? tour.locations : []

            return (
              <ScrollReveal
                key={`${tour.id}-${index}`}
                variant="fade-in-up"
                delay={(index % 3) * 100}
                duration={1200}
              >
                <Link
                  to={detailLink}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(8,83,164,0.06)] cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={tour.image || "/slider1.png"}
                      alt={tourTitle}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 bg-[#100c08] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white font-rubik rounded-md">
                      {tourDuration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6 font-jost">
                    <span className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#0853a4] font-rubik">
                      <MapPin size={13} className="shrink-0" />
                      {tourCountry}
                    </span>

                    <h3 className="mt-2 font-rubik text-xl font-bold leading-snug text-[#100c08] transition group-hover:text-[#0853a4]">
                      {tourTitle}
                    </h3>

                    {/* Locations Covered */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {locationsList.slice(0, 4).map((loc: string) => (
                        <span
                          key={loc}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {loc}
                        </span>
                      ))}
                      {locationsList.length > 4 && (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          +{locationsList.length - 4} More
                        </span>
                      )}
                    </div>

                    {/* Footer Button */}
                    <div className="mt-auto pt-6 flex items-center justify-end border-t border-slate-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0853a4]/10 px-4 py-2.5 text-xs font-bold text-[#0853a4] transition group-hover:bg-[#0853a4] group-hover:text-white font-rubik">
                        Explore More
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
