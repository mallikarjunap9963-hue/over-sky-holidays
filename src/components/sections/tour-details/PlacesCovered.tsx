import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "../../ui/SectionHeading"

type PlacesCoveredProps = {
  placesCovered: any[]
}

export default function PlacesCovered({ placesCovered }: PlacesCoveredProps) {
  const placesSliderRef = useRef<HTMLDivElement>(null)

  const scrollPlaces = (direction: "left" | "right") => {
    placesSliderRef.current?.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    })
  }

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <SectionHeading title="Places Covered" />

        {placesCovered.length > 0 ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollPlaces("left")}
              aria-label="View previous places"
              className="absolute -left-4 top-[42%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#09255b] shadow-lg transition hover:bg-[#075bb8] hover:text-white cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            <div
              ref={placesSliderRef}
              className="flex snap-x gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {placesCovered.map((place) => (
                <article
                  key={place.id}
                  className="group w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[280px]"
                >
                  <div className="h-48 overflow-hidden bg-slate-100">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-black text-[#09255b] font-rubik">
                      {place.name}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-slate-600 font-jost">
                      {place.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollPlaces("right")}
              aria-label="View next places"
              className="absolute -right-4 top-[42%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#09255b] shadow-lg transition hover:bg-[#075bb8] hover:text-white cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            The places covered for this package will be shared during booking.
          </div>
        )}
      </div>
    </section>
  )
}
