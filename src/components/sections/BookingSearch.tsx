import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import type { SearchTab } from '../../types';
import { toursApi } from '../../api/toursApi';
import { LocationIcon, BookingTabIcon, CategoryIcon } from '../icons/Icons';
import { SearchSelect } from '../ui/SearchSelect';
import { SearchDatePicker } from '../ui/SearchDatePicker';

const SEARCH_TABS: SearchTab[] = [
  "Domestic",
  "International",
  "Visa",
  "Flight Tickets",
  "Passport",
];

export function BookingSearch() {
  const navigate = useNavigate();
  const [activeSearchTab, setActiveSearchTab] = useState<SearchTab>("Domestic");
  const [destination, setDestination] = useState<string>("Select Destination");
  const [tourType, setTourType] = useState<string>("All Types");
  const [travelDate, setTravelDate] = useState<string>("");
  const [tourCategory, setTourCategory] = useState<string>("All Categories");

  const [domesticTitles, setDomesticTitles] = useState<string[]>([]);
  const [internationalTitles, setInternationalTitles] = useState<string[]>([]);
  const [tourTypesList, setTourTypesList] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;
    async function loadTourData() {
      try {
        const [domRes, intRes, typesRes] = await Promise.all([
          toursApi.getDomesticTours(),
          toursApi.getInternationalTours(),
          toursApi.getTourTypes(),
        ]);
        if (!isMounted) return;
        if (domRes.tours) {
          setDomesticTitles(Array.from(new Set(domRes.tours.map((t) => t.title))));
        }
        if (intRes.tours) {
          setInternationalTitles(Array.from(new Set(intRes.tours.map((t) => t.title))));
        }
        if (typesRes.tourTypes) {
          setTourTypesList(Array.from(new Set(typesRes.tourTypes.map((t: any) => t.name))));
        }
      } catch (err) {
        console.error("Error loading data for search:", err);
      }
    }
    loadTourData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleTabClick = (tab: SearchTab) => {
    setActiveSearchTab(tab);
    if (tab === "Visa") {
      navigate("/services/visa-assistance");
    } else if (tab === "Flight Tickets") {
      navigate("/services/flight-tickets");
    } else if (tab === "Passport") {
      navigate("/services/passport-services");
    }
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const type = activeSearchTab === "International" ? "international" : "domestic";
    const params = new URLSearchParams();

    if (destination && destination !== "Select Destination") {
      params.append("destination", destination);
    }
    if (travelDate) {
      params.append("date", travelDate);
    }
    if (tourType && tourType !== "All Types") {
      params.append("type", tourType);
    }
    if (tourCategory && tourCategory !== "All Categories") {
      params.append("category", tourCategory);
    }

    const query = params.toString();
    navigate(query ? `/tours/${type}?${query}` : `/tours/${type}`);
  };

  let destinationOptions = ["Select Destination"];
  if (activeSearchTab === "Domestic") {
    destinationOptions = ["Select Destination", ...domesticTitles];
  } else if (activeSearchTab === "International") {
    destinationOptions = ["Select Destination", ...internationalTitles];
  } else {
    destinationOptions = ["Select Destination", ...domesticTitles, ...internationalTitles];
  }

  const typeOptions = [
    "All Types",
    ...tourTypesList,
  ];

  const categoryOptions = [
    "All Categories",
    "Economy",
    "Standard",
    "Premium",
    "Luxury",
    "Honeymoon",
  ];

  return (
    <>
      <div className="relative z-30 mx-auto -mt-12 w-[calc(100%-18px)] sm:w-[calc(100%-40px)] lg:-mt-16 font-rubik">
        <div className="mx-auto flex max-w-[860px] overflow-x-auto rounded-t-[22px] bg-[#f0f9ff] shadow-[0_-8px_24px_rgba(16,12,8,0.05)] border-t border-x border-[#bae6fd]">
          {SEARCH_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleTabClick(tab)}
              className={`flex min-h-[64px] min-w-[148px] flex-1 items-center justify-center gap-2 border-r border-[#bae6fd] px-5 text-[15px] font-bold transition last:border-r-0 ${
                activeSearchTab === tab
                  ? "bg-[#0853a4] text-white"
                  : "bg-[#f0f9ff] text-[#100c08] hover:bg-[#e0f2fe] hover:text-[#0853a4]"
              }`}
              aria-pressed={activeSearchTab === tab}
            >
              <BookingTabIcon type={tab} />
              {tab}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSearch}
          className="relative grid rounded-b-[26px] rounded-t-[4px] bg-white border border-[#bae6fd] shadow-[0_18px_50px_rgba(16,12,8,0.08)] lg:grid-cols-[1.05fr_1.05fr_1fr_1.05fr_175px] z-20"
        >
          <SearchSelect
            label="Destination"
            options={destinationOptions}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            icon={<LocationIcon className="h-7 w-7 text-[#0853a4]" />}
          />

          <SearchSelect
            label="Tour Type"
            options={typeOptions}
            value={tourType}
            onChange={(e) => setTourType(e.target.value)}
            icon={<BookingTabIcon type="Tour" className="h-7 w-7 text-[#0853a4]" />}
          />

          <SearchDatePicker
            label="When"
            value={travelDate}
            onChange={(date) => setTravelDate(date)}
          />

          <SearchSelect
            label="Tour Category"
            options={categoryOptions}
            value={tourCategory}
            onChange={(e) => setTourCategory(e.target.value)}
            icon={<CategoryIcon className="text-[#0853a4]" />}
          />

          <button
            type="submit"
            className="btn-primary min-h-[84px] px-7 text-[17px] font-extrabold text-white lg:rounded-br-[26px] cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
