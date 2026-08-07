import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './styles/Auth3D.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PromoPopup from '@/components/PromoPopup';
import ClientProvider from '@/components/ClientProvider';
import Breadcrumbs from '@/components/Breadcrumbs';
import ChatbotLoader from '@/components/Chatbot/ChatbotLoader';
import LayoutContent from '@/components/LayoutContent';
import { ClerkProvider, Show, UserButton } from '@clerk/nextjs';



export const viewport = {
  themeColor: '#042544',
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://maajankiwebtech.com'),
  title: {
    default: 'Digital Marketing & Web Development Agency in Bihar | MaaJanki Web Tech',
    template: '%s | MaaJanki Web Tech',
  },
  description:
    'MaaJanki Web Tech is the best digital marketing & web development agency in Bihar, India. We offer expert SEO, web design, SMO & branding services.',
  authors: [{ name: 'MaaJanki Web Tech' }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: 'MaaJanki Web Tech | Global Web Development & Digital Marketing Agency',
    description:
      'Professional web development, SEO, SMO, and digital marketing agency serving clients in USA, UK, Canada, Australia, Japan, India, and Bihar.',
    url: 'https://maajankiwebtech.com/',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    images: [
      {
        url: 'https://maajankiwebtech.com/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MaaJanki Web Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaaJanki Web Tech | Digital Growth Partner',
    description: 'Professional web development and digital marketing agency in India.',
    images: ['https://maajankiwebtech.com/assets/twitter-card.jpg'],
    creator: '@maajankiweb',
  },
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Bagaha, Bihar, India',
    'geo.position': '27.121;84.0722',
    ICBM: '27.121, 84.0722',
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
        "url": "https://maajankiwebtech.com/",
        "logo": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
        "description": "MaaJanki Web Tech is a professional web development and digital marketing agency in India, specializing in SEO, branding, performance marketing, and custom web solutions.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9006543913",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61577526895580",
          "https://www.instagram.com/maajankiwebtech/",
          "https://www.linkedin.com/company/maajanki-web-tech-company/",
          "https://x.com/MaaJankweb",
          "https://in.pinterest.com/maajankiweb/",
          "https://g.page/r/CdM4-zj2uGnQEB0"
        ],
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Nepal" }
        ],
        "founder": {
          "@id": "https://maajankiwebtech.com/#founder"
        },
        "awards": [
          "Udyam MSME Registered",
          "Startup India DPIIT Recognized"
        ],
        "identifier": [
          {
            "@type": "PropertyValue",
            "propertyID": "Udyam Registration Number",
            "value": "UDYAM-BR-38-0014113"
          }
        ]
      },
      {
        "@id": "https://maajankiwebtech.com/#localbusiness",
        "@type": "LocalBusiness",
        "name": "MaaJanki Web Tech",
        "image": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
        "url": "https://maajankiwebtech.com/",
        "telephone": "+91-9006543913",
        "description": "Professional website development and digital marketing agency in Bagaha, Bihar.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar",
          "addressLocality": "Bagaha, West Champaran",
          "addressRegion": "Bihar",
          "postalCode": "845101",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.0984,
          "longitude": 84.2625
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "24",
          "bestRating": "5",
          "worstRating": "1"
        },
        "founder": {
          "@id": "https://maajankiwebtech.com/#founder"
        },
        "foundingDate": "2025-01-01"
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

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body suppressHydrationWarning>
        <ClerkProvider>
          <ClientProvider>
            <LayoutContent>{children}</LayoutContent>
          </ClientProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CGPN1G03DW"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CGPN1G03DW');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","u4zs398tm0");
          `}
        </Script>
        </ClerkProvider>
      </body>
    </html>
  );
}
