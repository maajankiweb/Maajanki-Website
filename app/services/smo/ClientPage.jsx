'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/SMO.css";
import "@/app/styles/Home.css";
import "@/app/styles/Branding.css";

const SMO = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* SEO Optimization for SMO Page */}
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "SMO Services - MaaJanki Web Tech",
          "description": "Professional social media optimization services including profile audits, brand consistency, hashtag strategies, and organic community building.",
          "url": "https://maajankiwebtech.com/services/smo",
          "image": "https://maajankiwebtech.com/assets/og-image-smo.jpg",
          "priceRange": "$",
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "State", "name": "Bihar" }
          ],
          "provider": {
            "@type": "Organization",
            "@id": "https://maajankiwebtech.com/#organization",
            "name": "MaaJanki Web Tech",
            "url": "https://maajankiwebtech.com",
            "logo": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png"
          }
        }
        ` }} />


      {/* Banner Section */}
      <section className="custom-banner">
        <Image priority src="/images/pages/main-services-pages/smo-banner-image-MaaJanki.webp" alt="Social Media Optimization Services by MaaJanki Web Tech – Grow Brand Visibility & Engagement" title="SMO Services in India | Social Media Optimization Company – MaaJanki Web Tech" data-no-retina="" width="1280" height="720"/>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Best SMO Services in India | Build Brand Loyalty & Maximize
              Organic Engagement
            </h1>
            <div className="aeo-definition-box">
              <p>
                Social Media Optimization (SMO) is the practice of enhancing
                business profiles and content across social platforms like
                Facebook, Instagram, LinkedIn, and YouTube. By maintaining
                consistent visual branding, optimizing profile descriptions, and
                targeting platform-specific algorithms, SMO increases organic
                discoverability, driving high-value traffic to your website.
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Get SMO Consultation
              </Link>
              <Link href="/about" className="btn2">
                Why Choose Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Page Introduction Section - Redesigned Modern Layout */}
      <section
        className="smo-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="smo-intro-card"
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
                Social Media Optimization
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
                Top-Rated <span style={{ color: "#FD6A02" }}>SMO Company in Bihar, India</span> – Growing Organic Brand Reach Across All Social Networks
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
                  Are you looking for the <strong style={{ color: "#ffffff" }}>best SMO services in Bihar, India</strong>? MaaJanki Web Tech helps businesses build a strong organic presence across Facebook, Instagram, LinkedIn, and YouTube for clients in Patna, Delhi, and across India.
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
                  By optimizing profiles, researching hashtags, and executing community engagement, we build brand authority that search engines and AI assistants recognize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 to 12 Sections */}
      <section className="services-overview-section smo-overview-section" style={{ display: "block", background: "none", padding: 0 }}>
        {/* Section 1 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/what-is-social-media-optimization-maajanki.webp"
                      alt="Social Media Optimization auditing by MaaJanki Web Tech"
                      title="Social Media Profile Audit"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  1. Detailed Social Media Profile Audits
                </h2>
                <h3 className="sub-heading">
                  Analyzing Competitor Positioning and Branding Alignment
                </h3>
                <p className="content-text">
                  <strong>Detailed Social Media Profile Audits</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/Why-smo-is-important-for-your-business-maajanki.webp"
                      alt="Consistent social branding across channels"
                      title="Profile Optimization Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  2. Professional Profile Optimization
                </h2>
                <h3 className="sub-heading">
                  Establishing Brand Trust and Consistency Across Social
                  Networks
                </h3>
                <p className="content-text">
                  <strong>Professional Profile Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/why-choose-us-for-smo-maajanki.webp"
                      alt="Custom Content Strategy by MaaJanki Web Tech"
                      title="Content Strategy"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  3. Custom Content Strategy & Calendars
                </h2>
                <h3 className="sub-heading">
                  Scheduling Value-Driven Posts to Maximize Audience Reach
                </h3>
                <p className="content-text">
                  <strong>Custom Content Strategy & Calendars</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/what-is-social-media-optimization-maajanki.webp"
                      alt="High-Quality Graphic Post Design by MaaJanki Web Tech"
                      title="Graphic Post Design"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  4. High-Quality Graphic Post Design
                </h2>
                <h3 className="sub-heading">
                  Creating Custom Visual Assets Built to Drive User Engagement
                </h3>
                <p className="content-text">
                  <strong>High-Quality Graphic Post Design</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/Why-smo-is-important-for-your-business-maajanki.webp"
                      alt="Hashtag & Keyword Research by MaaJanki Web Tech"
                      title="Keyword Research"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">5. Hashtag & Keyword Research</h2>
                <h3 className="sub-heading">
                  Targeting platform search parameters to boost organic
                  visibility
                </h3>
                <p className="content-text">
                  <strong>Hashtag & Keyword Research</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/why-choose-us-for-smo-maajanki.webp"
                      alt="Active Engagement & Community Management by MaaJanki Web Tech"
                      title="Community Management"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  6. Active Engagement & Community Management
                </h2>
                <h3 className="sub-heading">
                  Building Strong Customer Relationships Through Social
                  Interaction
                </h3>
                <p className="content-text">
                  <strong>Active Engagement & Community Management</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/what-is-social-media-optimization-maajanki.webp"
                      alt="Social Media Analytics by MaaJanki Web Tech"
                      title="Social Media Analytics"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  7. Social Media Analytics & Optimization
                </h2>
                <h3 className="sub-heading">
                  Refining Campaign Strategies Based on Data Insights
                </h3>
                <p className="content-text">
                  <strong>Social Media Analytics & Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Smo/Why-smo-is-important-for-your-business-maajanki.webp"
                      alt="GEO Integration for Social Media by MaaJanki Web Tech"
                      title="GEO Integration"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">8. GEO Integration for Social Media</h2>
                <h3 className="sub-heading">Helping AI search bots index your social trust signals</h3>
                <p className="content-text">
                  <strong>GEO Integration for Social Media</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized social media optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>cohesive social media profiles and content that highlights your organic brand presence.</strong> By leveraging trending hashtag research and daily community engagement, we ensure your social media optimization aligns with the algorithms and search behavior of social networks and organic discovery algorithms.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your social media channels</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
      <section className="smo-section">
        <h2 className="smo-title">Our Social Media Optimization Solutions</h2>
        <p className="smo-subtitle">
          We optimize your profiles, design visual assets, and manage
          communities to build organic brand authority across all networks.
        </p>

        <div className="smo-grid">
          {[
            {
              icon: "fas fa-search",
              heading: "Social Media Profile Audit",
              text: "We analyze your profiles and competitor pages to build a custom organic growth strategy.",
            },
            {
              icon: "fas fa-user-cog",
              heading: "Cohesive Profile Setup",
              text: "We optimize display graphics, bio descriptions, and contact buttons across all networks.",
            },
            {
              icon: "fas fa-calendar-alt",
              heading: "Value-Driven Content Planning",
              text: "We draft monthly content calendars mapping educational posts, product details, and client reviews.",
            },
            {
              icon: "fas fa-pencil-ruler",
              heading: "Graphic & Video Production",
              text: "We design custom carousels, feed posts, and Reels templates to match your brand style.",
            },
            {
              icon: "fas fa-hashtag",
              heading: "Hashtag & Social SEO",
              text: "We research trending hashtags and place target keywords in post bios to increase discovery.",
            },
            {
              icon: "fas fa-comments",
              heading: "Community Management",
              text: "We respond to messages and user comments to build customer relationships.",
            },
            {
              icon: "fas fa-chart-line",
              heading: "Analytics & Optimizations",
              text: "We track page reach and follower growth metrics monthly to refine our content campaigns.",
            },
            {
              icon: "fas fa-bullhorn",
              heading: "Organic Brand Awareness",
              text: "We maintain a consistent brand tone across all major networks to build loyalty.",
            },
            {
              icon: "fas fa-network-wired",
              heading: "Platform Customizations",
              text: "We tailor strategies for Facebook, Instagram, LinkedIn, and YouTube.",
            },
          ].map((item, index) => (
            <div key={index} className="smo-box">
              <div className="smo-icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="smo-heading">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="smo-tools-section">
        <div className="tools-heading-section">
          <h2 className="tools-heading-title">
            Social Media Optimization Tools We Use
          </h2>
        </div>

        <div className="smo-section-grid">
          {[
            { src: "/images/Tools icon/smo/buffer.png", label: "Buffer" },
            { src: "/images/Tools icon/smo/hootsuite.png", label: "Hootsuite" },
            { src: "/images/Tools icon/smo/later.jpg", label: "Later" },
            {
              src: "/images/Tools icon/smo/sprout social.png",
              label: "Sprout Social",
            },
            {
              src: "/images/icons/canva.png",
              label: "Canva",
            },
            { src: "/images/Tools icon/smo/socialbee.png", label: "SocialBee" },
            {
              src: "/images/Tools icon/smo/zoho social.png",
              label: "Zoho Social",
            },
            { src: "/images/Tools icon/smo/crowdfire.jpg", label: "Crowdfire" },
            {
              src: "/images/icons/calendar.png",
              label: "Postcron",
            },
            { src: "/images/Tools icon/smo/pubbler.png", label: "Publer" },
          ].map((tool, index) => (
            <div key={index} className="smo-card-box">
              <Image
                className="smo-card-icon"
                src={tool.src}
                alt={`${tool.label} SMO tool`}
                loading="lazy"
               width={150} height={50} />
              <div className="smo-card-text">{tool.label}</div>
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
              Download Our Social Media Optimization Strategy Guide
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to build organic brand authority. We implement strategic content plans to grow engagement across Facebook, Instagram, and LinkedIn.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Download Our SMO Strategy Outline
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Learn about our profile optimizations, image post guidelines, and target hashtag workflows in our SMO brochure.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#FD6A02", fontSize: "1rem" }}></i> Social Profile Audits and Optimization Checklist
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#FD6A02", fontSize: "1rem" }}></i> Custom Graphic Post Formats
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#FD6A02", fontSize: "1rem" }}></i> Community Management Workflows
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download SMO Brochure
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
                            service: "Brochure Download - SMO",
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
                        Download SMO Strategy Guide
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
                { icon: "fab fa-facebook-f", title: "Facebook Setup" },
                { icon: "fab fa-instagram", title: "Instagram Growth" },
                { icon: "fab fa-twitter", title: "X Business Setup" },
                { icon: "fab fa-linkedin-in", title: "LinkedIn Optimization" },
                { icon: "fab fa-youtube", title: "YouTube Optimization" },
                { icon: "fas fa-bullhorn", title: "Organic Branding" },
                { icon: "fas fa-chart-line", title: "Monthly Analytics Reports" },
                { icon: "fas fa-rocket", title: "Campaign Refinements" },
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
                  Why Organic Social Media Optimization Is a Crucial Branding Strategy
                </h2>
                <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8", marginBottom: "30px" }}>
                  Organic social media optimization is the foundation of building
                  a reliable brand identity. While paid social advertising
                  generates short-term traffic, organic optimization creates
                  lasting customer connections. By sharing valuable content and
                  engaging with your audience, you build a community that supports
                  and recommends your brand.
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
                  How Social Engagement Signals Influence Search Visibility
                </h3>
                <p style={{ color: "#e2e8f0", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                  Modern search algorithms and AI engines track social media brand mentions as trust signals. Active business profiles with high engagement rates build brand authority. By maintaining updated social accounts, you tell search engines that your business is active and trusted by users.
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
                Transparent Monthly SMO Packages
              </h2>
              <p style={{ color: "#e2e8f0", fontSize: "16px" }}>
                Select a social media optimization tier structured for your growth stage. No hidden setup fees.
              </p>
            </div>

            <div className="branding-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Starter SMO</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>
                    ₹7,999 <span style={{ color: "#64748b", fontSize: "1rem" }}>/ Month</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Manage 2 Social Channels</li>
                    <li>12 Graphic Posts / Month</li>
                    <li>Basic Profile Optimization</li>
                    <li>Hashtag &amp; Bio Research</li>
                    <li>Monthly Progress Report</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card featured" style={{ background: "#042544", border: "3px solid #FD6A02", borderRadius: "20px", padding: "35px 25px", position: "relative", color: "#ffffff", boxShadow: "0 15px 35px rgba(253, 106, 2, 0.4)" }}>
                <span className="branding-pricing-badge" style={{ background: "#FD6A02", color: "#ffffff", fontWeight: "800" }}>⭐ Recommended</span>
                <div>
                  <h3 style={{ color: "#ffffff", fontWeight: "800" }}>Brand Growth</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2.2rem" }}>
                    ₹14,999 <span style={{ color: "#cbd5e1", fontSize: "1rem" }}>/ Month</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#e2e8f0" }}>
                    <li>Manage 4 Social Channels</li>
                    <li>24 Custom Posts &amp; 4 Reels</li>
                    <li>Deep Profile Optimization</li>
                    <li>Active Community Moderation</li>
                    <li>Bi-weekly Strategy Check-in</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#FD6A02", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Enterprise SMO</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>Custom Pricing</div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Custom Platform Support</li>
                    <li>Daily Content &amp; Video Shorts</li>
                    <li>Dedicated Account Manager</li>
                    <li>Multi-channel Moderation</li>
                    <li>GEO &amp; AI Visibility Integration</li>
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
                Quick Answers: Social Media Optimization
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear breakdown of our SMO services.
              </p>
            </div>

            <div className="geo-questions-grid">
              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is Social Media Optimization (SMO)?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  SMO involves optimizing business profiles and content across platforms like Facebook, Instagram, and LinkedIn to build organic reach.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Why is organic SMO important?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Organic SMO builds authentic customer trust, drives free referral traffic, and signals brand credibility to search algorithms.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How does SMO differ from SEO?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  SEO targets web page search rankings, while SMO optimizes social channels and posts to maximize audience reach on social networks.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How does community management help?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Community management responds to comments and DMs, boosting profile activity levels which social algorithms prioritize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About SMO Services</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What is Social Media Optimization (SMO)?",
              answer:
                "SMO is the process of optimizing social media profiles and content to increase organic visibility, brand reach, and visitor engagement.",
            },
            {
              id: "faq2",
              question: "Why does my business need SMO?",
              answer:
                "SMO helps you build organic brand authority, drive referral traffic to your site, and connect directly with target customers.",
            },
            {
              id: "faq3",
              question: "How does SMO differ from social media advertising?",
              answer:
                "SMO focuses on organic profile optimization and content building, while social media advertising involves paid campaigns.",
            },
            {
              id: "faq4",
              question: "What does profile optimization include?",
              answer:
                "It includes designing professional display images, cover graphics, writing keyword-rich bios, and setting up contact link buttons.",
            },
            {
              id: "faq5",
              question: "How do you select target hashtags?",
              answer:
                "We research high-volume and relevant niche hashtags using social intelligence tools to increase post discoverability.",
            },
            {
              id: "faq6",
              question: "Do you write content descriptions for posts?",
              answer:
                "Yes, we draft engaging descriptions and call-to-actions for every post in our monthly content calendars.",
            },
            {
              id: "faq7",
              question: "Do you manage customer comments?",
              answer:
                "Yes. We monitor and reply to user comments and direct messages on your business profiles.",
            },
            {
              id: "faq8",
              question: "How do you measure SMO success?",
              answer:
                "Success is measured through organic reach, follower growth, engagement rates (likes/comments), and website referral clicks.",
            },
            {
              id: "faq9",
              question: "Can I manage my profiles alongside you?",
              answer:
                "Yes. We coordinate with your team to align branding updates and product announcements.",
            },
            {
              id: "faq10",
              question: "Do you edit social media videos?",
              answer:
                "Yes, we edit short-form videos like Reels and YouTube Shorts templates as part of our advanced SMO campaigns.",
            },
            {
              id: "faq11",
              question: "How do I get started with MaaJanki Web Tech?",
              answer:
                "Contact us at info@maajankiwebtech.com or click 'Get SMO Consultation' to schedule a call.",
            },
            {
              id: "faq12",
              question: "Is there a setup fee for SMO?",
              answer:
                "No. We offer transparent, monthly packages with zero hidden setup fees.",
            },
            {
              id: "faq13",
              question: "Do you provide custom brand styling?",
              answer:
                "Yes. We design post templates that match your brand's style guide and color palette.",
            },
            {
              id: "faq14",
              question: "How do social signals support SEO?",
              answer:
                "Consistent social brand mentions and site traffic act as positive search indicators for search engines.",
            },
            {
              id: "faq15",
              question: "What is Generative Engine Optimization (GEO) in SMO?",
              answer:
                "GEO ensures your profiles are easily read by AI crawlers, helping verify your brand's authority.",
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

export default SMO;
