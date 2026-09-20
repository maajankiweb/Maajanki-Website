import ClientPage from "./ClientPage";

export const metadata = {
  title: "Web Development & Digital Marketing Agency in India | MaaJanki Web Tech",
  description: "MaaJanki Web Tech — India's premier web development & digital marketing agency. Expert in Next.js, SEO, Google Ads & performance marketing. Free 30-min audit.",
  keywords: [
    "Web Development Agency in India",
    "Digital Marketing Agency in India",
    "Website Designer Near Me",
    "Web Development Company Near Me",
    "Next.js Web Development India",
    "Best SEO Company India",
    "AI SEO Agency in Bettiah",
    "Generative Engine Optimization Company",
    "Website Designer in Bihar",
    "Performance Marketing Agency India",
    "Google Ads Management India",
    "MaaJanki Web Tech"
  ],
  alternates: {
    canonical: "https://maajankiwebtech.com",
    languages: {
      "en-IN": "https://maajankiwebtech.com",
      "en-US": "https://maajankiwebtech.com/locations/united-states",
      "en-GB": "https://maajankiwebtech.com/locations/united-kingdom",
      "en-CA": "https://maajankiwebtech.com/locations/canada",
      "en-AU": "https://maajankiwebtech.com/locations/australia",
      "en-AE": "https://maajankiwebtech.com/locations/united-arab-emirates",
      "x-default": "https://maajankiwebtech.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Web Development & Digital Marketing Agency in India | MaaJanki Web Tech",
    description: "MaaJanki Web Tech — India's premier web development & digital marketing agency. Expert in Next.js, SEO, Google Ads & performance marketing. Free 30-min audit.",
    url: "https://maajankiwebtech.com",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "MaaJanki Web Tech — Web Development & Digital Marketing Agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Agency in India | MaaJanki Web Tech",
    description: "MaaJanki Web Tech — India's premier web development & digital marketing agency. Expert in Next.js, SEO, Google Ads & performance marketing. Free 30-min audit.",
    images: ["https://maajankiwebtech.com/images/og-banner.webp"],
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best digital marketing agency in Bihar, India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaaJanki Web Tech is recognized as Bihar's leading digital marketing agency and webtech company, delivering result-oriented SEO, Google Ads, social media growth, and custom Next.js web application engineering across Bihar (Patna, Bettiah, Bagaha, Motihari) and India."
        }
      },
      {
        "@type": "Question",
        "name": "What services does MaaJanki Web Tech offer as a full-service agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer full-funnel digital solutions: Next.js Website Development, WordPress CMS Development, High-Converting Landing Pages, SEO & AI Engine Optimization (AEO/GEO), Performance Marketing (Google Ads, Meta Ads), Social Media Marketing (SMO), UI/UX Design, and Custom SaaS Software."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a top web designer and webtech company near me in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, MaaJanki Web Tech is an accredited web development and web design company headquartered in Bihar. We serve clients locally in Bettiah, Bagaha, Motihari, Muzaffarpur, and Patna, as well as businesses nationwide across India and overseas."
        }
      },
      {
        "@type": "Question",
        "name": "How do you help small businesses in India scale online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine sub-second loading web design with localized Google Maps SEO, automated WhatsApp CRM lead response, and ROI-focused performance ad campaigns to predictably turn website visitors into paying customers."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of website development and marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs depend on your specific project scope, design complexity, and feature set. We provide transparent, milestone-based proposals engineered to ensure maximum Return on Ad Spend (ROAS) and long-term organic growth."
        }
      },
      {
        "@type": "Question",
        "name": "How can I schedule a free digital strategy consultation with MaaJanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a free 30-minute growth audit through our Contact page, or call our team directly at +91-9006543913. Our lead architects will analyze your digital presence and deliver an actionable execution plan."
        }
      }
    ]
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
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "InvoBill",
    "operatingSystem": "Windows, Web",
    "applicationCategory": "BusinessApplication",
    "description": "InvoBill is a hybrid GST billing and invoicing platform for Indian businesses. Design tax-compliant GST invoices in 60 seconds — works online and offline.",
    "url": "https://invobill.in",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "MaaJanki Web Tech"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/#webpage",
    "url": "https://maajankiwebtech.com/",
    "name": "Web Development & Digital Marketing Agency in India | MaaJanki Web Tech",
    "inLanguage": "en-IN",
    "datePublished": "2020-01-01",
    "dateModified": "2026-09-20",
    "author": {
      "@id": "https://maajankiwebtech.com/#founder"
    },
    "isPartOf": {
      "@id": "https://maajankiwebtech.com/#website"
    },
    "about": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "mainEntity": {
      "@id": "https://maajankiwebtech.com/#localbusiness"
    }
  };

  const servicesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MaaJanki Web Tech Services",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Web Development", "url": "https://maajankiwebtech.com/services/web-development" },
      { "@type": "ListItem", "position": 2, "name": "SEO & AEO", "url": "https://maajankiwebtech.com/services/seo" },
      { "@type": "ListItem", "position": 3, "name": "Performance Marketing", "url": "https://maajankiwebtech.com/services/performance-marketing" },
      { "@type": "ListItem", "position": 4, "name": "Social Media Marketing", "url": "https://maajankiwebtech.com/services/smo" },
      { "@type": "ListItem", "position": 5, "name": "Mobile App Development", "url": "https://maajankiwebtech.com/services/mobile-app-development" },
      { "@type": "ListItem", "position": 6, "name": "Content Writing", "url": "https://maajankiwebtech.com/services/content-writing" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <ClientPage />
    </>
  );
}
