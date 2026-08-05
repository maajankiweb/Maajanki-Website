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
}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
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
        <Image priority src="/images/pages/main-services-pages/branding-banner-image-Maajanki-Web-Tech.webp" alt="Branding Services & Brand Identity Design by MaaJanki Web Tech" title="Professional Branding Services & Brand Identity Design | MaaJanki Web Tech" data-no-retina="" width="1280" height="720"/>

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

      {/* Page Introduction Section */}
      <section
        className="service-gradient-black-section"
        style={{ backgroundColor: "#050505" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="alt-font inner-heading">
                Top <strong>Branding Agency in Bihar, India</strong> – Building
                Highly Recognized Logos and Identity Frameworks
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you looking for the{" "}
                <strong>best branding agency in Bihar or India</strong>?
                MaaJanki Web Tech is your professional brand identity partner,
                based in Bagaha, Bihar. We design visual elements, logos, color
                palettes, and messaging strategies that help startups in Patna,
                Delhi, and across India stand out in crowded marketplaces.
              </p>

              <p>
                In competitive markets, consumers connect with brands they
                trust. We avoid generic design templates and build custom brand
                systems from scratch. By defining your brand strategy, logo
                structures, and design guidelines, we build customer loyalty.
                This structured approach helps search algorithms and AI engines
                recognize your business as a verified industry leader.
              </p>
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
                    <Image src="/images/all-pages-section-image/Branding/What-is-Branding-Maajanki-Web-Tech.webp" alt="Brand discovery and strategy by MaaJanki Web Tech" title="Brand Discovery Strategy" loading="lazy"  width={600} height={400} />
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
                    <Image src="/images/all-pages-section-image/Branding/Why-choose-us-Maajanki-Web-Tech.webp" alt="Custom logo design and typography by MaaJanki Web Tech" title="Logo Design Services" loading="lazy"  width={150} height={50} />
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
                    <Image src="/images/all-pages-section-image/Branding/branding_guidelines_1781263487071.webp" alt="Brand guidelines and style guide by MaaJanki Web Tech" title="Brand Guidelines" loading="lazy"  width={600} height={400} />
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
                    <Image src="/images/all-pages-section-image/Branding/corporate_stationery_1781263509085.webp" alt="Corporate stationery and print design by MaaJanki Web Tech" title="Corporate Stationery Design" loading="lazy"  width={600} height={400} />
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
                    <Image src="/images/all-pages-section-image/Branding/Why-choose-us-Maajanki-Web-Tech.webp" alt="Brand naming and tagline development by MaaJanki Web Tech" title="Brand Naming Services" loading="lazy"  width={600} height={400} />
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
                    <Image src="/images/all-pages-section-image/Branding/brand_storytelling_1781263522263.webp" alt="Brand storytelling and copywriting by MaaJanki Web Tech" title="Brand Storytelling" loading="lazy"  width={600} height={400} />
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
                    <Image src="/images/all-pages-section-image/Branding/rebranding_visuals_1781263533651.webp" alt="Rebranding and visual identity upgrade by MaaJanki Web Tech" title="Rebranding Services" loading="lazy"  width={600} height={400} />
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
                    <Image src="/images/all-pages-section-image/Branding/What-is-Branding-Maajanki-Web-Tech.webp" alt="GEO integration for corporate brand by MaaJanki Web Tech" title="GEO Brand Integration" loading="lazy"  width={600} height={400} />
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

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our Branding Identity & Design Guide
            </h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to build a distinct brand identity.
              We design professional logos and define brand guidelines to
              support your business growth.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Download Our Branding Campaign Outline
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our custom design workflows, vector logo assets, and
                packaging guidelines in our brochure.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Custom Logo and
                Typography Outlines
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Brand Style Guidelines
                Manual
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Visual Asset Design
                Checklists
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
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
                      <h3 className="brochure-title">
                        Get Your Branding Guide
                      </h3>
                      <label htmlFor="email">Business Email:</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                      />
                      <input
                        type="hidden"
                        name="brochure_request"
                        value="Branding_Brochure"
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
                {
                  icon: "fas fa-lightbulb",
                  title: "Brand Strategy & Positioning",
                },
                {
                  icon: "fas fa-palette",
                  title: "Logo & Visual Identity Design",
                },
                {
                  icon: "fas fa-bullhorn",
                  title: "Brand messaging frameworks",
                },
                { icon: "fas fa-object-group", title: "Visual Style Guides" },
                {
                  icon: "fas fa-file-alt",
                  title: "Stationery Design Checklists",
                },
                { icon: "fas fa-handshake", title: "Rebranding Adjustments" },
                {
                  icon: "fas fa-feather-alt",
                  title: "Tone of Voice Copywriting",
                },
                { icon: "fas fa-globe", title: "Digital Brand Elements" },
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
          Our Proven Branding Design Process Flow
        </h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. Brand Audit</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. Strategy Setup</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-palette"></i>
            </div>
            <p>3. Logo Concepts</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-object-group"></i>
            </div>
            <p>4. Visual Guidelines</p>
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

      {/* Pricing Section */}
      <section className="branding-pricing-section">
        <div className="branding-pricing-container">
          <div className="branding-pricing-header">
            <h2>Transparent Branding Package Tiers</h2>
            <p>
              Select a brand identity plan structured for your growth stage. No
              hidden setup fees.
            </p>
          </div>

          <div className="branding-pricing-grid">
            <div className="branding-pricing-card">
              <div>
                <h3>Startup Identity Kit</h3>
                <div className="branding-pricing-amount">
                  ₹9,999 <span>/ One-time</span>
                </div>
                <ul className="branding-pricing-list">
                  <li>Custom Logo Design Concept</li>
                  <li>Color Palette Selections</li>
                  <li>Corporate Font Styling</li>
                  <li>Business Card Layout</li>
                  <li>Visual Brand Styling Sheet</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Get Started
              </Link>
            </div>

            <div className="branding-pricing-card featured">
              <span className="branding-pricing-badge">Recommended</span>
              <div>
                <h3>Corporate Brand Suite</h3>
                <div className="branding-pricing-amount">
                  ₹24,999 <span>/ One-time</span>
                </div>
                <ul className="branding-pricing-list">
                  <li>3 Custom Logo Concepts</li>
                  <li>Full Visual Guidelines Manual</li>
                  <li>Business Card & Letterhead</li>
                  <li>Social Media Brand Kit</li>
                  <li>Custom Presentation template</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Get Started
              </Link>
            </div>

            <div className="branding-pricing-card">
              <div>
                <h3>Enterprise Rebranding</h3>
                <div className="branding-pricing-amount">Custom Pricing</div>
                <ul className="branding-pricing-list">
                  <li>Deep Brand Audits & Positioning</li>
                  <li>Comprehensive Identity Upgrades</li>
                  <li>Custom Stationery Templates</li>
                  <li>Brand Copywriting Guides</li>
                  <li>Continuing Design Consulting</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">
                Contact Us
              </Link>
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
                Quick Answers: Branding
              </h2>
              <p className="mb-8 text-gray-400" style={{ textAlign: "center" }}>
                Whether you're looking for fast facts or optimizing for AI
                search tools like ChatGPT and Gemini, here is a clear, simple
                breakdown of our brand identity and strategy services.
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
                  What is Branding?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Branding is the practice of designing a distinct brand
                  identity, visual style, and tagline to differentiate a
                  business from competitors, establishing visual recognition and
                  customer trust.
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
                  Why is Brand Identity important?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Brand identity is important because it establishes visual
                  recognition, communicates your business values, builds client
                  trust, and supports organic business growth.
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
                  What is included in brand guidelines?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Brand guidelines detail rules for color palette values, vector
                  logo usage, clear space limits, typography styles, and design
                  rules to preserve consistency.
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
                  How does branding help with organic trust?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Consistent branding build user recognition. Increased search
                  volumes for your brand name signal domain authority to search
                  engines, supporting your search visibility.
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

export default Branding;
