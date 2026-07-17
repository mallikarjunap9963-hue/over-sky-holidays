import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import type { SearchTab } from '../../types';
import { searchTabs, attractionPackages } from '../../data';
import { LocationIcon, BookingTabIcon, ClockIcon, CategoryIcon } from '../icons/Icons';
import { SearchSelect } from '../ui/SearchSelect';


export function BookingSearch() {
  const navigate = useNavigate();
  const [activeSearchTab, setActiveSearchTab] = useState<SearchTab>("Domestic");
  const [destination, setDestination] = useState<string>("Select Destination");

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

  // Determine dynamic options based on the active tab
  let destinationOptions = ["Select Destination"];
  if (activeSearchTab === "Domestic") {
    destinationOptions = [
      "Select Destination",
      ...attractionPackages.Domestic.map((tour) => tour.title),
    ];
  } else if (activeSearchTab === "International") {
    destinationOptions = [
      "Select Destination",
      ...attractionPackages.International.map((tour) => tour.title),
    ];
  } else {
    // Fallback options if it's Visa, Flight Tickets, etc.
    destinationOptions = [
      "Select Destination",
      "Goa",
      "Kullu - Manali & Shimla",
      "Kerala",
      "Dubai",
      "Maldives",
      "Singapore & Malaysia",
    ];
  }

  return (
    <>
      {/* BOOKING SEARCH PANEL */}
      <div className="relative z-30 mx-auto -mt-12 w-[calc(100%-18px)]  sm:w-[calc(100%-40px)] lg:-mt-16 font-rubik">
        {/* SEARCH TABS */}
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

        {/* SEARCH FORM */}
        <form
          onSubmit={handleSearch}
          className="grid overflow-hidden rounded-b-[26px] rounded-t-[4px] bg-white border border-[#bae6fd] shadow-[0_18px_50px_rgba(16,12,8,0.08)] lg:grid-cols-[1.05fr_1.05fr_1fr_1.05fr_175px]"
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

          <SearchSelect
            label="When"
            options={[
              "Select Month",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
            icon={<ClockIcon className="text-[#0853a4]" />}
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
      {/* ================= ABOUT US SECTION START ================= */}
    </>
  );
}
