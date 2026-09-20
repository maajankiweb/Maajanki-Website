import ClientPage from './ClientPage';

export const metadata = {
  title: "High-Converting Landing Page Design | MaaJanki Web Tech",
  description: "High-converting landing page design & development services in India. Fast-loading, CRO-engineered landing pages for Google Ads & Meta Ads that drive 5x ROI.",
  keywords: [
    "Landing Page Design India",
    "High Converting Landing Page Development",
    "PPC Landing Page Designer",
    "Google Ads Landing Page Optimization",
    "Lead Generation Landing Pages",
    "Landing Page Agency in Bihar",
    "Landing Page Designer near me",
    "MaaJanki Web Tech Landing Page"
  ],
  openGraph: {
    title: "High-Converting Landing Page Design & Development | MaaJanki Web Tech",
    description: "High-converting landing page design & development services in India. Fast-loading, CRO-engineered landing pages for Google Ads & Meta Ads.",
    url: "https://maajankiwebtech.com/services/landing-page",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Landing Page Design & Development - MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Converting Landing Page Design & Development | MaaJanki Web Tech",
    description: "High-converting landing page design & development services in India. Fast-loading, CRO-engineered landing pages.",
    images: ["https://maajankiwebtech.com/images/og-banner.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/landing-page",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/landing-page",
      "x-default": "https://maajankiwebtech.com/services/landing-page",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/landing-page#webpage",
    "url": "https://maajankiwebtech.com/services/landing-page",
    "name": "High-Converting Landing Page Design | MaaJanki Web Tech",
    "description": "High-converting landing page design & development services in India. Fast-loading, CRO-engineered landing pages for Google Ads & Meta Ads that drive 5x ROI.",
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
    "@id": "https://maajankiwebtech.com/services/landing-page#service",
    "url": "https://maajankiwebtech.com/services/landing-page",
    "name": "High-Converting Landing Page Design & CRO Development",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Landing Page Development",
    "description": "High-converting PPC landing page design and conversion rate optimization (CRO) services for Google Ads, Meta Ads, and performance marketing campaigns in India.",
    "areaServed": [
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landing Page Design Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Performance Landing Pages"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads & Social Media Direct Response Pages"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Product & Free Trial Signup Funnels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "A/B Multivariate CRO Testing & Analytics"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://maajankiwebtech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://maajankiwebtech.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Landing Page Design",
        "item": "https://maajankiwebtech.com/services/landing-page"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/landing-page/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes your landing pages convert higher than standard website pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike regular web pages that offer distracting multi-level menus, our landing pages feature a single 1:1 attention ratio, razor-sharp value propositions, verified trust badges, friction-free forms, and sub-second load speeds."
        }
      },
      {
        "@type": "Question",
        "name": "How does landing page speed impact Google Ads Quality Score and CAC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads rewards fast, highly relevant landing pages with higher Quality Scores (8-10/10), reducing Cost Per Click (CPC) by up to 50% and improving ad auction rank."
        }
      },
      {
        "@type": "Question",
        "name": "Do you integrate CRM and WhatsApp lead automation into landing pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all submitted leads can automatically flow instantly into WhatsApp, Zoho, HubSpot, Google Sheets, or your email inbox via Webhook APIs within seconds of submission."
        }
      },
      {
        "@type": "Question",
        "name": "What technology do you use to build landing pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop landing pages using ultra-fast Next.js 15 Server Components, Tailwind CSS, or custom WordPress Gutenberg templates, ensuring 95+ PageSpeed performance scores."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientPage />
    </>
  );
}
