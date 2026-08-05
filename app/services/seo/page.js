import ClientPage from './ClientPage';

export const metadata = {
  title: "SEO Services & Google Business Bagaha | Maajanki Web Tech",
  description: "Rank #1 on Google with our local SEO services in Bagaha, Bihar. We optimize Google Business Profiles, build links, and do technical audits. Get free audit!",
  keywords: ["SEO services Bagaha","local SEO Bagaha","Google Business Profile optimization"],
  openGraph: {
    title: "SEO Services & Google Business Bagaha | Maajanki Web Tech",
    description: "Rank #1 on Google with our local SEO services in Bagaha, Bihar. We optimize Google Business Profiles, build links, and do technical audits. Get free audit!",
    url: "https://maajankiwebtech.com/services/seo",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services & Google Business Bagaha | Maajanki Web Tech",
    description: "Rank #1 on Google with our local SEO services in Bagaha, Bihar. We optimize Google Business Profiles, build links, and do technical audits. Get free audit!",
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
    "name": "SEO Services & Google Business Profile Optimization",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Search Engine Optimization",
    "description": "Professional local SEO and Google Business Profile optimization services in Bagaha, Bihar. We help businesses rank on the first page of Google, drive organic traffic, and increase leads.",
    "areaServed": [
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Optimization",
            "description": "Google Business Profile setup, optimization, local citations, and map pack ranking."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "On-Page & Technical SEO",
            "description": "Meta tag optimization, schema markup injection, site speed improvement, and crawl budget optimization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Audits & Competitor Analysis",
            "description": "In-depth technical audits and keyword gap analysis against top competitors."
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ClientPage />
    </>
  );
}
