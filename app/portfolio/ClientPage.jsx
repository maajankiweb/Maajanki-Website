'use client';

import React, { useState } from "react";
import Image from 'next/image';
import FooterSection from '@/components/FooterWithPopup';

import Link from 'next/link';
import '@/app/styles/Portfolio.css';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const sampleProjects = [
    {
      title: "Creative Agency Website",
      category: "Web Development",
      description:
        "A responsive, modern website for a creative agency built using HTML, CSS and JavaScript.",
      image: "/images/project/home-boxed.jpg",
      altText: "Creative agency website preview",
      link: "https://example.com/creative-agency",
    },
    {
      title: "E-Commerce Platform",
      category: "E-Commerce",
      description:
        "A fully functional online store with shopping cart and payment gateway integration.",
      image: "/images/project/E-Commerce.webp",
      altText: "E-commerce platform website",
      link: "https://blog.maajankiwebtech.com",
    },
    {
      title: "Food Restaurant Website",
      category: "Web Development",
      featured: true,
      description:
        "A responsive website for a food restaurant with menu, booking, and delivery features.",
      image: "/images/project/Food-Delivery-App-UI.webp",
      altText: "Food Delivery Website",
      link: "https://example.com/food-restaurant",
    },
    {
      title: "Job Posting Website",
      category: "Web Development",
      featured: true,
      description:
        "A platform for posting jobs and managing applications efficiently.",
      image: "/images/project/jon-posting-website.jpg",
      altText: "Job Posting Website",
      link: "https://example.com/job-posting",
    },
    {
      title: "Gym Trainer Website",
      category: "Web Development",
      description:
        "A responsive website for gym trainers showcasing services, schedules, and client testimonials.",
      image: "/images/project/GYM-Trainer.jpg",
      altText: "Gym Trainer Website",
      link: "https://example.com/gym-trainer",
    },
    {
      title: "Design Studio Graphics Website",
      category: "Web Design",
      description:
        "A portfolio website for a design studio displaying graphic projects and services.",
      image: "/images/project/Design-Studio-Creative-Graphic.jpg",
      altText: "Design Studio Website",
      link: "https://example.com/design-studio",
    },
    {
      title: "Free AI Research Website",
      category: "Technology / AI",
      description:
        "A website dedicated to sharing free AI research papers, tools, and tutorials.",
      image: "/images/project/Free-AI-Research.jpg",
      altText: "AI Research Website",
      link: "https://example.com/ai-research",
    },
    {
      title: "LMS Portal Website",
      category: "Education",
      description:
        "A learning management system (LMS) portal for online courses, quizzes, and student management.",
      image: "/images/project/lms-portal.webp",
      altText: "LMS website design",
      link: "https://example.com/lms-portal",
    },
    {
      title: "AI Voices Platform",
      category: "Technology / AI",
      featured: true,
      description:
        "An AI-powered voice generation platform with multi-language support and real-time audio preview.",
      image: "/images/project/AI-Voices-Home-Page.webp",
      altText: "AI Voices Platform",
      link: "https://example.com/ai-voices",
    },
    {
      title: "Digital Products Hub",
      category: "E-Commerce",
      description:
        "A digital products marketplace where creators can sell eBooks, templates, courses, and software.",
      image: "/images/project/Digital-Products-Hub-Home-Page.webp",
      altText: "Digital Products Hub",
      link: "https://example.com/digital-products",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "E-Commerce",
    "Web Design",
    "Technology / AI",
    "Education",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === activeFilter);

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Industries Served" },
  ];

  const overviewCards = [
    {
      icon: "fas fa-lightbulb",
      title: "Creative Innovation",
      description:
        "Explore how the MaaJanki Web Tech team transforms ideas into impactful digital solutions through creative thinking and well-defined strategies. From digital advertising campaigns to product visuals and brand identity design, our portfolio reflects a strong focus on quality, precision, and innovation.",
    },
    {
      icon: "fas fa-handshake",
      title: "Strategic Collaboration",
      description:
        "We have collaborated with diverse brands to strengthen their digital presence through creative campaigns, visual storytelling, and strategic design execution. Our work spans across branding, advertising creatives, and digital assets that help businesses stand out and communicate their message effectively.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Performance & Growth",
      description:
        "Each project in the MaaJanki Web Tech portfolio demonstrates our ability to combine modern design with intelligent digital marketing strategies. Whether it's website design, SEO-focused campaigns, or brand visuals, every solution is aligned with the client's business objectives.",
    },
    {
      icon: "fas fa-rocket",
      title: "Concept to Reality",
      description:
        "Step into the creative world of MaaJanki Web Tech and discover how we turn concepts into meaningful digital experiences. Our portfolio showcases work that not only attracts attention but also builds trust, strengthens brand identity, and creates a lasting impact across digital platforms.",
    },
  ];

  return (
    <>
      {/* SEO META TAGS */}
      

      {/* Hero / Banner Section */}
      <section className="custom-banner">
        <Image priority src="/images/pages/main-services-pages/Portfolio-banner-image-MaaJanki-Web-Tech.webp" alt="MaaJanki Web Tech Portfolio Banner – Custom Web Development and Design Services" title="MaaJanki Web Tech Portfolio – Website Development &amp; Digital Marketing Projects" width="1280" height="720"/>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Our Work as Web Development &amp; Marketing Projects</h1>
            <p>
              Explore our successful projects in website development, search
              engine optimization, branding, and social media campaigns for
              clients in India and globally.
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

      {/* ── INTRO SECTION ── */}
      <section className="pf-intro-section">
        {/* Left Column */}
        <div className="pf-intro-left">
          <div className="pf-intro-label">
            <span className="pf-intro-line"></span>
            <span className="pf-intro-label-text">Our Portfolio</span>
          </div>

          <h2 className="pf-intro-heading">
            Work Built on{" "}
            <span className="pf-intro-highlight">Purpose &amp; Precision</span>
          </h2>

          {/* Mini Stats */}
          <div className="pf-intro-stats">
            <div className="pf-intro-stat">
              <span className="pf-intro-stat-num">10+</span>
              <span className="pf-intro-stat-lbl">Projects</span>
            </div>
            <div className="pf-intro-stat">
              <span className="pf-intro-stat-num">10+</span>
              <span className="pf-intro-stat-lbl">Industries</span>
            </div>
            <div className="pf-intro-stat">
              <span className="pf-intro-stat-num">3x</span>
              <span className="pf-intro-stat-lbl">Avg. Growth</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="pf-intro-right">
          <p>
            At <strong>MaaJanki Web Tech</strong>, every project in our{" "}
            <strong>digital marketing portfolio</strong> started with a single
            commitment to help a business grow in a meaningful, measurable way.
            We bring{" "}
            <strong>
              strategic thinking, sharp design, and performance-driven marketing
            </strong>{" "}
            to deliver outcomes that are trackable and lasting.
          </p>
          <p>
            From first-time founders finding their voice to established
            companies expanding their digital reach, our{" "}
            <strong>SEO, branding, and web development work</strong> delivers
            the same level of craft across every engagement whether it’s a
            startup brand identity or a complex multi-channel campaign.
          </p>
          <p>
            Browse through to see how <strong>ideas become results</strong>, and
            how MaaJanki Web Tech turns a brief into a brand story worth
            telling. Each case study reflects our commitment to measurable ROI
            and long-term client growth.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO SECTION ── */}
      <section className="portfolio-section" id="portfolio">
        {/* Header */}
        <div className="portfolio-header">
          <span className="pf-badge">Our Work</span>
          <h2 className="pf-title">
            Our Portfolio Website &amp; Digital Marketing Projects in Bihar,
            India
          </h2>
          <p className="pf-subtitle">
            Welcome to MaaJanki Web Tech's portfolio Bihar's best digital
            marketing &amp; website development agency. Explore our work across
            website design, branding, SEO campaigns and graphic design for
            businesses across India. Each project reflects our commitment to
            quality, creativity, and measurable results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="pf-filter-tabs"
          role="tablist"
          aria-label="Filter portfolio by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.replace(/\s|\/|\./g, "-").toLowerCase()}`}
              className={`pf-filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item, index) => (
              <div
                key={index}
                className={`portfolio-card${
                  item.featured ? " pf-card-featured" : ""
                }`}
              >
                {/* Image */}
                <div className="portfolio-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.altText || item.title}
                    title={
                      item.title
                        ? `${item.title} – Website Development & Digital Marketing Project by MaaJanki Web Tech`
                        : "Portfolio Project by MaaJanki Web Tech"
                    }
                    loading="lazy"
                   width={600} height={400} />
                  {/* Category Badge */}
                  <span className="pf-category-badge">{item.category}</span>
                  {/* Hover Overlay — title + desc + button */}
                  <div className="pf-img-overlay">
                    <h3 className="pf-overlay-title">{item.title}</h3>
                    <p className="pf-overlay-desc">{item.description}</p>
                    {item.link && (
                      <button
                        className="view-project-btn"
                        onClick={() => window.open(item.link, "_blank")}
                      >
                        View Project <i className="fas fa-arrow-right"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="pf-empty">No projects found for this category.</p>
          )}
        </div>
      </section>

      {/* ── THE MAAJANKIWEBTECH DIFFERENCE ── */}
      <section className="pf-difference-section">
        <div className="pf-difference-header">
          <span className="pf-diff-label">Why Us</span>
          <h2 className="pf-diff-title">
            The <span className="pf-diff-highlight">MaaJanki Web Tech</span>{" "}
            Difference
          </h2>
          <p className="pf-diff-subtitle">
            We don’t just build websites or run ads we craft complete digital
            experiences designed to grow your business and keep your audience
            engaged.
          </p>
        </div>

        <div className="pf-difference-grid">
          <div className="pf-diff-card">
            <div className="pf-diff-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Strategy Before Everything</h3>
            <p>
              Every project starts with a deep-dive into your goals, audience,
              and market so our work always hits the right target.
            </p>
          </div>
          <div className="pf-diff-card">
            <div className="pf-diff-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Measurable SEO &amp; Marketing Results</h3>
            <p>
              We track every click, ranking, and conversion. No vanity metrics
              just transparent data that proves real growth.
            </p>
          </div>
          <div className="pf-diff-card">
            <div className="pf-diff-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>Branding &amp; Design That Works</h3>
            <p>
              From logo to full brand identity, our creative team delivers
              visuals that make your business unforgettable across every
              platform.
            </p>
          </div>
          <div className="pf-diff-card">
            <div className="pf-diff-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>SEO-Built to Last</h3>
            <p>
              We build websites with clean code, fast loading speeds, and
              on-page SEO baked in so you rank higher and stay there.
            </p>
          </div>
          <div className="pf-diff-card">
            <div className="pf-diff-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Website-First Platform</h3>
            <p>
              Your website is your most powerful sales tool. We design, develop,
              and optimize it to convert visitors into loyal customers.
            </p>
          </div>
          <div className="pf-diff-card">
            <div className="pf-diff-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>True Client Partnership</h3>
            <p>
              We work as an extension of your team always available, fully
              transparent, and committed to your long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="pf-stats-strip">
        {stats.map((s, i) => (
          <div key={i} className="pf-stat-item">
            <span className="pf-stat-number">{s.number}</span>
            <span className="pf-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── OVERVIEW SECTION ── */}
      <section className="portfolio-overview-section">
        <div className="container">
          <div className="portfolio-overview-header">
            <span className="pf-badge center">Brand Impact</span>
            <h2 className="section-title-redesign">
              Delivering Digital Success Across India
            </h2>
            <p className="section-subtitle-redesign">
              Explore how MaaJanki Web Tech combines creative vision,
              intelligent marketing strategies, and state-of-the-art web
              technology to deliver high-performing results for businesses of
              all sizes.
            </p>
          </div>

          <div className="overview-grid">
            {overviewCards.map((card, i) => (
              <div key={i} className="overview-card">
                <div className="overview-card-header">
                  <div className="overview-card-icon">
                    <i className={card.icon}></i>
                  </div>
                  <h3 className="overview-card-title">{card.title}</h3>
                </div>
                <p className="overview-card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default PortfolioSection;
