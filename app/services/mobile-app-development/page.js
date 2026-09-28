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
        "name": "Which mobile development technologies and frameworks do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in Flutter (Dart), React Native, Swift (iOS native), Kotlin (Android native), Next.js Progressive Web Apps (PWA), Node.js, Express, MongoDB Atlas, Firebase, and cloud microservices."
        }
      },
      {
        "@type": "Question",
        "name": "Will my app be published on both Apple App Store and Google Play Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We handle end-to-end publishing on both platforms, including developer account configuration, signing certificates, privacy disclosures, screenshot generation, and store approval."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a custom mobile application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard MVP mobile app typically takes 4 to 8 weeks from wireframe to store launch. Complex business or enterprise applications with multi-role dashboards and AI copilots range from 10 to 16 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "How much does mobile app development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile app development pricing is 100% customized based on your unique project scope, supported operating systems (iOS, Android, or cross-platform Flutter), backend database integrations, and custom AI feature requirements. We provide a milestone-based proposal after an initial technical discovery consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build AI-powered mobile apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate OpenAI, Gemini, voice agents, camera OCR, and predictive algorithms directly into mobile apps with secure token streaming and on-device machine learning."
        }
      },
      {
        "@type": "Question",
        "name": "Will I own 100% of the source code and intellectual property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Upon project milestone completion, we hand over full GitHub repository access, documentation, and 100% intellectual property ownership to you with zero hidden licensing fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can you update or redesign our existing mobile application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We perform code audits, refactor legacy codebases to Flutter or React Native, update deprecated SDKs, improve UI/UX aesthetics, and optimize app load performance."
        }
      },
      {
        "@type": "Question",
        "name": "Do you integrate Indian and international payment gateways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate Razorpay, PhonePe, Paytm, Cashfree, Stripe, PayPal, Apple Pay, and Google Pay with compliant end-to-end encryption."
        }
      },
      {
        "@type": "Question",
        "name": "What post-launch support and warranty do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every app includes 30 to 90 days of free post-launch support covering bug fixes, OS compatibility updates, performance tuning, and server monitoring. Optional annual AMC plans are available."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure user data security and privacy compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We enforce HTTPS/TLS 1.3 encryption, biometric authentication (Face ID / Fingerprint), tokenized session tokens, and compliance with DPDP India and GDPR guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "What is App Store Optimization (ASO) and do you provide it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ASO is search engine optimization for mobile app stores. We write keyword-rich titles, descriptions, and tag structures to ensure your app ranks high for relevant commercial searches."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop web admin dashboards to manage app content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most mobile apps include a responsive web admin dashboard (built on Next.js/React) to manage users, track orders, send push notifications, and monitor live analytics."
        }
      },
      {
        "@type": "Question",
        "name": "Will the app work when the user has poor or no internet connection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design apps with offline-first caching via SQLite/Room or Hive, allowing core features to function offline and auto-sync when connectivity returns."
        }
      },
      {
        "@type": "Question",
        "name": "How do we start a mobile app project with MaaJanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can click 'Get a Free Consultation' or email info@maajankiwebtech.com. Our senior technical leads will evaluate your requirements and provide an architecture roadmap within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden recurring platform fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. MaaJanki Web Tech operates on a clear, milestone-based one-time development model with zero platform commission fees."
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
