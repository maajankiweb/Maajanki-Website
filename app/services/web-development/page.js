import ClientPage from './ClientPage';

export const metadata = {
  title: "Next.js Web Development Agency India & Custom Web App Developer Bihar | MaaJanki Web Tech",
  description: "Premier Next.js web development agency in India & custom web application developer in Patna, Bihar. We build high-speed Next.js 15 apps, custom SaaS, and e-commerce platforms.",
  keywords: [
    "Next.js web development agency India",
    "custom web application developer Bihar",
    "web development company Patna",
    "WordPress developer Bihar",
    "React web agency India",
    "MaaJanki Web Tech web dev"
  ],
  openGraph: {
    title: "Next.js Web Development Agency India & Custom Web App Developer Bihar",
    description: "Premier Next.js web development agency in India & custom web application developer in Patna, Bihar. High-speed, SEO-optimized web apps.",
    url: "https://maajankiwebtech.com/services/web-development",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Web Development Agency India & Custom Web App Developer Bihar",
    description: "Premier Next.js web development agency in India & custom web application developer in Patna, Bihar.",
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
    "description": "High-performance Next.js web development agency in India & custom web application developer in Bihar. Building scalable React/Next.js 15 platforms, custom SaaS software, and e-commerce portals.",
    "areaServed": [
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "State", "name": "Bihar" },
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
