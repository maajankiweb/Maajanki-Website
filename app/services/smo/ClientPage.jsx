'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/SMO.css";
import "@/app/styles/Home.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const SMO = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* SEO Optimization for SMO Page */}
      {
/* JSON-LD Schema */
}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
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

      {/* Page Introduction Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="alt-font inner-heading">
                Top-Rated <strong>SMO Company in Bihar, India</strong> – Growing
                Organic Brand Reach Across All Social Networks
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you looking for the{" "}
                <strong>best SMO services in Bihar, India</strong>? MaaJanki Web
                Tech is your professional social media optimization partner,
                helping businesses build a strong organic presence across
                Facebook, Instagram, LinkedIn, and YouTube. Based in Bagaha,
                Bihar, we assist startups and established companies in Patna,
                Delhi, and across India in converting casual followers into
                loyal customers.
              </p>

              <p>
                Social media is the digital storefront of your brand. We avoid
                generic, automated posts and focus on custom-crafted,
                value-driven campaigns. By optimizing your business profiles,
                researching trending hashtags, and handling daily community
                engagement, we build trust. This organic trust signals to search
                engine algorithms and generative AI tools that your brand is a
                reputable leader in its market.
              </p>
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

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our Social Media Optimization Strategy Guide
            </h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to build organic brand authority.
              We implement strategic content plans to grow engagement across
              Facebook, Instagram, and LinkedIn.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Download Our SMO Strategy Outline
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our profile optimizations, image post guidelines,
                and target hashtag workflows in our SMO brochure.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Social Profile Audits
                and Optimization Checklist
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Custom Graphic Post
                Formats
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Community Management
                Workflows
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
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
                      <h3 className="brochure-title">Request SMO Brochure</h3>
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
                        value="SMO_Brochure"
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
            <div className="smo-brochure-grid">
              {[
                { icon: "fab fa-facebook-f", title: "Facebook Setup" },
                { icon: "fab fa-instagram", title: "Instagram Growth" },
                { icon: "fab fa-twitter", title: "X Business Setup" },
                { icon: "fab fa-linkedin-in", title: "LinkedIn Optimization" },
                { icon: "fab fa-youtube", title: "YouTube Optimization" },
                { icon: "fas fa-bullhorn", title: "Organic Branding" },
                {
                  icon: "fas fa-chart-line",
                  title: "Monthly Analytics Reports",
                },
                { icon: "fas fa-rocket", title: "Campaign Refinements" },
              ].map((service, index) => (
                <div className="graphic-service-card" key={index}>
                  <div className="smo-brochure-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="graphic-service-title">{service.title}</div>
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
                Why Organic Social Media Optimization Is a Crucial Branding
                Strategy
              </h2>
              <p>
                Organic social media optimization is the foundation of building
                a reliable brand identity. While paid social advertising
                generates short-term traffic, organic optimization creates
                lasting customer connections. By sharing valuable content and
                engaging with your audience, you build a community that supports
                and recommends your brand.
              </p>

              <h3 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                How Social Engagement Signals Influence Search Visibility
              </h3>
              <p>
                Modern search algorithms and AI engines track social media brand
                mentions as trust signals. Active business profiles with high
                engagement rates build brand authority. By maintaining updated
                social accounts, you tell search engines that your business is
                active and trusted by users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Redesigned */}
      <section className="smo-pkg-section">
        {/* Decorative glow blobs */}
        <div className="smo-pkg-glow smo-pkg-glow--left" aria-hidden="true" />
        <div className="smo-pkg-glow smo-pkg-glow--right" aria-hidden="true" />

        <div className="smo-pkg-container">
          {/* Header */}
          <div className="smo-pkg-header">
            <span className="smo-pkg-eyebrow">💰 No Hidden Fees. Ever.</span>
            <h2 className="smo-pkg-title">Transparent Monthly SMO Packages</h2>
            <p className="smo-pkg-subtitle">
              Pick the plan that fits your brand's ambition. Every package
              includes dedicated account management and monthly reporting.
            </p>
          </div>

          {/* Cards */}
          <div className="smo-pkg-grid">

            {/* Starter */}
            <div className="smo-pkg-card">
              <div className="smo-pkg-card-top">
                <div className="smo-pkg-icon-wrap smo-pkg-icon-wrap--blue">
                  <i className="fas fa-seedling" />
                </div>
                <h3 className="smo-pkg-plan-name">Starter SMO</h3>
                <p className="smo-pkg-plan-desc">Perfect for new brands starting their social journey.</p>
                <div className="smo-pkg-price-row">
                  <span className="smo-pkg-currency">₹</span>
                  <span className="smo-pkg-amount">7,999</span>
                  <span className="smo-pkg-period">/mo</span>
                </div>
              </div>
              <ul className="smo-pkg-features">
                <li><i className="fas fa-check" /> Manage 2 Social Channels</li>
                <li><i className="fas fa-check" /> 12 Graphic Posts / Month</li>
                <li><i className="fas fa-check" /> Basic Profile Optimization</li>
                <li><i className="fas fa-check" /> Basic Hashtag Research</li>
                <li><i className="fas fa-check" /> Monthly Progress Report</li>
                <li className="smo-pkg-feature--muted"><i className="fas fa-minus" /> Reels / Video Content</li>
                <li className="smo-pkg-feature--muted"><i className="fas fa-minus" /> Community Moderation</li>
              </ul>
              <Link href="/contact" className="smo-pkg-btn smo-pkg-btn--outline">
                Get Started <i className="fas fa-arrow-right" />
              </Link>
            </div>

            {/* Brand Growth – Featured */}
            <div className="smo-pkg-card smo-pkg-card--featured">
              <div className="smo-pkg-glow-ring" aria-hidden="true" />
              <span className="smo-pkg-badge">⭐ Most Popular</span>
              <div className="smo-pkg-card-top">
                <div className="smo-pkg-icon-wrap smo-pkg-icon-wrap--orange">
                  <i className="fas fa-rocket" />
                </div>
                <h3 className="smo-pkg-plan-name">Brand Growth</h3>
                <p className="smo-pkg-plan-desc">Accelerate reach with a full-content & community engine.</p>
                <div className="smo-pkg-price-row">
                  <span className="smo-pkg-currency">₹</span>
                  <span className="smo-pkg-amount">14,999</span>
                  <span className="smo-pkg-period">/mo</span>
                </div>
              </div>
              <ul className="smo-pkg-features">
                <li><i className="fas fa-check" /> Manage 4 Social Channels</li>
                <li><i className="fas fa-check" /> 24 Custom Posts &amp; 4 Reels</li>
                <li><i className="fas fa-check" /> Deep Profile Optimization</li>
                <li><i className="fas fa-check" /> Core Hashtag &amp; Keyword Research</li>
                <li><i className="fas fa-check" /> Active Community Commenting</li>
                <li><i className="fas fa-check" /> Engagement Analytics Report</li>
                <li><i className="fas fa-check" /> Bi-weekly Strategy Check-in</li>
              </ul>
              <Link href="/contact" className="smo-pkg-btn smo-pkg-btn--primary">
                Get Started <i className="fas fa-arrow-right" />
              </Link>
            </div>

            {/* Enterprise */}
            <div className="smo-pkg-card">
              <div className="smo-pkg-card-top">
                <div className="smo-pkg-icon-wrap smo-pkg-icon-wrap--gold">
                  <i className="fas fa-crown" />
                </div>
                <h3 className="smo-pkg-plan-name">Enterprise SMO</h3>
                <p className="smo-pkg-plan-desc">Full-scale brand domination across every platform.</p>
                <div className="smo-pkg-price-row smo-pkg-price-row--custom">
                  <span className="smo-pkg-amount-custom">Custom Pricing</span>
                </div>
              </div>
              <ul className="smo-pkg-features">
                <li><i className="fas fa-check" /> Custom Platform Support</li>
                <li><i className="fas fa-check" /> Daily Content Posting</li>
                <li><i className="fas fa-check" /> Custom Video Editing &amp; Scripts</li>
                <li><i className="fas fa-check" /> Multi-channel Community Moderation</li>
                <li><i className="fas fa-check" /> Brand Strategy Consulting</li>
                <li><i className="fas fa-check" /> Dedicated Account Manager</li>
                <li><i className="fas fa-check" /> GEO &amp; AI Visibility Integration</li>
              </ul>
              <Link href="/contact" className="smo-pkg-btn smo-pkg-btn--outline">
                Contact Us <i className="fas fa-arrow-right" />
              </Link>
            </div>

          </div>{/* /grid */}

          {/* Trust Strip */}
          <div className="smo-pkg-trust">
            <div className="smo-pkg-trust-item">
              <i className="fas fa-shield-alt" />
              <span>Zero Setup Fees</span>
            </div>
            <div className="smo-pkg-trust-divider" />
            <div className="smo-pkg-trust-item">
              <i className="fas fa-sync-alt" />
              <span>Cancel Anytime</span>
            </div>
            <div className="smo-pkg-trust-divider" />
            <div className="smo-pkg-trust-item">
              <i className="fas fa-headset" />
              <span>Dedicated Support</span>
            </div>
            <div className="smo-pkg-trust-divider" />
            <div className="smo-pkg-trust-item">
              <i className="fas fa-chart-bar" />
              <span>Monthly Reports</span>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}

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
                Quick Answers: Social Media Optimization
              </h2>
              <p className="mb-8 text-gray-400" style={{ textAlign: "center" }}>
                Whether you're looking for fast facts or optimizing for AI
                search tools like ChatGPT and Gemini, here is a clear, simple
                breakdown of our SMO services.
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
                  What is Social Media Optimization (SMO)?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  SMO involves optimizing business profiles and content across
                  social platforms like Facebook, Instagram, and LinkedIn. It
                  focuses on profile setups, graphic posts, and hashtag research
                  to increase organic brand visibility.
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
                  Why is organic SMO important?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Organic SMO is important because it builds direct customer
                  trust, drives free website referral traffic, and signals brand
                  credibility to search engine algorithms, supporting your
                  overall search rankings.
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
                  How does SMO differ from SEO?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  SEO focuses on optimizing a website to rank on search engine
                  results pages, while SMO optimizes social media profiles and
                  posts to increase brand visibility on social networks.
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
                  How does community management help?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Community management involves responding to user comments and
                  direct messages. This responsiveness builds client trust and
                  boosts profile activity levels, which social algorithms favor.
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
              heading: "Profile Optimizations",
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

export default SMO;
