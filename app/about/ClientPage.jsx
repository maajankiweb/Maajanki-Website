"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";
import FooterSection from "@/components/FooterWithPopup";
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
              "description": "MaaJanki Web Tech is a professional web development and digital marketing agency in India, specializing in SEO, branding, performance marketing, and custom web solutions.",
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
              "description": "Ashish Kumar is the founder of MaaJanki Web Tech with expertise in web development and digital marketing."
            },
            {
              "@id": "https://maajankiwebtech.com/#localbusiness",
              "@type": "LocalBusiness",
              "name": "MaaJanki Web Tech",
              "image": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
              "url": "https://maajankiwebtech.com/",
              "telephone": "+91-9006543913",
              "description": "Professional website development and digital marketing agency in Bagaha, Bihar.",
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
              "priceRange": "$",
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
              "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(106, 27, 154, 0.4) 100%)",
          }}
        >
          <div className="banner-content">
            <h1>
              Grow Your Brand Online with a Trusted Digital Marketing Agency in
              India
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

      {/* SEO Content Section */}
      <section
        className="wow animate__fadeIn"
        style={{
          backgroundColor: "#042544",
          padding: "60px 0",
          color: "#cbd5e1",
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
                    fontWeight: "500",
                    color: "#cbd5e1",
                    marginBottom: "20px",
                  }}
                >
                  <strong>MaaJanki Web Tech</strong> is a leading digital
                  marketing and website development agency in India, delivering
                  SEO, branding, and performance-driven marketing solutions to
                  help businesses grow online.
                </p>

              <p>
                We are <strong>MaaJanki Web Tech</strong>, a results-focused
                digital marketing agency and website development company
                dedicated to helping Indian businesses build a strong online
                presence. Our mission is to improve search visibility, attract
                the right audience, and convert website visitors into long-term
                customers through strategic digital solutions.
              </p>

              <p>
                Our expertise spans across website development, on-page and
                off-page SEO, technical SEO, content marketing, social media
                marketing, and performance marketing. Every strategy we create
                is data-driven and aligned with your business goals to ensure
                measurable growth and sustainable results.
              </p>

              <p>
                At MaaJanki Web Tech, we focus on building people-centric brand
                identities and high-performing marketing campaigns that generate
                real leads and sales. By combining keyword research, search
                engine optimization, creative content, and analytics, we help
                brands gain visibility across India and establish long-term
                digital authority. When you partner with MaaJanki Web Tech, you
                gain a transparent, reliable, and growth-oriented digital
                partner. We provide clear guidance, strategic planning, and
                continuous performance tracking to deliver consistent and
                measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SEO Content Section End */}

      {/* Promo Section Start */}
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

      {/* About Section */}
      <section
        id="about"
        aria-label="About Our Company"
        className="about-section-container"
        style={{
          background: "linear-gradient(135deg, #FD6A02, #042544)",
          color: "#fff",
        }}
      >
        <div className="about-inner-container">
          <h2 className="about-heading-primary">
            About <span style={{ color: "#fff" }}>Our Company</span>
          </h2>

          <div className="about-grid-layout">
            <div>
              <p className="about-paragraph">
                <strong>MaaJanki Web Tech</strong> is a trusted website
                development and digital marketing agency in India, working with
                businesses to create scalable and future-ready digital
                experiences. Our focus goes beyond building websites we help
                brands improve online visibility, website performance, security,
                and long-term growth through strategic digital solutions.
              </p>

              <p className="about-paragraph">
                Every project we deliver is custom-built with SEO-friendly
                structure, optimized content, and performance - driven design.
                As a professional web development agency, we ensure each website
                is fast, secure, mobile-responsive, and ready to rank on search
                engines. We do not use templates or duplicated layouts each
                solution is crafted to match your business goals.
              </p>

              <p className="about-paragraph" style={{ marginBottom: "0" }}>
                By combining website development, SEO, and digital marketing
                strategies, we help businesses generate real impact, stronger
                brand presence, and measurable results. Our team continuously
                adapts to new technologies and trends to keep your brand
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

      {/* EMPOWERED EMPLOYEES */}
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
              <h2 className="about-heading-secondary" style={{ color: "#fff" }}>
                We empower our team with ownership, transparency, and a
                growth-first mindset to deliver better digital solutions.
              </h2>
            </div>

            <div>
              <p className="about-paragraph" style={{ color: "#cbd5e1" }}>
                At{" "}
                <strong style={{ color: "#FD6A02" }}>MaaJanki Web Tech</strong>,
                our team in India is encouraged to take initiative, question
                assumptions, and improve processes. Whether it’s website
                development, SEO, or digital marketing strategy, our
                professionals openly share ideas and implement smarter ways to
                deliver value to our clients. Learning here is practical,
                guided, and focused on real-world results.
              </p>

              <p className="about-paragraph" style={{ color: "#cbd5e1" }}>
                We believe strong collaboration, analytical thinking, and
                creativity lead to impactful digital experiences. This culture
                reflects in our work high-performing websites, data-driven
                marketing campaigns, and scalable growth solutions. Every
                decision we make is measured by the results it creates for our
                clients across India, ensuring long-term success and meaningful
                business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* EMPOWERED EMPLOYEES */}

      {/* VISION & MISSION */}
      <section
        id="vision-mission"
        className="about-section-container"
        style={{
          background: "linear-gradient(135deg, #042544, #FD6A02)",
          color: "#fff",
        }}
      >
        <div className="about-inner-container">
          {/* Intro Section */}
          <div
            className="empowered-grid-layout"
            style={{ marginBottom: "50px" }}
          >
            <div>
              <h2
                className="about-heading-secondary"
                style={{ color: "#fff", marginBottom: "20px" }}
              >
                A team of creative minds focused on building powerful digital
                solutions for modern businesses.
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                At <strong>MaaJanki Web Tech</strong>, we bring together skilled
                professionals with strong vision and technical expertise.
                Whether you are launching a new product or scaling an existing
                business, our website development and digital marketing
                solutions are designed to support sustainable growth.
              </p>
            </div>
            <div></div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="about-grid-layout" style={{ gap: "30px" }}>
            {/* Vision Card */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                  color: "#fbbf24",
                }}
              >
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "15px",
                }}
              >
                Our Vision
              </h3>
              <p className="about-paragraph" style={{ marginBottom: "10px" }}>
                Our vision is to become a trusted website development and
                digital marketing agency in India that helps businesses turn
                ideas into scalable, high-performing digital products through
                expertise, innovation, and reliable support.
              </p>
              <p className="about-paragraph">
                We aim to make technology simple, transparent, and impactful
                delivering solutions that are built with care, clarity, and a
                long-term growth mindset.
              </p>
            </div>

            {/* Mission Card */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                  color: "#FD6A02",
                }}
              >
                <i className="fa-solid fa-mountain"></i>
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "15px",
                }}
              >
                Our Mission
              </h3>
              <p className="about-paragraph">
                Our mission is to deliver ethical, data-driven website
                development, SEO, and digital marketing services that create
                measurable business results. We listen carefully, simplify
                complex challenges, and build user-focused digital experiences
                that help our clients grow while contributing positively to the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* VISION & MISSION */}

      {/* Why Us Section */}
      <section className="why-us-section ptb-100">
        <div className="why-us-container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <strong className="why-us-badge">Why Us</strong>

              <h3 className="why-us-heading">
                Your Trusted Partner for Digital Growth
              </h3>

              <span className="why-us-underline mb-4"></span>

              <p className="why-us-text">
                <strong>MaaJanki Web Tech</strong> is a reliable website
                development and digital marketing agency focused on driving real
                online growth. By combining creative design, data-driven
                strategy, and advanced SEO, we help businesses improve
                visibility, attract quality traffic, and convert users into
                customers.
              </p>

              <p className="why-us-text">
                From startups to established brands, we work with businesses of
                all sizes to strengthen their digital presence. Our expertise in
                website development, search engine optimization, and performance
                marketing enables brands to compete effectively and grow
                consistently in their markets.
              </p>

              <p className="why-us-text">
                Transparency, modern technology, and measurable results are at
                the core of everything we do. We focus on long-term success
                delivering scalable digital solutions that support sustainable
                business growth across India.
              </p>
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

      {/* OUR BUSINESS PHILOSOPHY */}
      <section
        className="about-section-container"
        style={{
          background: "linear-gradient(180deg, #042544, #FD6A02)",
          color: "#fff",
        }}
      >
        <div className="about-inner-container">
          <span
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#FD6A02",
              padding: "5px 15px",
              borderRadius: "5px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            LEADERSHIP
          </span>

          {/* Leadership */}
          <div className="core-values-row">
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
                leadership blends strategic thinking with practical execution
                balancing technology, people, and business goals to deliver
                reliable digital solutions.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "15px",
                  color: "#fff",
                }}
              >
                Innovation for us is not about chasing trends; it is about
                solving real business problems through website development, SEO,
                and digital marketing strategies that create long-term value for
                our clients.
              </p>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="core-values-row reverse">
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
                Collaboration is our greatest strength. Our teams across design,
                development, SEO, and digital marketing work together to deliver
                complete, high-performing digital solutions tailored to each
                client’s objectives.
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
                approach challenges from multiple perspectives ensuring results
                that are both visually impactful and technically sound.
              </p>
            </div>
          </div>

          {/* Transparency & Integrity */}
          <div className="core-values-row">
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
                We believe trust is built through honest communication, ethical
                decision-making, and clear expectations at every stage of a
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
                By keeping clients informed with measurable milestones and
                performance insights, we ensure confidence, accountability, and
                long-term partnerships making transparency our strongest quality
                promise.
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

      {/* Footer */}
      <FooterSection />
    </>
  );
};

export default About;
