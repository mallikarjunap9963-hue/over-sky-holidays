import * as Icons from '../components/icons/Icons';
import type { HeroSlide, NavLink, SearchTab, ExperienceTab, ExperienceItem, SafetySlide, AttractionTab, AttractionPackage, ActivityItem, ReviewSource, TravelerReview } from '../types';

export const slides: HeroSlide[] = [
  {
    id: 1,
    location: "Italy",
    title: "Let's journey and discover a place.",
    description:
      "One stop destination for all your Tours & Travels needs. Discover unforgettable domestic and international holidays with complete travel support.",
    image:
      "/hero.jpg",
  },
  {
    id: 2,
    location: "Maldives",
    title: "The world is waiting for you.",
    description:
      "Explore beautiful destinations, relaxing stays and customized holiday packages planned around your travel needs and budget.",
    image:
      "/hero2.jpg",
  },
  {
    id: 3,
    location: "Manali",
    title: "Travel farther. Experience more.",
    description:
      "Enjoy complete travel solutions including tours, flight tickets, hotel booking, passport support and visa assistance.",
    image:
      "/hero3.avif"
  },
];

export const navLinks: NavLink[] = [
  {
    label: "HOME",
    href: "#home",

  },
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "DOMESTIC TOURS",
    href: "#domestic-tours",

  },
  {
    label: "INTERNATIONAL TOURS",
    href: "#international-tours",

  },
  {
    label: "SERVICES",
    href: "#services",

  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export const searchTabs: SearchTab[] = [
  "Tour",
  "Hotel",
  "Visa",
  "Activities",
  "Transport",
];

export const socialLinks = [
  {
    label: "Facebook",
    icon: <Icons.FacebookIcon />,
  },
  {
    label: "X",
    icon: <Icons.XIcon />,
  },
  {
    label: "Pinterest",
    icon: <Icons.PinterestIcon />,
  },
  {
    label: "Instagram",
    icon: <Icons.InstagramIcon />,
  },
];

export const experienceTabs: ExperienceTab[] = ["Tour Packages", "Hotel", "Transport"];

export const experienceItems: Record<ExperienceTab, ExperienceItem[]> = {
  "Tour Packages": [
    {
      id: 1,
      duration: "4 DAYS / 3 NIGHTS",
      country: "INDIA",
      type: "GOA TOUR",
      title: "Discover Goa's Beaches, Culture And Coastal Beauty.",
      locations: ["North Goa", "South Goa", "Calangute", "Panaji"],
      price: "₹19,999",
      oldPrice: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 2,
      duration: "6 DAYS / 5 NIGHTS",
      country: "INDIA",
      type: "HILL TOUR",
      title: "Explore Kullu, Manali And Shimla's Mountain Beauty.",
      locations: ["Kullu", "Manali", "Solang Valley", "Shimla"],
      price: "₹29,999",
      oldPrice: "₹34,999",
      image:
        "https://keralataxi.westernholidays.in/wp-content/uploads/2026/02/tropical-beach-with-palm-sri-lanka-2048x1363.jpg",
    },
    {
      id: 3,
      duration: "5 DAYS / 4 NIGHTS",
      country: "INDIA",
      type: "KERALA TOUR",
      title: "Experience Kerala Backwaters, Hills And Green Landscapes.",
      locations: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      price: "₹24,999",
      oldPrice: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 4,
      duration: "5 DAYS / 4 NIGHTS",
      country: "UAE",
      type: "DUBAI TOUR",
      title: "Experience Dubai's Skyline, Desert And Luxury Attractions.",
      locations: ["Dubai City", "Burj Khalifa", "Desert Safari", "Marina"],
      price: "₹39,999",
      oldPrice: "₹45,999",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 5,
      duration: "6 DAYS / 5 NIGHTS",
      country: "ASIA",
      type: "SINGAPORE TOUR",
      title: "Enjoy Singapore And Malaysia's Modern City Attractions.",
      locations: ["Singapore", "Sentosa", "Kuala Lumpur", "Genting"],
      price: "₹49,999",
      oldPrice: "₹56,999",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 6,
      duration: "5 DAYS / 4 NIGHTS",
      country: "MALDIVES",
      type: "ISLAND TOUR",
      title: "Relax In Maldives With Beaches, Resorts And Blue Lagoons.",
      locations: ["Male", "Island Resort", "Beach Villa", "Water Activities"],
      price: "₹54,999",
      oldPrice: "₹62,999",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=90",
    },
  ],

  Hotel: [
    {
      id: 1,
      duration: "3 STAR HOTEL",
      country: "GOA",
      type: "BEACH STAY",
      title: "Comfortable Beachside Hotel Stay In Beautiful Goa.",
      locations: ["Breakfast", "Wi-Fi", "Swimming Pool", "Near Beach"],
      price: "₹3,499",
      oldPrice: "₹4,499",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 2,
      duration: "4 STAR HOTEL",
      country: "MANALI",
      type: "MOUNTAIN STAY",
      title: "Premium Mountain View Hotel For A Peaceful Holiday.",
      locations: ["Breakfast", "Mountain View", "Parking", "Room Service"],
      price: "₹4,999",
      oldPrice: "₹6,499",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 3,
      duration: "4 STAR RESORT",
      country: "KERALA",
      type: "BACKWATER STAY",
      title: "Relaxing Kerala Resort Surrounded By Green Landscapes.",
      locations: ["Breakfast", "Pool", "Lake View", "Restaurant"],
      price: "₹5,499",
      oldPrice: "₹6,999",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 4,
      duration: "5 STAR HOTEL",
      country: "DUBAI",
      type: "LUXURY STAY",
      title: "Luxury Dubai Hotel With Skyline And City Views.",
      locations: ["Breakfast", "City View", "Gym", "Airport Transfer"],
      price: "₹9,999",
      oldPrice: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 5,
      duration: "4 STAR HOTEL",
      country: "SINGAPORE",
      type: "CITY STAY",
      title: "Modern Singapore Hotel Close To Major Attractions.",
      locations: ["Breakfast", "Wi-Fi", "City Centre", "Pool"],
      price: "₹8,499",
      oldPrice: "₹10,499",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 6,
      duration: "ISLAND RESORT",
      country: "MALDIVES",
      type: "WATER VILLA",
      title: "Private Water Villa Experience In The Maldives.",
      locations: ["All Meals", "Ocean View", "Transfer", "Water Sports"],
      price: "₹18,999",
      oldPrice: "₹22,999",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=90",
    },
  ],

  Transport: [
    {
      id: 1,
      duration: "AIRPORT TRANSFER",
      country: "HYDERABAD",
      type: "PRIVATE CAB",
      title: "Safe And Comfortable Airport Pickup And Drop Service.",
      locations: ["Airport", "Hotel", "Private Cab", "24/7 Support"],
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 2,
      duration: "FULL DAY",
      country: "GOA",
      type: "SIGHTSEEING CAB",
      title: "Explore Goa With A Private Full-Day Sightseeing Cab.",
      locations: ["North Goa", "South Goa", "Driver", "Pickup & Drop"],
      price: "₹3,499",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 3,
      duration: "6 DAYS",
      country: "MANALI",
      type: "TOUR VEHICLE",
      title: "Private Vehicle For Manali And Shimla Tour Packages.",
      locations: ["Delhi", "Manali", "Shimla", "Local Sightseeing"],
      price: "₹18,999",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 4,
      duration: "5 DAYS",
      country: "KERALA",
      type: "PRIVATE VEHICLE",
      title: "Comfortable Vehicle For Complete Kerala Sightseeing.",
      locations: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      price: "₹16,999",
      image:
        "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 5,
      duration: "CITY TRANSFER",
      country: "DUBAI",
      type: "PRIVATE TRANSFER",
      title: "Dubai Airport And Hotel Transfer With Professional Driver.",
      locations: ["Dubai Airport", "Hotel", "Private Car", "Meet & Greet"],
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 6,
      duration: "GROUP TRAVEL",
      country: "INDIA",
      type: "TOUR BUS",
      title: "Comfortable Group Bus Service For Tours And Events.",
      locations: ["AC Bus", "Driver", "Group Travel", "Multiple Cities"],
      price: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=90",
    },
  ],
};

export const safetySlides: SafetySlide[] = [
  {
    id: 1,
    subtitle: "Our Facility",
    title: "Finest Safety Systems",
    description:
      "Your safety and comfort are our highest priorities. Open Sky Holidays carefully coordinates every journey with trusted travel partners, verified accommodation, clear documentation support and dependable assistance throughout your trip.",
    points: [
      "Travel Alerts and Registration",
      "Health and Medical Security",
      "Travel Documentation",
      "Money and Payment",
      "Transportation Security",
      "Local Knowledge Guide",
    ],
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: 2,
    subtitle: "Complete Assistance",
    title: "Travel Support At Every Step",
    description:
      "From planning and booking to completing your journey, our experienced team provides complete assistance for tours, flights, hotels, passports, visas and customized holiday packages.",
    points: [
      "24/7 Customer Assistance",
      "Verified Hotels and Partners",
      "Airport Pickup and Drop",
      "Customized Tour Planning",
      "Transparent Travel Guidance",
      "Domestic and International Support",
    ],
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=90",
  },
];

export const attractionTabs: {
  name: AttractionTab;
  image: string;
}[] = [
    {
      name: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Singapore",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Kashmir",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=90",
    },
  ];

export const attractionPackages: Record<AttractionTab, AttractionPackage[]> = {
  Kerala: [
    {
      id: 1,
      duration: "6 DAYS / 5 NIGHTS",
      country: "INDIA",
      tourType: "KERALA TOUR",
      title: "Experience Kerala's Backwaters, Hills And Green Landscapes.",
      locations: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      price: "₹29,999",
      oldPrice: "₹34,999",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 2,
      duration: "5 DAYS / 4 NIGHTS",
      country: "INDIA",
      tourType: "BACKWATER TOUR",
      title: "Relax In Kerala With Houseboats, Nature And Peaceful Stays.",
      locations: ["Alleppey", "Kumarakom", "Houseboat", "Kochi"],
      price: "₹26,999",
      oldPrice: "₹31,999",
      image:
        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 3,
      duration: "7 DAYS / 6 NIGHTS",
      country: "INDIA",
      tourType: "FAMILY TOUR",
      title: "A Complete Kerala Family Holiday From Hills To Beaches.",
      locations: ["Munnar", "Thekkady", "Alleppey", "Kovalam"],
      price: "₹37,999",
      oldPrice: "₹43,999",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 4,
      duration: "4 DAYS / 3 NIGHTS",
      country: "INDIA",
      tourType: "HILL TOUR",
      title: "Discover Munnar's Tea Gardens, Waterfalls And Mountain Views.",
      locations: ["Munnar", "Tea Gardens", "Waterfalls", "Kochi"],
      price: "₹22,999",
      oldPrice: "₹27,999",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=90",
    },
  ],

  Dubai: [
    {
      id: 1,
      duration: "5 DAYS / 4 NIGHTS",
      country: "UAE",
      tourType: "DUBAI TOUR",
      title: "Experience Dubai's Skyline, Desert And Luxury Attractions.",
      locations: ["Dubai City", "Burj Khalifa", "Desert Safari", "Marina"],
      price: "₹39,999",
      oldPrice: "₹45,999",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 2,
      duration: "6 DAYS / 5 NIGHTS",
      country: "UAE",
      tourType: "FAMILY TOUR",
      title: "A Complete Dubai Family Holiday With Iconic Experiences.",
      locations: ["Dubai Mall", "Aquarium", "Abu Dhabi", "Global Village"],
      price: "₹46,999",
      oldPrice: "₹52,999",
      image:
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 3,
      duration: "4 DAYS / 3 NIGHTS",
      country: "UAE",
      tourType: "CITY TOUR",
      title: "Discover Modern Dubai, Traditional Markets And Desert Beauty.",
      locations: ["Deira", "Jumeirah", "Dubai Frame", "Desert Camp"],
      price: "₹34,999",
      oldPrice: "₹39,999",
      image:
        "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 4,
      duration: "5 DAYS / 4 NIGHTS",
      country: "UAE",
      tourType: "LUXURY TOUR",
      title: "Enjoy Premium Dubai Hotels, Cruises And Luxury Attractions.",
      locations: ["Palm Jumeirah", "Marina", "Cruise", "Burj Khalifa"],
      price: "₹59,999",
      oldPrice: "₹67,999",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=90",
    },
  ],

  Maldives: [
    {
      id: 1,
      duration: "5 DAYS / 4 NIGHTS",
      country: "MALDIVES",
      tourType: "ISLAND TOUR",
      title: "Relax In The Maldives With Beaches, Resorts And Blue Lagoons.",
      locations: ["Male", "Island Resort", "Beach Villa", "Water Sports"],
      price: "₹54,999",
      oldPrice: "₹62,999",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 2,
      duration: "6 DAYS / 5 NIGHTS",
      country: "MALDIVES",
      tourType: "HONEYMOON",
      title: "A Romantic Maldives Water Villa And Island Experience.",
      locations: ["Water Villa", "Candlelight Dinner", "Cruise", "Snorkelling"],
      price: "₹69,999",
      oldPrice: "₹78,999",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 3,
      duration: "4 DAYS / 3 NIGHTS",
      country: "MALDIVES",
      tourType: "BEACH TOUR",
      title: "Discover White Sand Beaches And Crystal-Clear Tropical Water.",
      locations: ["Beach Resort", "Ocean View", "Island Transfer", "All Meals"],
      price: "₹49,999",
      oldPrice: "₹56,999",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 4,
      duration: "5 DAYS / 4 NIGHTS",
      country: "MALDIVES",
      tourType: "PREMIUM TOUR",
      title: "Enjoy A Premium Island Resort With Ocean Adventures.",
      locations: ["Luxury Resort", "Scuba Diving", "Spa", "Ocean Cruise"],
      price: "₹79,999",
      oldPrice: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1400&q=90",
    },
  ],

  Singapore: [
    {
      id: 1,
      duration: "6 DAYS / 5 NIGHTS",
      country: "SINGAPORE",
      tourType: "CITY TOUR",
      title: "Explore Singapore's Modern Attractions And Vibrant City Life.",
      locations: [
        "Marina Bay",
        "Sentosa",
        "Universal Studios",
        "Gardens By The Bay",
      ],
      price: "₹49,999",
      oldPrice: "₹57,999",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 2,
      duration: "7 DAYS / 6 NIGHTS",
      country: "ASIA",
      tourType: "COMBO TOUR",
      title: "Experience Singapore And Malaysia In One Memorable Holiday.",
      locations: ["Singapore", "Kuala Lumpur", "Genting", "Malacca"],
      price: "₹64,999",
      oldPrice: "₹72,999",
      image:
        "https://images.unsplash.com/photo-1496939376851-89342e90adcd?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 3,
      duration: "5 DAYS / 4 NIGHTS",
      country: "SINGAPORE",
      tourType: "FAMILY TOUR",
      title: "A Fun-Filled Singapore Family Tour With World-Class Attractions.",
      locations: ["Sentosa", "Night Safari", "City Tour", "Universal Studios"],
      price: "₹44,999",
      oldPrice: "₹51,999",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 4,
      duration: "4 DAYS / 3 NIGHTS",
      country: "SINGAPORE",
      tourType: "SHORT TOUR",
      title: "Discover Singapore's Iconic Skyline And Cultural Attractions.",
      locations: ["Merlion", "Marina Bay", "Chinatown", "Garden Tour"],
      price: "₹39,999",
      oldPrice: "₹45,999",
      image:
        "https://images.unsplash.com/photo-1538485399081-7c8973a27ca1?auto=format&fit=crop&w=1400&q=90",
    },
  ],

  Kashmir: [
    {
      id: 1,
      duration: "6 DAYS / 5 NIGHTS",
      country: "INDIA",
      tourType: "KASHMIR TOUR",
      title: "Experience Kashmir's Lakes, Valleys And Snow-Capped Mountains.",
      locations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
      price: "₹32,999",
      oldPrice: "₹38,999",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 2,
      duration: "5 DAYS / 4 NIGHTS",
      country: "INDIA",
      tourType: "HONEYMOON",
      title: "A Romantic Kashmir Holiday Surrounded By Natural Beauty.",
      locations: ["Dal Lake", "Houseboat", "Gulmarg", "Mughal Gardens"],
      price: "₹36,999",
      oldPrice: "₹42,999",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 3,
      duration: "7 DAYS / 6 NIGHTS",
      country: "INDIA",
      tourType: "FAMILY TOUR",
      title: "Explore Jammu, Kashmir And Srinagar With Your Family.",
      locations: ["Jammu", "Srinagar", "Pahalgam", "Gulmarg"],
      price: "₹39,999",
      oldPrice: "₹46,999",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 4,
      duration: "4 DAYS / 3 NIGHTS",
      country: "INDIA",
      tourType: "SRINAGAR TOUR",
      title: "Enjoy Srinagar's Houseboats, Gardens And Beautiful Dal Lake.",
      locations: ["Srinagar", "Dal Lake", "Mughal Gardens", "Houseboat"],
      price: "₹24,999",
      oldPrice: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=90",
    },
  ],
};

export const activityItems: ActivityItem[] = [
  {
    name: "Zip lining",
    badge: "Zip lining",
    title: "Thrill Above Ground: The Zip Line Adventure",
    description:
      "Fly above beautiful landscapes, feel the rush of the wind and enjoy an exciting outdoor experience with professional safety support.",
    features: [
      "Treetop Views",
      "Adrenaline Rush",
      "Safety Measures",
      "Nature Immersion",
    ],
    images: [
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/zip-landing-01.jpg",
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/zip-landing-02.jpg",
    ],
  },
  {
    name: "Paragliding",
    badge: "Paragliding",
    title: "Glide Above Beautiful Scenic Landscapes",
    description:
      "Experience the freedom of flight while soaring above valleys, mountains and open landscapes with trained adventure professionals.",
    features: [
      "Scenic Views",
      "Professional Pilots",
      "Safety Equipment",
      "Open Sky Experience",
    ],
    images: [
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/paragliding-01.jpg",
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/paragliding-02.jpg",
    ],
  },
  {
    name: "Bungee Jumping",
    badge: "Bungee Jumping",
    title: "Take The Leap With A Bungee Adventure",
    description:
      "Challenge yourself with an unforgettable jump supported by secure equipment, experienced guides and carefully selected adventure locations.",
    features: [
      "Expert Guidance",
      "Secure Harnesses",
      "Ultimate Thrill",
      "Scenic Locations",
    ],
    images: [
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/bungee-jump-01.jpg",
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/bungee-jump-02.jpg",
    ],
  },
  {
    name: "Ski touring",
    badge: "Ski touring",
    title: "Explore Snow-Covered Landscapes On Skis",
    description:
      "Travel through peaceful snowy terrain, climb scenic mountain routes and enjoy exciting descents through beautiful winter landscapes.",
    features: [
      "Snow Trails",
      "Special Equipment",
      "Mountain Exploration",
      "Physical Adventure",
    ],
    images: [
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/ski-touring-01.jpg",
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/ski-touring-02.jpg",
    ],
  },
  {
    name: "Rafting",
    badge: "Rafting",
    title: "Ride The Rapids On A Rafting Adventure",
    description:
      "Navigate thrilling river rapids with your team and experienced guides while enjoying dramatic scenery and an exciting water adventure.",
    features: [
      "Professional Guides",
      "River Rapids",
      "Team Adventure",
      "Beautiful Scenery",
    ],
    images: [
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/rafting-01.jpg",
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/rafting-02.jpg",
    ],
  },
  {
    name: "Surfing",
    badge: "Surfing",
    title: "Catch The Perfect Wave And Feel The Ocean",
    description:
      "Ride beautiful ocean waves, improve your balance and enjoy a refreshing coastal activity guided by experienced surfing professionals.",
    features: [
      "Wave Riding",
      "Board Options",
      "Professional Training",
      "Ocean Adventure",
    ],
    images: [
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/surfing-01.jpg",
      "https://demo.egenslab.com/html/triprex/preview/assets/img/home1/surfing-02.jpg",
    ],
  },
];

export const reviewTabs: ReviewSource[] = [
  "All Reviews",
  "Tripadvisor",
  "Facebook",
  "Google",
];

export const travelerReviews: TravelerReview[] = [
  {
    id: 1,
    source: "Tripadvisor",
    name: "Rahul Sharma",
    location: "Hyderabad",
    message:
      "Our Kerala family tour was planned perfectly. The hotels, transfers and sightseeing arrangements were comfortable, and the team supported us throughout the journey.",
    rating: 5,
    date: "June 18, 2026",
    time: "10:30 AM",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=90",
  },
  {
    id: 2,
    source: "Facebook",
    name: "Priya Reddy",
    location: "Bengaluru",
    message:
      "We booked our Maldives honeymoon through Open Sky Holidays. The resort was beautiful, the airport transfer was smooth and everything matched the promised package.",
    rating: 5,
    date: "June 10, 2026",
    time: "3:45 PM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=90",
  },
  {
    id: 3,
    source: "Google",
    name: "Arjun Kumar",
    location: "Chennai",
    message:
      "The Dubai package was very well organized. Visa assistance, flight guidance, hotel booking and desert safari arrangements were handled professionally.",
    rating: 5,
    date: "May 29, 2026",
    time: "7:15 PM",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=90",
  },
  {
    id: 4,
    source: "Tripadvisor",
    name: "Sneha Patel",
    location: "Mumbai",
    message:
      "The Kashmir trip was memorable. Our itinerary had the right balance of sightseeing and free time, and the hotel selections were excellent.",
    rating: 5,
    date: "May 20, 2026",
    time: "11:20 AM",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=90",
  },
  {
    id: 5,
    source: "Facebook",
    name: "Vikram Rao",
    location: "Vijayawada",
    message:
      "Open Sky Holidays created a customized Manali and Shimla package for our group. The vehicle, accommodation and local sightseeing were arranged very well.",
    rating: 4,
    date: "May 12, 2026",
    time: "5:40 PM",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=90",
  },
  {
    id: 6,
    source: "Google",
    name: "Aisha Khan",
    location: "Hyderabad",
    message:
      "The Singapore and Malaysia tour was smooth from beginning to end. The team communicated clearly and helped us whenever we needed assistance.",
    rating: 5,
    date: "April 28, 2026",
    time: "9:10 AM",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=90",
  },
  {
    id: 7,
    source: "Tripadvisor",
    name: "Kiran Reddy",
    location: "Warangal",
    message:
      "Our Goa holiday was affordable and enjoyable. The hotel was close to the beach, and the sightseeing driver was friendly and punctual.",
    rating: 4,
    date: "April 17, 2026",
    time: "6:50 PM",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=90",
  },
  {
    id: 8,
    source: "Google",
    name: "Meera Nair",
    location: "Kochi",
    message:
      "The passport and visa guidance was clear and helpful. Their team explained every document and kept us updated during the complete process.",
    rating: 5,
    date: "April 8, 2026",
    time: "2:25 PM",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=90",
  },
];

