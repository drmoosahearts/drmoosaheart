
interface CountryData {
  name: string;
  slug: string;
  flag: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  whyChooseIndia: string[];
  costComparison: {
    procedure: string;
    localCost: string;
    indiaCost: string;
    savings: string;
  }[];
  logistics: {
    flightDuration: string;
    visaInfo: string;
    bestTimeToVisit: string;
    accommodation: string;
  };
  medicalTourismSupport: string[];
  testimonials: {
    name: string;
    location: string;
    procedure: string;
    quote: string;
  }[];
}

const countryPages: CountryData[] = [
  {
    name: "UAE",
    slug: "uae",
    flag: "🇦🇪",
    description: "Advanced cardiac surgery with world-class care at a fraction of UAE healthcare costs",
    metaDescription: "UAE patients save 60-80% on cardiac surgery in India with Dr. M.K. Moosa Kunhi. World-class heart surgery with immediate scheduling.",
    keywords: ["UAE cardiac surgery", "heart surgery Dubai", "cardiac surgeon India", "medical tourism UAE"],
    whyChooseIndia: [
      "Save 60-80% compared to UAE private healthcare costs",
      "No waiting lists - immediate scheduling available",
      "JCI accredited hospitals with international standards", 
      "English-speaking medical staff",
      "Direct flights from Dubai and Abu Dhabi"
    ],
    costComparison: [
      {
        procedure: "Bypass Surgery",
        localCost: "AED 150,000",
        indiaCost: "AED 30,000",
        savings: "AED 120,000"
      },
      {
        procedure: "Valve Replacement",
        localCost: "AED 120,000", 
        indiaCost: "AED 25,000",
        savings: "AED 95,000"
      }
    ],
    logistics: {
      flightDuration: "3.5 hours from Dubai",
      visaInfo: "Medical visa on arrival for UAE residents",
      bestTimeToVisit: "October to March (cooler weather)",
      accommodation: "International patient housing near hospital"
    },
    medicalTourismSupport: [
      "Airport pickup and drop-off",
      "Dedicated international patient coordinator",
      "24/7 Arabic language support",
      "Insurance claim assistance",
      "Post-surgery follow-up care"
    ],
    testimonials: [
      {
        name: "Ahmed Al-Rashid",
        location: "Dubai, UAE",
        procedure: "Triple Bypass Surgery",
        quote: "Dr. Moosa Kunhi saved my life. The care in India exceeded all expectations."
      }
    ]
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    description: "Skip NHS waiting lists with immediate world-class cardiac surgery in India",
    metaDescription: "UK patients avoid NHS waiting lists for cardiac surgery. Get immediate treatment with Dr. M.K. Moosa Kunhi in India at affordable costs.",
    keywords: ["UK cardiac surgery", "NHS waiting list alternative", "heart surgery India", "medical tourism UK"],
    whyChooseIndia: [
      "Avoid 12-18 month NHS waiting lists",
      "Save significantly compared to private UK healthcare",
      "Same-day consultation and surgery scheduling",
      "British-trained medical staff",
      "Comprehensive post-operative care"
    ],
    costComparison: [
      {
        procedure: "Bypass Surgery",
        localCost: "£35,000",
        indiaCost: "£8,000",
        savings: "£27,000"
      },
      {
        procedure: "Valve Replacement",
        localCost: "£30,000",
        indiaCost: "£7,000", 
        savings: "£23,000"
      }
    ],
    logistics: {
      flightDuration: "9 hours from London",
      visaInfo: "e-Medical visa processing in 3-5 days",
      bestTimeToVisit: "November to February (mild weather)",
      accommodation: "English-speaking staff accommodations"
    },
    medicalTourismSupport: [
      "UK liaison office support",
      "Medical records transfer assistance", 
      "Travel insurance coordination",
      "Family accommodation arrangements",
      "Telehealth follow-up consultations"
    ],
    testimonials: [
      {
        name: "James Thompson",
        location: "Manchester, UK",
        procedure: "Heart Valve Repair",
        quote: "Couldn't wait 18 months on NHS. Dr. Moosa Kunhi operated within a week."
      }
    ]
  }
];

export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return countryPages.find(country => country.slug === slug);
};

export const getAllCountries = (): CountryData[] => {
  return countryPages;
};

export default countryPages;
