import ClientPage from './ClientPage';

export const metadata = {
  title: "Website Development Company in Bihar & India | Next.js Agency | MaaJanki Web Tech",
  description: "High-speed Next.js & WordPress website development company in Patna, Bettiah, Bagaha & Bihar. We build custom business websites, SaaS apps, and eCommerce portals.",
  keywords: [
    "Website Development Company in Bihar",
    "Website Development Agency in Patna",
    "Website Development Company in Bettiah",
    "Website Development Company in Bagaha",
    "WordPress Website Development Company in Bihar",
    "Custom Website Development Company in India",
    "Small Business Website Development Services",
    "Next.js web development agency India",
    "custom web application developer Bihar",
    "web development company Patna",
    "MaaJanki Web Tech web dev"
  ],
  openGraph: {
    title: "Website Development Company in Bihar & India | MaaJanki Web Tech",
    description: "High-speed Next.js & WordPress website development company in Bettiah, Bagaha, Motihari, Muzaffarpur, Patna, Bihar, and across India.",
    url: "https://maajankiwebtech.com/services/web-development",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Bihar & India | MaaJanki Web Tech",
    description: "High-speed Next.js & WordPress website development company in Bettiah, Bagaha, Patna, Bihar, and across India.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/web-development",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/web-development/#service",
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
