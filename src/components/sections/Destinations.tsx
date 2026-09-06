import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';
import { toursApi } from '../../api/toursApi';
import { formatImageUrl } from '../../api/imageHelper';

interface DestinationCard {
  title: string;
  image: string;
  href: string;
  layoutClass: string;
  tours: string;
}

const TARGET_DESTINATIONS = [
  {
    key: 'goa',
    title: 'Goa',
    subtitle: 'Domestic Tour',
    destParam: 'Goa',
    isDomestic: true,
    defaultImage: 'https://api.openskyholidays.com/storage/tours/Z0LFsO5hRlZKkZKxaCzFu4KG2PRzU3jX4PF8ZW6C.avif',
    match: (t: any) => `${t.state || ''} ${t.title || ''} ${t.country || ''}`.toLowerCase().includes('goa'),
  },
  {
    key: 'dubai',
    title: 'Dubai',
    subtitle: 'International Tour',
    destParam: 'Dubai',
    isDomestic: false,
    defaultImage: 'https://api.openskyholidays.com/storage/tours/7P0nCrre3bJA20scN82hX8OSf4aTnfHBbKkz3OJk.jpg',
    match: (t: any) => `${t.state || ''} ${t.title || ''} ${t.country || ''}`.toLowerCase().includes('dubai'),
  },
  {
    key: 'bangkok',
    title: 'Bangkok',
    subtitle: 'International Tour',
    destParam: 'Bangkok',
    isDomestic: false,
    defaultImage: 'https://api.openskyholidays.com/storage/tours/Pd7jEtGFcCtQwmgxv8y3UMYx2HrbDeIqRN6pCdOV.jpg',
    match: (t: any) => `${t.state || ''} ${t.title || ''} ${t.country || ''}`.toLowerCase().includes('bangkok'),
  },
  {
    key: 'kashmir',
    title: 'Jammu & Kashmir',
    subtitle: 'Domestic Tour',
    destParam: 'Jammu',
    isDomestic: true,
    defaultImage: 'https://api.openskyholidays.com/storage/tours/58YzfQG2HJ0tikqFMw3l7tgvaaqi6sjwNeF5gf0L.jpg',
    match: (t: any) => {
      const s = `${t.state || ''} ${t.title || ''} ${t.country || ''}`.toLowerCase();
      return s.includes('kashmir') || s.includes('j&k') || s.includes('srinagar');
    },
  },
  {
    key: 'singapore',
    title: 'Singapore',
    subtitle: 'International Tour',
    destParam: 'Singapore',
    isDomestic: false,
    defaultImage: 'https://api.openskyholidays.com/storage/tours/mX0y6Zm1XJyOl6ShuqeGaTduZEgSB6Ag7vxvOOOx.avif',
    match: (t: any) => `${t.state || ''} ${t.title || ''} ${t.country || ''}`.toLowerCase().includes('singapore'),
  },
];

const LAYOUT_CLASSES = [
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-4 md:col-span-6',
];

