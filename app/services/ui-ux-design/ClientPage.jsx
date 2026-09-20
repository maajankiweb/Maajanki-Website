'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/Branding.css";
import "@/app/styles/Home.css";
import "@/app/styles/UIUXDesign.css";

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
          "priceRange": "₹₹",
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "State", "name": "Bihar" }
          ],
          "provider": {
            "@type": "Organization",
            "@id": "https://maajankiwebtech.com/#organization",
            "name": "MaaJanki Web Tech",
            "url": "https://maajankiwebtech.com/",
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

      {/* Page Introduction Section - Redesigned Modern Layout */}
      <section
        className="uiux-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="uiux-intro-card"
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
                User Experience &amp; Interface Design
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
                Top-Rated <span style={{ color: "#FD6A02" }}>UI UX Design Agency in Bihar, India</span> – Designing Seamless Journeys That Raise Customer Conversions
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
                  Are you looking for the <strong style={{ color: "#ffffff" }}>best UI UX design agency in Bihar or India</strong>? MaaJanki Web Tech designs sitemaps, wireframes, high-fidelity prototypes, and user interfaces for startups in Patna, Delhi, and globally.
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
                  By researching user behavior, structuring page flows, and testing prototypes, we reduce user friction and build accessible interfaces that rank and convert.
                </p>
              </div>
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
                  Uncovering Real User Pain Points Through Behavioral Auditing
                </h3>
                <p className="content-text">
                  User experience begins with empirical discovery. We conduct user interviews, survey analytics, customer journey mapping, and competitor usability audits to identify behavioral friction points in your current digital flows.
                </p>
                <p className="content-text">
                  By translating customer motivations and drop-off patterns into actionable UX personas, we design interfaces that guide visitors seamlessly toward key conversion actions.
                </p>
                <p className="content-text">
                  Eliminate guesswork with evidence-based user research that anchors every design decision in measurable customer needs.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
                  Information Architecture and Layout Blueprints Grounded in Conversion Science
                </h3>
                <p className="content-text">
                  Before introducing colors or typography, we construct low-fidelity structural blueprints. These wireframes define content hierarchy, visual weighting, navigation systems, and CTA placement across screen sizes.
                </p>
                <p className="content-text">
                  Rapid wireframing allows your stakeholders to test layout logic, page flow, and user pathways without visual bias, ensuring total alignment on architectural priorities.
                </p>
                <p className="content-text">
                  Build a solid architectural foundation that guarantees effortless user navigation.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
                  Clickable Figma Prototypes Simulating Exact Production Interactions
                </h3>
                <p className="content-text">
                  We transform structural blueprints into interactive, clickable prototypes in Figma. These prototypes faithfully replicate production hover states, micro-interactions, modal popups, and multi-step form journeys.
                </p>
                <p className="content-text">
                  Stakeholders and test users experience the full product flow before a single line of frontend code is written, drastically reducing development revisions and accelerating time-to-market.
                </p>
                <p className="content-text">
                  Validate user journeys and interactive logic with high-fidelity production prototypes.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
                  Modern Design Systems Built with Accessibility and Brand Harmony
                </h3>
                <p className="content-text">
                  Our UI design delivers state-of-the-art aesthetic excellence: curated color palettes, elegant typography, glassmorphism cards, and atomic component libraries adhering to WCAG 2.1 AA accessibility standards.
                </p>
                <p className="content-text">
                  We build comprehensive design systems—including tokens for spacing, elevation, button variants, form states, and dark/light modes—that scale effortlessly across multi-page web applications.
                </p>
                <p className="content-text">
                  Provide users with a visually stunning, premium digital environment that commands brand authority.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
                  Cross-Device Fluidity Built for Mobile-First Experiences
                </h3>
                <p className="content-text">
                  Over 70% of digital interactions occur on mobile screens. We design mobile-first interfaces with thumb-friendly touch targets, sticky bottom navigation bars, and fluid layout scaling for tablets, laptops, and ultra-wide desktops.
                </p>
                <p className="content-text">
                  Every breakpoint is tested to prevent horizontal shifts, awkward line breaks, or cluttered input fields on compact viewports.
                </p>
                <p className="content-text">
                  Ensure a consistent, frictionless brand experience on any device.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
                  Subtle Interactive Feedback That Enhances Perceived Performance
                </h3>
                <p className="content-text">
                  Micro-interactions make digital interfaces feel alive and responsive. We design subtle hover cues, smooth button feedback, progress bars, skeleton loaders, and page transition effects.
                </p>
                <p className="content-text">
                  Carefully timed animations provide visual confirmation for user actions, reduce perceived loading latency, and guide attention toward primary conversion buttons.
                </p>
                <p className="content-text">
                  Delight users and elevate engagement with purposeful micro-animations.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
                  Heatmap Analysis and Drop-Off Diagnostics to Maximize Conversion Rates
                </h3>
                <p className="content-text">
                  For existing web applications and landing pages, we conduct comprehensive usability audits using heatmaps, scroll maps, and session recording analytics from Microsoft Clarity.
                </p>
                <p className="content-text">
                  We diagnose navigation bottlenecks, confusing form fields, and abandoned checkout steps, providing a prioritized remediation roadmap to increase completion rates.
                </p>
                <p className="content-text">
                  Turn lost visitors into paying customers by fixing high-impact usability friction.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
                <h3 className="sub-heading">
                  Semantic Content Layouts Optimized for Human Users and AI Engines
                </h3>
                <p className="content-text">
                  Modern UI/UX design must cater to both human visitors and AI answer engines. We design semantic HTML layouts, clear heading hierarchies (H1 to H4), and structured definition boxes that AI crawlers easily parse and cite.
                </p>
                <p className="content-text">
                  Direct-answer layout patterns guarantee that users find instant answers while AI engines extract clear brand citations for generative search queries.
                </p>
                <p className="content-text">
                  Future-proof your web design for the era of conversational search and AI discovery.
                </p>
                <span className="content-cta">
                  <strong>Deliver intuitive digital journeys that delight users and boost conversions with MaaJanki Web Tech.</strong>
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
              heading: "User Research & Personas",
              text: "We analyze user habits, pain points, and journey expectations to plan a strategic UX blueprint.",
            },
            {
              icon: "fas fa-draw-polygon",
              heading: "Layout Wireframing",
              text: "We design structured, low-fidelity wireframes detailing content hierarchy and page structure.",
            },
            {
              icon: "fas fa-object-group",
              heading: "Clickable Prototypes",
              text: "We build interactive Figma prototypes to simulate realistic user journeys before development.",
            },
            {
              icon: "fas fa-paint-brush",
              heading: "Visual UI Design",
              text: "We craft custom display themes, color palettes, and typography matching brand identity guides.",
            },
            {
              icon: "fas fa-route",
              heading: "User Journey & Funnels",
              text: "We define conversion-focused user flows and micro-interactions to guide visitors toward key actions.",
            },
            {
              icon: "fas fa-vial",
              heading: "Usability Audits & Testing",
              text: "We audit interface accessibility, conduct heuristic tests, and eliminate navigation friction.",
            },
            {
              icon: "fas fa-cubes",
              heading: "Design Systems & UI Kits",
              text: "We build scalable component libraries with atomic design principles for rapid development.",
            },
            {
              icon: "fas fa-mobile-alt",
              heading: "Mobile App UI Design",
              text: "We create native iOS and Android interface experiences with fluid gestures and responsive layouts.",
            },
            {
              icon: "fas fa-tachometer-alt",
              heading: "SaaS & Dashboard UI",
              text: "We design data-dense analytics dashboards, admin portals, and CRM layouts with intuitive controls.",
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
                width={150}
                height={50}
              />
              <span className="uiux-card-label">{tool.label}</span>
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
              Download Our Complete UI/UX Design Portfolio
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to build intuitive digital products. We design accessible wireframes and visual layouts to connect with your target customers.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Download Our Design Case Studies
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Learn about our user research methods, clickable prototypes, and design handoff guidelines in our brochure.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> User Persona and Sitemap Templates
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Figma Wireframing &amp; Design Workflows
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Design Handoff Style Guidelines
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
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
                            service: "Brochure Download - UI/UX Design",
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
                        Request UI/UX Guide
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
                { icon: "fas fa-user-check", title: "User Research & Analysis" },
                { icon: "fas fa-project-diagram", title: "Wireframing & Prototyping" },
                { icon: "fas fa-paint-brush", title: "UI & Interaction Design" },
                { icon: "fas fa-mobile-alt", title: "Mobile App UI/UX Design" },
                { icon: "fas fa-desktop", title: "Web Interface Design" },
                { icon: "fas fa-drafting-compass", title: "Usability Testing & Audits" },
                { icon: "fas fa-layer-group", title: "Design Component Libraries" },
                { icon: "fas fa-sync-alt", title: "UI/UX Redesign Services" },
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
                  Why Professional UI/UX Design Is Critical for Customer Retention
                </h2>
                <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8", marginBottom: "30px" }}>
                  A professional user experience distinguishes your digital product, establishing trust and visual recognition. While generic frameworks offer fast setups, they lack unique brand journey mapping. Custom design systems ensure your sitemaps, components, and responsive pages remain consistent.
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
                  How Usability Testing Reduces Interaction Friction
                </h3>
                <p style={{ color: "#e2e8f0", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                  Usability testing identifies navigation hurdles, ensuring page layouts align with user expectations. Reducing search friction helps visitors complete actions easily, boosting transactions.
                </p>
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
                Quick Answers: UI/UX Design
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear breakdown of our UI/UX design services.
              </p>
            </div>

            <div className="geo-questions-grid">
              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is UI/UX Design?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  UI/UX design plans user-friendly digital products—UI handles visual styling while UX maps seamless navigation.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Why is custom UI/UX design important?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Custom UI/UX reduces interaction friction, improves mobile responsiveness, builds buyer trust, and raises conversion rates.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is a clickable prototype?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  A prototype is an interactive visual model simulating user flows, allowing test navigation before full frontend development.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How does UX design support conversion rates?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  UX aligns page layouts with user habits, making information discovery effortless and increasing sales transactions.
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
    </>
  );
};

export default UIUXDesign;
