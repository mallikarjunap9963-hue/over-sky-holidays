import { Hero } from "../components/sections/Hero";
import { BookingSearch } from "../components/sections/BookingSearch";
import { AboutUs } from "../components/sections/AboutUs";
import { Destinations } from "../components/sections/Destinations";
import { SafetySystems } from "../components/sections/SafetySystems";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { EliteTouristAttractions } from "../components/sections/EliteTouristAttractions";
import { ExploreActivities } from "../components/sections/ExploreActivities";
import { PhenomenalDeals } from "../components/sections/PhenomenalDeals";
import { TravelerTestimonials } from "../components/sections/TravelerTestimonials";
import { Blogs } from "../components/sections/Blogs";
import { Contact } from "./Contact";

export function Home() {
  return (
    <>
      <section id="home" className="relative">
        <Hero />
        <div className="px-3 sm:px-5 lg:px-8">
          <BookingSearch />
        </div>
      </section>
      <AboutUs />
      <Destinations />
      <SafetySystems />
      <WhyChooseUs />
      <EliteTouristAttractions />
      <ExploreActivities />
      <PhenomenalDeals />
      <TravelerTestimonials />
      <Blogs />
      <Contact variant="form-only" />
    </>
  );
}
