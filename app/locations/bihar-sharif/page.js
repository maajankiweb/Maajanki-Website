import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/app/contact/ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Best Web Development & Digital Marketing Agency in Bihar Sharif | MaaJanki Web Tech",
  description: "MaaJanki Web Tech is top-rated as the best website development agency near me in Bihar Sharif and across Bihar. We build Next.js web applications, e-commerce stores, and local SEO solutions.",
  keywords: [
    "best website development agency near me",
    "web design agency Bihar Sharif",
    "website developer Bihar Sharif",
    "top web development agency near me",
    "digital marketing agency Bihar Sharif",
    "SEO services Bihar Sharif",
    "MaaJanki Web Tech"
  ],
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations/bihar-sharif',
  }
};

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService", "SoftwareCompany"],
        "@id": "https://maajankiwebtech.com/locations/bihar-sharif#office",
        "name": "MaaJanki Web Tech - Bihar Sharif Regional Services",
        "legalName": "MaaJanki Web Tech",
        "description": "Top-rated website development agency, custom web application developer, software company, and digital marketing firm serving Bihar Sharif and Nalanda district, Bihar.",
        "url": "https://maajankiwebtech.com/locations/bihar-sharif",
        "telephone": "+91-9006543913",
        "email": "info@maajankiwebtech.com",
        "image": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bihar Sharif",
          "addressRegion": "Bihar",
          "postalCode": "803101",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.1982,
          "longitude": 85.5149
        },
        "areaServed": ["Bihar Sharif", "Nalanda", "Rajgir", "Patna", "Bettiah", "Bagaha", "Bihar"],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q115783355",
          "https://g.page/r/CVvMyeoY0y0XEAE",
          "https://www.linkedin.com/company/maajanki-web-tech-company/"
        ],
        "identifier": {
          "@type": "PropertyValue",
          "name": "MSME Udyam Registration Number",
          "value": "UDYAM-BR-38-0014113"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://maajankiwebtech.com/locations/bihar-sharif#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best website development agency near me in Bihar Sharif?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MaaJanki Web Tech is top-rated as the best website development agency near you in Bihar Sharif, offering custom Next.js web application development, e-commerce solutions, local SEO, and AI engine optimization across Bihar."
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
          alt="MaaJanki Web Tech Bihar Sharif services banner" 
          title="Best Website Development Agency Near Me in Bihar Sharif" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Best Website Development Agency Near Me in Bihar Sharif
            </h1>
            <p>
              MaaJanki Web Tech delivers high-performance website development, Next.js web applications, e-commerce stores, and local SEO services in Bihar Sharif and across Bihar.
            </p>
            <div className="banner-buttons">
              <a
                href="https://g.page/r/CVvMyeoY0y0XEAE/review"
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
              href="https://g.page/r/CVvMyeoY0y0XEAE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MapPin className="contact-icon" />
                <h4 className="contact-promo-title">Bihar Services</h4>
                <p className="contact-promo-text">Bihar Sharif & Nationwide</p>
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
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20the%20best%20website%20development%20agency%20in%20Bihar%20Sharif."
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
            <div className="col-md-6">
              <Suspense fallback={<div className="p-4 text-center text-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            <div className="col-md-5">
              <div className="contact-us-content p-4 bg-white h-100 border rounded">
                <h2 className="mb-3">Why Choose MaaJanki Web Tech in Bihar Sharif?</h2>
                <p className="lead text-muted">
                  We build ultra-fast, modern, and SEO-optimized websites that help businesses in Bihar Sharif gain massive local visibility and inquiries.
                </p>

                <div className="local-features my-4">
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Local SEO & Google Business 3-Pack Growth</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Next.js 15 Fast & Responsive Web Designs</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Government Registered MSME Accredited Enterprise</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Transparent Pricing & Lifetime Technical Support</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <Link href="/contact" className="btn btn-block text-white" style={{ backgroundColor: '#FD6A02', borderRadius: '50px', fontWeight: '500', padding: '10px 20px', textAlign: 'center' }}>
                    Request Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
