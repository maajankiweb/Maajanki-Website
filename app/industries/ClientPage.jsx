'use client';

import React from "react";
import Image from 'next/image';

import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';
import '@/app/styles/Industries.css';

const Industries = () => {
  const Industries = [
    {
      icon: "fas fa-pills",
      title: "Healthcare",
      description:
        "Digital marketing tailored specifically to medical practices, hospitals, clinics, and pharmaceutical companies. We know the ins and outs of HIPAA compliance and patient confidentiality while running potent ads that create trust and draw patients in.",
      features: [
        "Medical SEO & Local Search",
        "Healthcare Content Marketing",
        "Medical Practice Branding",
        "Patient Review Management",
        "Telemedicine Promotion",
      ],
    },
    {
      icon: "fas fa-shopping-cart",
      title: "eCommerce",
      description:
        "Full-scale e-commerce marketing solutions that aim not only to increase online sales but also to attract and retain customers. Our range of services goes from product optimization through conversion rate optimization to assisting online retailers in fully revealing their revenue and growth potential.",
      features: [
        "Product Listing Optimization",
        "Email Marketing Automation",
        "Marketplace Management",
        "Shopping Ads Management",
        "Conversion Rate Optimization",
      ],
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Finance",
      description:
        "We work with the finance industry players, such as banks, investment firms, and fintech startups, and provide them with comprehensive support and guidance in their marketing strategies. We lead the way through the intricate compliance regulations and simultaneously create trust and reputation as the tools to attract and keep customers in finance's challenging competition.",
      features: [
        "Financial Content Marketing",
        "Lead Generation Campaigns",
        "Financial Education Content",
        "Compliance-Focused SEO",
        "Trust Building Strategies",
      ],
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Education",
      description:
        "We enable educational institutions and e-learning platforms to draw students and provide good content. Our strategy on branding, engagement, and visibility allows the effective growth of schools, colleges, and online courses.",
      features: [
        "School & College Branding",
        "SEO for Educational Websites",
        "Social Media Engagement",
        "Student Enrollment Campaigns",
        "E-learning Platform Marketing",
      ],
    },
    {
      icon: "fas fa-home",
      title: "Real Estate",
      description:
        "We assist in lead generation and property exhibition through the application of real estate marketing. Through our marketing strategies, we attract buyers, renters, and investors, while at the same time ensuring that the brand is strongly established in the competitive market.",
      features: [
        "Property Listing Optimization",
        "Virtual Tour Promotions",
        "Lead Generation for Realtors",
        "Neighborhood Targeted Ads",
        "Real Estate SEO",
      ],
    },
    {
      icon: "fas fa-hotel",
      title: "Hospitality",
      description:
        "We offer marketing solutions targeted at hotels, resorts, and travel agencies to increase not just bookings but also guest engagement. Our team creates campaigns that not only showcase the unique experiences but also draw the guests' attention throughout the entire year.",
      features: [
        "Hotel SEO & Booking Optimization",
        "Social Media Campaigns",
        "Guest Review Management",
        "Travel Package Promotions",
        "Influencer Collaborations",
      ],
    },
  ];

  const services = [
    {
      title: "Search Engine Optimization",
      desc: "Improve search engine rankings, increase organic traffic, and attract high-intent users with data-driven SEO strategies.",
    },
    {
      title: "Pay-Per-Click Advertising",
      desc: "Generate instant, targeted traffic and leads through optimized Google Ads and paid social media advertising campaigns.",
    },
    {
      title: "Social Media Marketing",
      desc: "Strengthen brand visibility, engagement, and audience trust across major social media platforms with strategic content.",
    },
    {
      title: "Content Marketing",
      desc: "Create SEO-optimized, high-quality content that educates, engages, and converts visitors into loyal customers.",
    },
    {
      title: "Email Marketing",
      desc: "Build lasting customer relationships and increase conversions with personalized, performance-focused email campaigns.",
    },
    {
      title: "Web Development",
      desc: "Develop fast, responsive, and SEO-friendly websites designed to enhance user experience and drive conversions.",
    },
    {
      title: "Marketing Automation",
      desc: "Automate lead nurturing, follow-ups, and workflows to improve efficiency and scale your marketing efforts.",
    },
    {
      title: "Analytics & Reporting",
      desc: "Measure campaign performance, user behavior, and ROI with detailed analytics and actionable insights.",
    },
  ];

  return (
    <>
      {/* SEO META TAGS */}

      

      {/* Hero Section */}
      <section className="custom-banner">
        <Image priority src="/images/pages/main-services-pages/industries-banner-image-Maajanki-Web-Tech.webp" alt="Industries served by MaaJanki Web Tech – website development and digital marketing solutions" title="Industries We Serve – Website Development & Digital Marketing by MaaJanki Web Tech" data-no-retina="" width="1280" height="720"/>

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Digital Marketing & Website Development Services for Every Industry in Bihar, India</h1>
            <p>
              MaaJanki Web Tech is Bihar's #1 digital marketing & website development agency delivering industry-specific SEO, web design, social media marketing, branding & performance marketing solutions to businesses across India. Whatever your industry, we help you rank on Google and grow your business.
            </p>

            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Contact Us
              </Link>
              <Link href="/about" className="btn2">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Hero Section */}
      <section className="services-hero-redesign">
        <div className="services-hero-container">
          <div className="services-hero-grid">
            <div className="services-hero-image-box">
              <div className="image-overlay-glow"></div>
              <Image
                src="/images/all-pages-section-image/Industries/About-us-section-for-our-service-image-MaaJanki-Web-Tech.webp"
                alt="Website development and digital marketing solutions for industries"
                title="Industry-Focused Website Development & Digital Marketing Solutions – MaaJanki Web Tech"
                className="hero-redesign-img"
                loading="lazy"
               width={1200} height={600} />
              <div className="experience-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Years Experience</span>
              </div>
            </div>

            <div className="services-hero-text-box">
              <span className="section-badge">About MaaJanki Web Tech</span>
              <h2 className="hero-redesign-title">
                Bihar's #1 Digital Marketing Agency <span className="highlight-text">for Every Industry</span>
              </h2>

              <p className="hero-lead-text">
                MaaJanki Web Tech is Bihar's leading digital marketing and website development company, headquartered in Bettiah, West Champaran. We deliver end-to-end digital growth solutions.
              </p>

              <div className="hero-description-blocks">
                <p>
                  For eCommerce and online retail businesses, we provide professional product listing and optimization services across major platforms like Shopify, Amazon, Flipkart, Meesho, and Myntra.
                </p>
                <p>
                  With a dedicated team supporting businesses across Patna, Champaran, Delhi, Noida, and Jaipur, we focus on delivering measurable results, transparent execution, and long-term scaling.
                </p>
              </div>

              <div className="key-highlights-grid">
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>100% Data-Driven ROI</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Certified SEO Specialists</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Custom Web Solutions</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>24/7 Dedicated Support</span>
                </div>
              </div>

              <div className="hero-cta-group">
                <Link href="/contact" className="cta-primary-btn">
                  Get Free Consultation <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Size Section */}
      <section className="business-size-section-redesign">
        <div className="container">
          {/* Top Subsection: 2-Column Overview */}
          <div className="business-size-grid">
            {/* Left Column: Image */}
            <div className="business-size-image-container">
              <Image
                src="/images/all-pages-section-image/Industries/business-size-growth.webp"
                alt="We Serve Businesses of Every Size in Bihar & India"
                title="We Serve Businesses of Every Size – MaaJanki Web Tech"
                className="business-size-image"
                loading="lazy"
                width="1024"
                height="1024"
               />
            </div>

            {/* Right Column: Content */}
            <div className="business-size-content-container">
              <span className="section-badge">Tailored Solutions</span>
              <h2 className="section-title-redesign" style={{ textAlign: "left", marginBottom: "15px" }}>
                We Serve Businesses of Every Size in Bihar & India
              </h2>
              <p className="section-subtitle-redesign" style={{ marginBottom: "35px" }}>
                Whether you are a startup in Bettiah, a growing company in Patna or a large enterprise across India, MaaJanki Web Tech delivers scalable digital marketing and website development solutions tailored to your goals and budget.
              </p>

              <div className="business-tier-list">
                {/* Small Business */}
                <div className="business-tier-item">
                  <div className="business-tier-icon">
                    <i className="fas fa-store"></i>
                  </div>
                  <div>
                    <h4 className="business-tier-title">Small Business</h4>
                    <p className="business-tier-desc">
                      Ideal for startups and small businesses aiming to build a strong online presence and attract their first set of customers. We help you with Local SEO, GBP Setup, basic web development, and cost-effective campaigns.
                    </p>
                  </div>
                </div>

                {/* Medium Business */}
                <div className="business-tier-item">
                  <div className="business-tier-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <h4 className="business-tier-title">Medium Business</h4>
                    <p className="business-tier-desc">
                      Complete digital marketing solutions for growing businesses ready to scale traffic, leads, and conversions. Includes advanced SEO, e-commerce platforms, content marketing, and automation.
                    </p>
                  </div>
                </div>

                {/* Enterprise Business */}
                <div className="business-tier-item">
                  <div className="business-tier-icon">
                    <i className="fas fa-city"></i>
                  </div>
                  <div>
                    <h4 className="business-tier-title">Enterprise Business</h4>
                    <p className="business-tier-desc">
                      Enterprise-grade digital marketing and web solutions for large organizations. Includes custom CRM integrations, multi-location campaigns, dedicated support, and custom dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deliverables Plan Section */}
      <section className="deliverables-section-redesign">
        <div className="container">
          <div className="section-header-redesign">
            <span className="section-badge center">Service Deliverables</span>
            <h3 className="section-title-redesign" style={{ fontSize: "2.4rem" }}>Detailed Deliverables Plan</h3>
            <p className="section-subtitle-redesign">
              Select the pricing and execution tier that best fits your immediate milestones. Every tier is customizable to your key metrics.
            </p>
          </div>

          <div className="business-sizes-grid-redesign">
            {/* Small Business */}
            <div className="business-card-redesign small-biz">
              <div className="card-popular-tag">Starter Kit</div>
              <div className="business-card-header">
                <div className="business-card-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h3 className="business-card-title">Small Business</h3>
              </div>
              <p className="business-card-description">
                Ideal for startups and local businesses aiming to build a strong online presence and attract their first set of customers.
              </p>
              <div className="divider"></div>
              <ul className="business-card-features">
                <li><i className="fas fa-chevron-right"></i> Social Media Marketing</li>
                <li><i className="fas fa-chevron-right"></i> Local SEO Optimization</li>
                <li><i className="fas fa-chevron-right"></i> Google Business Profile Setup</li>
                <li><i className="fas fa-chevron-right"></i> Basic Website Development</li>
                <li><i className="fas fa-chevron-right"></i> Email Marketing Campaigns</li>
                <li><i className="fas fa-chevron-right"></i> Budget-Friendly PPC Ads</li>
              </ul>
              <Link href="/contact" className="card-cta-btn">Get Started</Link>
            </div>

            {/* Medium Business */}
            <div className="business-card-redesign medium-biz featured">
              <div className="card-popular-tag">Most Popular</div>
              <div className="business-card-header">
                <div className="business-card-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3 className="business-card-title">Medium Business</h3>
              </div>
              <p className="business-card-description">
                Complete digital marketing solutions for growing businesses ready to scale traffic, leads, and conversions.
              </p>
              <div className="divider"></div>
              <ul className="business-card-features">
                <li><i className="fas fa-chevron-right"></i> Advanced SEO Strategies</li>
                <li><i className="fas fa-chevron-right"></i> Content Marketing & Blogging</li>
                <li><i className="fas fa-chevron-right"></i> Multi-Platform Social Media</li>
                <li><i className="fas fa-chevron-right"></i> E-commerce Website Development</li>
                <li><i className="fas fa-chevron-right"></i> Marketing Automation</li>
                <li><i className="fas fa-chevron-right"></i> Performance Analytics & Reporting</li>
              </ul>
              <Link href="/contact" className="card-cta-btn">Scale Up</Link>
            </div>

            {/* Enterprise Business */}
            <div className="business-card-redesign enterprise-biz">
              <div className="card-popular-tag">Full Suite</div>
              <div className="business-card-header">
                <div className="business-card-icon">
                  <i className="fas fa-city"></i>
                </div>
                <h3 className="business-card-title">Enterprise Business</h3>
              </div>
              <p className="business-card-description">
                Enterprise-grade digital marketing and web solutions for large organizations with complex requirements.
              </p>
              <div className="divider"></div>
              <ul className="business-card-features">
                <li><i className="fas fa-chevron-right"></i> Custom Digital Marketing Platforms</li>
                <li><i className="fas fa-chevron-right"></i> CRM & Marketing Tool Integration</li>
                <li><i className="fas fa-chevron-right"></i> Multi-Location SEO & Marketing</li>
                <li><i className="fas fa-chevron-right"></i> Enterprise SEO Solutions</li>
                <li><i className="fas fa-chevron-right"></i> Dedicated Account Management</li>
                <li><i className="fas fa-chevron-right"></i> Custom Analytics Dashboards</li>
              </ul>
              <Link href="/contact" className="card-cta-btn">Enterprise Inquiry</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="services-alt">
        <div
          className="services-alt-wrapper"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div className="services-alt-content" style={{ flex: "1 1 500px" }}>
            <h2 style={{ marginBottom: "10px" }}>
              Why Choose MaaJanki Web Tech
            </h2>
            <h3 style={{ marginBottom: "20px" }}>
              Real Expertise. Proven Strategies. Sustainable Growth.
            </h3>
            <p
              className="justified-text"
              style={{ textAlign: "justify", marginBottom: "20px" }}
            >
              At <strong>MaaJanki Web Tech</strong>, we go beyond offering
              digital services we build growth-focused digital systems. As a
              trusted website development and digital marketing agency, we
              combine local market understanding with national-level experience
              to deliver strategies that actually work. Whether you’re a
              startup, a growing business, or an established brand, our
              solutions are customized, ROI-driven, and aligned with your
              business objectives.
            </p>

            <p
              className="justified-text"
              style={{ textAlign: "justify", marginBottom: "20px" }}
            >
              With transparent processes, hands-on execution, and measurable
              results, we ensure every investment delivers value. Businesses
              across industries trust MaaJanki Web Tech because we focus on
              outcomes higher visibility, qualified leads, and long-term
              digital growth.
            </p>

            <a
              href="/contact"
              className="cta-button"
            >
              Contact Us
            </a>
          </div>

          <div
            className="services-alt-image"
            style={{ flex: "1 1 500px", textAlign: "center" }}
          >
            <Image
              src="/images/all-pages-section-image/Industries/why-choose-us-section-for-mj-Industries-image-MaaJanki-Web-Tech.webp"
              alt="Why choose MaaJanki Web Tech for digital marketing and website development"
              title="Why Choose MaaJanki Web Tech – Industry-Specific Digital Marketing & Web Development"
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
             width={600} height={400} />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="mj-Industries-wrapper">
        <div className="mj-Industries-title">
          <h2>Industries We Serve</h2>
          <p>
            We deliver industry-specific digital marketing and website
            development solutions designed to help businesses scale with proven
            strategies, data-driven execution, and measurable results across
            every sector.
          </p>
        </div>

        <div className="mj-Industries-section">
          {Industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-header">
                <div className="industry-icon">
                  <i className={industry.icon}></i>
                </div>
                <h3>{industry.title}</h3>
              </div>

              <p>
                Our digital marketing and web development strategies for the{" "}
                <strong>{industry.title}</strong> industry are tailored to
                improve online visibility, generate qualified leads, and drive
                consistent business growth.
              </p>

              <ul>
                {industry.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="dm-services-section">
        <div className="dm-container">
          <div className="dm-section-header">
            <h2 className="dm-section-title">Our Digital Marketing Services</h2>
            <p className="dm-section-subtitle">
              Result-driven digital marketing services designed to increase
              online visibility, attract the right audience, and accelerate
              business growth.
            </p>
          </div>

          <div className="dm-services-grid">
            {services.map((service, index) => (
              <div className="dm-service-card" key={index}>
                <h4>{service.title}</h4>
                <p>
                  Our {service.title.toLowerCase()} services are tailored to
                  help businesses improve search rankings, engagement, and
                  conversions through strategic planning and data-driven
                  execution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default Industries;