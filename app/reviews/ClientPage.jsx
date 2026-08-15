'use client';

import React from "react";

import { FaStar, FaGoogle, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import '@/app/styles/Reviews.css';

const Reviews = () => {
  const reviewsData = [
    {
      id: 101,
      name: "Saurav Sharma",
      role: "Client Review",
      service: "Web Development & Digital Marketing Solutions",
      rating: 5,
      avatar: "SS",
      source: "Google Verified",
      text: "Maajanki Web Tech Digital Agency delivers impressive web development and digital marketing services with a modern and professional approach. Their website design is clean, user-friendly, and visually appealing. The agency offers a wide range of services including web development, SEO, app development, AI solutions, and digital marketing, making it a complete digital partner for businesses. Their pricing plans are affordable and suitable for startups as well as growing brands. Overall, a reliable agency for anyone looking to build a strong online presence.",
    },
    {
      id: 102,
      name: "Shivam Kumar",
      role: "Client Review",
      service: "Portfolio & Full-Stack Development",
      rating: 5,
      avatar: "SK",
      source: "Google Verified",
      text: "Maajanki Web Tech Digital Agency and Ashish Kumar have delivered an outstanding portfolio website with a modern, visually appealing, and highly professional design. The smooth animations, clean layout, and intuitive UI/UX create an engaging user experience throughout the site. The project showcases strong full-stack development expertise, excellent attention to detail, and a well-structured presentation of skills and projects. Every section feels thoughtfully crafted, reflecting both creativity and technical proficiency. This portfolio leaves a strong impression on recruiters, clients, and collaborators alike. Truly impressive work — highly recommended for anyone looking for quality web development and digital solutions! 🚀",
    },
    {
      id: 103,
      name: "Avnish Kumar Ray",
      role: "Client Review",
      service: "Modern UI/UX & Web Development",
      rating: 5,
      avatar: "AR",
      source: "Google Verified",
      text: "On behalf of Maajanki Web Tech Digital Agency and Ashish Kumar: This is a clean and professionally designed portfolio with an impressive modern UI/UX. The smooth animations, well-structured project showcase, and strong full-stack presentation reflect great development skills and attention to detail. Overall, it creates a strong impression for both recruiters and potential clients. Excellent work and highly recommended! 🚀",
    },
    {
      id: 1,
      name: "Amit Verma",
      role: "Founder, BiharCart",
      service: "E-commerce Web Development & Product Listing",
      rating: 5,
      avatar: "AV",
      source: "Google Verified",
      text: "The team at MaaJanki Web Tech built our complete custom React e-commerce storefront and listed over 2,000 product SKUs across Amazon and Flipkart. Our loading speeds dropped below 1.5s and sales increased by 150% in the first quarter itself. Truly Bihar's finest agency!",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marketing Director, TechVibe India",
      service: "SEO & SMO Services",
      rating: 5,
      avatar: "PS",
      source: "Google Verified",
      text: "Outstanding organic growth! Their SEO strategy boosted our keyword rankings on the first page of Google for high-intent search queries. We have seen a 200% influx of qualified organic leads. Their transparency in reporting is top-notch.",
    },
    {
      id: 3,
      name: "Rajesh Ranjan",
      role: "CEO, InvoBill Systems",
      service: "Custom Web App Development & Performance Marketing",
      rating: 5,
      avatar: "RR",
      source: "Trustpilot Verified",
      text: "They designed our entire InvoBill SaaS billing dashboard UI/UX and currently manage our Google and Meta Ads campaigns. The developers are highly skilled, and their conversion tracking setups gave us 100% clarity on our acquisition costs.",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Co-founder, Glow & Glam",
      service: "Branding & Graphic Design",
      rating: 5,
      avatar: "SG",
      source: "Google Verified",
      text: "MaaJanki Web Tech created our brand identity, logos, packaging, and Instagram social media design system from scratch. Beautiful premium glassmorphic aesthetics and quick feedback turnaround. Our brand feels premium and trustworthy now.",
    },
    {
      id: 5,
      name: "Vikram Aditya",
      role: "Operations Manager, Bettiah Logistics",
      service: "Local SEO & Website Design",
      rating: 5,
      avatar: "VA",
      source: "Google Verified",
      text: "MaaJanki optimized our Google Business Profile and built a responsive local service site. We now consistently rank in the Bettiah/West Champaran Maps 3-Pack. Our phone inquiries for shipping queries have grown exponentially.",
    },
    {
      id: 6,
      name: "Dr. Ritu Kumar",
      role: "Founder, CareFirst Clinic",
      service: "Content Writing & SMO",
      rating: 5,
      avatar: "RK",
      source: "Trustpilot Verified",
      text: "Their content writing team created high-authority clinical guides that rank perfectly on Google and align with medical guidelines. The social media campaign runs smoothly with zero supervision required from our end.",
    },
  ];

  // CTA Event Tracking Function
  const handleReviewClick = (platform) => {
    if (window.gtag) {
      window.gtag("event", "click_review_cta", {
        event_category: "Engagement",
        event_label: `Write Review on ${platform}`,
      });
    }
  };

  return (
    <>
      {/* Helmet Meta Tags & Schema */}
      {
/* JSON-LD Schema */
}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://maajankiwebtech.com/#localbusiness",
                "name": "MaaJanki Web Tech",
                "url": "https://maajankiwebtech.com/",
                "logo": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
                "image": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png",
                "telephone": "+91-9006543913",
                "priceRange": "$",
                "sameAs": [
                  "https://g.page/r/CVvMyeoY0y0XEAE",
                  "https://g.page/r/CVvMyeoY0y0XEAE/review",
                  "https://jsdl.in/DT-99EMZMSLY37",
                  "https://www.ambitionbox.com/maajankiwebtech"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar",
                  "addressLocality": "Bagaha",
                  "addressRegion": "Bihar",
                  "postalCode": "845101",
                  "addressCountry": "IN"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "founder": {
                  "@type": "Person",
                  "name": "Ashish Kumar",
                  "sameAs": [
                    "https://www.linkedin.com/in/ashishkumarji/",
                    "https://www.wikidata.org/wiki/Q115783355"
                  ]
                }
              },
              ...reviewsData.map((rev) => ({
                "@type": "Review",
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "MaaJanki Web Tech",
                  "image": "/images/icons/MaaJanki-Web-Tech-Logo-Color.png"
                },
                "author": {
                  "@type": "Person",
                  "name": rev.name
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": rev.rating.toString(),
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": rev.text
              }))
            ]
          }) }} />


      {/* Main Content */}
      <section className="reviews-page-section">
        <div className="reviews-container">
          
          {/* Header */}
          <div className="reviews-header">
            <span className="reviews-badge">Reputation Proof</span>
            <h1 className="reviews-title">Client Success Stories</h1>
            <p className="reviews-subtitle">
              We focus on building long-term digital growth. Here is what our clients
              say about our technical capabilities and business integrity.
            </p>
          </div>

          {/* Rating Summary Block */}
          <div className="reviews-summary-box">
            <div className="summary-score-card">
              <div className="summary-score-num">5.0</div>
              <div className="summary-stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="summary-score-lbl">Average Rating (5 Verified Reviews)</div>
            </div>
            
            <div className="summary-text-card">
              <h3>Direct definition of our credibility</h3>
              <p>
                MaaJanki Web Tech maintains a verified 5-Star aggregate rating of <strong>5.0 / 5.0 stars</strong> 
                on <a href="https://g.page/r/CVvMyeoY0y0XEAE/review" target="_blank" rel="noopener noreferrer" style={{ color: '#FD6A02', fontWeight: 'bold' }}>Google Business Profile</a>, 
                Trustpilot, and Justdial. We maintain 100% transparent reviews with zero artificial modifications.
              </p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="reviews-grid">
            {reviewsData.map((rev) => (
              <div className="review-card" key={rev.id}>
                <div>
                  <div className="review-card-header">
                    <div className="review-card-stars">
                      {[...Array(rev.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="review-source-icon">
                      {rev.source.includes("Google") ? (
                        <FaGoogle style={{ color: "#4285F4" }} />
                      ) : (
                        <FaCheckCircle style={{ color: "#00b67a" }} />
                      )}
                    </span>
                  </div>
                  
                  <div className="review-quote-wrapper">
                    <FaQuoteLeft style={{ color: "#FD6A02", opacity: 0.2, fontSize: "1.5rem", marginBottom: "10px", display: "block" }} />
                    <p className="review-quote">{rev.text}</p>
                  </div>
                </div>

                <div className="review-author-meta">
                  <div className="review-author-avatar">{rev.avatar}</div>
                  <div className="review-author-details">
                    <h4>{rev.name}</h4>
                    <p>{rev.role}</p>
                    <span style={{ fontSize: "0.75rem", color: "#FD6A02", fontWeight: "600" }}>
                      {rev.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action to Write Reviews */}
          <div className="reviews-cta-block">
            <h3>Did you work with us?</h3>
            <p>
              Your feedback helps us continuously refine our custom development and digital marketing processes. 
              Please take a minute to rate us on your preferred review platform.
            </p>
            
            <div className="reviews-cta-buttons">
              <a
                href="https://g.page/r/CVvMyeoY0y0XEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="review-btn review-btn-google"
                onClick={() => handleReviewClick("Google")}
              >
                <FaGoogle /> Write a Google Review
              </a>
              <a
                href="https://www.trustpilot.com/evaluate/maajankiwebtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="review-btn review-btn-trustpilot"
                onClick={() => handleReviewClick("Trustpilot")}
              >
                Review on Trustpilot
              </a>
              <a
                href="https://jsdl.in/DT-99EMZMSLY37"
                target="_blank"
                rel="noopener noreferrer"
                className="review-btn"
                style={{ backgroundColor: "#ff6f00", color: "#fff" }}
                onClick={() => handleReviewClick("Justdial")}
              >
                <FaStar /> Review on Justdial
              </a>
              <a
                href="https://www.ambitionbox.com/maajankiwebtech"
                target="_blank"
                rel="noopener noreferrer"
                className="review-btn"
                style={{ backgroundColor: "#063970", color: "#fff" }}
                onClick={() => handleReviewClick("AmbitionBox")}
              >
                <FaCheckCircle /> AmbitionBox Profile
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Start Project Footer Section */}
          </>
  );
};

export default Reviews;