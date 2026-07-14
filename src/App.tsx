import "./App.css";
import { TopBar } from "./components/layout/TopBar";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { BookingSearch } from "./components/sections/BookingSearch";
import { AboutUs } from "./components/sections/AboutUs";
import { Destinations } from "./components/sections/Destinations";
import { UltimateTravelExperience } from "./components/sections/UltimateTravelExperience";
import { SafetySystems } from "./components/sections/SafetySystems";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { EliteTouristAttractions } from "./components/sections/EliteTouristAttractions";
import { ExploreActivities } from "./components/sections/ExploreActivities";
import { PhenomenalDeals } from "./components/sections/PhenomenalDeals";
import { TravelerTestimonials } from "./components/sections/TravelerTestimonials";
import { ContactUs } from "./components/sections/ContactUs";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#111827]">
      <TopBar />
      <Header />
      <main className="page-shell overflow-x-hidden">
        <section id="home" className="relative">
          <Hero />
          <div className="px-3 sm:px-5 lg:px-8">
            <BookingSearch />
          </div>
        </section>
        <AboutUs />
        <Destinations />
        <UltimateTravelExperience />
        <SafetySystems />
        <WhyChooseUs />
        <EliteTouristAttractions />
        <ExploreActivities />
        <PhenomenalDeals />
        <TravelerTestimonials />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
