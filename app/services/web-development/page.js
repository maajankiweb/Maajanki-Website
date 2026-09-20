import ClientPage from './ClientPage';

export const metadata = {
  title: "Web Development Services in India | MaaJanki Web Tech",
  description: "Premier web development company & website designer in India. High-speed Next.js web apps, corporate portals, e-commerce, and local SEO. Get a free quote!",
  keywords: [
    "website designer near me",
    "web development company near me",
    "web development company",
    "website developer",
    "website design",
    "web designer",
    "website maker",
    "Web Development Company in India",
    "Website Development Agency India",
    "Next.js web development agency India",
    "WordPress Website Development Company India",
    "Custom Website Development Company in India",
    "Small Business Website Development Services",
    "custom web application developer India",
    "MaaJanki Web Tech web dev"
  ],
  openGraph: {
    title: "Web Development Services in India | MaaJanki Web Tech",
    description: "Premier web development company in India. High-speed Next.js web applications, corporate websites, SaaS platforms, and eCommerce portals.",
    url: "https://maajankiwebtech.com/services/web-development",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/web-development-banner-image-Maajanki-Web-Tech.webp",
        width: 1200,
        height: 630,
        alt: "Web Development Services in India | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in India | MaaJanki Web Tech",
    description: "Premier web development company in India. High-speed Next.js & WordPress web applications.",
    images: ["https://maajankiwebtech.com/images/pages/main-services-pages/web-development-banner-image-Maajanki-Web-Tech.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/web-development",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/web-development",
      "x-default": "https://maajankiwebtech.com/services/web-development",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/web-development#webpage",
    "url": "https://maajankiwebtech.com/services/web-development",
    "name": "Web Development Services in India | MaaJanki Web Tech",
    "description": "Premier web development company & website designer in India. High-speed Next.js web apps, corporate portals, e-commerce, and local SEO.",
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
    "@id": "https://maajankiwebtech.com/services/web-development#service",
    "url": "https://maajankiwebtech.com/services/web-development",
    "name": "Next.js Web Development & Custom Web Application Development",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Web Development",
    "description": "High-performance website development agency & software company in Bettiah, Bagaha, Motihari, Muzaffarpur, Patna, Bihar, UP, Delhi, MP, West Bengal.",
    "areaServed": [
      { "@type": "City", "name": "Bettiah" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "City", "name": "Muzaffarpur" },
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bihar Sharif" },
      { "@type": "City", "name": "Gaya" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "State", "name": "Uttar Pradesh" },
      { "@type": "State", "name": "Delhi" },
      { "@type": "State", "name": "Madhya Pradesh" },
      { "@type": "State", "name": "West Bengal" },
      { "@type": "Country", "name": "India" }
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
        "name": "Web Development",
        "item": "https://maajankiwebtech.com/services/web-development"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/web-development/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose MaaJanki Web Tech as your Next.js web development agency in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaaJanki Web Tech builds ultra-fast, SEO-optimized Next.js 15 web applications with 100/100 Lighthouse performance scores, server-side rendering (SSR), and machine-readable AEO structure."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer custom web application development services in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are a leading custom web application developer in Bihar (Patna, Bagaha, Bettiah), building custom SaaS software, GST billing tools, CRM platforms, and corporate enterprise portals."
        }
      },
      {
        "@type": "Question",
        "name": "What technology stack do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We utilize Next.js 15, React, Node.js, MongoDB Atlas, Tailwind CSS, Bootstrap 5, and WordPress to deliver robust, high-security digital products."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom WordPress development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom WordPress website development typically ranges from ₹15,000 to ₹60,000 depending on custom Gutenberg block theme requirements, dynamic custom post types, WooCommerce store setup, and bespoke design complexity."
        }
      },
      {
        "@type": "Question",
        "name": "What is the turnaround time and cost for high-converting landing page development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-converting landing pages are custom designed and launched within 3 to 7 business days, with pricing starting from ₹8,000 including responsive web design, conversion-focused copywriting, GA4 event tracking, and 95+ Core Web Vitals speed optimization."
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
