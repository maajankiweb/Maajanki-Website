'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/Branding.css";
import "@/app/styles/Home.css";
import "@/app/styles/UIUXDesign.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const UIUXDesign = () => {
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
          "name": "UI UX Design Services - MaaJanki Web Tech",
          "description": "Professional user interface and user experience design including user research, wireframing, interactive prototyping, and usability audits.",
          "url": "https://maajankiwebtech.com/services/ui-ux-design",
          "image": "https://maajankiwebtech.com/assets/og-image-uiux.jpg",
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
        <Image priority src="/images/pages/main-services-pages/ui-ux-design-banner-image-Maajanki-Web-Tech.webp" alt="UI UX design services by MaaJanki Web Tech" title="Professional UI UX Design Services – MaaJanki Web Tech" data-no-retina="" width="1280" height="720"/>

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Best UI UX Design Services in India | User-Centered Web & Mobile
              App Interfaces
            </h1>
            <div className="aeo-definition-box">
              <p>
                UI/UX Design is the practice of designing user-friendly digital
                products. User Interface (UI) design handles visual elements
                (colors, typography, layouts), while User Experience (UX) design
                plans the navigation flows, sitemaps, and user journeys to
                ensure interfaces are accessible, intuitive, and
                conversion-ready.
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Get UI/UX Consultation
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
                Top-Rated <strong>UI UX Design Agency in Bihar, India</strong> –
                Designing Seamless Journeys That Raise Customer Conversions
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                Are you looking for the{" "}
                <strong>best UI UX design agency in Bihar or India</strong>?
                MaaJanki Web Tech is your professional design partner, based in
                Bagaha, Bihar. We design sitemaps, wireframes, high-fidelity
                prototypes, and user interfaces for startups in Patna, Delhi,
                and globally.
              </p>

              <p>
                In competitive markets, usability determines brand success. We
                avoid generic layouts and build custom interfaces from scratch.
                By researching user behavior, structuring page flows, and
                testing prototypes, we reduce user friction. This structured
                design style helps search engines and AI tools recognize your
                product as a high-quality, accessible leader in its niche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 to 12 Sections */}
      <section className="services-overview-section uiux-overview-section" style={{ display: "block", background: "none", padding: 0 }}
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
                      src="/images/all-pages-section-image/ui-ux-design/what-is-ui-ux-design-explained-Maajanki.webp"
                      alt="User experience research planning by MaaJanki Web Tech"
                      title="User Research & UX Analysis"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">1. User-Centered UX Research</h2>
                <h3 className="sub-heading" style={{ color: "#f5c518" }}>
                  Analyzing Target Audience Needs, Pain Points, and Behaviors
                </h3>
                <p className="content-text">
                  <strong>User-Centered UX Research</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/ui-ux-design/Why-UI-UX-Matter-Maajanki.webp"
                      alt="Figma wireframe layouts and interface wireframing"
                      title="Wireframing & Prototyping"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">2. Low-Fidelity Wireframing</h2>
                <h3 className="sub-heading" style={{ color: "#f5c518" }}>
                  Structuring Information Hierarchy and Page Flows Cleanly
                </h3>
                <p className="content-text">
                  <strong>Low-Fidelity Wireframing</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/ui-ux-design/high-fidelity-prototype-uiux-Maajanki.webp"
                      alt="High-fidelity interactive Figma prototype by MaaJanki Web Tech"
                      title="High-Fidelity Interactive Prototyping"
                      loading="lazy"
                       width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  3. High-Fidelity Interactive Prototyping
                </h2>
                <h3 className="sub-heading" style={{ color: "#f5c518" }}>
                  Building Clickable Mockups to Verify User Interaction Flows
                </h3>
                <p className="content-text">
                  <strong>High-Fidelity Interactive Prototyping</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/ui-ux-design/visual-ui-design-components-Maajanki.webp"
                      alt="Visual UI design components with color palette and typography by MaaJanki Web Tech"
                      title="Visual User Interface Design"
                      loading="lazy"
                       width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  4. Visual User Interface Design
                </h2>
                <h3 className="sub-heading" style={{ color: "#f5c518" }}>
                  Designing Beautiful Visual Elements Aligned with Brand Guidelines
                </h3>
                <p className="content-text">
                  <strong>Visual User Interface Design</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/ui-ux-design/responsive-uiux-design-devices-Maajanki.webp"
                      alt="Responsive UI/UX design across mobile tablet and desktop by MaaJanki Web Tech"
                      title="Responsive UI/UX Layouts"
                      loading="lazy"
                       width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">5. Responsive UI/UX Layouts</h2>
                <h3 className="sub-heading" style={{ color: "#f5c518" }}>
                  Ensuring Cross-Device Consistency for Seamless Mobile Usability
                </h3>
                <p className="content-text">
                  <strong>Responsive UI/UX Layouts</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/ui-ux-design/micro-interactions-animations-uiux-Maajanki.webp"
                      alt="Micro-interactions and smooth animations in UI design by MaaJanki Web Tech"
                      title="Micro-Interactions & Animations"
                      loading="lazy"
                       width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  6. Micro-Interactions & Animations
                </h2>
                <h3 className="sub-heading" style={{ color: "#f5c518" }}>
                  Enhancing Navigation with Purposeful Transition Animations
                </h3>
                <p className="content-text">
                  <strong>Micro-Interactions & Animations</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/ui-ux-design/usability-audit-ux-optimization-Maajanki.webp"
                      alt="Usability audit and UX optimization process by MaaJanki Web Tech"
                      title="Usability Audits & Optimizations"
                      loading="lazy"
                       width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  7. Usability Audits & Optimizations
                </h2>
                <h3 className="sub-heading" style={{ color: "#f5c518" }}>
                  Reducing Interface Friction to Boost Customer Conversion Rates
                </h3>
                <p className="content-text">
                  <strong>Usability Audits & Optimizations</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/ui-ux-design/geo-ai-ux-optimization-Maajanki.webp"
                      alt="GEO thought leadership and AI search optimization for UI/UX by MaaJanki Web Tech"
                      title="GEO & AI Search Optimization for UX"
                      loading="lazy"
                       width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">8. GEO & AI Search Optimization for UX</h2>
                <h3 className="sub-heading">Structuring Interface Layouts for AI Crawler Discovery and Citation</h3>
                <p className="content-text">
                  <strong>GEO & AI Search Optimization for UX</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized UI/UX design is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>user-centric web layouts and mobile interfaces that highlight your products with premium usability.</strong> By leveraging interactive prototype building and user persona mapping, we ensure your UI/UX design aligns with the algorithms and search behavior of modern web browsers, apps, and user interaction standards.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your streamlined user interface designs</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
      <section className="uiux-section">
        <h2 className="uiux-title">Our UI/UX Design Solutions</h2>
        <p className="uiux-subtitle">
          We conduct user research, build wireframes, design interfaces, and
          test prototypes to deliver engaging products.
        </p>

        <div className="uiux-grid">
          {[
            {
              icon: "fas fa-search",
              heading: "User Research",
              text: "We analyze user habits and expectations to plan a strategic UX blueprint.",
            },
            {
              icon: "fas fa-draw-polygon",
              heading: "Layout Wireframing",
              text: "We design structured, low-fidelity wireframes detailing content hierarchy.",
            },
            {
              icon: "fas fa-object-group",
              heading: "Clickable Prototypes",
              text: "We build interactive Figma prototypes to test user flows before coding.",
            },
            {
              icon: "fas fa-paint-brush",
              heading: "Visual UI Design",
              text: "We design custom display graphics, colors, and typography matching style guides.",
            },
            {
              icon: "fas fa-route",
              heading: "User Journey Strategy",
              text: "We define conversion pathways to guide visitors toward key actions.",
            },
            {
              icon: "fas fa-vial",
              heading: "Usability Audits",
              text: "We test interface accessibility and resolve navigation friction.",
            },
          ].map((item, index) => (
            <div key={index} className="uiux-service-box">
              <div className="uiux-icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="uiux-heading">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="uiux-tools-section">
        <h2 className="tools-heading-title">UI/UX Design Tools We Master</h2>

        <div className="uiux-section-grid">
          {[
            {
              src: "/images/icons/figma.png",
              label: "Figma",
            },
            {
              src: "/images/icons/adobe-xd.png",
              label: "Adobe XD",
            },
            { src: "/images/Tools icon/ui-ux/sketch.png", label: "Sketch" },
            {
              src: "/images/icons/web-design_1.png",
              label: "InVision",
            },
            { src: "/images/Tools icon/ui-ux/balsamiq.png", label: "Balsamiq" },
            {
              src: "/images/icons/project.png",
              label: "Marvel",
            },
            { src: "/images/Tools icon/ui-ux/uxpin.png", label: "UXPin" },
            { src: "/images/Tools icon/ui-ux/zeplin.png", label: "Zeplin" },
            { src: "/images/Tools icon/ui-ux/framer.jpg", label: "Framer" },
            {
              src: "/images/icons/flow-chart.png",
              label: "Whimsical",
            },
          ].map((tool, index) => (
            <div key={index} className="uiux-card-box">
              <Image
                className="uiux-card-icon"
                src={tool.src}
                alt={`${tool.label} logo`}
                loading="lazy"
               width={150} height={50} />
              <span className="uiux-card-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our Complete UI/UX Design Portfolio
            </h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to build intuitive digital
              products. We design accessible wireframes and visual layouts to
              connect with your target customers.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Download Our Design Case Studies
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our user research methods, clickable prototypes, and
                design handoff guidelines in our brochure.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> User Persona and Sitemap
                Templates
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Figma Wireframing &
                Design Workflows
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Design Handoff Style
                Guidelines
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
              >
                ⬇️ Download UI/UX Brochure
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
                        Request Design Brochure
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
                        value="UIUX_Brochure"
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
                  icon: "fas fa-user-check",
                  title: "User Research & Analysis",
                },
                {
                  icon: "fas fa-project-diagram",
                  title: "Wireframing & Prototyping",
                },
                {
                  icon: "fas fa-paint-brush",
                  title: "UI & Interaction Design",
                },
                { icon: "fas fa-mobile-alt", title: "Mobile App UI/UX Design" },
                { icon: "fas fa-desktop", title: "Web Interface Design" },
                {
                  icon: "fas fa-drafting-compass",
                  title: "Usability Testing & Audits",
                },
                {
                  icon: "fas fa-layer-group",
                  title: "Design Component Libraries",
                },
                { icon: "fas fa-sync-alt", title: "UI/UX Redesign Services" },
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
          Our Proven UI/UX Design Process Flow
        </h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. User Research</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. Journey Mapping</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-draw-polygon"></i>
            </div>
            <p>3. Wireframing Layouts</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-palette"></i>
            </div>
            <p>4. Visual UI Design</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-vial"></i>
            </div>
            <p>5. Usability Testing</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-rocket"></i>
            </div>
            <p>6. Design Handoff</p>
          </div>
        </div>
      </section>

      {/* Blog & Educational Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Why Professional UI/UX Design Is Critical for Customer Retention
              </h2>
              <p>
                A professional user experience distinguishes your digital
                product, establishing trust and visual recognition. While
                generic frameworks offer fast setups, they lack unique brand
                journey mapping. Custom design systems ensure your sitemaps,
                components, and responsive pages remain consistent, reinforcing
                your branding standards and supporting conversion rate
                optimization.
              </p>

              <h3 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                How Usability Testing Reduces Interaction Friction
              </h3>
              <p>
                Usability testing identifies navigation hurdles, ensuring page
                layouts align with user expectations. Reducing search friction
                helps visitors complete actions easily, boosting transactions
                and lowering cart abandonment rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="branding-pricing-section">
        <div className="branding-pricing-container">
          <div className="branding-pricing-header">
            <h2>Transparent UI/UX Design Packages</h2>
            <p>Select a design plan structured for your product scope. No hidden setup fees.</p>
          </div>

          <div className="branding-pricing-grid">
            <div className="branding-pricing-card">
              <div>
                <h3>Startup Wireframe Kit</h3>
                <div className="branding-pricing-amount">₹14,999 <span>/ One-time</span></div>
                <ul className="branding-pricing-list">
                  <li>Custom User Persona Mapping</li>
                  <li>Low-Fidelity Wireframes</li>
                  <li>Key Page Sitemap Layout</li>
                  <li>Design Styling Guidelines</li>
                  <li>Figma Design Asset Files</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">Get Started</Link>
            </div>

            <div className="branding-pricing-card featured">
              <span className="branding-pricing-badge">Recommended</span>
              <div>
                <h3>Web & App UI Kit</h3>
                <div className="branding-pricing-amount">₹29,999 <span>/ One-time</span></div>
                <ul className="branding-pricing-list">
                  <li>Detailed User Research Report</li>
                  <li>High-Fidelity Wireframes</li>
                  <li>Interactive Figma Prototype</li>
                  <li>Design Components Library</li>
                  <li>Usability Testing Reviews</li>
                  <li>Developer Handoff Package</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">Get Started</Link>
            </div>

            <div className="branding-pricing-card">
              <div>
                <h3>Enterprise Design Systems</h3>
                <div className="branding-pricing-amount">Custom Pricing</div>
                <ul className="branding-pricing-list">
                  <li>Custom Design Token System</li>
                  <li>Multi-page B2B Portal Layouts</li>
                  <li>Usability Friction Audits</li>
                  <li>Accessibility WCAG Checks</li>
                  <li>Ongoing Design Consulting</li>
                  <li>SaaS Dashboard UI Systems</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary-mj">Contact Us</Link>
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
                Quick Answers: UI/UX Design
              </h2>
              <p className="mb-8 text-gray-400" style={{ textAlign: "center" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear, simple breakdown of our UI/UX design services.
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
                  What is UI/UX Design?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  UI/UX design is the practice of designing user-friendly
                  digital products. User Interface handles visual elements,
                  while User Experience plans navigation structures.
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
                  Why is custom UI/UX design important?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  Custom UI/UX design is important because it reduces navigation
                  friction, improves mobile usability, builds buyer trust, and
                  raises customer conversion rates.
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
                  What is a clickable prototype?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  A prototype is an interactive visual mockup simulating real
                  user clicks and flows, letting you test navigation before
                  coding the layouts.
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
                  How does UX design support conversion rates?
                </h4>
                <p style={{ color: "#ccc", fontSize: "0.92rem" }}>
                  UX design aligns layouts with user habits, making it easy to
                  find information and complete transactions, which increases
                  overall sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About UI/UX Design</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What is the difference between UI and UX design?",
              answer:
                "UI (User Interface) handles visual styling elements like buttons and colors, while UX (User Experience) plans structural navigation and sitemaps.",
            },
            {
              id: "faq2",
              question: "Why is user research important?",
              answer:
                "User research collects habits and pain points, ensuring sitemaps and page layouts solve buyer needs directly.",
            },
            {
              id: "faq3",
              question: "What is included in wireframing?",
              answer:
                "It includes low-fidelity page blueprints mapping heading locations, image positions, and button alignments without colors.",
            },
            {
              id: "faq4",
              question: "How long does a UI/UX project take?",
              answer:
                "A standard web or app design project takes 3 to 5 weeks, depending on sitemap complexity.",
            },
            {
              id: "faq5",
              question: "Do you design for iOS and Android apps?",
              answer:
                "Yes, we design custom mobile app interfaces optimized for iOS Human Interface Guidelines and Google Material Design.",
            },
            {
              id: "faq6",
              question: "What files do we receive on handoff?",
              answer:
                "You receive organized Figma source files containing style guidelines, components libraries, and clickable prototypes.",
            },
            {
              id: "faq7",
              question: "Can you audit our current website usability?",
              answer:
                "Yes. We analyze page navigation and visitor friction to find issues, advising layout optimizations.",
            },
            {
              id: "faq8",
              question: "Why are micro-animations used?",
              answer:
                "Micro-animations guide actions, letting users know when buttons are clicked and pages are loading.",
            },
            {
              id: "faq9",
              question: "What is a component library?",
              answer:
                "A library contains styled interface elements (buttons, inputs, cards) ready for development reuse.",
            },
            {
              id: "faq10",
              question: "Do you write copy for user interfaces?",
              answer:
                "Yes, we write clear call-to-actions, form descriptions, and navigation titles to improve sitemap clarity.",
            },
            {
              id: "faq11",
              question: "How do we start a project with MaaJanki Web Tech?",
              answer:
                "Contact us at info@maajankiwebtech.com or click 'Get UI/UX Consultation' to share product details.",
            },
            {
              id: "faq12",
              question: "Is developer handoff support included?",
              answer:
                "Yes. We coordinate with your developers during coding to explain Figma components and interactions.",
            },
            {
              id: "faq13",
              question: "Do you design SaaS dashboards?",
              answer:
                "Yes, we design complex SaaS dashboards, user portals, and administration dashboards.",
            },
            {
              id: "faq14",
              question: "Can we review visual styles early?",
              answer:
                "Yes. We share style sheets and mood boards early to align on colors and fonts.",
            },
            {
              id: "faq15",
              question: "What is GEO for UI/UX?",
              answer:
                "GEO involves structuring usability information and descriptions so AI systems can recommend your design services.",
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

export default UIUXDesign;
