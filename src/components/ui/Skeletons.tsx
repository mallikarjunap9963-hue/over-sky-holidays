// Single Skeleton Pulse Element
export function Skeleton({ className = '' }: { className?: string }) {

  return (
    <div
      className={`animate-pulse rounded bg-slate-200/80 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 ${className}`}
    />
  );
}

// Tour Card Skeleton Loader
export function TourCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[18px] border border-slate-200/70 bg-white p-3 shadow-sm transition-all duration-300">
      {/* Image Skeleton */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] bg-slate-200 animate-pulse">
        <div className="absolute top-3 left-3 h-6 w-24 rounded-full bg-slate-300/80" />
        <div className="absolute top-3 right-3 h-7 w-20 rounded-lg bg-slate-300/80" />
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col justify-between p-3.5 pt-4">
        <div>
          {/* Location row */}
          <div className="flex items-center justify-between">
            <div className="h-4 w-28 rounded bg-slate-200 animate-pulse" />
            <div className="h-4 w-16 rounded bg-slate-200 animate-pulse" />
          </div>

          {/* Title */}
          <div className="mt-3 h-6 w-3/4 rounded bg-slate-200 animate-pulse" />
          <div className="mt-1.5 h-6 w-1/2 rounded bg-slate-200 animate-pulse" />

          {/* Highlights / Features row */}
          <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3">
            <div className="h-4 w-20 rounded bg-slate-100 animate-pulse" />
            <div className="h-4 w-20 rounded bg-slate-100 animate-pulse" />
            <div className="h-4 w-20 rounded bg-slate-100 animate-pulse" />
          </div>
        </div>

        {/* Footer Price & Button */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5">
          <div>
            <div className="h-3 w-12 rounded bg-slate-200 animate-pulse" />
            <div className="mt-1 h-6 w-24 rounded bg-slate-300/80 animate-pulse" />
          </div>
          <div className="h-10 w-28 rounded-full bg-slate-300/80 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

// Grid of Tour Card Skeletons
export function TourGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, idx) => (
        <TourCardSkeleton key={idx} />
      ))}
    </div>
  );
}

// Blog Card Skeleton Loader
export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[18px] border border-slate-200/70 bg-white p-3.5 shadow-sm">
      <div className="h-[210px] w-full rounded-[14px] bg-slate-200 animate-pulse" />
      <div className="mt-4 flex items-center gap-2">
        <div className="h-4 w-20 rounded bg-slate-200 animate-pulse" />
        <div className="h-3 w-3 rounded-full bg-slate-200 animate-pulse" />
        <div className="h-4 w-24 rounded bg-slate-200 animate-pulse" />
      </div>
      <div className="mt-3 h-6 w-5/6 rounded bg-slate-200 animate-pulse" />
      <div className="mt-2 h-4 w-full rounded bg-slate-100 animate-pulse" />
      <div className="mt-1 h-4 w-2/3 rounded bg-slate-100 animate-pulse" />
      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-3">
        <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
        <div className="h-4 w-28 rounded bg-slate-200 animate-pulse" />
      </div>
    </div>
  );
}

// Grid of Blog Skeletons
export function BlogGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, idx) => (
        <BlogCardSkeleton key={idx} />
      ))}
    </div>
  );
}

