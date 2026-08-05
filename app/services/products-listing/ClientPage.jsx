'use client';

import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/ContentWriting.css";
import "@/app/styles/Home.css";
import "@/app/styles/ProductsListing.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const ProductsListing = () => {
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

      {/* Page Introduction Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="alt-font inner-heading">
                Top{" "}
                <strong>
                  eCommerce Product Listing Company in Bihar, India
                </strong>{" "}
                – Optimizing Catalogs for Amazon, Flipkart, Meesho, Myntra &
                IndiaMART
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you searching for the <strong>best product listing services in India</strong> to maximize your online sales and search visibility? MaaJanki Web Tech is a premier <strong>eCommerce product listing company in Bihar</strong>, headquartered in Bagaha and servicing active marketplace sellers in Patna, Delhi, and globally. We specialize in end-to-end catalog management services, including custom keyword-rich product title optimization, clear and compelling bullet points, and accurate marketplace catalog uploading. Our specialists ensure your inventory is structured to match modern buyer search patterns on leading retail channels, including Amazon, Flipkart, Meesho, Myntra, and IndiaMART B2B directories.
              </p>

              <p className="text-medium line-height-28 sm-line-height-26">
                Success in digital commerce relies on aligning with platform-specific search algorithms. We move beyond generic, low-quality automated descriptions, crafting professionally researched, search-optimized product copy that triggers buyer actions and answers customer queries early. Our team researches high-frequency buyer search queries, maps products to correct marketplace browse nodes, and formats backend tags to build immediate search visibility. By adhering strictly to marketplace image standards, variation SKU grouping rules, and listing guidelines, we prevent inventory suppression, improve overall click-through rates, and enhance organic search engine ranking positions.
              </p>

              <p className="text-medium line-height-28 sm-line-height-26">
                Furthermore, we optimize your e-commerce product catalogs to appeal to both traditional search engines and next-generation AI shopping copilots. Through Generative Engine Optimization (GEO) and structured schema integration, we make your product specifications and aggregate ratings readable by AI engines like ChatGPT, Gemini, and search copilots. Whether you require bulk product upload services using master CSV files, lead-optimized cataloging on IndiaMART, or fashion catalog management for Myntra, MaaJanki Web Tech provides the professional support to grow your seller account metrics, reduce returns, and drive organic online revenue.
              </p>
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
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="product-title">Our eCommerce Cataloging Solutions</h2>
                <h3 className="product-heading">SEO Product Titles</h3>
                <p className="content-text">
                  <strong>Our eCommerce Cataloging Solutions</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized product listing optimization is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
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
              We edit and upload product images to ensure they meet marketplace
              guidelines and background standards.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3 className="product-heading">Price Configurations</h3>
            <p>
              We configure competitive pricing details and discounts on your
              seller panels.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-sitemap"></i>
            </div>
            <h3 className="product-heading">Category Mapping</h3>
            <p>
              We select accurate product categories and browse nodes to ensure
              your catalog displays correctly.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-boxes"></i>
            </div>
            <h3 className="product-heading">Variant Setup</h3>
            <p>
              We manage color, size, and model variations cleanly on a single
              listing to prevent customer confusion.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="product-heading">SEO Metadata Tags</h3>
            <p>
              We write meta descriptions and titles to improve catalog
              visibility on Google search results.
            </p>
          </div>

          <div className="product-box">
            <div className="product-icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <h3 className="product-heading">Bulk Data Entry</h3>
            <p>
              We format bulk Excel data to upload large catalogs quickly,
              avoiding formatting errors.
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
              from {
                opacity: 0;
                transform: translateY(25px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
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
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                          box-shadow 0.4s ease, 
                          background-color 0.3s ease;
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
            .marketplace-icon {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
            .marketplace-name {
              color: #fff;
              font-size: 1rem;
              font-weight: 700;
              margin: 0;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            @media (max-width: 1200px) {
              .marketplace-grid {
                grid-template-columns: repeat(5, 1fr);
                gap: 15px;
              }
            }
            @media (max-width: 992px) {
              .marketplace-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
              }
            }
            @media (max-width: 768px) {
              .marketplace-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .marketplaces-title {
                font-size: 2rem;
              }
            }
            @media (max-width: 480px) {
              .marketplace-grid {
                grid-template-columns: 1fr;
              }
            }
          `}
        </style>
        
        <div className="glow-circle"></div>
        <div className="glow-circle-2"></div>

        <div className="marketplaces-grid-container">
          <h2 className="marketplaces-title">
            Products-listing Tools We Use
          </h2>

          <div className="marketplace-grid">
            {[
              { src: "/images/icons/shopify.png", label: "Shopify" },
              { src: "/images/icons/wordpress.png", label: "WooCommerce" },
              { src: "/images/icons/bigcommerce.png", label: "BigCommerce" },
              { src: "https://img.icons8.com/color/96/wix.png", label: "Wix eCommerce" },
              { src: "/images/icons/shopping-cart.png", label: "Ecwid" },
              { src: "/images/icons/box.png", label: "Sellbrite" },
              { src: "/images/icons/split-transaction.png", label: "CedCommerce" },
              { src: "/images/icons/google-logo.png", label: "Google Merchant" },
              { src: "/images/icons/amazon.png", label: "Amazon Seller" },
              { src: "/images/icons/ebay.png", label: "eBay Seller" },
            ].map((tool, index) => (
              <div
                key={index}
                className="marketplace-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="marketplace-icon-wrap">
                  <Image
                    className="marketplace-icon"
                    src={tool.src}
                    alt={`${tool.label} logo`}
                    loading="lazy"
                   width={150} height={50} />
                </div>
                <h3 className="marketplace-name" title={tool.label}>{tool.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our eCommerce Cataloging & Listing Guide
            </h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to build organic seller visibility.
              We optimize product listings and format Excel feeds to connect
              with target customers.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Download Our Cataloging Guide
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our listing workflows, search-friendly titles, and
                image size rules in our brochure.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Marketplace Category
                Mapping Guides
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Product Description
                Writing Guidelines
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Bulk SKU Formatting
                Checklists
              </div>

              <Link href="/contact"
                className="graphic-brochure-btn"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                Contact for eCommerce Solutions
              </Link>
            </div>
          </div>

          <div className="graphic-right">
            <div className="graphic-service-grid">
              {[
                { icon: "fas fa-heading", title: "Product Title Optimization" },
                { icon: "fas fa-key", title: "Marketplace Search Tags" },
                {
                  icon: "fas fa-align-left",
                  title: "Detailed Description Copy",
                },
                { icon: "fas fa-image", title: "Image Guideline Edits" },
                {
                  icon: "fas fa-dollar-sign",
                  title: "Competitor Price Audits",
                },
                { icon: "fas fa-sitemap", title: "Category Mapping" },
                { icon: "fas fa-boxes", title: "Variation Listings" },
                {
                  icon: "fas fa-cloud-upload-alt",
                  title: "Bulk CSV Catalog Uploads",
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

      {/* Process Section */}
      <section className="jobready-workflow">
        <h2 className="jobready-heading-small">How We Work</h2>
        <h2 className="jobready-heading-main">
          Our Proven eCommerce Cataloging Process Flow
        </h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. Catalog Auditing</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. Keywords Research</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-pen"></i>
            </div>
            <p>3. Writing Descriptions</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-image"></i>
            </div>
            <p>4. Image Preparations</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p>5. Bulk CSV Uploading</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-rocket"></i>
            </div>
            <p>6. Catalog Launch</p>
          </div>
        </div>
      </section>

      {/* Blog & Educational Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Why Professional Product Cataloging Is Essential for Seller
                Success
              </h2>
              <p>
                A professional product listing distinguishes your brand,
                establishing buyer trust and search visibility. While basic
                listings offer fast setups, they suffer from unoptimized details
                and search errors. Custom optimized descriptions ensure your SKU
                details, bullet highlights, and category tags remain accurate
                across Amazon and Flipkart, reinforcing your professional
                standards and supporting sales growth.
              </p>

              <h3 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Understanding the Impact of Listing Quality on Shopping
                Conversions
              </h3>
              <p>
                Listing quality determines how easily buyers understand your
                product's value. Clean bullet features, high-resolution images,
                and clear descriptions ensure product details are obvious and
                engaging, reducing buyer hesitation on marketplace listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Premium Pricing Section */}
      <section className="cw-pricing-section">
        <div className="cw-pricing-inner">
          <div className="cw-pricing-header">
            <span className="cw-pricing-badge">Pricing Plans</span>
            <h2 className="cw-pricing-title">Transparent eCommerce Listing Packages</h2>
            <p className="cw-pricing-subtitle">
              Select a cataloging plan structured for your inventory size. Scale your brand authority across major e-commerce marketplaces with optimized, high-converting product pages.
            </p>
          </div>

          <div className="cw-pricing-grid">
            {/* Plan 1 */}
            <div className="cw-price-card">
              <div className="cw-price-card-top">
                <div className="cw-price-icon">🚀</div>
                <h3 className="cw-price-name">Startup Catalog Kit</h3>
                <p className="cw-price-desc">
                  Perfect for local sellers and new brands looking to list their initial inventory on a major marketplace.
                </p>
                <div className="cw-price-amount">
                  <span className="cw-currency">₹</span>
                  <span className="cw-price-num">9,999</span>
                  <span className="cw-price-period">/ One-time</span>
                </div>
              </div>
              <ul className="cw-price-features">
                <li><span className="cw-check">✔</span> Up to 50 Product Listings</li>
                <li><span className="cw-check">✔</span> Custom Title & Bullet Optimization</li>
                <li><span className="cw-check">✔</span> Standard Description Writing</li>
                <li><span className="cw-check">✔</span> Basic Image Resizing & Guidelines Check</li>
                <li><span className="cw-check">✔</span> Upload Support to 1 Marketplace</li>
                <li><span className="cw-check">✔</span> Variation Parent-Child Mapping</li>
              </ul>
              <Link href="/contact" className="cw-price-btn cw-price-btn-outline">
                Get Started
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="cw-price-card cw-price-card-featured">
              <span className="cw-price-popular-badge">🔥 Recommended</span>
              <div className="cw-price-card-top">
                <div className="cw-price-icon">🏢</div>
                <h3 className="cw-price-name">Seller Growth Kit</h3>
                <p className="cw-price-desc">
                  Ideal for established businesses expanding across multiple retail sales channels and seeking search visibility.
                </p>
                <div className="cw-price-amount">
                  <span className="cw-currency">₹</span>
                  <span className="cw-price-num">19,999</span>
                  <span className="cw-price-period">/ One-time</span>
                </div>
              </div>
              <ul className="cw-price-features">
                <li><span className="cw-check">✔</span> Up to 150 Product Listings</li>
                <li><span className="cw-check">✔</span> High-Intent Keyword Optimization</li>
                <li><span className="cw-check">✔</span> Detailed Description Copy (100+ words/item)</li>
                <li><span className="cw-check">✔</span> Full Category Browse Node Mapping</li>
                <li><span className="cw-check">✔</span> Upload Support to 2 Marketplaces</li>
                <li><span className="cw-check">✔</span> Complete Variant & SKU Setup</li>
              </ul>
              <Link href="/contact" className="cw-price-btn cw-price-btn-filled">
                Get Started
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="cw-price-card">
              <div className="cw-price-card-top">
                <div className="cw-price-icon">🛒</div>
                <h3 className="cw-price-name">Enterprise Catalog Management</h3>
                <p className="cw-price-desc">
                  Custom services for high-volume catalogs, ongoing inventory management, and search expansions.
                </p>
                <div className="cw-price-amount">
                  <span className="cw-price-num">Custom</span>
                </div>
              </div>
              <ul className="cw-price-features">
                <li><span className="cw-check">✔</span> Unlimited SKU Uploads</li>
                <li><span className="cw-check">✔</span> Multi-Channel Sync & Variation Setup</li>
                <li><span className="cw-check">✔</span> Amazon A+ Content & EBC Setup</li>
                <li><span className="cw-check">✔</span> Google Shopping Schema Integration</li>
                <li><span className="cw-check">✔</span> Suppressed Listing Resolution</li>
                <li><span className="cw-check">✔</span> Dedicated Catalog Account Manager</li>
              </ul>
              <Link href="/contact" className="cw-price-btn cw-price-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="cw-pricing-trust">
            <div className="cw-trust-item">
              <span>🎯</span> 100% Data Accuracy
            </div>
            <div className="cw-trust-item">
              <span>🔄</span> Multi-Channel Support
            </div>
            <div className="cw-trust-item">
              <span>🔗</span> SKU Variation Mapping
            </div>
            <div className="cw-trust-item">
              <span>👥</span> Dedicated Specialists
            </div>
          </div>

          {/* FAQ section integrated beautifully inside pricing grid theme */}
          <div className="cw-pricing-faq">
            <h3 className="cw-pricing-faq-title">Quick Answers: eCommerce Product Listing</h3>
            <div className="cw-pricing-faq-grid">
              <div className="cw-pricing-faq-item">
                <h4>What is eCommerce Product Listing?</h4>
                <p>
                  Think of eCommerce product listing as creating a digital shelf for your store. It is the process of setting up and structuring product detail pages on online marketplaces—including writing descriptive titles, key bullet features, and mapping tags—so customers can easily find and buy your items.
                </p>
              </div>
              <div className="cw-pricing-faq-item">
                <h4>Why is catalog optimization important?</h4>
                <p>
                  It is how you stand out in a busy marketplace. When you optimize your product titles, description copy, and backend search terms, marketplace search engines (like Amazon's A9) can index your products easily. This lifts your visibility, drives clicks, and turns casual browsers into buyers.
                </p>
              </div>
              <div className="cw-pricing-faq-item">
                <h4>What is SKU variation management?</h4>
                <p>
                  It is the art of keeping your product options organized. Instead of creating separate pages for every size, color, or style, we link them under a single parent SKU. This makes shopping easy for customers, prevents confusion, and aggregates all your reviews on one page.
                </p>
              </div>
              <div className="cw-pricing-faq-item">
                <h4>How does product schema help with search?</h4>
                <p>
                  Schema is like a translator for search engines. By embedding JSON-LD structured data code on your pages, you tell Google your exact price, stock availability, and rating details. This helps your products display as rich snippets in Google Shopping searches, boosting your clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Product Listing</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What exactly is eCommerce cataloging?",
              answer: "eCommerce cataloging is the process of preparing your products for online sales. We organize all your product data—such as technical details, dimensions, images, and descriptions—into a clean, digital format that marketplaces require to list your items."
            },
            {
              id: "faq2",
              question: "Why does my online store need listing optimization?",
              answer: "Because a basic upload isn't enough to attract buyers. Optimization ensures your products target the exact search terms your customers use. By writing clear titles, highlighting key benefits, and choosing correct categories, we help your listings rank higher and convert more traffic."
            },
            {
              id: "faq3",
              question: "What is included in a product listing package?",
              answer: "Our packages cover everything needed to go live: custom search-optimized titles, bullet lists detailing key features, copywritten descriptions, category and sub-category mapping, variant configuration (colors/sizes), and backend search tag setup."
            },
            {
              id: "faq4",
              question: "How long does a cataloging project typically take?",
              answer: "For a standard project of 50 product listings, it usually takes about 4 to 6 days. Larger inventories or multi-channel setups for hundreds of SKUs can take between 2 to 3 weeks to organize, format, and upload."
            },
            {
              id: "faq5",
              question: "Do you write product descriptions for Shopify and WooCommerce?",
              answer: "Yes, we do! We write custom product copy and manage bulk uploads for self-hosted websites on platforms like Shopify, WooCommerce, Magento, and BigCommerce, ensuring a seamless shopping experience for your buyers."
            },
            {
              id: "faq6",
              question: "What information do you need from me to start listing?",
              answer: "We will need your raw product images, pricing, model numbers or SKUs, dimensions, and basic feature specifications. If you have any supplier sheets or manufacturer details, those help us draft highly detailed listings."
            },
            {
              id: "faq7",
              question: "Can you help resolve suppressed or blocked Amazon listings?",
              answer: "Absolutely. We audit your seller central account alerts, identify why the listing was suppressed (such as missing attributes, image errors, or title violations), update the required fields, and resubmit them to get them active again."
            },
            {
              id: "faq8",
              question: "Why is variant mapping so important for e-commerce?",
              answer: "It prevents search page clutter and improves user experience. When a shopper sees color and size options on a single page, they stay on that page to buy. It also pools all customer reviews together, which boosts the listing's ranking score."
            },
            {
              id: "faq9",
              question: "What is industrial category mapping on IndiaMART?",
              answer: "IndiaMART requires precise B2B category mapping. We ensure your machinery, raw materials, or industrial services are mapped to the exact micro-categories corporate buyers search, ensuring you receive highly qualified wholesale inquiries."
            },
            {
              id: "faq10",
              question: "Do you offer copywriting for Amazon A+ Content or EBC?",
              answer: "Yes, we do. We write engaging, benefit-driven product copy specifically formatted for Amazon Enhanced Brand Content (EBC) layouts to explain your product's story and boost conversions."
            },
            {
              id: "faq11",
              question: "How do we get started on an e-commerce cataloging project?",
              answer: "You can click the 'Contact Us' button, fill out the form, or email us directly at info@maajankiwebtech.com. Share your estimated SKU count and target marketplaces, and we'll set up a kickoff call."
            },
            {
              id: "faq12",
              question: "Will you provide the final CSV files to us?",
              answer: "Yes, we deliver the complete, formatted CSV/Excel upload sheets for your records so that you always have a backup of your product database."
            },
            {
              id: "faq13",
              question: "Do you edit product photos or graphics?",
              answer: "We handle standard image preparation, which includes resizing, cropping, and converting backgrounds to solid white to meet strict marketplace requirements (like Amazon's image policies)."
            },
            {
              id: "faq14",
              question: "Can we review the listing drafts before they go live?",
              answer: "Yes, definitely. We share all keyword-optimized titles, bullets, and description drafts in a Google Sheet or Excel file for your review and approval before any bulk uploads begin."
            },
            {
              id: "faq15",
              question: "What is GEO for eCommerce catalogs?",
              answer: "GEO (Generative Engine Optimization) means structuring your product copy and FAQs so that AI search assistants (like ChatGPT, Gemini, and shopping copilots) can read, understand, and recommend your products to shoppers."
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

export default ProductsListing;
