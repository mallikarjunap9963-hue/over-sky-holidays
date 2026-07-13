import { useState, useEffect } from 'react';
import type { ReviewSource } from '../../types';
import { reviewTabs, travelerReviews } from '../../data';
import { ReviewSourceIcon } from '../icons/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

export function TravelerTestimonials() {

  const [activeReviewTab, setActiveReviewTab] = useState<ReviewSource>("All Reviews");
  const [reviewSlide, setReviewSlide] = useState(0);

  const filteredTravelerReviews = activeReviewTab === "All Reviews"
    ? travelerReviews
    : travelerReviews.filter((review) => review.source === activeReviewTab);

  useEffect(() => {
    if (filteredTravelerReviews.length <= 1) return;

    const reviewAutoScroll = window.setInterval(() => {
      setReviewSlide((previous) => (previous + 1) % filteredTravelerReviews.length);
    }, 4000);

    return () => window.clearInterval(reviewAutoScroll);
  }, [activeReviewTab, filteredTravelerReviews.length]);

  const visibleTravelerReviews = Array.from(
    { length: Math.min(3, filteredTravelerReviews.length) },
    (_, offset) => filteredTravelerReviews[(reviewSlide + offset) % filteredTravelerReviews.length]
  );

  const selectReviewTab = (tab: ReviewSource) => {
    setActiveReviewTab(tab);
    setReviewSlide(0);
  };

  return (
    <>
      {/* ================= TRAVELER TESTIMONIALS START ================= */}
      <section
        id="testimonials"
        className="relative overflow-hidden bg-[#f7f3ef] px-5 py-12 sm:px-8"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b84d8]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#fbb03b]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          {/* Heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0b84d8]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Testimonial
              </p>

              <span className="h-px w-8 bg-[#0b84d8]" />
            </div>

            <h2 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]">
              Regards From Travelers
            </h2>
          </ScrollReveal>

          {/* Review source tabs */}
          <ScrollReveal variant="fade-in-up" delay={200} duration={1300} className="mx-auto mt-12 flex max-w-[960px] overflow-x-auto rounded-[8px] bg-white px-4 shadow-[0_8px_30px_rgba(16,12,8,0.03)] sm:px-6 font-rubik">
            {reviewTabs.map((tab) => {
              const isActive = activeReviewTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => selectReviewTab(tab)}
                  className={`relative flex min-h-[58px] min-w-[145px] items-center justify-center gap-2.5 px-5 text-[13px] font-semibold transition ${
                    isActive
                      ? "text-[#0b84d8]"
                      : "text-[#333333] hover:text-[#0b84d8]"
                  }`}
                  aria-pressed={isActive}
                >
                  <ReviewSourceIcon source={tab} />

                  {tab}

                  {isActive && (
                    <span className="absolute inset-x-4 bottom-0 h-[2px] bg-[#0b84d8]" />
                  )}
                </button>
              );
            })}
          </ScrollReveal>

          {/* Testimonial carousel */}
          <div className="relative mt-14 px-0">

            {/* Cards */}
            <div
              key={`${activeReviewTab}-${reviewSlide}`}
              className="grid animate-[testimonialSlideIn_0.55s_ease-out] gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleTravelerReviews.map((review, index) => (
                <ScrollReveal
                  key={`${activeReviewTab}-${review.id}`}
                  variant="fade-in-up"
                  delay={index * 100}
                  duration={1300}
                  className="relative pb-16 h-full"
                >
                  <article className="h-full">
                    {/* Speech card */}
                    <div className="relative min-h-[270px] rounded-[8px] border border-slate-200 bg-white px-7 pb-4 pt-8 shadow-[0_10px_35px_rgba(16,12,8,0.03)] sm:px-8 font-jost h-[calc(100%-60px)]">
                      {/* Source */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
                          <ReviewSourceIcon source={review.source} />
                          {review.source}
                        </div>

                        <span className="text-[74px] font-serif leading-none text-[#0b84d8]/[0.06]">
                          ”
                        </span>
                      </div>

                      {/* Message */}
                      <p className="mt-3 text-[14px] leading-8 text-slate-600 sm:text-[15px]">
                        “{review.message}”
                      </p>

                      {/* Rating and date */}
                      <div className="mt-7 flex items-end justify-between gap-5 font-jost">
                        <div className="flex items-center gap-1 text-[#ffb800]">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg
                              key={idx}
                              viewBox="0 0 24 24"
                              className={`h-4 w-4 ${
                                idx < review.rating
                                  ? "fill-current"
                                  : "fill-slate-200 text-slate-200"
                              }`}
                              aria-hidden="true"
                            >
                              <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
                            </svg>
                          ))}
                        </div>

                        <div className="text-right font-jost">
                          <p className="text-[11px] font-medium text-[#333333]">
                            {review.date}
                          </p>

                          <p className="mt-1 text-[9px] text-slate-400">
                            {review.time}
                          </p>
                        </div>
                      </div>

                      {/* Speech-bubble triangle */}
                      <span className="absolute -bottom-[22px] left-20 h-0 w-0 border-l-[22px] border-r-[3px] border-t-[23px] border-l-transparent border-r-transparent border-t-white" />
                    </div>

                    {/* Traveler profile */}
                    <div className="absolute bottom-0 left-8 flex items-center gap-4 font-jost">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        loading="lazy"
                        className="h-12 w-12 rounded-full border-[3px] border-white object-cover shadow-md"
                      />

                      <div>
                        <h3 className="font-rubik text-[17px] font-semibold text-[#100c08]">
                          {review.name}
                        </h3>

                        <p className="mt-1 text-[12px] text-slate-500">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* ================= TRAVELER TESTIMONIALS END ================= */}
    </>
  );
}

