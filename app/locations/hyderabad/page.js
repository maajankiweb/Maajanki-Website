import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/app/contact/ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Website Designer Near Me in Hyderabad | MaaJanki Web Tech",
  description: "Premier website designer and web development company near me in Hyderabad, Telangana. Scalable Next.js web applications, e-commerce & SEO. Get a free quote!",
  keywords: ["website designer near me in Hyderabad","web development company near me Hyderabad","web designer near me Hyderabad","digital marketing agency near me in Hyderabad","best website maker near me Hyderabad","Next.js developer Hyderabad","local SEO services Hyderabad","MaaJanki Web Tech Hyderabad"],
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations/hyderabad',
  },
  openGraph: {
    title: "Website Designer Near Me in Hyderabad | MaaJanki Web Tech",
    description: "Premier website designer and web development company near me in Hyderabad, Telangana. Scalable Next.js web applications, e-commerce & SEO. Get a free quote!",
    url: 'https://maajankiwebtech.com/locations/hyderabad',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Website Designer Near Me in Hyderabad | MaaJanki Web Tech",
    description: "Premier website designer and web development company near me in Hyderabad, Telangana. Scalable Next.js web applications, e-commerce & SEO. Get a free quote!",
  },
};

export default function Page() {
  const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "LocalBusiness",
        "ProfessionalService"
      ],
      "@id": "https://maajankiwebtech.com/locations/hyderabad#business",
      "parentOrganization": {
        "@type": "Organization",
        "name": "MaaJanki Web Tech",
        "url": "https://maajankiwebtech.com/",
        "@id": "https://maajankiwebtech.com/#organization"
      },
      "name": "MaaJanki Web Tech - Hyderabad",
      "legalName": "MaaJanki Web Tech",
      "description": "Premier website designer and web development company near me in Hyderabad, Telangana. Scalable Next.js web applications, e-commerce & SEO. Get a free quote!",
      "url": "https://maajankiwebtech.com/locations/hyderabad",
      "telephone": "+91-9006543913",
      "email": "info@maajankiwebtech.com",
      "image": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar",
        "addressLocality": "Bagaha",
        "addressRegion": "Bihar",
        "postalCode": "845101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.385,
        "longitude": 78.4867
      },
      "areaServed": [
        "HITEC City",
        "Gachibowli",
        "Madhapur",
        "Banjara Hills",
        "Jubilee Hills",
        "Telangana"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://share.google/sfG7HXx0jHaeRi8Tb",
        "https://www.linkedin.com/company/maajanki-web-tech-company/",
        "https://www.facebook.com/profile.php?id=61577526895580",
        "https://www.instagram.com/maajankiwebtech/"
      ],
      "identifier": {
        "@type": "PropertyValue",
        "name": "MSME Udyam Registration Number",
        "value": "UDYAM-BR-38-0014113"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://maajankiwebtech.com/locations/hyderabad#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose MaaJanki Web Tech for web development near me in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We bring Next.js 15 full-stack engineering, sub-second load times, and custom MERN stack software architectures built for enterprise scalability without excessive overhead."
          }
        },
        {
          "@type": "Question",
          "name": "Can you develop B2B enterprise software and client portals in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we build secure, API-connected customer portals, billing platforms, and operational dashboards tailored to your enterprise workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer performance marketing and Google Ads management in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our certified performance marketers manage data-driven PPC campaigns on Google and Meta that maximize conversion volume and minimize cost per lead."
          }
        }
      ]
    }
  ]
};

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Banner Section */}
      <section className="custom-banner">
        <Image 
          priority 
          src="/images/pages/main-services-pages/contact-banner-image-Maajanki-Web-Tech.webp" 
          alt="MaaJanki Web Tech Hyderabad office and web development banner" 
          title="Website Designer & Web Development Agency Near Me in Hyderabad" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Website Designer & Web Development Agency Near Me in Hyderabad</h1>
            <p>
              Build world-class digital platforms with the top website designer near me in Hyderabad. Serving tech enterprises in HITEC City and growing commercial brands across Telangana, MaaJanki Web Tech delivers scalable Next.js web apps and ROI-driven marketing.
            </p>
            <div className="banner-buttons">
              <a
                href="https://share.google/sfG7HXx0jHaeRi8Tb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn1"
              >
                Review Us on Google
              </a>
              <Link href="/contact" className="btn2">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info Section */}
      <section className="contact-promo-section">
        <div className="contact-promo-container">
          <div className="contact-promo-grid">
            <a href="tel:+919006543913" className="contact-link">
              <div className="contact-promo-card">
                <Phone className="contact-icon" />
                <h4 className="contact-promo-title">Call Us</h4>
                <p className="contact-promo-text">+91 9006543913</p>
              </div>
            </a>

            <a 
              href="https://share.google/sfG7HXx0jHaeRi8Tb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MapPin className="contact-icon" />
                <h4 className="contact-promo-title">Coverage Desk</h4>
                <p className="contact-promo-text">Hyderabad, India</p>
              </div>
            </a>

            <a href="mailto:info@maajankiwebtech.com" className="contact-link">
              <div className="contact-promo-card">
                <Mail className="contact-icon" />
                <h4 className="contact-promo-title">Mail Us</h4>
                <p className="contact-promo-text">info@maajankiwebtech.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20website%20services%20in%20Hyderabad."
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MessageCircle className="contact-icon" />
                <h4 className="contact-promo-title">Live Chat</h4>
                <p className="contact-promo-text">WhatsApp Chat 24/7</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Local Content and Form */}
      <section className="contact-us-section">
        <div className="container contact">
          <div className="row justify-content-around">
            {/* Left Side - Form */}
            <div className="col-md-6">
              <Suspense fallback={<div className="p-4 text-center text-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Side - Local Business Info */}
            <div className="col-md-5">
              <div className="contact-us-content p-4 bg-white h-100 shadow-sm rounded">
                <h2 className="mb-3">Why Choose MaaJanki Web Tech Near You in Hyderabad?</h2>
                <p className="lead text-muted">
                  We are your trusted digital growth partner for Hyderabad. Get a high-performance Next.js website that ranks on Google and turns local searches into paying clients.
                </p>

                <div className="local-features my-4">
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Local SEO & Google Business 3-Pack Optimization</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Sub-Second Next.js & Mobile-Responsive Frameworks</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Transparent Pricing for Startups, SMBs & Enterprises</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Govt. Registered MSME (UDYAM-BR-38-0014113) & DPIIT Certified</span>
                  </div>
                </div>

                {/* Visible NAP Section */}
                <div className="nap-section my-4 p-3 bg-light border rounded">
                  <h3 className="h5 font-weight-bold text-dark mb-3">MaaJanki Web Tech (Hyderabad Service Desk)</h3>
                  <p className="mb-2">
                    <strong>Service Coverage:</strong> HITEC City Desk: Madhapur / Gachibowli, Hyderabad, Telangana - 500081
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+919006543913" className="text-dark">+91-9006543913</a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> <a href="mailto:info@maajankiwebtech.com" className="text-primary">info@maajankiwebtech.com</a>
                  </p>
                  <p className="mb-0">
                    <strong>Business Hours:</strong> Mon - Sat: 09:00 AM - 07:00 PM IST
                  </p>
                </div>

                <div className="d-flex flex-column gap-2">
                  <a
                    href="https://share.google/sfG7HXx0jHaeRi8Tb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-block"
                    style={{
                      backgroundColor: "#FD6A02",
                      color: "#fff",
                      borderRadius: "50px",
                      fontWeight: "500",
                      textAlign: "center",
                      padding: "10px 20px"
                    }}
                  >
                    View Verified Google Reviews
                  </a>

                  <Link
                    href="/contact"
                    className="btn btn-outline-dark btn-block"
                    style={{
                      borderRadius: "50px",
                      fontWeight: "500",
                      textAlign: "center",
                      padding: "10px 20px"
                    }}
                  >
                    Book Free 30-Min Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ & Near Me Queries Section */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: "#042544", color: "#fff", fontSize: "0.85rem" }}>
              Local Search FAQ
            </span>
            <h2 className="h2 font-weight-bold text-dark" style={{ fontSize: "1.9rem" }}>
              Frequently Asked Questions About Web Design Near Me in Hyderabad
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Clear answers to common questions about finding, hiring, and working with a website designer in Hyderabad.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    Why choose MaaJanki Web Tech for web development near me in Hyderabad?
                  </h3>
                  <p className="text-muted mb-0">We bring Next.js 15 full-stack engineering, sub-second load times, and custom MERN stack software architectures built for enterprise scalability without excessive overhead.</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    Can you develop B2B enterprise software and client portals in Hyderabad?
                  </h3>
                  <p className="text-muted mb-0">Yes, we build secure, API-connected customer portals, billing platforms, and operational dashboards tailored to your enterprise workflows.</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    Do you offer performance marketing and Google Ads management in Hyderabad?
                  </h3>
                  <p className="text-muted mb-0">Yes, our certified performance marketers manage data-driven PPC campaigns on Google and Meta that maximize conversion volume and minimize cost per lead.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="google-map-container">
          <iframe
            title="MaaJanki Web Tech Hyderabad Location Map"
            src="https://maps.google.com/maps?q=Hyderabad%2C%20Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: "100%", height: "400px" }}
          ></iframe>
        </div>
      </section>
    </>
  );
}
