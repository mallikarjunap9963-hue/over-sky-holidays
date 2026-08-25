import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import type { SearchTab } from '../../types';
import { searchTabs } from '../../data';
import { toursApi } from '../../api/toursApi';
import { LocationIcon, BookingTabIcon, CategoryIcon } from '../icons/Icons';
import { SearchSelect } from '../ui/SearchSelect';
import { SearchDatePicker } from '../ui/SearchDatePicker';

export function BookingSearch() {
  const navigate = useNavigate();
  const [activeSearchTab, setActiveSearchTab] = useState<SearchTab>("Domestic");
  const [destination, setDestination] = useState<string>("Select Destination");
  const [travelDate, setTravelDate] = useState<string>("");

  const [domesticTitles, setDomesticTitles] = useState<string[]>([]);
  const [internationalTitles, setInternationalTitles] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;
    async function loadTourTitles() {
      try {
        const [domRes, intRes] = await Promise.all([
          toursApi.getDomesticTours(),
          toursApi.getInternationalTours(),
        ]);
        if (!isMounted) return;
        if (domRes.tours) {
          setDomesticTitles(domRes.tours.map((t) => t.title));
        }
        if (intRes.tours) {
          setInternationalTitles(intRes.tours.map((t) => t.title));
        }
      } catch (err) {
        console.error("Error loading titles for search:", err);
      }
    }
    loadTourTitles();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeSearchTab === "Domestic" || activeSearchTab === "International") {
      const type = activeSearchTab.toLowerCase();
      let url = `/tours/${type}`;
      if (destination && destination !== "Select Destination") {
        url += `?destination=${encodeURIComponent(destination)}`;
      }
      navigate(url);
    }
  };

  let destinationOptions = ["Select Destination"];
  if (activeSearchTab === "Domestic") {
    destinationOptions = [
      "Select Destination",
      ...(domesticTitles.length > 0 ? domesticTitles : ["Goa", "Kerala", "Shimla", "Manali", "Kashmir"]),
    ];
  } else if (activeSearchTab === "International") {
    destinationOptions = [
      "Select Destination",
      ...(internationalTitles.length > 0 ? internationalTitles : ["Dubai", "Maldives", "Singapore", "Bali", "Thailand"]),
    ];
  } else {
    destinationOptions = [
      "Select Destination",
      "Goa",
      "Kerala",
      "Dubai",
      "Maldives",
      "Singapore",
    ];
  }

  return (
    <>
      <div className="relative z-30 mx-auto -mt-12 w-[calc(100%-18px)]  sm:w-[calc(100%-40px)] lg:-mt-16 font-rubik">
        <div className="mx-auto flex max-w-[860px] overflow-x-auto rounded-t-[22px] bg-[#f0f9ff] shadow-[0_-8px_24px_rgba(16,12,8,0.05)] border-t border-x border-[#bae6fd]">
          {searchTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveSearchTab(tab)}
              className={`flex min-h-[64px] min-w-[148px] flex-1 items-center justify-center gap-2 border-r border-[#bae6fd] px-5 text-[15px] font-bold transition last:border-r-0 ${activeSearchTab === tab
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
            options={[
              "Family Tour",
              "Couple Tour",
              "Group Tour",
              "Corporate Tour",
              "Customized Tour",
            ]}
            icon={<BookingTabIcon type="Tour" className="h-7 w-7 text-[#0853a4]" />}
          />

          <SearchDatePicker
            label="When"
            value={travelDate}
            onChange={(date) => setTravelDate(date)}
          />

          <SearchSelect
            label="Tour Category"
            options={[
              "Economy",
              "Standard",
              "Premium",
              "Luxury",
              "Honeymoon",
            ]}
            icon={<CategoryIcon className="text-[#0853a4]" />}
          />

          <button
            type="submit"
            className="btn-primary min-h-[84px] px-7 text-[17px] font-extrabold text-white lg:rounded-br-[26px]"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
