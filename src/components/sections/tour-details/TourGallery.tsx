import { useState } from "react"
import { Eye, Plus, Play, X } from "lucide-react"
import { ScrollReveal } from "../../ui/ScrollReveal"

import slider1 from "../../../assets/slider1.png"
import slider2 from "../../../assets/slider2.png"
import slider3 from "../../../assets/slider3.png"
import slider4 from "../../../assets/slider4.png"
import slider5 from "../../../assets/slider5.png"

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
  const [showVideoModal, setShowVideoModal] = useState(false)

  // Fallback images if list is small
  const mainImage = galleryImages[0] || slider1
  const img1 = galleryImages[1] || galleryImages[0] || slider2
  const img2 = galleryImages[2] || galleryImages[0] || slider3
  const img3 = galleryImages[3] || galleryImages[0] || slider4
  const img4 = galleryImages[4] || galleryImages[0] || slider5

  return (
    <>
      <section className="py-10 sm:py-12 bg-white font-jost">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          {/* Standard Project Section Heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center mb-10">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0853a4]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                Photo & Video Gallery
              </p>

              <span className="h-px w-8 bg-[#0853a4]" />
            </div>

            <h2 className="mt-3 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px]">
              Explore {tourName}
            </h2>
          </ScrollReveal>

          {/* Reference Image Gallery Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* LEFT SIDE: Large Featured Image (lg:col-span-6) */}
            <ScrollReveal variant="fade-in-up" duration={1200} className="lg:col-span-6">
              <button
                type="button"
                onClick={() => onImageClick(mainImage)}
                className="group relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[360px] lg:min-h-[460px] overflow-hidden rounded-2xl bg-slate-100 shadow-sm cursor-pointer border border-slate-200/60 block text-left"
                aria-label={`Open main gallery image for ${tourName}`}
              >
                <img
                  src={mainImage}
                  alt={`${tourName} Main View`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Eye Icon Hover Overlay (Compact Eye symbol) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <Eye className="h-7 w-7 text-[#fbb03b] stroke-[2.2] drop-shadow-md transition duration-300 group-hover:scale-115" />
                </div>
              </button>
            </ScrollReveal>

            {/* RIGHT SIDE: 2x2 Grid (lg:col-span-6) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">

              {/* CARD 1: Top-Left Photo (Clean photo, Eye on Hover) */}
              <ScrollReveal variant="fade-in-up" delay={100} duration={1200}>
                <button
                  type="button"
                  onClick={() => onImageClick(img1)}
                  className="group relative w-full h-[160px] sm:h-[220px] overflow-hidden rounded-2xl bg-slate-100 shadow-sm cursor-pointer border border-slate-200/60 block text-left"
                >
                  <img
                    src={img1}
                    alt={`${tourName} detail 1`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* Eye Icon Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#fbb03b] stroke-[2.2] drop-shadow-md transition duration-300 group-hover:scale-115" />
                  </div>
                </button>
              </ScrollReveal>

              {/* CARD 2: Top-Right Photo (Clean photo, Eye on Hover) */}
              <ScrollReveal variant="fade-in-up" delay={200} duration={1200}>
                <button
                  type="button"
                  onClick={() => onImageClick(img2)}
                  className="group relative w-full h-[160px] sm:h-[220px] overflow-hidden rounded-2xl bg-slate-100 shadow-sm cursor-pointer border border-slate-200/60 block text-left"
                >
                  <img
                    src={img2}
                    alt={`${tourName} detail 2`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* Eye Icon Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#fbb03b] stroke-[2.2] drop-shadow-md transition duration-300 group-hover:scale-115" />
                  </div>
                </button>
              </ScrollReveal>

              {/* CARD 3: Bottom-Left with "+" View More Images Overlay */}
              <ScrollReveal variant="fade-in-up" delay={300} duration={1200}>
                <button
                  type="button"
                  onClick={() => onImageClick(img3)}
                  className="group relative w-full h-[160px] sm:h-[220px] overflow-hidden rounded-2xl bg-slate-100 shadow-sm cursor-pointer border border-slate-200/60 block text-left"
                >
                  <img
                    src={img3}
                    alt={`${tourName} detail 3`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* Plus View More Overlay */}
                  <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-1.5 text-white transition duration-300 group-hover:bg-black/70">
                    <Plus className="h-7 w-7 text-[#fbb03b] stroke-[2.5]" />
                    <span className="text-xs sm:text-sm font-bold font-rubik tracking-wide text-white">View More Images</span>
                  </div>
                </button>
              </ScrollReveal>

              {/* CARD 4: Bottom-Right with Play Button Watch Video Overlay */}
              <ScrollReveal variant="fade-in-up" delay={400} duration={1200}>
                <button
                  type="button"
                  onClick={() => setShowVideoModal(true)}
                  className="group relative w-full h-[160px] sm:h-[220px] overflow-hidden rounded-2xl bg-slate-100 shadow-sm cursor-pointer border border-slate-200/60 block text-left"
                >
                  <img
                    src={img4}
                    alt={`${tourName} video thumbnail`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* Play Video Overlay */}
                  <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-1.5 text-white transition duration-300 group-hover:bg-black/70">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbb03b] text-[#fbb03b] transition duration-300 group-hover:scale-110 group-hover:bg-[#fbb03b] group-hover:text-slate-900">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-rubik tracking-wide text-white">Watch Video</span>
                  </div>
                </button>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PREVIEW MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fbb03b] text-slate-900 font-bold">
                  ▶
                </span>
                <h3 className="font-rubik text-lg font-bold">
                  {tourName} - Tour Video Highlight
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black overflow-hidden">
              <video
                controls
                autoPlay
                playsInline
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                className="h-full w-full object-cover"
              >
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
