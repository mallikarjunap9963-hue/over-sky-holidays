import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';
import { contentApi } from '../../api/contentApi';
import { formatImageUrl } from '../../api/imageHelper';
import type { ApiOfferBanner } from '../../api/types';

export function PhenomenalDeals() {
  const [banners, setBanners] = useState<ApiOfferBanner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadBanners() {
      try {
        const res = await contentApi.getOfferBanners();
        if (!isMounted) return;

        if (res.isLive && Array.isArray(res.banners) && res.banners.length > 0) {
          const active = res.banners.filter((b) => b.status !== false);
          setBanners(active);
        } else {
          setBanners([]);
        }
      } catch (err) {
        console.error("Failed to load offer banners:", err);
        setBanners([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadBanners();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="deals" className="relative overflow-hidden bg-white px-5 py-10 sm:px-8">
        <div className="relative mx-auto max-w-[1320px]">
          <div className="text-center">
            <div className="mx-auto h-4 w-32 animate-pulse rounded bg-slate-200" />
            <div className="mx-auto mt-4 h-10 w-80 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="mt-14 h-[400px] animate-pulse rounded-xl bg-slate-100" />
        </div>
      </section>
    );
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <>
      {/* ================= PHENOMENAL DEALS START ================= */}
      <section
        id="deals"
        className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
      >
        <div className="relative mx-auto max-w-[1320px]">
          {/* Section heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0853a4]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                Popular Offer Deals
              </p>

              <span className="h-px w-8 bg-[#0853a4]" />
            </div>

            <h2 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]">
              Phenomenal Deals Offered
            </h2>
          </ScrollReveal>

          {/* Dynamic Deals Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {banners.map((banner, index) => (
              <ScrollReveal
                key={banner.id || index}
                variant="fade-in-up"
                delay={100 + (index % 4) * 150}
                duration={1300}
                className="h-full"
              >
                <article className="group relative min-h-[460px] overflow-hidden rounded-[8px] bg-slate-800 shadow-md transition-all duration-300 hover:shadow-xl flex flex-col justify-end h-full">
                  <img
                    src={formatImageUrl(banner.image_url || banner.image)}
                    alt={banner.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0853a4]/95 via-[#0853a4]/40 to-black/20" />

                  {/* Inner border */}
                  <div className="pointer-events-none absolute inset-3 rounded-[6px] border border-white/50" />

                  {/* Offer Content */}
                  <div className="relative z-10 p-6 text-center text-white font-jost">
                    <p className="font-satisfy text-[20px] font-normal capitalize text-white drop-shadow">
                      {banner.title}
                    </p>

                    {banner.discount_text && (
                      <h3 className="mt-2 font-rubik text-[32px] font-bold leading-none text-[#fbb03b]">
                        {banner.discount_text}
                      </h3>
                    )}

                    {banner.subtitle && (
                      <p className="mt-2 text-[14px] font-medium text-slate-100 line-clamp-2">
                        {banner.subtitle}
                      </p>
                    )}

                    <Link
                      to="/contact"
                      className="btn-primary mt-5 min-h-[42px] rounded-[6px] px-6 text-[13px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik inline-flex items-center justify-center mx-auto"
                    >
                      Book Now
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PHENOMENAL DEALS END ================= */}
    </>
  );
}
