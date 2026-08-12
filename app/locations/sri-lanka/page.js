import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/app/contact/ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Web Design & Digital Marketing Agency in Sri Lanka | MaaJanki Web Tech",
  description: "MaaJanki Web Tech is the leading web design agency and digital marketing company serving clients in Sri Lanka. We offer custom web development, global SEO, and paid ads.",
  keywords: ["web design agency Sri Lanka", "web developer Sri Lanka", "digital marketing agency Sri Lanka", "SEO services Sri Lanka", "MaaJanki Web Tech"],
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations/sri-lanka',
  }
};

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://maajankiwebtech.com/#localbusiness",
    "parentOrganization": {
      "@type": "Organization",
      "name": "MaaJanki Web Tech",
      "url": "https://maajankiwebtech.com/",
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "name": "MaaJanki Web Tech - Sri Lanka",
    "description": "Professional website development and digital marketing agency serving Sri Lanka.",
    "url": "https://maajankiwebtech.com/locations/sri-lanka",
    "telephone": "+91-9006543913",
    "image": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar",
      "addressLocality": "Bagaha",
      "addressRegion": "Bihar",
      "postalCode": "845101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.0984,
      "longitude": 84.2625
    },
    "areaServed": ["Sri Lanka", "Global"],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="custom-banner">
        <Image 
          priority 
          src="/images/pages/main-services-pages/contact-banner-image-Maajanki-Web-Tech.webp" 
          alt="MaaJanki Web Tech Sri Lanka banner" 
          title="Web Design & Digital Marketing Agency in Sri Lanka" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Web Design & Digital Marketing Agency in Sri Lanka
            </h1>
            <p>
              Expand your digital presence in Sri Lanka with our high-performance web development, 
              global SEO strategies, and ROI-driven marketing campaigns tailored for startups & enterprises.
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
              href="https://g.page/r/CdM4-zj2uGnQEB0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MapPin className="contact-icon" />
                <h4 className="contact-promo-title">Global Services</h4>
                <p className="contact-promo-text">Serving Sri Lanka</p>
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
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20web%20services%20in%20Sri%20Lanka."
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

      <section className="contact-us-section">
        <div className="container contact">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <Suspense fallback={<div className="p-4 text-center text-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            <div className="col-md-5">
              <div className="contact-us-content p-4 bg-white h-100">
                <h2 className="mb-3">Why Choose MaaJanki Web Tech in Sri Lanka?</h2>
                <p className="lead text-muted">
                  We are a cost-effective, high-quality digital partner for businesses in Sri Lanka. 
                  Get custom web architecture, e-commerce solutions, and search engine optimization.
                </p>

                <div className="local-features my-4">
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">International & Technical SEO Optimization</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">High-Speed & Secure Custom Web Applications</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Dedicated Project Management & 24/7 Support</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Cost-Effective Offshore Development Pricing</span>
                  </div>
                </div>

                <div className="nap-section my-4 p-3 bg-light border rounded">
                  <h3 className="h5 font-weight-bold text-dark mb-3">MaaJanki Web Tech (Global Development Center)</h3>
                  <p className="mb-2">
                    <strong>Business Name:</strong> MaaJanki Web Tech
                  </p>
                  <p className="mb-2">
                    <strong>Target Market:</strong> Sri Lanka
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+919006543913" className="text-dark">+91-9006543913</a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> <a href="mailto:info@maajankiwebtech.com" className="text-primary">info@maajankiwebtech.com</a>
                  </p>
                  <p className="mb-0">
                    <strong>Hours:</strong> Mon - Sat: 10:00 AM - 06:00 PM IST
                  </p>
                </div>

                <div className="d-flex flex-column gap-2">
                  <a
                    href="https://share.google/zrfW98LBlFTL6ZzPe"
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
                    Get Directions on Google Maps
                  </a>

                  <a
                    href="https://g.page/r/CdM4-zj2uGnQEB0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-block"
                    style={{
                      borderRadius: "50px",
                      fontWeight: "500",
                      textAlign: "center",
                      padding: "10px 20px"
                    }}
                  >
                    View Google Business Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="google-map-section">
        <div className="google-map-container">
          <iframe
            title="MaaJanki Web Tech Global Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.077602258112!2d84.50572527522043!3d26.80565757671114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936f24a2f8dd1f%3A0x172dd318eac9cc5b!2sMAAJANKI%20WEB%20TECH!5e0!3m2!1sen!2sin!4v1763971778984!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: "100%", height: "450px" }}
          ></iframe>
        </div>
      </section>

          </>
  );
}
