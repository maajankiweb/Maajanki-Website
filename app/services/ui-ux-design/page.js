import ClientPage from './ClientPage';

export const metadata = {
  title: "Web & Mobile App UI UX Design Services Bihar, Patna, India & Global | MaaJanki Web Tech",
  description: "Create intuitive, user-centered website and mobile application UI/UX designs in Patna, Bihar, India, serving clients in USA, UK, Canada, and UAE.",
  keywords: [
    "UI UX design Patna",
    "mobile app designer Bihar",
    "Figma UI UX agency India",
    "UI UX design company USA UK UAE",
    "web app design Patna",
    "MaaJanki Web Tech UI UX"
  ],
  openGraph: {
    title: "Web & Mobile App UI UX Design Services Bihar, Patna, India & Global",
    description: "Create intuitive, user-centered website and mobile application UI/UX designs in Patna, Bihar, India, and globally.",
    url: "https://maajankiwebtech.com/services/ui-ux-design",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Mobile App UI UX Design Services Bihar, Patna, India & Global",
    description: "Create intuitive, user-centered website and mobile application UI/UX designs.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/ui-ux-design",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/ui-ux-design/#service",
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
