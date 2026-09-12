import ClientPage from './ClientPage';

export const metadata = {
  title: "Google Ads & PPC Agency in India | Performance Marketing | MaaJanki Web Tech",
  description: "Drive high-converting leads with ROI-focused Google Ads and Meta Ads management in India. Certified PPC and performance marketing agency for scalable growth.",
  keywords: [
    "Google Ads agency India",
    "PPC agency India",
    "performance marketing India",
    "Google Ads Management Services India",
    "Facebook Ads management agency India",
    "Google Ads for small businesses India",
    "paid advertising services India",
    "MaaJanki Web Tech PPC"
  ],
  openGraph: {
    title: "Google Ads & PPC Agency in India | Performance Marketing | MaaJanki Web Tech",
    description: "Drive high-converting leads with ROI-focused Google Ads and Meta Ads management in India.",
    url: "https://maajankiwebtech.com/services/performance-marketing",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads & PPC Agency in India | Performance Marketing | MaaJanki Web Tech",
    description: "Drive high-converting leads with ROI-focused Google Ads and Meta Ads management in India.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/performance-marketing",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/performance-marketing/#service",
    "name": "Performance Marketing & PPC Advertising Services",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Performance Marketing",
    "description": "High-ROI Google Search Ads, Display Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, and conversion rate optimization (CRO) for businesses in Patna, Bihar, India, USA, UK, Canada, and UAE.",
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
    "@id": "https://maajankiwebtech.com/services/performance-marketing/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What ad platforms does MaaJanki Web Tech manage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage Google Search Ads, Google Shopping Ads, YouTube Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, and Retargeting campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "How do you optimize PPC campaigns for maximum ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We conduct continuous A/B ad testing, negative keyword optimization, landing page CRO, and conversion tracking via Google Tag Manager and GA4."
        }
      },
      {
        "@type": "Question",
        "name": "Do you manage international Google Ads campaigns for foreign markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we run localized performance marketing campaigns for clients targeting buyers in USA, UK, Canada, Australia, UAE, and India."
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
