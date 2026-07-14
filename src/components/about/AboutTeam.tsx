import { ScrollReveal } from '../ui/ScrollReveal';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'With over 15 years in the travel industry, Sarah founded Open Sky Holidays to make dream vacations accessible to everyone.',
  },
  {
    name: 'David Chen',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    bio: 'David ensures that every itinerary runs flawlessly, coordinating our global network of guides and partners.',
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Travel Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'An expert in crafting personalized journeys, Priya loves designing unique adventures tailored to our clients.',
  },
  {
    name: 'Michael Torres',
    role: 'Customer Success Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    bio: 'Michael is dedicated to ensuring you have a seamless experience from booking to your return journey home.',
  }
];

export function AboutTeam() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-satisfy text-[24px] font-normal capitalize text-[#0b84d8] mb-3">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#100c08] mb-6 font-rubik">
              Meet the People Behind Your Next Adventure
            </h3>
            <p className="text-slate-600 text-[16px] md:text-[18px]">
              Our passionate team of travel experts works tirelessly to curate the best experiences, ensuring every trip you take with us is unforgettable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(7,31,67,0.06)] hover:shadow-[0_8px_30px_rgba(7,31,67,0.12)] transition-shadow duration-300 group h-full flex flex-col">
                <div className="relative mb-6 overflow-hidden rounded-full w-32 h-32 md:w-40 md:h-40 mx-auto ring-4 ring-slate-50 group-hover:ring-[#0b84d8]/20 transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center flex-1">
                  <h4 className="text-xl font-bold text-[#100c08] font-rubik mb-1 group-hover:text-[#0b84d8] transition-colors">{member.name}</h4>
                  <p className="text-[#0b84d8] text-[15px] font-medium mb-4">{member.role}</p>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
