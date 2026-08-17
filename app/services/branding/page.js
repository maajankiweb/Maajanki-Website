import ClientPage from './ClientPage';

export const metadata = {
  title: "Logo Design & Corporate Branding Services in Patna, Bihar, India & Global | MaaJanki Web Tech",
  description: "Build a world-class brand identity with expert logo design, brand guidelines, and corporate branding services in Patna, Bihar, India, USA, UK, and UAE.",
  keywords: [
    "logo design Patna",
    "corporate branding Bihar",
    "brand identity design India",
    "logo design agency USA UK UAE",
    "branding company Patna",
    "MaaJanki Web Tech branding"
  ],
  openGraph: {
    title: "Logo Design & Corporate Branding Services in Patna, Bihar, India & Global",
    description: "Build a world-class brand identity with expert logo design and corporate branding services in Patna, Bihar, India, and internationally.",
    url: "https://maajankiwebtech.com/services/branding",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design & Corporate Branding Services in Patna, Bihar, India & Global",
    description: "Build a world-class brand identity with expert logo design and corporate branding services.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/branding",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/branding/#service",
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
