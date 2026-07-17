import { useEffect, useMemo, useState } from "react"
import type { ReviewSource } from "../../types"
import { reviewTabs, travelerReviews } from "../../data"
import { ReviewSourceIcon } from "../icons/Icons"
import { ScrollReveal } from "../ui/ScrollReveal"

export function TravelerTestimonials() {
  const [activeReviewTab, setActiveReviewTab] =
    useState<ReviewSource>("All Reviews")

  const [reviewSlide, setReviewSlide] = useState(0)

  const filteredTravelerReviews = useMemo(() => {
    if (activeReviewTab === "All Reviews") {
      return travelerReviews
    }

    return travelerReviews.filter(
      (review) => review.source === activeReviewTab
    )
  }, [activeReviewTab])

  useEffect(() => {
    if (filteredTravelerReviews.length <= 1) return

    const reviewAutoScroll = window.setInterval(() => {
      setReviewSlide(
        (previous) => (previous + 1) % filteredTravelerReviews.length
      )
    }, 4000)

    return () => window.clearInterval(reviewAutoScroll)
  }, [filteredTravelerReviews.length])

  const visibleTravelerReviews = Array.from(
    {
      length: Math.min(3, filteredTravelerReviews.length),
    },
    (_, offset) =>
      filteredTravelerReviews[
      (reviewSlide + offset) % filteredTravelerReviews.length
      ]
  )

  const selectReviewTab = (tab: ReviewSource) => {
    setActiveReviewTab(tab)
    setReviewSlide(0)
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f7f4f0] px-5 py-10 sm:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0853a4]/[0.06] blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#fbb03b]/[0.07] blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #100c08 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Section Heading */}
        <ScrollReveal
          variant="fade-in-up"
          duration={1200}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#0853a4]" />

            <p className="font-satisfy text-[24px] font-normal capitalize text-[#0853a4] sm:text-[27px]">
              Testimonials
            </p>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#0853a4]" />
          </div>

          <h2 className="mt-3 font-rubik text-[34px] font-bold leading-[1.15] tracking-[-0.03em] text-[#100c08] sm:text-[42px] lg:text-[50px]">
            Regards From Travelers
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] font-jost text-[15px] leading-7 text-slate-500 sm:text-[16px]">
            Discover genuine experiences shared by travelers who explored
            unforgettable destinations with us.
          </p>
        </ScrollReveal>

        {/* Review Tabs */}
        <ScrollReveal
          variant="fade-in-up"
          delay={200}
          duration={1300}
          className="mx-auto mt-10 max-w-[980px]"
        >
          <div className="overflow-hidden rounded-[14px] border border-slate-200/70 bg-white p-1.5 shadow-[0_12px_40px_rgba(16,12,8,0.06)]">
            <div className="flex overflow-x-auto scrollbar-hide">
              {reviewTabs.map((tab) => {
                const isActive = activeReviewTab === tab

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => selectReviewTab(tab)}
                    aria-pressed={isActive}
                    className={`relative flex min-h-[52px] min-w-[150px] flex-1 items-center justify-center gap-2.5 rounded-[10px] px-5 font-rubik text-[13px] font-semibold transition-all duration-300 ${isActive
                        ? "bg-[#0853a4] text-white shadow-[0_8px_22px_rgba(8,83,164,0.22)]"
                        : "text-[#454545] hover:bg-[#0853a4]/[0.06] hover:text-[#0853a4]"
                      }`}
                  >
                    <span
                      className={
                        isActive
                          ? "[&_*]:text-white"
                          : "[&_*]:text-current"
                      }
                    >
                      <ReviewSourceIcon source={tab} />
                    </span>

                    <span className="whitespace-nowrap">{tab}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <div className="relative mt-14">
          {visibleTravelerReviews.length > 0 ? (
            <div
              key={`${activeReviewTab}-${reviewSlide}`}
              className="grid animate-[testimonialSlideIn_0.55s_ease-out] auto-rows-fr gap-7 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleTravelerReviews.map((review, index) => (
                <ScrollReveal
                  key={`${activeReviewTab}-${review.id}`}
                  variant="fade-in-up"
                  delay={index * 100}
                  duration={1300}
                  className="h-full"
                >
                  <article className="group flex h-full min-h-[430px] flex-col">
                    {/* Main Review Card */}
                    <div className="relative flex min-h-[350px] flex-1 flex-col rounded-[18px] border border-slate-200/80 bg-white px-7 pb-8 pt-7 shadow-[0_12px_45px_rgba(16,12,8,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0853a4]/25 hover:shadow-[0_22px_55px_rgba(16,12,8,0.10)] sm:px-8">
                      {/* Top Row */}
                      <div className="flex h-[45px] items-start justify-between">
                        <div className="inline-flex h-[34px] items-center gap-2 rounded-full bg-[#0853a4]/[0.08] px-3.5 font-jost text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0853a4]">
                          <ReviewSourceIcon source={review.source} />

                          <span className="whitespace-nowrap">
                            {review.source}
                          </span>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0853a4]/[0.07]">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 fill-[#0853a4]"
                            aria-hidden="true"
                          >
                            <path d="M7.17 6C4.87 6 3 7.87 3 10.17V18h7v-7H6.08c0-1.11.9-2.08 2.09-2.08V6Zm10 0C14.87 6 13 7.87 13 10.17V18h7v-7h-3.92c0-1.11.9-2.08 2.09-2.08V6Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Review Message */}
                      <div className="mt-5 flex min-h-[155px] flex-1">
                        <p className="line-clamp-6 font-jost text-[14px] leading-[1.9] text-slate-600 sm:text-[15px]">
                          “{review.message}”
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="my-5 h-px w-full bg-slate-100" />

                      {/* Bottom Metadata */}
                      <div className="flex min-h-[44px] items-end justify-between gap-5">
                        {/* Rating */}
                        <div>
                          <div
                            className="flex items-center gap-1 text-[#ffb800]"
                            aria-label={`${review.rating} out of 5 stars`}
                          >
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <svg
                                key={idx}
                                viewBox="0 0 24 24"
                                className={`h-[17px] w-[17px] ${idx < review.rating
                                    ? "fill-current"
                                    : "fill-slate-200 text-slate-200"
                                  }`}
                                aria-hidden="true"
                              >
                                <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
                              </svg>
                            ))}
                          </div>

                          <p className="mt-2 font-jost text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
                            Verified review
                          </p>
                        </div>

                        {/* Date and Time */}
                        <div className="min-w-[100px] text-right font-jost">
                          <p className="text-[12px] font-semibold text-[#333333]">
                            {review.date}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-400">
                            {review.time}
                          </p>
                        </div>
                      </div>

                      {/* Bubble Arrow */}
                      <span className="absolute -bottom-[15px] left-[48px] h-[30px] w-[30px] rotate-45 border-b border-r border-slate-200/80 bg-white" />
                    </div>

                    {/* Traveler Profile */}
                    <div className="relative z-10 flex min-h-[80px] items-center gap-4 px-7 pt-6">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 rounded-full bg-[#0853a4]/20 blur-md transition-transform duration-300 group-hover:scale-125" />

                        <img
                          src={review.avatar}
                          alt={review.name}
                          loading="lazy"
                          className="relative h-[54px] w-[54px] rounded-full border-[4px] border-white object-cover shadow-[0_6px_18px_rgba(16,12,8,0.14)]"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate font-rubik text-[17px] font-semibold text-[#100c08]">
                          {review.name}
                        </h3>

                        <div className="mt-1.5 flex items-center gap-1.5 text-slate-500">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-3.5 w-3.5 shrink-0 stroke-current"
                            strokeWidth="1.8"
                            aria-hidden="true"
                          >
                            <path
                              d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>

                          <p className="truncate font-jost text-[12px]">
                            {review.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="rounded-[18px] border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
              <p className="font-rubik text-lg font-semibold text-[#100c08]">
                No reviews available
              </p>

              <p className="mt-2 font-jost text-sm text-slate-500">
                Reviews for this source will be displayed here.
              </p>
            </div>
          )}

          {/* Carousel Indicators */}
          {filteredTravelerReviews.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              {filteredTravelerReviews.map((review, index) => {
                const isActive = reviewSlide === index

                return (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => setReviewSlide(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${isActive
                        ? "w-8 bg-[#0853a4]"
                        : "w-2 bg-slate-300 hover:bg-[#0853a4]/50"
                      }`}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}