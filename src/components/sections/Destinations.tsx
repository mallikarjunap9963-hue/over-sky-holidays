import { useState, useEffect } from 'react';
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

const LAYOUT_CLASSES = [
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-5 md:col-span-6',
  'lg:col-span-3 md:col-span-6',
  'lg:col-span-4 md:col-span-6',
];

export function Destinations() {
  const [destinationCards, setDestinationCards] = useState<DestinationCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadDestinations() {
      try {
        const res = await toursApi.getAllTours();
        if (!isMounted) return;

        if (res.isLive && Array.isArray(res.tours) && res.tours.length > 0) {
          const destMap = new Map<string, { title: string; image: string; count: number; isDomestic: boolean }>();

          res.tours.forEach((t: any) => {
            const rawName = t.country || t.state || t.location || t.title;
            if (!rawName) return;
            const cleanName = String(rawName).split(',')[0].trim();
            const normalized = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);

            const isDomestic =
              (t.category && String(t.category).toLowerCase().includes('domestic')) ||
              (t.tourType && String(t.tourType).toLowerCase().includes('domestic')) ||
              (t.tour_type?.slug === 'domestic');

            const tourImg = formatImageUrl(t.image || t.thumbnail_url || t.thumbnail);

            if (!destMap.has(normalized)) {
              destMap.set(normalized, {
                title: normalized,
                image: tourImg,
                count: 1,
                isDomestic,
              });
            } else {
              const current = destMap.get(normalized)!;
              current.count += 1;
              if (!current.image && tourImg) {
                current.image = tourImg;
              }
            }
          });

          const dynamicCards: DestinationCard[] = Array.from(destMap.values())
            .slice(0, 5)
            .map((item, idx) => ({
              title: item.title,
              image: item.image,
              href: `/tours/${item.isDomestic ? 'domestic' : 'international'}?destination=${encodeURIComponent(item.title)}`,
              layoutClass: LAYOUT_CLASSES[idx % LAYOUT_CLASSES.length],
              tours: `${item.count} Tour${item.count === 1 ? '' : 's'}`,
            }));

          setDestinationCards(dynamicCards);
        } else {
          setDestinationCards([]);
        }
      } catch (err) {
        console.error("Failed to load dynamic destinations from tours:", err);
        setDestinationCards([]);
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

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-12">
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
              className="lg:col-span-4 md:col-span-12"
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
                  to="/tours/international"
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
