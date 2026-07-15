import type { TourDetailInfo, ItineraryDay, TourHighlight } from '../types';

// Handcrafted detailed tour packages info
export const handcraftedTourDetails: Record<string, TourDetailInfo> = {
  // Santorini Escape
  "international-9": {
    about: "Santorini is one of the most breathtaking islands in Greece, famous for its whitewashed buildings, blue domes, stunning sunsets, and crystal-clear waters. This 6-day journey offers the perfect mix of relaxation, sightseeing, adventure, and culture. Stroll through cliffside villages, sail across the volcanic caldera, and taste world-class local wines while overlooking the deep blue Aegean Sea.",
    features: [
      { icon: "Spectacular Views", label: "Spectacular Views" },
      { icon: "Island Exploration", label: "Island Exploration" },
      { icon: "Local Cuisine", label: "Local Cuisine" },
      { icon: "Romantic Getaway", label: "Romantic Getaway" },
      { icon: "Photography Spot", label: "Photography Spot" }
    ],
    highlights: [
      { title: "Oia Sunset", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80" },
      { title: "Blue Dome Churches", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80" },
      { title: "Red Beach", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80" },
      { title: "Wine Tasting", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
      { title: "Catamaran Cruise", image: "https://images.unsplash.com/photo-1505080856163-3a9054cc6b30?auto=format&fit=crop&w=400&q=80" }
    ],
    bestTime: "Apr - Oct",
    packageType: "Customized",
    rating: 4.8,
    reviewsCount: 128,
    happyTravelers: "320+ Happy Travelers",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Santorini",
        description: "Arrive at Santorini Airport and transfer to your cliffside hotel. Spend the afternoon settling in and enjoying the stunning Caldera views. In the evening, savor a welcome dinner at a local restaurant.",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
        points: ["Airport Pick-up & Transfer", "Hotel Check-in", "Caldera Sunset View", "Welcome Greek Dinner"]
      },
      {
        day: 2,
        title: "Oia Sunset Tour",
        description: "Explore the charming village of Oia. Stroll through the cobblestone paths, admire the blue dome churches, and witness the world-famous sunset from the Byzantine castle ruins.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
        points: ["Oia Village Walk", "Blue Dome Photo Ops", "Sunset over Caldera", "Local Bakery Treats"]
      },
      {
        day: 3,
        title: "Volcanic Beaches & Akrotiri",
        description: "Visit the unique Red Beach and Kamari Black Sand Beach. Discover the historic ruins of the prehistoric city of Akrotiri, preserved under volcanic ash.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80",
        points: ["Red Beach Hiking", "Black Sand Beach Swim", "Guided Akrotiri Ruins Tour", "Traditional Village Stop"]
      },
      {
        day: 4,
        title: "Vineyard Wine Tasting",
        description: "Visit traditional Santorini wineries. Learn about the unique volcanic viticulture and taste Assyrtiko, Nykteri, and Vinsanto wines paired with Greek cheeses.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
        points: ["Vineyard Tour", "Wine Cellars Exploration", "5+ Premium Wine Tastings", "Greek Meze Platter"]
      },
      {
        day: 5,
        title: "Caldera Sailing & Hot Springs",
        description: "Board a luxury catamaran. Sail across the Caldera, swim in the therapeutic volcanic hot springs, and enjoy a fresh barbecue buffet lunch prepared onboard.",
        image: "https://images.unsplash.com/photo-1505080856163-3a9054cc6b30?auto=format&fit=crop&w=600&q=80",
        points: ["Catamaran Cruise", "Volcanic Hot Springs Swim", "Snorkeling at White Beach", "BBQ & Greek Wine on Boat"]
      },
      {
        day: 6,
        title: "Departure Day",
        description: "Enjoy a final breakfast overlooking the Aegean Sea. Free time for souvenir shopping before transferring to the airport or port for your departure.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
        points: ["Buffet Breakfast", "Last-minute Shopping", "Airport/Port Transfer", "Flight Back Home"]
      }
    ],
    inclusions: [
      "5 Nights accommodation in a Caldera view hotel",
      "Daily buffet breakfast at the hotel",
      "Private roundtrip airport/port transfers",
      "Guided Oia village sunset walking tour",
      "Half-day volcanic beaches and Akrotiri tour",
      "Guided wine tasting tour (3 wineries, 5+ tastings)",
      "Caldera Catamaran Sailing Cruise with BBQ buffet and drinks"
    ],
    exclusions: [
      "International flights and travel insurance",
      "Meals and drinks not mentioned in inclusions",
      "Optional tours or entry tickets to museums",
      "Schengen Visa fees",
      "Personal expenses (tips, laundry, shopping)"
    ],
    hotels: [
      { name: "Volcano View Hotel", location: "Santorini Cliffside", rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", tags: ["Caldera View", "Infinity Pool", "5-Star Luxury"] },
      { name: "Astro Palace Hotel & Suites", location: "Fira, Santorini", rating: 4, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", tags: ["Close to Fira", "Spa Resort", "Elegant Suites"] }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1505080856163-3a9054cc6b30?auto=format&fit=crop&w=500&q=80"
    ],
    faqs: [
      { question: "Do Indian citizens need a visa for Greece?", answer: "Yes, Indian citizens require a Schengen Visa to travel to Greece. We provide comprehensive guidance, checklist reviews, and help book biometric appointments." },
      { question: "What is the best time to visit Santorini?", answer: "The ideal travel season is April through October. May, June, September, and October offer pleasant weather, warm waters, and slightly smaller crowds than peak July/August." },
      { question: "Is this tour package customizable?", answer: "Absolutely! We can modify hotels, adjust the duration, add flights, or swap activities to suit your personal style and budget." }
    ]
  },

  // Goa Tour (packages-1)
  "packages-1": {
    about: "Discover Goa's magnificent coastline, Portuguese history, vibrant culture, and laid-back beach vibe. From sunbathing on Golden Sand beaches like Baga and Calangute to visiting ancient cathedrals, Dudhsagar waterfalls, and spice plantations, this Goa getaway offers the perfect mix of relaxation and coastal fun.",
    features: [
      { icon: "Beach Access", label: "Beach Side" },
      { icon: "Water Sports", label: "Water Sports" },
      { icon: "Heritage Sightseeing", label: "Heritage Walk" },
      { icon: "Spicy Cuisine", label: "Seafood Experience" },
      { icon: "Vibrant Nightlife", label: "Sunset Cruise" }
    ],
    highlights: [
      { title: "Baga Beach", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80" },
      { title: "Basilica of Bom Jesus", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80" },
      { title: "Dudhsagar Falls", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=400&q=80" },
      { title: "Spice Plantation", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80" }
    ],
    bestTime: "Nov - Feb",
    packageType: "Customized",
    rating: 4.7,
    reviewsCount: 84,
    happyTravelers: "220+ Happy Travelers",
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Arrive in Goa via Flight/Train. Meet our representative and transfer to your pre-booked resort near North Goa. Spend the rest of the day at leisure, relaxing on Calangute beach.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80", points: ["Airport/Station Pick-up", "Hotel Check-in", "Evening Beach Stroll", "Leisure Time"] },
      { day: 2, title: "North Goa Sightseeing", description: "After breakfast, embark on a full-day tour of North Goa. Visit the historic Fort Aguada, Coco Beach, Calangute Beach, Baga Beach, and Anjuna Beach. Enjoy water activities at your own cost.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", points: ["Fort Aguada Visit", "Baga & Calangute Beaches", "Anjuna Flea Market", "Sunset View"] },
      { day: 3, title: "South Goa & Heritage Tour", description: "Explore the quiet side of Goa. Visit the Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, and Miramar Beach. End the day with a romantic Mandovi River boat cruise.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80", points: ["UNESCO Old Churches", "Mangueshi Temple", "Miramar Beach Walk", "Mandovi River Cruise"] },
      { day: 4, title: "Departure", description: "Check out from your hotel after breakfast. Transfer to the Goa airport or railway station for your onward journey.", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80", points: ["Buffet Breakfast", "Hotel Checkout", "Airport Transfer", "Departing Memories"] }
    ],
    inclusions: [
      "3 Nights accommodation in North Goa (3-Star resort)",
      "Daily buffet breakfast at resort",
      "AC private cab for all transfers and sightseeing",
      "Mandovi River boat cruise ticket",
      "Tolls, parking fees, and driver allowances"
    ],
    exclusions: [
      "Flights or train tickets to/from Goa",
      "Lunches and Dinners",
      "Water sports charges or adventure activities",
      "Personal expenses (laundry, shopping, tips)"
    ],
    hotels: [
      { name: "La Calypso Resort", location: "Baga Beach, Goa", rating: 4, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", tags: ["Beachfront", "Swimming Pool", "Family Friendly"] },
      { name: "De Alturas Resort", location: "Candolim, Goa", rating: 4, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", tags: ["Premium Stay", "Spa", "Excellent Location"] }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80"
    ],
    faqs: [
      { question: "Is Goa safe for solo travelers?", answer: "Yes, Goa is widely considered one of the safest destinations in India for solo and female travelers, with helpful locals and police presence near tourist sites." },
      { question: "Can we book water sports on this tour?", answer: "Yes! Water sports (parasailing, jet-skiing, banana rides) can be enjoyed at Baga or Calangute Beach, and our driver will help you find certified operators." }
    ]
  },

  // Kerala Tour (domestic-1 and packages-3)
  "domestic-1": {
    about: "Kerala, God's Own Country, offers a magnificent scenery of lush green hill stations, mist-clad valleys, spice plantations, and pristine backwaters. Explore the tea estates of Munnar, search for wild elephants in Thekkady forests, and cruise in a traditional houseboat in Alleppey backwaters.",
    features: [
      { icon: "Backwater Cruise", label: "Houseboat Stay" },
      { icon: "Tea Estates", label: "Munnar Hills" },
      { icon: "Wildlife Safari", label: "Periyar Wildlife" },
      { icon: "Spices", label: "Spice Gardens" },
      { icon: "Culture", label: "Kathakali Show" }
    ],
    highlights: [
      { title: "Munnar Hills", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80" },
      { title: "Periyar Wildlife Sanctuary", image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=400&q=80" },
      { title: "Alleppey Houseboat", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80" },
      { title: "Chinese Fishing Nets", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80" }
    ],
    bestTime: "Sep - Mar",
    packageType: "Customized",
    rating: 4.8,
    reviewsCount: 145,
    happyTravelers: "450+ Happy Travelers",
    itinerary: [
      { day: 1, title: "Cochi to Munnar Hills", description: "Arrive in Kochi, meet our tour manager, and drive to Munnar. Enjoy breathtaking views of Cheeyappara and Valara waterfalls along the way. Check in to your Munnar resort and relax.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80", points: ["Kochi Arrival", "Drive to Munnar", "Waterfall Stopovers", "Resort Check-in"] },
      { day: 2, title: "Munnar Tea Gardens Exploration", description: "Full-day sightseeing in Munnar. Visit Mattupetty Dam, Echo Point, Kundala Lake, Photo Point, and Eravikulam National Park (famous for the Nilgiri Tahr). Explore lush green tea plantations.", image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=600&q=80", points: ["Mattupetty Dam", "Echo Point shouting", "Eravikulam National Park", "Tea Museum Tour"] },
      { day: 3, title: "Munnar to Thekkady Wilderness", description: "Drive to Thekkady. Visit the spice plantations, learn about coffee, cardamom, and pepper farming. In the afternoon, enjoy a boat safari on Periyar Lake inside the wildlife sanctuary.", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80", points: ["Drive to Thekkady", "Spice Garden Tour", "Periyar Boat Safari", "Kathakali Performance (Optional)"] },
      { day: 4, title: "Thekkady to Alleppey Houseboat", description: "Transfer to Alleppey jetty. Check in to your private Houseboat. Cruise through the peaceful Vembanad lake backwaters. Enjoy traditional Kerala meals prepared on board and sleep on the water.", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80", points: ["Houseboat Check-in", "Backwater Cruise", "Traditional Kerala Meals", "Overnight on Boat"] },
      { day: 5, title: "Alleppey to Kochi & Departure", description: "After breakfast, check out from the houseboat. Drive back to Kochi. Explore Fort Kochi, the Chinese Fishing Nets, and Jew Town, then drop off at Kochi airport or railway station.", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80", points: ["Fort Kochi Walk", "Chinese Fishing Nets", "Jew Town Shopping", "Airport Drop-off"] }
    ],
    inclusions: [
      "4 Nights accommodation (3 nights hotel, 1 night deluxe houseboat)",
      "Daily breakfast at hotels, and all meals on the houseboat",
      "Private AC Sedan/SUV for all sightseeing and transfers",
      "Spice plantation entry ticket",
      "All driver allowances, tolls, and parking taxes"
    ],
    exclusions: [
      "Flights or train tickets to Kochi",
      "Periyar Lake boat ride tickets (needs online booking)",
      "Entry tickets to museums, parks, or performances",
      "Personal tips and laundry expenses"
    ],
    hotels: [
      { name: "Munnar Tea Country Resort", location: "Munnar, Kerala", rating: 4, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", tags: ["Valley Views", "Tea Estate", "Family Resort"] },
      { name: "Abad Whispering Palms", location: "Kumarakom, Kerala", rating: 4, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", tags: ["Lake Facing", "Infinity Pool", "Ayurvedic Spa"] }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=500&q=80"
    ],
    faqs: [
      { question: "Is the houseboat stay private or shared?", answer: "All our houseboats are booked on a private basis. You will have a private bedroom, private washroom, and dedicated chef/crew on board." },
      { question: "When is Periyar boat safari booking available?", answer: "Periyar safari boat ride is operated by Kerala Forest Department. It needs to be booked online in advance, and our support team will help you block slots." }
    ]
  }
};

// Aliases for duplicated keys or same destinations
handcraftedTourDetails["packages-3"] = handcraftedTourDetails["domestic-1"]; // Kerala package in Packages tab
handcraftedTourDetails["domestic-3"] = handcraftedTourDetails["packages-1"]; // Goa package in Domestic tab

// Fallback high-quality data generator
export function getTourDetailInfo(
  type: string,
  id: number,
  tourTitle: string,
  tourLocations: string[],
  durationStr: string,
  _priceStr: string,
  country: string,
  imageStr: string
): TourDetailInfo {
  const key = `${type.toLowerCase()}-${id}`;
  
  if (handcraftedTourDetails[key]) {
    return handcraftedTourDetails[key];
  }

  // Parse days from duration (e.g. "6 DAYS / 5 NIGHTS" or "5 Nights / 6 Days")
  let daysCount = 5;
  const numMatch = durationStr.match(/(\d+)\s*(days|nights|day|night)/i);
  if (numMatch) {
    daysCount = parseInt(numMatch[1], 10);
    // If it is 5 Nights / 6 Days, let's look for larger number
    const numbers = durationStr.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      daysCount = Math.max(...numbers.map(n => parseInt(n, 10)));
    }
  }

  // Set default details based on place
  const title = tourTitle.split('.')[0]; // remove trailing full stop
  const finalTitle = title.includes("Discover") || title.includes("Explore") ? title : `Discover ${title}`;

  // Itinerary generation
  const itinerary: ItineraryDay[] = [];
  for (let i = 1; i <= daysCount; i++) {
    if (i === 1) {
      itinerary.push({
        day: i,
        title: `Arrival at ${tourLocations[0] || country}`,
        description: `Arrive and meet our representative. Transfer to your premium hotel/resort in ${tourLocations[0] || country}. Rest and relax for the evening, adjusting to the beautiful climate.`,
        image: imageStr,
        points: ["Meet & Greet", "Transfer to Hotel", "Welcome Drinks", "Evening at Leisure"]
      });
    } else if (i === daysCount) {
      itinerary.push({
        day: i,
        title: `Departure from ${tourLocations[tourLocations.length - 1] || country}`,
        description: `Enjoy a delicious buffet breakfast at your hotel. Do some last-minute shopping and souvenir collection. Check out and transfer to the airport or station for your return journey home.`,
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
        points: ["Breakfast at Hotel", "Souvenir Shopping", "Airport/Station Drop", "End of Open Sky Tour"]
      });
    } else {
      const loc = tourLocations[(i - 1) % tourLocations.length] || country;
      itinerary.push({
        day: i,
        title: `Explore ${loc}`,
        description: `A full day of sightseeing in and around ${loc}. Experience the scenic landscapes, local history, and cultural attractions. Capture memories, try local cuisines, and shop in traditional street markets.`,
        image: i % 2 === 0 ? "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80" : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        points: [`Guided tours in ${loc}`, "Historical sights visit", "Photography and local walks", "Local restaurant lunch"]
      });
    }
  }

  // Highlights generation
  const highlights: TourHighlight[] = tourLocations.map((loc, idx) => ({
    title: loc,
    image: idx % 2 === 0 ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" : "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80"
  }));

  // Features based on domestic vs international
  const features = [
    { icon: "Spectacular Views", label: "Spectacular Views" },
    { icon: "Guided Tours", label: "Local Guide Support" },
    { icon: "Clean Hotels", label: "Handpicked Stays" },
    { icon: "Comfort Travel", label: "AC Transfers" },
    { icon: "Photography", label: "Scenic Photo Spots" }
  ];

  const isInternational = type.toLowerCase() === 'international' || 
                          type.toLowerCase() === 'islands' || 
                          (country && country.toUpperCase() !== 'INDIA');

  const isMaldives = tourTitle.toLowerCase().includes('maldives');

  const inclusions = isInternational
    ? [
        "Accommodation on Twin Sharing Basis",
        isMaldives ? "4 Star / 5 Star Hotel" : "3 Star / 4 Star Hotel",
        "All Meals",
        "Sightseeing",
        "Airport Pickup & Drop"
      ]
    : [
        `${daysCount - 1} Nights accommodation in premium hotels/resorts`,
        "Daily buffet breakfast at hotels",
        "Private AC vehicle for all airport/station transfers and sightseeing",
        "Guided tours for major monuments and attractions mentioned in the itinerary",
        "All fuel costs, driver allowances, toll gates, and state parking taxes"
      ];

  const hotels = isInternational
    ? [
        { 
          name: isMaldives ? "Grand Ocean Sands Resort" : "Holiday Inn Executive", 
          location: tourLocations[0] || country, 
          rating: isMaldives ? 5 : 4, 
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", 
          tags: isMaldives ? ["5 Star Resort", "Water Villa", "Infinity Pool"] : ["4 Star Hotel", "City Center", "Free WiFi"] 
        },
        { 
          name: isMaldives ? "Paradise Island Resort" : "Orchid Deluxe Stay", 
          location: tourLocations[1] || tourLocations[0] || country, 
          rating: isMaldives ? 5 : 3, 
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", 
          tags: isMaldives ? ["Private Beach", "Spa & Wellness", "All Inclusive"] : ["3 Star Hotel", "Close to Sights", "Eco Friendly"] 
        }
      ]
    : [
        { name: "Grand Vista Resort & Spa", location: tourLocations[0] || country, rating: 4, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", tags: ["Top Rated", "Infinity Pool", "Free Breakfast"] },
        { name: "Premium Plaza Residency", location: tourLocations[1] || tourLocations[0] || country, rating: 4, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", tags: ["Modern Stay", "Close to Sights", "Eco Friendly"] }
      ];

  return {
    about: `${finalTitle}. This meticulously planned vacation offers the perfect combination of scenery, historical monuments, local shopping, and adventure activities. Over the course of ${durationStr.toLowerCase()}, you'll discover the unique charm of ${tourLocations.join(', ')} with our 24/7 dedicated travel support and comfortable stays.`,
    features,
    highlights: highlights.slice(0, 5),
    bestTime: type === 'domestic' || type === 'pilgrimage' ? 'Oct - Apr' : 'Year Round',
    packageType: "Customized",
    rating: Number((4.5 + (id % 5) * 0.1).toFixed(1)),
    reviewsCount: 45 + id * 12,
    happyTravelers: `${120 + id * 25}+ Happy Travelers`,
    itinerary,
    inclusions,
    exclusions: [
      "Any entry flight tickets, train tickets, or visa fees",
      "Lunch, dinner, or personal beverages unless specified",
      "Optional adventure sports (boating, paragliding, or safaris)",
      "Expenses of personal nature like laundry, tips, and phone calls"
    ],
    hotels,
    gallery: [
      imageStr,
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
    ],
    faqs: [
      { question: "Is this package suitable for families?", answer: "Yes, all our packages are curated with safety and comfort in mind, making them perfect for families, couples, and group vacations." },
      { question: "Can I choose my own hotel standard?", answer: "Yes! You can request upgrades to 5-star luxury resorts, private villas, or cost-effective budget stays. Contact our trip planner to customize." },
      { question: "Are flights included in this price?", answer: "By default, our prices cover local stays, cars, and activities. However, we can assist with domestic and international flight bookings at current real-time prices." }
    ]
  };
}

