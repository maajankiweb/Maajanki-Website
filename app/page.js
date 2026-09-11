import ClientPage from "./ClientPage";

export const metadata = {
  title: "Web Development & SEO Agency in Bihar | MaaJanki Web Tech",
  description: "MaaJanki Web Tech is a premier web development and digital marketing agency in Bihar. Expert in Next.js web applications, local SEO, and Google Ads.",
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
    title: "Web Development & SEO Agency in Bihar | MaaJanki Web Tech",
    description: "MaaJanki Web Tech is a premier web development and digital marketing agency in Bihar. Expert in Next.js web applications, local SEO, and Google Ads.",
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
    title: "Web Development & SEO Agency in Bihar | MaaJanki Web Tech",
    description: "MaaJanki Web Tech is a premier web development and digital marketing agency in Bihar. Expert in Next.js, local SEO, and Google Ads.",
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
        "name": "Which is the best digital marketing agency in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaaJanki Web Tech is recognized as one of the best digital marketing agencies in India, delivering result-oriented SEO, social media marketing, PPC, and website growth solutions for businesses across industries."
        }
      },
      {
        "@type": "Question",
        "name": "What complete digital services does MaaJanki Web Tech offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a full 360-degree suite of digital services including Search Engine Optimization (SEO), Social Media Optimization (SMO), Performance Marketing, Web Development, UI/UX Design, Graphic Design, Content Writing, Branding, and eCommerce Product Listing."
        }
      },
      {
        "@type": "Question",
        "name": "How can SEO help my business grow organically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our advanced SEO strategies improve your website's visibility on search engines like Google. By targeting the right keywords and optimizing technical performance, we drive high-quality, organic traffic that converts into loyal customers."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your Social Media Optimization (SMO) services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage your brand's presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our SMO services include profile optimization, engaging content creation, community management, and trending hashtag strategies to build market authority."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create custom websites for small businesses and enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our Web Development team specializes in building responsive, high-performance, and SEO-friendly websites. Whether you need a corporate portfolio, an eCommerce platform, or a custom web application, we deliver scalable solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How does Performance Marketing differ from regular advertising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Performance Marketing is highly data-driven. Instead of paying for mere exposure, you pay for measurable results like clicks, leads, and sales. We design high-ROI Meta Ads and Google Ads funnels to maximize your conversion rates."
        }
      },
      {
        "@type": "Question",
        "name": "Why is UI/UX design crucial for my application or website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A great UI/UX design reduces user friction and increases engagement. We conduct user-centered research to build intuitive sitemaps, wireframes, and custom interfaces that provide a seamless experience, turning visitors into paying customers."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of Graphic Design services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We create visually stunning and premium assets, including brand logos, marketing brochures, social media creatives, digital banners, and complete visual identities that capture attention and communicate your brand's unique message."
        }
      },
      {
        "@type": "Question",
        "name": "Can you write SEO-optimized content for my blog or website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our expert Content Writing team crafts compelling, keyword-rich, and Answer Engine Optimized (AEO) content. From landing pages to informative blogs, we ensure your message resonates with your audience and search engine algorithms."
        }
      },
      {
        "@type": "Question",
        "name": "How can Product Listing optimization help my eCommerce sales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We optimize your product titles, descriptions, and images with the right keywords and semantic data. This ensures your products rank higher on platforms like Amazon, Flipkart, or your own site, driving more visibility and sales."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a strong brand identity, and how can you help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A strong brand connects emotionally with its target audience. Our Branding services define your market positioning, tone of voice, and visual aesthetics, ensuring you stand out as a premium leader in a crowded market."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from SEO and digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While paid Performance Marketing can generate immediate leads, organic strategies like SEO and Content Writing typically take 3 to 6 months to show significant, long-lasting growth. We focus on building sustainable digital authority."
        }
      },
      {
        "@type": "Question",
        "name": "Are your digital marketing strategies tailored for specific industries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We cater to diverse industries including Healthcare, Real Estate, E-Commerce, Education, Technology, and more. Every campaign is custom-designed based on deep competitor analysis and your specific target audience."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of your web development and digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs depend on your specific business goals and the scope of the project. MaaJanki Web Tech offers flexible, scalable, and highly affordable packages designed to provide maximum ROI regardless of your business size. Starter packages begin at ₹14,999."
        }
      },
      {
        "@type": "Question",
        "name": "How can I start working with MaaJanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starting is easy. Reach out via the Contact page, fill out the inquiry form, or call +91-9006543913 directly. Our experts will analyze your requirements and provide a customized growth strategy for your business."
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
