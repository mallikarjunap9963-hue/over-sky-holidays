import { useState } from "react"
import type { FormEvent } from "react"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  Plane,
  UserRound,
  UsersRound,
} from "lucide-react"

type BookingFormData = {
  name: string
  phone: string
  destination: string
  travelDate: string
  travelers: string
  tourType: string
}

const initialFormData: BookingFormData = {
  name: "",
  phone: "",
  destination: "",
  travelDate: "",
  travelers: "2",
  tourType: "",
}

const destinationOptions = [
  "Manali", "Kerala", "Ooty", "Rishikesh", "Kedarnath",
  "Badrinath", "Meghalaya", "Maldives", "Bangkok", "Dubai",
  "Nepal", "Bhutan", "Other Destination",
]

const tourTypeOptions = [
  "Domestic Tour", "International Tour", "Honeymoon Package",
  "Family Holiday", "Group Tour", "Pilgrimage Tour",
  "Corporate Tour", "Customized Package",
]

const inputClass =
  "h-[46px] w-full rounded-lg border border-slate-200 bg-[#f8fafc] pl-10 pr-4 font-jost text-[13px] text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0b84d8] focus:bg-white focus:ring-2 focus:ring-[#0b84d8]/10"

const selectClass =
  "h-[46px] w-full appearance-none rounded-lg border border-slate-200 bg-[#f8fafc] pl-10 pr-9 font-jost text-[13px] text-slate-600 outline-none transition-all duration-200 focus:border-[#0b84d8] focus:bg-white focus:ring-2 focus:ring-[#0b84d8]/10"

const labelClass = "mb-1.5 block font-rubik text-[11.5px] font-bold text-[#102f50]"

const iconClass =
  "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0b84d8]"

export function BookNowForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (submitted) setSubmitted(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Booking enquiry:", formData)
    setSubmitted(true)
    setFormData(initialFormData)
  }

  return (
    <div className="w-full bg-white px-6 py-6 sm:px-8 sm:py-8">
      {/* Heading */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
          style={{ background: "linear-gradient(135deg,#0b84d8,#0567ad)" }}
        >
          <Plane size={17} />
        </div>
        <div>
          <h2 className="font-rubik text-[20px] font-extrabold leading-tight text-[#102f50]">
            Book Now
          </h2>
          <p className="font-jost text-[12px] text-slate-400">
            Fill in your details and we'll get back to you shortly.
          </p>
        </div>
      </div>

      {/* Success message */}
      {submitted && (
        <div className="mb-4 flex items-center gap-2.5 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
          <CheckCircle2 size={17} className="shrink-0 text-green-600" />
          <p className="font-jost text-[13px] font-medium text-green-700">
            Enquiry submitted! We'll contact you soon.
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">

        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <UserRound size={15} className={iconClass} />
            <input
              id="name" name="name" type="text"
              value={formData.name} onChange={handleChange}
              required placeholder="Your name"
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone size={15} className={iconClass} />
            <input
              id="phone" name="phone" type="tel"
              value={formData.phone} onChange={handleChange}
              required pattern="[0-9]{10}" maxLength={10}
              placeholder="10-digit mobile number"
              className={inputClass}
            />
          </div>
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className={labelClass}>
            Destination <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin size={15} className={iconClass} />
            <select
              id="destination" name="destination"
              value={formData.destination} onChange={handleChange}
              required className={selectClass}
            >
              <option value="">Select destination</option>
              {destinationOptions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Travel Date */}
        <div>
          <label htmlFor="travelDate" className={labelClass}>
            Travel Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <CalendarDays size={15} className={iconClass} />
            <input
              id="travelDate" name="travelDate" type="date"
              value={formData.travelDate} onChange={handleChange}
              required className={inputClass}
            />
          </div>
        </div>

        {/* Travelers */}
        <div>
          <label htmlFor="travelers" className={labelClass}>Travellers</label>
          <div className="relative">
            <UsersRound size={15} className={iconClass} />
            <select
              id="travelers" name="travelers"
              value={formData.travelers} onChange={handleChange}
              className={selectClass}
            >
              {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n.toString()}>
                  {n} {n === 1 ? "Traveller" : "Travellers"}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Tour Type */}
        <div>
          <label htmlFor="tourType" className={labelClass}>Tour Type</label>
          <div className="relative">
            <Plane size={15} className={iconClass} />
            <select
              id="tourType" name="tourType"
              value={formData.tourType} onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select tour type</option>
              {tourTypeOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Submit */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="group flex h-[46px] w-full items-center justify-center gap-2 rounded-lg font-rubik text-[12px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(11,132,216,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(11,132,216,0.32)]"
            style={{ background: "linear-gradient(135deg,#0b84d8,#0567ad)" }}
          >
            Submit Enquiry
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </form>
    </div>
  )
}