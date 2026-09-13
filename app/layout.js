import { ClerkProvider } from '@clerk/nextjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import './styles/Auth3D.css';
import ClientProvider from '@/components/ClientProvider';
import LayoutContent from '@/components/LayoutContent';
import Analytics from '@/components/Analytics';
import { Outfit, Poppins, Inter } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});



export const viewport = {
  themeColor: '#042544',
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://maajankiwebtech.com/'),
  title: {
    default: 'Web Development & Digital Marketing Agency in India | MaaJanki Web Tech',
    template: '%s | MaaJanki Web Tech',
  },
  description:
    "MaaJanki Web Tech — India's premier web development & digital marketing agency. Expert in Next.js, SEO, Google Ads & performance marketing. Free 30-min audit.",
  keywords: [
    "Web Development Agency in India",
    "Digital Marketing Agency in India",
    "web development",
    "mobile app development",
    "Next.js Web Development India",
    "Best SEO Company India",
    "Performance Marketing Agency India",
    "Google Ads Management India",
    "AI SEO Agency in Bettiah",
    "eCommerce Product Listing Services",
    "MaaJanki Web Tech"
  ],
  authors: [{ name: 'Ashish Kumar', url: 'https://maajankiwebtech.com/about' }],
  creator: 'MaaJanki Web Tech',
  publisher: 'MaaJanki Web Tech',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://maajankiwebtech.com/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: 'Web Development & Digital Marketing Agency in India | MaaJanki Web Tech',
    description:
      "MaaJanki Web Tech — India's premier web development & digital marketing agency. Expert in Next.js, SEO, Google Ads & performance marketing. Free 30-min audit.",
    url: 'https://maajankiwebtech.com/',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    images: [
      {
        url: 'https://maajankiwebtech.com/images/og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MaaJanki Web Tech — Web Development & Digital Marketing Agency in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Digital Marketing Agency in India | MaaJanki Web Tech',
    description: "MaaJanki Web Tech — India's premier web development & digital marketing agency. Expert in Next.js, SEO, Google Ads & performance marketing. Free 30-min audit.",
    images: ['https://maajankiwebtech.com/images/og-banner.webp'],
    creator: '@MaaJankiwebtech',
  },
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Bagaha, West Champaran, Bihar, India',
    'geo.position': '27.2029;84.4679',
    ICBM: '27.2029, 84.4679',
    'google-site-verification': 'zuQNLK0LfnYPs6sn7PFd4igMvGvDQHni8uqM8ZH9BLo',
    'msvalidate.01': '69B3649ED10EF133B495627267F3A40C',
    'dmca-site-verification': 'Y3FvWjZMSEgwNmdRY1FhVHFZMUpjZz090',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://maajankiwebtech.com/#organization",
        "name": "MaaJanki Web Tech",
        "legalName": "MaaJanki Web Tech LLP",
        "url": "https://maajankiwebtech.com/",
        "logo": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
        "foundingDate": "2020",
        "description": "MaaJanki Web Tech is a premier web development and digital marketing agency in Bihar, India. Expert in Next.js web applications, local SEO, Google Ads, branding, and performance marketing.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Brajmala Complex, First Floor, Near Cinema House, Building of UCO Bank, Bagaha Bazar",
          "addressLocality": "Bagaha",
          "addressRegion": "Bihar",
          "postalCode": "845101",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9006543913",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-9471273041",
            "contactType": "sales",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/maajanki-web-tech-company/",
          "https://www.facebook.com/maajankiwebtech",
          "https://www.instagram.com/maajankiwebtech/",
          "https://x.com/MaaJankiwebtech",
          "https://in.pinterest.com/maajankiweb/",
          "https://www.youtube.com/@Akwebmasterhub",
          "https://g.page/r/CVvMyeoY0y0XEAE"
        ],
        "areaServed": [
          "Bihar",
          "West Champaran",
          "Patna",
          "Bagaha",
          "Bettiah",
          "Motihari",
          "Muzaffarpur",
          "Delhi",
          "Mumbai",
          "Bengaluru",
          "India"
        ],
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "MSME Registration" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "DPIIT Startup India" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Udyam Registration UDYAM-BR-38-0014113" }
        ],
        "knowsAbout": [
          "Web Development",
          "SEO",
          "Digital Marketing",
          "Next.js",
          "Google Ads",
          "Performance Marketing",
          "AEO",
          "GEO",
          "WhatsApp CRM",
          "GST Billing Software"
        ],
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 20 },
        "founder": {
          "@id": "https://maajankiwebtech.com/#founder"
        }
      },
      {
        "@id": "https://maajankiwebtech.com/#localbusiness",
        "@type": ["LocalBusiness", "ProfessionalService", "ITService"],
        "name": "MaaJanki Web Tech",
        "image": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
        "url": "https://maajankiwebtech.com/",
        "telephone": "+91-9006543913",
        "email": "info@maajankiwebtech.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR, USD, EUR, GBP",
        "paymentAccepted": "Cash, UPI, Bank Transfer, Razorpay, Wire Transfer",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Brajmala Complex, First Floor, Near Cinema House, Building of UCO Bank, Bagaha Bazar",
          "addressLocality": "Bagaha",
          "addressRegion": "Bihar",
          "postalCode": "845101",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.2029,
          "longitude": 84.4679
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 27.2029,
            "longitude": 84.4679
          },
          "geoRadius": "300000"
        },
        "hasMap": "https://g.page/r/CVvMyeoY0y0XEAE/review",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47",
          "bestRating": "5"
        },
        "founder": {
          "@id": "https://maajankiwebtech.com/#founder"
        },
        "foundingDate": "2020"
      },
      {
        "@id": "https://maajankiwebtech.com/#founder",
        "@type": "Person",
        "name": "Ashish Kumar",
        "jobTitle": "Founder & Lead Architect",
        "url": "https://www.linkedin.com/in/ashishkumarji/",
        "worksFor": {
          "@id": "https://maajankiwebtech.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/in/ashishkumarji/",
          "https://www.instagram.com/ashishkrweb4/",
          "https://www.wikidata.org/wiki/Q115783355"
        ],
        "description": "Ashish Kumar is the Founder & Lead Architect of MaaJanki Web Tech with expertise in Next.js web application architecture, local SEO, and AEO optimization."
      },
      {
        "@type": "WebSite",
        "@id": "https://maajankiwebtech.com/#website",
        "url": "https://maajankiwebtech.com/",
        "name": "MaaJanki Web Tech",
        "description": "Web Development & Digital Marketing Agency in Bihar, India",
        "publisher": {
          "@id": "https://maajankiwebtech.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://maajankiwebtech.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://maajankiwebtech.com/#homepage",
        "url": "https://maajankiwebtech.com/",
        "name": "Web Development & Digital Marketing Agency in Bihar | MaaJanki Web Tech",
        "inLanguage": "en-IN",
        "datePublished": "2020-01-01",
        "dateModified": "2026-09-11",
        "author": {
          "@id": "https://maajankiwebtech.com/#founder"
        },
        "isPartOf": {
          "@id": "https://maajankiwebtech.com/#website"
        },
        "about": {
          "@id": "https://maajankiwebtech.com/#organization"
        },
        "mainEntity": {
          "@id": "https://maajankiwebtech.com/#localbusiness"
        }
      },
      {
        "@type": "Service",
        "name": "Custom Website Development",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Web Development",
        "description": "Ultra-fast, responsive, SEO-ready websites and web applications built with Next.js 15, React, and WordPress.",
        "areaServed": { "@type": "Country", "name": "India" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "14999" },
        "url": "https://maajankiwebtech.com/services/web-development"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing & SEO Services in Bihar",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Search Engine Optimization",
        "description": "Professional SEO, AEO (AI Engine Optimization), Google Ads, and local SEO services to rank #1 on Google across Bihar and India.",
        "areaServed": { "@type": "State", "name": "Bihar" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "8999" },
        "url": "https://maajankiwebtech.com/services/seo"
      },
      {
        "@type": "Service",
        "name": "Performance Marketing & PPC Advertising",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Performance Marketing",
        "description": "High-ROI Google Ads and Meta Ads campaigns designed to generate measurable sales leads and profitable conversions.",
        "areaServed": { "@type": "Country", "name": "India" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "19999" },
        "url": "https://maajankiwebtech.com/services/performance-marketing"
      },
      {
        "@type": "Service",
        "name": "GST Invoicing Software (InvoBill)",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Software Service",
        "description": "GST billing and invoicing software solutions for retailers and small businesses across India.",
        "areaServed": { "@type": "Country", "name": "India" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0" },
        "url": "https://invobill.in"
      },
      {
        "@type": "Service",
        "name": "Social Media Optimization (SMO)",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Social Media Marketing",
        "description": "Strategic social media marketing across Facebook, Instagram, LinkedIn, and X to build strong digital authority.",
        "areaServed": { "@type": "Country", "name": "India" },
        "url": "https://maajankiwebtech.com/services/smo"
      },
      {
        "@type": "FAQPage",
        "@id": "https://maajankiwebtech.com/#faq",
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
              "text": "Yes. We specialize in building responsive, high-performance Next.js websites for businesses of all sizes. Whether you need a portfolio, eCommerce store, or custom web application — we deliver fast, SEO-ready, mobile-first solutions customized to your project requirements and business goals."
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
              "text": "Costs depend entirely on your specific project requirements, scope, features, and technology stack. We do not charge arbitrary fixed prices; instead, we analyze your business needs and provide a transparent, customized milestone-based quotation to deliver maximum ROI."
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
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://maajankiwebtech.com/#breadcrumb",
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
            "name": "Portfolio",
            "item": "https://maajankiwebtech.com/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "About",
            "item": "https://maajankiwebtech.com/about"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "item": "https://maajankiwebtech.com/contact"
          }
        ]
      }
    ]
  };

  let clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (process.env.NODE_ENV === 'development' && clerkPublishableKey?.startsWith('pk_live_')) {
    clerkPublishableKey = process.env.NEXT_PUBLIC_DEV_CLERK_KEY || clerkPublishableKey;
  }

  const content = (
    <html lang="en" className={`${outfit.variable} ${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* International SEO Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://maajankiwebtech.com/locations/united-states" />
        <link rel="alternate" hrefLang="en-GB" href="https://maajankiwebtech.com/locations/united-kingdom" />
        <link rel="alternate" hrefLang="en-CA" href="https://maajankiwebtech.com/locations/canada" />
        <link rel="alternate" hrefLang="en-AU" href="https://maajankiwebtech.com/locations/australia" />
        <link rel="alternate" hrefLang="en-AE" href="https://maajankiwebtech.com/locations/united-arab-emirates" />
        <link rel="alternate" hrefLang="en-IN" href="https://maajankiwebtech.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://maajankiwebtech.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body suppressHydrationWarning>
        <ClientProvider>
          <LayoutContent>{children}</LayoutContent>
        </ClientProvider>

        <Analytics />
      </body>
    </html>
  );

  if (clerkPublishableKey) {
    return <ClerkProvider publishableKey={clerkPublishableKey}>{content}</ClerkProvider>;
  }

  return content;
}
