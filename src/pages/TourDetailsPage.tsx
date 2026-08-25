import {
  useMemo,
  useState,
  useEffect,
  type FormEvent,
} from "react"
import { Link, useParams } from "react-router-dom"
import { toursApi } from "../api/toursApi"

import { getPlaceImage } from "../data/placeImages"
import type { BookingFormData } from "../types/tours"
import { formatCategoryName, getInclusionTitle, getInclusionIcon } from "../utils/tourHelpers"
import SectionHeading from "../components/ui/SectionHeading"
import { TourDetailsSkeleton } from "../components/ui/Skeletons"
import TourBookingForm from "../components/sections/TourBookingForm"
import TourDetailsHero from "../components/sections/tour-details/TourDetailsHero"
import PlacesCovered from "../components/sections/tour-details/PlacesCovered"
import TourGallery from "../components/sections/tour-details/TourGallery"
import GalleryLightbox from "../components/sections/tour-details/GalleryLightbox"
import RecommendedTours from "../components/sections/tour-details/RecommendedTours"

const initialBookingForm: BookingFormData = {
  fullName: "",
  mobile: "",
  email: "",
  travelDate: "",
  travelers: "2",
}

export default function TourDetailsPage() {
  let { type, id } = useParams<{
    type?: string
    id?: string
  }>()

  if (!type && id) {
    type = "packages"
  }

  const [tour, setTour] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [bookingForm, setBookingForm] = useState<BookingFormData>(initialBookingForm)
  const [bookingLoading, setBookingLoading] = useState<boolean>(false)
  const [bookingError, setBookingError] = useState<string | null>(null)
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    async function loadTour() {
      if (!id) return
      setLoading(true)
      try {
        const res = await toursApi.getTourById(id)
        if (!isMounted) return

        if (res.tour) {
          setTour(res.tour)
        } else {
          setTour(null)
        }
      } catch (err) {
        if (!isMounted) return
        console.error("Error loading tour details:", err)
        setTour(null)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadTour()
    return () => {
      isMounted = false
    }
  }, [id, type])

  const detail = tour?.detail || null
  const tourName = tour?.title || tour?.tourType || "Tour Package"

  const categoryLabel =
    type === "packages"
      ? "Tour Package"
      : `${formatCategoryName(type || tour?.category || "")} Tour`

  const categoryLink =
    type?.toLowerCase() === "domestic" || tour?.category?.toLowerCase() === "domestic"
      ? "/tours/domestic"
      : type?.toLowerCase() === "international" || tour?.category?.toLowerCase() === "international"
        ? "/tours/international"
        : "/"

  const placesCovered = useMemo(() => {
    if (!tour) return []

    // If backend features has place_covered items
    if (Array.isArray(tour.features) && tour.features.length > 0) {
      const placesFromFeatures = tour.features.filter((f: any) => f.type === "place_covered")
      if (placesFromFeatures.length > 0) {
        return placesFromFeatures.map((place: any, index: number) => ({
          id: `${place.title}-${index}`,
          name: place.title,
          image: place.image_url || getPlaceImage(place.title || "") || tour.image || "",
          description: place.description || `Explore ${place.title} during your ${tourName} tour.`,
        }))
      }
    }

    if (detail && Array.isArray(detail.highlights) && detail.highlights.length > 0) {
      return detail.highlights.map((place: any, index: number) => {
        const mappedImg = getPlaceImage(place.title || "")
        return {
          id: `${place.title}-${index}`,
          name: place.title,
          image:
            mappedImg ||
            (typeof place.image === "string" && place.image ? place.image : "") ||
            detail.gallery?.[index] ||
            tour.image ||
            "",
          description:
            place.description ||
            `Explore ${place.title} during your ${tourName} tour.`,
        }
      })
    }

    if (Array.isArray(tour.locations) && tour.locations.length > 0) {
      return tour.locations.map((location: string, index: number) => {
        const mappedImg = getPlaceImage(location || "")
        return {
          id: `${location}-${index}`,
          name: location,
          image:
            mappedImg ||
            detail?.gallery?.[index] ||
            tour.image ||
            "",
          description: `Visit and explore ${location} during this tour.`,
        }
      })
    }

    return []
  }, [tour, detail, tourName])

  const galleryImages = useMemo(() => {
    if (!tour) return []

    const images = [
      tour.image,
      ...(Array.isArray(detail?.gallery) ? detail.gallery : []),
      ...placesCovered.map((place: any) => place.image),
    ].filter((image): image is string => Boolean(image) && typeof image === "string" && image.trim().length > 0)

    return Array.from(new Set(images))
  }, [tour, detail, placesCovered])

  const packageInclusions = useMemo(() => {
    if (!detail?.inclusions || !Array.isArray(detail.inclusions)) {
      return []
    }

    return detail.inclusions
      .map((item: string, index: number) => ({
        id: `${item}-${index}`,
        title: getInclusionTitle(item),
        description: item,
        icon: getInclusionIcon(item),
      }))
      .slice(0, 6)
  }, [detail])

  const updateBookingField = (
    field: keyof BookingFormData,
    value: string
  ) => {
    setBookingForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleBookingSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBookingError(null)

    if (!bookingForm.fullName || !bookingForm.mobile || !bookingForm.email) {
      setBookingError("Please fill in all required fields.")
      return
    }

    // Default travel date to tomorrow if unselected
    let formattedDate = bookingForm.travelDate
    if (!formattedDate) {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      formattedDate = tomorrow.toISOString().split("T")[0]
    }

    setBookingLoading(true)
    try {
      const payload = {
        tour_id: Number(tour?.tourId || tour?.id || 1),
        name: bookingForm.fullName,
        phone: bookingForm.mobile,
        email: bookingForm.email,
        travel_date: formattedDate,
        travelers: Number(bookingForm.travelers) || 2,
      }

      const res = await toursApi.submitTourInquiry(payload)
      if (res.success || res.status) {
        setBookingSubmitted(true)
        setBookingForm(initialBookingForm)
      } else {
        if (res.errors) {
          const firstErr = Object.values(res.errors)[0]?.[0]
          setBookingError(firstErr || res.message || "Failed to submit booking inquiry.")
        } else {
          setBookingError(res.message || "Failed to submit booking inquiry.")
        }
      }
    } catch (err: any) {
      console.error("Booking submission error:", err)
      setBookingError("Unable to submit booking inquiry. Please try again.")
    } finally {
      setBookingLoading(false)
    }
  }

  const allTourImages = useMemo(() => {
    const list: string[] = []
    galleryImages.forEach((img) => {
      if (img && !list.includes(img)) list.push(img)
    })
    placesCovered.forEach((p: any) => {
      if (p.image && !list.includes(p.image)) list.push(p.image)
    })
    return list
  }, [galleryImages, placesCovered])

  if (loading) {
    return <TourDetailsSkeleton />
  }


  if (!tour || !detail) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-5 text-center font-jost">
        <h1 className="text-3xl font-black text-[#0853a4] font-rubik">
          Tour Package Not Found
        </h1>

        <p className="mt-3 max-w-md leading-7 text-slate-500">
          The package you are looking for may have been removed,
          renamed or is currently unavailable.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0853a4] px-7 text-sm font-bold text-white transition hover:bg-[#064a8f]"
        >
          Go Back Home
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white font-jost">
      <TourDetailsHero
        tour={tour}
        tourName={tourName}
        categoryLabel={categoryLabel}
        categoryLink={categoryLink}
        detail={detail}
      />

      {/* MAIN CONTENT */}
      <section className="relative z-10 bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_370px] lg:px-10 lg:py-12">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            {/* About */}
            <section>
              <SectionHeading subtitle="Overview" title="About This Tour" />

              <div className="max-w-3xl space-y-4 text-[15px] leading-8 text-slate-600 md:text-base font-jost">
                {String(detail.about || "")
                  .split("\n\n")
                  .map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
              </div>
            </section>

            {/* Package Inclusions */}
            <section className="mt-10">
              <SectionHeading subtitle="What's Included" title="Package Inclusions" />

              {packageInclusions.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {packageInclusions.map((item: any) => {
                    const Icon = item.icon


                    return (
                      <article
                        key={item.id}
                        className="flex min-h-[118px] gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0853a4] text-white shadow-sm">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="text-[15.5px] font-black text-[#0853a4] font-rubik">
                            {item.title}
                          </h3>

                          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 font-jost">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    )
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                  Package inclusions will be confirmed by our travel
                  executive.
                </div>
              )}
            </section>
          </div>

          {/* BOOKING FORM SIDEBAR */}
          <div>
            <TourBookingForm
              tourName={tourName}
              form={bookingForm}
              submitted={bookingSubmitted}
              onChange={updateBookingField}
              onSubmit={handleBookingSubmit}
              onReset={() => setBookingSubmitted(false)}
              loading={bookingLoading}
              error={bookingError}
            />
          </div>
        </div>
      </section>

      <PlacesCovered
        placesCovered={placesCovered}
        onImageClick={setSelectedGalleryImage}
      />

      <TourGallery
        galleryImages={galleryImages}
        tourName={tourName}
        onImageClick={setSelectedGalleryImage}
      />

      <RecommendedTours
        currentTourId={tour?.id}
        currentCategory={type}
        currentTour={tour}
      />

      {/* TERMS BAR */}
      <section className="bg-white py-5 text-slate-800 border-t border-slate-200/60 font-jost">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-center gap-3 px-5 text-center text-sm sm:flex-row sm:px-8 lg:px-10">
          <span className="flex items-center gap-2 font-semibold font-rubik text-[#0853a4]">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-[#25d366]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Terms and Conditions Apply
          </span>

          <span className="hidden h-5 w-px bg-[#0853a4]/20 sm:block" />

          <span className="text-slate-500 font-jost">
            Package availability and final pricing must be confirmed before booking.
          </span>
        </div>
      </section>

      {selectedGalleryImage && (
        <GalleryLightbox
          selectedGalleryImage={selectedGalleryImage}
          images={allTourImages}
          tourName={tourName}
          onClose={() => setSelectedGalleryImage(null)}
        />
      )}
    </main>
  )
}