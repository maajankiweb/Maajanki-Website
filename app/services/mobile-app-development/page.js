import ClientPage from './ClientPage';

export const metadata = {
  title: "Mobile App Development Services in India | MaaJanki Web Tech",
  description: "Premier mobile app development company in India. We engineer high-performance Flutter, React Native, iOS & Android apps with AI capabilities. Get a free quote!",
  keywords: [
    "mobile app development",
    "mobile app development company",
    "ai app development companies",
    "Mobile App Development Company in India",
    "iOS app development agency",
    "Android app development India",
    "Flutter app development company",
    "React Native mobile app developer",
    "cross platform app development India",
    "MaaJanki Web Tech mobile app"
  ],
  openGraph: {
    title: "Mobile App Development Services in India | MaaJanki Web Tech",
    description: "Premier mobile app development company in India. High-performance Flutter, React Native, iOS & Android mobile applications with AI integration.",
    url: "https://maajankiwebtech.com/services/mobile-app-development",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services in India | MaaJanki Web Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services in India | MaaJanki Web Tech",
    description: "Premier mobile app development company in India. High-performance Flutter, React Native, iOS & Android apps.",
    images: ["https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp"],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services/mobile-app-development",
    languages: {
      "en-IN": "https://maajankiwebtech.com/services/mobile-app-development",
      "x-default": "https://maajankiwebtech.com/services/mobile-app-development",
    },
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/services/mobile-app-development#webpage",
    "url": "https://maajankiwebtech.com/services/mobile-app-development",
    "name": "Mobile App Development Services in India | MaaJanki Web Tech",
    "description": "Premier mobile app development company in India. High-performance Flutter, React Native, iOS & Android mobile applications with AI integration.",
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
    "@id": "https://maajankiwebtech.com/services/mobile-app-development#service",
    "url": "https://maajankiwebtech.com/services/mobile-app-development",
    "name": "Mobile App Development & AI-Powered Application Engineering",
    "provider": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "serviceType": "Mobile App Development",
    "description": "Custom iOS, Android, Flutter, and React Native mobile application development services in Bettiah, Patna, Bihar, Delhi NCR, and globally across India.",
    "areaServed": [
      { "@type": "City", "name": "Bettiah" },
      { "@type": "City", "name": "Patna" },
      { "@type": "City", "name": "Bagaha" },
      { "@type": "City", "name": "Motihari" },
      { "@type": "City", "name": "Muzaffarpur" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Noida" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "Country", "name": "India" }
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
        "name": "Mobile App Development",
        "item": "https://maajankiwebtech.com/services/mobile-app-development"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://maajankiwebtech.com/services/mobile-app-development/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which frameworks do you use for mobile app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build native and cross-platform mobile apps using Flutter, React Native, Swift (iOS), Kotlin (Android), and Next.js Progressive Web Apps (PWA) with Node.js and MongoDB backend infrastructures."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop AI-powered mobile applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As an emerging AI app development company, we integrate OpenAI, Gemini, computer vision, voice assistants, and recommendation algorithms directly into mobile applications."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom mobile app development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile app development pricing is 100% customized based on your unique project scope, supported operating systems (iOS, Android, or cross-platform Flutter), backend database integrations, and custom AI feature requirements. We provide a milestone-based proposal after an initial technical discovery consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you assist with Google Play Store and Apple App Store publishing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle the end-to-end deployment process including app signing, compliance review, screenshots, privacy policy generation, and official store approval."
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
