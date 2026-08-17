import ClientPage from './ClientPage';

export const metadata = {
  title: "SEO Services in Patna, Bihar & India | Local SEO & AEO Agency | MaaJanki Web Tech",
  description: "Rank #1 on Google and AI search engines with expert SEO services in Patna, Bettiah, Bagaha, Bihar & India. Local SEO, AEO (AI Engine Optimization), and GBP management.",
  keywords: [
    "SEO Services in Patna",
    "SEO Company in Bihar",
    "Best SEO Agency Bihar",
    "Local SEO Services in Bihar",
    "Affordable SEO Services Bihar",
    "SEO Agency for Small Businesses",
    "Google Business Profile optimization Bihar",
    "Generative AI Engine Optimization AEO",
    "MaaJanki Web Tech SEO"
  ],
  openGraph: {
    title: "SEO Services in Patna, Bihar & India | Local SEO & AEO Agency | MaaJanki Web Tech",
    description: "Rank #1 on Google and AI search engines with expert SEO services in Patna, Bettiah, Bagaha, Bihar, and across India.",
    url: "https://maajankiwebtech.com/services/seo",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Patna, Bihar & India | Local SEO & AEO Agency | MaaJanki Web Tech",
    description: "Rank #1 on Google and AI search engines with expert SEO services in Patna, Bettiah, Bagaha, Bihar, and across India.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/seo",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/seo/#service",
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
            "name": "Local SEO & Map Pack Optimization",
            "description": "Google Business Profile setup, local citation building, and map pack ranking in Patna & Bihar."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative Engine Optimization (AEO/GEO)",
            "description": "Structuring content for ChatGPT, Perplexity, Google Gemini, and Claude AI citations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO & Schema Injection",
            "description": "Meta tag optimization, Schema.org JSON-LD injection, site speed optimization, and IndexNow pings."
          }
        }
      ]
    }
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
        "name": "How quickly can my business rank on Google in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With our targeted local SEO and IndexNow instant indexing pings, local search rankings typically see noticeable movement within 14 to 30 days."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientPage />
    </>
  );
}
