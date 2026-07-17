import { Camera } from "lucide-react"
import SectionHeading from "../../ui/SectionHeading"

type TourGalleryProps = {
  galleryImages: string[]
  tourName: string
  onImageClick: (image: string) => void
}

export default function TourGallery({
  galleryImages,
  tourName,
  onImageClick,
}: TourGalleryProps) {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title="Tour Gallery" />

          {galleryImages.length > 0 && (
            <p className="pb-6 text-sm text-slate-500">
              Click any image to view it in full size
            </p>
          )}
        </div>

        {galleryImages.length > 0 ? (
          <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-2 md:auto-rows-[210px] lg:grid-cols-4">
            {galleryImages.slice(0, 8).map((image, index) => {
              const isLarge = index === 0 || index === 5

              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => onImageClick(image)}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm cursor-pointer ${
                    isLarge ? "sm:row-span-2 lg:col-span-2" : ""
                  }`}
                  aria-label={`Open ${tourName} gallery image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${tourName} gallery ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-70 transition group-hover:opacity-90" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                        Gallery
                      </p>
                      <h3 className="mt-1 font-black font-rubik">
                        {tourName}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition group-hover:bg-[#0853a4]">
                      <Camera size={19} />
                    </span>
                  </div>

                  {index === 7 && galleryImages.length > 8 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0853a4]/75 text-center text-white backdrop-blur-[2px]">
                      <div>
                        <p className="text-3xl font-black font-rubik">
                          +{galleryImages.length - 8}
                        </p>
                        <p className="mt-1 text-sm font-bold">More Photos</p>
                      </div>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            Gallery images for this tour will be added soon.
          </div>
        )}
      </div>
    </section>
  )
}
