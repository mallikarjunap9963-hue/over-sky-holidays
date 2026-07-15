import { ScrollReveal } from '../ui/ScrollReveal';

const destinationCards = [
  {
    title: 'Goa',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85',
    href: '#domestic-tours',
    layoutClass: 'lg:col-span-4 md:col-span-6',
    tours: '30 Tours',
  },
  {
    title: 'Dubai',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    href: '#international-tours',
    layoutClass: 'lg:col-span-4 md:col-span-6',
    tours: '25 Tours',
  },
  {
    title: 'Maldives',
    image:
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=85',
    href: '#international-tours',
    layoutClass: 'lg:col-span-4 md:col-span-6',
    tours: '20 Tours',
  },
  {
    title: 'Jammu & Kashmir',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
    href: '#domestic-tours',
    layoutClass: 'lg:col-span-5 md:col-span-6',
    tours: '18 Tours',
  },
  {
    title: 'Singapore',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85',
    href: '#international-tours',
    layoutClass: 'lg:col-span-3 md:col-span-6',
    tours: '15 Tours',
  },
];

export function Destinations() {
  return (
    <>
      <section
        id="destination"
        className="relative overflow-hidden bg-[#F8F8F8] px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="relative mx-auto max-w-[1320px]">
          {/* HEADER SECTION */}
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
                <a
                  href={destination.href}
                  className="group relative block min-h-[320px] sm:min-h-[380px] overflow-hidden rounded-[16px] shadow-md transition-shadow hover:shadow-xl h-full"
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
                </a>
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
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                <svg className="absolute bottom-6 right-6 h-10 w-10 text-gray-500/20 rotate-[45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
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

                <a
                  href="#tours"
                  className="mt-8 rounded-[4px] bg-[#5da747] px-8 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#4d9039] shadow-md hover:shadow-lg"
                >
                  View All Destination
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

