'use client';

import React, { useState } from "react";
import Image from 'next/image';

import Link from 'next/link';
import "@/app/styles/ContentWriting.css";
import "@/app/styles/Home.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const ContentWriting = () => {
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
          "name": "Content Writing Services - MaaJanki Web Tech",
          "description": "Professional content writing services including website copywriting, blog posting, article writing, and marketing copy aligned with SEO best practices.",
          "url": "https://maajankiwebtech.com/services/content-writing",
          "image": "https://maajankiwebtech.com/assets/og-image-content-writing.jpg",
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
        <Image priority src="/images/pages/main-services-pages/content-writing-banner-maajanki-web-tech.webp" alt="SEO Content Writing Services by MaaJanki Web Tech" title="Professional SEO Content Writing Services | MaaJanki Web Tech" width="1280" height="720"/>

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Best Content Writing Services in India | SEO Copywriting, Blog
              Writing & Web Copy That Rank
            </h1>
            <div className="aeo-definition-box">
              <p>
                Content Writing is the strategic practice of planning, writing,
                and editing web content to support digital marketing goals. By
                conducting keyword research, aligning copy with search intent,
                and following E-E-A-T guidelines, professional copywriting
                ensures web pages are readable, rank well, and engage target
                audiences.
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Get Content Written
              </Link>
              <Link href="/about" className="btn2">
                Learn More
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
                Top-Rated{" "}
                <strong>Content Writing Agency in Bihar, India</strong> –
                High-Quality Copy Aligned with Modern SEO & AI Standards
              </h2>

              <p className="text-medium line-height-28 sm-line-height-26">
                MaaJanki Web Tech is the premier{" "}
                <strong>content writing and copywriting agency in Bagaha, Bihar, India</strong>
                , dedicated to crafting high-performance copy that drives organic business growth. We deliver professional, SEO-optimized content services for businesses in Patna, Delhi, and globally. Our writing solutions include strategic blog posting, high-converting landing page copywriting, professional company profiles, B2B technical copywriting, and persuasive e-commerce product descriptions. By blending creative storytelling with search data, we help brands stand out in saturated digital spaces.
              </p>

              <p>
                Search engines and modern generative AI tools have redefined content standards. We move away from flat, low-value, AI-generated text, focusing instead on primary research, original insights, and expert authority. By structuring your content around precise user search intent, integrating high-volume long-tail keywords, and strictly adhering to Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines, we build credible, helpful resources. This dual-optimization strategy ensures your website ranks highly on traditional search engines while earning top citations in AI summaries like ChatGPT, Claude, and Perplexity.
              </p>

              <p>
                Beyond rankings, our copy is designed to establish true brand authority and drive customer action. We understand that every sentence must align with your brand's unique narrative and convert casual readers into loyal advocates. By mapping out a comprehensive content strategy, we establish consistency across all marketing funnel assets—including email campaigns, brochures, and website pages. Partner with us to scale your digital presence globally with high-quality, conversion-focused content writing that delivers real, measurable return on marketing investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 8 Sections */}
      <section className="services-overview-section cw-overview-section" style={{ display: "block", background: "none", padding: 0 }}>
        {/* Section 1 */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }} data-aos="fade-up-right">
                <div className="image-container">
                  <div className="main-image">
                    <Image
                      src="/images/all-pages-section-image/Content-writing/what-is-content-writing-image-maajanki.webp"
                      alt="SEO content writing planning by MaaJanki Web Tech"
                      title="SEO Content Writing Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  1. Intent-Based Keyword Research
                </h2>
                <h3 className="sub-heading">
                  Mapping Content and Keywords to Solve User Questions
                </h3>
                <p className="content-text">
                  <strong>Intent-Based Keyword Research</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                      src="/images/all-pages-section-image/Content-writing/why-choose-us-for-content-writing-Maajanki.webp"
                      alt="Website copywriting optimization layouts"
                      title="Website Copywriting Services"
                      loading="lazy"
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  2. High-Performance Website Copywriting
                </h2>
                <h3 className="sub-heading">
                  Writing Landing Page Copy Aligned with Customer Conversion Pathways
                </h3>
                <p className="content-text">
                  <strong>High-Performance Website Copywriting</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                    <div className="cw-svg-wrap">
                      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#042544" />
                            <stop offset="100%" stopColor="#FD6A02" />
                          </linearGradient>
                          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffd700" />
                            <stop offset="100%" stopColor="#ffaa00" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" rx="16" fill="url(#bgGrad3)" />
                        <circle cx="200" cy="150" r="100" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="3" />
                        <rect x="120" y="70" width="160" height="170" rx="12" fill="#042544" stroke="#FD6A02" strokeWidth="2" />
                        <circle cx="140" cy="85" r="4" fill="#FD6A02" />
                        <circle cx="140" cy="115" r="4" fill="#FD6A02" />
                        <circle cx="140" cy="145" r="4" fill="#FD6A02" />
                        <circle cx="140" cy="175" r="4" fill="#FD6A02" />
                        <circle cx="140" cy="205" r="4" fill="#FD6A02" />
                        <line x1="160" y1="90" x2="250" y2="90" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                        <line x1="160" y1="110" x2="250" y2="110" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
                        <line x1="160" y1="130" x2="250" y2="130" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
                        <line x1="160" y1="150" x2="250" y2="150" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" />
                        <line x1="160" y1="170" x2="230" y2="170" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
                        <line x1="160" y1="190" x2="210" y2="190" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="3" strokeLinecap="round" />
                        <path d="M280 80 L310 50 L320 60 L290 90 Z" fill="url(#goldGrad)" />
                        <path d="M280 80 L275 88 L285 85 Z" fill="#fff" />
                        <path d="M90 80 L95 85 L90 90 L85 85 Z" fill="#ffd700" />
                        <path d="M320 200 L323 203 L320 206 L317 203 Z" fill="#ffd700" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  3. Authority-Building Blog Posting
                </h2>
                <h3 className="sub-heading">
                  Earning Topical Authority Through High-Quality Educational Content
                </h3>
                <p className="content-text">
                  <strong>Authority-Building Blog Posting</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                    <div className="cw-svg-wrap">
                      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#042544" />
                            <stop offset="100%" stopColor="#FD6A02" />
                          </linearGradient>
                          <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffd700" />
                            <stop offset="100%" stopColor="#ffaa00" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" rx="16" fill="url(#bgGrad4)" />
                        <rect x="130" y="80" width="140" height="120" rx="16" fill="#042544" stroke="#FD6A02" strokeWidth="3" />
                        <path d="M130 80 L180 50 L200 80 Z" fill="#FD6A02" opacity="0.6" />
                        <path d="M270 80 L220 50 L200 80 Z" fill="#FD6A02" opacity="0.8" />
                        <path d="M170 110 H230 V170 L200 150 L170 170 Z" fill="url(#goldGrad2)" />
                        <line x1="185" y1="125" x2="215" y2="125" stroke="#042544" strokeWidth="3" strokeLinecap="round" />
                        <line x1="185" y1="138" x2="215" y2="138" stroke="#042544" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="160" cy="220" r="12" fill="#FD6A02" />
                        <circle cx="240" cy="220" r="12" fill="#FD6A02" />
                        <path d="M190 230 L193 235 L199 236 L195 240 L196 246 L190 243 L184 246 L185 240 L181 236 L187 235 Z" fill="#ffd700" />
                        <path d="M210 230 L213 235 L219 236 L215 240 L216 246 L210 243 L204 246 L205 240 L201 236 L207 235 Z" fill="#ffd700" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  4. Persuasive Product Description Writing
                </h2>
                <h3 className="sub-heading">
                  Optimizing Product Details to Maximize Online Sales
                </h3>
                <p className="content-text">
                  <strong>Persuasive Product Description Writing</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                    <div className="cw-svg-wrap">
                      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="bgGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#042544" />
                            <stop offset="100%" stopColor="#FD6A02" />
                          </linearGradient>
                          <linearGradient id="goldGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffd700" />
                            <stop offset="100%" stopColor="#ffaa00" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" rx="16" fill="url(#bgGrad5)" />
                        <rect x="110" y="110" width="180" height="110" rx="8" fill="#042544" stroke="#FD6A02" strokeWidth="2" />
                        <line x1="140" y1="130" x2="140" y2="200" stroke="url(#goldGrad3)" strokeWidth="6" />
                        <line x1="170" y1="130" x2="170" y2="200" stroke="url(#goldGrad3)" strokeWidth="6" />
                        <line x1="200" y1="130" x2="200" y2="200" stroke="url(#goldGrad3)" strokeWidth="6" />
                        <line x1="230" y1="130" x2="230" y2="200" stroke="url(#goldGrad3)" strokeWidth="6" />
                        <line x1="260" y1="130" x2="260" y2="200" stroke="url(#goldGrad3)" strokeWidth="6" />
                        <path d="M90 110 L200 60 L310 110 Z" fill="#FD6A02" stroke="#FD6A02" strokeWidth="2" />
                        <ellipse cx="200" cy="155" rx="110" ry="40" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  5. Corporate Profiles & Copywriting
                </h2>
                <h3 className="sub-heading">
                  Establishing Business Credibility with Professional Documentation
                </h3>
                <p className="content-text">
                  <strong>Corporate Profiles & Copywriting</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                    <div className="cw-svg-wrap">
                      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="bgGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#042544" />
                            <stop offset="100%" stopColor="#FD6A02" />
                          </linearGradient>
                          <linearGradient id="goldGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffd700" />
                            <stop offset="100%" stopColor="#ffaa00" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" rx="16" fill="url(#bgGrad6)" />
                        <rect x="100" y="70" width="200" height="150" rx="12" fill="#1e1e1e" stroke="#FD6A02" strokeWidth="3" />
                        <rect x="100" y="70" width="200" height="28" rx="12" fill="#042544" />
                        <circle cx="120" cy="84" r="5" fill="#ff5f56" />
                        <circle cx="135" cy="84" r="5" fill="#ffbd2e" />
                        <circle cx="150" cy="84" r="5" fill="#27c93f" />
                        <text x="120" y="130" fill="url(#goldGrad4)" fontSize="18" fontWeight="bold" fontFamily="monospace">&lt;API&gt;</text>
                        <text x="135" y="160" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="monospace">Content</text>
                        <text x="120" y="190" fill="url(#goldGrad4)" fontSize="18" fontWeight="bold" fontFamily="monospace">&lt;/API&gt;</text>
                        <circle cx="310" cy="200" r="30" fill="#FD6A02" stroke="#FD6A02" strokeWidth="2" />
                        <path d="M310 185 L310 215 M295 200 L325 200" stroke="#ffd700" strokeWidth="6" strokeLinecap="round" />
                        <circle cx="310" cy="200" r="10" fill="#042544" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  6. Technical Copywriting & B2B Content
                </h2>
                <h3 className="sub-heading">
                  Structuring Complex Data into Easy-to-Understand Content
                </h3>
                <p className="content-text">
                  <strong>Technical Copywriting & B2B Content</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                    <div className="cw-svg-wrap">
                      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="bgGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#042544" />
                            <stop offset="100%" stopColor="#FD6A02" />
                          </linearGradient>
                          <linearGradient id="goldGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffd700" />
                            <stop offset="100%" stopColor="#ffaa00" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" rx="16" fill="url(#bgGrad7)" />
                        <path d="M200 50 C230 50 270 60 270 100 C270 160 210 220 200 240 C190 220 130 160 130 100 C130 60 170 50 200 50 Z" fill="#042544" stroke="#FD6A02" strokeWidth="3" />
                        <path d="M170 135 L190 155 L230 105" stroke="url(#goldGrad5)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="130" cy="220" r="25" fill="#FD6A02" stroke="#ffd700" strokeWidth="2" />
                        <path d="M130 210 L133 216 L139 217 L135 221 L136 227 L130 224 L124 227 L125 221 L121 217 L127 216 Z" fill="#ffd700" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">7. E-E-A-T Quality Auditing</h2>
                <h3 className="sub-heading">
                  Optimizing Content Relevancy Under Google's Search Guidelines
                </h3>
                <p className="content-text">
                  <strong>E-E-A-T Quality Auditing</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
                    <div className="cw-svg-wrap">
                      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="bgGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#042544" />
                            <stop offset="100%" stopColor="#FD6A02" />
                          </linearGradient>
                          <linearGradient id="goldGrad6" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffd700" />
                            <stop offset="100%" stopColor="#ffaa00" />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="300" rx="16" fill="url(#bgGrad8)" />
                        <circle cx="200" cy="150" r="40" fill="#042544" stroke="#FD6A02" strokeWidth="2" />
                        <line x1="200" y1="150" x2="290" y2="150" stroke="#ffd700" strokeWidth="3" strokeDasharray="4 4" />
                        <line x1="200" y1="150" x2="110" y2="150" stroke="#ffd700" strokeWidth="3" strokeDasharray="4 4" />
                        <line x1="200" y1="150" x2="200" y2="70" stroke="#ffd700" strokeWidth="3" strokeDasharray="4 4" />
                        <line x1="200" y1="150" x2="200" y2="230" stroke="#ffd700" strokeWidth="3" strokeDasharray="4 4" />
                        <circle cx="290" cy="150" r="16" fill="#FD6A02" stroke="#fff" strokeWidth="2" />
                        <circle cx="110" cy="150" r="16" fill="#FD6A02" stroke="#fff" strokeWidth="2" />
                        <circle cx="200" cy="70" r="16" fill="#FD6A02" stroke="#fff" strokeWidth="2" />
                        <circle cx="200" cy="230" r="16" fill="#FD6A02" stroke="#fff" strokeWidth="2" />
                        <text x="284" y="156" fill="#ffd700" fontSize="16" fontWeight="bold">”</text>
                        <rect x="190" y="140" width="20" height="20" rx="4" fill="url(#goldGrad6)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="content-title">Our Content Writing Solutions</h2>
                <h3 className="content-heading">Website Content Writing</h3>
                <p className="content-text">
                  <strong>Our Content Writing Solutions</strong> connects your business with target clients and builds market authority. In competitive markets, standing out with optimized content writing is essential to attract qualified leads. This is where MaaJanki Web Tech comes.
                </p>
                <p className="content-text">
                  We specialize in <strong>keyword-rich search content that highlights your products and services with clarity and impact.</strong> By leveraging semantic search terms and long-tail query mapping, we ensure your content writing aligns with the algorithms and search behavior of Google and other search engines.
                </p>
                <p className="content-text">
                  Our experts use keywords, AEO (Answer Engine Optimization) strategies, and clear formatting to boost visibility and engagement. We focus on naturalness, accuracy, and professionalism to build credibility and encourage direct inquiries.
                </p>
                <p className="content-text">
                  Whether you are a manufacturer, exporter, or service provider, we help you build a conversion-centered digital presence. We ensure your profiles and product pages look reliable, informative, and ready to convert visitors into customers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your search-optimized written copy</strong> becomes a powerful lead-generation tool that expands your business reach, builds buyer trust, and drives continuous B2B market growth.
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
      <section className="content-section">
        <h2 className="content-title">Our Content Writing Solutions</h2>
        <p className="content-subtitle">
          We write SEO-optimized copy, blog articles, and product catalogs
          designed to drive organic growth.
        </p>

        <div className="content-grid">
          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="content-heading">Website Content Writing</h3>
            <p>
              SEO website content that improves search rankings and communicates
              your brand message clearly.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-pen"></i>
            </div>
            <h3 className="content-heading">Blog & Article Writing</h3>
            <p>
              High-quality blog posting designed to educate readers and build
              topical authority.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="content-heading">SEO Copywriting Services</h3>
            <p>
              Keyword-optimized content aligned with search intent to generate
              organic business leads.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-tags"></i>
            </div>
            <h3 className="content-heading">Product Descriptions</h3>
            <p>
              Persuasive descriptions and specifications optimized to increase
              online sales.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <h3 className="content-heading">Social Media Copywriting</h3>
            <p>
              Engaging captions and post copy to reinforce your brand voice on
              social feeds.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h3 className="content-heading">Emails & Newsletters</h3>
            <p>
              Conversion-focused email copy designed to nurture leads and
              support retention campaigns.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-building"></i>
            </div>
            <h3 className="content-heading">Company Profiles</h3>
            <p>
              Professional profiles communicating business goals to build
              credibility.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h3 className="content-heading">Landing Page Copy</h3>
            <p>
              High-converting sales copy designed to capture leads and drive
              action.
            </p>
          </div>

          <div className="content-box">
            <div className="content-icon">
              <i className="fas fa-newspaper"></i>
            </div>
            <h3 className="content-heading">Press Release Writing</h3>
            <p>
              News-worthy PR copy to attract media attention and support your
              branding goals.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="content-writing-tools-section">
        <div className="tools-heading-section">
          <h2 className="tools-heading-title">
            Content Writing & SEO Tools We Use
          </h2>
        </div>

        <div className="content-section-grid">
          {[
            {
              src: "/images/icons/grammar.png",
              label: "Grammarly",
            },
            {
              src: "/images/icons/writing-down.png",
              label: "Hemingway",
            },
            {
              src: "/images/icons/google-docs--v2.png",
              label: "Google Docs",
            },
            {
              src: "/images/icons/notion.png",
              label: "Notion",
            },
            {
              src: "/images/icons/artificial-intelligence.png",
              label: "Jasper AI",
            },
            {
              src: "/images/icons/chatgpt.png",
              label: "ChatGPT",
            },
            {
              src: "/images/icons/artificial-intelligence.png",
              label: "Frase.io",
            },
            {
              src: "/images/icons/synchronize.png",
              label: "QuillBot",
            },
            {
              src: "/images/icons/surfing.png",
              label: "Surfer SEO",
            },
            {
              src: "/images/icons/copy.png",
              label: "Copy.ai",
            },
          ].map((tool, index) => (
            <div key={index} className="content-card-box">
              <Image
                className="content-card-icon"
                src={tool.src}
                alt={`${tool.label} content tool`}
                loading="lazy"
               width={150} height={50} />
              <span className="content-card-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure Section */}
      <section className="graphic-landing-section">
        <div className="graphic-container">
          <div className="graphic-left">
            <h2 className="br-graphic-heading">
              Download Our Content Writing & Copywriting Guide
            </h2>
            <p className="graphic-subtext">
              Partner with MaaJanki Web Tech to build organic visibility. We
              write professional, SEO-optimized copy to connect with your target
              customers.
            </p>

            <div className="graphic-brochure-box">
              <h3 className="graphic-brochure-title">
                Download Our Copywriting Campaign Outline
              </h3>
              <p className="graphic-brochure-desc">
                Learn about our content workflows, blog schedules, and keyword
                research templates in our brochure.
              </p>

              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Website Content Audits &
                Strategy
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> SEO Content Optimization
                Templates
              </div>
              <div className="graphic-feature">
                <i className="fas fa-check-circle"></i> Blog Content Calendars
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
              >
                ⬇️ Download Content Brochure
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
                        Request Content Brochure
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
                        value="Content_Brochure"
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
                { icon: "fas fa-search", title: "Keyword Optimization" },
                {
                  icon: "fas fa-chart-line",
                  title: "Content Performance Reports",
                },
                {
                  icon: "fas fa-map-marker-alt",
                  title: "Local content targeting",
                },
                { icon: "fas fa-pen-nib", title: "Website Copywriting" },
                { icon: "fas fa-link", title: "SEO-friendly blog posts" },
                { icon: "fas fa-cogs", title: "E-E-A-T Quality Checks" },
                { icon: "fas fa-bullhorn", title: "Conversion Copywriting" },
                { icon: "fas fa-rocket", title: "AI Search Optimizations" },
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

      {/* Process Workflow Section */}
      <section className="jobready-workflow">
        <h2 className="jobready-heading-small">How We Work</h2>
        <h2 className="jobready-heading-main">
          Our Proven Content Optimization Process Flow
        </h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. Target Search Research</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. Strategy Setup</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-pen"></i>
            </div>
            <p>3. Copywriting drafts</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-cogs"></i>
            </div>
            <p>4. SEO Keywords Tuning</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-check-double"></i>
            </div>
            <p>5. Readability checks</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-rocket"></i>
            </div>
            <p>6. Content Launch</p>
          </div>
        </div>
      </section>

      {/* Blog & Educational Section */}
      <section className="service-gradient-black-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                Why Professional Copywriting Is Essential for Digital Marketing
                Success
              </h2>
              <p>
                Professional copywriting distinguishes your brand, establishing
                trust and market authority. While generic templates offer fast
                setups, they lack unique brand narrative alignment. A custom
                copywriting strategy ensures your website copy, blog posts, and
                landing pages remain consistent, reinforcing your brand voice
                and supporting organic business growth.
              </p>

              <h3 className="inner-heading font-weight-500 alt-font d-block margin-10px-bottom text-medium text-extra-dark-gray">
                How Informational Content Drives Customer Conversions
              </h3>
              <p>
                Informational content answers customer questions directly,
                building organic trust and visitor engagement. Providing
                detailed solutions establishes your brand as an industry
                authority, prompting users to take action. A strategic
                copywriting approach focuses on user intent, helping you convert
                organic traffic into loyal customers.
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
            <h2 className="cw-pricing-title">Transparent Content Packages</h2>
            <p className="cw-pricing-subtitle">
              Select a content plan structured for your growth stage. Scale your brand authority with professional, plagiarism-free, and SEO-optimized copy.
            </p>
          </div>

          <div className="cw-pricing-grid">
            {/* Plan 1 */}
            <div className="cw-price-card">
              <div className="cw-price-card-top">
                <div className="cw-price-icon">🚀</div>
                <h3 className="cw-price-name">Starter Content Plan</h3>
                <p className="cw-price-desc">
                  Perfect for growing blogs and local businesses looking to establish a basic search presence.
                </p>
                <div className="cw-price-amount">
                  <span className="cw-currency">₹</span>
                  <span className="cw-price-num">5,999</span>
                  <span className="cw-price-period">/ Month</span>
                </div>
              </div>
              <ul className="cw-price-features">
                <li><span className="cw-check">✔</span> 4 High-Quality Blog Posts (1000+ words)</li>
                <li><span className="cw-check">✔</span> Intent-Based Keyword Research</li>
                <li><span className="cw-check">✔</span> Basic On-Page SEO & Meta Tags</li>
                <li><span className="cw-check">✔</span> Plagiarism (Copyscape) & Grammarly Check</li>
                <li><span className="cw-check">✔</span> 1 Round of Revision per Article</li>
                <li><span className="cw-check">✔</span> Monthly Content Performance Report</li>
              </ul>
              <Link href="/contact" className="cw-price-btn cw-price-btn-outline">
                Get Started
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="cw-price-card cw-price-card-featured">
              <span className="cw-price-popular-badge">🔥 Most Popular</span>
              <div className="cw-price-card-top">
                <div className="cw-price-icon">🏢</div>
                <h3 className="cw-price-name">Authority Blog Plan</h3>
                <p className="cw-price-desc">
                  Ideal for businesses looking to aggressively build topical authority and drive organic traffic.
                </p>
                <div className="cw-price-amount">
                  <span className="cw-currency">₹</span>
                  <span className="cw-price-num">11,999</span>
                  <span className="cw-price-period">/ Month</span>
                </div>
              </div>
              <ul className="cw-price-features">
                <li><span className="cw-check">✔</span> 8 High-Quality Blog Posts (1200+ words)</li>
                <li><span className="cw-check">✔</span> Semantic Topic Clustering & Mapping</li>
                <li><span className="cw-check">✔</span> Core Keyword Target Alignment</li>
                <li><span className="cw-check">✔</span> Google E-E-A-T Quality Compliance</li>
                <li><span className="cw-check">✔</span> Advanced Internal Linking Strategy</li>
                <li><span className="cw-check">✔</span> Premium Support & Unlimited Revisions</li>
              </ul>
              <Link href="/contact" className="cw-price-btn cw-price-btn-filled">
                Get Started
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="cw-price-card">
              <div className="cw-price-card-top">
                <div className="cw-price-icon">🛒</div>
                <h3 className="cw-price-name">Custom Copywriting</h3>
                <p className="cw-price-desc">
                  Tailored services for landing page copy, product descriptions, pitch decks, and B2B case studies.
                </p>
                <div className="cw-price-amount">
                  <span className="cw-price-num">Custom</span>
                </div>
              </div>
              <ul className="cw-price-features">
                <li><span className="cw-check">✔</span> High-Converting Website Copy</li>
                <li><span className="cw-check">✔</span> Sales Landing Pages & Email Funnels</li>
                <li><span className="cw-check">✔</span> B2B Case Studies & Whitepapers</li>
                <li><span className="cw-check">✔</span> Optimized Product Descriptions</li>
                <li><span className="cw-check">✔</span> Dedicated Project Manager</li>
                <li><span className="cw-check">✔</span> Tailored Content Calendar Strategy</li>
              </ul>
              <Link href="/contact" className="cw-price-btn cw-price-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="cw-pricing-trust">
            <div className="cw-trust-item">
              <span>✍️</span> 100% Copyscape Passed
            </div>
            <div className="cw-trust-item">
              <span>👥</span> Dedicated Niche Writers
            </div>
            <div className="cw-trust-item">
              <span>🎯</span> SEO & GEO Optimized
            </div>
            <div className="cw-trust-item">
              <span>🔄</span> Unlimited Revisions
            </div>
          </div>

          {/* FAQ section integrated beautifully inside pricing grid theme */}
          <div className="cw-pricing-faq">
            <h3 className="cw-pricing-faq-title">Frequently Asked Questions</h3>
            <div className="cw-pricing-faq-grid">
              <div className="cw-pricing-faq-item">
                <h4>What is Content Writing?</h4>
                <p>
                  Think of content writing as the art of telling your brand's story. It's about planning, writing, and editing useful online materials—like blogs, articles, and website pages—that don't just sell, but actually help and educate your audience.
                </p>
              </div>
              <div className="cw-pricing-faq-item">
                <h4>Why is SEO Content writing important?</h4>
                <p>
                  It’s how your customers find you organically. When you write content around the exact words and questions your audience is searching for, search engines notice. It lifts your rankings, puts you on their radar, and makes you a trusted resource.
                </p>
              </div>
              <div className="cw-pricing-faq-item">
                <h4>What is E-E-A-T in content writing?</h4>
                <p>
                  It is Google's checklist for quality content: Experience, Expertise, Authoritativeness, and Trustworthiness. Basically, Google wants to know if you really know your stuff, if your facts are correct, and if readers can trust your advice.
                </p>
              </div>
              <div className="cw-pricing-faq-item">
                <h4>How do you write content for AI search engines?</h4>
                <p>
                  AI bots don't search the web like humans do—they look for quick, direct, and structured facts. We write conversational headings and clear, straightforward answers that make it incredibly easy for AI systems (like ChatGPT and Gemini) to parse, understand, and credit your site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Content Writing</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What exactly does a content writer do?",
              answer: "They research, draft, and optimize online copy. A writer's goal is to create content—like blogs, articles, and landing pages—that connects with your audience and performs well on search engines."
            },
            {
              id: "faq2",
              question: "Why does my website need professional copywriting?",
              answer: "Good copywriting is your online salesperson. It captures a visitor’s interest, explains the value of your services clearly, and guides them toward taking action, like making a purchase or filling out a form."
            },
            {
              id: "faq3",
              question: "What goes into website copywriting?",
              answer: "It covers all your main website pages—like your homepage, about page, services, contact pages, and landing layouts. We write everything that tells your brand's story and guides customers through your site."
            },
            {
              id: "faq4",
              question: "How long does a content project usually take?",
              answer: "A standard blog post takes about 2 to 3 days from research to draft. If you are doing a full website copywriting project, it typically takes 2 to 3 weeks to complete."
            },
            {
              id: "faq5",
              question: "Do you write content for all kinds of industries?",
              answer: "Yes, we do. We dive deep into research for every project, allowing us to write confidently for diverse fields like technology, healthcare, finance, and e-commerce."
            },
            {
              id: "faq6",
              question: "What tools do you use to check content quality?",
              answer: "We check every draft with tools like Grammarly and Hemingway Editor to fix grammar and readability. We also use premium plagiarism checkers to ensure every piece is completely original."
            },
            {
              id: "faq7",
              question: "Can you optimize or rewrite our existing website copy?",
              answer: "Absolutely! We analyze what you currently have, improve its flow and readability, add the right keywords naturally, and build in stronger calls-to-action to help you convert more readers."
            },
            {
              id: "faq8",
              question: "Why is keyword mapping so important?",
              answer: "It prevents your pages from competing with each other in search results. By dedicating specific keywords to specific pages, we make sure search engines understand exactly which page to rank for each query."
            },
            {
              id: "faq9",
              question: "What is B2B content marketing?",
              answer: "It’s content written for other businesses. We write authoritative assets—like industry reports, whitepapers, and detailed case studies—that show your expertise and help you build trust with corporate buyers."
            },
            {
              id: "faq10",
              question: "Do you write email newsletters?",
              answer: "Yes! We write engaging subject lines and email copy designed to catch attention in crowded inboxes, nurture leads, and keep your customers coming back."
            },
            {
              id: "faq11",
              question: "How do we get started on a content project?",
              answer: "Just email us at info@maajankiwebtech.com or click 'Get Content Written'. Share a few details about your project, and we will get back to you with a tailored plan."
            },
            {
              id: "faq12",
              question: "Are revisions included in your packages?",
              answer: "Yes, they are. We want you to love your content, so we provide revision rounds to fine-tune the tone and details until it perfectly matches your brand voice."
            },
            {
              id: "faq13",
              question: "Do you write captions for social media?",
              answer: "Yes! We write engaging, platform-specific captions and post copy that encourage conversations and keep your followers connected with your brand."
            },
            {
              id: "faq14",
              question: "How does content help my website's SEO?",
              answer: "By publishing helpful, keyword-optimized content regularly, you show search engines that your site is active, relevant, and a trusted authority in your niche. This directly boosts your overall search rankings."
            },
            {
              id: "faq15",
              question: "What is Generative Engine Optimization in copywriting?",
              answer: "It is structuring your content so AI engines like ChatGPT and Gemini can easily read, retrieve, and cite your site when answering user questions. We write direct, structured facts to make your brand 'AI-ready'."
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

export default ContentWriting;
