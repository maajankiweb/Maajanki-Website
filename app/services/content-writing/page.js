import ClientPage from './ClientPage';

export const metadata = {
  title: "SEO Content Writing & Copywriting Services in Patna, Bihar, India & Global | MaaJanki Web Tech",
  description: "Hire expert SEO content writers and technical copywriters in Patna, Bihar, India, serving clients across USA, UK, Canada, and UAE. Rank higher on Google and AI search engines.",
  keywords: [
    "SEO content writing Patna",
    "copywriters Bihar",
    "technical content writing India",
    "website copywriter USA UK UAE",
    "blog writing agency Patna",
    "MaaJanki Web Tech content"
  ],
  openGraph: {
    title: "SEO Content Writing & Copywriting Services in Patna, Bihar, India & Global",
    description: "Hire expert SEO content writers and copywriters in Patna, Bihar, India, and globally.",
    url: "https://maajankiwebtech.com/services/content-writing",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Content Writing & Copywriting Services in Patna, Bihar, India & Global",
    description: "Hire expert SEO content writers and copywriters in Patna, Bihar, India, and globally.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/content-writing",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/content-writing/#service",
    "name": "SEO Content Writing & Copywriting Services",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Content Creation & Copywriting",
    "description": "High-converting SEO content writing, website copywriting, technical documentation, and blog writing services for businesses in Patna, Bihar, India, USA, UK, Canada, and UAE.",
    "areaServed": [
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/content-writing/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why hire MaaJanki Web Tech for SEO content writing in Patna & Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our content is crafted by senior SEO strategists, optimized for target keywords, formatted for AI Engine Optimization (AEO), and written to convert visitors into paying customers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer technical copywriting and website content writing for international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we write high-quality technical content, SaaS documentation, landing page copy, and blog articles for businesses in USA, UK, Canada, UAE, Australia, and India."
        }
      },
      {
        "@type": "Question",
        "name": "Is your content original and plagiarism-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100% yes. Every article and webpage is original, backed by thorough research, verified for zero plagiarism, and optimized for search engine indexing."
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
