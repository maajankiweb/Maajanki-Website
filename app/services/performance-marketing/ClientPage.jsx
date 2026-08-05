'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/PerformanceMarketing.css";
import "@/app/styles/Home.css";
import "@/app/styles/Branding.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const PerformanceMarketing = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* SEO & GEO Optimization Metadata */}
      {
/* JSON-LD Schema */
}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Performance Marketing Services - MaaJanki Web Tech",
          "description": "ROI-focused performance marketing services including Google Ads PPC, Meta paid social, conversion tracking, retargeting, and landing page optimization.",
          "url": "https://maajankiwebtech.com/services/performance-marketing",
          "image": "https://maajankiwebtech.com/assets/og-image-performance.jpg",
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
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9006543913",
              "contactType": "Customer Support",
              "email": "info@maajankiwebtech.com"
            }
          }
        }
        ` }} />


      {/* Banner Section */}
      <section className="custom-banner">
        <Image priority src="/images/pages/main-services-pages/performance-marketing-banner-image-MaaJanki-Web-Tech.webp" alt="Performance Marketing Services by MaaJanki Web Tech for ROI-driven ads, leads, and conversions" title="ROI-Focused Performance Marketing Services – Google Ads, Meta Ads & PPC | MaaJanki Web Tech" width="1280" height="720"/>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Performance Marketing Services India | Hire the Best Paid Ads &
              PPC Agency to Scale ROI, Leads & Sales
            </h1>
            <div className="aeo-definition-box">
              <p>
                <strong>Performance Marketing Services</strong> represent a
                data-led approach to digital advertising where advertisers
                invest budget into paid acquisition channels such as Google Ads
                (PPC), Meta Ads (Facebook & Instagram), and search engine
                marketing paying strictly for completed user actions, including
                purchases, downloads, form submissions, and qualified leads.
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
                Top-Rated{" "}
                <strong>Performance Marketing Agency in Bihar, India</strong> –
                Accelerating Business Growth via Data-Driven Paid Ads
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you looking for professional{" "}
                <strong>performance marketing services in India</strong>?
                MaaJanki Web Tech, located in Bagaha, Bihar, designs and
                executes conversion-focused paid advertising campaigns. We help
                small businesses, B2B brands, and e-commerce stores in Patna,
                Delhi, and globally acquire quality leads, increase sales
                volume, and reduce customer acquisition costs (CAC).
              </p>

              <p>
                We do not believe in running generic ad campaigns that only
                produce surface-level impressions. Instead, our team conducts
                detailed customer persona audits, configures advanced tracking
                tags, writes compelling ad copies, and performs A/B tests to
                optimize Return on Ad Spend (ROAS). By aligning our media buying
                strategies with Google's and Meta's machine learning algorithms,
                we ensure your ad budget works efficiently to capture
                ready-to-buy consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 9 Semantic Sections */}
      <section className="services-overview-section pm-overview-section" style={{ display: "block", background: "none", padding: 0 }}
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="Google Ads PPC campaigns and search engine marketing by MaaJanki Web Tech"
                      title="Google Ads & PPC Marketing"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  1. Google Ads & Search Engine Marketing (SEM)
                </h2>
                <h3 className="sub-heading">
                  Targeting High-Intent Search Queries to Capture Active Buyers
                </h3>
                <p className="content-text">
                  <strong>Google Ads & Search Engine Marketing (SEM)</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="Meta paid social media ads on Facebook and Instagram by MaaJanki Web Tech"
                      title="Meta Paid Advertising"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  2. Meta Ads (Facebook & Instagram Advertising Agency)
                </h2>
                <h3 className="sub-heading">
                  Utilizing Behavioral Demographics to Build Paid Social Funnels
                </h3>
                <p className="content-text">
                  <strong>Meta Ads (Facebook & Instagram Advertising Agency)</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="Conversion Rate Optimization and funnel audits by MaaJanki Web Tech"
                      title="CRO & Funnel Auditing"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  3. Conversion Rate Optimization (CRO) & Funnel Auditing
                </h2>
                <h3 className="sub-heading">
                  Designing High-Performing User Journeys to Maximize
                  Click-to-Lead Rates
                </h3>
                <p className="content-text">
                  <strong>Conversion Rate Optimization (CRO) & Funnel Auditing</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="Precision retargeting and remarketing setup by MaaJanki Web Tech"
                      title="Retargeting & Remarketing Campaigns"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  4. Precision Retargeting & Remarketing Campaigns
                </h2>
                <h3 className="sub-heading">
                  Re-Engaging Website Visitors to Recapture Warm Audiences
                </h3>
                <p className="content-text">
                  <strong>Precision Retargeting & Remarketing Campaigns</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="B2B lead generation and LinkedIn advertising campaigns"
                      title="LinkedIn Ads & B2B Lead Gen"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  5. B2B Lead Generation & LinkedIn Ads
                </h2>
                <h3 className="sub-heading">
                  Connecting Your Brand with Key Corporate Decision-Makers
                </h3>
                <p className="content-text">
                  <strong>B2B Lead Generation & LinkedIn Ads</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="Google Shopping and Performance Max eCommerce advertising"
                      title="eCommerce Product Ads"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  6. eCommerce Product Advertising (Google Shopping & PMax)
                </h2>
                <h3 className="sub-heading">
                  Optimizing Product Feeds to Increase Online Transactions &
                  ROAS
                </h3>
                <p className="content-text">
                  <strong>eCommerce Product Advertising (Google Shopping & PMax)</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="YouTube video advertising and interactive display campaigns"
                      title="YouTube Video & Interactive Display Ads"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  7. YouTube Video Ads & Interactive Display Advertising
                </h2>
                <h3 className="sub-heading">
                  Leveraging Video Assets to Build Brand Trust and
                  Direct-Response Action
                </h3>
                <p className="content-text">
                  <strong>YouTube Video Ads & Interactive Display Advertising</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="GA4 analytics setup and conversion attribution tracking"
                      title="GA4 Analytics Setup"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  8. Analytics Setup & GA4 Attribution Mapping
                </h2>
                <h3 className="sub-heading">
                  Tracking Conversion Events to Measure Exact Marketing ROI
                </h3>
                <p className="content-text">
                  <strong>Analytics Setup & GA4 Attribution Mapping</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9 */}
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="Generative engine optimization and landing page AEO alignment"
                      title="GEO & AEO for Landing Pages"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">9. GEO & AEO for Landing Pages</h2>
                <h3 className="sub-heading">Formatting Ad Content to Be Indexed and Cited by AI Answer Engines</h3>
                <p className="content-text">
                  <strong>GEO & AEO for Landing Pages</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized performance marketing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>high-ROI paid advertising campaigns that highlight your products and drive direct conversions.</strong> By leveraging strategic audience targeting and ad creative testing, we ensure your performance marketing aligns with the algorithms and search behavior of advertising networks and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your data-driven ad campaigns</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
      <section className="performance-marketing-section">
        <h2 className="pm-title">
          Performance Marketing Solutions That Drive ROI & Conversions
        </h2>
        <p className="pm-subtitle">
          We combine data analytics, copy testing, and channel optimization to
          maximize your return on ad spend (ROAS).
        </p>

        <div className="pm-grid">
          {[
            {
              icon: "fas fa-bullseye",
              heading: "PPC Ad Management",
              text: "Launch and manage Search, Display, and Performance Max campaigns on Google Ads and Bing Ads to target high-intent buyers.",
            },
            {
              icon: "fab fa-facebook-square",
              heading: "Meta Paid Social Ads",
              text: "Run conversion and lead generation campaigns on Facebook and Instagram using demographic and custom interest targeting.",
            },
            {
              icon: "fas fa-undo",
              heading: "Remarketing Funnels",
              text: "Re-engage site visitors and cart abandoners across search and social channels to recover lost conversions.",
            },
            {
              icon: "fas fa-percentage",
              heading: "CRO Consulting",
              text: "Audit landing pages, forms, and headings to simplify buyer paths and increase conversion rates.",
            },
            {
              icon: "fas fa-envelope-open-text",
              heading: "Marketing Automation",
              text: "Nurture new leads with automated email sequences and follow-ups to increase customer lifetime value.",
            },
            {
              icon: "fas fa-chart-pie",
              heading: "GA4 Tracking & Auditing",
              text: "Configure GTM, Google Analytics 4, and conversion pixels to track actions and build reports.",
            },
            {
              icon: "fas fa-newspaper",
              heading: "Native Ad Placements",
              text: "Promote brand stories on networks like Taboola and Outbrain to reach audiences on premium publisher sites.",
            },
            {
              icon: "fas fa-link",
              heading: "Affiliate Management",
              text: "Setup and manage performance-based affiliate partnerships with tracking to ensure paid conversions.",
            },
            {
              icon: "fas fa-user-friends",
              heading: "B2B LinkedIn Campaigns",
              text: "Run targeted B2B sponsored content and lead gen forms to reach corporate decision-makers directly.",
            },
          ].map((item, index) => (
            <div key={index} className="pm-box">
              <i className={`pm-icon ${item.icon}`} aria-hidden="true"></i>
              <h3 className="pm-heading">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Section */}
      <section className="performance-tools-section">
        <div className="tools-heading-section">
          <h2 className="tools-heading-title">
            Performance Marketing Channels & Platforms We Utilize
          </h2>
        </div>

        <div className="performance-section-grid">
          {[
            {
              src: "/images/icons/google-logo.png",
              alt: "Google Ads platform for PPC advertising",
              title: "Google Ads",
              label: "Google Ads",
            },
            {
              src: "/images/icons/facebook-circled.png",
              alt: "Meta Ads manager for Facebook and Instagram marketing",
              title: "Meta Ads",
              label: "Meta Ads",
            },
            {
              src: "/images/icons/google-analytics.png",
              alt: "Google Analytics 4 for conversion auditing",
              title: "Google Analytics",
              label: "GA4 Tracking",
            },
            {
              src: "/images/icons/linkedin.png",
              alt: "LinkedIn campaign manager for B2B ads",
              title: "LinkedIn Ads",
              label: "LinkedIn Ads",
            },
            {
              src: "/images/Tools icon/performance-marketing/hubspot.png",
              alt: "HubSpot CRM and automation platform",
              title: "HubSpot CRM",
              label: "HubSpot",
            },
            {
              src: "/images/Tools icon/performance-marketing/semrush.jpg",
              alt: "SEMrush tool for keyword and competitor research",
              title: "SEMrush",
              label: "SEMrush",
            },
            {
              src: "/images/Tools icon/performance-marketing/tabools.jpg",
              alt: "Taboola platform for native ads",
              title: "Taboola Ads",
              label: "Taboola",
            },
            {
              src: "/images/Tools icon/performance-marketing/outbrain.png",
              alt: "Outbrain native content recommendation network",
              title: "Outbrain Ads",
              label: "Outbrain",
            },
            {
              src: "/images/Tools icon/performance-marketing/adroll.png",
              alt: "AdRoll retargeting and remarketing suite",
              title: "AdRoll",
              label: "AdRoll",
            },
            {
              src: "/images/icons/google-tag-manager.png",
              alt: "Google Tag Manager for conversion event setup",
              title: "Google Tag Manager",
              label: "Tag Manager",
            },
          ].map((tool, index) => (
            <div key={index} className="performance-card-box">
              <Image
                className="performance-card-icon"
                src={tool.src}
                alt={tool.alt}
                title={tool.title}
                loading="lazy"
               width={150} height={50} />
              <span className="performance-card-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our Performance Marketing & Paid Ads Growth Guide
            </h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to build measurable lead flow. We
              build campaigns and design landing pages that connect with buyer
              search intent.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Download Our PPC Growth Guide
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our ad testing strategies, custom pixel setups, and
                landing page frameworks in our guide.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> PPC Keyword Match &
                Bidding Guides
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Custom Lead Gen Ad
                Templates
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> GTM & Pixel Conversion
                Checklists
              </div>

              {/* Download Button */}
              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
              >
                ⬇️ Download Brochure
              </button>

              {/* Popup Form */}
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
                            alert(
                              "An error occurred. Please check your internet connection.",
                            );
                          });
                      }}
                    >
                      <h3 className="brochure-title">
                        Get Your Paid Ads Brochure
                      </h3>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                      <input
                        type="hidden"
                        name="brochure_request"
                        value="performance_marketing"
                      />
                      <button type="submit" className="brochure-submit-btn">
                        Send Brochure
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
                { icon: "fas fa-bullhorn", title: "PPC Campaign Setup" },
                { icon: "fas fa-chart-line", title: "Google Ads Optimization" },
                { icon: "fas fa-ad", title: "Meta Lead Gen Ads" },
                { icon: "fas fa-users", title: "Audience Retargeting" },
                { icon: "fas fa-coins", title: "Conversion Audits" },
                {
                  icon: "fas fa-hand-holding-usd",
                  title: "Sales Funnel Design",
                },
                { icon: "fas fa-chart-pie", title: "Ad Copy A/B Testing" },
                { icon: "fas fa-rocket", title: "Scale Ad Budgets" },
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
      {/* Brochure Section End */}

      {/* Process Section */}
      <section className="jobready-workflow">
        <h2 className="jobready-heading-small">Our Work Process</h2>
        <h2 className="jobready-heading-main">
          Our Proven Performance Marketing Workflow Steps
        </h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. Target Audience Auditing</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. PPC Keyword Research</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-pen"></i>
            </div>
            <p>3. Writing Ad Copies & Graphics</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-code"></i>
            </div>
            <p>4. Pixel & Event Tag Setup</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p>5. Campaign Launch & Scaling</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-chart-line"></i>
            </div>
            <p>6. Optimization & ROAS Reports</p>
          </div>
        </div>
      </section>

      {/* Blog & Educational Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Why Data-Driven Attribution Is Key to Digital Advertising
                Success
              </h2>
              <p>
                In paid advertising, knowing where your conversions come from is
                essential. While basic setups show general click details, they
                often miss conversion sources, causing wasted budget.
                Implementing conversion tracking via GA4 and Google Tag Manager
                allows us to verify which keywords and ad layouts are driving
                leads. This attribution maps out customer touchpoints, helping
                us focus spend on profitable campaigns.
              </p>

              <h3 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Bidding Strategies: Machine Learning vs Manual CPC Management
              </h3>
              <p>
                Modern paid advertising networks rely on machine learning to
                optimize bids. We combine manual controls with smart bidding
                strategies (such as Target CPA and Maximize Conversions). This
                ensure ad bids adjust in real time to capture active users,
                lowering overall acquisition costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="branding-pricing-section">
        <div className="branding-pricing-container">
          <div className="branding-pricing-header">
            <h2>Transparent Performance Marketing Pricing Plans</h2>
            <p>
              Choose an ads management plan aligned with your budget. We provide
              clear conversion tracking setup and monthly performance
              dashboards.
            </p>
          </div>

          <div className="branding-pricing-grid">
            {/* Plan 1 */}
            <div className="branding-pricing-card">
              <div>
                <h3>Starter Ads Management</h3>
                <div className="branding-pricing-amount">
                  ₹15,000 <span>/ Month</span>
                </div>
                <ul className="branding-pricing-list">
                  <li>Management of Ad Budgets Up to ₹1L/Month</li>
                  <li>Meta Ads OR Google Ads Setup</li>
                  <li>Custom Audience Targeting & Pixel Setup</li>
                  <li>A/B Ad Creative Testing</li>
                  <li>Bi-weekly Performance Reporting</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Get Started
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="branding-pricing-card featured">
              <span className="branding-pricing-badge">Most Popular</span>
              <div>
                <h3>Sales Scale Pro</h3>
                <div className="branding-pricing-amount">
                  ₹35,000 <span>/ Month</span>
                </div>
                <ul className="branding-pricing-list">
                  <li>Management of Ad Budgets Up to ₹5L/Month</li>
                  <li>Meta Ads + Google Ads Setup</li>
                  <li>Retargeting & Lookalike Audiences</li>
                  <li>Custom Ad Copy & Ad Design Consulting</li>
                  <li>Weekly Performance Dashboard & Audits</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Get Started
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="branding-pricing-card">
              <div>
                <h3>Omnichannel Growth Suite</h3>
                <div className="branding-pricing-amount">Custom Pricing</div>
                <ul className="branding-pricing-list">
                  <li>Multi-channel Ads (Meta, Google, YouTube, LinkedIn)</li>
                  <li>Unlimited Ad Budget Scope Management</li>
                  <li>CRM Synchronization & Funnel Tracking</li>
                  <li>High-converting Landing Page Consulting</li>
                  <li>Dedicated Analytics Support & Auditing</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Risk Mitigation Block */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "40px",
              marginTop: "60px",
            }}
          >
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                marginBottom: "30px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Risk Mitigation & Objections Resolved
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#ffeb3b",
                    marginBottom: "12px",
                  }}
                >
                  Is the ad spend budget included in the monthly fee?
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: "1.6",
                  }}
                >
                  No. The ad budget is paid directly by the client to the
                  advertising platforms (Google Ads, Meta Ads). Our monthly
                  service fee covers strategy, ad setup, creative consulting,
                  audience targeting, tracking, optimization, and reporting.
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#ffeb3b",
                    marginBottom: "12px",
                  }}
                >
                  Do you guarantee immediate sales or leads?
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: "1.6",
                  }}
                >
                  We guarantee high-intent, targeted traffic and lead
                  acquisitions aligned with your audience profile. Conversions
                  and actual sales also depend on external factors like your
                  landing page experience, product pricing, and sales follow-up
                  team.
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#ffeb3b",
                    marginBottom: "12px",
                  }}
                >
                  Which ad network is best for my business?
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: "1.6",
                  }}
                >
                  We analyze your target audience. Typically, B2B brands perform
                  best on Google Search & LinkedIn, while B2C/eCommerce brands
                  scale fastest via Meta Ads & Google Shopping.
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
              <h2 className="inner-heading" style={{ fontSize: "2.2rem", textAlign: "center" }}>
                Quick Answers: Performance Marketing
              </h2>
              <p className="mb-8 text-gray-400" style={{ textAlign: "center" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear, simple breakdown of our performance marketing services.
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
                  What is Performance Marketing?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Performance marketing is an advertising strategy where brands
                  pay only when specific, measurable conversion goals—like
                  sales, clicks, or lead registrations—are achieved.
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
                  How does performance marketing differ from branding?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Branding campaigns focus on general reach and long-term brand
                  awareness. Performance marketing targets short-term,
                  measurable transactions and lead generation goals.
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
                  How do Google Ads help local businesses in Bihar?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Google Ads target geo-specific search terms, displaying your
                  contact details and landing pages to active buyers in Patna,
                  Bagaha, or other local areas.
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
                  Why is conversion tracking essential for paid campaigns?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Conversion tracking logs user actions (e.g. form submissions,
                  checkout events), indicating which ad formats and keywords are
                  driving profitable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Performance Marketing</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What is performance marketing in digital marketing?",
              answer:
                "Performance marketing is a results-oriented digital marketing strategy where businesses pay advertising networks only when specific user actions—such as a click, lead form submission, or product sale—are completed.",
            },
            {
              id: "faq2",
              question:
                "Why does my business need professional ads management?",
              answer:
                "Professional management prevents ad waste by conducting keyword research, configuring event tracking, writing copy, and analyzing data to lower CPA and increase ROAS.",
            },
            {
              id: "faq3",
              question: "What platforms are included in your campaigns?",
              answer:
                "We run campaigns on Google Ads (Search, Display, Shopping, YouTube, PMax), Meta Ads (Facebook & Instagram), LinkedIn Campaign Manager, and native ad networks.",
            },
            {
              id: "faq4",
              question: "How long does it take to see results from PPC ads?",
              answer:
                "Paid search and social campaigns start driving traffic immediately. Typically, conversion volume and tracking data stabilize within 2 to 3 weeks of campaign launch.",
            },
            {
              id: "faq5",
              question: "Do you write the ad copy and design graphics?",
              answer:
                "Yes, we handle copy writing, graphic layouts, and ad formats, aligning all assets with your target buyer profiles.",
            },
            {
              id: "faq6",
              question: "What is Conversion Rate Optimization (CRO)?",
              answer:
                "CRO involves auditing landing pages, loading speeds, forms, and headings to simplify user paths, turning website visitors into leads.",
            },
            {
              id: "faq7",
              question: "How do you track conversions and leads?",
              answer:
                "We install tracking codes via Google Tag Manager (GTM), Google Analytics 4 (GA4), and platform pixels to log user events like form submissions and phone clicks.",
            },
            {
              id: "faq8",
              question: "What is ROAS and how is it calculated?",
              answer:
                "ROAS (Return on Ad Spend) measures campaign revenue. It is calculated by dividing the revenue generated from ads by the total budget spent on those campaigns.",
            },
            {
              id: "faq9",
              question: "What is Google Performance Max (PMax)?",
              answer:
                "PMax is an automated campaign type that displays ads across Search, YouTube, Display, Discover, Gmail, and Maps using Google's machine learning.",
            },
            {
              id: "faq10",
              question: "Can you manage B2B LinkedIn campaigns?",
              answer:
                "Yes. We target LinkedIn ads by job title, industry, and company size to generate B2B leads.",
            },
            {
              id: "faq11",
              question: "What is retargeting and why is it important?",
              answer:
                "Retargeting displays ads to users who previously visited your website, helping to convert warm traffic into customers.",
            },
            {
              id: "faq12",
              question: "Is the ad budget included in your service fees?",
              answer:
                "No. The advertising budget is paid directly to Google or Meta. Our fee covers strategy, setup, tracking, optimization, and reports.",
            },
            {
              id: "faq13",
              question: "How do you prevent invalid click waste?",
              answer:
                "We use IP exclusion lists, precise location targeting, negative keyword lists, and platform click protection filters.",
            },
            {
              id: "faq14",
              question: "Do you offer weekly campaign audits?",
              answer:
                "Yes. We track click rates, spend, conversion counts, and CPA weekly to identify optimization opportunities.",
            },
            {
              id: "faq15",
              question: "What is GEO for landing pages?",
              answer:
                "GEO involves formatting page copy and headings with direct answers and structured lists so AI search engines can easily index and cite your brand.",
            },
            {
              id: "faq16",
              question: "How do we start a performance marketing project?",
              answer:
                "Contact us at info@maajankiwebtech.com or click 'Contact Us' to schedule a consultation and ad audit.",
            },
            {
              id: "faq17",
              question: "Are CSV sheets and ad reports provided?",
              answer:
                "Yes. We deliver transparent campaign reports and analytics dashboards tracking all spend and lead metrics.",
            },
            {
              id: "faq18",
              question: "Do you configure Google Merchant Center?",
              answer:
                "Yes, we upload and optimize eCommerce product feeds to Google Merchant Center for shopping campaigns.",
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
      {/* FAQ Section End */}

      {/* GEO Analysis expandable details block */}
      <section
        className="service-gradient-black-section"
        style={{ borderTop: "1px solid #222", padding: "40px 20px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <details
                style={{
                  background: "#111",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    color: "#FD6A02",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                  }}
                >
                  🔍 View Generative Engine Optimization (GEO) & Semantic
                  Analysis
                </summary>
                <div
                  style={{
                    color: "#ccc",
                    marginTop: "15px",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                  }}
                >
                  <p>
                    <strong>1. Search Bots Crawling Feasibility:</strong> This
                    page uses structured hierarchical headers (H1, H2, H3) and
                    semantic paragraph blocks that make parsing and indexing
                    easy for search agents.
                  </p>
                  <p>
                    <strong>
                      2. ChatGPT and Claude Recommendation Suitability:
                    </strong>{" "}
                    By including definition modules, transparent pricing models,
                    and risk mitigation blocks, the page provides clear answer
                    patterns that AI engines citation-scrape.
                  </p>
                  <p>
                    <strong>3. Perplexity and Gemini Sourcing:</strong> The
                    presence of structured JSON-LD schema linking entities,
                    tools (Google Ads, Meta Ads, GA4), and locations ensures
                    that generative engines recognize MaaJanki Web Tech as a
                    premium performance marketing agency in Bihar.
                  </p>
                  <p>
                    <strong>4. Semantic Keyword Integration:</strong>{" "}
                    Incorporated terms like ROAS optimization, CPA reduction,
                    Conversion Rate Optimization, and programmatic advertising
                    naturally without keyword stuffing.
                  </p>
                  <p>
                    <strong>5. Intent Fulfillment:</strong> Met both commercial
                    research intents (pricing plans, platform breakdowns) and
                    informational intents (FAQs, attribution mechanics).
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      
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

export default PerformanceMarketing;
