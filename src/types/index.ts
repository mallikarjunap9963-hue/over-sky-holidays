export type HeroSlide = {
  id: number;
  location: string;
  title: string;
  description: string;
  image: string;
};

import type { ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
  dropdown?: boolean;
};



export type ExperienceTab = "Tour Packages" | "Hotel" | "Transport";

export type ExperienceItem = {
  id: number;
  duration: string;
  country: string;
  type: string;
  title: string;
  locations: string[];
  price: string;
  oldPrice?: string;
  image: string;
};

export type SafetySlide = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  points: string[];
  image: string;
};

export type AttractionTab = "Domestic" | "International" | "Islands" | "Pilgrimage";

export type AttractionPackage = {
  id: number;
  duration: string;
  country: string;
  tourType: string;
  title: string;
  locations: string[];
  price: string;
  oldPrice?: string;
  image: string;
};

export type ActivityName =
  | "Zip lining"
  | "Paragliding"
  | "Bungee Jumping"
  | "Ski touring"
  | "Rafting"
  | "Surfing";

export type ActivityItem = {
  name: ActivityName;
  badge: string;
  title: string;
  description: string;
  features: string[];
  images: [string, string];
};

export type ReviewSource = "All Reviews" | "Tripadvisor" | "Facebook" | "Google";

export type TravelerReview = {
  id: number;
  source: Exclude<ReviewSource, "All Reviews">;
  name: string;
  location: string;
  message: string;
  rating: number;
  date: string;
  time: string;
  avatar: string;
};


export type SearchTab =
  | "Tour"
  | "Hotel"
  | "Visa"
  | "Activities"
  | "Transport"
  | "Domestic"
  | "International"
  | "Flight Tickets"
  | "Passport";

export type SearchSelectProps = {
  label: string;
  options: string[];
  icon: ReactNode;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  readTime: string;
};

