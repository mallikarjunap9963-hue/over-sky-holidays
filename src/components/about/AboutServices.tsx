import { useState } from "react"
import { ScrollReveal } from "../ui/ScrollReveal"
import { BookingModal } from "../ui/BookingModal"

type ServiceItem = {
  number: string
  title: string
  subtitle: string
  description: string
  image: string
  icon: React.ReactNode
  featured?: boolean
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Domestic Tours",
    subtitle: "Discover Incredible India",
    description:
      "Explore mountains, beaches, heritage cities and spiritual destinations with carefully planned holiday packages.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85",
    featured: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "International Tours",
    subtitle: "Travel Beyond Borders",
    description:
      "Discover iconic destinations across Asia, Europe, the Middle East and beautiful island countries.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=85",
    featured: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Visa Services",
    subtitle: "Simple Visa Assistance",
    description:
      "Complete guidance for documentation, applications, appointments and visa tracking.",
    image:
      "https://images.unsplash.com/photo-1569974498991-d3c12a504f95?auto=format&fit=crop&w=1000&q=85",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Flight Tickets",
    subtitle: "Fly At The Best Fares",
    description:
      "Book domestic and international flights across major airlines with convenient schedules.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2s-4-2-5.5-.5L10 5 1.8 6.2l4.9 4.9-2 2.2 6.1 1.9 1.9 6.1 2.2-2 4.9 4.9Z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Passport Services",
    subtitle: "Passport Made Easy",
    description:
      "Get support for new passports, renewals, corrections and Tatkal applications.",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=85",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 17h10" />
      </svg>
    ),
  },
]

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

function FeaturedServiceCard({
  service,
  index,
}: {
  service: ServiceItem
  index: number
}) {
  return (
    <ScrollReveal
      variant="fade-in-up"
      delay={100 + index * 100}
      duration={1200}
    >
      <article className="group relative min-h-[430px] overflow-hidden rounded-[22px] bg-[#102f50] shadow-[0_18px_55px_rgba(15,47,80,0.16)]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061e34] via-[#061e34]/35 to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
          <span className="rounded-full border border-white/25 bg-black/15 px-3 py-1.5 font-rubik text-[11px] font-bold tracking-[0.14em] text-white backdrop-blur-md">
            {service.number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbb03b] text-[#102f50] shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
            {service.icon}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <p className="font-rubik text-[11px] font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
            {service.subtitle}
          </p>

          <h3 className="mt-2 font-rubik text-[25px] font-extrabold text-white sm:text-[28px]">
            {service.title}
          </h3>

          <p className="mt-3 max-w-[500px] font-jost text-[14px] leading-6 text-white/75">
            {service.description}
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 font-rubik text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:text-[#fbb03b]"
          >
            Explore Service
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </article>
    </ScrollReveal>
  )
}

function CompactServiceCard({
  service,
  index,
}: {
  service: ServiceItem
  index: number
}) {
  return (
    <ScrollReveal
      variant="fade-in-up"
      delay={220 + index * 90}
      duration={1200}
    >
      <article className="group relative min-h-[310px] overflow-hidden rounded-[20px] bg-[#102f50] shadow-[0_15px_45px_rgba(15,47,80,0.13)]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061e34] via-[#061e34]/50 to-[#061e34]/10" />

        <span className="absolute right-5 top-4 font-rubik text-[48px] font-black leading-none text-white/15">
          {service.number}
        </span>

        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:border-[#fbb03b] group-hover:bg-[#fbb03b] group-hover:text-[#102f50]">
          {service.icon}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-rubik text-[10px] font-bold uppercase tracking-[0.16em] text-[#fbb03b]">
            {service.subtitle}
          </p>

          <h3 className="mt-1.5 font-rubik text-[20px] font-extrabold text-white">
            {service.title}
          </h3>

          <p className="mt-2 font-jost text-[13px] leading-5 text-white/70">
            {service.description}
          </p>

          <a
            href="#contact"
            aria-label={`Learn more about ${service.title}`}
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#fbb03b] hover:bg-[#fbb03b] hover:text-[#102f50]"
          >
            <ArrowIcon />
          </a>
        </div>
      </article>
    </ScrollReveal>
  )
}

export function AboutServices() {
  const [modalOpen, setModalOpen] = useState(false)
  const featuredServices = services.filter((service) => service.featured)
  const compactServices = services.filter((service) => !service.featured)

  return (
    <>
    <section
      id="what-we-offer"
      className="relative overflow-hidden bg-[#f6f8fb] px-5 py-10 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#0b84d8]/10 blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#fbb03b]/10 blur-[110px]" />

        <svg
          viewBox="0 0 500 500"
          className="absolute -right-20 -top-32 h-[420px] w-[420px] text-[#0b84d8]/[0.035]"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="250" cy="250" r="210" />
          <circle cx="250" cy="250" r="160" className="text-[#f6f8fb]" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Heading */}
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-12">
          <div>
            <ScrollReveal variant="fade-in-up" delay={50} duration={1100}>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#fbb03b]" />

                <p className="font-rubik text-[12px] font-bold uppercase tracking-[0.2em] text-[#0b84d8] sm:text-[13px]">
                  What We Offer
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-up" delay={140} duration={1100}>
              <h2 className="mt-3 max-w-[650px] font-rubik text-[30px] font-extrabold leading-[1.15] text-[#102f50] sm:text-[36px] lg:text-[42px]">
                Complete Travel Solutions
                <span className="block text-[#0b84d8]">
                  Under One Roof
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-in-up" delay={220} duration={1100}>
            <p className="max-w-[520px] font-jost text-[14px] leading-7 text-slate-600 sm:text-[15px] lg:ml-auto">
              From choosing your holiday destination to booking flights and
              completing travel documents, we handle every important part of
              your journey.
            </p>
          </ScrollReveal>
        </div>

        {/* Two large featured services */}
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredServices.map((service, index) => (
            <FeaturedServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Three smaller services */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {compactServices.map((service, index) => (
            <CompactServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA strip */}
        <ScrollReveal variant="fade-in-up" delay={400} duration={1100}>
          <div className="relative mt-8 overflow-hidden rounded-[18px] bg-[#0b84d8] px-6 py-6 shadow-[0_16px_45px_rgba(11,132,216,0.22)] sm:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border-[38px] border-white/[0.07]" />

            <div className="relative">
              <p className="font-rubik text-[11px] font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
                Need A Custom Holiday Package?
              </p>

              <h3 className="mt-2 font-rubik text-[21px] font-extrabold text-white sm:text-[24px]">
                Let our travel experts build the perfect trip for you
              </h3>

              <p className="mt-2 max-w-[650px] font-jost text-[14px] leading-6 text-white/75">
                Share your destination, dates and budget, and our team will
                prepare a personalized travel plan.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="relative mt-5 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#fbb03b] px-6 py-3.5 font-rubik text-[12px] font-bold uppercase tracking-[0.1em] text-[#102f50] transition-all duration-300 hover:bg-white lg:mt-0"
            >
              Plan My Holiday
              <ArrowIcon />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}