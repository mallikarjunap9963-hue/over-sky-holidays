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
          const sorted = [...active].sort((a, b) => a.id - b.id);
          setBanners(sorted);
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
          <div className="mt-14 h-[490px] animate-pulse rounded-xl bg-slate-100" />
        </div>
      </section>
    );
  }

  if (banners.length === 0) {
    return null;
  }

  const b1 = banners[0];
  const b2 = banners[1] || banners[0];
  const b3 = banners[2] || banners[0];
  const b4 = banners[3] || banners[0];

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

          {/* Deals grid */}
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {/* LEFT LARGE CARD */}
            {b1 && (
              <ScrollReveal
                variant="fade-in-up"
                delay={100}
                duration={1300}
                className="lg:col-span-3 h-full"
              >
                <article className="group relative min-h-[490px] overflow-hidden rounded-[7px] h-full bg-slate-800">
                  <img
                    src={formatImageUrl(b1.image_url || b1.image)}
                    alt={b1.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0853a4]/95 via-transparent to-[#100c08]/10" />

                  {/* Inner border */}
                  <div className="pointer-events-none absolute inset-4 rounded-[6px] border border-white/55" />

                  {/* Bottom offer content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 px-7 pb-4 text-center text-white font-jost">
                    <p className="font-satisfy text-[18px] font-normal capitalize">
                      {b1.title}
                    </p>

                    <h3 className="mt-3 font-rubik text-[38px] font-bold leading-none text-[#fbb03b]">
                      {b1.discount_text || "Special Offer"}
                    </h3>

                    <p className="mt-3 text-[15px] font-semibold">
                      {b1.subtitle}
                    </p>

                    <Link
                      to="/contact"
                      className="btn-primary mt-6 min-h-[44px] rounded-[6px] px-6 text-[13px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik inline-flex items-center justify-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            )}

            {/* CENTER CARDS */}
            <div className="grid gap-5 lg:col-span-5">
              {/* CENTER TOP CARD */}
              {b2 && (
                <ScrollReveal
                  variant="fade-in-up"
                  delay={250}
                  duration={1300}
                >
                  <article className="group relative min-h-[235px] overflow-hidden rounded-[7px] bg-slate-800">
                    <img
                      src={formatImageUrl(b2.image_url || b2.image)}
                      alt={b2.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0853a4]/95 via-[#0853a4]/75 to-transparent" />

                    <div className="pointer-events-none absolute inset-3 rounded-[6px] border border-white/55" />

                    <div className="relative z-10 flex min-h-[235px] max-w-[340px] flex-col justify-center px-8 py-6 text-white font-jost">
                      <p className="font-satisfy text-[18px] font-normal capitalize">
                        {b2.title}
                      </p>

                      <h3 className="mt-2 font-rubik text-[34px] font-bold leading-none text-[#fbb03b]">
                        {b2.discount_text || "Special Deal"}
                      </h3>

                      <p className="mt-2 text-[15px] font-semibold text-slate-100">
                        {b2.subtitle}
                      </p>

                      <Link
                        to="/contact"
                        className="btn-primary mt-4 max-w-fit min-h-[38px] rounded-[6px] px-5 text-[12px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik inline-flex items-center justify-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              )}

              {/* CENTER BOTTOM CARD */}
              {b3 && (
                <ScrollReveal
                  variant="fade-in-up"
                  delay={400}
                  duration={1300}
                >
                  <article className="group relative min-h-[235px] overflow-hidden rounded-[7px] bg-slate-800">
                    <img
                      src={formatImageUrl(b3.image_url || b3.image)}
                      alt={b3.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0853a4]/95 via-[#0853a4]/75 to-transparent" />

                    <div className="pointer-events-none absolute inset-3 rounded-[6px] border border-white/55" />

                    <div className="relative z-10 flex min-h-[235px] max-w-[340px] flex-col justify-center px-8 py-6 text-white font-jost">
                      <p className="font-satisfy text-[18px] font-normal capitalize">
                        {b3.title}
                      </p>

                      <h3 className="mt-2 font-rubik text-[34px] font-bold leading-none text-[#fbb03b]">
                        {b3.discount_text || "Special Deal"}
                      </h3>

                      <p className="mt-2 text-[15px] font-semibold text-slate-100">
                        {b3.subtitle}
                      </p>

                      <Link
                        to="/contact"
                        className="btn-primary mt-4 max-w-fit min-h-[38px] rounded-[6px] px-5 text-[12px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik inline-flex items-center justify-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              )}
            </div>

            {/* RIGHT PROMO BANNER */}
            {b4 && (
              <ScrollReveal
                variant="fade-in-up"
                delay={550}
                duration={1300}
                className="lg:col-span-4"
              >
                <aside className="relative flex min-h-[490px] flex-col justify-between overflow-hidden rounded-[7px] border border-slate-200 bg-[#f8fbff] p-6 text-center font-jost h-full">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-px w-6 bg-[#0853a4]" />
                      <p className="font-satisfy text-[18px] font-normal text-[#0853a4] capitalize">
                        {b4.title}
                      </p>
                      <span className="h-px w-6 bg-[#0853a4]" />
                    </div>

                    <h3 className="mt-3 font-rubik text-[28px] font-bold leading-tight text-[#100c08] sm:text-[32px]">
                      {b4.subtitle || "Discover Incredible Packages"}
                    </h3>

                    <div className="mt-4 flex items-baseline justify-center gap-1 font-rubik">
                      <span className="text-[14px] font-bold text-slate-500 uppercase tracking-wider">Up to</span>
                      <span className="text-[34px] font-extrabold text-[#fbb03b]">
                        {b4.discount_text || "50% Off"}
                      </span>
                    </div>
                  </div>

                  {/* Promo image */}
                  <div className="relative my-6 overflow-hidden rounded-[8px] bg-slate-200 h-[210px]">
                    <img
                      src={formatImageUrl(b4.image_url || b4.image)}
                      alt={b4.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="relative z-10">
                    <Link
                      to="/contact"
                      className="btn-primary min-h-[48px] w-full rounded-[6px] px-6 text-[14px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik inline-flex items-center justify-center"
                    >
                      Claim This Offer
                    </Link>
                  </div>
                </aside>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
      {/* ================= PHENOMENAL DEALS END ================= */}
    </>
  );
}
