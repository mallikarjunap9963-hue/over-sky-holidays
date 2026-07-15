import {
  Check,
  User,
  Phone,
  Mail,
  CalendarDays,
  Users,
  ShieldCheck,
} from "lucide-react"
import type { BookingFormProps, BookingFieldProps } from "../../types/tours"

export default function TourBookingForm({
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

            <p className="mt-3 text-sm leading-6 text-slate-600 font-jost">
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
                  className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 font-jost"
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
                  className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 font-jost"
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
                  className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 font-jost"
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
                  className="h-12 w-full bg-transparent text-sm text-slate-700 outline-none font-jost"
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
                  className="h-12 w-full cursor-pointer bg-transparent text-sm text-slate-700 outline-none font-jost"
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

            <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 font-jost">
              <ShieldCheck size={17} className="text-[#0874cb]" />
              Your details are safe with us
            </p>
          </>
        )}
      </div>
    </aside>
  )
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
