import ClientPage from './ClientPage';

export const metadata = {
  title: "WordPress & Next.js Web Dev Bihar | Maajanki Web Tech",
  description: "Build fast, SEO-optimized custom websites and Next.js web applications in Bagaha, West Champaran, Bihar. Get a free website development quote today!",
  keywords: ["WordPress developer Bihar","web development Bagaha","Next.js developer Bihar"],
  openGraph: {
    title: "WordPress & Next.js Web Dev Bihar | Maajanki Web Tech",
    description: "Build fast, SEO-optimized custom websites and Next.js web applications in Bagaha, West Champaran, Bihar. Get a free website development quote today!",
    url: "https://maajankiwebtech.com/services/web-development",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress & Next.js Web Dev Bihar | Maajanki Web Tech",
    description: "Build fast, SEO-optimized custom websites and Next.js web applications in Bagaha, West Champaran, Bihar. Get a free website development quote today!",
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
    "name": "Custom Website Development & E-Commerce Solutions",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Web Development",
    "description": "High-performance, secure, and mobile-friendly web development using Next.js, React, and WordPress. We build custom business websites, landing pages, and e-commerce stores in Bagaha, Bihar.",
    "areaServed": [
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Bettiah" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ClientPage />
    </>
  );
}
