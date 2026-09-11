import ClientPage from "./ClientPage";

export const metadata = {
  title: "Web Development & Digital Marketing Agency in Bihar | MaaJanki Web Tech",
  description: "MaaJanki Web Tech — Bihar's premier web development & digital marketing agency. Expert in Next.js, local SEO, Google Ads & performance marketing. Free 30-min audit.",
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
    title: "Web Development & Digital Marketing Agency in Bihar | MaaJanki Web Tech",
    description: "Bihar's premier Next.js web development & digital marketing agency. SEO, Google Ads, branding & performance marketing. Free strategy audit.",
    url: "https://maajankiwebtech.com/",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "MaaJanki Web Tech — Web Development & Digital Marketing Agency in Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Agency in Bihar | MaaJanki Web Tech",
    description: "Bihar's premier Next.js web development & digital marketing agency. SEO, Google Ads, branding & performance marketing.",
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
          "text": "MaaJanki Web Tech is recognized as Bihar's leading digital marketing and web development agency, delivering result-oriented SEO, Google Ads, social media marketing, and Next.js web development solutions for businesses across Bihar and India."
        }
      },
      {
        "@type": "Question",
        "name": "What services does MaaJanki Web Tech offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a complete 360-degree suite: SEO, SMO, Performance Marketing (Google Ads, Meta Ads), Web Development (Next.js, React, WordPress), UI/UX Design, Graphic Design, Content Writing, Branding, eCommerce Product Listing, AI Automation, WhatsApp CRM, and Software/SaaS Development."
        }
      },
      {
        "@type": "Question",
        "name": "How can SEO help my business grow organically in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our advanced SEO strategies improve your website's visibility on Google for local Bihar searches. By targeting the right keywords — whether for Patna, Bagaha, Motihari, or Muzaffarpur — we drive high-quality, organic traffic that converts into loyal customers."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your Social Media Optimization (SMO) services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage your brand's presence across Facebook, Instagram, LinkedIn, and X (Twitter). Our SMO includes profile optimization, content creation, community management, hashtag strategy, and performance reporting."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create custom websites for small businesses in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in building responsive, high-performance Next.js websites for businesses of all sizes. Whether you need a portfolio, eCommerce store, or custom web application — we deliver fast, SEO-ready, mobile-first solutions starting at ₹14,999."
        }
      },
      {
        "@type": "Question",
        "name": "How does Performance Marketing differ from regular advertising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Performance Marketing is data-driven — you pay for measurable results like clicks, leads, and sales. We design high-ROI Google Ads and Meta Ads funnels to maximize your conversion rates and generate consistent business growth."
        }
      },
      {
        "@type": "Question",
        "name": "Why is UI/UX design important for my website or app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Great UI/UX reduces user friction and increases conversions. We conduct user-centered research to build intuitive interfaces that turn visitors into paying customers — improving both engagement and satisfaction."
        }
      },
      {
        "@type": "Question",
        "name": "What Graphic Design services does MaaJanki Web Tech provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We create brand logos, marketing brochures, social media creatives, digital banners, and complete visual identities that capture attention and communicate your brand's unique message across all platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Can you write SEO-optimized and AEO content for my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Content Writing team crafts keyword-rich, Answer Engine Optimized (AEO) content for landing pages, blogs, and product pages — ensuring visibility on both traditional Google search and AI-powered platforms like ChatGPT and Perplexity."
        }
      },
      {
        "@type": "Question",
        "name": "How can product listing optimization help my eCommerce sales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We optimize product titles, descriptions, and images with the right keywords and semantic data — helping your products rank higher on Amazon, Flipkart, Meesho, and your own Shopify or WooCommerce store."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a strong brand identity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A strong brand connects emotionally with its audience. Our Branding services define your market positioning, tone of voice, logo, color system, and visual guidelines — making you stand out as a premium choice in any market."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see SEO results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local Bihar keywords, our clients typically see first-page Google rankings within 60 to 90 days. For competitive national keywords, organic growth takes 4 to 6 months. Paid campaigns (Google Ads, Meta Ads) deliver leads within days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve specific industries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We serve Healthcare, Real Estate, E-Commerce, Education, Finance, Construction, Food & Restaurants, Legal Services, Technology/SaaS, Automotive, Beauty, Fitness, and Manufacturing — with custom strategies per industry."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of web development and digital marketing in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Starter Business package begins at ₹14,999 for a 5-7 page Next.js website. The Growth & Lead Engine package is ₹34,999 and includes AEO/GEO optimization. The Enterprise VIP Tier starts at ₹89,999 with custom AI workflows. Monthly retainers available."
        }
      },
      {
        "@type": "Question",
        "name": "How do I start working with MaaJanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us via the Contact page, fill the inquiry form, or call +91-9006543913. We offer a free 30-minute Strategy Audit to understand your business goals and recommend the right package."
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
        "item": "https://maajankiwebtech.com"
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

  return (
    <>
      <link rel="canonical" href="https://maajankiwebtech.com/" />
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
