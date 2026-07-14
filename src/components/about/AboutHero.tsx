export function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '320px',
        background: 'linear-gradient(135deg, #0b84d8 0%, #100c08 60%, #1e1b18 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: '#fbb03b' }}
        />
        <div
          className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: '#0b84d8' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-white/60">
          <a
            href="/"
            className="transition-colors hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
          >
            Home
          </a>
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-white/90">About Us</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#fbb03b]" />
          <p className="font-satisfy text-[24px] font-normal capitalize text-[#fbb03b]">
            Who We Are
          </p>
          <span className="h-px w-8 bg-[#fbb03b]" />
        </div>

        {/* Headline */}
        <h1 className="font-rubik text-[36px] font-extrabold leading-tight tracking-tight text-white sm:text-[48px] lg:text-[58px]">
          About{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #0b84d8, #fbb03b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Open Sky Holidays
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-[600px] font-jost text-[16px] leading-relaxed text-white/70">
          Crafting unforgettable journeys since 2013 — Your trusted travel partner for domestic &amp; international adventures.
        </p>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '48px' }}>
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
