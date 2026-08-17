import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/app/contact/ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Web Design & Digital Marketing Agency in Pune, Bihar | Maajanki Web Tech",
  description: "MaaJanki Web Tech is the leading web design agency and digital marketing company in Pune, Bihar. We offer custom web development, local SEO, and paid ads. Contact us today!",
  keywords: ["web design agency Pune", "website developer West Champaran", "digital marketing agency Pune", "SEO services Pune", "MaaJanki Web Tech"],
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations/pune',
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
    "name": "Maajanki Web Tech",
    "description": "Professional website development and digital marketing agency in Pune, West Champaran, Bihar.",
    "url": "https://maajankiwebtech.com/locations/pune",
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
    "areaServed": ["Pune", "Bagaha", "Narkatiaganj", "Raxaul", "Motihari", "West Champaran", "East Champaran", "Bihar"],
    "priceRange": "₹₹",
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
      "opens": "10:00",
      "closes": "18:00"
    }
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
          alt="MaaJanki Web Tech Pune office banner" 
          title="Web Design & Digital Marketing Agency in Pune, Bihar" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Web Design & Digital Marketing Agency in Pune, Bihar
            </h1>
            <p>
              Grow your business online with the premier website developer in West Champaran. 
              We deliver custom web development, local SEO, and result-oriented digital marketing 
              tailored for local businesses, retail shops, and startups.
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
              href="https://g.page/r/CdM4-zj2uGnQEB0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MapPin className="contact-icon" />
                <h4 className="contact-promo-title">Our Office</h4>
                <p className="contact-promo-text">Bagaha, Bihar, 845101</p>
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
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20local%20web%20services."
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
              <div className="contact-us-content p-4 bg-white h-100">
                <h2 className="mb-3">Why Choose MaaJanki Web Tech in Pune?</h2>
                <p className="lead text-muted">
                  We are the trusted digital growth partner for businesses in West Champaran. 
                  Get a high-performance website that ranks on Google and brings local customers.
                </p>

                <div className="local-features my-4">
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Local SEO & Google Business Optimization</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Fast & Mobile-Responsive Web Designs</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Affordable Pricing for Startups & Retailers</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Dedicated In-Person and Remote Support</span>
                  </div>
                </div>

                {/* Visible NAP Section */}
                <div className="nap-section my-4 p-3 bg-light border rounded">
                  <h3 className="h5 font-weight-bold text-dark mb-3">MaaJanki Web Tech (Bagaha Regional Office address)</h3>
                  <p className="mb-2">
                    <strong>Business Name:</strong> Maajanki Web Tech
                  </p>
                  <p className="mb-2">
                    <strong>Address:</strong> First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, West Champaran, Bihar - 845101
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

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="google-map-container">
          <iframe
            title="MaaJanki Web Tech Pune Office Location"
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
