import ClientPage from './ClientPage';

export const metadata = {
  title: "SEO Services in Bihar & India | AEO Agency | MaaJanki Web Tech",
  description: "Rank #1 on Google with expert SEO in Bihar & India. Local SEO, Technical SEO, AEO optimization & Google Business Profile growth. Get a free audit.",
  keywords: [
    "SEO Services in India",
    "Best SEO Company India",
    "SEO Agency for Small Businesses",
    "Local SEO Services India",
    "Affordable SEO Services India",
    "Google Business Profile optimization India",
    "Generative AI Engine Optimization AEO",
    "MaaJanki Web Tech SEO"
  ],
  openGraph: {
    title: "SEO Services in Bihar & India | AEO Agency | MaaJanki Web Tech",
    description: "Rank #1 on Google with expert SEO in Bihar & India. Local SEO, Technical SEO, AEO optimization & Google Business Profile growth. Get a free audit.",
    url: "https://maajankiwebtech.com/services/seo",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/seo-banner-image-Maajanki-Web-Tech.webp",
        width: 1200,
        height: 630,
        alt: "SEO Services in Bihar & India | AEO Agency | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Bihar & India | AEO Agency | MaaJanki Web Tech",
    description: "Rank #1 on Google with expert SEO in Bihar & India. Local SEO, Technical SEO, AEO optimization & Google Business Profile growth. Get a free audit.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/seo",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/seo",
      "x-default": "https://maajankiwebtech.com/services/seo",
    },
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/seo#service",
    "url": "https://maajankiwebtech.com/services/seo",
    "name": "SEO Services & AI Engine Optimization (AEO)",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Search Engine Optimization",
    "description": "Professional SEO services in Patna, Bihar, and India. Specializing in Local SEO, Google Business Profile optimization, Technical SEO audits, and Generative AI Search (AEO/GEO) citations.",
    "areaServed": [
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO & AEO Services Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO & Google Business Profile Optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO & Core Web Vitals Optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative Engine Optimization (GEO) & AI Answer Engine Optimization (AEO)"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://maajankiwebtech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://maajankiwebtech.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO Services",
        "item": "https://maajankiwebtech.com/services/seo"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/seo/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are MaaJanki Web Tech's SEO services in Patna & Bihar effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine local Google Search Console data, Google Business Profile optimization, Schema.org structured data, and high-quality entity citations to guarantee maximum search visibility."
        }
      },
      {
        "@type": "Question",
        "name": "What is AI Engine Optimization (AEO) and how does it help my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO ensures your website is indexed, cited, and recommended by AI assistants like ChatGPT, Perplexity, Google Gemini, and Claude when users ask for recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "How does Local SEO help businesses in Bihar capture 'near me' searches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local SEO optimizes your Google Business Profile (GBP), geo-targeted landing pages, and localized Schema.org markup to rank in the Google Maps 3-Pack for high-intent searches like 'web designer near me' across Patna, Bettiah, Bagaha, and Muzaffarpur."
        }
      },
      {
        "@type": "Question",
        "name": "What is Generative Engine Optimization (GEO) for AI search engines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO optimizes your brand's digital presence with structured entities, /llms.txt manifests, and authoritative content formatting so AI engines like Perplexity, ChatGPT Search, and Google AI Overviews cite your business as the definitive recommendation."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can my business rank on Google in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With our targeted local SEO and IndexNow instant indexing pings, local search rankings typically see noticeable movement within 14 to 30 days."
        }
      }
    ]
  };

  const localSeoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/seo#local-seo",
    "name": "Local SEO Services in Bihar",
    "serviceType": "Local Search Engine Optimization",
    "url": "https://maajankiwebtech.com/services/seo",
    "provider": { "@id": "https://maajankiwebtech.com/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "City", "name": "Patna" },
      { "@type": "State", "name": "Bihar" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/seo#webpage",
    "url": "https://maajankiwebtech.com/services/seo",
    "name": "SEO Services in Bihar & India | AEO Agency | MaaJanki Web Tech",
    "inLanguage": "en-IN",
    "dateModified": "2026-09-20",
    "isPartOf": {
      "@id": "https://maajankiwebtech.com/#website"
    },
    "about": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "mainEntity": {
      "@id": "https://maajankiwebtech.com/services/seo#service"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientPage />
    </>
  );
}
