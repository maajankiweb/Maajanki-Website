'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/PerformanceMarketing.css";
import "@/app/styles/Home.css";
import "@/app/styles/Branding.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const PerformanceMarketing = () => {
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
          "name": "Performance Marketing Services - MaaJanki Web Tech",
          "description": "ROI-focused performance marketing services including Google Ads PPC, Meta paid social, conversion tracking, retargeting, and landing page optimization.",
          "url": "https://maajankiwebtech.com/services/performance-marketing",
          "image": "https://maajankiwebtech.com/assets/og-image-performance.jpg",
          "priceRange": "₹₹",
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "State", "name": "Bihar" }
          ],
          "provider": {
            "@type": "Organization",
            "@id": "https://maajankiwebtech.com/#organization",
            "name": "MaaJanki Web Tech",
            "url": "https://maajankiwebtech.com/",
            "logo": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
            "founder": {
              "@type": "Person",
              "name": "Ashish Kumar",
              "sameAs": [
                "https://www.linkedin.com/in/ashishkumarji/",
                "https://www.wikidata.org/wiki/Q115783355"
              ]
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9006543913",
              "contactType": "Customer Support",
              "email": "info@maajankiwebtech.com"
            }
          }
        }
        ` }} />


      {/* Banner Section */}
      <section className="custom-banner">
        <Image priority src="/images/pages/main-services-pages/performance-marketing-banner-image-MaaJanki-Web-Tech.webp" alt="Performance Marketing Services by MaaJanki Web Tech for ROI-driven ads, leads, and conversions" title="ROI-Focused Performance Marketing Services – Google Ads, Meta Ads & PPC | MaaJanki Web Tech" width="1280" height="720"/>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Google Ads &amp; Performance Marketing Agency in Bihar &amp; India
            </h1>
            <div className="aeo-definition-box">
              <p>
                <strong>Performance Marketing Services</strong> represent a
                data-led approach to digital advertising where advertisers
                invest budget into paid acquisition channels such as Google Ads
                (PPC), Meta Ads (Facebook & Instagram), and search engine
                marketing paying strictly for completed user actions, including
                purchases, downloads, form submissions, and qualified leads.
              </p>
            </div>
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
      {/* Banner Section End */}

      {/* Page Introduction Section - Redesigned Modern Layout */}
      <section
        className="pm-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="pm-intro-card"
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
                Performance Marketing &amp; Paid Growth
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
                Top-Rated <span style={{ color: "#FD6A02" }}>Performance Marketing Agency in Bihar, India</span> – Accelerating Business Growth via Data-Driven Paid Ads
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
                  Are you looking for professional{" "}
                  <strong style={{ color: "#ffffff" }}>performance marketing services in India</strong>? MaaJanki Web Tech, located in Bagaha, Bihar, designs and executes conversion-focused paid advertising campaigns for businesses in Patna, Delhi, and globally.
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
                  We conduct detailed customer persona audits, configure advanced tracking tags, write compelling ad copies, and perform A/B tests to optimize Return on Ad Spend (ROAS) and capture ready-to-buy consumers efficiently. Complement paid campaigns with <Link href="/services/seo" style={{ color: "#FD6A02", fontWeight: 600, textDecoration: "none" }}>organic SEO services</Link> to achieve sustainable, full-funnel market dominance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 9 Semantic Sections */}
      <section className="services-overview-section pm-overview-section" style={{ display: "block", background: "none", padding: 0 }}
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="Google Ads PPC campaigns and search engine marketing by MaaJanki Web Tech"
                      title="Google Ads & PPC Marketing"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  1. Google Ads &amp; Search Engine Marketing (SEM)
                </h2>
                <h3 className="sub-heading">
                  Targeting High-Intent Search Queries to Capture Active Buyers
                </h3>
                <p className="content-text">
                  Google Search Ads connect your business to users actively searching for what you offer — reaching buyers at the exact moment of purchase intent. We build campaigns with tightly themed ad groups, structured keyword match types (exact match for control, broad match with smart bidding for scale), and Responsive Search Ads with 10–15 tested headline combinations.
                </p>
                <p className="content-text">
                  Every campaign targets a verified ROAS goal, tracked through GA4 conversion events and Google Tag Manager. We build negative keyword lists from search term reports to eliminate wasteful spend and continuously refine bid strategies (Target CPA, Target ROAS, Maximize Conversions) based on live campaign data.
                </p>
                <span className="content-cta">
                  <strong>Drive measurable leads and scalable ROAS with data-backed paid advertising. Reach buyers the moment they search with MaaJanki Web Tech.</strong>
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="Meta paid social media ads on Facebook and Instagram by MaaJanki Web Tech"
                      title="Meta Paid Advertising"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  2. Meta Ads (Facebook &amp; Instagram Advertising Agency)
                </h2>
                <h3 className="sub-heading">
                  Utilizing Behavioral Demographics to Build Paid Social Funnels
                </h3>
                <p className="content-text">
                  Meta Ads reach buyers during awareness and consideration phases using behavioral and demographic targeting. Our approach builds a complete paid social funnel: cold audience campaigns using interest-based and Lookalike Audiences; mid-funnel engagement retargeting (website visitors, video viewers, lead form openers); and bottom-funnel conversion campaigns optimized for form submissions or purchases.
                </p>
                <p className="content-text">
                  We test 3–5 creative variations per audience — image vs video, single image vs carousel, different headlines — and scale ad sets where cost-per-lead meets target. All campaigns use the Meta Conversions API alongside Pixel for reliable attribution in a cookieless environment.
                </p>
                <span className="content-cta">
                  <strong>Meet your buyers where they scroll — build a Meta Ads funnel that converts.</strong>
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="Conversion Rate Optimization and funnel audits by MaaJanki Web Tech"
                      title="CRO & Funnel Auditing"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  3. CRO — Conversion Rate Optimization
                </h2>
                <h3 className="sub-heading">
                  Designing High-Performing User Journeys to Maximize Click-to-Lead Rates
                </h3>
                <p className="content-text">
                  CRO maximizes the value of your existing traffic by improving the percentage of visitors who take a desired action. Our CRO process: heatmap and session recording analysis (Microsoft Clarity) to identify drop-off points; A/B tests for headlines, button colors, and form layouts; form optimization (reduce fields, add social proof near CTA); page speed audit (LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1); and GA4 funnel analysis to identify conversion bottlenecks across your full acquisition flow.
                </p>
                <span className="content-cta">
                  <strong>More leads without more ad spend — unlock your conversion rate potential.</strong>
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="Precision retargeting and remarketing setup by MaaJanki Web Tech"
                      title="Retargeting & Remarketing Campaigns"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  4. Precision Retargeting & Remarketing Campaigns
                </h2>
                <h3 className="sub-heading">
                  Re-Engaging Website Visitors to Recapture Warm Audiences
                </h3>
                <p className="content-text">
                  Retargeting re-engages visitors who have already shown interest in your business — the warm audience most likely to convert — by serving them targeted ads across Google Display Network, YouTube, and Meta platforms. Research shows retargeted visitors convert <strong>70% more often</strong> than cold audiences, making remarketing one of the highest-ROAS activities in any paid media mix.
                </p>
                <p className="content-text">
                  We build segmented retargeting audiences by behavior: visitors who viewed a specific service page (serve ads for that exact service), visitors who reached the contact page but did not submit (serve a friction-reduction offer), and past customers (serve <strong>cross-sell or renewal ads</strong> with time-based triggers).
                </p>
                <p className="content-text">
                  Retargeting frequency is managed with <strong>ad frequency caps</strong> to prevent audience fatigue — ensuring your ads feel helpful rather than intrusive. Campaign duration is set based on your sales cycle length, from 7-day quick-buy cycles to 90-day enterprise decision timelines.
                </p>
                <span className="content-cta">
                  <strong>Re-engage the 97% who left without converting — set up your retargeting funnel.</strong>
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="B2B lead generation and LinkedIn advertising campaigns"
                      title="LinkedIn Ads & B2B Lead Gen"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  5. B2B Lead Generation & LinkedIn Ads
                </h2>
                <h3 className="sub-heading">
                  Connecting Your Brand with Key Corporate Decision-Makers
                </h3>
                <p className="content-text">
                  LinkedIn Ads are the most effective paid channel for B2B lead generation — reaching decision-makers by job title, seniority, company size, and industry with precision no other platform offers. We build <strong>LinkedIn campaign funnels</strong> covering awareness (Thought Leadership ads, Document Ads), consideration (Video Ads, Conversation Ads), and conversion (Lead Gen Form Ads with native in-platform submission).
                </p>
                <p className="content-text">
                  For B2B lead generation across all channels, we combine Google Search Ads for active query intent, Meta Ads for retargeting decision-makers who visited your website, and email nurture sequences triggered by lead magnet downloads — creating a <strong>coordinated multi-channel acquisition system</strong> that builds your sales pipeline consistently.
                </p>
                <p className="content-text">
                  Every B2B lead captured is routed to your CRM with full <strong>attribution data</strong> — platform, campaign, ad creative, landing page, and form — so your sales team knows exactly what triggered the inquiry and can personalize their outreach accordingly.
                </p>
                <span className="content-cta">
                  <strong>Reach the decision-makers who buy — launch your B2B LinkedIn campaign today.</strong>
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="Google Shopping and Performance Max eCommerce advertising"
                      title="eCommerce Product Ads"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  6. eCommerce Product Advertising (Google Shopping & PMax)
                </h2>
                <h3 className="sub-heading">
                  Optimizing Product Feeds to Increase Online Transactions &
                  ROAS
                </h3>
                <p className="content-text">
                  Google Shopping Ads place your products directly in front of buyers searching for them — with product image, price, and store name visible before they click. We build and optimize your <strong>Google Merchant Center product feed</strong>: accurate titles with primary keywords, detailed descriptions, correct GTINs, high-resolution images, and competitive pricing signals that determine ad placement and CPC.
                </p>
                <p className="content-text">
                  <strong>Performance Max (PMax) campaigns</strong> extend your product ads across all Google channels — Search, Shopping, Display, YouTube, Gmail, and Maps — using Google&apos;s AI to allocate budget to the highest-converting placements. We structure PMax asset groups by product category, audience signal, and creative variation to give the algorithm the clearest optimization signal.
                </p>
                <p className="content-text">
                  ROAS tracking is configured end-to-end: <strong>GA4 e-commerce purchase events &rarr; Google Ads conversion import &rarr; automated bid strategy</strong> set to target ROAS — ensuring every product category bids efficiently for its own margin profile, not a one-size-fits-all campaign structure.
                </p>
                <span className="content-cta">
                  <strong>Put your products in front of ready-to-buy shoppers — optimize your Shopping campaigns.</strong>
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="YouTube video advertising and interactive display campaigns"
                      title="YouTube Video & Interactive Display Ads"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">
                  7. YouTube Video Ads & Interactive Display Advertising
                </h2>
                <h3 className="sub-heading">
                  Leveraging Video Assets to Build Brand Trust and
                  Direct-Response Action
                </h3>
                <p className="content-text">
                  YouTube Video Ads are the most powerful tool for building brand trust at scale — with 2.7 billion active users and the ability to target by search history, channel subscriptions, and demographic profiles. We produce and manage <strong>TrueView in-stream ads</strong> (skippable after 5 seconds), non-skippable bumper ads (6-second, 100% completion), and Discovery ads appearing in YouTube search results alongside organic videos.
                </p>
                <p className="content-text">
                  Google Display Network (GDN) ads reach your audience across 35 million websites and apps with visual banner and responsive display ads. We design <strong>responsive creatives</strong> in all standard IAB sizes, test multiple visual and copy variations, and use placements targeting, contextual targeting, and audience targeting simultaneously to minimize wasted impressions.
                </p>
                <p className="content-text">
                  <strong>View-through conversion tracking</strong> measures the impact of display and video ads on users who saw your ad but converted later through a different channel — giving you a complete attribution picture of how upper-funnel awareness campaigns contribute to bottom-funnel conversions over 7 and 30-day windows.
                </p>
                <span className="content-cta">
                  <strong>Build brand recall and demand at scale — launch your video advertising campaign.</strong>
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="GA4 analytics setup and conversion attribution tracking"
                      title="GA4 Analytics Setup"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">
                  8. Analytics Setup & GA4 Attribution Mapping
                </h2>
                <h3 className="sub-heading">
                  Tracking Conversion Events to Measure Exact Marketing ROI
                </h3>
                <p className="content-text">
                  Accurate analytics is the foundation of every performance marketing decision. We configure <strong>Google Analytics 4</strong> with a complete event taxonomy: page views, scroll depth, outbound link clicks, form starts, form submissions, phone number clicks, video plays, and e-commerce purchase events — giving you a conversion-attributed view of every user interaction on your website.
                </p>
                <p className="content-text">
                  We implement <strong>Google Tag Manager</strong> containers to manage all tracking tags without requiring developer code changes for each update. GTM enables rapid deployment of GA4 events, Google Ads conversion tags, Meta Pixel, LinkedIn Insight Tag, and Microsoft Clarity — all from a single interface with version control and rollback capability.
                </p>
                <p className="content-text">
                  For multi-channel campaigns, we configure <strong>GA4 data-driven attribution modeling</strong> — moving beyond last-click to understand the full contribution of awareness (YouTube, Display), consideration (Meta, remarketing), and conversion (Search, Shopping) touchpoints. This ensures budget is allocated to the campaigns that actually drive business, not just those that get the last click.
                </p>
                <span className="content-cta">
                  <strong>You can&apos;t optimize what you can&apos;t measure — get your analytics stack built right.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9 */}
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
                      src="/images/all-pages-section-image/performance-marketing/what-is-Performance-marketing-maajanki.webp"
                      alt="Generative engine optimization and landing page AEO alignment"
                      title="GEO & AEO for Landing Pages"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" data-aos="fade-up-left">
                <h2 className="main-heading">9. GEO & AEO for Landing Pages</h2>
                <h3 className="sub-heading">Formatting Ad Content to Be Indexed and Cited by AI Answer Engines</h3>
                <p className="content-text">
                  Every paid media campaign landing page benefits from GEO and AEO structuring — ensuring the page content is not only optimized for Google Ads Quality Score but also <strong>readable and citation-worthy</strong> for AI engines like Perplexity, ChatGPT Search, and Google AI Overviews that increasingly surface service recommendations.
                </p>
                <p className="content-text">
                  We apply <strong>direct-answer content formatting</strong> to landing pages: placing the core value proposition in the first paragraph, using FAQ schema for common buyer questions, and structuring benefit lists as semantic HTML so AI crawlers extract accurate claims about your service. This simultaneously improves organic CTR and strengthens AI citation eligibility.
                </p>
                <p className="content-text">
                  Landing pages built for performance campaigns also receive <strong>structured data markup</strong> — Service schema, FAQPage schema, and BreadcrumbList — ensuring that even paid-traffic destination pages contribute to your brand&apos;s overall entity authority and are discoverable through non-paid AI search channels.
                </p>
                <span className="content-cta">
                  <strong>Make every landing page work harder — optimized for paid traffic and AI discovery.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 10 */}
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
                      src="/images/all-pages-section-image/performance-marketing/why-choose-us-performance-marketing-maajanki.webp"
                      alt="Landing page development and conversion optimization by MaaJanki Web Tech"
                      title="Landing Page Development & Optimization"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                     width={600} height={400} />
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }} data-aos="fade-up-left">
                <h2 className="main-heading">10. Landing Page Design &amp; Optimization</h2>
                <h3 className="sub-heading">Engineering Sub-Second Direct-Response Landing Pages to Maximize Google &amp; Meta Quality Scores</h3>
                <p className="content-text">
                  Every ad campaign needs a dedicated landing page — not your homepage. Sending paid traffic to a generic page destroys Quality Score and wastes budget. Through our high-performance <Link href="/services/web-development" style={{ color: "#FD6A02", fontWeight: 600, textDecoration: "none" }}>dedicated landing pages</Link>, we design conversion-optimized landing pages with a single clear CTA, above-the-fold trust signals (client logos, review scores, credentials), minimal form fields, and page-specific GA4 conversion tracking.
                </p>
                <p className="content-text">
                  Our landing pages are built in Next.js for sub-1-second mobile load times — a direct Google Ads Quality Score factor — and are A/B tested for headlines, CTA text, and form length to continuously improve conversion rate.
                </p>
                <span className="content-cta">
                  <strong>Transform paid clicks into profitable customers — build custom performance landing pages with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="performance-marketing-section">
        <h2 className="pm-title">
          Performance Marketing Solutions That Drive ROI & Conversions
        </h2>
        <p className="pm-subtitle">
          We combine data analytics, copy testing, and channel optimization to
          maximize your return on ad spend (ROAS).
        </p>

        <div className="pm-grid">
          {[
            {
              icon: "fas fa-bullseye",
              heading: "PPC Ad Management",
              text: "Launch and manage Search, Display, and Performance Max campaigns on Google Ads and Bing Ads to target high-intent buyers.",
            },
            {
              icon: "fab fa-facebook-square",
              heading: "Meta Paid Social Ads",
              text: "Run conversion and lead generation campaigns on Facebook and Instagram using demographic and custom interest targeting.",
            },
            {
              icon: "fas fa-undo",
              heading: "Remarketing Funnels",
              text: "Re-engage site visitors and cart abandoners across search and social channels to recover lost conversions.",
            },
            {
              icon: "fas fa-percentage",
              heading: "CRO Consulting",
              text: "Audit landing pages, forms, and headings to simplify buyer paths and increase conversion rates.",
            },
            {
              icon: "fas fa-envelope-open-text",
              heading: "Marketing Automation",
              text: "Nurture new leads with automated email sequences and follow-ups to increase customer lifetime value.",
            },
            {
              icon: "fas fa-chart-pie",
              heading: "GA4 Tracking & Auditing",
              text: "Configure GTM, Google Analytics 4, and conversion pixels to track actions and build reports.",
            },
            {
              icon: "fas fa-newspaper",
              heading: "Native Ad Placements",
              text: "Promote brand stories on networks like Taboola and Outbrain to reach audiences on premium publisher sites.",
            },
            {
              icon: "fas fa-link",
              heading: "Affiliate Management",
              text: "Setup and manage performance-based affiliate partnerships with tracking to ensure paid conversions.",
            },
            {
              icon: "fas fa-user-friends",
              heading: "B2B LinkedIn Campaigns",
              text: "Run targeted B2B sponsored content and lead gen forms to reach corporate decision-makers directly.",
            },
          ].map((item, index) => (
            <div key={index} className="pm-box">
              <i className={`pm-icon ${item.icon}`} aria-hidden="true"></i>
              <h3 className="pm-heading">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Section */}
      <section className="performance-tools-section">
        <div className="tools-heading-section">
          <h2 className="tools-heading-title">
            Performance Marketing Channels & Platforms We Utilize
          </h2>
        </div>

        <div className="performance-section-grid">
          {[
            {
              src: "/images/icons/google-logo.png",
              alt: "Google Ads platform for PPC advertising",
              title: "Google Ads",
              label: "Google Ads",
            },
            {
              src: "/images/icons/facebook-circled.png",
              alt: "Meta Ads manager for Facebook and Instagram marketing",
              title: "Meta Ads",
              label: "Meta Ads",
            },
            {
              src: "/images/icons/google-analytics.png",
              alt: "Google Analytics 4 for conversion auditing",
              title: "Google Analytics",
              label: "GA4 Tracking",
            },
            {
              src: "/images/icons/linkedin.png",
              alt: "LinkedIn campaign manager for B2B ads",
              title: "LinkedIn Ads",
              label: "LinkedIn Ads",
            },
            {
              src: "/images/Tools icon/performance-marketing/hubspot.png",
              alt: "HubSpot CRM and automation platform",
              title: "HubSpot CRM",
              label: "HubSpot",
            },
            {
              src: "/images/Tools icon/performance-marketing/semrush.jpg",
              alt: "SEMrush tool for keyword and competitor research",
              title: "SEMrush",
              label: "SEMrush",
            },
            {
              src: "/images/Tools icon/performance-marketing/tabools.jpg",
              alt: "Taboola platform for native ads",
              title: "Taboola Ads",
              label: "Taboola",
            },
            {
              src: "/images/Tools icon/performance-marketing/outbrain.png",
              alt: "Outbrain native content recommendation network",
              title: "Outbrain Ads",
              label: "Outbrain",
            },
            {
              src: "/images/Tools icon/performance-marketing/adroll.png",
              alt: "AdRoll retargeting and remarketing suite",
              title: "AdRoll",
              label: "AdRoll",
            },
            {
              src: "/images/icons/google-tag-manager.png",
              alt: "Google Tag Manager for conversion event setup",
              title: "Google Tag Manager",
              label: "Tag Manager",
            },
          ].map((tool, index) => (
            <div key={index} className="performance-card-box">
              <Image
                className="performance-card-icon"
                src={tool.src}
                alt={tool.alt}
                title={tool.title}
                loading="lazy"
width={150} height={50} />
              <span className="performance-card-label">{tool.label}</span>
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
              Download Our Performance Marketing &amp; Paid Ads Growth Guide
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to build measurable lead flow. We build campaigns and design landing pages that connect with buyer search intent.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Download Our PPC Growth Guide
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Learn about our ad testing strategies, custom pixel setups, and landing page frameworks in our guide.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> PPC Keyword Match &amp; Bidding Guides
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> Custom Lead Gen Ad Templates
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#a855f7", fontSize: "1rem" }}></i> GTM &amp; Pixel Conversion Checklists
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #7e22ce, #FD6A02)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(126, 34, 206, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download Brochure
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
                            service: "Brochure Download - Performance Marketing",
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
                        Download Performance Guide
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
                { icon: "fas fa-bullhorn", title: "PPC Campaign Setup" },
                { icon: "fas fa-chart-line", title: "Google Ads Optimization" },
                { icon: "fas fa-ad", title: "Meta Lead Gen Ads" },
                { icon: "fas fa-users", title: "Audience Retargeting" },
                { icon: "fas fa-coins", title: "Conversion Audits" },
                { icon: "fas fa-hand-holding-usd", title: "Sales Funnel Design" },
                { icon: "fas fa-chart-pie", title: "Ad Copy A/B Testing" },
                { icon: "fas fa-rocket", title: "Scale Ad Budgets" },
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
      {/* Brochure Section End */}

      {/* Process Section */}
      <section className="jobready-workflow">
        <h2 className="jobready-heading-small">Our Work Process</h2>
        <h2 className="jobready-heading-main">
          Our Proven Performance Marketing Workflow Steps
        </h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-search"></i>
            </div>
            <p>1. Target Audience Auditing</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p>2. PPC Keyword Research</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-pen"></i>
            </div>
            <p>3. Writing Ad Copies & Graphics</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-code"></i>
            </div>
            <p>4. Pixel & Event Tag Setup</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <p>5. Campaign Launch & Scaling</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-chart-line"></i>
            </div>
            <p>6. Optimization & ROAS Reports</p>
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
                  Why Data-Driven Attribution Is Key to Digital Advertising Success
                </h2>
                <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8", marginBottom: "30px" }}>
                  In paid advertising, knowing where your conversions come from is
                  essential. While basic setups show general click details, they
                  often miss conversion sources, causing wasted budget.
                  Implementing conversion tracking via GA4 and Google Tag Manager
                  allows us to verify which keywords and ad layouts are driving
                  leads. This attribution maps out customer touchpoints, helping
                  us focus spend on profitable campaigns.
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
                  Bidding Strategies: Machine Learning vs Manual CPC Management
                </h3>
                <p style={{ color: "#e2e8f0", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                  Modern paid advertising networks rely on machine learning to
                  optimize bids. We combine manual controls with smart bidding
                  strategies (such as Target CPA and Maximize Conversions). This
                  ensure ad bids adjust in real time to capture active users,
                  lowering overall acquisition costs.
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
                Quick Answers: Performance Marketing
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you're looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear breakdown of our performance marketing services.
              </p>
            </div>

            <div className="geo-questions-grid">
              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is Performance Marketing?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Performance marketing is a results-oriented advertising strategy where businesses pay only when measurable actions—like lead form submits, clicks, or sales—are completed.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How does performance marketing differ from branding?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Branding focuses on long-term recall and market authority, whereas performance marketing optimizes immediate lead generation, Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS).
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How do Google Ads assist targeted lead capture?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Google Ads place your services in front of active searchers with precise keyword and geo-targeting, capturing high-intent traffic instantly.
                </p>
              </div>

              <div style={{ background: "#042544", border: "1px solid rgba(253, 106, 2, 0.3)", padding: "28px", borderRadius: "18px" }}>
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Why is Conversion Tracking mandatory for paid ads?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Conversion tracking measures exact user actions, pinpointing profitable ad creatives and keywords while eliminating wasted ad spend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Performance Marketing</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "What is performance marketing in digital marketing?",
              answer:
                "Performance marketing is a results-oriented digital marketing strategy where businesses pay advertising networks only when specific user actions—such as a click, lead form submission, or product sale—are completed.",
            },
            {
              id: "faq2",
              question:
                "Why does my business need professional ads management?",
              answer:
                "Professional management prevents ad waste by conducting keyword research, configuring event tracking, writing copy, and analyzing data to lower CPA and increase ROAS.",
            },
            {
              id: "faq3",
              question: "What platforms are included in your campaigns?",
              answer:
                "We run campaigns on Google Ads (Search, Display, Shopping, YouTube, PMax), Meta Ads (Facebook & Instagram), LinkedIn Campaign Manager, and native ad networks.",
            },
            {
              id: "faq4",
              question: "How long does it take to see results from PPC ads?",
              answer:
                "Paid search and social campaigns start driving traffic immediately. Typically, conversion volume and tracking data stabilize within 2 to 3 weeks of campaign launch.",
            },
            {
              id: "faq5",
              question: "Do you write the ad copy and design graphics?",
              answer:
                "Yes, we handle copy writing, graphic layouts, and ad formats, aligning all assets with your target buyer profiles.",
            },
            {
              id: "faq6",
              question: "What is Conversion Rate Optimization (CRO)?",
              answer:
                "CRO involves auditing landing pages, loading speeds, forms, and headings to simplify user paths, turning website visitors into leads.",
            },
            {
              id: "faq7",
              question: "How do you track conversions and leads?",
              answer:
                "We install tracking codes via Google Tag Manager (GTM), Google Analytics 4 (GA4), and platform pixels to log user events like form submissions and phone clicks.",
            },
            {
              id: "faq8",
              question: "What is ROAS and how is it calculated?",
              answer:
                "ROAS (Return on Ad Spend) measures campaign revenue. It is calculated by dividing the revenue generated from ads by the total budget spent on those campaigns.",
            },
            {
              id: "faq9",
              question: "What is Google Performance Max (PMax)?",
              answer:
                "PMax is an automated campaign type that displays ads across Search, YouTube, Display, Discover, Gmail, and Maps using Google's machine learning.",
            },
            {
              id: "faq10",
              question: "Can you manage B2B LinkedIn campaigns?",
              answer:
                "Yes. We target LinkedIn ads by job title, industry, and company size to generate B2B leads.",
            },
            {
              id: "faq11",
              question: "What is retargeting and why is it important?",
              answer:
                "Retargeting displays ads to users who previously visited your website, helping to convert warm traffic into customers.",
            },
            {
              id: "faq12",
              question: "Is the ad budget included in your service fees?",
              answer:
                "No. The advertising budget is paid directly to Google or Meta. Our fee covers strategy, setup, tracking, optimization, and reports.",
            },
            {
              id: "faq13",
              question: "How do you prevent invalid click waste?",
              answer:
                "We use IP exclusion lists, precise location targeting, negative keyword lists, and platform click protection filters.",
            },
            {
              id: "faq14",
              question: "Do you offer weekly campaign audits?",
              answer:
                "Yes. We track click rates, spend, conversion counts, and CPA weekly to identify optimization opportunities.",
            },
            {
              id: "faq15",
              question: "What is GEO for landing pages?",
              answer:
                "GEO involves formatting page copy and headings with direct answers and structured lists so AI search engines can easily index and cite your brand.",
            },
            {
              id: "faq16",
              question: "How do we start a performance marketing project?",
              answer:
                "Contact us at info@maajankiwebtech.com or click 'Contact Us' to schedule a consultation and ad audit.",
            },
            {
              id: "faq17",
              question: "Are CSV sheets and ad reports provided?",
              answer:
                "Yes. We deliver transparent campaign reports and analytics dashboards tracking all spend and lead metrics.",
            },
            {
              id: "faq18",
              question: "Do you configure Google Merchant Center?",
              answer:
                "Yes, we upload and optimize eCommerce product feeds to Google Merchant Center for shopping campaigns.",
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
      {/* FAQ Section End */}

      {/* GEO Analysis expandable details block */}
      <section
        className="service-gradient-black-section"
        style={{ borderTop: "1px solid #222", padding: "40px 20px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <details
                style={{
                  background: "#111",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    color: "#FD6A02",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                  }}
                >
                  🔍 View Generative Engine Optimization (GEO) & Semantic
                  Analysis
                </summary>
                <div
                  style={{
                    color: "#ccc",
                    marginTop: "15px",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                  }}
                >
                  <p>
                    <strong>1. Search Bots Crawling Feasibility:</strong> This
                    page uses structured hierarchical headers (H1, H2, H3) and
                    semantic paragraph blocks that make parsing and indexing
                    easy for search agents.
                  </p>
                  <p>
                    <strong>
                      2. ChatGPT and Claude Recommendation Suitability:
                    </strong>{" "}
                    By including definition modules, transparent pricing models,
                    and risk mitigation blocks, the page provides clear answer
                    patterns that AI engines citation-scrape.
                  </p>
                  <p>
                    <strong>3. Perplexity and Gemini Sourcing:</strong> The
                    presence of structured JSON-LD schema linking entities,
                    tools (Google Ads, Meta Ads, GA4), and locations ensures
                    that generative engines recognize MaaJanki Web Tech as a
                    premium performance marketing agency in Bihar.
                  </p>
                  <p>
                    <strong>4. Semantic Keyword Integration:</strong>{" "}
                    Incorporated terms like ROAS optimization, CPA reduction,
                    Conversion Rate Optimization, and programmatic advertising
                    naturally without keyword stuffing.
                  </p>
                  <p>
                    <strong>5. Intent Fulfillment:</strong> Met both commercial
                    research intents (pricing plans, platform breakdowns) and
                    informational intents (FAQs, attribution mechanics).
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default PerformanceMarketing;
