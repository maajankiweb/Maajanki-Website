import ClientPage from './ClientPage';

export const metadata = {
  title: "Graphic Design & Social Media Creatives Agency Patna, Bihar, India & Global | MaaJanki Web Tech",
  description: "Professional graphic design, banner creation, social media post design, and UI graphics in Patna, Bihar, India, serving clients in USA, UK, and UAE.",
  keywords: [
    "graphic design Patna",
    "social media post designer Bihar",
    "creative agency India",
    "graphic design company USA UK UAE",
    "banner design Patna",
    "MaaJanki Web Tech graphics"
  ],
  openGraph: {
    title: "Graphic Design & Social Media Creatives Agency Patna, Bihar, India & Global",
    description: "Professional graphic design, banner creation, and social media post design in Patna, Bihar, India, and globally.",
    url: "https://maajankiwebtech.com/services/graphic-design",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design & Social Media Creatives Agency Patna, Bihar, India & Global",
    description: "Professional graphic design and social media post design.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/graphic-design",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/graphic-design/#service",
    "name": "Graphic Design & Social Media Creatives Services",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Graphic Design",
    "description": "Stunning graphic design, social media post creatives, marketing banners, brochures, and visual brand assets for clients in Patna, Bihar, India, USA, UK, Canada, and UAE.",
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
    "@id": "https://maajankiwebtech.com/services/graphic-design/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What graphic design services does MaaJanki Web Tech offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide custom logo design, social media post banners, ad creatives, brochures, flyers, vector graphics, product packaging mockups, and UI visual assets."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design social media ad banners for Facebook, Instagram & LinkedIn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design high-converting ad banners and organic post creatives tailored for Facebook, Instagram, LinkedIn, YouTube, and X (Twitter)."
        }
      },
      {
        "@type": "Question",
        "name": "What vector file formats do you deliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver high-resolution PNG, JPG, WebP files along with source files in AI (Adobe Illustrator), PSD (Photoshop), SVG, and PDF formats."
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
