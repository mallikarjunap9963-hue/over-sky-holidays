import { X } from "lucide-react"

type GalleryLightboxProps = {
  selectedGalleryImage: string
  tourName: string
  onClose: () => void
}

export default function GalleryLightbox({
  selectedGalleryImage,
  tourName,
  onClose,
}: GalleryLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${tourName} gallery preview`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#09255b] shadow-xl transition hover:bg-[#0874cb] hover:text-white cursor-pointer"
        aria-label="Close gallery preview"
      >
        <X size={24} />
      </button>

      <img
        src={selectedGalleryImage}
        alt={`${tourName} full gallery preview`}
        className="max-h-[88vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}
