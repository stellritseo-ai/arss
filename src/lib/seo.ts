export const SITE_URL = "https://arssconstruction.com";
export const BRAND_NAME = "ARSS Construction";
export const PHONE_DISPLAY = "(469) 360-5805";
export const PHONE_TEL = "+14693605805";
export const EMAIL_CONTACT = "support@arssconstruction.com";
export const ADDRESS_LOCALITY = "Dallas";
export const ADDRESS_REGION = "TX";
export const ADDRESS_COUNTRY = "US";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero1.png`;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "business.business";
  city?: string;
  geo?: {
    latitude: string;
    longitude: string;
  };
  breadcrumbs?: BreadcrumbItem[];
  schemas?: Record<string, unknown>[];
}

/**
 * Common Schema.org General Contractor and Local Business Definition
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "EmergencyService"],
  "@id": `${SITE_URL}/#organization`,
  name: BRAND_NAME,
  alternateName: ["ARSS Construction LLC", "ARSS Remodeling & Restoration"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero1.png`,
  telephone: PHONE_TEL,
  email: EMAIL_CONTACT,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Insurance Direct Billing",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: ADDRESS_LOCALITY,
    addressRegion: ADDRESS_REGION,
    addressCountry: ADDRESS_COUNTRY,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.7767",
    longitude: "-96.7970",
  },
  areaServed: [
    { "@type": "City", name: "Dallas", addressRegion: "TX" },
    { "@type": "City", name: "Plano", addressRegion: "TX" },
    { "@type": "City", name: "Frisco", addressRegion: "TX" },
    { "@type": "City", name: "Arlington", addressRegion: "TX" },
    { "@type": "City", name: "Irving", addressRegion: "TX" },
    { "@type": "AdministrativeArea", name: "Dallas County, TX" },
    { "@type": "AdministrativeArea", name: "Collin County, TX" },
    { "@type": "AdministrativeArea", name: "Tarrant County, TX" },
    { "@type": "AdministrativeArea", name: "Denton County, TX" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ARSS Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Remodeling & Renovation",
          description: "Kitchen, bathroom, room additions, and whole-home remodeling in DFW.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fire Damage Restoration",
          description: "Emergency fire, smoke, and soot mitigation and structural rebuilding.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Water Damage Repair",
          description: "Rapid water extraction, structural drying, and damage restoration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Construction",
          description: "Commercial and public sector infrastructure and structural building.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovation and Facility Upgrades",
          description: "Modern facility overhauls, mechanical upgrades, and municipal space modernization.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
    bestRating: "5",
    worstRating: "1",
  },
};

/**
 * FAQ Page Schema based on verified ARSS client inquiries
 */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can ARSS Construction respond to fire or water emergencies in Dallas-Fort Worth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ARSS Construction provides 24/7 rapid emergency dispatch across Dallas, Plano, Frisco, Arlington, and Irving with a target 60-minute on-site response time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle insurance claims directly with adjusters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work directly with all major insurance carriers, providing detailed line-item Xactimate estimates, moisture mapping, and damage documentation to simplify the claims process.",
      },
    },
    {
      "@type": "Question",
      name: "Are your remodeling and construction services licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ARSS Construction is fully licensed, insured, and bonded in Texas with over 15 years of industry experience across commercial and residential projects.",
      },
    },
    {
      "@type": "Question",
      name: "How do I schedule an on-site property inspection or remodeling estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can schedule a complimentary property inspection online via our Request Inspection page or call our direct project desk at (469) 360-5805.",
      },
    },
  ],
};

/**
 * Build BreadcrumbList Schema
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Helper to build TanStack Router `head` declaration
 */
export function buildPageHead(options: SeoOptions) {
  const canonicalUrl = `${SITE_URL}${options.path === "/" ? "" : options.path}`;
  const ogImageUrl = options.image || DEFAULT_OG_IMAGE;
  const pageType = options.type || "website";
  const cityName = options.city || ADDRESS_LOCALITY;
  const latitude = options.geo?.latitude || "32.7767";
  const longitude = options.geo?.longitude || "-96.7970";

  const keywordsString = (
    options.keywords || [
      "ARSS Construction",
      "general contractor Dallas",
      "home remodeling Dallas TX",
      "fire damage restoration",
      "water damage repair",
      "commercial construction DFW",
    ]
  ).join(", ");

  const jsonLdObjects: Record<string, unknown>[] = [];

  // Always include organization on home page
  if (options.path === "/") {
    jsonLdObjects.push(organizationSchema);
    jsonLdObjects.push(faqSchema);
  }

  // Include breadcrumb schema if specified
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    jsonLdObjects.push(buildBreadcrumbSchema(options.breadcrumbs));
  }

  // Append any custom schemas passed in
  if (options.schemas && options.schemas.length > 0) {
    jsonLdObjects.push(...options.schemas);
  }

  return () => ({
    meta: [
      { title: options.title },
      { name: "description", content: options.description },
      { name: "keywords", content: keywordsString },
      { name: "author", content: BRAND_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },

      // Geo Targeting for Local SEO
      { name: "geo.region", content: `US-${ADDRESS_REGION}` },
      { name: "geo.placename", content: cityName },
      { name: "geo.position", content: `${latitude};${longitude}` },
      { name: "ICBM", content: `${latitude}, ${longitude}` },

      // Open Graph
      { property: "og:site_name", content: BRAND_NAME },
      { property: "og:type", content: pageType },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:alt", content: options.title },
      { property: "og:locale", content: "en_US" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: ogImageUrl },
      { name: "twitter:image:alt", content: options.title },

      // Mobile Browser Accent
      { name: "theme-color", content: "#0f244a" },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
    ],
    scripts: jsonLdObjects.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  });
}

