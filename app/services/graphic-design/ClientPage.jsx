'use client';

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/Branding.css";
import "@/app/styles/Home.css";
import "@/app/styles/GraphicDesign.css";

const GraphicDesign = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* SEO & GEO Optimization Metadata */}
      {
        /* JSON-LD Schema */
      }<script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Graphic Design Services - MaaJanki Web Tech",
          "description": "Professional graphic design services including logo design, brand identity kits, social media graphics, print layouts, and visual ads.",
          "url": "https://maajankiwebtech.com/services/graphic-design",
          "image": "https://maajankiwebtech.com/assets/og-image-graphic.jpg",
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
        <Image priority src="/images/pages/main-services-pages/graphic-design-banner-image-Maajanki-Web-Tech.webp" alt="Graphic Design Services by MaaJanki Web Tech" title="Professional Graphic Design Services for Branding & Marketing | MaaJanki Web Tech" width="1280" height="720" />

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Best Graphic Design Services in India | Custom Logo Design, Social Media Posts & Corporate Visuals</h1>
            <div className="aeo-definition-box">
              <p>
                Graphic Design is the professional practice of projecting ideas and messages with visual and textual content. By combining typography, color psychology, custom illustrations, and layout design, professional graphic design creates visual branding assets (logos, brochures, social posts) that improve engagement and recall.
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
        className="graphic-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="graphic-intro-card"
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
                Graphic Design &amp; Visual Assets
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
                Top-Rated <span style={{ color: "#FD6A02" }}>Graphic Design Company in Bihar, India</span> – Delivering Visually Stunning and High-Recall Creatives
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
                  Are you looking for the <strong style={{ color: "#ffffff" }}>best graphic design agency in Bihar or India</strong>? MaaJanki Web Tech is your professional design partner, based in Bagaha, Bihar. We design vector logos, social media graphics, corporate brochures, and digital banner layouts for businesses in Patna, Delhi, and globally.
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
                  In visual-first marketplaces, quality designs determine customer engagement. We avoid generic templates and build custom visual assets from scratch. By structuring layout design hierarchies and researching target color schemes, we establish brand recall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 to 12 Sections */}
      <section className="services-overview-section graphic-overview-section" style={{ display: "block", background: "none", padding: 0 }}>
        {/* Section 1 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)", }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Graphic-design/about-us-graphic-design-image-Maajanki.webp"
                      alt="Logo design and branding assets by MaaJanki Web Tech"
                      title="Logo and Brand Identity Design"
                      loading="lazy"
                      width={150} height={50} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">1. Custom Logo & Brand Design</h2>
                <h3 className="sub-heading">Establishing Brand Identity Through Memorable Visual Marks</h3>
                <p className="content-text">
                  <strong>Custom Logo & Brand Design</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Graphic-design/Why-Choose-us-graphic-design-image-Maajanki.webp"
                      alt="Social media graphic design posts"
                      title="Social Media Creative Design"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">2. Social Media Creative Design</h2>
                <h3 className="sub-heading">Designing Engaging Graphics Optimized for Feed Scroll-Throughs</h3>
                <p className="content-text">
                  <strong>Social Media Creative Design</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Graphic-design/print_marketing_design.webp"
                      alt="Brochures, flyers and print marketing materials"
                      title="Print & Marketing Material Design"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">3. Print & Marketing Material Design</h2>
                <h3 className="sub-heading">Designing Brochures, Flyers, and Stationery for Business Growth</h3>
                <p className="content-text">
                  <strong>Print & Marketing Material Design</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Graphic-design/custom_infographics_data.webp"
                      alt="Infographics and visual data diagrams"
                      title="Custom Infographics & Visual Data"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">4. Custom Infographics & Visual Data</h2>
                <h3 className="sub-heading">Translating Complex Data into Easy-to-Understand Graphics</h3>
                <p className="content-text">
                  <strong>Custom Infographics & Visual Data</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Graphic-design/motion_graphics_creatives.webp"
                      alt="Motion graphics and animation explainer layouts"
                      title="Motion Graphics & Video Creatives"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">5. Motion Graphics & Video Creatives</h2>
                <h3 className="sub-heading">Animated Banners and Promotional Video Layouts for Feeds</h3>
                <p className="content-text">
                  <strong>Motion Graphics & Video Creatives</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Graphic-design/packaging_label_graphics.webp"
                      alt="Packaging and labeling design mockups"
                      title="Packaging & Product Label Graphics"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">6. Packaging & Product Label Graphics</h2>
                <h3 className="sub-heading">Designing Product Boxes and Labels to Stand Out on Shelves</h3>
                <p className="content-text">
                  <strong>Packaging & Product Label Graphics</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Graphic-design/rebranding_identity_refresh.webp"
                      alt="Rebranding and visual identity refresh concepts"
                      title="Rebranding & Visual Identity Refresh"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">7. Rebranding & Visual Identity Refresh</h2>
                <h3 className="sub-heading">Modernizing Outdated Corporate Graphics for Current Markets</h3>
                <p className="content-text">
                  <strong>Rebranding & Visual Identity Refresh</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Graphic-design/geo_image_optimization.webp"
                      alt="GEO optimization for image search and AI indexing"
                      title="GEO Optimization for Image Data"
                      loading="lazy"
                      width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">8. GEO Optimization for Image Data</h2>
                <h3 className="sub-heading">Optimizing Alt Text and Image Metadata for AI Search Tools</h3>
                <p className="content-text">
                  <strong>GEO Optimization for Image Data</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized graphic design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>visually stunning vector designs and marketing collaterals that highlight your product aesthetics.</strong> By leveraging custom color palette selection and typography hierarchy, we ensure your graphic design aligns with the algorithms and search behavior of modern visual platforms and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-designed marketing assets</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
      <section className="graphic-section">
        <h2 className="graphic-title">Our Graphic Design Solutions</h2>
        <p className="graphic-subtitle">
          We design logos, social media posts, brochures, and digital marketing graphics to support your branding.
        </p>

        <div className="graphic-grid">
          {[
            { icon: "fas fa-pen-nib", title: "Logo & Brand Design", desc: "Custom vector logos, wordmarks, and brand identity kits built to reflect your business personality." },
            { icon: "fas fa-layer-group", title: "Social Media Graphics", desc: "Eye-catching post designs, story templates, carousels, and reels covers for Instagram, Facebook & LinkedIn." },
            { icon: "fas fa-print", title: "Print Layout Design", desc: "Print-ready brochures, flyers, leaflets, business cards, and roll-up banners for offline marketing." },
            { icon: "fas fa-desktop", title: "UI Mockup Design", desc: "High-fidelity website and app interface prototypes designed for user clarity and conversion." },
            { icon: "fas fa-paint-brush", title: "Custom Illustrations", desc: "Hand-crafted vector illustrations, icons, mascots, and character art tailored to your brand story." },
            { icon: "fas fa-film", title: "Motion Graphics", desc: "Animated intros, explainer video visuals, ad creatives, and GIF banners for digital campaigns." },
            { icon: "fas fa-box-open", title: "Packaging & Label Design", desc: "Product box designs, sticker labels, pouches, and packaging mockups that stand out on shelves." },
            { icon: "fas fa-chart-pie", title: "Infographic Design", desc: "Data-rich visual summaries, process flowcharts, and comparison graphics for blogs and presentations." },
            { icon: "fas fa-bullhorn", title: "Ad Banner & Campaign Design", desc: "Google Display Ads, Meta Ad creatives, and promotional banners designed for high click-through rates." },
            { icon: "fas fa-id-badge", title: "Brand Identity Kit", desc: "Complete brand guidelines covering logo usage, color palette, typography, and visual standards." },
            { icon: "fas fa-file-powerpoint", title: "Presentation Design", desc: "Corporate pitch decks, investor presentations, and proposal templates with premium visual design." },
            { icon: "fas fa-sync-alt", title: "Rebranding & Visual Refresh", desc: "Modernize outdated logos, update color systems, and refresh your entire visual identity for today's market." },
          ].map((service, index) => (
            <div className="graphic-box" key={index}>
              <div className="graphic-icon"><i className={service.icon}></i></div>
              <h3 className="graphic-heading">{service.title}</h3>
              <p>{service.desc}</p>
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
              Download Our Creative Graphic Design Portfolio &amp; Guide
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to build organic brand authority. We design professional logos and flyers to connect with your target customers.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Download Our Graphic Design Portfolio
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Learn about our design workflows, vector logo assets, and packaging guidelines in our brochure.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Custom Logo and Typography Outlines
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Social Media Graphic Checklists
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Print Collateral Layout Guidelines
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download Graphic Brochure
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
                            service: "Brochure Download - Graphic Design",
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
                        Download Design Guide
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
                { icon: "fas fa-paint-brush", title: "Logo & Brand Identity" },
                { icon: "fas fa-image", title: "Social Media Graphics" },
                { icon: "fas fa-bullhorn", title: "Marketing Creatives" },
                { icon: "fas fa-file-alt", title: "Print Layout Design" },
                { icon: "fas fa-globe", title: "Website UI Graphic Mockups" },
                { icon: "fas fa-video", title: "Motion Graphics Visuals" },
                { icon: "fas fa-object-group", title: "Infographics & Vector Art" },
                { icon: "fas fa-layer-group", title: "Packaging Graphic Design" },
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
        <h2 className="jobready-heading-small">How We Work</h2>
        <h2 className="jobready-heading-main">Our Proven Graphic Design Process Flow</h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-search"></i></div>
            <p>1. Target Brand Research</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-lightbulb"></i></div>
            <p>2. Strategy Setup</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-palette"></i></div>
            <p>3. Concept Sketches</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-desktop"></i></div>
            <p>4. Visual Layouts</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-check-double"></i></div>
            <p>5. Client Revisions</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle"><i className="fas fa-rocket"></i></div>
            <p>6. Final Delivery</p>
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
                Transparent Graphic Design Packages
              </h2>
              <p style={{ color: "#e2e8f0", fontSize: "16px" }}>
                Select a design plan structured for your branding goals. No hidden setup fees.
              </p>
            </div>

            <div className="branding-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Startup Identity Kit</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>
                    ₹7,999 <span style={{ color: "#64748b", fontSize: "1rem" }}>/ One-time</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Custom Logo Design Concept</li>
                    <li>Color Palette Selections</li>
                    <li>Corporate Font Guide</li>
                    <li>Business Card Layout</li>
                    <li>High-resolution files (PNG/PDF)</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card featured" style={{ background: "#042544", border: "3px solid #FD6A02", borderRadius: "20px", padding: "35px 25px", position: "relative", color: "#ffffff", boxShadow: "0 15px 35px rgba(253, 106, 2, 0.4)" }}>
                <span className="branding-pricing-badge" style={{ background: "#FD6A02", color: "#ffffff", fontWeight: "800" }}>⭐ Recommended</span>
                <div>
                  <h3 style={{ color: "#ffffff", fontWeight: "800" }}>Corporate Identity Kit</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2.2rem" }}>
                    ₹17,999 <span style={{ color: "#cbd5e1", fontSize: "1rem" }}>/ One-time</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#e2e8f0" }}>
                    <li>3 Custom Logo Concepts</li>
                    <li>Color &amp; Typography Guidelines</li>
                    <li>Business Card &amp; Letterhead</li>
                    <li>Social Media Brand Templates</li>
                    <li>Scalable Vector Source Files</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#FD6A02", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Enterprise Design</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>Custom Pricing</div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Custom Brochure &amp; Print Layouts</li>
                    <li>Packaging &amp; Product Label Graphics</li>
                    <li>Social Media monthly templates</li>
                    <li>Motion Graphics explainer ads</li>
                    <li>Continuing Design Consulting</li>
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
                Quick Answers: Graphic Design
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear, simple breakdown of our graphic design services.
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
                  What is Graphic Design?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Graphic design is the practice of projecting ideas and messages with visual and textual content. It involves logo design, color selection, and typography to build visual assets.
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
                  Why is custom Logo Design important?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Custom logo design is important because it reflects unique business values, establishes visual brand recall, and helps differentiate the brand from competitors.
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
                  What are scalable vector files?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Vector files (AI, EPS, SVG) use mathematical formulas to scale designs to any size (from business cards to billboards) without losing resolution quality.
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
                  How do you optimize image data for AI search?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  We optimize image file names and write descriptive alt text to help AI crawlers index visual assets, supporting brand search visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Graphic Design</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What is Logo & Brand Identity Design?",
              answer: "It is the creation of visual elements (logos, color schemes, typography) that define a business's image and values."
            },
            {
              id: "faq2",
              question: "What is the difference between raster and vector graphics?",
              answer: "Raster graphics (JPG/PNG) are made of pixels and lose quality when scaled, while vector graphics (AI/SVG) scale infinitely without loss."
            },
            {
              id: "faq3",
              question: "What print design services do you offer?",
              answer: "We design brochures, flyers, business cards, letterheads, packaging boxes, banners, and marketing pamphlets."
            },
            {
              id: "faq4",
              question: "How long does a graphic design project take?",
              answer: "Logo kits take 3 to 5 days, while complete corporate visual systems require 2 to 3 weeks."
            },
            {
              id: "faq5",
              question: "Do you design custom social media posts?",
              answer: "Yes, we design custom post graphics, carousels, and banner graphics for Facebook, Instagram, and LinkedIn."
            },
            {
              id: "faq6",
              question: "What files do you deliver on completion?",
              answer: "We deliver vector source files (AI, EPS), layered files (PSD), and high-resolution images (PNG, PDF)."
            },
            {
              id: "faq7",
              question: "Can you modernize our existing business logo?",
              answer: "Yes. We offer logo refresh and rebranding services to modernize outdated visual assets."
            },
            {
              id: "faq8",
              question: "Why do you use color psychology in design?",
              answer: "Colors evoke specific emotional responses. We align color palettes with your brand messaging to build target customer trust."
            },
            {
              id: "faq9",
              question: "What is included in print-ready files?",
              answer: "Print-ready files are designed in CMYK color format with bleed lines and crop marks, ready for professional printing."
            },
            {
              id: "faq10",
              question: "Do you write copy for brochures and infographics?",
              answer: "Yes. We have professional writers who write clear, SEO-friendly descriptions to support visual layouts."
            },
            {
              id: "faq11",
              question: "How do we start a project with MaaJanki Web Tech?",
              answer: "Contact us at info@maajankiwebtech.com or click 'Get a Free Consultation' to share design details."
            },
            {
              id: "faq12",
              question: "Are fonts included in the final delivery?",
              answer: "We recommend commercial or open-source fonts (Google Fonts) and outline instructions for their use."
            },
            {
              id: "faq13",
              question: "Do you design packaging labels?",
              answer: "Yes, we design custom product labels, box graphics, and shipping label templates matching your guidelines."
            },
            {
              id: "faq14",
              question: "Can we review design drafts before final files?",
              answer: "Yes. We share drafts through Figma or PDF files for review and feedback rounds."
            },
            {
              id: "faq15",
              question: "What is GEO for graphic design?",
              answer: "GEO involves optimizing image descriptions and alt tags so AI engines can discover and index visual assets."
            }
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

export default GraphicDesign;
