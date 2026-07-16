import * as Icons from '../components/icons/Icons';
import type { HeroSlide, NavLink, SearchTab, ExperienceTab, ExperienceItem, SafetySlide, AttractionTab, AttractionPackage, ActivityItem, ReviewSource, TravelerReview, BlogPost } from '../types';

import homePageFacilityImg from '../assets/home page facilty.png';
import homePageAssistanceImg from '../assets/home page assitence.png';

export const slides: HeroSlide[] = [
  {
    id: 1,
    location: "Italy",
    title: "Luxury Meets Vibrant City Life",
    description: "Experience the perfect blend of tropical paradise and urban excitement. Relax in the crystal-clear waters of the Maldives, then explore the vibrant streets, magnificent temples, and world-class shopping of Bangkok.",
    image:
      "/hero.jpg",
  },
  {
    id: 2,
    location: "Maldives",
    title: "Where Spirituality Meets the Himalayas",
    description:
      "Discover the peaceful banks of the Ganges in Rishikesh and seek divine blessings at the sacred Badrinath Temple. Experience breathtaking Himalayan landscapes, ancient traditions, and an unforgettable spiritual journey.",
    image:
      "/hero2.jpg",
  },
  {
    id: 3,
    location: "Manali",
    title: "Modern Luxury Meets Timeless Serenity",
    description:
      "Experience the perfect contrast of modern luxury and timeless tranquility. Explore Dubai's iconic skyline, world-class attractions, and desert adventures before discovering Bhutan's peaceful monasteries, breathtaking mountains, and rich cultural heritage.", image:
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
    href: "#about-us",
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
  "Domestic",
  "International",
  "Visa",
  "Flight Tickets",
  "Passport",
];

export const socialLinks = [
  {
    label: "Facebook",
    icon: <Icons.FacebookIcon />,
    href: "https://www.facebook.com/openskyholidays",
  },
  {
    label: "X",
    icon: <Icons.XIcon />,
    href: "https://x.com/openskyholidays",
  },
  {
    label: "WhatsApp",
    icon: <Icons.WhatsappIcon />,
    href: "https://wa.me/919908117712",
  },
  {
    label: "Instagram",
    icon: <Icons.InstagramIcon />,
    href: "https://www.instagram.com/openskyholidays/",
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
      title: "Goa Tour Package",
      locations: ["Anjuna Beach", "Baga Beach", "Old Goa Church", "Fort Aguada", "Night Life"],
      price: "₹19,999",
      oldPrice: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 2,
      duration: "4 DAYS / 3 NIGHTS",
      country: "INDIA",
      type: "HILL TOUR",
      title: "Kullu Manali + Shimla",
      locations: ["Hadimba Temple", "Solang Valley", "Mall Road", "Jakhoo Temple", "Kufri"],
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
      title: "Kerala Backwaters & Hills",
      locations: ["Munnar", "Alleppey", "Thekkady", "Kochi Fort", "Wayanad"],
      price: "₹24,999",
      oldPrice: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 4,
      duration: "4 DAYS / 3 NIGHTS",
      country: "UAE",
      type: "DUBAI TOUR",
      title: "Dubai Tour Package",
      locations: ["Dhow Cruise", "Desert Safari", "Dubai Mall", "Burj Khalifa", "Dubai Frame"],
      price: "₹39,999",
      oldPrice: "₹45,999",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 5,
      duration: "5 DAYS / 4 NIGHTS",
      country: "ASIA",
      type: "SINGAPORE TOUR",
      title: "Singapore + Malaysia",
      locations: ["Genting Skyway", "Batu Caves", "Gardens by the Bay", "Sentosa", "Universal Studios"],
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
      title: "Maldives Island Getaway",
      locations: ["Kanuhura Island", "Embudhu Finolhu Island", "Baros Island", "Maafushi", "Male City"],
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
    image: homePageFacilityImg,
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
    image: homePageAssistanceImg,
  },
];

export const attractionTabs: {
  name: AttractionTab;
  image: string;
}[] = [
    {
      name: "Domestic",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "International",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=90",
    },
  ];

export const attractionPackages: Record<AttractionTab, AttractionPackage[]> = {
  Domestic: [
    {
      id: 1,
      duration: "4 Nights / 5 Days",
      country: "INDIA",
      tourType: "KERALA TOUR",
      title: "Kerala",
      locations: ["Munnar", "Alleppey", "Thekkady", "Kochi Fort", "Wayanad"],
      price: "₹29,999",
      oldPrice: "₹34,999",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 2,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "J&K & SRINAGAR",
      title: "Jammu Kashmir & Srinagar",
      locations: ["Tulip Garden", "Ropeway", "River Rafting", "Gulmarg", "Dal Lake", "Shankaracharya Hill"],
      price: "₹32,999",
      oldPrice: "₹38,999",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 3,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "GOA BEACH TOUR",
      title: "Goa",
      locations: ["Anjuna Beach", "Baga Beach", "Old Goa Church", "Fort Aguada", "Night Life"],
      price: "₹18,999",
      oldPrice: "₹22,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWp7AFJh6O7b3Hhlh1lkcCRGyf0UtX5i19KGdA1nN6Q&s=10",
    },
    {
      id: 4,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "KULLU & MANALI",
      title: "Kullu Manali & Shimla",
      locations: ["Hadimba Temple", "Solang Valley", "Mall Road", "Jakhoo Temple", "Kufri"],
      price: "₹21,999",
      oldPrice: "₹26,999",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 5,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "GOLDEN TRIANGLE",
      title: "Delhi & Agra",
      locations: ["Akshardham", "Lotus Temple", "Rashtrapati Bhavan", "Qutub Minar", "India Gate", "Red Fort"],
      price: "₹15,999",
      oldPrice: "₹19,999",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 6,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "SOUTHERN HILLS",
      title: "Ooty & Mysore & Kodaikanal",
      locations: ["Botanical Garden", "Needle View Point", "Ooty National Park", "Srirangapatna", "Brindavan Gardens"],
      price: "₹19,999",
      oldPrice: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 7,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "EASTERN HIMALAYAS",
      title: "Nainital & Uttarakhand",
      locations: ["Naini Lake", "Naina Devi Temple", "Ropeway", "Mussoorie", "Chopta"],
      price: "₹27,999",
      oldPrice: "₹32,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvKi5jmUAXtwRVFxdXTnqbxmyEVxHFuzbZA7mO5RvHA&s=10",
    },
    {
      id: 8,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "NORTH EAST HYBRID",
      title: "Meghalaya",
      locations: ["Shillong", "Double Decker Root Bridge", "Cherrapunji", "Elephant Falls", "Jaintia Hills"],
      price: "₹26,999",
      oldPrice: "₹31,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyd9JmrMmwza-bZJIOHXztA2bafOWl_oUw_NUi9fvwuA&s=10",
    },
    {
      id: 9,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "RAJASTHAN ROYAL",
      title: "Rajasthan",
      locations: ["Jaipur", "Udaipur", "Jaisalmer", "Mount Abu", "Jodhpur"],
      price: "₹23,999",
      oldPrice: "₹28,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMj-RJTnRLMhZafT1KtjKf9ze-5-aj4PJn5TDBGzuVJA&s=10",
    },
    {
      id: 10,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "HILL TOUR",
      title: "Kodaikanal & Meghalaya ",
      locations: ["Kodaikanal Lake", "Trekking", "Dolphin Nose", "Batasia Loop", "Tiger Hill"],
      price: "₹24,999",
      oldPrice: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 11,
      duration: "6 DAYS / 5 NIGHTS",
      country: "INDIA",
      tourType: "ANDAMAN TOUR",
      title: "Andaman & Nicobar Islands",
      locations: ["Port Blair", "Havelock Island", "Neil Island", "Radhanagar"],
      price: "₹24,999",
      oldPrice: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=90",
    },
    {
      id: 12,
      duration: "6 Nights / 7 Days",
      country: "INDIA",
      tourType: "CHAR DHAM YATRA",
      title: "Rishikesh & Kedarnath & Badrinath",
      locations: ["Gangotri", "Yamunotri", "Dev Prayag", "Vishnu Prayag", "Surya Kund", "Rudra Prayag"],
      price: "₹24,999",
      oldPrice: "₹29,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAk3ajgEQ43baqp0slnWXmB1ioFvjCfdGzH3ltIAWCBg&s=10",
    },
    {
      id: 13,
      duration: "3 Nights / 4 Days",
      country: "INDIA",
      tourType: "BALAJI DARSHAN",
      title: "Tirupathi",
      locations: ["Tiruchanur Temple", "Srikalahasti", "Kanipakam Temple", "Golden Temple, Vellore", "Srinivasa Mangapuram"],
      price: "₹6,999",
      oldPrice: "₹8,999",
      image:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTCVjo4GQCJp8NUh06C9bBaITU33WQ3hUHEVibUNygmp3_t-r-uw17TGZlWx1_I_7ET2pc0sh3Vd2jyffliRc3CR6M&s=19",
    },
    {
      id: 14,
      duration: "4 DAYS / 3 NIGHTS",
      country: "INDIA",
      tourType: "GANGES YATRA",
      title: "Rishikesh & Haridwar",
      locations: ["Haridwar", "Rishikesh", "Ganga Aarti", "Laxman Jhula"],
      price: "₹9,999",
      oldPrice: "₹12,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT717sJbTwj02-FZSuMu_ICE7UkaDpxWSrTL8o5ycaj6g&s=10",
    },
  ],

  International: [
    {
      id: 1,
      duration: "3 Nights / 4 Days",
      country: "UAE",
      tourType: "DUBAI TOUR",
      title: "Dubai",
      locations: ["Dhow Cruise", "Desert Safari", "Dubai Mall", "Burj Khalifa", "Dubai Frame"],
      price: "₹39,999",
      oldPrice: "₹45,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMg995NfNXNG2qg-HLK0P26zAk0inJBPjEakKlF7oWw&s=10",
    },
    {
      id: 2,
      duration: "4 Nights / 5 Days",
      country: "SINGAPORE",
      tourType: "CITY TOUR",
      title: "Singapore + Malaysia",
      locations: ["Genting Skyway", "Batu Caves", "Gardens by the Bay", "Sentosa", "Universal Studios"],
      price: "₹49,999",
      oldPrice: "₹57,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWq-Y_DHj3Agjt_K6ymILpiQ3j5E6216jsx5HvWayDw&s=10",
    },
    {
      id: 3,
      duration: "4 Nights / 5 Days",
      country: "THAILAND",
      tourType: "BANGKOK LEISURE",
      title: "Bangkok",
      locations: ["Bangkok City", "Pattaya", "Phuket", "James Bond Island", "Night Life"],
      price: "₹28,999",
      oldPrice: "₹33,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHJwKE_qh33v0rPkR003M_xWSz-fF5rjt1vDAa5mpeA&s=10",
    },
    {
      id: 4,
      duration: "5 Nights / 6 Days",
      country: "NEPAL",
      tourType: "NEPAL TOUR",
      title: "Nepal",
      locations: ["Muktinath", "Pashupatinath", "Pokhara", "Chitwan", "Lumbini"],
      price: "₹36,999",
      oldPrice: "₹42,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9mdZmz3xSGNo2NLaBx6DqZu_Cx3vbJNqei8eJYXXgg&s=10",
    },
    {
      id: 5,
      duration: "8 DAYS / 7 NIGHTS",
      country: "USA",
      tourType: "AMERICAN DREAM",
      title: "USA",
      locations: ["New York", "Washington DC", "Orlando", "Miami"],
      price: "₹1,49,999",
      oldPrice: "₹1,69,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dq7PUWlSePLmHuNFfS4rnIhfSf3WAX7oC--JOMs9-w&s=10",
    },
    {
      id: 6,
      duration: "7 DAYS / 6 NIGHTS",
      country: "UNITED KINGDOM",
      tourType: "UK CLASSIC",
      title: "United Kingdom (UK)",
      locations: ["London", "Edinburgh", "Stonehenge", "Windsor"],
      price: "₹1,29,999",
      oldPrice: "₹1,49,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAH8UeTLaK96adAhgVKhBARhdpKcZxCQMhHrDmqjVheA&s=10",
    },
    {
      id: 7,
      duration: "6 DAYS / 5 NIGHTS",
      country: "ASIA EXPLORER",
      tourType: "VIETNAM & CAMBODIA",
      title: "Vietnam & Cambodia",
      locations: ["Hanoi", "Halong Bay", "Siem Reap", "Angkor Wat"],
      price: "₹42,999",
      oldPrice: "₹49,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLJpgSLFyQaYnQk8XesTpVf47EtnDl8LEXHc-YhsXBg&s=10",
    },
    {
      id: 8,
      duration: "5 DAYS / 4 NIGHTS",
      country: "HONG KONG",
      tourType: "CITY EXCURSION",
      title: "Hong Kong",
      locations: ["Hong Kong Island", "Kowloon", "Disneyland", "Lantau"],
      price: "₹45,999",
      oldPrice: "₹52,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26eYpQpb2euHgWX8STC6gTLRRncNlPIUxE0K1g_hh0Q&s=10",
    },
    {
      id: 9,
      duration: "5 Nights / 6 Days",
      country: "GREECE",
      tourType: "SANTORINI ESCAPE",
      title: "Santorini Escape",
      locations: ["Oia Sunset", "Blue Dome Churches", "Red Beach", "Wine Tasting", "Catamaran Cruise"],
      price: "₹1,24,999",
      oldPrice: "₹1,49,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanCTJqo3BCzwsKF9u5TEteJEV9BxK8vZiRFKoDCr9Og&s=10",
    },
    {
      id: 10,
      duration: "5 Nights / 6 Days",
      country: "BHUTAN",
      tourType: "BHUTAN TOUR",
      title: "Bhutan",
      locations: ["Thimphu", "Jakar", "Wangdue Phodrang", "Paro Chhu", "Trongsa"],
      price: "₹34,999",
      oldPrice: "₹39,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WteWAec68tmeHIyEu4E0Er6duTe3x0WPFrlHRzqB4A&s=10",
    },
    {
      id: 11,
      duration: "4 Nights / 5 Days",
      country: "MALDIVES",
      tourType: "ISLAND RESORT",
      title: "Maldives",
      locations: ["Kanuhura Island", "Embudhu Finolhu Island", "Baros Island", "Maafushi", "Male City"],
      price: "₹54,999",
      oldPrice: "₹62,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2-JWSugrT2UegcwJlCVsJ1y-Ha35B3W9F0_1gRrBsQ&s=10",
    },
    {
      id: 12,
      duration: "6 DAYS / 5 NIGHTS",
      country: "INDONESIA",
      tourType: "BALI TROPICAL",
      title: "Bali",
      locations: ["Ubud", "Kuta", "Seminyak", "Nusa Penida"],
      price: "₹38,999",
      oldPrice: "₹44,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_diWPXSxmFNXCFbBwysxEcOkCrz1XvgOsspsmoTo6g&s=10",
    },
    {
      id: 13,
      duration: "5 Nights / 6 Days",
      country: "SRI LANKA",
      tourType: "ISLAND ESCAPE",
      title: "Sri Lanka",
      locations: ["Nuwara Eliya", "Kandy", "Colombo", "Trincomalee", "Yala National Park"],
      price: "₹29,999",
      oldPrice: "₹34,999",
      image:
        "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt765cf9e924f95503/684df3a5fcecfa0403a2f8c3/getty-images-cVl8hyX8yqE-unsplash-Header_Mobile_(1).jpg?fit=crop&auto=webp&quality=60&crop=smart&format=avif",
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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Must-Visit Destinations In India For 2026",
    excerpt:
      "From the backwaters of Kerala to the snow-capped peaks of Kashmir, explore the most breathtaking destinations India has to offer this year.",
    date: "July 10, 2026",
    author: "Open Sky Team",
    category: "Destination Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=85",
    readTime: "5 min read",
    content: `
      <h2>1. The Backwaters of Kerala</h2>
      <p>Kerala, often referred to as "God's Own Country," offers a serene escape. Cruising through the tranquil backwaters in a traditional houseboat is an experience you simply cannot miss in 2026. Enjoy the lush greenery, spot local wildlife, and indulge in authentic South Indian coastal cuisine.</p>
      
      <h2>2. Snow-Capped Peaks of Kashmir</h2>
      <p>Kashmir remains a paradise on earth. The majestic valleys of Gulmarg and Pahalgam provide the perfect backdrop for romantic getaways or thrilling ski adventures. In 2026, improved accessibility makes reaching these pristine locations easier than ever.</p>

      <h2>3. The Royal Heritage of Rajasthan</h2>
      <p>Step back in time by visiting the magnificent forts and palaces of Jaipur, Udaipur, and Jodhpur. Experience the vibrant culture, rich history, and the warm hospitality of the desert state.</p>

      <h2>4. The Spiritual Aura of Varanasi</h2>
      <p>Witnessing the Ganga Aarti at dusk in Varanasi is a spiritually uplifting experience. The ancient city's narrow winding lanes, ghats, and historical significance make it a profound stop for any traveler.</p>
    `,
  },
  {
    id: 2,
    title: "How To Plan A Budget-Friendly International Trip",
    excerpt:
      "Traveling abroad doesn't have to be expensive. Learn smart booking strategies, visa tips and money-saving hacks for your next international holiday.",
    date: "July 5, 2026",
    author: "Priya Reddy",
    category: "Travel Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=85",
    readTime: "7 min read",
    content: `
      <h2>1. Book Your Flights in Advance</h2>
      <p>The golden rule for budget international travel is booking your flights early. Monitor prices using flight comparison tools and set up price alerts. Often, booking 3-4 months in advance can save you hundreds of dollars.</p>
      
      <h2>2. Be Flexible With Your Dates and Destinations</h2>
      <p>If you can be flexible with your travel dates, you can take advantage of shoulder season pricing. Sometimes flying on a Tuesday instead of a Friday can significantly drop your ticket price. Also, consider secondary airports or less popular but equally beautiful destinations.</p>

      <h2>3. Master the Art of Packing Light</h2>
      <p>Many budget airlines charge hefty fees for checked baggage. By packing light and traveling with just a carry-on, you avoid these extra fees and gain the mobility to navigate public transit easily.</p>

      <h2>4. Embrace Local Street Food and Public Transport</h2>
      <p>Eating where the locals eat is not only cheaper but often far more delicious and authentic than tourist trap restaurants. Similarly, utilizing local buses and trains instead of taxis will drastically reduce your daily expenditures.</p>
    `,
  },
  {
    id: 3,
    title: "Best Honeymoon Spots: Maldives vs Bali vs Switzerland",
    excerpt:
      "Choosing the perfect honeymoon destination can be overwhelming. We compare three of the world's most romantic getaways to help you decide.",
    date: "June 28, 2026",
    author: "Sneha Patel",
    category: "Honeymoon",
    imageUrl:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=85",
    readTime: "6 min read",
    content: `
      <h2>The Maldives: Overwater Luxury</h2>
      <p>If your idea of a perfect honeymoon involves stepping directly from your villa into crystal-clear turquoise waters, the Maldives is unparalleled. It offers ultimate privacy, world-class diving, and private dining on secluded sandbanks. It is ideal for couples looking for pure relaxation and luxury.</p>
      
      <h2>Bali: Culture Meets Tropical Paradise</h2>
      <p>Bali is incredibly diverse. You can spend a few days in the lush jungles of Ubud exploring temples and rice terraces, and then head down to Seminyak or Uluwatu for vibrant beach clubs and stunning sunsets. It offers a fantastic mix of culture, adventure, and relaxation, usually at a more affordable price point than the Maldives.</p>

      <h2>Switzerland: A Alpine Fairytale</h2>
      <p>For couples who prefer cozying up by a fireplace after a day of exploring snowy peaks, Switzerland is the ultimate destination. Imagine panoramic train rides, indulging in world-class chocolate and cheese, and exploring charming villages like Zermatt and Lucerne. It's a highly romantic, picture-perfect destination year-round.</p>

      <h2>The Verdict</h2>
      <p>The choice ultimately depends on your style as a couple. Choose the Maldives for absolute secluded luxury, Bali for a mix of tropical beaches and vibrant culture, and Switzerland for breathtaking alpine scenery and adventure.</p>
    `,
  },
  {
    id: 4,
    title: "Adventure Travel: Exploring India's Hidden Northeast",
    excerpt:
      "From the living root bridges of Meghalaya to the monasteries of Arunachal Pradesh, discover why Northeast India is the next big adventure travel destination.",
    date: "June 20, 2026",
    author: "Arjun Kumar",
    category: "Adventure",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85",
    readTime: "6 min read",
    content: `
      <h2>The Living Root Bridges of Meghalaya</h2>
      <p>Meghalaya's living root bridges are a marvel of bioengineering. Grown over centuries by the Khasi people, these natural wonders are found deep in the subtropical forests and are a must-visit for any adventure traveler.</p>

      <h2>Arunachal Pradesh's Monasteries</h2>
      <p>Tawang Monastery, the largest in India, sits at over 10,000 feet and offers breathtaking views of the Himalayas. The journey itself through winding mountain roads is an adventure worth undertaking.</p>
    `,
  },
  {
    id: 5,
    title: "Family-Friendly Guide To Dubai: Tips For Traveling With Kids",
    excerpt:
      "Planning a family trip to Dubai? Here's everything you need to know about kid-friendly attractions, dining options and smart travel tips for families.",
    date: "June 14, 2026",
    author: "Sneha Patel",
    category: "Family Travel",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85",
    readTime: "8 min read",
    content: `
      <h2>Top Attractions for Families</h2>
      <p>Dubai offers an incredible range of family-friendly attractions. From the magical IMG Worlds of Adventure to the Dubai Aquarium & Underwater Zoo, there's something to amaze every age group.</p>

      <h2>Smart Tips for Traveling with Kids</h2>
      <p>Plan your outdoor activities for the cooler morning hours, keep hydration supplies handy, and take advantage of the excellent public transport system including the Dubai Metro and water taxis.</p>
    `,
  },
  {
    id: 6,
    title: "Complete Visa Guide For First-Time International Travelers",
    excerpt:
      "Navigating the visa process can be daunting. Our step-by-step guide covers everything from documentation to common mistakes to avoid for a smooth application.",
    date: "June 8, 2026",
    author: "Open Sky Team",
    category: "Travel Tips",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuKt6SaXN0uB94ElIvDvt1uD5NycmLpT__IqTlsfHeA&s=10",
    readTime: "9 min read",
    content: `
      <h2>Understanding Visa Types</h2>
      <p>Before applying, understand the type of visa you need — tourist, business, or transit. Each has different requirements and processing times. Research your destination country's specific rules well in advance.</p>

      <h2>Common Mistakes to Avoid</h2>
      <p>Incomplete documentation, incorrect passport validity, and last-minute applications are the top reasons for visa rejections. Start your application at least 6-8 weeks before your travel date.</p>
    `,
  },
];
