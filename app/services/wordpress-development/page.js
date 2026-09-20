import ClientPage from './ClientPage';

export const metadata = {
  title: "WordPress Development Services India | MaaJanki Web Tech",
  description: "Custom WordPress development company in India. High-speed custom themes, WooCommerce stores, security hardening, and SEO-ready CMS architectures.",
  keywords: [
    "WordPress Development Services India",
    "Custom WordPress Development Company",
    "WooCommerce Development Agency",
    "WordPress Speed Optimization Services",
    "WordPress Security Hardening India",
    "WordPress Developer near me",
    "WordPress Agency in Bihar",
    "MaaJanki Web Tech WordPress"
  ],
  openGraph: {
    title: "WordPress Development Services India | MaaJanki Web Tech",
    description: "Custom WordPress development company in India. High-speed custom themes, WooCommerce stores, security hardening, and SEO-ready CMS architectures.",
    url: "https://maajankiwebtech.com/services/wordpress-development",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "WordPress Development Services - MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services India | MaaJanki Web Tech",
    description: "Custom WordPress development company in India. High-speed custom themes, WooCommerce stores, security hardening, and SEO-ready CMS architectures.",
    images: ["https://maajankiwebtech.com/images/og-banner.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/wordpress-development",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/wordpress-development",
      "x-default": "https://maajankiwebtech.com/services/wordpress-development",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/wordpress-development#webpage",
    "url": "https://maajankiwebtech.com/services/wordpress-development",
    "name": "WordPress Development Services India | MaaJanki Web Tech",
    "description": "Custom WordPress development company in India. High-speed custom themes, WooCommerce stores, security hardening, and SEO-ready CMS architectures.",
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
    "@id": "https://maajankiwebtech.com/services/wordpress-development#service",
    "url": "https://maajankiwebtech.com/services/wordpress-development",
    "name": "WordPress Development Services",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "WordPress Website Development",
    "description": "Custom WordPress theme development, WooCommerce online stores, speed optimization, and enterprise security hardening for businesses in Bihar, India, and globally.",
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
      "name": "WordPress Development Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom WordPress Theme Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WooCommerce E-Commerce Store Setup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Speed & Core Web Vitals Optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Security Hardening & Malware Removal"
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
        "name": "WordPress Development",
        "item": "https://maajankiwebtech.com/services/wordpress-development"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/wordpress-development/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should I choose custom WordPress development over pre-made templates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-made templates are bloated with unused scripts, slow load times, and security vulnerabilities. Custom WordPress development delivers clean, bespoke code engineered for 95+ PageSpeed scores, tailored brand aesthetics, and scalable modular functionality."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure our WordPress website achieves fast loading speeds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement advanced server-side Redis object caching, asset minification, WebP/AVIF media delivery, database query optimization, and Cloudflare enterprise edge caching to guarantee sub-second load times."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build high-converting WooCommerce stores in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we architect end-to-end WooCommerce eCommerce platforms with Razorpay, PhonePe, and Cashfree payment gateways, automated GST billing, inventory synchronization, and high-converting checkout flows."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide WordPress maintenance and security hardening?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide automated weekly offsite backups, two-factor authentication (2FA), firewall configurations, core/plugin vulnerability patches, and real-time uptime monitoring."
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
