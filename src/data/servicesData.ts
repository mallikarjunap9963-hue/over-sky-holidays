import visaImg from '../assets/visa.png';
import flightImg from '../assets/flight tikets.png';
import passportImg from '../assets/passport.png';

export interface ServiceProcessStep {
  title: string;
  description: string;
  iconType: "chat" | "document" | "edit" | "card" | "hourglass" | "check";
}

export interface ServiceHighlight {
  title: string;
  desc: string;
  iconType: "user" | "list" | "clock" | "shield" | "headset";
}

export interface ServiceWhyChooseItem {
  title: string;
  iconType: "agent" | "user" | "building" | "price" | "support" | "clock";
}

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  highlights: ServiceHighlight[];
  content: {
    title: string;
    description: string;
    features: string[];
    sideImage: string;
    successRate: string;
    successLabel: string;
  };
  processSteps: ServiceProcessStep[];
  documents: string[];
  whyChooseUs: ServiceWhyChooseItem[];
}

export const servicesData: Record<string, ServiceData> = {
  "visa": {
    id: "visa",
    title: "Visa Assistance",
    subtitle: "Expert guidance for tourist, business, student, and work visas.\nWe handle documentation and applications to make the process\nsmooth, quick, and hassle-free.",
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    highlights: [
      { title: "Expert Guidance", desc: "From start to successful approval", iconType: "user" },
      { title: "High Success Rate", desc: "Maximum visa approval ratio", iconType: "list" },
      { title: "Save Time", desc: "Fast & efficient process", iconType: "clock" },
      { title: "Secure & Reliable", desc: "Your documents are safe with us", iconType: "shield" },
      { title: "24/7 Support", desc: "We're here to help you anytime", iconType: "headset" }
    ],
    content: {
      title: "Hassle-Free Visa Services For Your Journey",
      description: "Planning an international trip? We make visa processing simple and stress-free. Our experienced team provides end-to-end support, ensuring your application is accurate, complete, and submitted on time for the best results.",
      features: [
        "Tourist Visa (Leisure & Family Travel)",
        "Business Visa (Meetings, Conferences & Events)",
        "Student Visa (Study Abroad)",
        "Work Visa (Employment Opportunities)",
        "Transit Visa & Visa Extension",
        "Visa Consultation & Document Verification",
        "Application Tracking & Updates"
      ],
      sideImage: visaImg,
      successRate: "98%",
      successLabel: "Visa Success Rate"
    },
    processSteps: [
      { title: "Consultation", description: "We understand your travel purpose and visa requirements.", iconType: "chat" },
      { title: "Document Check", description: "We review and verify your documents for accuracy.", iconType: "document" },
      { title: "Application", description: "We fill and submit your visa application with precision.", iconType: "edit" },
      { title: "Payment", description: "Secure payment of visa fees and service charges.", iconType: "card" },
      { title: "Processing", description: "We track your application and keep you updated.", iconType: "hourglass" },
      { title: "Visa Approval", description: "Receive your visa and get ready for your journey!", iconType: "check" }
    ],
    documents: [
      "Valid Passport (with minimum validity as per requirement)",
      "Passport Size Photographs",
      "Completed Visa Application Form",
      "Travel Itinerary / Flight Bookings",
      "Hotel Bookings",
      "Travel Insurance",
      "Bank Statements / Financial Proof",
      "Cover Letter (If applicable)",
      "Additional documents as per embassy requirement"
    ],
    whyChooseUs: [
      { title: "Experienced visa consultants", iconType: "agent" },
      { title: "Personalized guidance for each applicant", iconType: "user" },
      { title: "Strong relationships with embassies", iconType: "building" },
      { title: "Transparent pricing, no hidden charges", iconType: "price" },
      { title: "Timely updates and dedicated support", iconType: "support" }
    ]
  },
  "flight-tickets": {
    id: "flight-tickets",
    title: "Flight Tickets",
    subtitle: "Book domestic and international flights at the best prices.\nWe offer seamless booking experiences with 24/7 support\nto ensure your journey starts perfectly.",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    highlights: [
      { title: "Best Fares", desc: "Competitive pricing on all routes", iconType: "list" },
      { title: "Global Reach", desc: "Connecting 500+ destinations", iconType: "shield" },
      { title: "Instant Booking", desc: "Fast & confirmed tickets", iconType: "clock" },
      { title: "Flexible Dates", desc: "Easy rescheduling options", iconType: "user" },
      { title: "24/7 Support", desc: "Assistance at every step", iconType: "headset" }
    ],
    content: {
      title: "Seamless Flight Bookings For Every Destination",
      description: "Whether you're flying for business or leisure, we provide the most convenient flight options tailored to your schedule and budget. Enjoy a hassle-free booking experience with no hidden fees and dedicated customer support.",
      features: [
        "Domestic & International Flight Bookings",
        "Corporate Travel Solutions",
        "Group Booking Discounts",
        "Multi-city & Round-trip Itineraries",
        "Baggage Allowance & Seat Upgrades",
        "Flight Cancellation & Rescheduling Support",
        "Price Match Guarantee"
      ],
      sideImage: flightImg,
      successRate: "24/7",
      successLabel: "Customer Support"
    },
    processSteps: [
      { title: "Search", description: "Tell us your destination and preferred travel dates.", iconType: "chat" },
      { title: "Compare", description: "We compare multiple airlines to find the best options.", iconType: "document" },
      { title: "Select", description: "Choose the flight that perfectly fits your schedule.", iconType: "edit" },
      { title: "Payment", description: "Securely pay for your flight tickets.", iconType: "card" },
      { title: "Confirmation", description: "Receive instant ticket confirmation and PNR.", iconType: "check" },
      { title: "Check-in", description: "We assist with web check-in and boarding passes.", iconType: "hourglass" }
    ],
    documents: [
      "Valid Government ID (Domestic flights)",
      "Valid Passport (International flights)",
      "Appropriate Visa (If applicable)",
      "Frequent Flyer Number (Optional)",
      "Special Assistance Request (If needed)",
      "Infant/Child ID (If traveling with minors)",
      "Corporate ID (For corporate bookings)"
    ],
    whyChooseUs: [
      { title: "Partnerships with top global airlines", iconType: "building" },
      { title: "Dedicated travel counselors", iconType: "user" },
      { title: "No hidden booking fees", iconType: "price" },
      { title: "Assistance during flight disruptions", iconType: "support" },
      { title: "Exclusive deals and offers", iconType: "agent" }
    ]
  },
  "passport": {
    id: "passport",
    title: "Passport Services",
    subtitle: "Fresh applications, renewals, and corrections made easy.\nSkip the long queues and let our experts handle\nyour passport application process.",
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    highlights: [
      { title: "Expert Review", desc: "Error-free application filing", iconType: "user" },
      { title: "Quick Processing", desc: "Fast-track appointment booking", iconType: "clock" },
      { title: "End-to-End", desc: "From form filling to dispatch", iconType: "list" },
      { title: "Secure Handling", desc: "Strict data privacy", iconType: "shield" },
      { title: "24/7 Support", desc: "Always available for queries", iconType: "headset" }
    ],
    content: {
      title: "Your Gateway To The World Starts Here",
      description: "Getting a passport shouldn't be complicated. Our dedicated passport service team assists you at every step—from filling out complex government forms to booking your passport office appointment—ensuring a smooth and rejection-free experience.",
      features: [
        "Fresh Passport Application",
        "Passport Renewal / Re-issue",
        "Tatkal (Fast-track) Passport Services",
        "Minor / Child Passport",
        "Address & Name Correction",
        "Lost or Damaged Passport Replacement",
        "Police Clearance Certificate (PCC)"
      ],
      sideImage: passportImg,
      successRate: "10k+",
      successLabel: "Passports Issued"
    },
    processSteps: [
      { title: "Consultation", description: "Understand which type of passport application you need.", iconType: "chat" },
      { title: "Document Collation", description: "Gather all necessary identity and address proofs.", iconType: "document" },
      { title: "Form Filing", description: "We accurately fill your online application form.", iconType: "edit" },
      { title: "Fee Payment", description: "Payment of government fees and our service charge.", iconType: "card" },
      { title: "Appointment", description: "We book a convenient slot at the Passport Seva Kendra.", iconType: "hourglass" },
      { title: "Dispatch", description: "Complete the interview and receive passport via post.", iconType: "check" }
    ],
    documents: [
      "Aadhaar Card",
      "Voter ID Card",
      "PAN Card",
      "Birth Certificate",
      "Utility Bills (Electricity/Water/Gas)",
      "Rent Agreement (If applicable)",
      "Marriage Certificate (For name change)",
      "Old Passport (For renewals)"
    ],
    whyChooseUs: [
      { title: "Error-free application submission", iconType: "agent" },
      { title: "Guidance on complex documentation", iconType: "user" },
      { title: "Faster appointment scheduling", iconType: "clock" },
      { title: "Transparent fee structure", iconType: "price" },
      { title: "Assistance with Police Verification issues", iconType: "support" }
    ]
  }
};
