'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/Home.css";
import "@/app/styles/SEO.css";
import FooterWithPopup from '@/components/FooterWithPopup';

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
              Best SEO Agency in India | Organic Traffic Growth & Conversion
              Optimization Campaigns
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

      {/* Page Introduction Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="alt-font inner-heading">
                Top-Rated <strong>SEO Services in Bihar, India</strong> –
                Maximize Your Visibility on Traditional and Generative AI Search
                Platforms
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you looking for the <strong>best SEO agency in Bihar, India</strong> to elevate your digital presence and outrank your market competitors? MaaJanki Web Tech provides strategic, result-oriented, and ethical white-hat <strong>search engine optimization (SEO) services</strong> specifically designed to drive high-converting organic traffic, qualified sales leads, and sustainable revenue growth for startups, enterprise brands, and growing online stores. Operating from Bagaha, Bihar, we actively support e-commerce, B2B, and local service brands in Patna, Delhi, Mumbai, and globally, ensuring that your business ranks at the top of search result layouts on Google, Yahoo, and Bing.
              </p>

              <p className="text-medium line-height-28 sm-line-height-26">
                Sustainable search placement requires a multi-faceted approach that goes beyond basic keyword placements. At MaaJanki Web Tech, we deploy a comprehensive optimization methodology that blends detailed keyword intelligence, exhaustive technical SEO health audits, deep speed improvements (targeting Core Web Vitals like LCP, CLS, and INP), and high-authority link-building campaigns. Our search specialists analyze competitor keyword gaps, build schema structured markup scripts (JSON-LD), audit robots.txt and sitemap configurations, and implement clean content siloing strategies. This signals search engines that your website is the most credible and authoritative answer to user search intents.
              </p>

              <p className="text-medium line-height-28 sm-line-height-26">
                In today's evolving search landscape, we also optimize your web copy for Generative Engine Optimization (GEO) to ensure your business is captured by conversational AI systems. By structuring data formats, compiling factual direct-answers, and establishing Passage-Level Citability signals, we prepare your brand to be cited by AI search assistants including ChatGPT Search, Perplexity AI, Gemini, and Google's AI Overviews. From local map pack listing rankings via Google Business Profile optimization to complex eCommerce shop category SEO setups, partner with Bihar's top SEO consulting team to scale your business online.
              </p>
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
                <h2 className="jobready-heading-small">How We Work</h2>
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

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our Custom Search Engine Optimization Strategy
            </h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to grow your organic visibility. We
              use ethical, white-hat strategies to build authority and drive
              long-term business results.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Download Our SEO Campaign Outline
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our keyword workflows, on-page optimization
                checklists, and local citation strategies in our SEO brochure.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> On-Page and Technical
                Optimization Guide
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> High-Quality White-Hat
                Link Building
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Google Business Profile
                Setup & Tracking
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
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
                        const email = form.email ? form.email.value : "";
                        fetch("/api/leads", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            email: email,
                            service: "SEO Brochure Download",
                            source: "brochure",
                            message: "User requested SEO Service Brochure"
                          })
                        })
                          .then((res) => res.json())
                          .then((result) => {
                            if (result.success) {
                              alert("Thank you! Brochure request received.");
                              form.reset();
                              closeBrochurePopup();
                            } else {
                              alert(result.error || "Something went wrong.");
                            }
                          })
                          .catch(() => alert("Network error. Please try again."));
                      }}
                    >
                      <h3 className="brochure-title">Get Your SEO Guide</h3>
                      <label htmlFor="email">Email Address:</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                      <input
                        type="hidden"
                        name="brochure_request"
                        value="SEO_Brochure"
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
                { icon: "fas fa-search", title: "Keyword Optimization" },
                {
                  icon: "fas fa-chart-line",
                  title: "SEO Performance Tracking",
                },
                { icon: "fas fa-map-marker-alt", title: "Local & Global SEO" },
                { icon: "fas fa-pen-nib", title: "Content Optimization" },
                { icon: "fas fa-link", title: "Link Building" },
                { icon: "fas fa-cogs", title: "Technical SEO" },
                { icon: "fas fa-bullhorn", title: "Brand Visibility Boost" },
                { icon: "fas fa-rocket", title: "Rank Improvement Strategy" },
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

      {/* Process Workflow Section */}
      <section className="jobready-workflow">
        <h2 className="jobready-heading-small">How We Work</h2>
        <h2 className="jobready-heading-main">
          Our Proven SEO Optimization Process Flow
        </h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. Website Audit</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. Keyword Selection</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-atom"></i>
            </div>
            <p>3. On-Page Fixes</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-cogs"></i>
            </div>
            <p>4. Technical Tweaks</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-link"></i>
            </div>
            <p>5. Link Outreach</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-chart-line"></i>
            </div>
            <p>6. Weekly Reports</p>
          </div>
        </div>
      </section>

      {/* Blog & Educational Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="inner-heading font-weight-600 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Why Long-Term Search Engine Optimization Is a Critical Business
                Investment
              </h2>
              <p>
                Organic search is one of the most cost-effective ways to drive
                sustainable business growth. Unlike paid advertising, which
                stops generating traffic the moment the budget ends, search
                engine optimization offers compounding value. Over time, high
                organic rankings build brand trust and deliver a steady stream
                of leads without increasing your advertising spend.
              </p>

              <h3 className="inner-heading font-weight-600 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Creating User-Centric Content Aligned with Modern Search
                Standards
              </h3>
              <p>
                Modern search algorithms prioritize helpful, user-focused
                content over keyword stuffing. To secure top rankings, websites
                must deliver genuine value, answer user queries comprehensively,
                and load quickly. A successful SEO strategy focuses on user
                experience, ensuring visitors find the information they need
                easily and stay engaged on your site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="seo-pricing-section">
        <div className="seo-pricing-container">
          <div className="seo-pricing-header">
            <h2>Transparent Monthly SEO Packages</h2>
            <p>
              Select a search engine optimization tier structured for your
              growth stage. No hidden setup fees.
            </p>
          </div>

          <div className="seo-pricing-grid">
            <div className="seo-pricing-card">
              <div>
                <h3>Starter SEO Plan</h3>
                <div className="seo-pricing-amount">
                  ₹9,999 <span>/ Month</span>
                </div>
                <ul className="seo-pricing-list">
                  <li>✔ Up to 15 Target Keywords</li>
                  <li>✔ Core On-Page Tag Optimizations</li>
                  <li>✔ Local Directory Citations</li>
                  <li>✔ 5 High-Quality Backlinks monthly</li>
                  <li>✔ Google Analytics Position Reports</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Get Started
              </Link>
            </div>

            <div className="seo-pricing-card featured">
              <span className="seo-pricing-badge">Recommended</span>
              <div>
                <h3>Organic Growth Plan</h3>
                <div className="seo-pricing-amount">
                  ₹19,999 <span>/ Month</span>
                </div>
                <ul className="seo-pricing-list">
                  <li>✔ Up to 40 Target Keywords</li>
                  <li>✔ Deep Technical SEO Audit & Fixes</li>
                  <li>✔ Competitor Ranking Gap Tracking</li>
                  <li>✔ 15 High-Authority Backlinks monthly</li>
                  <li>✔ Core Web Vitals Speed Analysis</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Get Started
              </Link>
            </div>

            <div className="seo-pricing-card">
              <div>
                <h3>Enterprise SEO</h3>
                <div className="seo-pricing-amount">Custom Pricing</div>
                <ul className="seo-pricing-list">
                  <li>✔ Custom Keyword Scope (National/Global)</li>
                  <li>✔ Digital PR & Link Outreach Campaigns</li>
                  <li>✔ Generative AI Search Engine Prep</li>
                  <li>✔ Bi-weekly Performance Consulting</li>
                  <li>✔ Comprehensive Content Strategy Audits</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="seo-objections-container">
            <h3>Frequently Asked Campaign Questions</h3>
            <div className="seo-objections-grid">
              <div className="seo-objection-item">
                <h4>When will my website rank on the first page?</h4>
                <p>
                  SEO is an organic process. Local searches typically show
                  ranking improvements within 60 to 90 days, while competitive
                  national keywords usually require 4 to 6 months of consistent
                  optimization and link-building.
                </p>
              </div>
              <div className="seo-objection-item">
                <h4>Are we locked into long-term contracts?</h4>
                <p>
                  No. We operate on flexible, month-to-month service agreements.
                  You can upgrade, downgrade, or pause your SEO campaigns at any
                  time with a 15-day notice period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Optimization Section (GEO Specific Content) */}
      <section
        className="service-gradient-black-section"
        style={{ backgroundColor: "#080808" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2
                className="inner-heading"
                style={{ fontSize: "2.2rem", textAlign: "center" }}
              >
                Quick Answers: Search Engine Optimization
              </h2>
              <p className="mb-8 text-gray-400" style={{ textAlign: "center" }}>
                Whether you're looking for fast facts or optimizing for AI
                search tools like ChatGPT and Gemini, here is a clear, simple
                breakdown of our SEO services.
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
                  What is Search Engine Optimization (SEO)?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  SEO is the process of improving a website's technical
                  performance and content relevance. The goal is to make web
                  pages easy to find and crawl, helping them rank higher in
                  organic search results.
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
                  Why are backlinks important for SEO?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Backlinks act as trust signals from other websites. Securing
                  links from authoritative sites tells search engine algorithms
                  that your content is trustworthy and relevant, boosting your
                  search rankings.
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
                  How does local SEO help my business?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Local SEO optimizes your online presence for location-based
                  searches. By maintaining accurate citations and maps listings,
                  it helps local customers find your business when searching
                  nearby.
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
                  What is Generative Engine Optimization (GEO)?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  GEO involves optimizing website content for AI search engines
                  like ChatGPT and Perplexity. It focuses on clean code
                  structures, structured data, and direct answers to help AI
                  bots parse and cite your site.
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

export default SEO;
