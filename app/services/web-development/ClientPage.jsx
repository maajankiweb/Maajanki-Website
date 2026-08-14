'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/WebDevelopment.css";
import "@/app/styles/Home.css";
import "@/app/styles/Branding.css";

const WebDevelopment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* SEO & Generative Engine Optimization Metadata */}
      {
        /* JSON-LD Schema */
      }<script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://maajankiwebtech.com/#organization",
              "name": "MaaJanki Web Tech",
              "url": "https://maajankiwebtech.com/",
              "logo": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
              "founder": {
                "@type": "Person",
                "name": "Ashish Kumar",
                "sameAs": [
                  "https://www.linkedin.com/in/ashishkumarji/",
                  "https://www.wikidata.org/wiki/Q115783355"
                ]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61577526895580",
                "https://www.instagram.com/maajankiwebtech/",
                "https://www.linkedin.com/company/maajanki-web-tech-company/",
                "https://x.com/MaaJankweb",
                "https://www.wikidata.org/wiki/Q804153",
                "https://www.wikidata.org/wiki/Q1162"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9006543913",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            },
            {
              "@type": "WebPage",
              "@id": "https://maajankiwebtech.com/services/web-development#webpage",
              "url": "https://maajankiwebtech.com/services/web-development",
              "name": "Global Website Development Services | MaaJanki Web Tech",
              "isPartOf": { "@id": "https://maajankiwebtech.com/#website" },
              "about": {
                "@type": "Service",
                "name": "Website Development Services",
                "provider": { "@id": "https://maajankiwebtech.com/#organization" }
              }
            },
            {
              "@type": "Service",
              "@id": "https://maajankiwebtech.com/services/web-development#service",
              "name": "Website Development Services",
              "serviceType": "Website Design and Development",
              "provider": { "@id": "https://maajankiwebtech.com/#organization" },
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "State", "name": "Bihar" }
              ],
              "description": "Custom website development including business websites, eCommerce platforms, CMS solutions, and web applications optimized for SEO and performance."
            }
          ]
        }
        ` }} />


      {/* Banner Section */}
      <section className="custom-banner">
        <Image priority src="/images/pages/main-services-pages/web-development-banner-image-Maajanki-Web-Tech.webp" alt="Website Development Services by MaaJanki Web Tech – Responsive, SEO-Friendly Business Websites" title="Professional Website Development Services in India | MaaJanki Web Tech" data-no-retina="" width="1280" height="720" />

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Best Website Development Company in Bihar, India | Custom Web
              Solutions to Accelerate Business Growth
            </h1>
            <div className="aeo-definition-box">
              <p>
                Website Development is the technical process of building,
                designing, coding, and maintaining internet or intranet
                websites. By combining semantic HTML5, CSS3 layouts, full-stack
                programming (React, Next.js, Node.js), and database
                optimization, professional web development ensures that digital
                interfaces are responsive, crawlable, and fully aligned with
                generative search engines (GEO) to deliver high conversions.
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Get a Free Consultation
              </Link>
              <Link href="/about" className="btn2">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Page Introduction Section - Redesigned Modern Layout */}
      <section
        className="webdev-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="webdev-intro-card"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(253, 106, 2, 0.35)",
              borderRadius: "24px",
              padding: "50px 40px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(253, 106, 2, 0.15)",
              position: "relative",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(253, 106, 2, 0.15)",
                  border: "1px solid rgba(253, 106, 2, 0.5)",
                  color: "#FD6A02",
                  padding: "6px 20px",
                  borderRadius: "30px",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Web Engineering &amp; Development
              </span>
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: "800",
                  fontFamily: '"Outfit", sans-serif',
                  lineHeight: "1.3",
                  maxWidth: "950px",
                  margin: "0 auto 20px",
                }}
              >
                Top-Rated <span style={{ color: "#FD6A02" }}>Website Development Company in Bihar, India</span> – Delivering Fast, Custom, and SEO-Optimized Sites
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  Are you looking for the <strong style={{ color: "#ffffff" }}>best website development company in Bihar, India</strong>? MaaJanki Web Tech is your trusted technology partner, crafting high-performance, responsive websites for clients across Bagaha, Patna, Delhi, Bangalore, and globally.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(253, 106, 2, 0.08)",
                  border: "1px solid rgba(253, 106, 2, 0.25)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    color: "#e2e8f0",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  We build custom web solutions from scratch—from corporate websites to Shopify, WordPress, and full-stack MERN web applications—ensuring platforms are built for speed, security, and search engine leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 Sections */}
      <section className="services-overview-section webdev-overview-section" style={{ display: "block", background: "none", padding: 0 }}
      >
        {/* Section 1 – Custom Website Development */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Web-development/what-is-web-development-Maajanki.webp"
                      alt="Custom website development services by MaaJanki Web Tech"
                      title="Website Development Services – MaaJanki Web Tech"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">1. Custom Website Development</h2>
                <h3 className="sub-heading">Tailored Web Design Engineering Grounded in Brand Strategy</h3>
                <p className="content-text">
                  <strong>Custom Website Development</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 – Mobile-Responsive Frameworks */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Web-development/why-choose-us-web-dev-maajanki.webp"
                      alt="Responsive website development on multiple devices by MaaJanki Web Tech"
                      title="Mobile-Responsive Web Engineering – MaaJanki Web Tech"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">2. Mobile-Responsive Frameworks</h2>
                <h3 className="sub-heading">Cross-Platform Compatibility Built for Mobile-First Indexing</h3>
                <p className="content-text">
                  <strong>Mobile-Responsive Frameworks</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 – Full-Stack JavaScript */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#042544" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#g3)" rx="16" />
                      {/* MERN Stack visual */}
                      <circle cx="130" cy="120" r="55" fill="none" stroke="#61dafb" strokeWidth="2" opacity="0.8" />
                      <text x="130" y="115" textAnchor="middle" fill="#61dafb" fontSize="13" fontWeight="bold">React</text>
                      <text x="130" y="132" textAnchor="middle" fill="#61dafb" fontSize="11">.js</text>
                      <circle cx="390" cy="120" r="55" fill="none" stroke="#4db33d" strokeWidth="2" opacity="0.8" />
                      <text x="390" y="115" textAnchor="middle" fill="#4db33d" fontSize="13" fontWeight="bold">Mongo</text>
                      <text x="390" y="132" textAnchor="middle" fill="#4db33d" fontSize="11">DB</text>
                      <circle cx="130" cy="270" r="55" fill="none" stroke="#68a063" strokeWidth="2" opacity="0.8" />
                      <text x="130" y="265" textAnchor="middle" fill="#68a063" fontSize="13" fontWeight="bold">Node</text>
                      <text x="130" y="282" textAnchor="middle" fill="#68a063" fontSize="11">.js</text>
                      <circle cx="390" cy="270" r="55" fill="none" stroke="#f0db4f" strokeWidth="2" opacity="0.8" />
                      <text x="390" y="265" textAnchor="middle" fill="#f0db4f" fontSize="13" fontWeight="bold">Express</text>
                      <text x="390" y="282" textAnchor="middle" fill="#f0db4f" fontSize="11">.js</text>
                      {/* Center hub */}
                      <circle cx="260" cy="190" r="40" fill="#FD6A02" opacity="0.9" />
                      <text x="260" y="186" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">MERN</text>
                      <text x="260" y="202" textAnchor="middle" fill="#fff" fontSize="10">Stack</text>
                      {/* Connecting lines */}
                      <line x1="185" y1="145" x2="222" y2="170" stroke="#FD6A02" strokeWidth="1.5" opacity="0.6" />
                      <line x1="335" y1="145" x2="298" y2="170" stroke="#FD6A02" strokeWidth="1.5" opacity="0.6" />
                      <line x1="185" y1="245" x2="222" y2="210" stroke="#FD6A02" strokeWidth="1.5" opacity="0.6" />
                      <line x1="335" y1="245" x2="298" y2="210" stroke="#FD6A02" strokeWidth="1.5" opacity="0.6" />
                      <text x="260" y="355" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Full-Stack JavaScript Architecture</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">3. Full-Stack JavaScript Web Applications</h2>
                <h3 className="sub-heading">Scalable MERN Stack (MongoDB, Express, React, Node.js) Architectures</h3>
                <p className="content-text">
                  <strong>Full-Stack JavaScript Web Applications</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 – E-Commerce */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#042544" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#g4)" rx="16" />
                      {/* Shopping cart */}
                      <rect x="80" y="60" width="360" height="240" rx="12" fill="none" stroke="#FD6A02" strokeWidth="2" />
                      <rect x="95" y="80" width="150" height="80" rx="8" fill="#042544" />
                      <rect x="95" y="80" width="150" height="80" rx="8" fill="none" stroke="#FD6A02" strokeWidth="1.5" />
                      <text x="170" y="125" textAnchor="middle" fill="#FD6A02" fontSize="11">Product</text>
                      <rect x="270" y="80" width="150" height="80" rx="8" fill="#042544" />
                      <rect x="270" y="80" width="150" height="80" rx="8" fill="none" stroke="#FD6A02" strokeWidth="1.5" />
                      <text x="345" y="125" textAnchor="middle" fill="#FD6A02" fontSize="11">Catalog</text>
                      {/* Cart icon */}
                      <text x="260" y="210" textAnchor="middle" fill="#fff" fontSize="30">🛒</text>
                      {/* Payment badges */}
                      <rect x="95" y="240" width="90" height="35" rx="6" fill="#0d6efd" opacity="0.8" />
                      <text x="140" y="262" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Razorpay</text>
                      <rect x="200" y="240" width="90" height="35" rx="6" fill="#009cde" opacity="0.8" />
                      <text x="245" y="262" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PayPal</text>
                      <rect x="305" y="240" width="90" height="35" rx="6" fill="#635bff" opacity="0.8" />
                      <text x="350" y="262" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Stripe</text>
                      <text x="260" y="340" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">E-Commerce & Payment Integration</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">4. E-Commerce Development (Shopify & WooCommerce)</h2>
                <h3 className="sub-heading">Conversion-Focused Online Stores Built to Turn Traffic into Revenue</h3>
                <p className="content-text">
                  <strong>E-Commerce Development (Shopify & WooCommerce)</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 – WordPress & CMS */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#042544" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#g5)" rx="16" />
                      {/* WordPress dashboard mockup */}
                      <rect x="60" y="40" width="400" height="280" rx="10" fill="#1e1e2e" stroke="#FD6A02" strokeWidth="2" />
                      {/* Sidebar */}
                      <rect x="60" y="40" width="90" height="280" rx="10" fill="#042544" />
                      <circle cx="105" cy="70" r="16" fill="#FD6A02" />
                      <text x="105" y="75" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">WP</text>
                      <rect x="72" y="100" width="66" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                      <rect x="72" y="118" width="55" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
                      <rect x="72" y="136" width="60" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
                      <rect x="72" y="154" width="50" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
                      <rect x="72" y="172" width="63" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
                      {/* Content area */}
                      <rect x="165" y="55" width="282" height="30" rx="6" fill="#FD6A02" opacity="0.6" />
                      <text x="306" y="75" textAnchor="middle" fill="#fff" fontSize="10">Dashboard</text>
                      <rect x="165" y="96" width="130" height="60" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(156,77,204,0.4)" strokeWidth="1" />
                      <text x="230" y="130" textAnchor="middle" fill="#FD6A02" fontSize="10">Posts</text>
                      <rect x="307" y="96" width="130" height="60" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(156,77,204,0.4)" strokeWidth="1" />
                      <text x="372" y="130" textAnchor="middle" fill="#FD6A02" fontSize="10">Pages</text>
                      <rect x="165" y="170" width="272" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
                      <rect x="165" y="186" width="230" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
                      <rect x="165" y="202" width="200" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
                      <rect x="165" y="218" width="245" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
                      <text x="260" y="355" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">WordPress CMS Development</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">5. WordPress & CMS Development</h2>
                <h3 className="sub-heading">Self-Manageable Websites with Custom Theme Engineering</h3>
                <p className="content-text">
                  <strong>WordPress & CMS Development</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 – Core Web Vitals */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#042544" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#g6)" rx="16" />
                      {/* Speed gauge */}
                      <circle cx="260" cy="160" r="100" fill="none" stroke="#042544" strokeWidth="18" />
                      <circle cx="260" cy="160" r="100" fill="none" stroke="#22c55e" strokeWidth="18" strokeDasharray="220 440" strokeLinecap="round" transform="rotate(-220 260 160)" />
                      <text x="260" y="145" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="bold">98</text>
                      <text x="260" y="170" textAnchor="middle" fill="#22c55e" fontSize="12">Performance</text>
                      {/* Core Web Vitals labels */}
                      <rect x="60" y="280" width="110" height="52" rx="8" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
                      <text x="115" y="302" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">LCP</text>
                      <text x="115" y="320" textAnchor="middle" fill="#fff" fontSize="10">1.2s</text>
                      <rect x="200" y="280" width="110" height="52" rx="8" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
                      <text x="255" y="302" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">INP</text>
                      <text x="255" y="320" textAnchor="middle" fill="#fff" fontSize="10">48ms</text>
                      <rect x="342" y="280" width="110" height="52" rx="8" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
                      <text x="397" y="302" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">CLS</text>
                      <text x="397" y="320" textAnchor="middle" fill="#fff" fontSize="10">0.02</text>
                      <text x="260" y="355" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Core Web Vitals Optimization</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">6. Core Web Vitals & Speed Optimization</h2>
                <h3 className="sub-heading">Engineering Sub-Second Loading Speeds for Top Search Rankings</h3>
                <p className="content-text">
                  <strong>Core Web Vitals & Speed Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 – Technical SEO & Schema */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#042544" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#g7)" rx="16" />
                      {/* JSON-LD block */}
                      <rect x="60" y="40" width="400" height="250" rx="10" fill="#0d0d1a" stroke="#FD6A02" strokeWidth="2" />
                      <rect x="60" y="40" width="400" height="36" rx="10" fill="#FD6A02" />
                      <text x="260" y="63" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">JSON-LD Schema Markup</text>
                      <text x="80" y="100" fill="#FD6A02" fontSize="10" fontFamily="monospace">{'{'}</text>
                      <text x="95" y="118" fill="#61dafb" fontSize="10" fontFamily="monospace">"@context": "schema.org",</text>
                      <text x="95" y="136" fill="#61dafb" fontSize="10" fontFamily="monospace">"@type": "LocalBusiness",</text>
                      <text x="95" y="154" fill="#f0db4f" fontSize="10" fontFamily="monospace">"name": "MaaJanki Web Tech",</text>
                      <text x="95" y="172" fill="#f0db4f" fontSize="10" fontFamily="monospace">"serviceType": "Web Dev",</text>
                      <text x="95" y="190" fill="#22c55e" fontSize="10" fontFamily="monospace">"areaServed": "India",</text>
                      <text x="95" y="208" fill="#22c55e" fontSize="10" fontFamily="monospace">"url": "maajankiwebtech.com"</text>
                      <text x="80" y="226" fill="#FD6A02" fontSize="10" fontFamily="monospace">{'}'}</text>
                      {/* Search result preview */}
                      <rect x="60" y="305" width="400" height="48" rx="8" fill="#042544" stroke="rgba(156,77,204,0.5)" strokeWidth="1" />
                      <text x="80" y="324" fill="#4285f4" fontSize="10">maajankiwebtech.com</text>
                      <text x="80" y="341" fill="#FD6A02" fontSize="9">⭐ Rich Snippet Result</text>
                      <text x="260" y="370" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Technical SEO & Schema Integration</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">7. Technical SEO & Schema Markup Integration</h2>
                <h3 className="sub-heading">Structured Data Architecture for Generative AI Discovery</h3>
                <p className="content-text">
                  <strong>Technical SEO & Schema Markup Integration</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 – Web Security & SSL */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="g8" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#042544" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#g8)" rx="16" />
                      {/* Shield */}
                      <path d="M260 40 L360 80 L360 200 Q360 280 260 320 Q160 280 160 200 L160 80 Z" fill="none" stroke="#22c55e" strokeWidth="3" />
                      <path d="M260 55 L345 90 L345 200 Q345 265 260 300 Q175 265 175 200 L175 90 Z" fill="rgba(34,197,94,0.08)" />
                      {/* Lock icon */}
                      <rect x="232" y="165" width="56" height="44" rx="6" fill="#22c55e" opacity="0.9" />
                      <path d="M244 165 L244 150 Q244 130 260 130 Q276 130 276 150 L276 165" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="260" cy="187" r="7" fill="#042544" />
                      {/* SSL badges */}
                      <rect x="80" y="310" width="90" height="36" rx="6" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
                      <text x="125" y="333" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">SSL / TLS</text>
                      <rect x="215" y="310" width="90" height="36" rx="6" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
                      <text x="260" y="333" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">HTTPS</text>
                      <rect x="350" y="310" width="90" height="36" rx="6" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
                      <text x="395" y="333" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">Firewall</text>
                      <text x="260" y="365" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Web Security & SSL Protection</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">8. Web Security & SSL Protections</h2>
                <h3 className="sub-heading">Securing Customer Data and Preserving Domain Authority</h3>
                <p className="content-text">
                  <strong>Web Security & SSL Protections</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized web development is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>custom web applications and websites that highlight your product offerings with speed and security.</strong> By leveraging responsive layout architectures and full-stack database configurations, we ensure your web development aligns with the algorithms and search behavior of modern web browsers and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded website platform</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="webdev-section">
        <h2 className="webdev-title">
          Our End-to-End Web Development Solutions
        </h2>
        <p className="webdev-subtitle">
          We combine cutting-edge tech stacks with strategic design to build
          scalable, conversion-focused websites for business growth.
        </p>

        <div className="webdev-grid">
          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="webdev-heading">Custom Web Development</h3>
            <p>
              Tailor-made React and Node.js solutions built from the ground up
              to match your brand and business goals.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fab fa-wordpress"></i>
            </div>
            <h3 className="webdev-heading">WordPress Development</h3>
            <p>
              Custom theme design, block editors, and speed-optimized layouts
              for effortless content management.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3 className="webdev-heading">E-Commerce Development</h3>
            <p>
              Secure online storefronts with cart optimization, CRM
              integrations, and payment gateways.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fab fa-shopify"></i>
            </div>
            <h3 className="webdev-heading">Shopify Store Setup</h3>
            <p>
              High-converting Shopify design, theme optimizations, app
              configurations, and search integrations.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-scroll"></i>
            </div>
            <h3 className="webdev-heading">Landing Pages</h3>
            <p>
              Highly focused, conversion-optimized landing pages designed to
              generate leads and maximize advertising ROI.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-redo-alt"></i>
            </div>
            <h3 className="webdev-heading">Website Redesign</h3>
            <p>
              Modernize your website's UI/UX, upgrade the tech stack, resolve
              errors, and improve speed.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="webdev-heading">Responsive Design</h3>
            <p>
              Mobile-first layout structures that adjust to fit all screen sizes
              and devices.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-wrench"></i>
            </div>
            <h3 className="webdev-heading">Maintenance & Support</h3>
            <p>
              Proactive core updates, daily data backups, security audits, and
              quick troubleshooting support.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3 className="webdev-heading">Full Stack Development</h3>
            <p>
              Complex web applications built using MERN stack (MongoDB, Express,
              React, Node.js) for business workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="webdev-tools-section">
        <div className="tools-heading-section">
          <h2 className="tools-heading-title">
            Web Development Tech Stack We Master
          </h2>
        </div>

        <div className="tools-section">
          {[
            {
              src: "/images/icons/html-5--v1.png",
              label: "HTML5",
            },
            { src: "/images/icons/css3.png", label: "CSS3" },
            {
              src: "/images/icons/javascript.png",
              label: "JavaScript",
            },
            {
              src: "/images/icons/wordpress.png",
              label: "WordPress",
            },
            {
              src: "/images/icons/react.png",
              label: "React.js",
            },
            {
              src: "/images/icons/bootstrap.png",
              label: "Bootstrap",
            },
            {
              src: "/images/icons/tailwindcss.png",
              label: "Tailwind CSS",
            },
            {
              src: "/images/icons/nextjs.png",
              label: "Next.js",
            },
            {
              src: "/images/icons/nodejs.png",
              label: "Node.js",
            },
            {
              src: "/images/icons/express.png",
              label: "Express.js",
            },
            {
              src: "/images/icons/mongodb.png",
              label: "MongoDB",
            },
            {
              src: "/images/icons/firebase.png",
              label: "Firebase",
            },
            { src: "/images/icons/git.png", label: "Git" },
            { src: "/images/icons/github.png", label: "GitHub" },
            { src: "/images/icons/vercel.png", label: "Vercel" },
            { src: "/images/icons/netlify.png", label: "Netlify" },
            { src: "/images/icons/figma.png", label: "Figma" },
          ].map((tool, index) => (
            <div key={index} className="tool-card">
              <Image
                src={tool.src}
                alt={`${tool.label} technology logo`}
                loading="lazy"
                width={150} height={50} />
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure Section - Vibrant Brand Dual Color Gradient */}
      <section
        className="graphic-landing-section"
        style={{
          background: "radial-gradient(circle at 10% 20%, rgba(253, 106, 2, 0.25) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(4, 37, 68, 0.4) 0%, transparent 50%), linear-gradient(135deg, #042544 0%, #150902 45%, #FD6A02 100%)",
          padding: "90px 20px",
          position: "relative",
          overflow: "hidden",
          borderTop: "3px solid #FD6A02",
          borderBottom: "3px solid #042544",
        }}
      >
        <div className="graphic-container" style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "40px" }}>
          {/* Left Column: Heading, Subtext & Brochure Download Card */}
          <div className="graphic-left" style={{ flex: "1 1 500px" }}>
            <h2 className="br-graphic-heading" style={{ color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif', fontSize: "clamp(2rem, 3.5vw, 2.5rem)", marginBottom: "15px", lineHeight: "1.2" }}>
              Download Our Complete Web Development Guide
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to build a reliable, high-performance web presence. We design and code custom websites that drive growth and conversions.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Get Our Web Development Brochure
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Learn about our coding workflows, design frameworks, and transparent pricing in our brochure.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Clean, Documented Source Code
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Mobile-Responsive Layout Structures
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> 30 to 90 Days Post-Launch Support
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download Web Brochure
              </button>

              {isPopupOpen && (
                <div
                  className="brochure-popup-overlay"
                  onClick={closeBrochurePopup}
                >
                  <div
                    className="brochure-popup"
                    onClick={(e) => e.stopPropagation()}
                    style={{ background: "#042544", border: "2px solid #FD6A02" }}
                  >
                    <span
                      className="brochure-close"
                      onClick={closeBrochurePopup}
                    >
                      &times;
                    </span>
                    <form
                      action="https://getform.io/f/bvrmgenb"
                      method="POST"
                      id="brochure-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target;
                        fetch(form.action, {
                          method: "POST",
                          body: new FormData(form),
                          headers: { Accept: "application/json" },
                        }).then((res) => {
                          if (res.ok) {
                            alert("Thank you! Your brochure is downloading.");
                            setIsPopupOpen(false);
                            window.open(
                              "/brochures/MaaJanki-Web-Tech-Branding-Brochure.pdf",
                              "_blank"
                            );
                          } else {
                            alert("Submission error. Please try again.");
                          }
                        });
                      }}
                    >
                      <h3 className="brochure-title" style={{ color: "#ffffff" }}>
                        Download Web Guide
                      </h3>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        required
                      />
                      <button
                        type="submit"
                        className="brochure-submit-btn"
                        style={{ background: "#FD6A02", color: "#ffffff", borderRadius: "25px" }}
                      >
                        Download Now
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 2-Column Grid of 8 Service Cards */}
          <div className="graphic-right" style={{ flex: "1 1 550px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {[
                { icon: "fas fa-desktop", title: "Responsive Web Layouts" },
                { icon: "fas fa-code", title: "Custom Code Structures" },
                { icon: "fas fa-shopping-cart", title: "E-Commerce Optimization" },
                { icon: "fas fa-tachometer-alt", title: "Speed Optimization" },
                { icon: "fas fa-shield-alt", title: "SSL Security Setup" },
                { icon: "fas fa-mobile-alt", title: "Mobile Usability Tuning" },
                { icon: "fas fa-database", title: "Database Architecture" },
                { icon: "fas fa-chart-line", title: "SEO-Ready Implementation" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "14px",
                    padding: "24px 16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    minHeight: "115px",
                  }}
                  className="branding-brochure-service-card"
                >
                  <i className={item.icon} style={{ fontSize: "1.8rem", color: "#c084fc" }}></i>
                  <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "13.5px", lineHeight: "1.3" }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="jobready-workflow">
        <h3 className="jobready-heading-small">Structured Execution</h3>
        <h2 className="jobready-heading-main">Our Web Development Workflow</h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-comments"></i>
            </div>
            <p>1. Consultation</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-sitemap"></i>
            </div>
            <p>2. Wireframing</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-paint-brush"></i>
            </div>
            <p>3. UI/UX Design</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-code"></i>
            </div>
            <p>4. Clean Coding</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <p>5. Speed & SEO</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-rocket"></i>
            </div>
            <p>6. Launch & SSL</p>
          </div>
        </div>
      </section>

      {/* Pricing Section - Dual Brand Color Redesign */}
      <section
        className="branding-pricing-section"
        style={{
          background: "#FD6A02",
          padding: "85px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              background: "#042544",
              border: "3px solid #ffffff",
              borderRadius: "24px",
              padding: "50px 40px",
              boxShadow: "0 25px 60px rgba(4, 36, 66, 0.5)",
            }}
          >
            <div className="branding-pricing-header" style={{ textAlign: "center", marginBottom: "40px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#FD6A02",
                  color: "#ffffff",
                  padding: "8px 24px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  border: "2px solid #ffffff",
                }}
              >
                Pricing Plans
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: "800", fontFamily: '"Outfit", sans-serif' }}>
                Transparent Web Development Pricing
              </h2>
              <p style={{ color: "#e2e8f0", fontSize: "16px" }}>
                Complete source code ownership, zero monthly platform fees, full post-launch support included.
              </p>
            </div>

            <div className="branding-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Landing Page</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>
                    ₹14,999 <span style={{ color: "#64748b", fontSize: "1rem" }}>/ One-time</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Single-page custom layout</li>
                    <li>Mobile responsive design</li>
                    <li>CTA lead capture widgets</li>
                    <li>Schema &amp; on-page SEO</li>
                    <li>30 days post-launch support</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card featured" style={{ background: "#042544", border: "3px solid #FD6A02", borderRadius: "20px", padding: "35px 25px", position: "relative", color: "#ffffff", boxShadow: "0 15px 35px rgba(253, 106, 2, 0.4)" }}>
                <span className="branding-pricing-badge" style={{ background: "#FD6A02", color: "#ffffff", fontWeight: "800" }}>⭐ Recommended</span>
                <div>
                  <h3 style={{ color: "#ffffff", fontWeight: "800" }}>Corporate Website</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2.2rem" }}>
                    ₹34,999 <span style={{ color: "#cbd5e1", fontSize: "1rem" }}>/ One-time</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#e2e8f0" }}>
                    <li>Up to 10 custom pages</li>
                    <li>Custom admin integration</li>
                    <li>SSL &amp; database setup</li>
                    <li>Core Web Vitals tuning</li>
                    <li>60 days maintenance support</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#FD6A02", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>E-Commerce Suite</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>₹59,999+</div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Complete cart &amp; checkout</li>
                    <li>Razorpay/Stripe integration</li>
                    <li>Product catalog dashboard</li>
                    <li>Product schema markup</li>
                    <li>90 days premium support</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Optimization Section (GEO) - Dual Brand Color Redesign */}
      <section
        className="service-gradient-black-section"
        style={{
          background: "linear-gradient(135deg, #042544 0%, #021224 100%)",
          padding: "85px 20px",
          position: "relative",
          overflow: "hidden",
          borderTop: "3px solid #FD6A02",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "2px solid #FD6A02",
              borderRadius: "24px",
              padding: "50px 40px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#FD6A02",
                  color: "#ffffff",
                  padding: "8px 24px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  boxShadow: "0 4px 15px rgba(253, 106, 2, 0.4)",
                }}
              >
                AI Search Optimization (GEO)
              </span>
              <h2
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif', margin: "0 0 15px" }}
              >
                Quick Answers: Web Development
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you&apos;re looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear breakdown of our web development services.
              </p>
            </div>

            <div
              className="geo-questions-grid"
            >
              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is Website Development?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Website development is the practice of coding, scripting, and configuring web apps using frontend (React, Next.js) and backend (Node, PHP, MySQL) frameworks to create reliable digital platforms.
                </p>
              </div>

              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Why is Custom Web Development important?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Custom development removes redundant bloat, boosts loading speeds, secures transactions, and scales custom database logic seamlessly for business growth.
                </p>
              </div>

              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "700", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How does MaaJanki Web Tech build websites?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  We follow a 6-step process: Consultation, Wireframing, Custom UI/UX Design, Clean Coding, SEO Tuning, and SSL Hosting Deployment.
                </p>
              </div>

              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Who needs custom web development?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Startups, enterprises, eCommerce portals, and SaaS brands needing high performance, fast search indexing, and custom backend APIs need professional web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Website Development</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What web development technologies do you specialize in?",
              answer:
                "We specialize in both frontend and backend technologies. Our core stack includes React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), Node.js, Express.js, PHP, Laravel, WordPress, Shopify, MongoDB, and MySQL.",
            },
            {
              id: "faq2",
              question: "Will my website be mobile-friendly and responsive?",
              answer:
                "Yes. Every website we build is 100% responsive. We test across multiple physical screen sizes (smartphones, iPads, notebooks, iMacs) to ensure your layouts scale cleanly.",
            },
            {
              id: "faq3",
              question: "Do you integrate payment gateways and third-party APIs?",
              answer:
                "Yes, we integrate local and global payment solutions like Razorpay, PayU, Stripe, and PayPal, along with custom CRM platforms, shipping tools, and WhatsApp Business API modules.",
            },
            {
              id: "faq4",
              question: "How do you optimize website speed?",
              answer:
                "We optimize site performance by compressing image assets, implementing clean coding structures, minifying scripts, configuring browser caching, and setting up Content Delivery Networks (CDNs).",
            },
            {
              id: "faq5",
              question: "Do you offer web hosting and domain services?",
              answer:
                "We assist with domain setup and configure reliable cloud servers (AWS, DigitalOcean, Hostinger, Vercel). We ensure your hosting includes SSL setup and security protection.",
            },
            {
              id: "faq6",
              question: "Can you redesign my old, slow website?",
              answer:
                "Yes. We analyze your current site's performance and redesign it with clean, modern code. This improves user experience, page speed, mobile compatibility, and SEO rankings.",
            },
            {
              id: "faq7",
              question: "Do you provide search engine optimization (SEO)?",
              answer:
                "Yes. Every website we develop includes on-page SEO setup, technical optimization, sitemaps, robots.txt, schema markup, and metadata configurations.",
            },
            {
              id: "faq8",
              question: "What is your website development process?",
              answer:
                "Our process is structured in 6 stages: Consultation, Wireframing, Visual UI/UX Design, Clean Coding, Speed & SEO Tuning, and hosting launch with SSL security setup.",
            },
            {
              id: "faq9",
              question: "How long is the warranty and support period?",
              answer:
                "We provide a free warranty period of 30 to 90 days after launching your site. This covers troubleshooting support, software updates, and minor content edits.",
            },
            {
              id: "faq10",
              question: "How do we start a web project with MaaJanki Web Tech?",
              answer:
                "You can click 'Get a Free Consultation' or contact us at info@maajankiwebtech.com. We will analyze your requirements and provide a custom proposal.",
            },
            {
              id: "faq11",
              question: "Do you write content for the website?",
              answer:
                "Yes, we have professional content writers who create SEO-friendly, informative web copy aligned with your brand and target keywords.",
            },
            {
              id: "faq12",
              question: "Is there a monthly maintenance fee?",
              answer:
                "No. We charge a one-time fee for development. Ongoing support plans are available but completely optional.",
            },
            {
              id: "faq13",
              question: "Can I upgrade my site in the future?",
              answer:
                "Yes. We write clean, modular code, making it easy to add new features, pages, or database systems as your business grows.",
            },
            {
              id: "faq14",
              question: "Do you set up SSL certificates?",
              answer:
                "Yes. We configure SSL certificates for every website to ensure data security and maintain user trust.",
            },
            {
              id: "faq15",
              question: "How do you handle website security?",
              answer:
                "We configure security headers, secure database connections, and set up firewalls to protect your site against malicious attacks.",
            },
          ].map((faq, index) => (
            <div className="faq-item" key={faq.id}>
              <input type="checkbox" id={faq.id} className="faq-toggle" />
              <label htmlFor={faq.id} className="faq-question">
                <span className="faq-number">{index + 1}</span>
                <span className="faq-question-text">{faq.question}</span>
                <svg
                  className="faq-arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </label>
              <div className="faq-content">
                <div className="faq-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Faq Section End */}
    </>
  );
};

export default WebDevelopment;
