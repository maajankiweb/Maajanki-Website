import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact MaaJanki Web Tech | Web Development & Digital Marketing Agency in Bihar",
  description: "Contact MaaJanki Web Tech in Bagaha, West Champaran, Bihar. Call +91-9006543913 or email info@maajankiwebtech.com for web development & SEO inquiries.",
  keywords: "website developer West Champaran, web design agency Bagaha, contact MaaJanki Web Tech, Bettiah Bihar, Patna web developer",
  openGraph: {
    title: "Contact MaaJanki Web Tech | Web Development & Digital Marketing Agency in Bihar",
    description: "Contact MaaJanki Web Tech in Bagaha, West Champaran, Bihar. Call +91-9006543913 or email info@maajankiwebtech.com for web development & SEO inquiries.",
    url: "https://maajankiwebtech.com/contact",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MaaJanki Web Tech | Web Development & Digital Marketing Agency in Bihar",
    description: "Contact MaaJanki Web Tech in Bagaha, West Champaran, Bihar. Call +91-9006543913 or email info@maajankiwebtech.com for web development & SEO inquiries.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/contact",
  },
};

export default function Page() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Maajanki Web Tech",
    "description": "Web development and digital marketing agency in Bagaha, West Champaran, Bihar",
    "url": "https://maajankiwebtech.com",
    "telephone": "+91-9006543913",
    "image": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
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
      "latitude": 27.1222,
      "longitude": 84.0722
    },
    "areaServed": [
      "Bettiah", "Bagaha", "Narkatiaganj", "Raxaul", "Motihari", 
      "West Champaran", "East Champaran", "Bihar",
      "Patna", "Noida", "Jaipur", "Lucknow", "Muzaffarpur", "Gaya",
      "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Kolkata",
      "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Nepal"
    ],
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

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://maajankiwebtech.com/contact#webpage",
    "url": "https://maajankiwebtech.com/contact",
    "name": "Contact Maajanki Web Tech | Web Agency in Bagaha Bihar",
    "description": "Contact information for Maajanki Web Tech, web development and digital marketing agency in Bagaha, Bihar.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://maajankiwebtech.com/#website",
      "url": "https://maajankiwebtech.com"
    }
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Banner Section */}
      <section className="custom-banner">
        <Image 
          priority 
          src="/images/pages/main-services-pages/contact-banner-image-Maajanki-Web-Tech.webp" 
          alt="MaaJanki Web Tech contact page banner showcasing website development and digital marketing services" 
          title="Contact MaaJanki Web Tech – Website Development & Digital Marketing Agency in India" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Contact MaaJanki Web Tech Website & Digital Marketing Experts
            </h1>
            <p>
              Get in touch with a trusted website development and digital
              marketing agency in India. From SEO and branding to web
              development and performance marketing, we help businesses grow
              online with result-driven strategies.
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
              <Link href="/about" className="btn2">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Promo Section */}
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
                <h4 className="contact-promo-title">Visit Us</h4>
                <p className="contact-promo-text">Bagaha, Bihar, India</p>
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
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20your%20service."
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MessageCircle className="contact-icon" />
                <h4 className="contact-promo-title">Live Chat</h4>
                <p className="contact-promo-text">Chat with Us 24/7</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Form Section */}
      <section className="contact-us-section">
        <div className="container contact">
          <div className="row justify-content-around">
            {/* Left Side - Form */}
            <div className="col-md-6">
              <Suspense fallback={<div className="p-4 text-center text-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>


            {/* Right Side - Contact Info (NAP & Details) */}
            <div className="col-md-5">
              <div className="contact-us-content p-4 bg-white h-100">
                <h2 className="mb-3">Need Help with Your Digital Journey?</h2>
                <p className="lead text-muted">
                  Get expert guidance to launch, grow, or transform your online
                  business with confidence.
                </p>

                {/* Visible NAP Section */}
                <div className="nap-section my-4 p-3 bg-light border rounded">
                  <h3 className="h5 font-weight-bold text-dark mb-3">MaaJanki Web Tech (Local Office)</h3>
                  <p className="mb-2">
                    <strong>Business Name:</strong> Maajanki Web Tech
                  </p>
                  <p className="mb-2">
                    <strong>Address:</strong> Brajmala Complex, First Floor, Near Cinema House, Building of UCO Bank, Bagaha Bazar, West Champaran, Bihar - 845101
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

      {/* Service Areas Section */}
      <section className="service-areas-section">
        <div className="service-areas-container">
          <h2 className="service-areas-title">Our Service Areas</h2>
          <p className="service-areas-subtitle">
            We proudly provide high-performance web development, SEO, and digital marketing services across domestic and global markets:
          </p>
          
          <div className="service-tiers-container">
            {/* Local / Tier 3 */}
            <div className="service-tier-card">
              <h3 className="service-tier-title">Tier 3 (Local Region)</h3>
              <div className="service-areas-grid">
                {[
                  { name: "Bettiah", path: "/locations/bettiah" },
                  { name: "Bagaha", path: "/locations/bagaha" },
                  { name: "Narkatiaganj", path: "/locations/narkatiaganj" },
                  { name: "Raxaul", path: "/locations/raxaul" },
                  { name: "Motihari", path: "/locations/motihari" },
                  { name: "West Champaran", path: "/locations/bettiah" },
                  { name: "East Champaran", path: "/locations/motihari" },
                ].map((area, index) => (
                  <Link href={area.path} key={index} className="service-area-badge">
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tier 2 */}
            <div className="service-tier-card">
              <h3 className="service-tier-title">Tier 2 (Growth Cities)</h3>
              <div className="service-areas-grid">
                {[
                  { name: "Patna", path: "/locations/patna" },
                  { name: "Noida", path: "/locations/noida" },
                  { name: "Jaipur", path: "/locations/jaipur" },
                  { name: "Lucknow", path: "/locations/lucknow" },
                  { name: "Muzaffarpur", path: "/locations/muzaffarpur" },
                  { name: "Gaya", path: "/locations/gaya" },
                ].map((area, index) => (
                  <Link href={area.path} key={index} className="service-area-badge">
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tier 1 */}
            <div className="service-tier-card">
              <h3 className="service-tier-title">Tier 1 (Metro Cities)</h3>
              <div className="service-areas-grid">
                {[
                  { name: "Delhi NCR", path: "/locations/delhi" },
                  { name: "Mumbai", path: "/locations/mumbai" },
                  { name: "Bengaluru", path: "/locations/bengaluru" },
                  { name: "Hyderabad", path: "/locations/hyderabad" },
                  { name: "Pune", path: "/locations/pune" },
                  { name: "Kolkata", path: "/locations/kolkata" },
                ].map((area, index) => (
                  <Link href={area.path} key={index} className="service-area-badge">
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* International */}
            <div className="service-tier-card">
              <h3 className="service-tier-title">International Markets</h3>
              <div className="service-areas-grid">
                {[
                  { name: "United States", path: "/locations/united-states" },
                  { name: "United Kingdom", path: "/locations/united-kingdom" },
                  { name: "Canada", path: "/locations/canada" },
                  { name: "Australia", path: "/locations/australia" },
                  { name: "United Arab Emirates", path: "/locations/united-arab-emirates" },
                  { name: "Nepal", path: "/locations/nepal" },
                ].map((area, index) => (
                  <Link href={area.path} key={index} className="service-area-badge">
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="google-map-container">
          <iframe
            title="MaaJanki Web Tech Location in Bagaha, Bihar"
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
