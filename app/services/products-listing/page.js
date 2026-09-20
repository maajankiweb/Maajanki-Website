import ClientPage from './ClientPage';

export const metadata = {
  title: "eCommerce Product Listing Services India | MaaJanki Web Tech",
  description: "Professional eCommerce product listing design services, Magento cataloging, Amazon A+ content & multi-marketplace store management across India. Get free sample listings!",
  keywords: [
    "ecommerce product listing design services",
    "magento product listing services",
    "business listing websites in india",
    "Product listing services in India",
    "eCommerce cataloging India",
    "Amazon Flipkart product listing services",
    "Amazon product listing agency India",
    "Flipkart product listing agency India",
    "eCommerce product upload and listing services",
    "MaaJanki Web Tech eCommerce"
  ],
  openGraph: {
    title: "eCommerce Product Listing Services India | MaaJanki Web Tech",
    description: "Professional eCommerce product listing design services, Magento cataloging, and account management for Amazon, Flipkart, Meesho, Shopify, and IndiaMART.",
    url: "https://maajankiwebtech.com/services/products-listing",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/Products-Listing-banner-Maajanki.webp",
        width: 1200,
        height: 630,
        alt: "eCommerce Product Listing Services India | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Product Listing Services India | MaaJanki Web Tech",
    description: "Professional eCommerce product listing design and Magento cataloging services for sellers in India.",
    images: ["https://maajankiwebtech.com/images/pages/main-services-pages/Products-Listing-banner-Maajanki.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/products-listing",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/products-listing",
      "x-default": "https://maajankiwebtech.com/services/products-listing",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/products-listing#webpage",
    "url": "https://maajankiwebtech.com/services/products-listing",
    "name": "eCommerce Product Listing Services India | MaaJanki Web Tech",
    "description": "Professional eCommerce product listing design services, cataloging, and account management for Amazon, Flipkart, Meesho, Shopify, and IndiaMART.",
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
    "@id": "https://maajankiwebtech.com/services/products-listing#service",
    "url": "https://maajankiwebtech.com/services/products-listing",
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
        "name": "Products Listing",
        "item": "https://maajankiwebtech.com/services/products-listing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/products-listing/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer Magento product listing and cataloging services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in Magento (Adobe Commerce) product listing services, including configurable and bundle product setups, attribute set mapping, SKU taxonomy, and bulk CSV integrations."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in eCommerce product listing design services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our product listing design services include Amazon A+ Content creation, Enhanced Brand Content (EBC), infographic lifestyle image editing, comparison tables, and branded storefront design."
        }
      },
      {
        "@type": "Question",
        "name": "Which eCommerce marketplaces do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support Amazon, Flipkart, Meesho, IndiaMART, Shopify, Magento, WooCommerce, eBay, Etsy, and Walmart Marketplace."
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
