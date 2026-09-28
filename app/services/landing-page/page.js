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
          "text": "Unlike standard website pages that offer distracting multi-level menus and exit links, our landing pages feature a strict 1:1 attention ratio, razor-sharp value propositions, verified trust badges, friction-free forms, and sub-second load speeds."
        }
      },
      {
        "@type": "Question",
        "name": "How does landing page speed impact Google Ads Quality Score and CAC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads rewards fast, highly relevant landing pages with higher Quality Scores (8-10/10), reducing your Cost Per Click (CPC) by up to 50% and improving ad auction rank without increasing your ad spend."
        }
      },
      {
        "@type": "Question",
        "name": "Do you integrate CRM and WhatsApp lead automation into landing pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All submitted leads automatically sync in real-time with WhatsApp, Zoho, HubSpot, Salesforce, Google Sheets, or your email inbox via Webhook APIs within seconds of submission."
        }
      },
      {
        "@type": "Question",
        "name": "What technology stack do you use to build high-converting landing pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop custom landing pages using Next.js 15 Server Components, Tailwind CSS, or custom WordPress Gutenberg templates, ensuring 95+ Google PageSpeed performance scores and zero layout shifts."
        }
      },
      {
        "@type": "Question",
        "name": "Can you design landing pages tailored specifically for Google Ads and Meta Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We ensure strict message-matching between your ad copy and the page hero section. Google Ads visitors see high-intent search answers, while Meta Ads visitors receive high-visual storytelling and direct WhatsApp triggers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to design and launch a custom landing page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our typical turnaround time for a custom, conversion-optimized landing page is 3 to 7 business days, including copywriting, responsive design, tracking pixels, and QA testing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you perform A/B split testing on landing pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We configure server-side A/B split testing and user behavioral heatmaps via Microsoft Clarity to continuously test headlines, CTA button colors, copy angles, and form lengths to maximize conversion rates."
        }
      },
      {
        "@type": "Question",
        "name": "What elements are included in your landing page design packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every landing page includes custom direct-response copywriting, mobile-first responsive UI, trust badge integration (DPIIT/MSME/SSL), lead capture forms with instant validation, Google Tag Manager & GA4 event tracking, and speed optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Can you redesign our existing low-converting landing page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We conduct an in-depth CRO (Conversion Rate Optimization) audit of your current page to identify drop-off points, friction areas, and load bottlenecks, followed by a redesigned layout engineered to double or triple your conversion rates."
        }
      },
      {
        "@type": "Question",
        "name": "Are your landing pages fully responsive on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Over 75% of ad traffic comes from mobile devices. We design with a mobile-first philosophy, using thumb-friendly touch targets, sticky call-to-action bars, and auto-filling form inputs for effortless conversion on smartphones."
        }
      },
      {
        "@type": "Question",
        "name": "Do you set up conversion tracking pixels and event triggers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We configure Google Tag Manager (GTM), Google Analytics 4 (GA4) custom conversion events, Meta Pixel, LinkedIn Insight Tag, and server-side tracking to accurately record form submissions, clicks, and phone calls."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you build landing pages for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have extensive experience building high-ROI landing pages for Real Estate, Healthcare & Clinics, Education & EdTech, B2B SaaS, Professional Services, Home Services, and Financial Advisory firms."
        }
      },
      {
        "@type": "Question",
        "name": "Will I own the landing page design, copy, and source code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You retain 100% intellectual property ownership of all custom design assets, copywriting, code, and tracking configurations with zero ongoing licensing fees."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of high-converting landing page design in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Landing page pricing is transparent and based on project scope, custom interactive features (like multi-step calculators or quizzes), and A/B test variations. We provide clear, fixed-price proposals with no hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "How do we get started with MaaJanki Web Tech for a landing page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is quick and easy. Contact us via our online form, call us at +91-9006543913, or reach out on WhatsApp. We will analyze your campaign goals and provide an actionable wireframe and timeline within 24 hours."
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
