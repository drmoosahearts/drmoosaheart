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
  },
  {
    id: 'kuwait',
    name: 'Kuwait',
    slug: 'kuwait-patients',
    flag: '🇰🇼',
    currency: 'KWD',
    exchangeRate: 272,
    timeZone: 'AST (GMT+3)',
    language: 'Arabic, English',
    description: 'Kuwaiti patients benefit from advanced cardiac surgery in India with exceptional care and significant cost savings.',
    whyChooseIndia: [
      'Save 70-80% compared to private healthcare in Kuwait',
      'Access to latest minimally invasive techniques',
      'No insurance pre-authorization delays',
      'Immediate appointment availability',
      'Comprehensive cardiac rehabilitation programs',
      'Arabic-speaking medical coordinators'
    ],
    costComparison: [
      {
        procedure: 'Bypass Surgery',
        localCost: 'KWD 12,000 - 20,000',
        indiaCost: 'KWD 2,000 - 3,500',
        savings: 'Up to KWD 16,500'
      }
    ],
    testimonials: [
      {
        name: 'Fatima Al-Sabah',
        location: 'Kuwait City, Kuwait',
        procedure: 'Aortic Valve Replacement',
        quote: 'Dr. Moosa Kunhi provided exceptional care. The surgery was successful and I recovered faster than expected.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa processing within 24-48 hours',
      flightDuration: '4-5 hours from Kuwait City to Chennai',
      bestTimeToVisit: 'October to March (cooler season)',
      accommodation: 'Premium hotels with Kuwaiti cuisine available'
    },
    medicalTourismSupport: [
      'Kuwaiti cultural liaison officer',
      'Islamic prayer arrangements',
      'Halal certified dining',
      'Currency exchange assistance',
      'Emergency contact with Kuwait embassy',
      'Direct communication with family in Kuwait'
    ],
    keywords: ['cardiac surgery Kuwait patients', 'heart surgery Kuwait City', 'medical tourism India Kuwait'],
    metaDescription: 'Kuwaiti patients save 70-80% on cardiac surgery in India with Dr. Moosa Kunhi. Comprehensive support and excellent outcomes.'
  },
  {
    id: 'qatar',
    name: 'Qatar',
    slug: 'qatar-patients',
    flag: '🇶🇦',
    currency: 'QAR',
    exchangeRate: 23,
    timeZone: 'AST (GMT+3)',
    language: 'Arabic, English',
    description: 'Qatari patients choose India for world-class cardiac surgery with personalized care and substantial savings.',
    whyChooseIndia: [
      'Save 65-75% compared to Qatar private hospitals',
      'No waiting periods for complex procedures',
      'Advanced robotic and minimally invasive surgery',
      'Personalized treatment protocols',
      'Dedicated VIP patient services',
      'Direct flights from Doha to Chennai'
    ],
    costComparison: [
      {
        procedure: 'Coronary Bypass',
        localCost: 'QAR 180,000 - 300,000',
        indiaCost: 'QAR 30,000 - 55,000',
        savings: 'Up to QAR 245,000'
      }
    ],
    testimonials: [
      {
        name: 'Hassan Al-Thani',
        location: 'Doha, Qatar',
        procedure: 'Complex Cardiac Surgery',
        quote: 'The expertise and technology available exceeded my expectations. Dr. Moosa Kunhi is truly world-class.'
      }
    ],
    logistics: {
      visaInfo: 'Visa on arrival for Qatari nationals',
      flightDuration: '3.5-4 hours from Doha to Chennai',
      bestTimeToVisit: 'November to February',
      accommodation: '5-star hotels with Arabic hospitality'
    },
    medicalTourismSupport: [
      'VIP airport reception and transfers',
      'Arabic medical interpreters',
      'Traditional Qatari meal arrangements',
      'Family accommodation coordination',
      'Qatar Airways partnership benefits',
      'Post-surgery Qatar follow-up network'
    ],
    keywords: ['cardiac surgery Qatar patients', 'heart surgery Doha', 'medical tourism India Qatar'],
    metaDescription: 'Qatar patients receive world-class cardiac surgery in India with 65-75% cost savings and VIP treatment experience.'
  },
  {
    id: 'bahrain',
    name: 'Bahrain',
    slug: 'bahrain-patients',
    flag: '🇧🇭',
    currency: 'BHD',
    exchangeRate: 221,
    timeZone: 'AST (GMT+3)',
    language: 'Arabic, English',
    description: 'Bahraini patients access advanced cardiac surgery in India with excellent outcomes and personalized care.',
    whyChooseIndia: [
      'Save 70-80% compared to Bahrain private costs',
      'Advanced cardiac surgical techniques',
      'No geographical limitations for complex cases',
      'Comprehensive pre and post-operative care',
      'Cultural familiarity and comfort',
      'Easy travel connectivity'
    ],
    costComparison: [
      {
        procedure: 'Heart Valve Surgery',
        localCost: 'BHD 15,000 - 25,000',
        indiaCost: 'BHD 2,500 - 4,500',
        savings: 'Up to BHD 20,500'
      }
    ],
    testimonials: [
      {
        name: 'Ahmed Al-Khalifa',
        location: 'Manama, Bahrain',
        procedure: 'Bypass Surgery',
        quote: 'Outstanding medical care and warm hospitality. I would definitely recommend Dr. Moosa Kunhi to others.'
      }
    ],
    logistics: {
      visaInfo: 'E-visa available online for medical treatment',
      flightDuration: '4-5 hours from Manama to Chennai',
      bestTimeToVisit: 'October to March',
      accommodation: 'Boutique hotels with personalized service'
    },
    medicalTourismSupport: [
      'Bahraini patient coordinator',
      'Cultural sensitivity training for staff',
      'Halal food and prayer facilities',
      'Family support services',
      'Insurance documentation assistance',
      'Follow-up care coordination in Bahrain'
    ],
    keywords: ['cardiac surgery Bahrain patients', 'heart surgery Manama', 'medical tourism India Bahrain'],
    metaDescription: 'Bahrain patients benefit from advanced cardiac surgery in India with 70-80% savings and culturally sensitive care.'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    slug: 'uk-patients',
    flag: '🇬🇧',
    currency: 'GBP',
    exchangeRate: 105,
    timeZone: 'GMT/BST',
    language: 'English',
    description: 'UK patients choose India to avoid NHS waiting lists and access immediate world-class cardiac surgery.',
    whyChooseIndia: [
      'Bypass NHS waiting lists (6-12 months)',
      'Access to immediate surgery appointments',
      'Cost-effective compared to UK private healthcare',
      'Latest cardiac surgical innovations',
      'English-speaking medical teams',
      'Comprehensive medical tourism packages'
    ],
    costComparison: [
      {
        procedure: 'Coronary Bypass Surgery',
        localCost: '£25,000 - £35,000',
        indiaCost: '£4,000 - £7,000',
        savings: 'Up to £28,000'
      },
      {
        procedure: 'Valve Replacement',
        localCost: '£30,000 - £45,000',
        indiaCost: '£5,000 - £8,500',
        savings: 'Up to £36,500'
      }
    ],
    testimonials: [
      {
        name: 'David Smith',
        location: 'London, UK',
        procedure: 'Triple Bypass Surgery',
        quote: 'Avoided a 10-month NHS wait. Dr. Moosa Kunhi performed my surgery within 2 weeks. Excellent care and results.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa for UK citizens processed in 2-3 days',
      flightDuration: '8-9 hours from London to Chennai',
      bestTimeToVisit: 'Year-round (avoid monsoon: June-September)',
      accommodation: 'International standard hotels with British amenities'
    },
    medicalTourismSupport: [
      'UK patient coordinator in Chennai',
      'Direct communication with NHS records',
      'Insurance and private healthcare integration',
      'UK dietary preferences accommodation',
      'Time zone coordination for family updates',
      'Return journey medical clearance'
    ],
    keywords: ['cardiac surgery UK patients', 'NHS waiting list bypass', 'private heart surgery UK alternative'],
    metaDescription: 'UK patients bypass NHS waiting lists with immediate cardiac surgery in India. Save money and time with Dr. Moosa Kunhi.'
  },
  {
    id: 'usa',
    name: 'United States',
    slug: 'usa-patients',
    flag: '🇺🇸',
    currency: 'USD',
    exchangeRate: 1,
    timeZone: 'Multiple (EST/CST/MST/PST)',
    language: 'English',
    description: 'US patients save significantly on cardiac surgery costs while receiving world-class treatment in India.',
    whyChooseIndia: [
      'Save 60-80% compared to US healthcare costs',
      'No insurance authorization delays',
      'Access to latest cardiac technologies',
      'Board-certified international surgeons',
      'Comprehensive medical tourism support',
      'FDA-approved medical devices and implants'
    ],
    costComparison: [
      {
        procedure: 'Coronary Bypass Surgery',
        localCost: '$70,000 - $150,000',
        indiaCost: '$8,000 - $15,000',
        savings: 'Up to $135,000'
      },
      {
        procedure: 'Valve Replacement',
        localCost: '$80,000 - $200,000',
        indiaCost: '$10,000 - $18,000',
        savings: 'Up to $182,000'
      }
    ],
    testimonials: [
      {
        name: 'Robert Johnson',
        location: 'Texas, USA',
        procedure: 'Aortic Valve Replacement',
        quote: 'Saved over $120,000 and received better care than I expected. Dr. Moosa Kunhi is exceptional.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa for US citizens - 5-7 days processing',
      flightDuration: '15-20 hours (with connections) from major US cities',
      bestTimeToVisit: 'October to March for pleasant weather',
      accommodation: 'American-standard hotels with familiar amenities'
    },
    medicalTourismSupport: [
      'US-based patient coordinators',
      'Insurance documentation and claims support',
      'American dietary preferences',
      'Time zone-appropriate family communication',
      'Direct coordination with US physicians',
      'Medical records integration with US healthcare systems'
    ],
    keywords: ['cardiac surgery USA patients', 'medical tourism India USA', 'affordable heart surgery Americans'],
    metaDescription: 'US patients save 60-80% on cardiac surgery in India. World-class treatment with significant cost savings and comprehensive support.'
  },
  {
    id: 'canada',
    name: 'Canada',
    slug: 'canada-patients',
    flag: '🇨🇦',
    currency: 'CAD',
    exchangeRate: 0.74,
    timeZone: 'Multiple (EST/CST/MST/PST)',
    language: 'English, French',
    description: 'Canadian patients access timely cardiac surgery in India while avoiding provincial healthcare waiting periods.',
    whyChooseIndia: [
      'Avoid Canadian healthcare waiting times',
      'Cost-effective alternative to private Canadian care',
      'Access to advanced surgical techniques',
      'Immediate appointment scheduling',
      'Comprehensive cardiac rehabilitation',
      'English and French language support'
    ],
    costComparison: [
      {
        procedure: 'Coronary Bypass Surgery',
        localCost: 'CAD 45,000 - 65,000',
        indiaCost: 'CAD 8,000 - 14,000',
        savings: 'Up to CAD 51,000'
      }
    ],
    testimonials: [
      {
        name: 'Marie Dubois',
        location: 'Montreal, Canada',
        procedure: 'Mitral Valve Repair',
        quote: 'Excellent surgical outcome and caring medical team. The language support made everything comfortable.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa for Canadian citizens - expedited processing',
      flightDuration: '16-22 hours from major Canadian cities',
      bestTimeToVisit: 'November to February (winter escape)',
      accommodation: 'Hotels with Canadian comfort standards'
    },
    medicalTourismSupport: [
      'Bilingual patient coordinators (English/French)',
      'Provincial health insurance coordination',
      'Canadian dietary preferences',
      'Family communication across time zones',
      'Medical record integration with Canadian systems',
      'Follow-up care coordination in Canada'
    ],
    keywords: ['cardiac surgery Canada patients', 'medical tourism India Canada', 'bypass waiting lists Canada'],
    metaDescription: 'Canadian patients avoid waiting periods with immediate cardiac surgery in India. Bilingual support and excellent outcomes.'
  },
  {
    id: 'australia',
    name: 'Australia',
    slug: 'australia-patients',
    flag: '🇦🇺',
    currency: 'AUD',
    exchangeRate: 0.66,
    timeZone: 'Multiple (AEST/ACST/AWST)',
    language: 'English',
    description: 'Australian patients choose India for immediate cardiac surgery access and substantial cost savings.',
    whyChooseIndia: [
      'Avoid Australian public system waiting lists',
      'Cost-effective compared to Australian private healthcare',
      'Access to cutting-edge cardiac procedures',
      'Immediate surgery scheduling',
      'World-class medical infrastructure',
      'Cultural comfort for Australian patients'
    ],
    costComparison: [
      {
        procedure: 'Coronary Bypass Surgery',
        localCost: 'AUD 50,000 - 80,000',
        indiaCost: 'AUD 9,000 - 16,000',
        savings: 'Up to AUD 64,000'
      }
    ],
    testimonials: [
      {
        name: 'James Wilson',
        location: 'Sydney, Australia',
        procedure: 'Heart Valve Replacement',
        quote: 'Outstanding care and much faster than waiting in Australia. Dr. Moosa Kunhi exceeded all expectations.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa for Australian citizens - 3-5 days processing',
      flightDuration: '7-9 hours from major Australian cities',
      bestTimeToVisit: 'October to March (Indian winter)',
      accommodation: 'International hotels with Australian amenities'
    },
    medicalTourismSupport: [
      'Australian patient coordinator',
      'Medicare and private insurance assistance',
      'Australian dietary preferences',
      'Time zone coordination for family',
      'Integration with Australian medical records',
      'Follow-up care network in Australia'
    ],
    keywords: ['cardiac surgery Australia patients', 'medical tourism India Australia', 'heart surgery waiting lists Australia'],
    metaDescription: 'Australian patients save time and money with immediate cardiac surgery in India. Professional support and excellent outcomes.'
  },
  {
    id: 'germany',
    name: 'Germany',
    slug: 'germany-patients',
    flag: '🇩🇪',
    currency: 'EUR',
    exchangeRate: 1.09,
    timeZone: 'CET (GMT+1)',
    language: 'German, English',
    description: 'German patients benefit from cost-effective cardiac surgery in India with German-speaking support staff.',
    whyChooseIndia: [
      'Competitive costs compared to German private healthcare',
      'Access to latest cardiac innovations',
      'German-speaking patient coordinators',
      'Immediate appointment availability',
      'High-quality medical standards',
      'Comprehensive treatment packages'
    ],
    costComparison: [
      {
        procedure: 'Bypass Surgery',
        localCost: '€35,000 - €50,000',
        indiaCost: '€6,000 - €11,000',
        savings: 'Up to €39,000'
      }
    ],
    testimonials: [
      {
        name: 'Hans Mueller',
        location: 'Berlin, Germany',
        procedure: 'Complex Cardiac Surgery',
        quote: 'Hervorragende Behandlung! The surgical expertise and care quality were exceptional.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa for German citizens - efficient processing',
      flightDuration: '7-8 hours from German cities to Chennai',
      bestTimeToVisit: 'October to March',
      accommodation: 'European standard hotels'
    },
    medicalTourismSupport: [
      'German-speaking coordinators',
      'German insurance coordination',
      'European dietary options',
      'Medical record translation services',
      'Follow-up care in Germany network',
      'Cultural liaison services'
    ],
    keywords: ['cardiac surgery Germany patients', 'medical tourism India Germany', 'German heart surgery'],
    metaDescription: 'German patients receive excellent cardiac surgery in India with German-speaking support and significant cost savings.'
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    slug: 'nigeria-patients',
    flag: '🇳🇬',
    currency: 'NGN',
    exchangeRate: 0.0012,
    timeZone: 'WAT (GMT+1)',
    language: 'English, Hausa, Yoruba, Igbo',
    description: 'Nigerian patients access world-class cardiac surgery in India with comprehensive support and affordable costs.',
    whyChooseIndia: [
      'Advanced cardiac surgery not available locally',
      'Affordable costs compared to European alternatives',
      'English-speaking medical teams',
      'Comprehensive medical tourism packages',
      'Nigerian patient community support',
      'Direct flight connectivity'
    ],
    costComparison: [
      {
        procedure: 'Heart Surgery',
        localCost: 'Limited availability',
        indiaCost: '₦3,500,000 - ₦6,500,000',
        savings: 'Accessible world-class care'
      }
    ],
    testimonials: [
      {
        name: 'Emeka Okafor',
        location: 'Lagos, Nigeria',
        procedure: 'Coronary Bypass',
        quote: 'Dr. Moosa Kunhi gave me a new lease on life. The care and expertise were beyond my expectations.'
      }
    ],
    logistics: {
      visaInfo: 'Medical visa for Nigerian citizens - dedicated processing',
      flightDuration: '8-10 hours from Lagos to Chennai',
      bestTimeToVisit: 'Year-round availability',
      accommodation: 'Comfortable hotels with African cuisine options'
    },
    medicalTourismSupport: [
      'Nigerian patient coordinators',
      'Community support groups',
      'African dietary preferences',
      'Family accommodation assistance',
      'Currency exchange guidance',
      'Follow-up care coordination in Nigeria'
    ],
    keywords: ['cardiac surgery Nigeria patients', 'medical tourism India Nigeria', 'heart surgery Lagos'],
    metaDescription: 'Nigerian patients access advanced cardiac surgery in India with comprehensive support and English-speaking medical teams.'
  }
];

export const getCountryBySlug = (slug: string): CountryPageData | undefined => {
  return countryPages.find(country => country.slug === slug);
};
