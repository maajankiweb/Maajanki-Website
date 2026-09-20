import ClientPage from './ClientPage';

export const metadata = {
  title: "Logo Design & Corporate Branding Services in India & Global | MaaJanki Web Tech",
  description: "Build a world-class brand identity with expert logo design, brand guidelines, and corporate branding services in India, USA, UK, and UAE.",
  keywords: [
    "logo design services India",
    "corporate branding agency India",
    "brand identity design India",
    "logo design company India",
    "branding agency USA UK UAE",
    "MaaJanki Web Tech branding"
  ],
  openGraph: {
    title: "Logo Design & Corporate Branding Services in India & Global | MaaJanki Web Tech",
    description: "Build a world-class brand identity with expert logo design and corporate branding services in India and internationally.",
    url: "https://maajankiwebtech.com/services/branding",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/branding-banner-image-Maajanki-Web-Tech.webp",
        width: 1200,
        height: 630,
        alt: "Logo Design & Corporate Branding Services in India | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design & Corporate Branding Services in India & Global | MaaJanki Web Tech",
    description: "Build a world-class brand identity with expert logo design and corporate branding services.",
    images: ["https://maajankiwebtech.com/images/pages/main-services-pages/branding-banner-image-Maajanki-Web-Tech.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/branding",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/branding",
      "x-default": "https://maajankiwebtech.com/services/branding",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/branding#webpage",
    "url": "https://maajankiwebtech.com/services/branding",
    "name": "Logo Design & Corporate Branding Services in India & Global | MaaJanki Web Tech",
    "description": "Build a world-class brand identity with expert logo design, corporate branding, visual guidelines, and brand strategy.",
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
    "@id": "https://maajankiwebtech.com/services/branding#service",
    "url": "https://maajankiwebtech.com/services/branding",
    "name": "Logo Design & Corporate Branding Services",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Branding & Brand Strategy",
    "description": "Professional logo design, brand guidelines, corporate identity design, and visual branding solutions for businesses in Patna, Bihar, India, USA, UK, Canada, and UAE.",
    "areaServed": [
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Australia" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/branding/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in MaaJanki Web Tech's branding services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our branding package includes custom logo design, color palette definition, typography guidelines, brand identity manuals, business cards, social media kits, and corporate stationery."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide corporate logo design services in Patna, Bihar, and internationally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we create iconic, vector-based custom logos for startups, MSMEs, and global enterprises across Patna, Bihar, India, USA, UK, and UAE."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a full brand identity design project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A complete corporate branding project typically takes 5 to 10 business days, including initial conceptualization, revisions, and brand kit delivery."
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
