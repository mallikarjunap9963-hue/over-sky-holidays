import type { SearchTab, AttractionTab, ExperienceTab, ReviewSource } from '../types';

export const searchTabs: SearchTab[] = [
  "Domestic",
  "International",
  "Visa",
  "Flight Tickets",
  "Passport",
  "Hotel",
];

export const attractionTabs: { name: AttractionTab; image: string }[] = [
  {
    name: "Domestic",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "International",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
  },
];

export const experienceTabs: ExperienceTab[] = ["Tour Packages", "Hotel", "Transport"];

export const reviewTabs: ReviewSource[] = [
  "All Reviews",
  "Tripadvisor",
  "Facebook",
  "Google",
];

export const socialLinks = [
  { name: "Facebook", label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Instagram", label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "YouTube", label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { name: "Twitter", label: "Twitter", href: "https://twitter.com", icon: "twitter" },
];

export type ServiceProcessStep = {
  step: string;
  title: string;
  desc?: string;
  description?: string;
  iconType?: string;
};

export type ServiceHighlight = {
  title: string;
  subtitle?: string;
  desc?: string;
  iconType?: string;
};

export type ServiceWhyChooseItem = {
  title: string;
  desc?: string;
  iconType?: string;
};

export type ServiceData = {
  id: string;
  title: string;
  heroTagline: string;
  heroSubtext: string;
  description: string;
  detailsParagraphs: string[];
  bannerImage: string;
  highlights: ServiceHighlight[];
  whyChoose: ServiceWhyChooseItem[];
  processSteps: ServiceProcessStep[];
  featuresList: string[];
  metaTitle: string;
  metaDesc: string;
  content?: {
    paragraphs?: string[];
    features?: string[];
  };
};
