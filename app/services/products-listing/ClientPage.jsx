'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/ContentWriting.css";
import "@/app/styles/Home.css";
import "@/app/styles/ProductsListing.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const ProductsListing = () => {
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
          "name": "Product Listing Services - MaaJanki Web Tech",
          "description": "Professional eCommerce product listing and catalog management services for Amazon, Flipkart, Myntra, Meesho, and IndiaMART.",
          "url": "https://maajankiwebtech.com/services/products-listing",
          "image": "https://maajankiwebtech.com/assets/og-image-products.jpg",
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
        <Image priority src="/images/pages/main-services-pages/Products-Listing-banner-Maajanki.webp" alt="SEO optimized product listing services for ecommerce marketplaces by MaaJanki Web Tech" title="Professional Product Listing Services for Ecommerce Growth – MaaJanki Web Tech" width="1280" height="720"/>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              eCommerce Product Listing & Catalog Management Services in India |
              Boost Marketplace Traffic & Orders
            </h1>
            <div className="aeo-definition-box">
              <p>
                Product Listing and Cataloging involves creating, structuring,
                and optimizing product detail pages on online marketplaces. By
                writing keyword-rich titles, structured bullet lists, optimized
                product descriptions, and mapping SKUs, professional cataloging
                increases product discoverability and buyer conversion rates.
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
        className="pl-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="pl-intro-card"
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
                eCommerce &amp; Catalog Management
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
                Top <span style={{ color: "#FD6A02" }}>eCommerce Product Listing Company in Bihar, India</span> – Optimizing Catalogs for Amazon, Flipkart, Meesho, Myntra &amp; IndiaMART
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
                  Are you searching for the <strong style={{ color: "#ffffff" }}>best product listing services in India</strong> to maximize your online sales and search visibility? MaaJanki Web Tech is a premier eCommerce product listing company in Bihar, servicing active marketplace sellers in Patna, Delhi, and globally.
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
                  We optimize e-commerce catalogs for Amazon, Flipkart, Meesho, Myntra, and IndiaMART using GEO techniques and structured schemas so your inventory ranks on search engines and AI shopping copilots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 to 12 Sections */}
            <section className="services-overview-section products-overview-section" style={{ display: "block", background: "none", padding: 0 }}>
        {/* Section 1 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/amazon-products-listing-maajanki.webp"
                      alt="Amazon product listing optimization by MaaJanki Web Tech"
                      title="Amazon Listing Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  1. Amazon Product Listing Optimization
                </h2>
                <h3 className="sub-heading">
                  Targeting Amazon's A9 Search Algorithm to Increase Product Discoverability
                </h3>
                <p className="content-text">
                  <strong>Amazon Product Listing Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/flipkart-products-listing-maajanki.webp"
                      alt="Flipkart product listing setup and descriptions"
                      title="Flipkart Listing Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  2. Flipkart Catalog Upload & Design
                </h2>
                <h3 className="sub-heading">
                  Creating Clear Descriptions to Build Purchase Confidence
                </h3>
                <p className="content-text">
                  <strong>Flipkart Catalog Upload & Design</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/meesho-product-listing-maajanki.webp"
                      alt="Meesho product listing setup and descriptions"
                      title="Meesho Listing Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">3. Meesho Product Cataloging</h2>
                <h3 className="sub-heading">
                  Structuring Listings for Resellers and Mobile Shoppers
                </h3>
                <p className="content-text">
                  <strong>Meesho Product Cataloging</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/myntra-products-listing-maajanki.webp"
                      alt="Myntra fashion product listing setup and descriptions"
                      title="Myntra Listing Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">4. Myntra Fashion Cataloging</h2>
                <h3 className="sub-heading">
                  Following Fashion Visual and Copy Guidelines for High Engagement
                </h3>
                <p className="content-text">
                  <strong>Myntra Fashion Cataloging</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/indiamart-products-listing-maajanki.webp"
                      alt="IndiaMART B2B product listing optimization"
                      title="IndiaMART Listing Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  5. IndiaMART B2B Listing Optimization
                </h2>
                <h3 className="sub-heading">
                  Targeting Business Keywords to Generate Quality Inquiries
                </h3>
                <p className="content-text">
                  <strong>IndiaMART B2B Listing Optimization</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/bulk-upload-products-listing-maajanki.webp"
                      alt="Bulk CSV Catalog Uploading by MaaJanki Web Tech"
                      title="Bulk CSV Uploading"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">6. Bulk CSV Catalog Uploading</h2>
                <h3 className="sub-heading">
                  Managing Large Inventory Lists Quickly and Accurately
                </h3>
                <p className="content-text">
                  <strong>Bulk CSV Catalog Uploading</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/schema-integration-products-listing-maajanki.webp"
                      alt="Product Schema Integration by MaaJanki Web Tech"
                      title="Product Schema Integration"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">7. Product Schema Integration</h2>
                <h3 className="sub-heading">
                  Integrating JSON-LD Schema to Rank in Google Shopping Search
                </h3>
                <p className="content-text">
                  <strong>Product Schema Integration</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
                </p>
                <span className="content-cta">
                  <strong>Allow your products speak loudly, rank high, and sell with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

                {/* Section 8 */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/product-listing/geo-ai-products-listing-maajanki.webp"
                      alt="GEO for Marketplace Catalogs by MaaJanki Web Tech"
                      title="GEO AI Shopping Search Optimization"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">8. Multi-Marketplace Catalog Management</h2>
                <h3 className="sub-heading">
                  Centralized Bulk Uploads & Multi-Channel Feed Syncing
                </h3>
                <p className="content-text">
                  <strong>Multi-Marketplace Catalog Management</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>optimized e-commerce product listings that highlight your product features and specs.</strong> By leveraging SEO-friendly product titles and high-resolution image alt texts, we ensure your product listing optimization aligns with the algorithms and search behavior of e-commerce marketplaces and search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your optimized product catalog pages</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
      {/* Services Grid Section */}
      <section className="product-section">
        <h2 className="product-title">Our eCommerce Cataloging Solutions</h2>
        <p className="product-subtitle">
          We write keyword-rich titles, format descriptions, and manage bulk
          catalog uploads to boost marketplace visibility.
        </p>

        <div className="product-grid">
          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-heading"></i>
            </div>
            <h3 className="product-heading">SEO Product Titles</h3>
            <p>
              We write search-friendly titles including brand names, dimensions,
              and materials to improve rankings.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-key"></i>
            </div>
            <h3 className="product-heading">Marketplace Keywords</h3>
            <p>
              We research search volume to select high-performing keywords for
              backend and tag fields.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-align-left"></i>
            </div>
            <h3 className="product-heading">Product Descriptions</h3>
            <p>
              We write persuasive descriptions detailing product benefits and
              uses to encourage purchases.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-image"></i>
            </div>
            <h3 className="product-heading">Image Upload Support</h3>
            <p>
              We edit and upload product images to ensure they meet marketplace guidelines and background standards.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3 className="product-heading">Price Configurations</h3>
            <p>
              We configure competitive pricing details, tiered discounts, and promotional deals on your catalog items.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-cubes"></i>
            </div>
            <h3 className="product-heading">Variation & Matrix Setup</h3>
            <p>
              We create multi-attribute parent-child variations for sizes, colors, styles, and pack counts.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <h3 className="product-heading">Multi-Marketplace Sync</h3>
            <p>
              We synchronize products across Amazon, Flipkart, Shopify, and eBay with centralized feed management.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-sitemap"></i>
            </div>
            <h3 className="product-heading">Category & Taxonomy Mapping</h3>
            <p>
              We assign correct browse nodes, sub-categories, and item types so buyers find your items instantly.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-boxes"></i>
            </div>
            <h3 className="product-heading">Inventory & Stock Feeds</h3>
            <p>
              We automate inventory updates, barcode (UPC/EAN/SKU) assignment, and bulk CSV catalog imports.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section
        className="marketplaces-premium-section"
        style={{
          background: "#042544",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <style>
          {`
            .marketplaces-premium-section .glow-circle {
              position: absolute;
              width: 300px;
              height: 300px;
              background: radial-gradient(circle, rgba(255, 215, 0, 0.04) 0%, rgba(0,0,0,0) 70%);
              top: -100px;
              left: -100px;
              border-radius: 50%;
              z-index: 1;
              pointer-events: none;
            }
            .marketplaces-premium-section .glow-circle-2 {
              position: absolute;
              width: 400px;
              height: 400px;
              background: radial-gradient(circle, rgba(255, 215, 0, 0.04) 0%, rgba(0,0,0,0) 70%);
              bottom: -150px;
              right: -100px;
              border-radius: 50%;
              z-index: 1;
              pointer-events: none;
            }
            .marketplaces-grid-container {
              max-width: 1250px;
              margin: 0 auto;
              position: relative;
              z-index: 2;
            }
            .marketplaces-title {
              text-align: center;
              color: #fff;
              font-size: 2.8rem;
              font-weight: 700;
              margin-bottom: 50px;
              letter-spacing: -0.5px;
            }
            .marketplace-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 20px;
            }
            @keyframes fadeInUpTool {
              from { opacity: 0; transform: translateY(25px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .marketplace-card {
              background: #111111;
              border: 2px solid #FD6A02;
              border-radius: 12px;
              padding: 12px 16px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 15px;
              cursor: pointer;
              box-shadow: 0 4px 15px rgba(255, 215, 0, 0.08);
              opacity: 0;
              animation: fadeInUpTool 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, background-color 0.3s ease;
            }
            .marketplace-card:hover {
              transform: translateY(-5px) scale(1.03);
              box-shadow: 0 8px 30px rgba(255, 215, 0, 0.35);
              background: #181818;
            }
            .marketplace-icon-wrap {
              width: 50px;
              height: 50px;
              border-radius: 8px;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              padding: 6px;
              box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease;
            }
            .marketplace-card:hover .marketplace-icon-wrap {
              transform: scale(1.08) rotate(3deg);
            }
            .marketplace-icon { width: 100%; height: 100%; object-fit: contain; }
            .marketplace-name { color: #fff; font-size: 1rem; font-weight: 700; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
            @media (max-width: 1200px) { .marketplace-grid { grid-template-columns: repeat(5, 1fr); gap: 15px; } }
            @media (max-width: 992px) { .marketplace-grid { grid-template-columns: repeat(3, 1fr); gap: 15px; } }
            @media (max-width: 768px) { .marketplace-grid { grid-template-columns: repeat(2, 1fr); } .marketplaces-title { font-size: 2rem; } }
            @media (max-width: 480px) { .marketplace-grid { grid-template-columns: 1fr; } }
          `}
        </style>

        <div className="glow-circle"></div>
        <div className="glow-circle-2"></div>

        <div className="marketplaces-grid-container">
          <h2 className="marketplaces-title">Products-listing Tools We Use</h2>
          <div className="marketplace-grid">
            {[
              { src: "/images/icons/shopify.png", label: "Shopify" },
              { src: "/images/icons/wordpress.png", label: "WooCommerce" },
              { src: "/images/icons/bigcommerce.png", label: "BigCommerce" },
              { src: "/images/icons/wix.png", label: "Wix eCommerce" },
              { src: "/images/icons/shopping-cart.png", label: "Ecwid" },
              { src: "/images/icons/box.png", label: "Sellbrite" },
              { src: "/images/icons/split-transaction.png", label: "CedCommerce" },
              { src: "/images/icons/google-logo.png", label: "Google Merchant" },
              { src: "/images/icons/amazon.png", label: "Amazon Seller" },
              { src: "/images/icons/ebay.png", label: "eBay Seller" },
            ].map((tool, index) => (
              <div key={index} className="marketplace-card" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="marketplace-icon-wrap">
                  <Image className="marketplace-icon" src={tool.src} alt={tool.label} width={50} height={50} loading="lazy" />
                </div>
                <span className="marketplace-name">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
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
          <div className="graphic-left" style={{ flex: "1 1 500px" }}>
            <h2 className="br-graphic-heading" style={{ color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif', fontSize: "clamp(2rem, 3.5vw, 2.5rem)", marginBottom: "15px", lineHeight: "1.2" }}>
              Download Our Product Listing Optimization Guide
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to list your products on top marketplaces with SEO-optimized titles, bullets, and images that convert.
            </p>
            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>Get Our Product Listing Brochure</h3>
              <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>Learn about our listing workflows, keyword frameworks, and marketplace strategies.</p>
              <div style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7" }}></i> Keyword-Optimized Product Titles
              </div>
              <div style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7" }}></i> Marketplace-Ready Image Formats
              </div>
              <div style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7" }}></i> Bulk CSV Upload-Ready Data Sheets
              </div>
              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download Listing Brochure
              </button>
              {isPopupOpen && (
                <div className="brochure-popup-overlay" onClick={closeBrochurePopup}>
                  <div className="brochure-popup" onClick={(e) => e.stopPropagation()} style={{ background: "#042544", border: "2px solid #FD6A02" }}>
                    <span className="brochure-close" onClick={closeBrochurePopup}>&times;</span>
                    <form action="https://getform.io/f/bvrmgenb" method="POST" id="brochure-form" onSubmit={(e) => { e.preventDefault(); const form = e.target; fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } }).then((res) => { if (res.ok) { alert("Thank you! Your brochure is downloading."); setIsPopupOpen(false); window.open("/brochures/MaaJanki-Web-Tech-Branding-Brochure.pdf", "_blank"); } else { alert("Submission error. Please try again."); } }); }}>
                      <h3 className="brochure-title" style={{ color: "#ffffff" }}>Download Listing Guide</h3>
                      <input type="text" name="name" placeholder="Your Name *" required />
                      <input type="email" name="email" placeholder="Your Email *" required />
                      <input type="tel" name="phone" placeholder="Phone Number *" required />
                      <button type="submit" className="brochure-submit-btn" style={{ background: "#FD6A02", color: "#ffffff", borderRadius: "25px" }}>Download Now</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="graphic-right" style={{ flex: "1 1 550px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {[
                { icon: "fas fa-list-alt", title: "Keyword-Optimized Titles" },
                { icon: "fas fa-tags", title: "Bullet Point Copywriting" },
                { icon: "fas fa-image", title: "Marketplace Image Prep" },
                { icon: "fas fa-file-excel", title: "Bulk CSV Upload Sheets" },
                { icon: "fas fa-search", title: "A+ / EBC Content" },
                { icon: "fas fa-star", title: "Review Strategy Planning" },
                { icon: "fas fa-chart-line", title: "Sales Rank Optimization" },
                { icon: "fas fa-globe", title: "Multi-Marketplace Sync" },
              ].map((item, idx) => (
                <div key={idx} className="branding-brochure-service-card" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px", padding: "24px 16px", textAlign: "center", transition: "all 0.3s ease", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", minHeight: "115px" }}>
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
        <span className="jobready-heading-small">Structured Execution</span>
        <h2 className="jobready-heading-main">Our Product Listing Workflow</h2>
        <div className="jobready-steps">
          <div className="jobready-step">
            <span className="jobready-step-num">01</span>
            <div className="jobready-circle"><i className="fas fa-search"></i></div>
            <p>1. Keyword Research</p>
          </div>
          <div className="jobready-step">
            <span className="jobready-step-num">02</span>
            <div className="jobready-circle"><i className="fas fa-pen-nib"></i></div>
            <p>2. Title &amp; Copy Writing</p>
          </div>
          <div className="jobready-step">
            <span className="jobready-step-num">03</span>
            <div className="jobready-circle"><i className="fas fa-images"></i></div>
            <p>3. Image Optimization</p>
          </div>
          <div className="jobready-step">
            <span className="jobready-step-num">04</span>
            <div className="jobready-circle"><i className="fas fa-file-csv"></i></div>
            <p>4. CSV Sheet Prep</p>
          </div>
          <div className="jobready-step">
            <span className="jobready-step-num">05</span>
            <div className="jobready-circle"><i className="fas fa-cloud-upload-alt"></i></div>
            <p>5. Bulk Upload</p>
          </div>
          <div className="jobready-step">
            <span className="jobready-step-num">06</span>
            <div className="jobready-circle"><i className="fas fa-chart-line"></i></div>
            <p>6. Rank Monitoring</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="branding-pricing-section" style={{ background: "#FD6A02", padding: "85px 20px", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ background: "#042544", border: "3px solid #ffffff", borderRadius: "24px", padding: "50px 40px", boxShadow: "0 25px 60px rgba(4, 36, 66, 0.5)" }}>
            <div className="branding-pricing-header" style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ display: "inline-block", background: "#FD6A02", color: "#ffffff", padding: "8px 24px", borderRadius: "50px", fontSize: "13px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", border: "2px solid #ffffff" }}>Pricing Plans</span>
              <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: "800", fontFamily: '"Outfit", sans-serif' }}>Transparent Product Listing Packages</h2>
              <p style={{ color: "#e2e8f0", fontSize: "16px" }}>Professional listing management with keyword-optimized copy. No hidden fees.</p>
            </div>
            <div className="branding-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Starter Catalog</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>₹7,999 <span style={{ color: "#64748b", fontSize: "1rem" }}>/ One-time</span></div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Up to 25 product listings</li>
                    <li>Keyword-optimized titles</li>
                    <li>Bullet point copywriting</li>
                    <li>CSV upload sheet delivery</li>
                    <li>1 marketplace platform</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>Get Started</Link>
              </div>
              <div className="branding-pricing-card featured" style={{ background: "#042544", border: "3px solid #FD6A02", borderRadius: "20px", padding: "35px 25px", position: "relative", color: "#ffffff", boxShadow: "0 15px 35px rgba(253, 106, 2, 0.4)" }}>
                <span className="branding-pricing-badge" style={{ background: "#FD6A02", color: "#ffffff", fontWeight: "800" }}>⭐ Recommended</span>
                <div>
                  <h3 style={{ color: "#ffffff", fontWeight: "800" }}>Growth Catalog</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2.2rem" }}>₹18,999 <span style={{ color: "#cbd5e1", fontSize: "1rem" }}>/ One-time</span></div>
                  <ul className="branding-pricing-list" style={{ color: "#e2e8f0" }}>
                    <li>Up to 100 product listings</li>
                    <li>Full A+ content creation</li>
                    <li>Image background removal</li>
                    <li>Multi-marketplace upload</li>
                    <li>Review strategy included</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#FD6A02", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>Get Started</Link>
              </div>
              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Enterprise Catalog</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>Custom Pricing</div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>500+ product listings</li>
                    <li>Dedicated account manager</li>
                    <li>Full marketplace sync</li>
                    <li>Ongoing listing audits</li>
                    <li>Priority support</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Section */}
      <section className="service-gradient-black-section" style={{ background: "linear-gradient(135deg, #042544 0%, #021224 100%)", padding: "85px 20px", position: "relative", overflow: "hidden", borderTop: "3px solid #FD6A02" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "2px solid #FD6A02", borderRadius: "24px", padding: "50px 40px", boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ display: "inline-block", background: "#FD6A02", color: "#ffffff", padding: "8px 24px", borderRadius: "50px", fontSize: "13px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", boxShadow: "0 4px 15px rgba(253, 106, 2, 0.4)" }}>AI Search Optimization (GEO)</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif', margin: "0 0 15px" }}>Quick Answers: Product Listing</h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>Fast facts for AI search tools like ChatGPT and Gemini about our marketplace product listing services.</p>
            </div>
            <div className="geo-questions-grid">
              {[
                { q: "What is Product Listing Optimization?", a: "Product listing optimization is the process of crafting keyword-rich titles, bullet points, and descriptions to improve product visibility and conversion rates on marketplaces like Amazon, Flipkart, and Shopify." },
                { q: "Why are keyword-optimized titles important?", a: "Marketplace search algorithms rank products based on keyword relevance in titles. An optimized title directly boosts impressions, clicks, and sales rank." },
                { q: "What marketplaces do you list products on?", a: "We list products on Amazon, Flipkart, Meesho, Shopify, WooCommerce, BigCommerce, eBay, Google Merchant Center, and other platforms." },
                { q: "How does GEO help product listings?", a: "GEO formats your product copy so AI shopping assistants like Google Gemini and ChatGPT can understand, cite, and recommend your products to shoppers searching online." },
              ].map((item, idx) => (
                <div key={idx} style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                  <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>{item.q}</h4>
                  <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Product Listing Services</h2>
        </div>
        <div className="faq-grid">
          {[
            { id: "faq1", question: "What platforms do you list products on?", answer: "We list products on Amazon, Flipkart, Meesho, Shopify, WooCommerce, BigCommerce, eBay, Etsy, Wix eCommerce, and Google Merchant Center." },
            { id: "faq2", question: "How do you write product titles?", answer: "We research high-volume, high-intent keywords using tools like Helium 10, Jungle Scout, and Google Keyword Planner, then craft keyword-rich titles within marketplace character limits." },
            { id: "faq3", question: "Do you handle Amazon A+ Content?", answer: "Yes. We create Enhanced Brand Content (EBC) and A+ Content for Amazon brand-registered sellers, using rich visuals and structured comparison tables." },
            { id: "faq4", question: "What image formats do you prepare?", answer: "We prepare marketplace-compliant images: white background main images (2000x2000 minimum), lifestyle shots, and infographic images per Amazon, Flipkart, and Shopify standards." },
            { id: "faq5", question: "Do you create CSV bulk upload sheets?", answer: "Yes. We prepare marketplace-ready bulk upload CSV files formatted to Amazon Seller Central, Flipkart Seller Hub, and Shopify import templates." },
            { id: "faq6", question: "How many products can you list per day?", answer: "Our team can process 50 to 200 product listings per day, depending on content complexity and image preparation requirements." },
            { id: "faq7", question: "Do you write product descriptions in Hindi?", answer: "Yes. We offer bilingual listing support in both English and Hindi for marketplaces serving Indian regional customers." },
            { id: "faq8", question: "Can you list variations (size, color)?", answer: "Yes. We set up parent-child variation relationships for size, color, and material variations across all major marketplace platforms." },
            { id: "faq9", question: "Do you optimize existing listings?", answer: "Yes. We audit your current listings and rewrite underperforming titles, bullets, and descriptions with better keyword targeting." },
            { id: "faq10", question: "What is bullet point copywriting?", answer: "Bullet points are structured product highlights emphasizing key features and benefits, formatted to pass marketplace quality filters and persuade buyers." },
            { id: "faq11", question: "Do you handle product category mapping?", answer: "Yes. We map each product to its most accurate category and subcategory on every marketplace to maximize algorithm discoverability." },
            { id: "faq12", question: "Will you provide the final CSV files to us?", answer: "Yes, we deliver the complete, formatted CSV/Excel upload sheets for your records so that you always have a backup of your product database." },
            { id: "faq13", question: "Do you edit product photos or graphics?", answer: "We handle standard image preparation, which includes resizing, cropping, and converting backgrounds to solid white to meet strict marketplace requirements (like Amazon's image policies)." },
            { id: "faq14", question: "Can we review the listing drafts before they go live?", answer: "Yes, definitely. We share all keyword-optimized titles, bullets, and description drafts in a Google Sheet or Excel file for your review and approval before any bulk uploads begin." },
            { id: "faq15", question: "What is GEO for eCommerce catalogs?", answer: "GEO (Generative Engine Optimization) means structuring your product copy and FAQs so that AI search assistants (like ChatGPT, Gemini, and shopping copilots) can read, understand, and recommend your products to shoppers." },
          ].map((faq, index) => (
            <div className="faq-item" key={faq.id}>
              <input type="checkbox" id={faq.id} className="faq-toggle" />
              <label htmlFor={faq.id} className="faq-question">
                <span className="faq-number">{index + 1}</span>
                <span className="faq-question-text">{faq.question}</span>
                <svg className="faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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

export default ProductsListing;
