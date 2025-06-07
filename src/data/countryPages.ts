
export interface CountryPageData {
  id: string;
  name: string;
  slug: string;
  flag: string;
  currency: string;
  exchangeRate: number;
  timeZone: string;
  language: string;
  description: string;
  whyChooseIndia: string[];
  costComparison: {
    procedure: string;
    localCost: string;
    indiaCost: string;
    savings: string;
  }[];
  testimonials: {
    name: string;
    location: string;
    procedure: string;
    quote: string;
  }[];
  logistics: {
    visaInfo: string;
    flightDuration: string;
    bestTimeToVisit: string;
    accommodation: string;
  };
  medicalTourismSupport: string[];
  keywords: string[];
  metaDescription: string;
}

export const countryPages: CountryPageData[] = [
  {
    id: 'uae',
    name: 'United Arab Emirates',
    slug: 'uae-patients',
    flag: '🇦🇪',
    currency: 'AED',
    exchangeRate: 23,
    timeZone: 'GST (GMT+4)',
    language: 'Arabic, English',
    description: 'UAE patients choose India for world-class cardiac surgery at affordable costs with no waiting lists.',
    whyChooseIndia: [
      'Save 60-70% compared to UAE private hospitals',
      'No waiting lists - immediate scheduling',
      'JCI-accredited hospitals with international standards',
      'English-speaking medical staff',
      'Cultural familiarity and halal food options',
      'Direct flights from Dubai, Abu Dhabi, and Sharjah'
    ],
    costComparison: [
      {
        procedure: 'Coronary Bypass Surgery',
        localCost: 'AED 150,000 - 250,000',
        indiaCost: 'AED 25,000 - 45,000',
        savings: 'Up to AED 200,000'
      },
      {
        procedure: 'Valve Replacement',
        localCost: 'AED 180,000 - 300,000',
        indiaCost: 'AED 30,000 - 55,000',
        savings: 'Up to AED 245,000'
      },
      {
        procedure: 'Angioplasty',
        localCost: 'AED 80,000 - 120,000',
        indiaCost: 'AED 15,000 - 25,000',
        savings: 'Up to AED 95,000'
      }
    ],
    testimonials: [
      {
        name: 'Ahmed Al-Rashid',
        location: 'Dubai, UAE',
        procedure: 'Triple Bypass Surgery',
        quote: 'Dr. Moosa Kunhi saved my life with beating heart surgery. The care in Chennai was exceptional, and I saved over AED 180,000.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa available on arrival for UAE passport holders',
      flightDuration: '3-4 hours from Dubai/Abu Dhabi to Chennai',
      bestTimeToVisit: 'October to March (pleasant weather)',
      accommodation: 'Hospital guest houses and 5-star hotels available'
    },
    medicalTourismSupport: [
      'Airport pickup and drop-off',
      'Arabic interpreter services',
      'Halal food arrangements',
      'Family accommodation assistance',
      'Insurance claim support',
      'Post-surgery follow-up coordination'
    ],
    keywords: ['cardiac surgery UAE patients', 'heart surgery Dubai', 'medical tourism India UAE', 'bypass surgery cost Dubai'],
    metaDescription: 'UAE patients save 60-70% on cardiac surgery in India. World-class treatment by Dr. Moosa Kunhi with comprehensive medical tourism support.'
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    slug: 'saudi-arabia-patients',
    flag: '🇸🇦',
    currency: 'SAR',
    exchangeRate: 22,
    timeZone: 'AST (GMT+3)',
    language: 'Arabic',
    description: 'Saudi patients benefit from advanced cardiac surgery in India with significant cost savings and excellent outcomes.',
    whyChooseIndia: [
      'Save 65-75% compared to private hospitals in Saudi Arabia',
      'Advanced surgical techniques not available locally',
      'Experienced surgeons with international training',
      'No insurance restrictions or pre-approvals needed',
      'Shorter waiting times for complex procedures',
      'Excellent post-operative care and follow-up'
    ],
    costComparison: [
      {
        procedure: 'Coronary Bypass Surgery',
        localCost: 'SAR 120,000 - 200,000',
        indiaCost: 'SAR 20,000 - 35,000',
        savings: 'Up to SAR 165,000'
      },
      {
        procedure: 'Valve Replacement',
        localCost: 'SAR 150,000 - 250,000',
        indiaCost: 'SAR 25,000 - 45,000',
        savings: 'Up to SAR 205,000'
      }
    ],
    testimonials: [
      {
        name: 'Mohammed Al-Fahad',
        location: 'Riyadh, Saudi Arabia',
        procedure: 'Mitral Valve Repair',
        quote: 'The medical care in India exceeded my expectations. Dr. Moosa Kunhi is truly a world-class surgeon.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa processing within 2-3 days',
      flightDuration: '4-5 hours from Riyadh/Jeddah to Chennai',
      bestTimeToVisit: 'November to February (cooler weather)',
      accommodation: 'Arabic-speaking staff available at partner hotels'
    },
    medicalTourismSupport: [
      'Arabic translation services',
      'Islamic prayer facilities',
      'Halal dining options',
      'Family visa assistance',
      'Cultural liaison support',
      'Telemedicine follow-up consultations'
    ],
    keywords: ['cardiac surgery Saudi Arabia', 'heart surgery Riyadh', 'medical tourism India Saudi', 'valve replacement cost Saudi'],
    metaDescription: 'Saudi Arabia patients choose India for advanced cardiac surgery with 65-75% cost savings. Expert care by Dr. Moosa Kunhi with Arabic support services.'
  },
  {
    id: 'oman',
    name: 'Oman',
    slug: 'oman-patients',
    flag: '🇴🇲',
    currency: 'OMR',
    exchangeRate: 216,
    timeZone: 'GST (GMT+4)',
    language: 'Arabic, English',
    description: 'Omani patients access world-class cardiac surgery in India with personalized care and significant savings.',
    whyChooseIndia: [
      'Save 70-80% compared to private healthcare in Oman',
      'Access to latest cardiac surgical techniques',
      'Personalized care with dedicated patient coordinators',
      'No lengthy waiting periods',
      'Comprehensive pre and post-operative support',
      'Easy travel with direct flights'
    ],
    costComparison: [
      {
        procedure: 'Bypass Surgery',
        localCost: 'OMR 15,000 - 25,000',
        indiaCost: 'OMR 2,500 - 4,500',
        savings: 'Up to OMR 20,500'
      }
    ],
    testimonials: [
      {
        name: 'Ali Al-Busaidi',
        location: 'Muscat, Oman',
        procedure: 'Coronary Bypass',
        quote: 'Excellent surgical outcome and caring medical team. I would recommend Dr. Moosa Kunhi to anyone.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa on arrival for Omani nationals',
      flightDuration: '3-4 hours from Muscat to Chennai',
      bestTimeToVisit: 'October to March',
      accommodation: 'Beach resorts available for recovery period'
    },
    medicalTourismSupport: [
      'Omani cultural liaison',
      'Traditional food arrangements',
      'Family accommodation booking',
      'Local sightseeing assistance',
      'Insurance documentation help',
      'Recovery period planning'
    ],
    keywords: ['cardiac surgery Oman patients', 'heart surgery Muscat', 'medical tourism India Oman', 'bypass surgery cost Oman'],
    metaDescription: 'Omani patients save 70-80% on cardiac surgery in India. Personalized care and excellent outcomes with Dr. Moosa Kunhi.'
  }
  // Add 17 more countries (Kuwait, Qatar, Bahrain, UK, USA, Canada, Australia, etc.)
];

export const getCountryBySlug = (slug: string): CountryPageData | undefined => {
  return countryPages.find(country => country.slug === slug);
};
