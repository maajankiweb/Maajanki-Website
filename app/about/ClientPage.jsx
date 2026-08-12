"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";
import FounderSection from "@/components/FounderSection";
import "@/app/styles/Home.css";
import "@/app/styles/About.css";

const About = () => {
  return (
    <>
      {/* SEO META TAGS */}

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://maajankiwebtech.com/#organization",
              "name": "MaaJanki Web Tech",
              "url": "https://maajankiwebtech.com/",
              "logo": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
              "description": "MaaJanki Web Tech is a DPIIT Startup India and Udyam MSME recognized website development and digital marketing agency in India, specializing in SEO, AEO, GEO, branding, and custom web development.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9006543913",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61577526895580",
                "https://www.instagram.com/maajankiwebtech/",
                "https://www.linkedin.com/company/maajanki-web-tech-company/",
                "https://x.com/MaaJankweb",
                "https://www.wikidata.org/wiki/Q804153",
                "https://www.wikidata.org/wiki/Q1162"
              ],
              "founder": {
                "@id": "https://maajankiwebtech.com/#founder"
              }
            },
            {
              "@id": "https://maajankiwebtech.com/#founder",
              "@type": "Person",
              "name": "Ashish Kumar",
              "jobTitle": "Founder & CEO",
              "url": "https://www.linkedin.com/in/ashishkumarji/",
              "worksFor": {
                "@id": "https://maajankiwebtech.com/#organization"
              },
              "sameAs": [
                "https://www.linkedin.com/in/ashishkumarji/",
                "https://www.instagram.com/ashishkrweb4/",
                "https://www.wikidata.org/wiki/Q115783355"
              ],
              "description": "Ashish Kumar is the founder of MaaJanki Web Tech, an expert in custom web development, SEO strategy, and digital marketing."
            },
            {
              "@id": "https://maajankiwebtech.com/#localbusiness",
              "@type": "LocalBusiness",
              "name": "MaaJanki Web Tech",
              "image": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
              "url": "https://maajankiwebtech.com/",
              "telephone": "+91-9006543913",
              "description": "Professional website development and digital marketing agency in Bagaha, Bihar, serving clients across India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar",
                "addressLocality": "Bagaha, West Champaran",
                "addressRegion": "Bihar",
                "postalCode": "845101",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.0984,
                "longitude": 84.2625
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "24",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "WebPage",
              "@id": "https://maajankiwebtech.com/about#webpage",
              "url": "https://maajankiwebtech.com/about",
              "name": "About MaaJanki Web Tech | Global Web Development & Digital Marketing Agency",
              "isPartOf": {
                "@id": "https://maajankiwebtech.com/#website"
              },
              "about": {
                "@id": "https://maajankiwebtech.com/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://maajankiwebtech.com/about#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best digital marketing agency in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MaaJanki Web Tech is recognized as one of the best digital marketing agencies in India, delivering result-oriented SEO, AEO, social media marketing, PPC, and custom website development solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What complete digital services does MaaJanki Web Tech offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MaaJanki Web Tech offers a full suite of digital services including SEO, Answer Engine Optimization (AEO), Performance Marketing, Web Development, UI/UX Design, Branding, and Social Media Marketing."
                  }
                }
              ]
            }
          ]
        }
        `,
        }}
      />

      {/* Hero Section */}
      <section className="custom-banner">
        <Image
          priority
          src="/images/pages/main-services-pages/About-Banner-Image-MaaJanki-Web-Tech.webp"
          alt="MaaJanki Web Tech About Banner – Digital Marketing and Website Development Agency"
          title="About MaaJanki Web Tech – Digital Marketing & Website Development Agency in India"
          width="1280"
          height="720"
        />
        <div
          className="banner-overlay"
          style={{
            background:
              "linear-gradient(135deg, rgba(4, 37, 68, 0.92) 0%, rgba(253, 106, 2, 0.75) 100%)",
          }}
        >
          <div className="banner-content">
            <span className="about-hero-badge">About MaaJanki Web Tech</span>
            <h1>
              Grow Your Brand Online with a Trusted Digital Marketing Agency in India
            </h1>
            <p>
              MaaJanki Web Tech is a results-driven digital marketing and
              website development agency offering SEO, social media marketing,
              content strategy, and performance marketing to help businesses
              increase visibility, generate leads, and scale online.
            </p>

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
      {/* Hero Section End */}

      {/* SEO Content Section - Brand Orange */}
      <section
        className="wow animate__fadeIn"
        style={{
          background: "linear-gradient(135deg, #FD6A02 0%, #e05b00 100%)",
          padding: "70px 0",
          color: "#ffffff",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p
                className="alt-font"
                style={{
                  fontSize: "25px",
                  lineHeight: "1.4",
                  fontWeight: "600",
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                <strong>MaaJanki Web Tech</strong> is a leading digital
                marketing and custom website development agency in India, delivering
                technical SEO, Answer Engine Optimization (AEO), branding, and performance-driven marketing solutions to
                help businesses grow online.
              </p>

              <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "16px", lineHeight: "1.8" }}>
                We are <strong>MaaJanki Web Tech</strong>, a results-focused
                digital marketing agency and website development company
                dedicated to helping Indian startups, MSMEs, and enterprises build a commanding online
                presence. Our mission is to improve search engine rankings, capture high-intent commercial traffic, and convert website visitors into long-term
                customers through strategic, data-driven digital solutions.
              </p>

              <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "16px", lineHeight: "1.8" }}>
                Our core expertise spans custom web development, on-page and
                off-page SEO, technical Core Web Vitals optimization, Generative Engine Optimization (GEO), content marketing, social media
                marketing, and performance advertising. Every strategy we execute
                is analytics-backed and aligned with your revenue goals to ensure
                measurable ROI and sustainable digital authority.
              </p>

              <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "16px", lineHeight: "1.8", marginBottom: "0" }}>
                At MaaJanki Web Tech — a DPIIT Startup India & Udyam MSME recognized agency (Registration No: <strong>UDYAM-BR-38-0014113</strong>) — we focus on building people-centric brand
                identities and high-converting marketing funnels. By combining target keyword research, search
                engine optimization, structured schema markup, and conversion tracking, we help
                brands dominate search results across India and earn citations on AI answer engines like ChatGPT and Perplexity. When you partner with MaaJanki Web Tech, you
                gain a transparent, reliable, and growth-oriented digital partner dedicated to long-term business success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SEO Content Section End */}

      {/* Promo Section Start - Deep Navy */}
      <section className="promo-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* Service 1: Website Optimization */}
            <div className="col-md-6 col-lg-4">
              <div className="promo-single-wrap text-center">
                <div className="promo-icon mb-4">
                  <Image
                    src="/images/pages/main-services-pages/search-engine.svg"
                    alt="Website optimization and SEO services by MaaJanki Web Tech"
                    title="SEO & Website Optimization Services – MaaJanki Web Tech"
                    width="65"
                    height="65"
                  />
                  <span className="number-bg">01</span>
                </div>
                <div className="promo-info">
                  <strong className="promo-subtitle">
                    Fast. SEO-Ready. Performance Focused.
                  </strong>
                  <h3 className="promo-title">Website Optimization Services</h3>
                  <p>
                    As a professional website development agency, we optimize
                    website speed, mobile responsiveness, and technical SEO to
                    improve user experience, engagement, and search engine
                    rankings.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: Increase Website Traffic */}
            <div className="col-md-6 col-lg-4">
              <div className="promo-single-wrap text-center">
                <div className="promo-icon mb-4">
                  <Image
                    src="/images/pages/main-services-pages/increase.svg"
                    alt="Increase website traffic with SEO and digital marketing strategies"
                    title="Increase Website Traffic with SEO – MaaJanki Web Tech"
                    width="65"
                    height="65"
                  />
                  <span className="number-bg">02</span>
                </div>
                <div className="promo-info">
                  <strong className="promo-subtitle">
                    Targeted Traffic. Real Leads.
                  </strong>
                  <h3 className="promo-title">Website Traffic Growth</h3>
                  <p>
                    We drive high-quality website traffic using proven SEO
                    strategies, keyword research, and content marketing
                    attracting users who are actively searching for your
                    services.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Digital Marketing */}
            <div className="col-md-6 col-lg-4">
              <div className="promo-single-wrap text-center">
                <div className="promo-icon mb-4">
                  <Image
                    src="/images/pages/main-services-pages/bullhorn.svg"
                    alt="Digital marketing agency services for brand growth and lead generation"
                    title="Digital Marketing Services – MaaJanki Web Tech"
                    width="65"
                    height="65"
                  />
                  <span className="number-bg">03</span>
                </div>
                <div className="promo-info">
                  <strong className="promo-subtitle">
                    Visibility. Growth. ROI.
                  </strong>
                  <h3 className="promo-title">Digital Marketing Services</h3>
                  <p>
                    Our digital marketing agency delivers data-driven campaigns
                    across SEO, social media marketing, Google Ads, and
                    performance marketing to increase brand visibility, leads,
                    and measurable business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promo Section End */}

      {/* About Section - Brand Orange */}
      <section
        id="about"
        aria-label="About Our Company"
        className="about-section-container"
        style={{
          background: "linear-gradient(135deg, #FD6A02 0%, #d95400 100%)",
          color: "#fff",
        }}
      >
        <div className="about-inner-container">
          <div className="about-grid-layout">
            <div>
              <span className="about-hero-badge" style={{ background: "#042544", color: "#ffffff", border: "none", marginBottom: "8px" }}>WHO WE ARE</span>
              <h2 className="about-heading-primary" style={{ color: "#ffffff", marginBottom: "14px" }}>
                About <span style={{ color: "#042544" }}>Our Company</span>
              </h2>

              <p className="about-paragraph" style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                <strong>MaaJanki Web Tech</strong> is a trusted website
                development and digital marketing agency in India, working with
                businesses to create scalable, secure, and future-ready digital
                experiences. Our focus goes beyond building websites — we help
                brands maximize online visibility, Core Web Vitals speed, data security,
                and long-term search engine authority through strategic digital solutions.
              </p>

              <p className="about-paragraph" style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                Every project we deliver is 100% custom-built with SEO-friendly
                architecture, structured schema content, and performance-driven UI/UX design.
                As a professional web development agency in India, we ensure each website
                is fast, secure, mobile-responsive, and optimized to rank on search
                engines like Google and Bing. We do not use generic templates or bloated builders — each
                solution is crafted to match your target keywords and commercial intent.
              </p>

              <p className="about-paragraph" style={{ marginBottom: "0", color: "rgba(255, 255, 255, 0.95)" }}>
                By combining custom web engineering, technical SEO, and Answer Engine Optimization (AEO)
                strategies, we help businesses generate real impact, stronger
                brand authority, and measurable revenue growth. Our team continuously
                adapts to new search algorithms and AI generative engines to keep your brand
                competitive, visible, and prepared for the future.
              </p>
            </div>

            <div className="about-images-container">
              <Image
                src="/images/all-pages-section-image/About-us/about-us-main.webp"
                alt="Website development and digital marketing workspace"
                title="Website Development & Digital Marketing Workspace – MaaJanki Web Tech"
                loading="lazy"
                width="944"
                height="531"
                className="about-image-main"
              />

              <Image
                src="/images/all-pages-section-image/About-us/about-us-team.webp"
                alt="Digital marketing and web development team collaboration"
                title="Team Collaboration for Digital Marketing & Web Development"
                loading="lazy"
                width="944"
                height="624"
                className="about-image-sub"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* EMPOWERED EMPLOYEES - Deep Navy */}
      <section
        id="empowered"
        className="about-section-container"
        style={{
          backgroundColor: "#042544",
          color: "#cbd5e1",
        }}
      >
        <div className="about-inner-container">
          <div className="empowered-grid-layout">
            <div>
              <span className="about-hero-badge">OUR CULTURE</span>
              <h2 className="about-heading-secondary" style={{ color: "#fff", marginTop: "10px" }}>
                We empower our team with ownership, transparency, and a growth-first mindset.
              </h2>
              <p className="about-paragraph" style={{ color: "#cbd5e1", marginTop: "15px" }}>
                At <strong style={{ color: "#FD6A02" }}>MaaJanki Web Tech</strong>,
                our professionals in India are encouraged to take initiative, question assumptions, and innovate continuous improvements. Whether designing responsive UIs, optimizing backend queries, or running ROI-focused ad campaigns, our team collaborates seamlessly to drive maximum client growth.
              </p>
            </div>

            <div>
              <p className="about-paragraph" style={{ color: "#cbd5e1" }}>
                We believe analytical thinking, technical SEO engineering, and creative strategy lead to digital transformations that scale sustainably. Our culture embeds search engine optimization (SEO), answer engine optimization (AEO), and conversion rate optimization (CRO) directly into our core development pipeline.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
                <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "18px", borderRadius: "14px" }}>
                  <h4 style={{ color: "#FD6A02", fontSize: "15px", fontWeight: "700", marginBottom: "6px" }}>⚡ Technical SEO & Speed</h4>
                  <p style={{ color: "#cbd5e1", fontSize: "13px", margin: "0", lineHeight: "1.6" }}>Building 100% custom Next.js architecture for instant loading, Core Web Vitals compliance, and clean indexability.</p>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "18px", borderRadius: "14px" }}>
                  <h4 style={{ color: "#FD6A02", fontSize: "15px", fontWeight: "700", marginBottom: "6px" }}>🎯 High-Intent Keywords</h4>
                  <p style={{ color: "#cbd5e1", fontSize: "13px", margin: "0", lineHeight: "1.6" }}>Mapping commercial & transactional search queries to build relevant, high-converting service landing pages.</p>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "18px", borderRadius: "14px" }}>
                  <h4 style={{ color: "#FD6A02", fontSize: "15px", fontWeight: "700", marginBottom: "6px" }}>🤖 AEO & AI Authority</h4>
                  <p style={{ color: "#cbd5e1", fontSize: "13px", margin: "0", lineHeight: "1.6" }}>Injecting Schema.org JSON-LD and structured data so brands earn citations across ChatGPT, Perplexity, and Google AI.</p>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "18px", borderRadius: "14px" }}>
                  <h4 style={{ color: "#FD6A02", fontSize: "15px", fontWeight: "700", marginBottom: "6px" }}>📊 CRO & Organic ROI</h4>
                  <p style={{ color: "#cbd5e1", fontSize: "13px", margin: "0", lineHeight: "1.6" }}>Focusing on lead conversion tracking, user experience optimizations, and sustainable long-term revenue growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EMPOWERED EMPLOYEES */}

      {/* VISION & MISSION - Brand Orange */}
      <section
        id="vision-mission"
        className="about-section-container"
        style={{
          background: "linear-gradient(135deg, #FD6A02 0%, #e05b00 100%)",
          color: "#fff",
        }}
      >
        <div className="about-inner-container">
          <div className="text-center mb-5" style={{ maxWidth: "800px", margin: "0 auto 50px auto" }}>
            <span className="about-hero-badge" style={{ background: "#042544", color: "#ffffff", border: "none" }}>PURPOSE & PURPOSE</span>
            <h2 className="about-heading-primary" style={{ marginBottom: "16px", color: "#ffffff" }}>
              Our Vision & Mission
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.95)", lineHeight: "1.7" }}>
              Building reliable digital experiences for businesses around the globe.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="about-grid-layout" style={{ gap: "30px" }}>
            {/* Vision Card */}
            <div className="vision-mission-card">
              <div className="vision-card-icon">💡</div>
              <h3 className="vision-card-title">Our Vision</h3>
              <p className="about-paragraph" style={{ marginBottom: "12px", color: "#cbd5e1" }}>
                Our vision is to become a globally trusted web development and digital growth partner in India that helps businesses turn ideas into scalable, high-performing digital products through engineering excellence and strategic innovation.
              </p>
              <p className="about-paragraph" style={{ marginBottom: "0", color: "#94a3b8" }}>
                We aim to make technology simple, transparent, and impactful — delivering digital solutions built with precision, clarity, and a long-term growth mindset.
              </p>
            </div>

            {/* Mission Card */}
            <div className="vision-mission-card">
              <div className="vision-card-icon">🚀</div>
              <h3 className="vision-card-title">Our Mission</h3>
              <p className="about-paragraph" style={{ marginBottom: "0", color: "#cbd5e1" }}>
                Our mission is to deliver ethical, data-driven web development, SEO, and performance marketing services that create measurable revenue growth for our clients. We listen carefully, solve complex challenges, and build user-centric experiences that convert.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* VISION & MISSION */}

      {/* Why Us Section - Deep Navy */}
      <section className="why-us-section ptb-100" style={{ background: "#091a2b" }}>
        <div className="why-us-container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <strong className="why-us-badge" style={{ background: "#FD6A02" }}>Why Us</strong>

              <h3 className="why-us-heading">
                Your Trusted Partner for Digital Growth
              </h3>

              <span className="why-us-underline mb-4" style={{ background: "#FD6A02" }}></span>

              <p className="why-us-text">
                <strong>MaaJanki Web Tech</strong> is a reliable website
                development and digital marketing agency in India focused on driving real
                online growth. By combining custom code architecture, data-driven
                technical SEO, and advanced Answer Engine Optimization (AEO), we help businesses capture
                commercial search intent, attract high-quality organic traffic, and convert visitors into
                loyal customers.
              </p>

              <p className="why-us-text">
                From emerging startups to established enterprises, we work with businesses of
                all sizes to strengthen their digital footprint. Our specialized expertise in
                custom web development, search engine optimization, Generative Engine Optimization (GEO), and performance
                marketing enables brands to compete effectively and gain market dominance.
              </p>

              <p className="why-us-text">
                Transparency, cutting-edge technology, and verifiable ROI are at
                the core of everything we do. As a DPIIT Startup India & Udyam MSME recognized agency (Registration No: <strong>UDYAM-BR-38-0014113</strong>), we focus on long-term digital authority —
                delivering scalable digital solutions that support sustainable
                business growth across India.
              </p>

              <div className="why-us-chips">
                <span className="why-us-chip">⚡ 100% Custom Code</span>
                <span className="why-us-chip">🎯 Data-Driven SEO</span>
                <span className="why-us-chip">📈 ROI-Focused Ads</span>
                <span className="why-us-chip">🛡️ 24/7 Monitoring</span>
              </div>
            </div>

            <div className="why-us-visual">
              <Image
                src="/images/pages/main-services-pages/why-choose-us.webp"
                width="1024"
                height="1024"
                alt="Why choose MaaJanki Web Tech for website development and digital marketing"
                title="Why Choose MaaJanki Web Tech – Website Development & Digital Marketing Experts"
                className="why-us-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Us Section End */}

      {/* OUR BUSINESS PHILOSOPHY - Brand Orange */}
      <section
        className="about-section-container"
        style={{
          background: "linear-gradient(135deg, #FD6A02 0%, #d95400 100%)",
          color: "#fff",
        }}
      >
        <div className="about-inner-container">
          <span
            style={{
              display: "inline-block",
              background: "#042544",
              color: "#ffffff",
              padding: "6px 18px",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "13px",
              letterSpacing: "1.5px",
              marginBottom: "20px",
            }}
          >
            LEADERSHIP
          </span>

          {/* Leadership */}
          <div className="core-values-row" style={{ background: "rgba(4, 37, 68, 0.92)", borderColor: "rgba(255, 255, 255, 0.15)" }}>
            <div className="core-values-box">
              <Image
                src="/images/all-pages-section-image/About-us/about-us-leader-image-Maajanki-Web-Tech.webp"
                alt="Leadership at MaaJanki Web Tech"
                title="Leadership at MaaJanki Web Tech – Digital Marketing & Web Development Experts"
                width="944"
                height="618"
                className="core-values-img"
                loading="lazy"
              />
            </div>

            <div className="core-values-box">
              <h4
                style={{
                  fontSize: "16px",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                  color: "#FD6A02",
                }}
              >
                SUPERVISION
              </h4>
              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                Leadership
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                Strong leadership is built on clarity, consistency, and
                confidence. At <strong>MaaJanki Web Tech</strong>, our
                leadership blends strategic web engineering with data-backed digital marketing execution —
                balancing technology, Core Web Vitals performance, and commercial goals to deliver
                scalable, high-ranking web solutions.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                Innovation for us is not about chasing temporary trends; it is about
                solving real business problems through custom web development, technical SEO, AEO,
                and performance marketing strategies that create long-term enterprise value for
                our clients.
              </p>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="core-values-row reverse" style={{ background: "rgba(4, 37, 68, 0.92)", borderColor: "rgba(255, 255, 255, 0.15)" }}>
            <div className="core-values-box">
              <Image
                src="/images/all-pages-section-image/About-us/about-us-team-image-Maajanki-Web-Tech.webp"
                alt="Team collaboration at MaaJanki Web Tech"
                title="Team Collaboration at MaaJanki Web Tech – Digital Marketing & Web Development Team"
                width="944"
                height="625"
                className="core-values-img"
                loading="lazy"
              />
            </div>

            <div className="core-values-box">
              <h4
                style={{
                  fontSize: "16px",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                  color: "#FD6A02",
                }}
              >
                STRENGTH
              </h4>

              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                Team Collaboration
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                Collaboration is our greatest strength. Our multidisciplinary teams across UI/UX design,
                Next.js full-stack development, technical SEO, AEO content engineering, and performance marketing work together to deliver
                complete, high-converting digital solutions tailored to each
                client’s growth objectives.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                Open communication and shared problem-solving allow us to
                approach challenges from multiple perspectives — ensuring results
                that are visually impactful, search-engine optimized, and technically flawless.
              </p>
            </div>
          </div>

          {/* Transparency & Integrity */}
          <div className="core-values-row" style={{ background: "rgba(4, 37, 68, 0.92)", borderColor: "rgba(255, 255, 255, 0.15)" }}>
            <div className="core-values-box">
              <Image
                src="/images/all-pages-section-image/About-us/about-us-Quality-transparency-image-Maajanki-Web-Tech.webp"
                alt="Transparency and quality at MaaJanki Web Tech"
                title="Transparency & Quality at MaaJanki Web Tech – Trusted Digital Marketing Agency"
                width="944"
                height="623"
                className="core-values-img"
                loading="lazy"
              />
            </div>

            <div className="core-values-box">
              <h4
                style={{
                  fontSize: "16px",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                  color: "#FD6A02",
                }}
              >
                QUALITY
              </h4>
              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                Transparency & Integrity
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                Transparency and integrity are the foundation of quality work.
                As an officially registered DPIIT Startup India & Udyam MSME agency (<strong>UDYAM-BR-38-0014113</strong>),
                we believe trust is built through honest communication, white-hat SEO practices, and clear milestone expectations at every stage of a
                project.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                By keeping clients informed with real-time analytics, keyword performance tracking, and conversion insights, we ensure accountability, confidence, and
                long-term growth partnerships — making transparency our core brand promise.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* OUR BUSINESS PHILOSOPHY End */}

      {/* our Team Members */}
      <FounderSection />

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "Which is the best digital marketing agency in India?",
              answer:
                "MaaJanki Web Tech is recognized as one of the best digital marketing agencies in India, delivering result-oriented SEO, social media marketing, PPC, and website growth solutions for businesses across industries.",
            },
            {
              id: "faq2",
              question:
                "What complete digital services does MaaJanki Web Tech offer?",
              answer:
                "We offer a full 360-degree suite of digital services including Search Engine Optimization (SEO), Social Media Optimization (SMO), Performance Marketing, Web Development, UI/UX Design, Graphic Design, Content Writing, Branding, and eCommerce Product Listing.",
            },
            {
              id: "faq3",
              question: "How can SEO help my business grow organically?",
              answer:
                "Our advanced SEO strategies improve your website's visibility on search engines like Google. By targeting the right keywords and optimizing technical performance, we drive high-quality, organic traffic that converts into loyal customers.",
            },
            {
              id: "faq4",
              question:
                "What is included in your Social Media Optimization (SMO) services?",
              answer:
                "We manage your brand's presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our SMO services include profile optimization, engaging content creation, community management, and trending hashtag strategies to build market authority.",
            },
            {
              id: "faq5",
              question:
                "Do you create custom websites for small businesses and enterprises?",
              answer:
                "Absolutely. Our Web Development team specializes in building responsive, high-performance, and SEO-friendly websites. Whether you need a corporate portfolio, an eCommerce platform, or a custom web application, we deliver scalable solutions.",
            },
            {
              id: "faq6",
              question:
                "How does Performance Marketing differ from regular advertising?",
              answer:
                "Performance Marketing is data-driven. Instead of paying for exposure, you pay for measurable results like clicks, leads, and sales. We design high-ROI Meta Ads and Google Ads funnels to maximize conversion rates.",
            },
            {
              id: "faq7",
              question:
                "Why is UI/UX design crucial for my application or website?",
              answer:
                "A great UI/UX design reduces user friction and increases engagement. We conduct user-centered research to build intuitive sitemaps, wireframes, and custom interfaces that provide a seamless experience, turning visitors into paying customers.",
            },
            {
              id: "faq8",
              question: "What kind of Graphic Design services do you provide?",
              answer:
                "We create visually stunning and premium assets, including brand logos, marketing brochures, social media creatives, digital banners, and complete visual identities that capture attention and communicate your brand's unique message.",
            },
            {
              id: "faq9",
              question:
                "Can you write SEO-optimized content for my blog or website?",
              answer:
                "Yes, our expert Content Writing team crafts compelling, keyword-rich, and Answer Engine Optimized (AEO) content. From landing pages to informative blogs, we ensure your message resonates with your audience and search engine algorithms.",
            },
            {
              id: "faq10",
              question:
                "How can Product Listing optimization help my eCommerce sales?",
              answer:
                "We optimize your product titles, descriptions, and images with the right keywords and semantic data. This ensures your products rank higher on platforms like Amazon, Flipkart, or your own site, driving more visibility and sales.",
            },
            {
              id: "faq11",
              question:
                "What makes a strong brand identity, and how can you help?",
              answer:
                "A strong brand connects emotionally with its target audience. Our Branding services define your market positioning, tone of voice, and visual aesthetics, ensuring you stand out as a premium leader in a crowded market.",
            },
            {
              id: "faq12",
              question:
                "How long does it take to see results from SEO and digital marketing?",
              answer:
                "While paid Performance Marketing can generate immediate leads, organic strategies like SEO and Content Writing typically take 3 to 6 months to show significant, long-lasting growth. We focus on building sustainable digital authority.",
            },
            {
              id: "faq13",
              question:
                "Are your digital marketing strategies tailored for specific industries?",
              answer:
                "Yes! We cater to diverse industries including Healthcare, Real Estate, E-Commerce, Education, Technology, and more. Every campaign is custom-designed based on deep competitor analysis and your specific target audience.",
            },
            {
              id: "faq14",
              question:
                "What is the cost of your web development and digital marketing services?",
              answer:
                "Costs depend on your specific business goals and the scope of the project. MaaJanki Web Tech offers flexible, scalable, and highly affordable packages designed to provide maximum ROI regardless of your business size.",
            },
            {
              id: "faq15",
              question: "How can I start working with MaaJanki Web Tech?",
              answer:
                "Starting is easy! Simply reach out to us via our Contact page, fill out the inquiry form, or call us directly. Our experts will analyze your requirements and provide a customized growth strategy for your business.",
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

export default About;
