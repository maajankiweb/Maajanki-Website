'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/WebDevelopment.css";
import "@/app/styles/Home.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const WebDevelopment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* SEO & Generative Engine Optimization Metadata */}
      {
/* JSON-LD Schema */
}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
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
        <Image priority src="/images/pages/main-services-pages/web-development-banner-image-Maajanki-Web-Tech.webp" alt="Website Development Services by MaaJanki Web Tech – Responsive, SEO-Friendly Business Websites" title="Professional Website Development Services in India | MaaJanki Web Tech" data-no-retina="" width="1280" height="720"/>

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

      {/* Page Introduction Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="alt-font inner-heading">
                Top-Rated{" "}
                <strong>Website Development Company in Bihar, India</strong> –
                Delivering Fast, Custom, and SEO-Optimized Sites
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you looking for the{" "}
                <strong>
                  best website development company in Bihar, India
                </strong>
                ? MaaJanki Web Tech is your trusted technology partner, crafting
                high-performance, responsive websites for startups and corporate
                clients across Bagaha, Patna, Delhi, Bangalore, and globally.
                Our team combines custom UI/UX design, clean programming
                standards, and advanced search engine optimization to create
                digital experiences that rank #1 on search engines and attract
                direct answers from AI search assistants like ChatGPT, Gemini,
                and Perplexity.
              </p>

              <p>
                At MaaJanki Web Tech, we believe your website is the foundation
                of your digital sales funnel. That is why we avoid generic
                templates and build custom web solutions from scratch. Whether
                you need a corporate business website, an e-commerce platform
                (Shopify or WordPress), a high-converting landing page, or a
                scalable full-stack web application (MERN stack), we ensure your
                platform is built for speed, security, and organic business
                growth.
              </p>
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
            {
              src: "/images/icons/github.png",
              label: "GitHub",
            },
            {
              src: "/images/icons/vercel.png",
              label: "Vercel",
            },
            {
              src: "/images/icons/netlify.png",
              label: "Netlify",
            },
            {
              src: "/images/icons/visual-studio-code-2019.png",
              label: "VS Code",
            },
            {
              src: "/images/icons/figma.png",
              label: "Figma",
            },
          ].map((tool, i) => (
            <div className="tool-card" key={i}>
              <Image
                src={tool.src}
                alt={`${tool.label} technology logo`}
                title={tool.label}
               width={150} height={50} />
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our Complete Web Development Guide
            </h2>
            <p className="graphic-subtext">
              Build a reliable, high-performance web presence with MaaJanki Web
              Tech. From planning to execution and maintenance, we offer
              end-to-end development solutions that convert visitors into
              customers.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Get Our Brochure Delivered to Your Inbox
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our coding workflows, custom design frameworks, and
                transparent support pricing in our development brochure.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Clean, Documented Source
                Code
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Mobile-Responsive Layout
                Structures
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> 30 to 90 Days
                Post-Launch Support
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
              >
                ⬇️ Download Web Development Brochure
              </button>

              {isPopupOpen && (
                <div
                  className="brochure-popup-overlay"
                  onClick={closeBrochurePopup}
                >
                  <div
                    className="brochure-popup"
                    onClick={(e) => e.stopPropagation()}
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
                        })
                          .then((response) => {
                            if (response.ok) {
                              window.open(
                                "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
                                "_blank",
                              );
                              form.reset();
                              closeBrochurePopup();
                            } else {
                              alert("Something went wrong. Please try again.");
                            }
                          })
                          .catch(() => {
                            alert("Network error. Please try again later.");
                          });
                      }}
                    >
                      <h3 className="brochure-title">Request Web Brochure</h3>
                      <label htmlFor="email">Business Email:</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                      />
                      <input
                        type="hidden"
                        name="brochure_request"
                        value="website-development"
                      />
                      <button type="submit" className="brochure-submit-btn">
                        Send My Brochure
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="graphic-right">
            <div className="graphic-service-grid">
              {[
                { icon: "fas fa-desktop", title: "Responsive Web Layouts" },
                { icon: "fas fa-code", title: "Custom Code Structures" },
                {
                  icon: "fas fa-shopping-cart",
                  title: "E-Commerce Optimization",
                },
                { icon: "fas fa-tachometer-alt", title: "Speed Optimization" },
                { icon: "fas fa-shield-alt", title: "SSL Security Setup" },
                { icon: "fas fa-mobile-alt", title: "Mobile Usability Tuning" },
                { icon: "fas fa-database", title: "Database Architecture" },
                {
                  icon: "fas fa-chart-line",
                  title: "SEO-Ready Implementation",
                },
              ].map((service, index) => (
                <div className="graphic-service-card" key={index}>
                  <div className="graphic-service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="graphic-service-title">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Cards Section */}
      <section
        className="tech-section"
        style={{ backgroundColor: "#042544", padding: "80px 20px" }}
      >
        <div className="tech-inner">
          <div className="tech-card frontend-section">
            <h2>Frontend Technologies</h2>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js Framework</li>
              <li>Next.js (SSR / SSG)</li>
              <li>Tailwind CSS / Bootstrap</li>
            </ul>
          </div>

          <div className="tech-card backend-section">
            <h2>Backend Frameworks</h2>
            <ul>
              <li>Node.js (Runtime)</li>
              <li>Express.js (Framework)</li>
              <li>PHP (Laravel System)</li>
              <li>Python (Django Engine)</li>
              <li>RESTful API Endpoints</li>
            </ul>
          </div>

          <div className="tech-card database-section">
            <h2>Database Systems</h2>
            <ul>
              <li>MongoDB (NoSQL)</li>
              <li>MySQL Database</li>
              <li>PostgreSQL System</li>
              <li>Firebase Firestore</li>
            </ul>
          </div>

          <div className="tech-card versioncontrol-section">
            <h2>Version & Dev Tools</h2>
            <ul>
              <li>Git Version Control</li>
              <li>GitHub Repositories</li>
              <li>Vercel Deployments</li>
              <li>Netlify Hosting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance Services Section */}
      <section className="maintenance-section">
        <div className="maintenance-container">
          <div className="maintenance-header">
            <h2 className="maintenance-title">
              Website Support & Maintenance Services
            </h2>
            <p className="maintenance-subtitle">
              We provide professional support to ensure your website remains
              fast, secure, updated, and online 24/7.
            </p>
          </div>

          <div className="maintenance-grid">
            {[
              {
                icon: "fas fa-shield-alt",
                title: "Security Monitoring",
                desc: "Regular malware scans, firewall setups, and SSL updates to keep your business website secure.",
              },
              {
                icon: "fas fa-sync-alt",
                title: "Plugin & Core Updates",
                desc: "Up-to-date installations of CMS versions, plugins, and dependencies to prevent compatibility issues.",
              },
              {
                icon: "fas fa-database",
                title: "Automated Data Backups",
                desc: "Secure daily and weekly database backups with reliable recovery support to safeguard your assets.",
              },
              {
                icon: "fas fa-tachometer-alt",
                title: "Speed Maintenance",
                desc: "Continuous performance audits and database cleaning to preserve fast page loading speeds.",
              },
              {
                icon: "fas fa-search",
                title: "Technical SEO Checks",
                desc: "Fixing broken links, resolving crawl errors, and updating sitemaps for search visibility.",
              },
              {
                icon: "fas fa-headset",
                title: "24/7 Priority Support",
                desc: "Access to our development team for fast bug resolutions and technical support.",
              },
              {
                icon: "fas fa-edit",
                title: "Content & Graphic Edits",
                desc: "Fast revisions for textual copy, image banners, portfolios, and product catalog details.",
              },
              {
                icon: "fas fa-clock",
                title: "Uptime Audits",
                desc: "Real-time monitoring of server response rates to prevent unexpected hosting outages.",
              },
            ].map((service, index) => (
              <div className="maintenance-card" key={index}>
                <div className="maintenance-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="maintenance-content">
                  <h3 className="maintenance-card-title">{service.title}</h3>
                  <p className="maintenance-card-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Process Section */}
      <section className="mj-wp-process-section py-20 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="sec_title text-4xl md:text-5xl font-bold mb-12">
            Our Website Development Process Flow
          </h2>

          <div className="process_slider overflow-hidden">
            <div className="process_wrap flex flex-wrap justify-center gap-8">
              {[
                {
                  title: "1. Strategy Consultation",
                  desc: "We discuss your business objectives, target keywords, and core features to define the website scope.",
                },
                {
                  title: "2. Wireframing & Planning",
                  desc: "We build wireframes mapping the content hierarchy and layout structure for responsive design.",
                },
                {
                  title: "3. UI/UX Custom Design",
                  desc: "We create user interface mockups focused on branding and customer conversion pathways.",
                },
                {
                  title: "4. Clean-Code Engineering",
                  desc: "We write clean code utilizing React, Next.js, or WordPress for fast loading and scalability.",
                },
                {
                  title: "5. Speed & SEO Optimization",
                  desc: "We integrate structured JSON-LD data and optimize speed for Google's Core Web Vitals.",
                },
                {
                  title: "6. Launch & Uptime Setup",
                  desc: "We verify hosting, deploy security SSL protocols, and launch your site with monitoring.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="p_box bg-slate-900 p-6 rounded-xl shadow-md w-64 hover:scale-105 transition-transform duration-300"
                >
                  <div className="circle bg-purple-700 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                    <span className="box_head font-semibold text-sm text-center leading-tight">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Educational Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Why Custom Web Design Is Essential for Business Scalability
              </h2>
              <p>
                A site built by a professional web development company is a
                primary business asset. While template builders offer cheap,
                short-term setups, they suffer from bloated code structures and
                slow loading speeds. Custom coding guarantees that your site
                loads instantly, responds on all screens, and ranks high on
                Google. It gives you the flexibility to add custom databases,
                user panels, and scale as your brand grows.
              </p>

              <h3 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Understanding the Impact of Page Speed on Customer Conversions
              </h3>
              <p>
                Web traffic is lost when a page takes longer than three seconds
                to load. Speed optimization is critical for maintaining user
                engagement. By reducing HTTP requests, optimizing databases, and
                compressing images, we ensure your site is fast. This improves
                user satisfaction and raises your search engine rankings,
                helping your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section – Redesigned */}
      <section className="wd-pricing-section">
        <div className="wd-pricing-inner">
          <div className="wd-pricing-header">
            <span className="wd-pricing-badge">💰 Investment Plans</span>
            <h2 className="wd-pricing-title">Transparent Web Development Pricing</h2>
            <p className="wd-pricing-subtitle">
              Choose a web development plan engineered for business growth. Complete source code ownership, zero monthly platform fees, and full post-launch support included.
            </p>
          </div>

          <div className="wd-pricing-grid">
            {/* Starter */}
            <div className="wd-price-card">
              <div className="wd-price-card-top">
                <div className="wd-price-icon">🚀</div>
                <h3 className="wd-price-name">Landing Page</h3>
                <p className="wd-price-desc">Perfect for startups and lead-generation campaigns needing a high-impact single page.</p>
                <div className="wd-price-amount">
                  <span className="wd-currency">₹</span>
                  <span className="wd-price-num">14,999</span>
                  <span className="wd-price-period">/ One-time</span>
                </div>
              </div>
              <ul className="wd-price-features">
                <li><span className="wd-check">✓</span> Single-page custom design layout</li>
                <li><span className="wd-check">✓</span> Mobile &amp; desktop responsive structure</li>
                <li><span className="wd-check">✓</span> CTA forms &amp; lead capture widgets</li>
                <li><span className="wd-check">✓</span> Schema &amp; on-page SEO setup</li>
                <li><span className="wd-check">✓</span> Google Analytics integration</li>
                <li><span className="wd-check">✓</span> 30 days post-launch support</li>
              </ul>
              <Link href="/contact" className="wd-price-btn wd-price-btn-outline">Get Started</Link>
            </div>

            {/* Popular */}
            <div className="wd-price-card wd-price-card-featured">
              <div className="wd-price-popular-badge">⭐ Most Popular</div>
              <div className="wd-price-card-top">
                <div className="wd-price-icon">🏢</div>
                <h3 className="wd-price-name">Corporate Website</h3>
                <p className="wd-price-desc">Ideal for growing businesses needing a multi-page, fully branded digital presence.</p>
                <div className="wd-price-amount">
                  <span className="wd-currency">₹</span>
                  <span className="wd-price-num">34,999</span>
                  <span className="wd-price-period">/ One-time</span>
                </div>
              </div>
              <ul className="wd-price-features">
                <li><span className="wd-check">✓</span> Up to 10 custom pages (React/WordPress)</li>
                <li><span className="wd-check">✓</span> Custom admin dashboard integration</li>
                <li><span className="wd-check">✓</span> SSL encryption &amp; database configuration</li>
                <li><span className="wd-check">✓</span> Full schema markup &amp; technical SEO</li>
                <li><span className="wd-check">✓</span> Core Web Vitals optimization (PageSpeed 90+)</li>
                <li><span className="wd-check">✓</span> 60 days maintenance &amp; technical support</li>
              </ul>
              <Link href="/contact" className="wd-price-btn wd-price-btn-filled">Get Started</Link>
            </div>

            {/* Enterprise */}
            <div className="wd-price-card">
              <div className="wd-price-card-top">
                <div className="wd-price-icon">🛒</div>
                <h3 className="wd-price-name">E-Commerce Suite</h3>
                <p className="wd-price-desc">Built for brands ready to sell online with a full-featured, conversion-optimized store.</p>
                <div className="wd-price-amount">
                  <span className="wd-currency">₹</span>
                  <span className="wd-price-num">59,999</span>
                  <span className="wd-price-period">+ / One-time</span>
                </div>
              </div>
              <ul className="wd-price-features">
                <li><span className="wd-check">✓</span> Complete cart &amp; checkout pipeline</li>
                <li><span className="wd-check">✓</span> Payment gateways (Razorpay, Stripe, PayPal)</li>
                <li><span className="wd-check">✓</span> Product cataloging &amp; inventory dashboards</li>
                <li><span className="wd-check">✓</span> Product schema &amp; Google Shopping setup</li>
                <li><span className="wd-check">✓</span> SMS &amp; email order alert integrations</li>
                <li><span className="wd-check">✓</span> 90 days premium support &amp; updates</li>
              </ul>
              <Link href="/contact" className="wd-price-btn wd-price-btn-outline">Contact Us</Link>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="wd-pricing-trust">
            <div className="wd-trust-item"><span>🔒</span> 100% Code Ownership</div>
            <div className="wd-trust-item"><span>💳</span> Zero Monthly Fees</div>
            <div className="wd-trust-item"><span>📞</span> Dedicated Support</div>
            <div className="wd-trust-item"><span>⚡</span> Fast Delivery</div>
          </div>

          {/* FAQ objection handler */}
          <div className="wd-pricing-faq">
            <h3 className="wd-pricing-faq-title">Common Client Questions</h3>
            <div className="wd-pricing-faq-grid">
              <div className="wd-pricing-faq-item">
                <h4>Do we get complete ownership of the code?</h4>
                <p>Yes. Once your project is fully completed and successfully launched, we transfer 100% source code ownership and all database access rights to your business team. There are absolutely no hidden licensing fees or recurring platform charges.</p>
              </div>
              <div className="wd-pricing-faq-item">
                <h4>Can we update content and images ourselves?</h4>
                <p>Yes. We integrate intuitive Content Management Systems like WordPress or custom-built admin portals tailored to your workflow. We also provide comprehensive training videos and documentation so your team can edit all content, banners, and images independently.</p>
              </div>
              <div className="wd-pricing-faq-item">
                <h4>What if my project needs are different from these plans?</h4>
                <p>Every business has unique requirements. Contact us for a free custom consultation and we will scope a precise package based on your exact goals, page count, feature requirements, and timeline. Flexible payment options are also available.</p>
              </div>
              <div className="wd-pricing-faq-item">
                <h4>How long does delivery take?</h4>
                <p>Landing pages are delivered within 7–14 business days. Corporate websites typically take 4–6 weeks. E-Commerce platforms take 6–10 weeks depending on product volume and custom feature complexity. All timelines are confirmed before project start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="service-gradient-black-section"
        style={{ backgroundColor: "#080808" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="inner-heading" style={{ fontSize: "2.2rem", textAlign: "center" }}>
                Quick Answers: Web Development
              </h2>
              <p className="mb-8 text-gray-400" style={{ textAlign: "center" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear, simple breakdown of our web development services.
              </p>
            </div>
          </div>
          <div
            className="row justify-content-center text-left"
            style={{ marginTop: "40px" }}
          >
            <div
              className="col-lg-10"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
              }}
            >
              <div
                style={{
                  background: "#111",
                  padding: "25px",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>
                  What is Website Development?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Website development is the practice of coding, scripting,
                  configuring, and deploying websites. It involves frontend
                  design (HTML, CSS, React) and backend server-side databases
                  (Node.js, PHP, MySQL) to build secure and functional web
                  platforms.
                </p>
              </div>
              <div
                style={{
                  background: "#111",
                  padding: "25px",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>
                  Why is Custom Web Development important?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Custom web development is important because it removes
                  redundant code, improves loading speeds, secures user
                  transactions, and allows custom database scaling. It helps you
                  stand out and rank better on Google compared to standard
                  templates.
                </p>
              </div>
              <div
                style={{
                  background: "#111",
                  padding: "25px",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>
                  How does MaaJanki Web Tech build websites?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  MaaJanki Web Tech uses a structured 6-step process:
                  Consultation, Wireframing, Custom UI/UX Design, Clean-Code
                  Development, SEO & Core Vitals Optimization, and Hosting
                  Launch with SSL security protocols.
                </p>
              </div>
              <div
                style={{
                  background: "#111",
                  padding: "25px",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>
                  Who needs custom web development?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Any business, startup, or enterprise wanting a secure, fast,
                  and scalable online presence needs custom web development. It
                  is especially critical for eCommerce stores, SaaS portals, and
                  corporate organizations looking to rank high on search
                  engines.
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
              question:
                "What web development technologies do you specialize in?",
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
              question:
                "Do you integrate payment gateways and third-party APIs?",
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

      
      {/* Local SEO Link Section */}
      {/* <div className="container text-center my-5">
        <p className="text-muted" style={{ fontSize: '14px' }}>
          Serving clients locally in Bettiah and remotely across Bihar, India, and globally.
        </p>
      </div> */}

      <FooterWithPopup />
    </>
  );
};

export default WebDevelopment;
