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
      },
      {
        "@type": "Question",
        "name": "Can you migrate our existing website to WordPress without losing Google rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We execute seamless zero-downtime migrations with rigorous 1-to-1 301 redirect mapping, preserving your existing backlink equity, URL hierarchy, and organic keyword positions."
        }
      },
      {
        "@type": "Question",
        "name": "Will I be able to edit and update content easily on my WordPress website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build using the intuitive WordPress Block Editor (Gutenberg) or custom Advanced Custom Fields (ACF), allowing your non-technical team to easily edit text, images, blogs, and products without touching code."
        }
      },
      {
        "@type": "Question",
        "name": "Is WordPress good for SEO and Google search rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WordPress is exceptionally SEO-friendly when developed correctly. We configure clean semantic HTML5, XML sitemaps, Schema.org structured data, fast Core Web Vitals, and integrations with Rank Math or Yoast SEO for rapid ranking."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a custom WordPress website cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom WordPress website costs depend on page count, bespoke UI design requirements, custom integrations (APIs, CRM, payment systems), and eCommerce features. We offer scalable packages tailored to both startups and established enterprises."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a custom WordPress website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard corporate or portfolio WordPress site typically takes 2 to 3 weeks, while complex custom WooCommerce stores or membership portals take 4 to 6 weeks from initial design mockups to production deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build custom WordPress plugins and themes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When standard plugins don't meet your business logic or add unnecessary bloat, our senior PHP and React engineers develop lightweight, secure, and custom-coded WordPress plugins and themes from scratch."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs and CRM tools into WordPress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We seamlessly connect WordPress with external CRMs (HubSpot, Zoho, Salesforce), ERP software, WhatsApp Business APIs, shipping logistics (Shiprocket, Delhivery), and marketing automation platforms."
        }
      },
      {
        "@type": "Question",
        "name": "What security measures do you implement to protect WordPress from hackers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We enforce zero-trust security: custom login URLs, brute-force attack prevention, Web Application Firewall (WAF), database prefix changes, file execution restrictions, SSL/TLS encryption, and continuous malware scanning."
        }
      },
      {
        "@type": "Question",
        "name": "Can you redesign our outdated WordPress site to modern UI/UX standards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We transform slow, outdated WordPress websites into modern, sleek, mobile-first digital experiences with custom animations, dark/light themes, and conversion-optimized user journeys."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of post-launch support and training do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every WordPress project includes 30 to 60 days of complimentary post-launch support, video walkthrough training for your team, and optional monthly maintenance retainers covering security audits and content updates."
        }
      },
      {
        "@type": "Question",
        "name": "How do we start our WordPress project with MaaJanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule a free consultation through our contact page or call us directly at +91-9006543913. Our lead WordPress architect will review your project scope, provide technical recommendations, and deliver a detailed roadmap within 24 hours."
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
