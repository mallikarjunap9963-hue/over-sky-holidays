import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Blogs } from '../components/sections/Blogs';

export function BlogsPage() {
  return (
    <>
      {/* ================= PROFESSIONAL BREADCRUMB BANNER ================= */}
      <section
        id="blogs-hero"
        className="relative isolate overflow-hidden bg-[#071f36]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=90"
            alt="Open Sky Holidays Blogs Page"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071f36]/95 via-[#071f36]/82 to-[#0b84d8]/45" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071f36]/60 to-transparent" />

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-[340px] w-[340px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-[240px] w-[240px] rounded-full border border-white/10" />

        {/* Decorative Dots */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 grid-cols-6 gap-3 opacity-20 lg:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[220px] max-w-[1320px] items-center px-5 py-10 sm:min-h-[250px] sm:px-8 lg:min-h-[280px] lg:px-10">
          <ScrollReveal variant="fade-in-up" duration={1000}>
            <div className="max-w-[680px]">
              {/* Small Label */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-[#fbb03b]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 2v20" />
                </svg>

                <span className="font-jost text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  Travel Stories
                </span>
              </div>

              {/* Page Title */}
              <h1 className="font-rubik text-[38px] font-black leading-[1.08] text-white sm:text-[48px] lg:text-[58px]">
                Blogs & Articles
              </h1>

              {/* Description */}
              <p className="mt-2.5 max-w-[570px] font-jost text-[14px] leading-7 text-white/75 sm:text-[15px]">
                Stay inspired with our travel stories, expert tips, and destination guides to plan your next unforgettable adventure.
              </p>

              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mt-4.5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#071f36]/40 px-4 py-2.5 backdrop-blur-md"
              >
                <Link
                  to="/"
                  className="flex items-center gap-2 font-jost text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#fbb03b]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m3 11 9-8 9 8" />
                    <path d="M5 10v10h14V10" />
                    <path d="M9 20v-6h6v6" />
                  </svg>

                  Home
                </Link>

                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-white/35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>

                <span className="font-jost text-[13px] font-semibold text-[#fbb03b]">
                  Blogs
                </span>
              </nav>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom White Curve */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 55"
            preserveAspectRatio="none"
            className="block h-[30px] w-full sm:h-[42px] lg:h-[55px]"
          >
            <path
              d="M0,36 C260,58 420,3 720,27 C1010,50 1180,5 1440,25 L1440,55 L0,55 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Blogs Section */}
      <Blogs />
    </>
  );
}
