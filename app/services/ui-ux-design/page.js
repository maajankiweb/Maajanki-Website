import ClientPage from './ClientPage';

export const metadata = {
  title: "Web & Mobile App UI UX Design Services in India & Global | MaaJanki Web Tech",
  description: "Create intuitive, user-centered website and mobile application UI/UX designs in India, serving startups and enterprises in USA, UK, Canada, and UAE.",
  keywords: [
    "UI UX design services India",
    "mobile app designer India",
    "Figma UI UX agency India",
    "web application design company India",
    "UI UX design agency USA UK UAE",
    "MaaJanki Web Tech UI UX"
  ],
  openGraph: {
    title: "Web & Mobile App UI UX Design Services in India & Global | MaaJanki Web Tech",
    description: "Create intuitive, user-centered website and mobile application UI/UX designs in India and globally.",
    url: "https://maajankiwebtech.com/services/ui-ux-design",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/ui-ux-design-banner-image-Maajanki-Web-Tech.webp",
        width: 1200,
        height: 630,
        alt: "Web & Mobile App UI UX Design Services in India | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Mobile App UI UX Design Services in India & Global | MaaJanki Web Tech",
    description: "Create intuitive, user-centered website and mobile application UI/UX designs.",
    images: ["https://maajankiwebtech.com/images/pages/main-services-pages/ui-ux-design-banner-image-Maajanki-Web-Tech.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/ui-ux-design",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/ui-ux-design",
      "x-default": "https://maajankiwebtech.com/services/ui-ux-design",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/ui-ux-design#webpage",
    "url": "https://maajankiwebtech.com/services/ui-ux-design",
    "name": "Web & Mobile App UI UX Design Services in India & Global | MaaJanki Web Tech",
    "description": "Create intuitive, user-centered website and mobile application UI/UX designs. User research, wireframing, and interactive Figma prototypes.",
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
    "@id": "https://maajankiwebtech.com/services/ui-ux-design#service",
    "url": "https://maajankiwebtech.com/services/ui-ux-design",
    "name": "Web & Mobile App UI/UX Design Services",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "UI/UX Design",
    "description": "User research, wireframing, interactive Figma prototypes, design systems, and mobile app UI/UX design for startups and enterprises in Patna, Bihar, India, USA, UK, Canada, and UAE.",
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
    "@id": "https://maajankiwebtech.com/services/ui-ux-design/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What tools do you use for UI/UX design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily use Figma, Adobe XD, Photoshop, Illustrator, and Principle to craft interactive prototypes, wireframes, and design systems."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design mobile applications for iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design responsive mobile application interfaces (UI) and user flows (UX) tailored for iOS, Android, and web platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Can you redesign our existing application to improve user retention?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we perform UX audits, analyze user drop-off points, and re-architect your product's UI/UX to maximize engagement, accessibility, and conversions."
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
