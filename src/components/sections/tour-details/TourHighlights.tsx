import SectionHeading from "../../ui/SectionHeading"

type TourHighlightsProps = {
  tourHighlights: any[]
}

export default function TourHighlights({ tourHighlights }: TourHighlightsProps) {
  return (
    <section className="border-y border-[#f3e8d6] bg-[#fffaf0] py-10">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <SectionHeading title="Tour Highlights" />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {tourHighlights.map((highlight, index) => {
            const Icon = highlight.icon

            return (
              <article
                key={highlight.title}
                className={`flex gap-4 ${
                  index !== tourHighlights.length - 1
                    ? "lg:border-r lg:border-slate-200 lg:pr-6"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0853a4] shadow-sm">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-black text-[#0853a4] font-rubik">
                    {highlight.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600 font-jost">
                    {highlight.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
