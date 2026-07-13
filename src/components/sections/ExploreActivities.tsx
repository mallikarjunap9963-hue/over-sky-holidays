import { useState } from 'react';
import type { ActivityName } from '../../types';
import { activityItems } from '../../data';
import { ActivityIcon } from '../icons/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

export function ExploreActivities() {

  const [activeActivity, setActiveActivity] = useState<ActivityName>("Zip lining");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const selectedActivity = activityItems.find((activity) => activity.name === activeActivity) ?? activityItems[0];

  return (
    <>
      {/* ================= EXPLORE ACTIVITIES START ================= */}
      <section
        id="activities"
        className="relative overflow-hidden bg-white px-5 py-12 sm:px-8"
      >
        {/* Decorative world background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <svg
            viewBox="0 0 1400 720"
            className="h-full w-full"
            fill="none"
            stroke="#0b84d8"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M44 180c74-112 219-157 327-108 70 32 125 6 170-28 55-43 139-43 195 10 39 37 49 91 29 132-24 49-84 58-100 108-18 59 47 100 31 163-18 72-116 83-198 57-67-21-116-10-161 26-73 58-193 37-232-54-25-59 10-106-16-157-17-34-75-67-45-149Z" />
            <path d="M828 91c99-67 245-52 319 35 43 50 58 119 37 180-23 68-84 82-101 142-15 53 21 94-7 139-38 62-143 72-207 25-55-40-53-96-112-130-44-25-99-15-136-57-39-44-24-116 18-150 40-33 88-30 119-69 30-38 19-82 70-115Z" />
            <path d="M1197 506c58-38 137-18 158 39 18 48-11 107-65 123-59 17-124-24-131-78-4-34 10-65 38-84Z" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1320px]">
          {/* Heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0b84d8]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Are You Ready To Travel?
              </p>

              <span className="h-px w-8 bg-[#0b84d8]" />
            </div>

            <h2 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]">
              Explore Your Activities
            </h2>
          </ScrollReveal>

          {/* Main activity layout */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[340px_minmax(0,1fr)_260px] xl:gap-12">
            {/* Activity selector */}
            <ScrollReveal variant="fade-in-left" delay={150} duration={1300} className="grid grid-cols-2 gap-4 font-rubik">
              {activityItems.map((activity) => {
                const isActive = activeActivity === activity.name;

                return (
                  <button
                    key={activity.name}
                    type="button"
                    onClick={() => setActiveActivity(activity.name)}
                    className={`group flex min-h-[132px] flex-col items-center justify-center rounded-[5px] px-3 text-center transition duration-300 ${
                      isActive
                        ? "bg-[#0b84d8] text-white shadow-[0_14px_35px_rgba(11,132,216,0.25)]"
                        : "bg-[#f0f9ff] text-[#100c08] hover:-translate-y-1 hover:bg-[#e0f2fe] hover:text-[#0b84d8]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <ActivityIcon
                      type={activity.name}
                      className="h-[54px] w-[54px]"
                    />

                    <span className="mt-3 text-[15px] font-semibold">
                      {activity.name}
                    </span>
                  </button>
                );
              })}
            </ScrollReveal>

            {/* Active activity content */}
            <ScrollReveal
              variant="fade-in-up"
              delay={300}
              duration={1300}
            >
              <div
                key={selectedActivity.name}
                className="animate-[activityFade_0.45s_ease-out] font-jost"
              >
                {/* Brush label */}
                <div className="inline-flex min-w-[132px] items-center justify-center bg-[#0b84d8] px-7 py-2.5 text-white [clip-path:polygon(8%_5%,92%_0,100%_22%,93%_82%,8%_100%,0_75%)] font-rubik">
                  <p className="text-[14px] font-medium italic">
                    {selectedActivity.badge}
                  </p>
                </div>

                <h3 className="mt-5 max-w-[620px] font-rubik text-[28px] font-semibold leading-[1.35] text-[#100c08] sm:text-[32px]">
                  {selectedActivity.title}
                </h3>

                <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                  {selectedActivity.description}
                </p>

                {/* Features */}
                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
                  {selectedActivity.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0b84d8]" />

                      <span className="text-[13px] font-semibold text-[#100c08] sm:text-[14px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="btn-primary min-h-[52px] w-fit rounded-[5px] px-8 text-[14px] font-bold"
                  >
                    Check Availability
                  </a>

                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="group inline-flex w-fit items-center gap-3 text-[14px] font-semibold text-[#100c08] font-rubik"
                    aria-label={`Watch ${selectedActivity.name} adventure`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#100c08] transition group-hover:border-[#0b84d8] group-hover:bg-[#0b84d8] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-0.5 h-5 w-5"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="m8 5 11 7-11 7V5Z" />
                      </svg>
                    </span>

                    <span className="transition group-hover:text-[#0b84d8]">
                      Watch Adventure
                    </span>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Activity images */}
            <ScrollReveal
              variant="fade-in-right"
              delay={450}
              duration={1300}
            >
              <div
                key={`${selectedActivity.name}-images`}
                className="grid animate-[activityImageFade_0.5s_ease-out] gap-5 sm:grid-cols-2 lg:grid-cols-1"
              >
                {selectedActivity.images.map((image, index) => (
                  <div
                    key={image}
                    className="group relative overflow-hidden rounded-[3px]"
                  >
                    <img
                      src={image}
                      alt={`${selectedActivity.name} adventure ${index + 1}`}
                      loading="lazy"
                      className="h-[190px] w-full object-cover transition duration-700 group-hover:scale-110 lg:h-[205px]"
                    />

                    <div className="absolute inset-0 bg-[#100c08]/5 transition group-hover:bg-transparent" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* YOUTUBE LIGHTBOX MODAL */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-all duration-300">
            {/* Click backdrop to close */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setVideoModalOpen(false)}
            />

            <div className="relative z-10 w-full max-w-[860px] overflow-hidden rounded-[16px] bg-black shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-white hover:text-black"
                aria-label="Close video player"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Responsive Video Container */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full border-none"
                  src="https://www.youtube.com/embed/z5D_mJp-T3I?autoplay=1"
                  title="Travel Adventure Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>
      {/* ================= EXPLORE ACTIVITIES END ================= */}
    </>
  );
}

