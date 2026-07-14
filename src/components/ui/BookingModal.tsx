import { useEffect } from "react"
import { X } from "lucide-react"
import { BookNowForm } from "../booking-form"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    if (isOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[900] bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Centred modal — max 100dvh */}
      <div
        className="fixed inset-0 z-[901] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book your holiday"
          className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close booking form"
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-slate-700"
          >
            <X size={16} />
          </button>

          {/* Form — scrollable if viewport is short */}
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(100dvh - 48px)" }}
          >
            <BookNowForm />
          </div>
        </div>
      </div>
    </>
  )
}
