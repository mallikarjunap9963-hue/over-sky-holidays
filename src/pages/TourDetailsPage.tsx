import {
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react"
import { Link, useParams } from "react-router-dom"
import {
  BedDouble,
  Building2,
  CalendarDays,
  Camera,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Home,
  Mail,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Utensils,
  User,
  Users,
  X,
} from "lucide-react"

import { attractionPackages, experienceItems } from "../data"
import { getTourDetailInfo } from "../data/tourDetailsData"

type BookingFormData = {
  fullName: string
  mobile: string
  email: string
  travelDate: string
  travelers: string
}

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

  const idNum = Number.parseInt(id || "", 10)

  let tour: any = null

  if (type === "packages") {
    tour = experienceItems["Tour Packages"]?.find(
      (item: any) => item.id === idNum
    )
  } else {
    const categoryKey = Object.keys(attractionPackages).find(
      (key) => key.toLowerCase() === type?.toLowerCase()
    )

    if (categoryKey) {
      tour = (attractionPackages as any)[categoryKey]?.find(
        (item: any) => item.id === idNum
      )
    }
  }

  const detail = tour
    ? getTourDetailInfo(
      type || "",
      idNum,
      tour.title || tour.tourType || "",
      tour.locations || [],
      tour.duration || "",
      tour.price || "",
      tour.country || "",
      tour.image || ""
    )
    : null

  const [bookingForm, setBookingForm] =
    useState<BookingFormData>(initialBookingForm)

  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)

  const placesSliderRef = useRef<HTMLDivElement | null>(null)

  const tourName = tour?.tourType || tour?.title || "Tour Package"

  const categoryLabel =
    type === "packages"
      ? "Tour Package"
      : `${formatCategoryName(type || "")} Tour`

  /*
   * The existing data appears to contain destination attractions
   * inside detail.highlights. We use those as Places Covered.
   * If highlights are unavailable, the page falls back to locations.
   */
  const placesCovered = useMemo(() => {
    if (!tour || !detail) return []

    if (Array.isArray(detail.highlights) && detail.highlights.length > 0) {
      return detail.highlights.map((place: any, index: number) => ({
        id: `${place.title}-${index}`,
        name: place.title,
        image:
          place.image ||
          detail.gallery?.[index] ||
          tour.image ||
          "",
        description:
          place.description ||
          `Explore ${place.title} during your ${tourName} tour.`,
      }))
    }

    if (Array.isArray(tour.locations) && tour.locations.length > 0) {
      return tour.locations.map((location: string, index: number) => ({
        id: `${location}-${index}`,
        name: location,
        image:
          detail.gallery?.[index] ||
          tour.image ||
          "",
        description: `Visit and explore ${location} during this tour.`,
      }))
    }

    return []
  }, [tour, detail, tourName])


  const galleryImages = useMemo(() => {
    if (!tour || !detail) return []

    const images = [
      tour.image,
      ...(Array.isArray(detail.gallery) ? detail.gallery : []),
      ...placesCovered.map((place) => place.image),
    ].filter((image): image is string => Boolean(image))

    return Array.from(new Set(images))
  }, [tour, detail, placesCovered])

  const packageInclusions = useMemo(() => {
    if (!detail?.inclusions || !Array.isArray(detail.inclusions)) {
      return []
    }

    return detail.inclusions.map((item: string, index: number) => ({
      id: `${item}-${index}`,
      title: getInclusionTitle(item),
      description: item,
      icon: getInclusionIcon(item),
    }))
  }, [detail])

  const tourHighlights = useMemo(() => {
    const locations = tour?.locations || []

    return [
      {
        title: "Beautiful Destinations",
        description:
          locations.length > 0
            ? `Explore ${locations.slice(0, 3).join(", ")} and more.`
            : "Explore beautiful attractions and memorable destinations.",
        icon: MapPin,
      },
      {
        title: "Comfortable Stay",
        description:
          "Enjoy comfortable accommodation according to the selected package.",
        icon: BedDouble,
      },
      {
        title: "Guided Sightseeing",
        description:
          "Visit the major attractions included in your tour package.",
        icon: Camera,
      },
      {
        title: "Travel Assistance",
        description:
          "Get reliable support and assistance throughout your journey.",
        icon: Headphones,
      },
    ]
  }, [tour])

  const updateBookingField = (
    field: keyof BookingFormData,
    value: string
  ) => {
    setBookingForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleBookingSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const enquiryData = {
      tourId: tour?.id,
      tourName,
      category: categoryLabel,
      ...bookingForm,
    }

    console.log("Tour booking enquiry:", enquiryData)

    setBookingSubmitted(true)
    setBookingForm(initialBookingForm)
  }

  const scrollPlaces = (direction: "left" | "right") => {
    placesSliderRef.current?.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    })
  }

  if (!tour || !detail) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-5 text-center">
        <h1 className="text-3xl font-black text-[#09255b]">
          Tour Package Not Found
        </h1>

        <p className="mt-3 max-w-md leading-7 text-slate-500">
          The package you are looking for may have been removed,
          renamed or is currently unavailable.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0874cb] px-7 text-sm font-bold text-white transition hover:bg-[#075da4]"
        >
          Go Back Home
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white font-jost">
      {/* HERO SECTION */}
      <section className="relative min-h-[570px] overflow-hidden lg:min-h-[620px]">
        <img
          src={tour.image}
          alt={tourName}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30" />

        <div className="relative mx-auto flex min-h-[570px] max-w-[1320px] flex-col px-5 pb-20 pt-7 sm:px-8 lg:min-h-[620px] lg:px-10 lg:pb-24">
          {/* Top Row */}
          <div className="flex items-start justify-between gap-6 font-rubik">
            <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-white">
              <Link
                to="/"
                className="flex items-center gap-2 transition hover:text-[#ffbd2e]"
              >
                <Home size={18} />
                Home
              </Link>

              <ChevronRight size={16} className="text-white/60" />

              <Link
                to="/"
                className="transition hover:text-[#ffbd2e]"
              >
                {categoryLabel}
              </Link>

              <ChevronRight size={16} className="text-white/60" />

              <span className="max-w-[180px] truncate text-white/80 sm:max-w-none">
                {tourName}
              </span>
            </nav>

            <a
              href="tel:+919908117712"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-[#063f91] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#052f6e] sm:flex"
            >
              <Headphones size={19} />
              24x7 Support
            </a>
          </div>

          {/* Main Hero Content */}
          <div className="mt-auto max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#075bb8] px-4 py-2 text-xs font-black uppercase tracking-wide font-rubik">
              <MapPin size={16} />
              {categoryLabel}
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[82px] font-rubik">
              {tourName}
            </h1>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#ffb400]" />

            <p className="mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg">
              {detail.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5 font-rubik">
              <HeroInfo
                icon={<CalendarDays size={25} />}
                value={tour.duration}
                label="Duration"
              />

              <HeroInfo
                icon={<MapPin size={25} />}
                value={
                  tour.locations?.length
                    ? tour.locations.slice(0, 2).join(", ")
                    : tour.country || "Tour Destination"
                }
                label="Destination"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_370px] lg:px-10 lg:py-16">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            {/* About */}
            <section>
              <SectionHeading title="About This Tour" />

              <p className="max-w-3xl text-[15px] leading-8 text-slate-600 md:text-base">
                {detail.about}
              </p>
            </section>

            {/* Package Inclusions */}
            <section className="mt-12">
              <SectionHeading title="Package Inclusions" />

              {packageInclusions.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {packageInclusions.map((item) => {
                    const Icon = item.icon

                    return (
                      <article
                        key={item.id}
                        className="flex min-h-[118px] gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#073e91] text-white shadow-sm">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="text-sm font-black text-[#09255b] font-rubik">
                            {item.title}
                          </h3>

                          <p className="mt-1.5 text-xs leading-5 text-slate-600">
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

          {/* OVERLAPPING BOOKING FORM */}
          <div className="lg:-mt-[350px]">
            <BookingForm
              tourName={tourName}
              form={bookingForm}
              submitted={bookingSubmitted}
              onChange={updateBookingField}
              onSubmit={handleBookingSubmit}
              onReset={() => setBookingSubmitted(false)}
            />
          </div>
        </div>
      </section>

      {/* PLACES COVERED */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading title="Places Covered" />

          {placesCovered.length > 0 ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => scrollPlaces("left")}
                aria-label="View previous places"
                className="absolute -left-4 top-[42%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#09255b] shadow-lg transition hover:bg-[#075bb8] hover:text-white"
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
                      <h3 className="font-black text-[#09255b] font-rubik">
                        {place.name}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600">
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
                className="absolute -right-4 top-[42%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#09255b] shadow-lg transition hover:bg-[#075bb8] hover:text-white"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
              The places covered for this package will be shared
              during booking.
            </div>
          )}
        </div>
      </section>


      {/* TOUR GALLERY */}
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
                    onClick={() => setSelectedGalleryImage(image)}
                    className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm ${isLarge
                        ? "sm:row-span-2 lg:col-span-2"
                        : ""
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

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition group-hover:bg-[#0874cb]">
                        <Camera size={19} />
                      </span>
                    </div>

                    {index === 7 && galleryImages.length > 8 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#073e91]/75 text-center text-white backdrop-blur-[2px]">
                        <div>
                          <p className="text-3xl font-black font-rubik">
                            +{galleryImages.length - 8}
                          </p>
                          <p className="mt-1 text-sm font-bold">
                            More Photos
                          </p>
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

      {/* TOUR HIGHLIGHTS */}
      <section className="border-y border-[#f3e8d6] bg-[#fffaf0] py-10">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading title="Tour Highlights" />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {tourHighlights.map((highlight, index) => {
              const Icon = highlight.icon

              return (
                <article
                  key={highlight.title}
                  className={`flex gap-4 ${index !== tourHighlights.length - 1
                    ? "lg:border-r lg:border-slate-200 lg:pr-6"
                    : ""
                    }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#075bb8] shadow-sm">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="font-black text-[#09255b] font-rubik">
                      {highlight.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {highlight.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* TERMS BAR */}
      <section className="bg-[#073e91] py-5 text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-center gap-3 px-5 text-center text-sm sm:flex-row sm:px-8 lg:px-10">
          <span className="flex items-center gap-2 font-semibold">
            <ShieldCheck size={19} />
            Terms and Conditions Apply
          </span>

          <span className="hidden h-5 w-px bg-white/40 sm:block" />

          <span className="text-white/80">
            Package availability and final pricing must be confirmed
            before booking.
          </span>
        </div>
      </section>

      {/* GALLERY LIGHTBOX */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${tourName} gallery preview`}
          onClick={() => setSelectedGalleryImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedGalleryImage(null)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#09255b] shadow-xl transition hover:bg-[#0874cb] hover:text-white"
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
      )}
    </main>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Booking Form                                  */
/* -------------------------------------------------------------------------- */

type BookingFormProps = {
  tourName: string
  form: BookingFormData
  submitted: boolean
  onChange: (
    field: keyof BookingFormData,
    value: string
  ) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onReset: () => void
}

function BookingForm({
  tourName,
  form,
  submitted,
  onChange,
  onSubmit,
  onReset,
}: BookingFormProps) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,42,91,0.18)] md:p-8">
        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check size={30} strokeWidth={3} />
            </div>

            <h2 className="mt-5 text-2xl font-black text-[#09255b] font-rubik">
              Enquiry Submitted
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Thank you for enquiring about the {tourName} tour.
              Our travel executive will contact you shortly.
            </p>

            <button
              type="button"
              onClick={onReset}
              className="mt-6 rounded-xl bg-[#0874cb] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#065da5] font-rubik"
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-black text-[#09255b] font-rubik">
              Book Your {tourName} Tour
            </h2>

            <div className="mt-3 h-1 w-11 rounded-full bg-[#ffb400]" />

            <form onSubmit={onSubmit} className="mt-7 space-y-5">
              <BookingField
                label="Full Name"
                icon={<User size={18} />}
              >
                <input
                  required
                  value={form.fullName}
                  onChange={(event) =>
                    onChange("fullName", event.target.value)
                  }
                  placeholder="Enter your full name"
                  className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </BookingField>

              <BookingField
                label="Mobile Number"
                icon={<Phone size={18} />}
              >
                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  value={form.mobile}
                  onChange={(event) =>
                    onChange("mobile", event.target.value)
                  }
                  placeholder="Enter your mobile number"
                  className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </BookingField>

              <BookingField
                label="Email Address"
                icon={<Mail size={18} />}
              >
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    onChange("email", event.target.value)
                  }
                  placeholder="Enter your email address"
                  className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </BookingField>

              <BookingField
                label="Travel Date"
                icon={<CalendarDays size={18} />}
              >
                <input
                  required
                  type="date"
                  value={form.travelDate}
                  onChange={(event) =>
                    onChange("travelDate", event.target.value)
                  }
                  className="h-12 w-full bg-transparent text-sm text-slate-700 outline-none"
                />
              </BookingField>

              <BookingField
                label="Number of Travelers"
                icon={<Users size={18} />}
              >
                <select
                  value={form.travelers}
                  onChange={(event) =>
                    onChange("travelers", event.target.value)
                  }
                  className="h-12 w-full cursor-pointer bg-transparent text-sm text-slate-700 outline-none"
                >
                  {Array.from(
                    { length: 10 },
                    (_, index) => index + 1
                  ).map((count) => (
                    <option key={count} value={count}>
                      {count} Traveler{count > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </BookingField>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#0874cb] to-[#7937ed] px-5 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl font-rubik"
              >
                Book Now
              </button>
            </form>

            <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck size={17} className="text-[#0874cb]" />
              Your details are safe with us
            </p>
          </>
        )}
      </div>
    </aside>
  )
}

/* -------------------------------------------------------------------------- */
/*                               Small Components                             */
/* -------------------------------------------------------------------------- */

type BookingFieldProps = {
  label: string
  icon: ReactNode
  children: ReactNode
}

function BookingField({
  label,
  icon,
  children,
}: BookingFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#10254c] font-rubik">
        {label}
      </span>

      <span className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 transition focus-within:border-[#0874cb] focus-within:ring-4 focus-within:ring-blue-50">
        <span className="shrink-0 text-slate-400">
          {icon}
        </span>

        {children}
      </span>
    </label>
  )
}

type HeroInfoProps = {
  icon: ReactNode
  value: string
  label: string
}

function HeroInfo({
  icon,
  value,
  label,
}: HeroInfoProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-white">
        {icon}
      </span>

      <div>
        <p className="text-base font-bold sm:text-lg">
          {value}
        </p>

        <p className="mt-1 text-sm text-white/70">
          {label}
        </p>
      </div>
    </div>
  )
}

function SectionHeading({
  title,
}: {
  title: string
}) {
  return (
    <div className="mb-6 font-rubik">
      <h2 className="text-2xl font-black text-[#09255b] md:text-3xl">
        {title}
      </h2>

      <div className="mt-3 h-1 w-11 rounded-full bg-[#ffb400]" />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

function formatCategoryName(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) =>
      character.toUpperCase()
    )
}

function getInclusionTitle(inclusion: string) {
  const value = inclusion.toLowerCase()

  if (value.includes("accommodation")) {
    return "Accommodation"
  }

  if (
    value.includes("hotel") ||
    value.includes("resort")
  ) {
    return "Hotel Stay"
  }

  if (
    value.includes("meal") ||
    value.includes("breakfast") ||
    value.includes("lunch") ||
    value.includes("dinner")
  ) {
    return "Meal Plan"
  }

  if (
    value.includes("sightseeing") ||
    value.includes("tour")
  ) {
    return "All Sightseeing"
  }

  if (
    value.includes("pickup") ||
    value.includes("pick up") ||
    value.includes("drop")
  ) {
    return "Pickup & Drop"
  }

  if (
    value.includes("airport") ||
    value.includes("railway") ||
    value.includes("bus") ||
    value.includes("transfer")
  ) {
    return "Travel Transfer"
  }

  return "Package Benefit"
}

function getInclusionIcon(inclusion: string) {
  const value = inclusion.toLowerCase()

  if (value.includes("accommodation")) {
    return BedDouble
  }

  if (
    value.includes("hotel") ||
    value.includes("resort")
  ) {
    return Building2
  }

  if (
    value.includes("meal") ||
    value.includes("breakfast") ||
    value.includes("lunch") ||
    value.includes("dinner")
  ) {
    return Utensils
  }

  if (
    value.includes("sightseeing") ||
    value.includes("tour")
  ) {
    return Camera
  }

  if (
    value.includes("pickup") ||
    value.includes("pick up") ||
    value.includes("drop")
  ) {
    return Car
  }

  if (
    value.includes("airport") ||
    value.includes("railway") ||
    value.includes("bus") ||
    value.includes("transfer")
  ) {
    return Plane
  }

  return Sparkles
}