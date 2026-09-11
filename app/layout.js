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
    default: 'Web Development & SEO Agency in Bihar | MaaJanki Web Tech',
    template: '%s | MaaJanki Web Tech',
  },
  description:
    'MaaJanki Web Tech is a premier web development and digital marketing agency in Bihar. Expert in Next.js web applications, local SEO, and Google Ads.',
  keywords: [
    'Next.js web development agency India',
    'SEO services in Patna',
    'custom web application developer Bihar',
    'web development company Patna',
    'digital marketing agency Bihar',
    'MaaJanki Web Tech',
    'local SEO services Bihar'
  ],
  authors: [{ name: 'MaaJanki Web Tech' }],
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: 'MaaJanki Web Tech | Next.js Web Development & SEO Agency India',
    description:
      'Premier Next.js web development, SEO services in Patna, custom web application developer in Bihar, serving clients across India and globally.',
    url: 'https://maajankiwebtech.com/',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    images: [
      {
        url: 'https://maajankiwebtech.com/images/og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MaaJanki Web Tech — Web Development & Digital Marketing Agency in Bihar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & SEO Agency in Bihar | MaaJanki Web Tech',
    description: 'MaaJanki Web Tech is a premier web development and digital marketing agency in Bihar. Expert in Next.js, local SEO, and Google Ads.',
    images: ['https://maajankiwebtech.com/images/og-banner.webp'],
    creator: '@maajankiweb',
  },
  other: {
    'geo.position': '27.2029;84.4679',
    ICBM: '27.2029, 84.4679',
    'geo.placename': 'Bagaha, West Champaran, Bihar, India',
    'geo.region': 'IN-BR',
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
        "url": "https://maajankiwebtech.com",
        "logo": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
        "foundingDate": "2021",
        "description": "MaaJanki Web Tech is a premier web development and digital marketing agency in Bihar, India, specializing in Next.js web applications, local SEO, Google Ads, branding, and performance marketing.",
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
          "https://www.youtube.com/@Ashishkmj",
          "https://g.page/r/CVvMyeoY0y0XEAE"
        ],
        "areaServed": ["Bihar", "Uttar Pradesh", "Delhi", "Mumbai", "Bengaluru", "India"],
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "MSME Registration" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "DPIIT Startup India" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Udyam Registration" }
        ],
        "founder": {
          "@id": "https://maajankiwebtech.com/#founder"
        }
      },
      {
        "@id": "https://maajankiwebtech.com/#localbusiness",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "name": "MaaJanki Web Tech",
        "image": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
        "url": "https://maajankiwebtech.com",
        "telephone": "+91-9006543913",
        "email": "info@maajankiwebtech.com",
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
        "priceRange": "₹₹",
        "currenciesAccepted": "INR, USD",
        "paymentAccepted": "Cash, UPI, Bank Transfer, Razorpay",
        "serviceArea": {
          "@type": "AdministrativeArea",
          "name": "Bihar, India"
        },
        "hasMap": "https://g.page/r/CVvMyeoY0y0XEAE/review",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47"
        },
        "founder": {
          "@id": "https://maajankiwebtech.com/#founder"
        },
        "foundingDate": "2021"
      },
      {
        "@id": "https://maajankiwebtech.com/#founder",
        "@type": "Person",
        "name": "Ashish Kumar",
        "jobTitle": "Founder & CEO",
        "url": "https://www.linkedin.com/in/ashishkumarji/",
        "worksFor": {
          "@id": "https://maajankiwebtech.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/in/ashishkumarji/",
          "https://www.instagram.com/ashishkrweb4/",
          "https://www.wikidata.org/wiki/Q115783355"
        ],
        "description": "Ashish Kumar is the founder of MaaJanki Web Tech with expertise in web development and digital marketing."
      },
      {
        "@type": "WebSite",
        "@id": "https://maajankiwebtech.com/#website",
        "url": "https://maajankiwebtech.com/",
        "name": "MaaJanki Web Tech - Website Development & Digital Marketing Agency",
        "description": "Professional digital marketing and web development company helping businesses grow through SEO, branding, and online strategy.",
        "publisher": {
          "@id": "https://maajankiwebtech.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://maajankiwebtech.com/#homepage",
        "url": "https://maajankiwebtech.com/",
        "name": "Best Website Development & Digital Marketing Agency in India | MaaJanki Web Tech",
        "inLanguage": "en-IN",
        "datePublished": "2025-01-01",
        "dateModified": "2026-05-07",
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
        "description": "Responsive, SEO-optimized websites using React JS, WordPress, and custom solutions.",
        "areaServed": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "Service",
        "name": "Digital Marketing & SEO",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Digital Marketing",
        "description": "SEO, PPC, social media, and branding strategies for businesses in India.",
        "areaServed": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "Service",
        "name": "GST Invoicing Software (InvoBill)",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Software Service",
        "description": "GST billing and invoicing software solutions for retailers and small businesses.",
        "areaServed": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "Service",
        "name": "Social Media Optimization (SMO)",
        "provider": { "@id": "https://maajankiwebtech.com/#organization" },
        "serviceType": "Social Media Marketing",
        "description": "Brand promotion and social media marketing across Facebook, Instagram, and LinkedIn.",
        "areaServed": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://maajankiwebtech.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does MaaJanki Web Tech provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MaaJanki Web Tech provides custom Next.js web development, SEO & AEO optimization, social media marketing, performance marketing, graphic design, branding, and proprietary SaaS platforms like InvoBill, WaCRM, DukanDost Pro, and Nexus SaaS."
            }
          },
          {
            "@type": "Question",
            "name": "Is MaaJanki Web Tech a top Next.js web development agency in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, MaaJanki Web Tech is a leading Next.js web development agency in India specializing in ultra-fast, SEO-optimized web applications, custom SaaS platforms, and enterprise software solutions."
            }
          },
          {
            "@type": "Question",
            "name": "Does MaaJanki Web Tech provide SEO services in Patna & Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive Search Engine Optimization (SEO) and Generative Engine Optimization (AEO) services in Patna, Bagaha, Bettiah, and across Bihar to rank businesses #1 on Google and AI search engines."
            }
          },
          {
            "@type": "Question",
            "name": "Can MaaJanki Web Tech build custom web applications for businesses in Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, as a premier custom web application developer in Bihar, we build scalable web applications, e-commerce solutions, and custom business management software tailored for clients across Bihar, India, and internationally."
            }
          },
          {
            "@type": "Question",
            "name": "Is MaaJanki Web Tech an officially registered business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, MaaJanki Web Tech is a DPIIT Recognized Startup India enterprise and registered MSME under Udyam Registration UDYAM-BR-38-0014113."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the founder of MaaJanki Web Tech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ashish Kumar (Wikidata Q115783355) is the Founder & CEO of MaaJanki Web Tech."
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
