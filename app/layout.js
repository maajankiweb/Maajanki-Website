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
    template: '%s',
  },
  description:
    "MaaJanki Web Tech — India's premier web development & digital marketing agency. Expert in Next.js, SEO, Google Ads & performance marketing. Free 30-min audit.",
  keywords: [
    "Web Development Agency in India",
    "Digital Marketing Agency in India",
    "Website Designer Near Me",
    "Web Development Company Near Me",
    "Digital Marketing Agency Near Me",
    "Next.js Web Development India",
    "Best SEO Company India",
    "Performance Marketing Agency India",
    "Google Ads Management India",
    "AI SEO Agency in Bettiah",
    "Website Designer in Bihar",
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