// Tour Details Page Skeleton Loader
export function TourDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 font-jost">
      {/* Hero Banner Skeleton */}
      <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden bg-slate-300 animate-pulse">
        <div className="mx-auto flex h-full max-w-[1320px] flex-col justify-end px-5 pb-10 sm:px-8">
          <div className="h-4 w-32 rounded bg-slate-400/60 animate-pulse" />
          <div className="mt-3 h-10 w-2/3 rounded bg-slate-400/80 animate-pulse sm:h-12" />
          <div className="mt-4 flex gap-4">
            <div className="h-5 w-24 rounded bg-slate-400/60 animate-pulse" />
            <div className="h-5 w-32 rounded bg-slate-400/60 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Body Skeleton Grid */}
      <div className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* Highlights Grid Skeleton */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="h-24 rounded-2xl bg-white p-4 border border-slate-200/80 animate-pulse">
                  <div className="h-4 w-12 rounded bg-slate-200" />
                  <div className="mt-2 h-6 w-20 rounded bg-slate-300" />
                </div>
              ))}
            </div>

            {/* Overview Skeleton */}
            <div className="mt-10 rounded-2xl bg-white p-6 border border-slate-200/80 animate-pulse">
              <div className="h-7 w-44 rounded bg-slate-300" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
                <div className="h-4 w-4/5 rounded bg-slate-200" />
              </div>
            </div>

            {/* Itinerary Accordion Skeleton */}
            <div className="mt-10 space-y-4">
              <div className="h-7 w-40 rounded bg-slate-300 animate-pulse" />
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="h-16 rounded-xl bg-white border border-slate-200/80 animate-pulse" />
              ))}
            </div>
          </div>

          {/* Sidebar Booking Form Skeleton */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl bg-white p-6 border border-slate-200/80 shadow-md animate-pulse">
              <div className="h-8 w-3/4 rounded bg-slate-300" />
              <div className="mt-2 h-5 w-1/2 rounded bg-slate-200" />
              <div className="mt-6 space-y-4">
                <div className="h-11 rounded-lg bg-slate-200" />
                <div className="h-11 rounded-lg bg-slate-200" />
                <div className="h-11 rounded-lg bg-slate-200" />
                <div className="h-11 rounded-lg bg-slate-200" />
                <div className="h-12 rounded-lg bg-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Details Skeleton
export function BlogDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-white py-12 px-5 font-jost sm:px-8">
      <div className="mx-auto max-w-[900px]">
        {/* Category & Date */}
        <div className="flex gap-3">
          <div className="h-6 w-24 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-6 w-28 rounded bg-slate-200 animate-pulse" />
        </div>
        {/* Title */}
        <div className="mt-4 h-10 w-full rounded bg-slate-300 animate-pulse sm:h-12" />
        <div className="mt-2 h-10 w-3/4 rounded bg-slate-300 animate-pulse" />
        {/* Banner Image */}
        <div className="mt-8 h-[380px] w-full rounded-2xl bg-slate-200 animate-pulse" />
        {/* Content Lines */}
        <div className="mt-8 space-y-3">
          <div className="h-4 w-full rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-11/12 rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-full rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-3/4 rounded bg-slate-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

// Homepage Hero Skeleton Loader
export function HeroSkeleton() {
  return (
    <div className="relative w-full h-[calc(100vh-212px)] lg:h-[calc(100vh-199px)] min-h-[480px] lg:min-h-[320px] overflow-hidden bg-slate-100/80 flex items-center justify-center border-b border-slate-200/50">
      {/* Background Animated Shimmer Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-white to-slate-100 animate-pulse" />

      {/* Hero Content Skeleton */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] w-full flex-col items-center justify-center px-5 py-4 pb-10 sm:pb-14 lg:pb-20 text-center sm:px-8 lg:px-10">
        {/* Title Skeleton Lines */}
        <div className="h-8 sm:h-12 lg:h-14 w-3/4 max-w-[720px] rounded-lg bg-slate-300/80 animate-pulse" />
        <div className="mt-3 h-7 sm:h-10 lg:h-12 w-1/2 max-w-[480px] rounded-lg bg-slate-200 animate-pulse" />

        {/* Subtitle / Description Lines */}
        <div className="mt-5 sm:mt-6 h-4 sm:h-5 w-4/5 max-w-[620px] rounded bg-slate-200 animate-pulse" />
        <div className="mt-2 h-4 sm:h-5 w-3/5 max-w-[440px] rounded bg-slate-200/80 animate-pulse" />

        {/* CTA Button Skeleton */}
        <div className="mt-8 flex justify-center">
          <div className="h-[46px] sm:h-[52px] w-[150px] sm:w-[170px] rounded-[6px] bg-slate-300 animate-pulse shadow-sm" />
        </div>
      </div>

      {/* Slider Dots Skeleton */}
      <div className="absolute bottom-9 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 sm:flex">
        <div className="h-1.5 w-10 rounded-full bg-slate-400/60 animate-pulse" />
        <div className="h-1.5 w-5 rounded-full bg-slate-300/80 animate-pulse" />
        <div className="h-1.5 w-5 rounded-full bg-slate-300/80 animate-pulse" />
      </div>
    </div>
  );
}

