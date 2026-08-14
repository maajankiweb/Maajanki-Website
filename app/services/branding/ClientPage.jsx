'use client';

import React, { useState } from "react";
import Image from 'next/image';

import Link from 'next/link';
import "@/app/styles/Branding.css";
import "@/app/styles/Home.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const Branding = () => {
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
          "name": "Branding Services - MaaJanki Web Tech",
          "description": "Professional brand identity design, logo design, brand positioning strategies, corporate copywriting, and rebranding solutions for startups and corporate entities.",
          "url": "https://maajankiwebtech.com/services/branding",
          "image": "https://maajankiwebtech.com/assets/og-image-branding.jpg",
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
        <Image priority src="/images/pages/main-services-pages/branding-banner-image-Maajanki-Web-Tech.webp" alt="Branding Services & Brand Identity Design by MaaJanki Web Tech" title="Professional Branding Services & Brand Identity Design | MaaJanki Web Tech" data-no-retina="" width="1280" height="720" />

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Professional Branding Services in India | Logo Design, Corporate
              Visual Identity & Market Positioning
            </h1>
            <div className="aeo-definition-box">
              <p>
                Branding is the strategic process of designing a unique visual
                identity, brand name, symbol, and communication tone that
                differentiates a business from competitors. It involves
                structuring brand guidelines, logo design, visual palettes, and
                storytelling frameworks to build customer trust and raise market
                value.
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Get Branding Consultation
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
        className="branding-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="branding-intro-card"
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
                Brand Strategy &amp; Identity
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
                Top <span style={{ color: "#FD6A02" }}>Branding Agency in Bihar, India</span> – Building Highly Recognized Logos and Identity Frameworks
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
                  Are you looking for the{" "}
                  <strong style={{ color: "#ffffff" }}>best branding agency in Bihar or India</strong>? MaaJanki Web Tech is your professional brand identity partner, based in Bagaha, Bihar. We design visual elements, logos, color palettes, and messaging strategies that help startups in Patna, Delhi, and across India stand out in crowded marketplaces.
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
                  In competitive markets, consumers connect with brands they trust. We avoid generic design templates and build custom brand systems from scratch. By defining your brand strategy, logo structures, and design guidelines, we build customer loyalty. This structured approach helps search algorithms and AI engines recognize your business as a verified industry leader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 Sections */}
      <section className="services-overview-section branding-overview-section" style={{ display: "block", background: "none", padding: 0 }}>

        {/* Section 1 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image src="/images/all-pages-section-image/Branding/What-is-Branding-Maajanki-Web-Tech.webp" alt="Brand discovery and strategy by MaaJanki Web Tech" title="Brand Discovery Strategy" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">1. Detailed Brand Discovery & Strategy</h2>
                <h3 className="sub-heading">Defining Brand Vision, Target Audience, and Market Positioning</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>Detailed Brand Discovery & Strategy</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and moni
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
                    <Image src="/images/all-pages-section-image/Branding/Why-choose-us-Maajanki-Web-Tech.webp" alt="Custom logo design and typography by MaaJanki Web Tech" title="Logo Design Services" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">2. Custom Logo Design & Typography</h2>
                <h3 className="sub-heading">Crafting Visual Marks Built for High Recall and Memorability</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>Custom Logo Design & Typography</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and monitor
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
                    <Image src="/images/all-pages-section-image/Branding/branding_guidelines_1781263487071.webp" alt="Brand guidelines and style guide by MaaJanki Web Tech" title="Brand Guidelines" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">3. Comprehensive Brand Guidelines</h2>
                <h3 className="sub-heading">Maintaining Design Consistency Across All Platforms</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>Comprehensive Brand Guidelines</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and monitor o
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
                    <Image src="/images/all-pages-section-image/Branding/corporate_stationery_1781263509085.webp" alt="Corporate stationery and print design by MaaJanki Web Tech" title="Corporate Stationery Design" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">4. Corporate Stationery & Print Design</h2>
                <h3 className="sub-heading">Designing Professional Collaterals for Physical Touchpoints</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>Corporate Stationery & Print Design</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and moni
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
                    <Image src="/images/all-pages-section-image/Branding/Why-choose-us-Maajanki-Web-Tech.webp" alt="Brand naming and tagline development by MaaJanki Web Tech" title="Brand Naming Services" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">5. Naming & Tagline Development</h2>
                <h3 className="sub-heading">Creating Catchy Names Built to Resonate with Customers</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>Naming & Tagline Development</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and monitor org
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
                    <Image src="/images/all-pages-section-image/Branding/brand_storytelling_1781263522263.webp" alt="Brand storytelling and copywriting by MaaJanki Web Tech" title="Brand Storytelling" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">6. Brand Storytelling & Copywriting</h2>
                <h3 className="sub-heading">Drafting Brand Narratives that Engage and Convert Users</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>Brand Storytelling & Copywriting</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and monitor
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
                    <Image src="/images/all-pages-section-image/Branding/rebranding_visuals_1781263533651.webp" alt="Rebranding and visual identity upgrade by MaaJanki Web Tech" title="Rebranding Services" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">7. Rebranding & Visual Upgrades</h2>
                <h3 className="sub-heading">Modernizing Outdated Corporate Identities for Modern Markets</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>Rebranding & Visual Upgrades</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and monitor org
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
                    <Image src="/images/all-pages-section-image/Branding/What-is-Branding-Maajanki-Web-Tech.webp" alt="GEO integration for corporate brand by MaaJanki Web Tech" title="GEO Brand Integration" loading="lazy" width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">8. GEO Integration for Corporate Brands</h2>
                <h3 className="sub-heading">Helping AI Search Engines Verify Your Business Authority</h3>
                <p className="content-text">
                  Establishing a cohesive brand identity for <strong>GEO Integration for Corporate Brands</strong> is a vital corporate framework that connects your business with target clients and builds market authority. In a competitive digital environment, standing out with a well-optimized strategy is necessary to attract high-value leads.
                </p>
                <p className="content-text">
                  We specialize in creating professional, <strong>visual assets and identity structures that highlight your products and services.</strong> From category placements to font guides, we ensure that your branding is aligned with buyer search behaviors, utilizing tools like Adobe Illustrator, Photoshop, and Figma.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to promote your discovery visibility. We focus on naturalness and accuracy to build credibility, establish brand trust, and encourage inquiries from prospective clients.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, MaaJanki Web Tech helps you create a conversion-centered digital appearance. We make sure that your company profile and services pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your visual brand identity becomes a lead-generation tool, which helps you expand the access of your B2B business</strong> We coordinate directly with your teams to customize visual materials, standardize templates, and mon
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
      <section className="branding-section">
        <h2 className="branding-title">Our Branding Solutions</h2>
        <p className="branding-subtitle">
          We build strong brand identities through logo design, visual style
          guides, and positioning strategies.
        </p>

        <div className="branding-grid">
          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-pen-nib"></i>
            </div>
            <h3 className="branding-heading">Logo Design</h3>
            <p>
              Custom vector logo designs reflecting your brand values and market
              positioning.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-id-badge"></i>
            </div>
            <h3 className="branding-heading">Brand Identity Design</h3>
            <p>
              Complete visual branding systems detailing custom colors,
              typography, and assets.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3 className="branding-heading">Brand Style Guides</h3>
            <p>
              Design guidelines detailing fonts and spacing to preserve brand
              consistency across platforms.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-font"></i>
            </div>
            <h3 className="branding-heading">Naming & Taglines</h3>
            <p>
              Creative brand naming and tagline development built to capture
              target audience recall.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-crosshairs"></i>
            </div>
            <h3 className="branding-heading">Positioning Strategy</h3>
            <p>
              Market positioning to define your competitive edge and communicate
              brand value.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-feather-alt"></i>
            </div>
            <h3 className="branding-heading">Brand Storytelling</h3>
            <p>
              Brand narrative development to build customer trust and brand
              loyalty.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <h3 className="branding-heading">Social Media Branding</h3>
            <p>
              Consistent visual templates and assets to reinforce your brand
              voice on social feeds.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="branding-heading">Website & App Branding</h3>
            <p>
              UI design style guides ensuring a recognizable brand experience
              across digital platforms.
            </p>
          </div>

          <div className="branding-box">
            <div className="branding-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="branding-heading">Marketing Collaterals</h3>
            <p>
              Custom brochures, flyers, and marketing materials aligned with
              your visual guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="branding-tools-section">
        <div className="branding-tools-heading">
          <h2 className="branding-tools-title">Branding Tools We Master</h2>
        </div>

        <div className="branding-section-grid">
          {[
            {
              src: "/images/icons/canva.png",
              label: "Canva",
            },
            {
              src: "/images/icons/adobe-photoshop.png",
              label: "Photoshop",
            },
            {
              src: "/images/icons/adobe-illustrator.png",
              label: "Illustrator",
            },
            {
              src: "/images/icons/figma.png",
              label: "Figma",
            },
            {
              src: "/images/Tools icon/branding/Adobe express.jpg",
              label: "Adobe Express",
            },
            { src: "/images/Tools icon/branding/looka.png", label: "Looka AI" },
            {
              src: "/images/icons/opened-folder.png",
              label: "Brandfolder",
            },
            {
              src: "/images/icons/combo-chart--v1.png",
              label: "Visme",
            },
            { src: "/images/Tools icon/branding/crello.jpg", label: "Crello" },
            {
              src: "/images/Tools icon/branding/Designevo.jpg",
              label: "DesignEvo",
            },
            {
              src: "/images/icons/web-design.png",
              label: "Snappa",
            },
            {
              src: "/images/icons/shopify.png",
              label: "Hatchful",
            },
            {
              src: "/images/icons/robot-2.png",
              label: "Tailor Brands",
            },
            {
              src: "/images/icons/t-shirt.png",
              label: "Placeit",
            },
            {
              src: "/images/icons/edit-file.png",
              label: "LogoMakr",
            },
          ].map((tool, index) => (
            <div key={index} className="branding-card-box">
              <Image
                className="branding-card-icon"
                src={tool.src}
                alt={`${tool.label} branding tool`}
                loading="lazy"
                width={150} height={50} />
              <span className="branding-card-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Brochure Section - Vibrant Brand Dual Color Gradient */}
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
              Download Our Branding Identity &amp; Design Guide
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to build a distinct brand identity. We design professional logos and define brand guidelines to support your business growth.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Download Our Branding Campaign Outline
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Learn about our custom design workflows, vector logo assets, and packaging guidelines in our brochure.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Custom Logo and Typography Outlines
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Brand Style Guidelines Manual
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Visual Asset Design Checklists
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download Branding Brochure
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
                        fetch(form.action, {
                          method: "POST",
                          body: new FormData(form),
                          headers: { Accept: "application/json" },
                        }).then((res) => {
                          if (res.ok) {
                            alert("Thank you! Your brochure is downloading.");
                            setIsPopupOpen(false);
                            window.open(
                              "/brochures/MaaJanki-Web-Tech-Branding-Brochure.pdf",
                              "_blank"
                            );
                          } else {
                            alert("Submission error. Please try again.");
                          }
                        });
                      }}
                    >
                      <h3 className="brochure-title" style={{ color: "#ffffff" }}>
                        Download Branding Guide
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
                { icon: "fas fa-lightbulb", title: "Brand Strategy & Positioning" },
                { icon: "fas fa-palette", title: "Logo & Visual Identity Design" },
                { icon: "fas fa-bullhorn", title: "Brand Messaging Frameworks" },
                { icon: "fas fa-object-group", title: "Visual Style Guides" },
                { icon: "fas fa-file-alt", title: "Stationery Design Checklists" },
                { icon: "fas fa-handshake", title: "Rebranding Adjustments" },
                { icon: "fas fa-feather-alt", title: "Tone of Voice Copywriting" },
                { icon: "fas fa-globe", title: "Digital Brand Elements" },
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
        <h3 className="jobready-heading-small">Structured Execution</h3>
        <h2 className="jobready-heading-main">Our Branding Workflow</h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. Audit &amp; Discovery</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. Concept Sketching</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-bezier-curve"></i>
            </div>
            <p>3. Vector Construction</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-palette"></i>
            </div>
            <p>4. Palette &amp; Fonts</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-file-alt"></i>
            </div>
            <p>5. Collaterals</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-rocket"></i>
            </div>
            <p>6. Brand Launch</p>
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
                  padding: "80px 24px",
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
                Transparent Branding Package Tiers
              </h2>
              <p style={{ color: "#e2e8f0", fontSize: "16px" }}>
                Select a brand identity plan structured for your growth stage. No hidden setup fees.
              </p>
            </div>

            <div className="branding-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Startup Identity Kit</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>
                    ₹9,999 <span style={{ color: "#64748b", fontSize: "1rem" }}>/ One-time</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Custom Logo Design Concept</li>
                    <li>Color Palette Selections</li>
                    <li>Corporate Font Styling</li>
                    <li>Business Card Layout</li>
                    <li>Visual Brand Styling Sheet</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#042544", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card featured" style={{ background: "#042544", border: "3px solid #FD6A02", borderRadius: "20px", padding: "35px 25px", position: "relative", color: "#ffffff", boxShadow: "0 15px 35px rgba(253, 106, 2, 0.4)" }}>
                <span className="branding-pricing-badge" style={{ background: "#FD6A02", color: "#ffffff", fontWeight: "800" }}>Recommended</span>
                <div>
                  <h3 style={{ color: "#ffffff", fontWeight: "800" }}>Corporate Brand Suite</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2.2rem" }}>
                    ₹24,999 <span style={{ color: "#cbd5e1", fontSize: "1rem" }}>/ One-time</span>
                  </div>
                  <ul className="branding-pricing-list" style={{ color: "#e2e8f0" }}>
                    <li>3 Custom Logo Concepts</li>
                    <li>Full Visual Guidelines Manual</li>
                    <li>Business Card &amp; Letterhead</li>
                    <li>Social Media Brand Kit</li>
                    <li>Custom Presentation template</li>
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary-mj" style={{ background: "#FD6A02", color: "#ffffff", display: "block", textAlign: "center", borderRadius: "30px", padding: "12px", marginTop: "24px", fontWeight: "700" }}>
                  Get Started
                </Link>
              </div>

              <div className="branding-pricing-card" style={{ background: "#ffffff", border: "2px solid #042544", borderRadius: "20px", padding: "35px 25px", color: "#042544" }}>
                <div>
                  <h3 style={{ color: "#042544", fontWeight: "800" }}>Enterprise Rebranding</h3>
                  <div className="branding-pricing-amount" style={{ color: "#FD6A02", fontWeight: "800", fontSize: "2rem" }}>Custom Pricing</div>
                  <ul className="branding-pricing-list" style={{ color: "#334155" }}>
                    <li>Deep Brand Audits &amp; Positioning</li>
                    <li>Comprehensive Identity Upgrades</li>
                    <li>Custom Stationery Templates</li>
                    <li>Brand Copywriting Guides</li>
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
                Quick Answers: Branding
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear, simple breakdown of our brand identity and strategy services.
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
                  What is Branding?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Branding is the practice of designing a distinct brand identity, visual style, and tagline to differentiate a business from competitors, establishing visual recognition and customer trust.
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
                  Why does a company need a logo design?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  A custom logo acts as the primary visual mark for a business. It creates instant brand recall across website platforms, social media headers, and offline packaging.
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
                <h4 style={{ color: "#FD6A02", fontWeight: "700", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is included in a Brand Guidelines Manual?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  A brand guide outlines rules for logo usage, primary &amp; secondary color palettes, font choices, typography scales, and imagery styles to maintain visual consistency.
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
                  How does branding help with AI search visibility (GEO)?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Consistent brand naming, verified entity details, and structured schema data allow generative AI tools like ChatGPT and Gemini to verify and cite your business as an industry authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Branding Services</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What is Brand Identity Design?",
              answer:
                "Brand identity design is the creation of visual elements like logos, color systems, and font guides that define a business's image.",
            },
            {
              id: "faq2",
              question: "Why does my startup need branding?",
              answer:
                "Branding builds visual recognition, establishes market credibility, and helps connect emotionally with target customers.",
            },
            {
              id: "faq3",
              question: "What is included in a branding package?",
              answer:
                "Packages typically include logo designs, style guidelines, business cards, letterheads, font recommendations, and social media brand kits.",
            },
            {
              id: "faq4",
              question: "How long does a branding project take?",
              answer:
                "A standard brand identity kit takes 2 to 3 weeks, while comprehensive rebranding projects require 4 to 6 weeks.",
            },
            {
              id: "faq5",
              question: "Do you assist with brand naming?",
              answer:
                "Yes. We brainstorm names, check trademark registers, and verify domain availability to design unique names.",
            },
            {
              id: "faq6",
              question: "What formats do you deliver logo files in?",
              answer:
                "We deliver scalable vector source files (AI, SVG, EPS) along with digital formats (PNG, JPG, PDF).",
            },
            {
              id: "faq7",
              question: "Can you refresh our existing business logo?",
              answer:
                "Yes. We specialize in visual upgrades, modernizing outdated logos while preserving existing brand equity.",
            },
            {
              id: "faq8",
              question: "Why are color guidelines important?",
              answer:
                "Color guidelines ensure print layouts match digital feeds, protecting visual consistency across mediums.",
            },
            {
              id: "faq9",
              question: "What is corporate brand positioning?",
              answer:
                "Positioning defines how your brand is perceived by target buyers relative to competitor services.",
            },
            {
              id: "faq10",
              question: "Do you write brand narratives?",
              answer:
                "Yes. We write brand stories, tagline options, mission statements, and tone instructions.",
            },
            {
              id: "faq11",
              question: "How do we request a custom quote?",
              answer:
                "You can click 'Get Branding Consultation' or contact us at info@maajankiwebtech.com with your details.",
            },
            {
              id: "faq12",
              question: "Are fonts included in the packages?",
              answer:
                "We recommend commercial or open-source fonts (Google Fonts) and outline guidelines for their use.",
            },
            {
              id: "faq13",
              question: "Do you offer marketing collateral designs?",
              answer:
                "Yes, we design custom brochures, flyers, banners, and digital marketing graphics matching your guidelines.",
            },
            {
              id: "faq14",
              question: "Can we buy logo design separately?",
              answer:
                "Yes. We offer standalone logo design services alongside comprehensive brand identity packages.",
            },
            {
              id: "faq15",
              question: "What is GEO for branding?",
              answer:
                "GEO ensures your brand name and details are structured, helping AI crawlers index and recommend your business.",
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

export default Branding;
