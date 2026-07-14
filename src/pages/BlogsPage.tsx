
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Blogs } from '../components/sections/Blogs';

export function BlogsPage() {
  return (
    <>
      {/* ================= BREADCRUMB HERO BANNER ================= */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1800&q=80"
            alt="Blogs Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#100c08]/85 via-[#100c08]/70 to-[#0b84d8]/50" />
        </div>

        {/* Decorative dot pattern */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 grid grid-cols-6 gap-[10px] opacity-[0.1]">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <ScrollReveal variant="fade-in-up" duration={1000}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[13.5px] font-jost" aria-label="Breadcrumb">
              <Link to="/" className="text-white/70 transition hover:text-[#fbb03b] font-medium">
                Home
              </Link>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#fbb03b] font-semibold">Blogs</span>
            </nav>

            {/* Page title */}
            <h1 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-white sm:text-[46px] lg:text-[54px]">
              Travel Stories & Tips
            </h1>

            <p className="mt-3 max-w-[480px] font-jost text-[15px] leading-7 text-white/65">
              Stay inspired with our travel stories, expert tips, and destination guides to plan your next unforgettable adventure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blogs Section (Reused from Home page) */}
      <Blogs />
    </>
  );
}
