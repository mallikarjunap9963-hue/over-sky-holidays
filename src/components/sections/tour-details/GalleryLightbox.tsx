import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type GalleryLightboxProps = {
  selectedGalleryImage: string
  images?: string[]
  tourName: string
  onClose: () => void
}

export default function GalleryLightbox({
  selectedGalleryImage,
  images = [],
  tourName,
  onClose,
}: GalleryLightboxProps) {
  // Ensure selected image is part of the image list
  const fullList = images.length > 0 ? images : [selectedGalleryImage]
  const initialIndex = fullList.findIndex((img) => img === selectedGalleryImage)
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, fullList.length])

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? fullList.length - 1 : prev - 1))
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === fullList.length - 1 ? 0 : prev + 1))
  }

  const currentImage = fullList[currentIndex] || selectedGalleryImage

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md font-jost select-none"
      role="dialog"
      aria-modal="true"
      aria-label={`${tourName} gallery preview`}
      onClick={onClose}
    >
      {/* Top Header: Image Counter Badge & Close Button */}
      <div className="absolute top-5 inset-x-5 flex items-center justify-between z-20 pointer-events-none">
        <span className="pointer-events-auto rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md font-rubik shadow-lg">
          Image {currentIndex + 1} of {fullList.length}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0853a4] shadow-xl transition hover:bg-[#0853a4] hover:text-white cursor-pointer"
          aria-label="Close gallery preview"
        >
          <X size={22} />
        </button>
      </div>

      {/* Left Scroll Button (<) */}
      {fullList.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white shadow-2xl backdrop-blur-md transition hover:bg-white hover:text-[#0853a4] cursor-pointer"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Main Image */}
      <div
        className="relative flex items-center justify-center max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={currentImage}
          src={currentImage}
          alt={`${tourName} photo ${currentIndex + 1}`}
          className="max-h-[82vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl transition duration-300 animate-[fadeIn_0.2s_ease-out]"
        />
      </div>

      {/* Right Scroll Button (>) */}
      {fullList.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-3 sm:right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white shadow-2xl backdrop-blur-md transition hover:bg-white hover:text-[#0853a4] cursor-pointer"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  )
}
