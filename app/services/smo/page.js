import ClientPage from './ClientPage';

export const metadata = {
  title: "Social Media Marketing (SMO) Services | MaaJanki Web Tech",
  description: "Build brand authority with social media marketing on Facebook, Instagram, LinkedIn & X. SMO agency in Bihar, India — measurable reach and lead generation.",
  keywords: [
    "SMO services India",
    "social media marketing India",
    "Instagram growth agency India",
    "LinkedIn B2B marketing India",
    "social media optimization agency",
    "MaaJanki Web Tech SMO"
  ],
  openGraph: {
    title: "Social Media Marketing (SMO) Services | MaaJanki Web Tech",
    description: "Build brand authority with social media marketing on Facebook, Instagram, LinkedIn & X. SMO agency in Bihar, India — measurable reach and lead generation.",
    url: "https://maajankiwebtech.com/services/smo",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/smo-banner-image-Maajanki-Web-Tech.webp",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing (SMO) Services | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing (SMO) Services | MaaJanki Web Tech",
    description: "Build brand authority with social media marketing on Facebook, Instagram, LinkedIn & X. SMO agency in Bihar, India — measurable reach and lead generation.",
    images: ["https://maajankiwebtech.com/images/pages/main-services-pages/smo-banner-image-Maajanki-Web-Tech.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/smo",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/smo",
      "x-default": "https://maajankiwebtech.com/services/smo",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/smo#webpage",
    "url": "https://maajankiwebtech.com/services/smo",
    "name": "Social Media Marketing (SMO) Services | MaaJanki Web Tech",
    "description": "Grow your organic brand reach with social media optimization (SMO) and social media marketing across Facebook, Instagram, LinkedIn, and YouTube.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://maajankiwebtech.com/#website",
      "name": "MaaJanki Web Tech",
      "url": "https://maajankiwebtech.com/"
    },
    "inLanguage": "en-IN"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/smo#service",
    "url": "https://maajankiwebtech.com/services/smo",
    "name": "Social Media Optimization (SMO) & Organic Marketing",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Social Media Marketing",
    "description": "Comprehensive social media optimization (SMO), profile verification, content calendar creation, viral reel management, and community engagement for brands in Patna, Bihar, India, USA, UK, Canada, and UAE.",
    "areaServed": [
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/smo/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between SMO and SMM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMO focuses on optimizing social profiles, organic content, hashtag strategy, and audience engagement, whereas SMM includes paid advertising campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "Which social media platforms do you optimize?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We optimize Facebook Business Pages, Instagram Business Accounts, LinkedIn Company Pages, YouTube Channels, and X (Twitter) Profiles."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide monthly social media content calendars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design custom post graphics, write compelling captions, research trending hashtags, and schedule regular content posting month-on-month."
        }
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientPage />
    </>
  );
}
