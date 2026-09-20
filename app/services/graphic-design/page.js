import ClientPage from './ClientPage';

export const metadata = {
  title: "Graphic Design & Social Media Creatives Agency in India & Global | MaaJanki Web Tech",
  description: "Professional graphic design, marketing creatives, social media post designs, and branding assets in India, serving enterprises across USA, UK, and UAE.",
  keywords: [
    "graphic design agency India",
    "social media post designer India",
    "creative branding agency India",
    "digital creatives company India",
    "marketing banner design India",
    "MaaJanki Web Tech graphics"
  ],
  openGraph: {
    title: "Graphic Design & Social Media Creatives Agency in India & Global | MaaJanki Web Tech",
    description: "Professional graphic design, banner creation, and social media post design in India and globally.",
    url: "https://maajankiwebtech.com/services/graphic-design",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/graphic-design-banner-image-Maajanki-Web-Tech.webp",
        width: 1200,
        height: 630,
        alt: "Graphic Design & Social Media Creatives Agency in India | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design & Social Media Creatives Agency in India & Global | MaaJanki Web Tech",
    description: "Professional graphic design and social media creative services.",
    images: ["https://maajankiwebtech.com/images/pages/main-services-pages/graphic-design-banner-image-Maajanki-Web-Tech.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/graphic-design",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/graphic-design",
      "x-default": "https://maajankiwebtech.com/services/graphic-design",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/graphic-design#webpage",
    "url": "https://maajankiwebtech.com/services/graphic-design",
    "name": "Graphic Design & Social Media Creatives Agency in India & Global | MaaJanki Web Tech",
    "description": "Professional graphic design and social media creative services. Marketing banners, brochures, and visual brand assets.",
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
    "@id": "https://maajankiwebtech.com/services/graphic-design#service",
    "url": "https://maajankiwebtech.com/services/graphic-design",
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
