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
      { name: "Volcano View Hotel", location: "Santorini Cliffside", rating: 5, image: commonsImage("Santorini caldera Greece.jpg"), tags: ["Caldera View", "Infinity Pool", "5-Star Luxury"] },
      { name: "Astro Palace Hotel & Suites", location: "Fira, Santorini", rating: 4, image: commonsImage("Fira Santorini Greece.jpg"), tags: ["Close to Fira", "Spa Resort", "Elegant Suites"] }
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
      { title: "Baga Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
      { title: "Basilica of Bom Jesus", image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&w=400&q=80" },
      { title: "Dudhsagar Falls", image: "https://images.unsplash.com/photo-1627857211119-be8f1f7ec62f?auto=format&fit=crop&w=400&q=80" },
      { title: "Spice Plantation", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80" }
    ],
    bestTime: "Nov - Feb",
    packageType: "Customized",
    rating: 4.7,
    reviewsCount: 84,
    happyTravelers: "220+ Happy Travelers",
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Arrive in Goa via Flight/Train. Meet our representative and transfer to your pre-booked resort near North Goa. Spend the rest of the day at leisure, relaxing on Calangute beach.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", points: ["Airport/Station Pick-up", "Hotel Check-in", "Evening Beach Stroll", "Leisure Time"] },
      { day: 2, title: "North Goa Sightseeing", description: "After breakfast, embark on a full-day tour of North Goa. Visit the historic Fort Aguada, Coco Beach, Calangute Beach, Baga Beach, and Anjuna Beach. Enjoy water activities at your own cost.", image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=600&q=80", points: ["Fort Aguada Visit", "Baga & Calangute Beaches", "Anjuna Flea Market", "Sunset View"] },
      { day: 3, title: "South Goa & Heritage Tour", description: "Explore the quiet side of Goa. Visit the Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, and Miramar Beach. End the day with a romantic Mandovi River boat cruise.", image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&w=600&q=80", points: ["UNESCO Old Churches", "Mangueshi Temple", "Miramar Beach Walk", "Mandovi River Cruise"] },
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
      { name: "La Calypso Resort", location: "Baga Beach, Goa", rating: 4, image: commonsImage("Baga Beach, Goa.jpg"), tags: ["Beachfront", "Swimming Pool", "Family Friendly"] },
      { name: "De Alturas Resort", location: "Candolim, Goa", rating: 4, image: commonsImage("Fort Aguada, Goa.jpg"), tags: ["Premium Stay", "Spa", "Excellent Location"] }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1627857211119-be8f1f7ec62f?auto=format&fit=crop&w=500&q=80"
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
      { name: "Munnar Tea Country Resort", location: "Munnar, Kerala", rating: 4, image: commonsImage("Tea plantation in Munnar.jpg"), tags: ["Valley Views", "Tea Estate", "Family Resort"] },
      { name: "Abad Whispering Palms", location: "Kumarakom, Kerala", rating: 4, image: commonsImage("Houseboat in Kerala Backwaters.jpg"), tags: ["Lake Facing", "Infinity Pool", "Ayurvedic Spa"] }
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


/**
 * Creates a direct, resizeable Wikimedia Commons image URL.
 *
 * These URLs point to named real-location photographs rather than random
 * keyword images. Wikimedia may redirect the URL to the current CDN file.
 */
function commonsImage(fileName: string, width = 1200): string {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    fileName
  )}?width=${width}`;
}

const destinationImageSets: Array<{
  matches: string[];
  images: string[];
}> = [
    {
      // Keep Ooty separate from Mysore so no Mysore or generic hill image
      // is ever shown inside an Ooty package.
      matches: ["ooty", "udhagamandalam", "ootacamund", "nilgiri"],
      images: [
        commonsImage("Ooty lake.jpg"),
        commonsImage("The Nilgiri Mountain Railway.jpg"),
        commonsImage("Government Botanical Garden Ooty India.jpg"),
        commonsImage("Doddabetta-Peak.jpg"),
        commonsImage("Pykara lake1.jpg"),
        commonsImage("Avalanche lake.jpg"),
        commonsImage("Another Tea Plantation (15302467908).jpg"),
        commonsImage("Ooty Emerald Lake 01.jpg")
      ]
    },
    {
      matches: ["mysore", "mysuru"],
      images: [
        commonsImage("Mysore Palace Morning.jpg"),
        commonsImage("Mysore Palace at Night.jpg"),
        commonsImage("Brindavan Gardens.JPG"),
        commonsImage("Chamundeshwari Temple atop Chamundi Hills.jpg"),
        commonsImage("St. Philomena's Cathedral, Mysore.jpg")
      ]
    },
    {
      matches: ["goa"],
      images: [
        commonsImage("Calangute beach, Goa.jpg"),
        commonsImage("Baga Beach, Goa.jpg"),
        commonsImage("Fort Aguada, Goa.jpg"),
        commonsImage("Basilica of Bom Jesus, Goa.jpg"),
        commonsImage("Dudhsagar Falls Goa.jpg")
      ]
    },
    {
      matches: ["manali"],
      images: [
        commonsImage("Manali, Himachal Pradesh.jpg"),
        commonsImage("Solang Valley Manali.jpg"),
        commonsImage("Hidimba Devi Temple Manali.jpg"),
        commonsImage("Rohtang Pass.jpg"),
        commonsImage("Beas River in Manali.jpg")
      ]
    },
    {
      matches: ["shimla"],
      images: [
        commonsImage("Shimla cityscape.jpg"),
        commonsImage("The Ridge Shimla.jpg"),
        commonsImage("Christ Church Shimla.jpg"),
        commonsImage("Kalka Shimla Railway.jpg"),
        commonsImage("Mall Road Shimla.jpg")
      ]
    },
    {
      matches: ["kerala", "munnar", "alleppey", "alappuzha", "thekkady"],
      images: [
        commonsImage("Tea plantation in Munnar.jpg"),
        commonsImage("Houseboat in Kerala Backwaters.jpg"),
        commonsImage("Periyar Lake, Thekkady.jpg"),
        commonsImage("Chinese fishing nets Kochi.jpg"),
        commonsImage("Munnar landscape.jpg")
      ]
    },
    {
      matches: ["delhi"],
      images: [
        commonsImage("India Gate in New Delhi at Night.jpg"),
        commonsImage("Red Fort in Delhi 03-2016 img3.jpg"),
        commonsImage("Qutb Minar, Delhi.jpg"),
        commonsImage("Humayun's Tomb, Delhi, India.jpg"),
        commonsImage("Lotus Temple in New Delhi 03-2016.jpg")
      ]
    },
    {
      matches: ["agra", "taj mahal"],
      images: [
        commonsImage("Taj Mahal, Agra, India edit3.jpg"),
        commonsImage("Agra Fort, India.jpg"),
        commonsImage("Itmad-Ud-Daulah's Tomb, Agra.jpg"),
        commonsImage("Mehtab Bagh, Agra.jpg"),
        commonsImage("Taj Mahal from Mehtab Bagh.jpg")
      ]
    },
    {
      matches: ["nainital"],
      images: [
        commonsImage("Nainital lake.jpg"),
        commonsImage("Naini Lake, Nainital.jpg"),
        commonsImage("Naina Devi Temple Nainital.jpg"),
        commonsImage("Snow View Nainital.jpg"),
        commonsImage("Nainital town.jpg")
      ]
    },
    {
      matches: ["kashmir", "srinagar", "gulmarg", "pahalgam", "sonmarg"],
      images: [
        commonsImage("Dal Lake Srinagar Kashmir India.jpg"),
        commonsImage("Gulmarg Kashmir.jpg"),
        commonsImage("Pahalgam Valley.jpg"),
        commonsImage("Sonamarg Kashmir.jpg"),
        commonsImage("Shalimar Bagh Srinagar.jpg")
      ]
    },
    {
      matches: ["meghalaya", "shillong", "cherrapunji", "sohra"],
      images: [
        commonsImage("Nohkalikai Falls Cherrapunjee.jpg"),
        commonsImage("Living root bridge Meghalaya.jpg"),
        commonsImage("Umiam Lake Meghalaya.jpg"),
        commonsImage("Elephant Falls Shillong.jpg"),
        commonsImage("Dawki River Meghalaya.jpg")
      ]
    },
    {
      matches: ["rajasthan", "jaipur", "udaipur", "jaisalmer", "jodhpur"],
      images: [
        commonsImage("Hawa Mahal 2011.jpg"),
        commonsImage("Amber Fort Jaipur.jpg"),
        commonsImage("City Palace Udaipur.jpg"),
        commonsImage("Jaisalmer Fort Rajasthan.jpg"),
        commonsImage("Mehrangarh Fort Jodhpur.jpg")
      ]
    },
    {
      matches: ["kodaikanal"],
      images: [
        commonsImage("Kodaikanal Lake.jpg"),
        commonsImage("Pillar Rocks Kodaikanal.jpg"),
        commonsImage("Coaker's Walk Kodaikanal.jpg"),
        commonsImage("Silver Cascade Falls Kodaikanal.jpg"),
        commonsImage("Kodaikanal landscape.jpg")
      ]
    },
    {
      matches: ["darjeeling"],
      images: [
        commonsImage("Darjeeling town.jpg"),
        commonsImage("Darjeeling Himalayan Railway.jpg"),
        commonsImage("Tiger Hill Darjeeling.jpg"),
        commonsImage("Tea garden Darjeeling.jpg"),
        commonsImage("Batasia Loop Darjeeling.jpg")
      ]
    },
    {
      matches: ["andaman", "havelock", "swaraj dweep"],
      images: [
        commonsImage("Radhanagar beach, Havelock Island.jpg"),
        commonsImage("Cellular Jail Andaman.jpg"),
        commonsImage("Ross Island Andaman.jpg"),
        commonsImage("Elephant Beach Havelock.jpg"),
        commonsImage("Andaman Islands beach.jpg")
      ]
    },
    {
      matches: ["kedarnath"],
      images: [
        commonsImage("Kedarnath Temple in Uttarakhand.jpg"),
        commonsImage("Kedarnath Valley.jpg"),
        commonsImage("Kedarnath Temple and mountain.jpg"),
        commonsImage("Mandakini River Kedarnath.jpg")
      ]
    },
    {
      matches: ["badrinath"],
      images: [
        commonsImage("Badrinath Temple Uttarakhand.jpg"),
        commonsImage("Badrinath town.jpg"),
        commonsImage("Neelkanth peak Badrinath.jpg"),
        commonsImage("Alaknanda River Badrinath.jpg")
      ]
    },
    {
      matches: ["rishikesh"],
      images: [
        commonsImage("Lakshman Jhula Rishikesh.jpg"),
        commonsImage("Ganga river at Rishikesh.jpg"),
        commonsImage("Triveni Ghat Rishikesh.jpg"),
        commonsImage("River rafting Rishikesh.jpg")
      ]
    },
    {
      matches: ["tirupati", "tirupathi"],
      images: [
        commonsImage("Tirumala Venkateswara Temple.jpg"),
        commonsImage("Tirumala hills.jpg"),
        commonsImage("Srivari Padalu Tirumala.jpg"),
        commonsImage("Kapila Theertham Tirupati.jpg")
      ]
    },
    {
      matches: ["dubai"],
      images: [
        commonsImage("Burj Khalifa Dubai.jpg"),
        commonsImage("Palm Jumeirah Dubai.jpg"),
        commonsImage("Dubai Marina Skyline.jpg"),
        commonsImage("Dubai desert safari.jpg"),
        commonsImage("Museum of the Future Dubai.jpg")
      ]
    },
    {
      matches: ["singapore"],
      images: [
        commonsImage("Marina Bay Sands Singapore.jpg"),
        commonsImage("Gardens by the Bay Supertree Grove.jpg"),
        commonsImage("Merlion Singapore.jpg"),
        commonsImage("Sentosa Singapore.jpg"),
        commonsImage("Singapore skyline at night.jpg")
      ]
    },
    {
      matches: ["malaysia", "kuala lumpur"],
      images: [
        commonsImage("Petronas Twin Towers 2010.jpg"),
        commonsImage("Batu Caves Malaysia.jpg"),
        commonsImage("Langkawi Sky Bridge.jpg"),
        commonsImage("Kuala Lumpur skyline.jpg"),
        commonsImage("Putra Mosque Putrajaya.jpg")
      ]
    },
    {
      matches: ["bangkok"],
      images: [
        commonsImage("Wat Arun Bangkok Thailand.jpg"),
        commonsImage("Grand Palace Bangkok.jpg"),
        commonsImage("Wat Pho Bangkok.jpg"),
        commonsImage("Bangkok skyline.jpg"),
        commonsImage("Chao Phraya River Bangkok.jpg")
      ]
    },
    {
      matches: ["pattaya"],
      images: [
        commonsImage("Pattaya beach Thailand.jpg"),
        commonsImage("Sanctuary of Truth Pattaya.jpg"),
        commonsImage("Koh Larn Pattaya.jpg"),
        commonsImage("Pattaya city Thailand.jpg")
      ]
    },
    {
      matches: ["phuket"],
      images: [
        commonsImage("Patong Beach Phuket.jpg"),
        commonsImage("Phang Nga Bay Thailand.jpg"),
        commonsImage("Big Buddha Phuket.jpg"),
        commonsImage("Phi Phi Islands Thailand.jpg")
      ]
    },
    {
      matches: ["nepal", "kathmandu", "pokhara"],
      images: [
        commonsImage("Pashupatinath Temple Kathmandu.jpg"),
        commonsImage("Boudhanath Stupa Kathmandu Nepal.jpg"),
        commonsImage("Phewa Lake Pokhara.jpg"),
        commonsImage("Annapurna range from Pokhara.jpg"),
        commonsImage("Kathmandu Durbar Square.jpg")
      ]
    },
    {
      matches: ["bhutan", "paro", "thimphu"],
      images: [
        commonsImage("Paro Taktsang Bhutan.jpg"),
        commonsImage("Punakha Dzong Bhutan.jpg"),
        commonsImage("Tashichho Dzong Thimphu.jpg"),
        commonsImage("Dochula Pass Bhutan.jpg"),
        commonsImage("Buddha Dordenma Bhutan.jpg")
      ]
    },
    {
      matches: ["maldives"],
      images: [
        commonsImage("Maldives beach.jpg"),
        commonsImage("Water villas in Maldives.jpg"),
        commonsImage("Maldives aerial view.jpg"),
        commonsImage("Coral reef Maldives.jpg"),
        commonsImage("Maldives sunset.jpg")
      ]
    },
    {
      matches: ["bali"],
      images: [
        commonsImage("Tanah Lot Bali Indonesia.jpg"),
        commonsImage("Tegallalang Rice Terrace Bali.jpg"),
        commonsImage("Ulun Danu Beratan Temple Bali.jpg"),
        commonsImage("Uluwatu Temple Bali.jpg"),
        commonsImage("Kuta Beach Bali.jpg")
      ]
    },
    {
      matches: ["sri lanka", "colombo", "kandy", "ella"],
      images: [
        commonsImage("Sigiriya Sri Lanka.jpg"),
        commonsImage("Temple of the Tooth Kandy.jpg"),
        commonsImage("Nine Arches Bridge Sri Lanka.jpg"),
        commonsImage("Galle Fort Sri Lanka.jpg"),
        commonsImage("Sri Lanka beach.jpg")
      ]
    },
    {
      matches: ["santorini"],
      images: [
        commonsImage("Oia Santorini Greece.jpg"),
        commonsImage("Blue domed church in Oia, Santorini.jpg"),
        commonsImage("Red Beach Santorini.jpg"),
        commonsImage("Santorini caldera Greece.jpg"),
        commonsImage("Fira Santorini Greece.jpg")
      ]
    }
  ];

function getDestinationImages(title: string): string[] {
  const normalizedTitle = title.toLowerCase().trim();

  const destination = destinationImageSets.find(({ matches }) =>
    matches.some((place) => normalizedTitle.includes(place))
  );

  if (destination) {
    return destination.images;
  }

  // Unknown destinations intentionally use travel-neutral photographs.
  // Add a dedicated entry above whenever a new package is introduced.
  return [
    commonsImage("World map blank without borders.svg"),
    commonsImage("Airplane wing over clouds.jpg"),
    commonsImage("Travel luggage.jpg"),
    commonsImage("Tourist information sign.jpg")
  ];
}

const customHighlights: Record<string, TourHighlight[]> = {
  "international-1": [
    { title: "Dhow Cruise", image: "https://hldak.mmtcdn.com/prod-acme-image/system/product_media/o/ACME803268/Media_64933Dhow%20Cruise%20Dinner%20-%20Marina.jpg" },
    { title: "Desert Safari", image: "https://plus.unsplash.com/premium_photo-1697729969603-1155a03ee785?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { title: "Burj Khalifa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmw7C8Rs8SfGBE8Orw_RDiLGbqfWPsiOhroCbf_qkBA&s=10" },
    { title: "Dubai Frame", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUNqBWjYsgsWX9StwzfB475te1aRKDhrj_Q7yv7DOtQ&s=10" }
  ],
  "international-2": [
    { title: "Genting Skyway", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23SFmKIPMMQmWazzWux2JtzlRukdz62ZGkx8MhAUW7g&s=10" },
    { title: "Batu Caves", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKt-w-yPTuhJa_LfuBr3bzvbu_8IiHgJFu7dFFFmHO9Q&s=10" },
    { title: "Gardens by the Bay", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3amKFTkxdx6tLs9fmvTOBN5yYvc_vX6dtRC6TvFkpyg&s=10" },
    { title: "Sentosa", image: "https://www.pelago.co/img/collections/sentosa-island/1016-0548_sentosa-island-singapore-xlarge.webp" },
    { title: "Universal Studios", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPF1hSMSbXFUFAB5PEd-qdb1dEEyJotHYTWt1NzS907g&s=10" }
  ],
  "international-3": [
    { title: "Bangkok City", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdq7Up5j-FpI8sj-sQOEOMn62Xf6diYkUs_d5Lmdwdw&s=10" }
  ],
  "international-4": [
    { title: "Pashupatinath", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKK3BOnwzSQRownIKwhVj2LTJcwadRHICFxv0OIV18cw&s=10" },
    { title: "Chitwan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4axdlI1cXHte3TSW1MQkhvbeFO408WrZ5on_4aH6fg&s=10" }
  ],
  "international-5": [
    { title: "New York", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fMb8_1wGMYp_i44Qyp6v6qdlxWBOadt0nDCGdG9RPQ&s=10" },
    { title: "Washington DC", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtE6kG9K_kfilbiTxEZLVMrP53nKETEPekCpifVAg7w&s=10" },
    { title: "Orlando", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNH77jECyTe3uUJEZ47YPl3dnxVbEJNUMoYWDnkfYbJA&s=10" },
    { title: "Miami", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsozmYsOXCoXXVx_1z27EZEFIgiR_QKiidTpCN7dLYQg&s=10" }
  ],
  "international-6": [
    { title: "London", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmzp1WvexoJ__Oj9qsPVy0k-6WKnDDhxo74Y1mDd1Gg&s" },
    { title: "Edinburgh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbvlvIpIO8Es8lG7xEazDJkyLfVVCQY3MLkdbmZ1KAg&s=10" },
    { title: "Stonehenge", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFSIQ5WaNmCGZPf-HHgurC-PX2qsrvD3JNbj_k-u8BQ&s=10" },
    { title: "Windsor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JYtO3HmimJRAc4X4pjQDz1hPB0Gkb0q2nGOCEMMJKw&s=10" }
  ],
  "international-7": [
    { title: "Hanoi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4bWKG25C8WVBLxl5LlzAFdlmSNzuustTKtzZt1PIxA&s=10" },
    { title: "Halong Bay", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowqiEljOPDdk9IcirADa4fRFum1A_tenizRo260pvOg&s=10" },
    { title: "Siem Reap", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIsDiLOLHoVliTzg8dO6odVwuJJXQuR8E1yyFUIDMbA&s=10" },
    { title: "Angkor Wat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTYO2zlaypwrxglYC_vll5p6peF2XoySNlquBfYxLrA&s=10" }
  ],
  "international-8": [
    { title: "Hong Kong Island", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcdtdCIYSyfCnEguF47wfHTV9jRwqW6fPj7SlPT4EoQ&s=10" },
    { title: "Kowloon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquea1lR9DQrsvaqiy05UOPsAEWlMHwAmMjfJiPP8o5g&s=10" },
    { title: "Disneyland", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed2Ec4Y6Y-Xrc9a0J3yK2fEfowhc1Er2FsH6T3curRg&s=10" },
    { title: "Lantau", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3N2_TbEZVpKv7x2WWSe3QBqLCk4XI5EfzmAonywkh2Q&s=10" }
  ],
  "international-9": [
    { title: "Catamaran Cruise", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbrwgT_kq3DXv9HzSzYGYPgu0B9bJ6YQr0YBbRs71vw&s=10" }
  ],
  "international-10": [
    { title: "Thimphu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQnHRaowTulsW5_UI0cuhUYQkxS3JvPhUoAxVhCuFVw&s=10" },
    { title: "Jakar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5aUDp6ixPF8XVBHvAaxM5hswHMqh05pagW7w8vQG_Q&s=10" },
    { title: "Wangdue Phodrang", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxR4D27x6W2BaxVsm0efJ-kt1vQc1RUfkm6CLMKvrGw&s=10" },
    { title: "Paro Chhu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOLnkH-BSL2g9OXaAjzcDA4V7a3O4mpe6orLrIyw_Xw&s=10" },
    { title: "Trongsa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSA4KoqHtETvQ0fF_FBNyPaXW9nP9uFAjA7J0zH78Qlg&s=10" }
  ],
  "international-11": [
    { title: "Embudhu Finolhu Island", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0Y98r1P-LsUFJIy3AhBG3a0fOGj2Wev1oBD74wYu8Q&s=10" },
    { title: "Baros Island", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCD79uFTaswGaWIQMHA7nFJSWUjxn9GdVmQlPGsPBfSg&s=10" },
    { title: "Maafushi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWtoopH6UC-H0A8mnWlCYe4N9TxBmrbvVKKTOoVvFEQ&s=10" }
  ],
  "international-12": [
    { title: "Kuta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSopqR3v1JWSasixHRDZgCQ0A21fR6e8P4urZeqQwsg&s=10" },
    { title: "Seminyak", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHFU1Ke2kBYk5uSxsuh9LfSnXbdCMF-iaba-ZWN49Yw&s=10" },
    { title: "Nusa Penida", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPj9M7YKIkrnxsvkgxBdbeifG4FjOObAlYIj2boPPLUQ&s=10" }
  ],
  "international-13": [
    { title: "Colombo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweuhwLZzlaC6gUJLTnEZ_GkQvyNZPHfCMS1GEObutog&s=10" },
    { title: "Trincomalee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmOKvcXofe23BtoA0ZPXACaS3f4iEfCvZE6z9ygIUFA&s=10" },
    { title: "Yala National Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SmxE1K7Y1ySukoKVoHZvLoHfJL5p0ogS3StuRz0ONw&s=10" }
  ]
};

// Fallback high-quality data generator
export function getTourDetailInfo(
  type: string,
  id: number,
  tourTitle: string,
  tourLocations: string[],
  durationStr: string,
  _priceStr: string,
  country: string,
  _imageStr: string
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
    const numbers = durationStr.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      daysCount = Math.max(...numbers.map(n => parseInt(n, 10)));
    }
  }

  // Set default details based on place
  const title = tourTitle.split('.')[0]; // remove trailing full stop
  const finalTitle = title.includes("Discover") || title.includes("Explore") ? title : `Discover ${title}`;
  const destImages = getDestinationImages(tourTitle);

  // Itinerary generation
  const itinerary: ItineraryDay[] = [];
  for (let i = 1; i <= daysCount; i++) {
    if (i === 1) {
      itinerary.push({
        day: i,
        title: `Arrival at ${tourLocations[0] || country}`,
        description: `Arrive and meet our representative. Transfer to your premium hotel/resort in ${tourLocations[0] || country}. Rest and relax for the evening, adjusting to the beautiful climate.`,
        image: destImages[0],
        points: ["Meet & Greet", "Transfer to Hotel", "Welcome Drinks", "Evening at Leisure"]
      });
    } else if (i === daysCount) {
      itinerary.push({
        day: i,
        title: `Departure from ${tourLocations[tourLocations.length - 1] || country}`,
        description: `Enjoy a delicious buffet breakfast at your hotel. Do some last-minute shopping and souvenir collection. Check out and transfer to the airport or station for your return journey home.`,
        image: destImages[(daysCount - 1) % destImages.length],
        points: ["Breakfast at Hotel", "Souvenir Shopping", "Airport/Station Drop", "End of Open Sky Tour"]
      });
    } else {
      const loc = tourLocations[(i - 1) % tourLocations.length] || country;
      itinerary.push({
        day: i,
        title: `Explore ${loc}`,
        description: `A full day of sightseeing in and around ${loc}. Experience the scenic landscapes, local history, and cultural attractions. Capture memories, try local cuisines, and shop in traditional street markets.`,
        image: destImages[i % destImages.length],
        points: [`Guided tours in ${loc}`, "Historical sights visit", "Photography and local walks", "Local restaurant lunch"]
      });
    }
  }

  // Highlights generation
  const highlights: TourHighlight[] = customHighlights[key] || tourLocations.map((loc, idx) => ({
    title: loc,
    image: destImages[idx % destImages.length]
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
        image: destImages[0],
        tags: isMaldives ? ["5 Star Resort", "Water Villa", "Infinity Pool"] : ["4 Star Hotel", "City Center", "Free WiFi"]
      },
      {
        name: isMaldives ? "Paradise Island Resort" : "Orchid Deluxe Stay",
        location: tourLocations[1] || tourLocations[0] || country,
        rating: isMaldives ? 5 : 3,
        image: destImages[1 % destImages.length],
        tags: isMaldives ? ["Private Beach", "Spa & Wellness", "All Inclusive"] : ["3 Star Hotel", "Close to Sights", "Eco Friendly"]
      }
    ]
    : [
      { name: "Grand Vista Resort & Spa", location: tourLocations[0] || country, rating: 4, image: destImages[0], tags: ["Top Rated", "Infinity Pool", "Free Breakfast"] },
      { name: "Premium Plaza Residency", location: tourLocations[1] || tourLocations[0] || country, rating: 4, image: destImages[1 % destImages.length], tags: ["Modern Stay", "Close to Sights", "Eco Friendly"] }
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
    gallery: [...new Set(destImages)].slice(0, 8),
    faqs: [
      { question: "Is this package suitable for families?", answer: "Yes, all our packages are curated with safety and comfort in mind, making them perfect for families, couples, and group vacations." },
      { question: "Can I choose my own hotel standard?", answer: "Yes! You can request upgrades to 5-star luxury resorts, private villas, or cost-effective budget stays. Contact our trip planner to customize." },
      { question: "Are flights included in this price?", answer: "By default, our prices cover local stays, cars, and activities. However, we can assist with domestic and international flight bookings at current real-time prices." }
    ]
  };
}