export function Destinations() {
  const [destinationCards, setDestinationCards] = useState<DestinationCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = destinationCards.length > 0 ? destinationCards.length + 1 : 0;

  // Auto-scroll on mobile
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  const prevSlide = () => {
    if (totalSlides === 0) return;
    setMobileSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    if (totalSlides === 0) return;
    setMobileSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 2500);
  };

  useEffect(() => {
    let isMounted = true;
    async function loadDestinations() {
      try {
        const res = await toursApi.getAllTours();
        if (!isMounted) return;

        const allTours = (res.isLive && Array.isArray(res.tours)) ? res.tours : [];

        const dynamicCards: DestinationCard[] = TARGET_DESTINATIONS.map((target, idx) => {
          const matching = allTours.find(target.match);
          const tourImg = matching?.image ? formatImageUrl(matching.image) : target.defaultImage;
          const href = target.isDomestic
            ? `/tours/domestic?destination=${encodeURIComponent(target.destParam)}`
            : `/tours/international?destination=${encodeURIComponent(target.destParam)}`;

          return {
            title: target.title,
            image: tourImg,
            href,
            layoutClass: LAYOUT_CLASSES[idx % LAYOUT_CLASSES.length],
            tours: target.subtitle,
          };
        });

        setDestinationCards(dynamicCards);
      } catch (err) {
        console.error("Failed to load dynamic destinations from tours:", err);
        // Fallback to defaults
        const fallbackCards: DestinationCard[] = TARGET_DESTINATIONS.map((target, idx) => ({
          title: target.title,
          image: target.defaultImage,
          href: target.isDomestic
            ? `/tours/domestic?destination=${encodeURIComponent(target.destParam)}`
            : `/tours/international?destination=${encodeURIComponent(target.destParam)}`,
          layoutClass: LAYOUT_CLASSES[idx % LAYOUT_CLASSES.length],
          tours: target.subtitle,
        }));
        setDestinationCards(fallbackCards);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadDestinations();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="destination" className="relative overflow-hidden bg-[#F8F8F8] px-5 py-10 sm:px-8">
        <div className="relative mx-auto max-w-[1320px]">
          <div className="mb-8 text-center sm:mb-10">
            <div className="mx-auto h-4 w-32 animate-pulse rounded bg-slate-200" />
            <div className="mx-auto mt-3 h-10 w-72 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="grid gap-6 md:grid-cols-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`h-[340px] animate-pulse rounded-[16px] bg-slate-200 ${LAYOUT_CLASSES[(i - 1) % LAYOUT_CLASSES.length]}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (destinationCards.length === 0) {
    return null;
  }

  return (
    <>
      <section
        id="destination"
        className="relative overflow-hidden bg-[#F8F8F8] px-5 py-10 sm:px-8"
      >
        <div className="relative mx-auto max-w-[1320px]">
          {/* HEADER SECTION */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="mb-8 text-center sm:mb-10">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-[#0853a4]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                Journey To The
              </p>

              <span className="h-[1px] w-8 bg-[#0853a4]" />
            </div>

            <h2 className="mt-3 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
              Desired Vacation Spots
            </h2>
          </ScrollReveal>

          {/* ================= MOBILE AUTO-SCROLL SLIDER (< md only) ================= */}
          <div
            className="relative md:hidden mt-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slider Track */}
            <div className="overflow-hidden rounded-[20px] shadow-lg border border-slate-200/80">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
              >
                {/* 5 Destination Cards */}
                {destinationCards.map((destination) => (
                  <div key={destination.title} className="w-full shrink-0">
                    <Link
                      to={destination.href}
                      className="group relative block min-h-[350px] w-full overflow-hidden bg-slate-900"
                    >
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                      {/* Top Pill badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white font-rubik">
                          {destination.tours}
                        </span>
                      </div>

                      {/* Bottom Title */}
                      <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-center">
                        <p className="font-satisfy text-[18px] text-[#fbb03b]">Explore Destination</p>
                        <h3 className="font-rubik text-[28px] font-bold text-white tracking-wide mt-0.5">
                          {destination.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}

                {/* 6th Slide: Special Discount CTA Card */}
                <div className="w-full shrink-0">
                  <div className="relative flex min-h-[350px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#FCEDCA] via-[#E8F1D5] to-[#D5ECA3] p-6 text-center">
                    <svg className="absolute left-4 top-6 h-10 w-10 text-gray-500/20 rotate-[-45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    <svg className="absolute bottom-6 right-4 h-10 w-10 text-gray-500/20 rotate-[45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>

                    <div className="relative mb-3 inline-block">
                      <div className="absolute inset-0 bg-[#fbb03b] [clip-path:polygon(4%_0,96%_0,100%_20%,97%_82%,5%_100%,0_78%)]" />
                      <span className="relative z-10 px-5 py-1.5 block font-satisfy text-[20px] font-normal text-white">
                        Get 10% Off
                      </span>
                    </div>

                    <h3 className="font-rubik text-[28px] font-bold leading-tight text-[#100c08]">
                      Of Our All <br /> Destination
                    </h3>

                    <Link
                      to="/tours/domestic"
                      className="btn-primary mt-6 min-h-[44px] rounded-[6px] px-7 text-[14px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik"
                    >
                      View All Destination
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Controls: Centered Dots */}
            <div className="mt-5 flex items-center justify-center gap-2 overflow-hidden py-1">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setMobileSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    mobileSlide === idx
                      ? 'w-7 bg-[#0853a4]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ================= DESKTOP GRID (Hidden on mobile < md) ================= */}
          <div className="hidden md:grid gap-6 md:grid-cols-12">
            {destinationCards.map((destination, index) => (
              <ScrollReveal
                key={destination.title}
                variant="fade-in-up"
                delay={index * 100}
                duration={1200}
                className={destination.layoutClass}
              >
                <Link
                  to={destination.href}
                  className="group relative block min-h-[320px] sm:min-h-[380px] overflow-hidden rounded-[16px] shadow-md transition-shadow hover:shadow-xl h-full bg-slate-800"
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-500 group-hover:bg-black/50" />

                  {/* Centered Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
                    <h4 className="font-rubik text-[22px] font-bold text-white mb-3 translate-y-4 transition-transform duration-500 group-hover:translate-y-0 drop-shadow-md">
                      {destination.title}
                    </h4>

                    {/* Green Brush-Stroke Pill */}
                    <div className="relative inline-block translate-y-4 transition-transform duration-500 delay-75 group-hover:translate-y-0 shadow-sm">
                      <div className="absolute inset-0 bg-[#5da747] [clip-path:polygon(4%_0,96%_0,100%_20%,97%_82%,5%_100%,0_78%)]" />
                      <span className="relative z-10 px-5 py-1.5 block font-satisfy text-[16px] font-normal text-white">
                        {destination.tours}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute inset-x-0 bottom-0 flex justify-center pb-8 z-10">
                    <h3 className="font-rubik text-[28px] font-bold text-white tracking-wide">
                      {destination.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {/* CTA BOX */}
            <ScrollReveal
              variant="fade-in-up"
              delay={destinationCards.length * 100}
              duration={1200}
              className="lg:col-span-4 md:col-span-6"
            >
              <div className="relative flex min-h-[320px] sm:min-h-[380px] flex-col items-center justify-center overflow-hidden rounded-[16px] bg-gradient-to-br from-[#FCEDCA] via-[#E8F1D5] to-[#D5ECA3] px-6 text-center h-full">

                {/* Decorative planes */}
                <svg className="absolute left-6 top-8 h-10 w-10 text-gray-500/20 rotate-[-45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                <svg className="absolute bottom-6 right-6 h-10 w-10 text-gray-500/20 rotate-[45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>

                {/* Ribbon */}
                <div className="relative mb-5 inline-block">
                  <div className="absolute inset-0 bg-[#fbb03b] [clip-path:polygon(4%_0,96%_0,100%_20%,97%_82%,5%_100%,0_78%)]" />
                  <span className="relative z-10 px-5 py-2 block font-satisfy text-[22px] font-normal text-white">
                    Get 10% Off
                  </span>
                </div>

                <h3 className="font-rubik text-[34px] font-bold leading-[1.2] text-[#100c08]">
                  Of Our All <br /> Destination
                </h3>

                <Link
                  to="/tours/domestic"
                  className="btn-primary mt-8 min-h-[48px] rounded-[6px] px-8 text-[15px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik"
                >
                  View All Destination
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
