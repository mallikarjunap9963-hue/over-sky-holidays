
const tourTypes = [
  {
    title: "Adventure",
    description: "Thrilling escapes with trekking, camping, and action-packed itineraries.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Historical",
    description: "Discover forts, monuments, cultural landmarks, and timeless stories.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cultural Tours",
    description: "Immersive journeys through heritage, cuisine, traditions, and local life.",
    image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wildlife Tour",
    description: "Safaris, birding trails, national parks, and nature-rich escapes.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "City Tour",
    description: "Fast-paced city breaks with iconic attractions and local experiences.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Private Tour",
    description: "Flexible, premium travel designed around your pace and preferences.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
  },
];

export function TourTypeSection() {
  return (
    <section id="tour-types" className="px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col gap-4 text-center lg:mb-12 lg:text-left">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-[1px] w-8 bg-[#0b84d8]" />
            <p className="text-[15px] font-semibold italic text-[#0b84d8]">Explore More</p>
            <span className="h-[1px] w-8 bg-[#0b84d8]" />
          </div>
          <h2 className="text-[30px] font-bold leading-tight text-[#071f43] sm:text-[38px] lg:text-[42px]">
            Tour Type
          </h2>
          <p className="mx-auto max-w-[760px] text-[15px] leading-7 text-slate-600 lg:mx-0">
            Choose from our most loved travel styles and let us shape an itinerary that fits your travel mood, pace, and budget.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tourTypes.map((tour) => (
            <article
              key={tour.title}
              className="group relative min-h-[260px] overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(7,31,67,0.12)]"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <span className="mb-3 inline-flex w-fit rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                  Open Sky Holidays
                </span>
                <h3 className="text-[24px] font-bold">{tour.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/90">{tour.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
