'use client';

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/Branding.css";
import "@/app/styles/Home.css";
import "@/app/styles/GraphicDesign.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const GraphicDesign = () => {
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
        <Image priority src="/images/pages/main-services-pages/graphic-design-banner-image-Maajanki-Web-Tech.webp" alt="Graphic Design Services by MaaJanki Web Tech" title="Professional Graphic Design Services for Branding & Marketing | MaaJanki Web Tech" width="1280" height="720"/>

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

      {/* Page Introduction Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="alt-font inner-heading">
                Top-Rated <strong>Graphic Design Company in Bihar, India</strong> – Delivering Visually Stunning and High-Recall Creatives
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you looking for the <strong>best graphic design agency in Bihar or India</strong>? MaaJanki Web Tech is your professional design partner, based in Bagaha, Bihar. We design vector logos, social media graphics, corporate brochures, and digital banner layouts for businesses in Patna, Delhi, and globally.
              </p>

              <p>
                In visual-first marketplaces, quality designs determine customer engagement. We avoid generic templates and build custom visual assets from scratch. By structuring layout design hierarchies and researching target color schemes, we establish brand recall. This visual consistency helps search algorithms and AI systems recognize your business as a professional market leader.
              </p>
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
            { icon: "fas fa-pen-nib", title: "Logo & Brand Design", desc: "Custom vector logo design reflecting your corporate personality and values." },
            { icon: "fas fa-image", title: "Social Media Graphics", desc: "Engaging post designs, carousels, and templates for social platforms." },
            { icon: "fas fa-file-alt", title: "Print Layout Design", desc: "Professional flyers, brochures, packaging, and collaterals ready for print." },
            { icon: "fas fa-pen-fancy", title: "UI Mockup Designs", desc: "Modern visual layouts and interface prototypes for web platforms." },
            { icon: "fas fa-palette", title: "Custom Illustrations", desc: "Vector drawings and icons tailored to support your brand story." },
            { icon: "fas fa-video", title: "Motion Graphics", desc: "Animated banners and promo video templates for digital campaigns." }
          ].map((service, index) => (
            <div className="graphic-box" key={index}>
              <div className="graphic-icon"><i className={service.icon}></i></div>
              <h3 className="graphic-heading">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="graphic-tools-section">
        <div className="graphic-tools-content">
          <div className="graphic-tools-heading">
            <h2 className="graphic-tools-heading-title">Professional Graphic Design Tools We Use</h2>
          </div>

          <div className="graphic-section-grid">
            {[
              { src: "/images/icons/adobe-photoshop.png", label: "Adobe Photoshop" },
              { src: "/images/icons/adobe-illustrator.png", label: "Adobe Illustrator" },
              { src: "/images/icons/figma.png", label: "Figma" },
              { src: "/images/icons/adobe-xd.png", label: "Adobe XD" },
              { src: "/images/icons/canva.png", label: "Canva" },
              { src: "/images/icons/coreldraw.png", label: "CorelDRAW" },
              { src: "/images/icons/inkscape.png", label: "Inkscape" },
              { src: "/images/icons/sketch.png", label: "Sketch" },
              { src: "/images/icons/gimp.png", label: "GIMP" },
              { src: "/images/icons/blender-3d.png", label: "Blender 3D" }
            ].map((tool, index) => (
              <div key={index} className="graphic-card-box">
                <Image className="graphic-card-icon" src={tool.src} alt={`${tool.label} logo`} loading="lazy"  width={150} height={50} />
                <span className="graphic-card-label">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">Download Our Creative Graphic Design Portfolio & Design Guide</h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to build organic brand authority. We design professional logos and flyers to connect with your target customers.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">Download Our Graphic Design Portfolio</h3>
              <p className="graphic-brochure-desc">
                Learn about our design workflows, vector logo assets, and packaging guidelines in our brochure.
              </p>

              <div className="graphic-feature"><i className="fas fa-check-circle"></i> Custom Logo and Typography Outlines</div>
              <div className="graphic-feature"><i className="fas fa-check-circle"></i> Social Media Graphic Checklists</div>
              <div className="graphic-feature"><i className="fas fa-check-circle"></i> Print Collateral Layout Guidelines</div>

              <button className="graphic-brochure-btn" onClick={openBrochurePopup}>
                ⬇️ Download Graphic Brochure
              </button>

              {isPopupOpen && (
                <div className="brochure-popup-overlay" onClick={closeBrochurePopup}>
                  <div className="brochure-popup" onClick={(e) => e.stopPropagation()}>
                    <span className="brochure-close" onClick={closeBrochurePopup}>&times;</span>
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
                              window.open("https://drive.google.com/uc?export=download&id=YOUR_FILE_ID", "_blank");
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
                      <h3 className="brochure-title">Request Design Brochure</h3>
                      <label htmlFor="email">Business Email:</label>
                      <input type="email" name="email" placeholder="you@company.com" required />
                      <input type="hidden" name="brochure_request" value="Graphic_Design_Brochure" />
                      <button type="submit" className="brochure-submit-btn">Send My Brochure</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="graphic-right">
            <div className="graphic-service-grid">
              {[
                { icon: "fas fa-paint-brush", title: "Logo & Brand Identity" },
                { icon: "fas fa-image", title: "Social Media Graphics" },
                { icon: "fas fa-bullhorn", title: "Marketing Creatives" },
                { icon: "fas fa-file-alt", title: "Print Layout Design" },
                { icon: "fas fa-globe", title: "Website UI Graphic Mockups" },
                { icon: "fas fa-video", title: "Motion Graphics Visuals" },
                { icon: "fas fa-object-group", title: "Infographics & Vector Art" },
                { icon: "fas fa-layer-group", title: "Packaging Graphic Design" }
              ].map((service, index) => (
                <div className="graphic-service-card" key={index}>
                  <div className="graphic-service-icon"><i className={service.icon}></i></div>
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

      {/* Blog & Educational Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Why Custom Graphic Design Is Essential for Brand Recall & Trust
              </h2>
              <p>
                A professional visual identity distinguishes your business from competitors, establishing trust and visual recognition. While cheap templates offer fast setups, they lack unique brand narrative alignment. Custom vector designs ensure your logos, social posts, and print collaterals remain consistent, reinforcing your professional standards and supporting business growth.
              </p>

              <h3 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                How Visual Structure & Layout Design Drive User Engagement
              </h3>
              <p>
                Visual structure determines how easily users read and understand your marketing messages. Clean typography, color contrast, and balanced layouts ensure information is clear and engaging, reducing user bounce rates on digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="branding-pricing-section">
        <div className="branding-pricing-container">
          <div className="branding-pricing-header">
            <h2>Transparent Graphic Design Packages</h2>
            <p>Select a design plan structured for your branding goals. No hidden setup fees.</p>
          </div>

          <div className="branding-pricing-grid">
            <div className="branding-pricing-card">
              <div>
                <h3>Startup Identity Kit</h3>
                <div className="branding-pricing-amount">₹7,999 <span>/ One-time</span></div>
                <ul className="branding-pricing-list">
                  <li>Custom Logo Design Concept</li>
                  <li>Color Palette Selections</li>
                  <li>Corporate Font Guide</li>
                  <li>Business Card Layout</li>
                  <li>High-resolution files (PNG/PDF)</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">Get Started</Link>
            </div>

            <div className="branding-pricing-card featured">
              <span className="branding-pricing-badge">Recommended</span>
              <div>
                <h3>Corporate Identity Kit</h3>
                <div className="branding-pricing-amount">₹17,999 <span>/ One-time</span></div>
                <ul className="branding-pricing-list">
                  <li>3 Custom Logo Concepts</li>
                  <li>Color & Typography Guidelines</li>
                  <li>Business Card & Letterhead</li>
                  <li>Social Media Brand Templates</li>
                  <li>Scalable Vector Source Files</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">Get Started</Link>
            </div>

            <div className="branding-pricing-card">
              <div>
                <h3>Enterprise Design</h3>
                <div className="branding-pricing-amount">Custom Pricing</div>
                <ul className="branding-pricing-list">
                  <li>Custom Brochure & Print Layouts</li>
                  <li>Packaging & Product Label Graphics</li>
                  <li>Social Media monthly templates</li>
                  <li>Motion Graphics explainer ads</li>
                  <li>Continuing Design Consulting</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Optimization Section (GEO Specific Content) */}
      <section className="service-gradient-black-section" style={{ backgroundColor: "#080808" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="inner-heading" style={{ fontSize: "2.2rem", textAlign: "center" }}>Quick Answers: Graphic Design</h2>
              <p className="mb-8 text-gray-400" style={{ textAlign: "center" }}>Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear, simple breakdown of our graphic design services.</p>
            </div>
          </div>
          <div className="row justify-content-center text-left" style={{ marginTop: "40px" }}>
            <div className="col-lg-10" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
              <div style={{ background: "#111", padding: "25px", borderRadius: "8px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>What is Graphic Design?</h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>Graphic design is the practice of projecting ideas and messages with visual and textual content. It involves logo design, color selection, and typography to build visual assets.</p>
              </div>
              <div style={{ background: "#111", padding: "25px", borderRadius: "8px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>Why is custom Logo Design important?</h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>Custom logo design is important because it reflects unique business values, establishes visual brand recall, and helps differentiate the brand from competitors.</p>
              </div>
              <div style={{ background: "#111", padding: "25px", borderRadius: "8px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>What are scalable vector files?</h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>Vector files (AI, EPS, SVG) use mathematical formulas to scale designs to any size (from business cards to billboards) without losing resolution quality.</p>
              </div>
              <div style={{ background: "#111", padding: "25px", borderRadius: "8px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "600" }}>How do you optimize image data for AI search?</h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>We optimize image file names and write descriptive alt text to help AI crawlers index visual assets, supporting brand search visibility.</p>
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

export default GraphicDesign;
