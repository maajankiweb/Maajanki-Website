import ClientPage from './ClientPage';

export const metadata = {
  title: "Social Media Optimization (SMO) Services Patna, Bihar, India & Global | MaaJanki Web Tech",
  description: "Grow your organic brand reach with social media optimization (SMO) and social media marketing across Facebook, Instagram, LinkedIn, and YouTube in Patna, Bihar, India, USA, UK, and UAE.",
  keywords: [
    "SMO services Patna",
    "social media marketing Bihar",
    "Instagram growth agency India",
    "SMO agency USA UK UAE",
    "social media optimization Patna",
    "MaaJanki Web Tech SMO"
  ],
  openGraph: {
    title: "Social Media Optimization (SMO) Services Patna, Bihar, India & Global",
    description: "Grow organic brand reach with social media optimization across Facebook, Instagram, LinkedIn, and YouTube in Patna, Bihar, India, and globally.",
    url: "https://maajankiwebtech.com/services/smo",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Optimization (SMO) Services Patna, Bihar, India & Global",
    description: "Grow organic brand reach with social media optimization services.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/smo",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/smo/#service",
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
