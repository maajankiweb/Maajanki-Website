import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/app/contact/ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Website Designer Near Me in Noida UP | MaaJanki Web Tech",
  description: "Expert website designer and web development company near me in Noida, UP. Custom corporate web applications, startup portals & Google SEO. Get a free quote!",
  keywords: ["website designer near me in Noida","web development company near me Noida","web designer near me Noida","digital marketing agency near me in Noida","best website maker near me Noida","Next.js developer Noida","local SEO services Noida","MaaJanki Web Tech Noida"],
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations/noida',
  },
  openGraph: {
    title: "Website Designer Near Me in Noida UP | MaaJanki Web Tech",
    description: "Expert website designer and web development company near me in Noida, UP. Custom corporate web applications, startup portals & Google SEO. Get a free quote!",
    url: 'https://maajankiwebtech.com/locations/noida',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Website Designer Near Me in Noida UP | MaaJanki Web Tech",
    description: "Expert website designer and web development company near me in Noida, UP. Custom corporate web applications, startup portals & Google SEO. Get a free quote!",
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
      "@id": "https://maajankiwebtech.com/locations/noida#business",
      "parentOrganization": {
        "@type": "Organization",
        "name": "MaaJanki Web Tech",
        "url": "https://maajankiwebtech.com/",
        "@id": "https://maajankiwebtech.com/#organization"
      },
      "name": "MaaJanki Web Tech - Noida",
      "legalName": "MaaJanki Web Tech",
      "description": "Expert website designer and web development company near me in Noida, UP. Custom corporate web applications, startup portals & Google SEO. Get a free quote!",
      "url": "https://maajankiwebtech.com/locations/noida",
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
        "latitude": 28.5355,
        "longitude": 77.391
      },
      "areaServed": [
        "Greater Noida",
        "Sector 62",
        "Sector 18",
        "Ghaziabad",
        "Delhi NCR",
        "Uttar Pradesh"
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
      "@id": "https://maajankiwebtech.com/locations/noida#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best web development agency near me in Noida, UP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MaaJanki Web Tech delivers premier web development and SEO in Noida, providing custom software, responsive corporate websites, and transparent pricing with zero lock-in."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle technical SEO and Google Ads for Noida IT firms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our certified Google Ads specialists and SEO architects build targeted B2B funnels that lower customer acquisition costs and drive high-ticket corporate inquiries."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure data security for corporate websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We implement end-to-end HTTPS/TLS, automated CSRF/XSS protection, rate limiting, and Cloudflare WAF integration to ensure zero security vulnerabilities."
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
          alt="MaaJanki Web Tech Noida office and web development banner" 
          title="Website Designer & Web Development Company Near Me in Noida" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Website Designer & Web Development Company Near Me in Noida</h1>
            <p>
              Dominate your market with the top website designer near me in Noida. MaaJanki Web Tech engineers robust corporate portals, B2B lead generation engines, and modern Next.js web applications for IT companies, manufacturing firms, and retail brands across Noida and Greater Noida.
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
                <p className="contact-promo-text">Noida, India</p>
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
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20website%20services%20in%20Noida."
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
                <h2 className="mb-3">Why Choose MaaJanki Web Tech Near You in Noida?</h2>
                <p className="lead text-muted">
                  We are your trusted digital growth partner for Noida. Get a high-performance Next.js website that ranks on Google and turns local searches into paying clients.
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
                  <h3 className="h5 font-weight-bold text-dark mb-3">MaaJanki Web Tech (Noida Service Desk)</h3>
                  <p className="mb-2">
                    <strong>Service Coverage:</strong> NCR Tech Zone Desk: Sector 62 / Sector 18, Noida, Uttar Pradesh - 201301
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
              Frequently Asked Questions About Web Design Near Me in Noida
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Clear answers to common questions about finding, hiring, and working with a website designer in Noida.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    Who is the best web development agency near me in Noida, UP?
                  </h3>
                  <p className="text-muted mb-0">MaaJanki Web Tech delivers premier web development and SEO in Noida, providing custom software, responsive corporate websites, and transparent pricing with zero lock-in.</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    Can you handle technical SEO and Google Ads for Noida IT firms?
                  </h3>
                  <p className="text-muted mb-0">Yes, our certified Google Ads specialists and SEO architects build targeted B2B funnels that lower customer acquisition costs and drive high-ticket corporate inquiries.</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    How do you ensure data security for corporate websites?
                  </h3>
                  <p className="text-muted mb-0">We implement end-to-end HTTPS/TLS, automated CSRF/XSS protection, rate limiting, and Cloudflare WAF integration to ensure zero security vulnerabilities.</p>
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
            title="MaaJanki Web Tech Noida Location Map"
            src="https://maps.google.com/maps?q=Noida%2C%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
