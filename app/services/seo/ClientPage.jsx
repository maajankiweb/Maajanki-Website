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
          "priceRange": "₹₹",
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
            "url": "https://maajankiwebtech.com/",
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
              SEO Services in Bihar &amp; India — Local SEO, Technical SEO &amp; AEO
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
                  Discovering Commercial, Informational, and Transactional Query Pathways
                </h3>
                <p className="content-text">
                  Our keyword research process begins with <strong>Google Search Console analysis</strong> — extracting existing impressions, clicks, and average positions to identify what your audience already searches for. We group queries by intent: commercial (ready to hire), informational (researching), local (near-me), and transactional (ready to buy).
                </p>
                <p className="content-text">
                  We then build <strong>semantic keyword clusters</strong> — topic groups where your primary page becomes the authoritative answer, with supporting content reinforcing it. This intent-to-page mapping ensures every piece of your website content earns topical authority rather than generic keyword presence. When synchronized with targeted <Link href="/services/performance-marketing" style={{ color: "#FD6A02", fontWeight: 600, textDecoration: "underline" }}>paid search campaigns</Link>, your brand achieves total search dominance across both organic and paid SERP channels.
                </p>
                <span className="content-cta">
                  <strong>Turn search intent into qualified traffic — book your free keyword strategy audit today.</strong>
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
                  Structuring Web Code, Metadata, and Semantic Schema for Search Engines
                </h3>
                <p className="content-text">
                  On-page optimization covers every element within your direct control. Title tags are optimized to 50–60 characters with the primary keyword first. Meta descriptions are written at 150–160 characters with a clear CTA. H1 tags are unique per page and semantically aligned to search intent. H2/H3 headings build topical structure.
                </p>
                <p className="content-text">
                  We fix canonical URLs, remove duplicate content, diversify internal anchor text, optimize image alt text, and inject Schema.org JSON-LD structured data to help both traditional search engines and AI engines (ChatGPT, Perplexity, Gemini) understand and cite your content.
                </p>
                <span className="content-cta">
                  <strong>Every page should earn its traffic — let us audit and optimize yours.</strong>
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
                  Technical SEO ensures Google can efficiently crawl, render, and index every page on your website. Our audit covers <strong>Core Web Vitals compliance</strong> (LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1), crawl budget efficiency, XML sitemap completeness, robots.txt directives, HTTPS integrity, and canonical redirect chains.
                </p>
                <p className="content-text">
                  We identify and fix <strong>crawl errors</strong>, broken internal links, orphaned pages, slow server response times (TTFB &gt; 800ms), render-blocking resources, and uncompressed asset delivery — backed by clean, <Link href="/services/web-development" style={{ color: "#FD6A02", fontWeight: 600, textDecoration: "underline" }}>SEO-friendly web development</Link> to ensure rapid sub-second delivery on all devices.
                </p>
                <p className="content-text">
                  Post-fix, we configure <strong>Google Search Console alerts</strong> and submit updated sitemaps so Google re-crawls corrected pages within days rather than waiting for the next organic discovery cycle.
                </p>
                <span className="content-cta">
                  <strong>Technical issues silently suppress your rankings — find and fix them now.</strong>
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
                  Domain authority is built through the quality and relevance of external websites that link back to yours. Our white-hat link building program focuses exclusively on <strong>editorial mentions</strong> — links earned through genuine content value, not purchased or exchanged — which carry lasting trust signals with Google&apos;s Penguin algorithm.
                </p>
                <p className="content-text">
                  We execute <strong>content-led outreach campaigns</strong>: creating data-driven articles, industry guides, and local business resources that naturally attract links from news portals, industry directories, and government listings. We also build brand citations on Justdial, Sulekha, and IndiaMart to reinforce your local authority across Bihar and India.
                </p>
                <p className="content-text">
                  Every acquired backlink is logged with its domain authority, anchor text, referring page URL, and acquisition date in a <strong>live backlink report</strong> — so you can track the domain authority growth of your website month over month.
                </p>
                <span className="content-cta">
                  <strong>Authority is earned, not bought — build yours with ethical link acquisition.</strong>
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
                  5. Local SEO Services for Bagaha, Bettiah, Patna &amp; Bihar
                </h2>
                <h3 className="sub-heading">
                  Dominating 'Near Me' Searches, Google Maps 3-Pack, and Geo-Targeted Queries
                </h3>
                <p className="content-text">
                  Local SEO connects your business to customers actively searching for services in your city. We optimize your Google Business Profile with accurate NAP, service categories, geotagged photos, and review management. We build local citations on Justdial, Sulekha, and IndiaMart.
                </p>
                <p className="content-text">
                  On your website, we add LocalBusiness and Service schema with correct geo coordinates and areaServed fields targeting Bagaha, Bettiah, Motihari, Muzaffarpur, and Patna. The goal: appear in the Google 3-Pack map results for queries like &ldquo;web designer in Bettiah&rdquo; and &ldquo;SEO agency in Patna&rdquo; — the highest-converting local search positions.
                </p>
                <span className="content-cta">
                  <strong>Rank in the top 3 of Google Maps for &ldquo;near me&rdquo; searches — claim your local market dominance today.</strong>
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
                  Search Experience Optimization (SXO) merges traditional SEO with user experience design — because Google&apos;s ranking algorithms now reward pages that users engage with positively. High dwell time, low bounce rate, and low pogo-sticking are <strong>behavioral signals Google uses to validate relevance</strong> long after a page is indexed.
                </p>
                <p className="content-text">
                  We audit your <strong>page layout, content structure, CTA placement, and mobile usability</strong> to reduce friction at every interaction point. Above-the-fold content is structured to immediately answer the search query that brought the user to the page — satisfying both search intent and user expectation simultaneously.
                </p>
                <p className="content-text">
                  Performance profiling with <strong>Lighthouse, GTmetrix, and Microsoft Clarity heatmaps</strong> identifies exactly where users drop off — enabling precision UX fixes that improve both engagement metrics and Core Web Vitals scores together.
                </p>
                <span className="content-cta">
                  <strong>Better user experience means better rankings — audit your SXO gaps today.</strong>
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
                  7. GEO — Generative Engine Optimization
                </h2>
                <h3 className="sub-heading">
                  Structuring Authoritative Content for LLM Citation Graphs &amp; AI Search Engines
                </h3>
                <p className="content-text">
                  Generative Engine Optimization (GEO) makes your content trustworthy, readable, and citation-worthy for LLM search engines. We maintain clean semantic HTML5 structure; build topical authority through deep, accurate content; link your brand entity to authoritative external references (Wikidata, LinkedIn, government registers); and use structured data to help LLMs extract factual answers about your business.
                </p>
                <p className="content-text">
                  Result: your agency name appears more frequently in AI-generated answers and recommendations across ChatGPT, Perplexity, and Google AI Overviews.
                </p>
                <span className="content-cta">
                  <strong>The future of search belongs to generative AI — ensure your brand is cited, not bypassed.</strong>
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
                      alt="AEO AI Engine Optimization by MaaJanki Web Tech"
                      title="AEO Answer Engine Optimization"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  8. AEO — Answer Engine Optimization
                </h2>
                <h3 className="sub-heading">
                  Optimizing Conversational Search, FAQ Schema, and Recommendation Citations
                </h3>
                <p className="content-text">
                  Answer Engine Optimization (AEO) structures your website content so AI assistants — ChatGPT, Google Gemini, Perplexity, and Claude — cite your business when users ask recommendation questions.
                </p>
                <p className="content-text">
                  AEO requires: FAQPage schema with genuine, concise Q&amp;A pairs; content in direct-answer format (question &rarr; definitive answer &rarr; supporting context); entity optimization (brand, founder, and services linked to Wikidata and LinkedIn); and machine-readable discovery files (/llms.txt, /llms-full.txt). When implemented correctly, your business appears in AI-generated overviews for queries like &ldquo;best digital marketing agency in Bihar&rdquo;.
                </p>
                <span className="content-cta">
                  <strong>Capture zero-click searches and voice queries with precision AI Engine Optimization.</strong>
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
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="seo-service-heading">AI Engine Optimization (AEO)</h3>
            <p>
              Structure content for conversational voice bots, ChatGPT answers, and zero-click featured snippets.
            </p>
          </div>

          <div className="seo-service-box">
            <div className="seo-service-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="seo-service-heading">Generative Engine Optimization (GEO)</h3>
            <p>
              Optimize machine-readable /llms.txt manifests and entity graphs to win citations in Google AI Overviews and Perplexity.
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
                AEO, GEO &amp; Local SEO Insights
              </span>
              <h2
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif', margin: "0 0 15px" }}
              >
                AEO, GEO &amp; Local SEO: Direct Answers for AI &amp; Searchers
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "850px", margin: "0 auto" }}>
                Whether you are optimizing for traditional Google SERPs, Google Maps 3-Pack, or AI search engines like ChatGPT, Perplexity, and Google AI Overviews — here are clear, factual direct answers to core optimization questions.
              </p>
            </div>

            <div className="geo-questions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.35)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is AI Engine Optimization (AEO)?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  AEO is the practice of optimizing content to be selected as the direct, zero-click answer by AI systems, voice assistants (Siri, Alexa, Google Assistant), and conversational bots like ChatGPT and Microsoft Copilot.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.35)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is Generative Engine Optimization (GEO)?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  GEO structures your digital presence through machine-readable manifest files (/llms.txt), entity authority, and high-density factual copy so AI synthesis engines (Google AI Overviews, Perplexity) cite your brand as a source.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.35)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How does Local SEO dominate 'Near Me' searches?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Local SEO pairs Google Business Profile optimization with 100% NAP citation consistency and LocalBusiness Schema markup, allowing local stores and B2B providers in Bihar and India to capture the top 3 Google Maps positions.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.35)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How do Google AI Overviews decide which sites to cite?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Google AI Overviews prioritize pages that display strong E-E-A-T signals, direct factual answers in the opening 100 words, Schema.org verification, and validated entity connections in the Google Knowledge Graph.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.35)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is the difference between SEO, AEO, and GEO?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  SEO targets traditional 10-blue-link search rankings; AEO targets immediate conversational and voice answers; GEO targets citations and source attributions within AI-generated multi-paragraph syntheses.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.35)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Why is Schema.org structured data critical for modern SEO?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Structured data provides search crawlers and LLMs with explicit context about your business type, services, pricing, FAQs, and geographical coordinates without requiring ambiguous page text parsing.
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
            {
              id: "faq16",
              question: "What is Answer Engine Optimization (AEO) and how does it help rank on AI search?",
              answer:
                "AEO (Answer Engine Optimization) structures website copy into direct-answer formats and Schema.org FAQPage blocks, allowing conversational AI search engines (like ChatGPT, Perplexity, and Google Gemini) to cite your brand directly.",
            },
            {
              id: "faq17",
              question: "How long does Local SEO take to rank in Google Maps for Bihar businesses?",
              answer:
                "Most local businesses begin seeing noticeable rank improvements in Google Maps 3-Pack and localized 'near me' queries within 4 to 8 weeks as NAP citations, Google Business Profile optimizations, and local schema are validated.",
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
