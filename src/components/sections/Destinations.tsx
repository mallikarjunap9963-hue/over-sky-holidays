
import { ScrollReveal } from '../ui/ScrollReveal';

const destinationCards = [
  {
    title: 'Goa',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85',
    href: '#domestic-tours',
    layoutClass: 'lg:col-span-3',
    tours: '30 Tours',
    description: 'Sunny beaches, nightlife, and coastal escapes.',
  },
  {
    title: 'Dubai',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    href: '#international-tours',
    layoutClass: 'lg:col-span-5',
    tours: '25 Tours',
    description: 'Luxury stays, desert adventures, and iconic skylines.',
  },
  {
    title: 'Maldives',
    image:
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=85',
    href: '#international-tours',
    layoutClass: 'lg:col-span-4',
    tours: '20 Tours',
    description: 'Isle-hopping escapes with crystal-clear waters.',
  },
  {
    title: 'Jammu, Kashmir & Srinagar',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
    href: '#domestic-tours',
    layoutClass: 'lg:col-span-5',
    tours: '18 Tours',
    description: 'Snowy peaks, houseboats, and unforgettable mountain air.',
  },
  {
    title: 'Singapore',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85',
    href: '#international-tours',
    layoutClass: 'lg:col-span-3',
    tours: '15 Tours',
    description: 'Modern city breaks with food, culture, and skyline views.',
  },
];

export function Destinations() {
  return (
    <>
      {/* ================= DESIRED VACATION SPOTS START ================= */}
      <section
        id="destination"
        className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0b84d8]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#fbb03b]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px]">
          <ScrollReveal variant="fade-in-up" duration={1200} className="mb-10 text-center sm:mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-[#0b84d8]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Journey To The
              </p>

              <span className="h-[1px] w-8 bg-[#0b84d8]" />
            </div>

            <h2 className="mt-3 font-rubik text-[32px] font-bold leading-tight text-[#100c08] sm:text-[40px] lg:text-[46px]">
              Desired Vacation Spots
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {destinationCards.map((destination, index) => (
              <ScrollReveal
                key={destination.title}
                variant="fade-in-up"
                delay={index * 120}
                duration={1300}
                className={destination.layoutClass}
              >
                <a
                  href={destination.href}
                  className="group relative block min-h-[300px] overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(16,12,8,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(16,12,8,0.12)] h-full"
                >
                  <img
                    src={destination.image}
                    alt={`${destination.title} holiday destination`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition duration-500 group-hover:from-black/95" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left font-jost">
                    <div className="mb-3 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                      Open Sky Holidays
                    </div>

                    <h3 className="font-rubik text-[21px] font-bold text-white transition duration-300 group-hover:translate-y-[-2px]">
                      {destination.title}
                    </h3>

                    <p className="mt-2 max-w-[250px] text-[13px] leading-6 text-white/80 transition duration-300 group-hover:translate-y-[-2px]">
                      {destination.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 inline-flex rounded-full bg-[#0b84d8] px-4 py-2 text-[12px] font-semibold text-white">
                        {destination.tours}
                      </span>

                      <span className="translate-y-3 opacity-0 transition-all duration-300 delay-100 group-hover:translate-y-0 group-hover:opacity-100 text-[12px] font-medium text-white/90">
                        Explore Now
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            <ScrollReveal
              variant="fade-in-up"
              delay={destinationCards.length * 120}
              duration={1350}
              className="lg:col-span-4"
            >
              <div className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#bae6fd] bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] px-6 text-center shadow-[0_18px_45px_rgba(16,12,8,0.06)] h-full">
                <div className="absolute left-5 top-5 rotate-[-20deg] text-[#0b84d8]/35">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m2 16 20-9-8 15-2-7-10 1Z" />
                    <path d="m12 15 10-8" />
                  </svg>
                </div>

                <div className="absolute bottom-5 right-5 rotate-[25deg] text-[#0b84d8]/35">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m2 16 20-9-8 15-2-7-10 1Z" />
                    <path d="m12 15 10-8" />
                  </svg>
                </div>

                <div className="bg-[#0b84d8] px-6 py-2 text-white [clip-path:polygon(8%_0,92%_0,100%_20%,94%_82%,8%_100%,0_78%)]">
                  <p className="font-rubik text-[13px] font-medium italic">
                    Get Up To 20% Off
                  </p>
                </div>

                <h3 className="mt-5 font-rubik text-[30px] font-bold leading-[1.15] text-[#100c08]">
                  Explore All Our
                  <span className="block">Destinations</span>
                </h3>

                <a
                  href="#domestic-tours"
                  className="btn-primary mt-7 min-h-[48px] rounded-[5px] px-7 text-[14px] font-bold"
                >
                  View All Destinations
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* ================= DESIRED VACATION SPOTS END ================= */}
    </>
  );
}

