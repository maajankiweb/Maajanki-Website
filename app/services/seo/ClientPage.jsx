'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/Home.css";
import "@/app/styles/SEO.css";
import "@/app/styles/Branding.css";

const SEO = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* SEO Optimization for Service Page */}
      {
/* JSON-LD Schema */
}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "SEO Services - MaaJanki Web Tech",
          "description": "Professional search engine optimization services including keyword research, on-page technical fixes, link building, and GEO solutions to drive organic rankings.",
          "url": "https://maajankiwebtech.com/services/seo",
          "image": "https://maajankiwebtech.com/assets/og-image-seo.jpg",
          "priceRange": "$",
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "State", "name": "Bihar" }
          ],
          "provider": {
            "@type": "Organization",
            "@id": "https://maajankiwebtech.com/#organization",
            "name": "MaaJanki Web Tech",
            "url": "https://maajankiwebtech.com",
            "logo": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
            "founder": {
              "@type": "Person",
              "name": "Ashish Kumar",
              "sameAs": [
                "https://www.linkedin.com/in/ashishkumarji/",
                "https://www.wikidata.org/wiki/Q115783355"
              ]
            }
          }
        }
        ` }} />


      {/* Banner Section */}
      <section className="custom-banner">
        <Image priority src="/images/pages/main-services-pages/seo-banner-image-Maajanki.webp" alt="SEO Services to Rank Higher on Google by MaaJanki Web Tech" title="Professional SEO Services for Higher Google Rankings – MaaJanki Web Tech" data-no-retina="" width="1280" height="720"/>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              SEO Services in Patna, Bihar &amp; India | Local SEO &amp; AI Engine Optimization (AEO) Agency
            </h1>
            <div className="aeo-definition-box">
              <p>
                Search Engine Optimization (SEO) is the technical and creative
                process of aligning website parameters with search algorithms.
                By optimizing user intent relevancy, fixing code performance
                issues (Core Web Vitals), and building trust metrics
                (high-authority backlinks), SEO improves website placement in
                SERP organic lists and Generative AI engines (ChatGPT Search,
                Perplexity).
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Contact Us
              </Link>
              <Link href="/services" className="btn2">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Page Introduction Section - Redesigned Modern Layout */}
      <section
        className="seo-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="seo-intro-card"
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
                Organic Growth &amp; SEO Strategy
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
                Top-Rated <span style={{ color: "#FD6A02" }}>SEO Services in Bihar, India</span> – Maximize Your Visibility on Traditional and Generative AI Search Platforms
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
                  Are you looking for the <strong style={{ color: "#ffffff" }}>best SEO agency in Bihar, India</strong> to elevate your digital presence and outrank your market competitors? MaaJanki Web Tech provides strategic, white-hat search engine optimization services for brands in Patna, Delhi, and globally.
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
                  We optimize your website for both search engine algorithms and modern AI engines (ChatGPT, Perplexity, Gemini) using technical audits, structured data, Core Web Vitals optimization, and high-authority link building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 to 12 Sections */}
      <section className="services-overview-section seo-overview-section" style={{ display: "block", background: "none", padding: 0 }}
      >
        {/* Section 1 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/How-SEO-Help-To-Grow-Business-image-maajanki.webp"
                      alt="SEO Agency optimization framework by MaaJanki Web Tech"
                      title="SEO Services for Brand Authority"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  1. Strategic Keyword Research & Mapping
                </h2>
                <h3 className="sub-heading">
                  Discovering Commercial and Informational Query Intent Pathways
                </h3>
                <p className="content-text">
                  <strong>Strategic Keyword Research & Mapping</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/seo-on-page-factor-image-maajanki.webp"
                      alt="On-page SEO factors for search rankings"
                      title="On-Page Content Optimization"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  2. Advanced On-Page SEO Optimization
                </h2>
                <h3 className="sub-heading">
                  Structuring Web Code and Copy to Satisfy Core Search Algorithms
                </h3>
                <p className="content-text">
                  <strong>Advanced On-Page SEO Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/Technical-Seo-factor-image-maajanki.webp"
                      alt="Technical SEO site speed optimization"
                      title="Technical SEO Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  3. High-Performance Technical SEO Auditing
                </h2>
                <h3 className="sub-heading">
                  Resolving Crawling, Indexing, and Core Web Vitals Issues
                </h3>
                <p className="content-text">
                  <strong>High-Performance Technical SEO Auditing</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/seo-off-page-factor-image-maajanki.webp"
                      alt="Off-page SEO link building for brand authority"
                      title="Link Building Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  4. Ethical White-Hat Link Building
                </h2>
                <h3 className="sub-heading">
                  Acquiring High-Authority Backlinks to Build Domain Authority
                </h3>
                <p className="content-text">
                  <strong>Ethical White-Hat Link Building</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/local-seo-gmb-maajanki.webp"
                      alt="Local SEO Google Business Profile optimization"
                      title="Local SEO Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  5. Local SEO & Google Business Profile Optimization
                </h2>
                <h3 className="sub-heading">
                  Dominating 'Near Me' Searches and Local Google Map Packs
                </h3>
                <p className="content-text">
                  <strong>Local SEO & Google Business Profile Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/sxo-search-ux-maajanki.webp"
                      alt="Search Experience Optimization by MaaJanki Web Tech"
                      title="SXO UX Optimization"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  6. Search Experience Optimization (SXO)
                </h2>
                <h3 className="sub-heading">
                  Aligning Technical SEO with Core User Experience Goals
                </h3>
                <p className="content-text">
                  <strong>Search Experience Optimization (SXO)</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/geo-ai-citation-maajanki.webp"
                      alt="GEO and AI citation optimization by MaaJanki Web Tech"
                      title="GEO AI Search Optimization"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  7. Generative Engine Optimization (GEO) & AI Search Optimization
                </h2>
                <h3 className="sub-heading">
                  Optimizing Your Content to Be Cited by AI Search Bots
                </h3>
                <p className="content-text">
                  <strong>Generative Engine Optimization (GEO) & AI Search Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)",
            }}
        >
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Seo/competitor-gap-roi-maajanki.webp"
                      alt="Competitor SEO gap analysis and ROI strategy"
                      title="Competitor Analysis & ROI"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">8. Organic Local & International SEO</h2>
                <h3 className="seo-service-heading">Keyword Research & Strategy</h3>
                <p className="content-text">
                  <strong>How We Work</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized search engine optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>comprehensive SEO strategies that highlight your business visibility and domain authority.</strong> By leveraging on-page tag optimization and technical site auditing, we ensure your search engine optimization aligns with the algorithms and search behavior of Google search crawlers and AI search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your highly-ranked web pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
      <section className="seo-service-section">
        <h2 className="seo-service-title">
          Our End-to-End Search Engine Optimization Solutions
        </h2>
        <p className="seo-service-subtitle">
          We combine data-driven technical optimization with creative content
          marketing to deliver sustainable organic search growth.
        </p>

        <div className="seo-service-grid">
          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="seo-service-heading">Keyword Research & Strategy</h3>
            <p>
              Discover high-intent, conversion-focused keywords aligned with
              your business goals and search volume.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="seo-service-heading">On-Page SEO Optimization</h3>
            <p>
              Optimize title tags, meta descriptions, heading structures, and
              content keywords page-by-page.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-link"></i>
            </div>
            <h3 className="seo-service-heading">
              Off-Page SEO & Link Building
            </h3>
            <p>
              Build domain authority and credibility with white-hat backlinks
              from trusted websites.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="seo-service-heading">Technical SEO Audits</h3>
            <p>
              Optimize crawlability, indexation, sitemaps, redirects, and Core
              Web Vitals parameters.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <h3 className="seo-service-heading">High-Quality Link Building</h3>
            <p>
              Earn editorial mentions and contextual backlinks through content
              outreach campaigns.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="seo-service-heading">Local SEO Services</h3>
            <p>
              Optimize Google Maps listings, citation directories, and localized
              keyword pages.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3 className="seo-service-heading">E-Commerce SEO</h3>
            <p>
              Optimize product schemas, category pages, and catalogs to increase
              online sales.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="seo-service-heading">Competitor SEO Analysis</h3>
            <p>
              Analyze competitors' search positions, backlinks, and content to
              find growth opportunities.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3 className="seo-service-heading">SEO Reporting & Analytics</h3>
            <p>
              Receive detailed monthly performance reports tracking keyword
              positions, traffic, and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="seo-tools-section">
        <div className="tools-heading-section">
          <h2 className="tools-heading-title">
            SEO Tools We Use for Data-Driven Optimization
          </h2>
        </div>

        <div className="seo-section-grid">
          {[
            { src: "/images/Tools icon/seo/semrush.png", label: "SEMrush" },
            { src: "/images/Tools icon/seo/ahrefs.png", label: "Ahrefs" },
            {
              src: "/images/icons/google-ads.png",
              label: "Google Keyword Planner",
            },
            {
              src: "/images/Tools icon/seo/ubbersuggest.png",
              label: "Ubersuggest",
            },
            {
              src: "/images/Tools icon/seo/moz keyword explorer.png",
              label: "Moz Explorer",
            },
            { src: "/images/Tools icon/seo/yoast seo.jpg", label: "Yoast SEO" },
            {
              src: "/images/icons/code.png",
              label: "Rank Math",
            },
            {
              src: "/images/icons/surfing.png",
              label: "Surfer SEO",
            },
            {
              src: "/images/icons/speed.png",
              label: "SEO Minion",
            },
            {
              src: "/images/icons/search--v1.png",
              label: "Google Search Console",
            },
            {
              src: "/images/icons/combo-chart--v1.png",
              label: "GTmetrix",
            },
            {
              src: "/images/icons/lighthouse.png",
              label: "Lighthouse",
            },
            {
              src: "/images/icons/grammar.png",
              label: "Grammarly",
            },
            {
              src: "/images/icons/google-analytics.png",
              label: "Google Analytics 4",
            },
            {
              src: "/images/icons/worldwide-location.png",
              label: "BrightLocal",
            },
          ].map((tool, index) => (
            <div key={index} className="seo-card-box">
              <Image
                className="seo-card-icon"
                src={tool.src}
                alt={`${tool.label} SEO tool`}
                loading="lazy"
               width={150} height={50} />
              <span className="seo-card-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure Section - Matched Reference UI Design */}
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
              Download Our Custom Search Engine Optimization Strategy
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to grow your organic visibility. We use ethical, white-hat strategies to build authority and drive long-term business results.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Download Our SEO Campaign Outline
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Learn about our keyword workflows, on-page optimization checklists, and local citation strategies in our SEO brochure.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> On-Page and Technical Optimization Guide
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> High-Quality White-Hat Link Building
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Google Business Profile Setup &amp; Tracking
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download SEO Brochure
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
                        const formData = new FormData(form);
                        fetch("/api/leads", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            name: formData.get("name") || "",
                            email: formData.get("email") || "",
                            phone: formData.get("phone") || "",
                            service: "Brochure Download - SEO",
                            source: "brochure-modal",
                            url: typeof window !== "undefined" ? window.location.href : "",
                          }),
                        }).catch(() => {});

                        fetch(form.action, {
                          method: "POST",
                          body: formData,
                          headers: { Accept: "application/json" },
                        }).catch(() => {});

                        alert("Thank you! Your brochure is downloading.");
                        setIsPopupOpen(false);
                        window.open(
                          "/brochures/MaaJanki-Web-Tech-Branding-Brochure.pdf",
                          "_blank"
                        );
                      }}
                    >
                      <h3 className="brochure-title" style={{ color: "#ffffff" }}>
                        Download SEO Guide
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

          {/* Right Column: 2-Column Grid of 8 Visual Service Cards */}
          <div className="graphic-right" style={{ flex: "1 1 550px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {[
                { icon: "fas fa-search", title: "Keyword Optimization" },
                { icon: "fas fa-chart-line", title: "SEO Performance Tracking" },
                { icon: "fas fa-map-marker-alt", title: "Local & Global SEO" },
                { icon: "fas fa-pen-nib", title: "Content Optimization" },
                { icon: "fas fa-link", title: "Link Building" },
                { icon: "fas fa-cogs", title: "Technical SEO" },
                { icon: "fas fa-bullhorn", title: "Brand Visibility Boost" },
                { icon: "fas fa-rocket", title: "Rank Improvement Strategy" },
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

      {/* Process Workflow Section */}
      <section className="jobready-workflow">
        <h2 className="jobready-heading-small">How We Work</h2>
        <h2 className="jobready-heading-main">Our Proven SEO Optimization Process Flow</h2>
        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-search"></i></div>
            <p>1. Website Audit</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-lightbulb"></i></div>
            <p>2. Keyword Selection</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-edit"></i></div>
            <p>3. On-Page SEO</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-link"></i></div>
            <p>4. Link Building</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-chart-line"></i></div>
            <p>5. Rank Tracking</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-rocket"></i></div>
            <p>6. Reporting</p>
          </div>
        </div>
      </section>


      {/* Blog & Educational Section */}
      <section
        className="service-gradient-black-section"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 100%)",
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
            <div className="row justify-content-center">
              <div className="col-lg-10" style={{ color: "#ffffff" }}>
                <h2
                  style={{
                    color: "#ffffff",
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: "800",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    marginBottom: "16px",
                  }}
                >
                  Why Long-Term Search Engine Optimization Is a Critical Business Investment
                </h2>
                <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8", marginBottom: "30px" }}>
                  Organic search is one of the most cost-effective ways to drive sustainable business growth. Unlike paid advertising, which stops generating traffic the moment the budget ends, search engine optimization offers compounding value. Over time, high organic rankings build brand trust and deliver a steady stream of leads without increasing your advertising spend.
                </p>

                <h3
                  style={{
                    color: "#FD6A02",
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: "700",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                    marginBottom: "16px",
                  }}
                >
                  Creating User-Centric Content Aligned with Modern Search Standards
                </h3>
                <p style={{ color: "#e2e8f0", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                  Modern search algorithms prioritize helpful, user-focused content over keyword stuffing. To secure top rankings, websites must deliver genuine value, answer user queries comprehensively, and load quickly.
                </p>
              </div>
            </div>
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
                Transparent Monthly SEO Packages
              </h2>
              <p style={{ color: "#e2e8f0", fontSize: "16px" }}>
                Select a search engine optimization tier structured for your growth stage. No hidden setup fees.
              </p>
            </div>

            <div className="branding-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Starter SEO Plan</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>
                    ₹9,999 <span style={{ color: "#64748b", fontSize: "1rem" }}>/ Month</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Up to 15 Target Keywords</li>
                    <li>Core On-Page Tag Optimizations</li>
                    <li>Local Directory Citations</li>
                    <li>5 High-Quality Backlinks monthly</li>
                    <li>Google Analytics Position Reports</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card featured" style={{ background: "#042544", border: "3px solid #FD6A02", borderRadius: "20px", padding: "35px 25px", position: "relative", color: "#ffffff", boxShadow: "0 15px 35px rgba(253, 106, 2, 0.4)" }}>
                <span className="branding-pricing-badge" style={{ background: "#FD6A02", color: "#ffffff", fontWeight: "800" }}>⭐ Recommended</span>
                <div>
                  <h3 style={{ color: "#ffffff", fontWeight: "800" }}>Organic Growth Plan</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2.2rem" }}>
                    ₹19,999 <span style={{ color: "#cbd5e1", fontSize: "1rem" }}>/ Month</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#e2e8f0" }}>
                    <li>Up to 40 Target Keywords</li>
                    <li>Deep Technical SEO Audit &amp; Fixes</li>
                    <li>Competitor Gap Tracking</li>
                    <li>15 High-Authority Backlinks monthly</li>
                    <li>Core Web Vitals Speed Analysis</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#FD6A02", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Enterprise SEO</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>Custom Pricing</div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Custom Keyword Scope</li>
                    <li>Digital PR &amp; Outreach</li>
                    <li>Generative AI Search Engine Prep</li>
                    <li>Bi-weekly Performance Consulting</li>
                    <li>Comprehensive Content Audit</li>
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

      {/* AI Search Optimization Section (GEO Specific Content) - Dual Brand Color Redesign */}
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
                Quick Answers: Search Engine Optimization
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear breakdown of our SEO services.
              </p>
            </div>

            <div className="geo-questions-grid">
              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is Search Engine Optimization (SEO)?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  SEO improves website performance and content relevance, ensuring pages rank higher organically in search engines.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Why are backlinks important for SEO?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Backlinks serve as trust signals from external sites, signaling search engine algorithms that your content is authoritative.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How does local SEO benefit regional brands?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Local SEO optimizes location-based citations and Google Maps profiles, driving local search traffic and customer inquiries.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is Generative Engine Optimization (GEO)?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  GEO structures site data and direct answers so AI engines like ChatGPT and Gemini can read, process, and cite your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About SEO Services</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What is search engine optimization (SEO)?",
              answer:
                "SEO is the process of optimizing a website to increase its visibility in organic search engine results for relevant keywords.",
            },
            {
              id: "faq2",
              question: "What is the difference between SEO and SEM?",
              answer:
                "SEO focuses on earning organic rankings, while SEM (Search Engine Marketing) involves buying traffic through paid search ads.",
            },
            {
              id: "faq3",
              question: "How do you perform keyword research?",
              answer:
                "We analyze search queries using SEMrush and Ahrefs to identify target keywords with high search volume and commercial intent.",
            },
            {
              id: "faq4",
              question: "What is on-page search optimization?",
              answer:
                "On-page SEO involves optimizing page-level elements like title tags, heading structures, internal links, and content quality.",
            },
            {
              id: "faq5",
              question: "What is off-page SEO optimization?",
              answer:
                "Off-page SEO focuses on building website credibility and domain authority through high-quality backlinks and brand citations.",
            },
            {
              id: "faq6",
              question: "What is technical search engine optimization?",
              answer:
                "Technical SEO involves optimizing site architecture, indexing, sitemaps, robots.txt, and page speed to improve crawling.",
            },
            {
              id: "faq7",
              question: "How do Core Web Vitals impact search rankings?",
              answer:
                "Google uses Core Web Vitals (speed, interactivity, visual stability) to evaluate user experience and rank pages accordingly.",
            },
            {
              id: "faq8",
              question: "Why does my local business need local SEO?",
              answer:
                "Local SEO helps your business rank in Google Maps pack listings and local search results, driving regional customer visits.",
            },
            {
              id: "faq9",
              question: "How do you build high-quality backlinks?",
              answer:
                "We secure natural links through content marketing campaigns, digital PR outreach, local directories, and guest blogging.",
            },
            {
              id: "faq10",
              question: "What SEO reports do you provide monthly?",
              answer:
                "Our monthly reports track target keyword rankings, organic traffic growth, referral traffic, and search console metrics.",
            },
            {
              id: "faq11",
              question: "Do you guarantee first-page organic rankings?",
              answer:
                "No agency can guarantee specific organic search rankings, but our ethical white-hat practices consistently improve positions.",
            },
            {
              id: "faq12",
              question: "Is schema markup required for search visibility?",
              answer:
                "Schema markup is not mandatory but highly recommended, as it helps search engines display rich snippets in search results.",
            },
            {
              id: "faq13",
              question: "Can old domain authority help brand new sites?",
              answer:
                "Earning backlinks from established, authoritative domains tells search engine algorithms that your content is trustworthy.",
            },
            {
              id: "faq14",
              question: "How do you identify crawl errors on my site?",
              answer:
                "We crawl your website using tools like Screaming Frog and review diagnostic alerts in Google Search Console.",
            },
            {
              id: "faq15",
              question: "What is Generative Engine Optimization (GEO)?",
              answer:
                "GEO optimizes content for conversational AI engines, ensuring search bots can easily extract and cite your data.",
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

export default SEO;
