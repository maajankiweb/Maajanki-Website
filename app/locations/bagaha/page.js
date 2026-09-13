import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/app/contact/ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Web Designer Near Me in Bagaha, Bihar | MaaJanki Web Tech",
  description: "Looking for the best website designer near me in Bagaha, Bihar? MaaJanki Web Tech builds custom Next.js websites, e-commerce, & local SEO. Get a free quote!",
  keywords: ["website designer near me in Bagaha","web development company near me Bagaha","web designer near me Bagaha","digital marketing agency near me in Bagaha","best website maker near me Bagaha","Next.js developer Bagaha","local SEO services Bagaha","MaaJanki Web Tech Bagaha"],
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations/bagaha',
  },
  openGraph: {
    title: "Web Designer Near Me in Bagaha, Bihar | MaaJanki Web Tech",
    description: "Looking for the best website designer near me in Bagaha, Bihar? MaaJanki Web Tech builds custom Next.js websites, e-commerce, & local SEO. Get a free quote!",
    url: 'https://maajankiwebtech.com/locations/bagaha',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Designer Near Me in Bagaha, Bihar | MaaJanki Web Tech",
    description: "Looking for the best website designer near me in Bagaha, Bihar? MaaJanki Web Tech builds custom Next.js websites, e-commerce, & local SEO. Get a free quote!",
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
      "@id": "https://maajankiwebtech.com/locations/bagaha#business",
      "parentOrganization": {
        "@type": "Organization",
        "name": "MaaJanki Web Tech",
        "url": "https://maajankiwebtech.com/",
        "@id": "https://maajankiwebtech.com/#organization"
      },
      "name": "MaaJanki Web Tech - Bagaha",
      "legalName": "MaaJanki Web Tech",
      "description": "Looking for the best website designer near me in Bagaha, Bihar? MaaJanki Web Tech builds custom Next.js websites, e-commerce, & local SEO. Get a free quote!",
      "url": "https://maajankiwebtech.com/locations/bagaha",
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
        "latitude": 27.2029,
        "longitude": 84.4679
      },
      "areaServed": [
        "Bettiah",
        "Narkatiaganj",
        "Raxaul",
        "Motihari",
        "Valmiki Nagar",
        "West Champaran",
        "Bihar"
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
      "@id": "https://maajankiwebtech.com/locations/bagaha#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best website designer near me in Bagaha, Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MaaJanki Web Tech is top-rated as the best website designer and digital marketing agency near you in Bagaha, West Champaran. Located at Brajmala Complex in Bagaha Bazar, we build lightning-fast Next.js websites, online shops, and Google 3-Pack Map optimization."
          }
        },
        {
          "@type": "Question",
          "name": "What web development services are available near me in Bagaha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Near you in Bagaha, we provide custom business website design, mobile-responsive web development, e-commerce portals, local SEO, WhatsApp CRM integration, and billing software."
          }
        },
        {
          "@type": "Question",
          "name": "Can I visit MaaJanki Web Tech in person in Bagaha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! You can visit our registered office at Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, or contact us directly at +91-9006543913 for a free consultation."
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
          alt="MaaJanki Web Tech Bagaha office and web development banner" 
          title="Website Designer & Web Development Company Near Me in Bagaha, Bihar" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Website Designer & Web Development Company Near Me in Bagaha, Bihar</h1>
            <p>
              Searching for a trusted website designer or web development company near me in Bagaha? MaaJanki Web Tech is headquartered right here in Bagaha Bazar, offering local business owners, retailers, and entrepreneurs premier in-person and rapid digital development services.
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
                <p className="contact-promo-text">Bagaha, India</p>
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
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20website%20services%20in%20Bagaha."
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
                <h2 className="mb-3">Why Choose MaaJanki Web Tech Near You in Bagaha?</h2>
                <p className="lead text-muted">
                  We are your trusted digital growth partner for Bagaha. Get a high-performance Next.js website that ranks on Google and turns local searches into paying clients.
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
                  <h3 className="h5 font-weight-bold text-dark mb-3">MaaJanki Web Tech (Bagaha Service Desk)</h3>
                  <p className="mb-2">
                    <strong>Service Coverage:</strong> Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, West Champaran, Bihar - 845101
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
              Frequently Asked Questions About Web Design Near Me in Bagaha
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Clear answers to common questions about finding, hiring, and working with a website designer in Bagaha.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    Which is the best website designer near me in Bagaha, Bihar?
                  </h3>
                  <p className="text-muted mb-0">MaaJanki Web Tech is top-rated as the best website designer and digital marketing agency near you in Bagaha, West Champaran. Located at Brajmala Complex in Bagaha Bazar, we build lightning-fast Next.js websites, online shops, and Google 3-Pack Map optimization.</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    What web development services are available near me in Bagaha?
                  </h3>
                  <p className="text-muted mb-0">Near you in Bagaha, we provide custom business website design, mobile-responsive web development, e-commerce portals, local SEO, WhatsApp CRM integration, and billing software.</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    Can I visit MaaJanki Web Tech in person in Bagaha?
                  </h3>
                  <p className="text-muted mb-0">Yes! You can visit our registered office at Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, or contact us directly at +91-9006543913 for a free consultation.</p>
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
            title="MaaJanki Web Tech Bagaha Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.077602258112!2d84.50572527522043!3d26.80565757671114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936f24a2f8dd1f%3A0x172dd318eac9cc5b!2sMAAJANKI%20WEB%20TECH!5e0!3m2!1sen!2sin!4v1763971778984!5m2!1sen!2sin"
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
