import ClientPage from './ClientPage';

export const metadata = {
  title: "eCommerce Product Listing Services Amazon Flipkart Meesho India & Global | MaaJanki Web Tech",
  description: "Professional eCommerce product listing, cataloging, A+ content, and account management for Amazon, Flipkart, Meesho, Shopify, and IndiaMART in Bihar, India, and globally.",
  keywords: [
    "Amazon product listing Patna",
    "eCommerce cataloging Bihar",
    "Flipkart listing agency India",
    "Shopify product listing USA UK UAE",
    "product listing services Bihar",
    "MaaJanki Web Tech eCommerce"
  ],
  openGraph: {
    title: "eCommerce Product Listing Services Amazon Flipkart Meesho India & Global",
    description: "Professional eCommerce product listing, cataloging, and account management for Amazon, Flipkart, Meesho, Shopify, and IndiaMART.",
    url: "https://maajankiwebtech.com/services/products-listing",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Product Listing Services Amazon Flipkart Meesho India & Global",
    description: "Professional eCommerce product listing and cataloging services.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/products-listing",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://maajankiwebtech.com/services/products-listing/#service",
    "name": "eCommerce Product Listing & Cataloging Services",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "eCommerce Cataloging & Account Management",
    "description": "Multi-channel eCommerce product listing, Amazon A+ content creation, SEO title & bullet writing, inventory setup, and store management for businesses in Patna, Bihar, India, USA, UK, and UAE.",
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
    "@id": "https://maajankiwebtech.com/services/products-listing/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which eCommerce marketplaces do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support Amazon, Flipkart, Meesho, IndiaMART, Shopify, WooCommerce, eBay, Etsy, and Walmart Marketplace."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in product listing optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We craft SEO-optimized product titles, keyword-rich bullet points, backend search terms, high-converting descriptions, and A+ Enhanced Brand Content (EBC)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer full store management for sellers in Bihar and India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle complete seller account setup, catalog upload, price updating, inventory syncing, and sponsored product ads management."
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
