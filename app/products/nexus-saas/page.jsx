import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/Products.css';

export const metadata = {
  title: "Nexus SaaS – AI Local Reputation & Google Map Pack OS | MaaJanki Web Tech",
  description: "Nexus SaaS is an AI-powered local reputation management system connecting directly with official Google Business Profile APIs for automated review retrieval, sentiment analytics, and AI auto-responses.",
  openGraph: {
    title: "Nexus SaaS – AI Local Reputation & Google Map Pack OS",
    description: "Official Google Business Profile API integration with AI review auto-responder and local SEO rank tracking.",
    url: "https://maajankiwebtech.com/products/nexus-saas",
    images: [{ url: "https://maajankiwebtech.com/images/products/nexus-saas.webp" }],
  },
};

export default function NexusSaaSPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Nexus SaaS",
    "operatingSystem": "Web, Cloud",
    "applicationCategory": "BusinessApplication",
    "description": "AI-powered local reputation management system with Google Business Profile API integration.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const capabilities = [
    {
      icon: "fab fa-google",
      title: "Official Google Business Profile API",
      desc: "Direct integration with official Google APIs to fetch customer reviews, Q&As, photo updates, and profile performance analytics in real time."
    },
    {
      icon: "fas fa-robot",
      title: "Multi-Model AI Review Auto-Replier",
      desc: "Configure Gemini or OpenAI LLM prompts to auto-reply to positive and critical customer reviews in seconds with contextual brand voice."
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "Local SEO & Map Pack Rank Tracker",
      desc: "Monitor your local search visibility and Google Map Pack 3-pack rankings across target geographic postal codes and keywords."
    },
    {
      icon: "fas fa-paper-plane",
      title: "Review Request SMS & WhatsApp Engine",
      desc: "Automatically send post-purchase or post-service review invitation links via SMS, WhatsApp, and QR code cards to maximize 5-star ratings."
    }
  ];

  const whyBetter = [
    {
      icon: "fas fa-bolt",
      title: "3x Faster Review Response Speed",
      desc: "Instant AI auto-responses improve Google algorithm signals for active listing management, boosting local Map Pack rankings."
    },
    {
      icon: "fas fa-layer-group",
      title: "Multi-Location Franchise Support",
      desc: "Manage 10 to 500+ Google Business Profile listings from a single unified master dashboard with location-based filtering."
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "Negative Sentiment Incident Alerting",
      desc: "Receive real-time Slack, WhatsApp, or Email alerts when 1-star or 2-star reviews are posted so managers can address issues immediately."
    },
    {
      icon: "fas fa-chart-line",
      title: "Data-Driven Citation & Reputation Analytics",
      desc: "Track total customer phone calls, direction requests, website clicks, and sentiment breakdown over customizable timeframes."
    }
  ];

  const servicesModules = [
    {
      icon: "fas fa-star",
      title: "Review Management Hub",
      desc: "Unified inbox to view, flag, filter, and respond to Google reviews across all your business branches."
    },
    {
      icon: "fas fa-brain",
      title: "AI Tone & Voice Configurator",
      desc: "Customize AI system prompts, response length, language options (English, Hindi), and default fallback messages."
    },
    {
      icon: "fas fa-qrcode",
      title: "QR Code Review Generator",
      desc: "Generate custom branded QR code standees and print cards that direct customers straight to your Google review submission page."
    },
    {
      icon: "fas fa-chart-bar",
      title: "Local Rank Insights & Audit",
      desc: "Identify missing GBP listing details, local citation inconsistencies, and competitive keyword benchmarks."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "OAuth Google Account Connection",
      desc: "Authenticate your Google Business Profile account securely with 1-click OAuth integration."
    },
    {
      step: "02",
      title: "Configure AI Auto-Reply Prompts",
      desc: "Set rules for automatic replies based on star rating, keyword triggers, and brand tone guidelines."
    },
    {
      step: "03",
      title: "Launch Automated Review Invites",
      desc: "Deploy SMS/WhatsApp review request campaigns and place QR codes at customer checkout counters."
    },
    {
      step: "04",
      title: "Dominate Google Map Pack Rankings",
      desc: "Watch your local 5-star reputation soar while active API engagement elevates your position in Google Local 3-Pack."
    }
  ];

  return (
    <div className="product-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      {/* Product Hero */}
      <section className="products-hero-section" style={{ background: "linear-gradient(135deg, #042544 0%, #061826 100%)", color: "#fff", padding: "85px 0 65px" }}>
        <div className="container text-center">
          <span className="products-badge mb-3" style={{ background: "#8b5cf6", color: "#fff", padding: "6px 18px", borderRadius: "20px", fontSize: "14px", fontWeight: "700" }}>
            AI Local Reputation &amp; Map OS
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginTop: "16px", marginBottom: "18px" }}>
            Nexus SaaS – Local Reputation &amp; Rank Tracker
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto 32px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.65" }}>
            AI-driven local reputation management system. Connect directly with official Google Business Profile APIs for automated review retrieval, sentiment analytics, and multi-model AI auto-responses.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact?product=Nexus%20SaaS" className="btn-outline-mj" style={{ background: "#8b5cf6", color: "#fff", padding: "14px 34px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 8px 25px rgba(139,92,246,0.4)" }}>
              Request Platform Demo <i className="fas fa-arrow-right ms-2"></i>
            </Link>
            <Link href="/products" className="btn-outline-mj" style={{ border: "1px solid #FD6A02", color: "#FD6A02", padding: "14px 34px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Overview & Image Section */}
      <section className="product-detail-section bg-navy-alt">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="p-3 rounded" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px" }}>
                <Image
                  src="/images/products/nexus-saas.webp"
                  alt="Nexus SaaS Dashboard Preview"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-badge">Product Introduction</span>
              <h2 className="product-section-title">Automate Google Business Profile Growth with AI</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#cbd5e1", marginBottom: "20px" }}>
                Nexus SaaS is designed for local businesses, multi-location healthcare clinics, retail franchises, and digital marketing agencies. It replaces tedious manual review monitoring with an automated AI engine that engages every customer review instantly.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#94a3b8" }}>
                By maintaining constant, policy-compliant API activity and gathering verified 5-star customer feedback, Nexus SaaS directly accelerates your local SEO signals, helping you capture top spots in Google Map 3-Pack results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="product-detail-section bg-orange-alt">
        <div className="container text-center">
          <span className="section-badge">Key Capabilities</span>
          <h2 className="product-section-title">AI Automation Engine for Local Search Success</h2>
          <p className="product-section-subtitle">
            Discover the tools engineered to collect reviews, automate responses, and audit map rankings.
          </p>

          <div className="row g-4 text-start">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="capability-card">
                  <div className="card-icon-box">
                    <i className={cap.icon}></i>
                  </div>
                  <h3 className="card-item-title">{cap.title}</h3>
                  <p className="card-item-desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Better Section */}
      <section className="product-detail-section bg-navy-alt">
        <div className="container text-center">
          <span className="section-badge">Why Nexus SaaS</span>
          <h2 className="product-section-title">Why Businesses Trust Nexus SaaS for Reputation Growth</h2>
          <p className="product-section-subtitle">
            Turn positive customer experiences into lasting digital authority and continuous local leads.
          </p>

          <div className="row g-4 text-start">
            {whyBetter.map((item, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="why-better-card">
                  <div className="card-icon-box">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="card-item-title" style={{ color: "#ffffff !important" }}>{item.title}</h3>
                  <p className="card-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Integrated Modules */}
      <section className="product-detail-section bg-orange-alt">
        <div className="container text-center">
          <span className="section-badge">Integrated Modules</span>
          <h2 className="product-section-title">Modular Local SEO & Reputation Suite</h2>
          <p className="product-section-subtitle">
            A cohesive collection of tools designed to optimize Google Business Profile performance.
          </p>

          <div className="row g-4 text-start">
            {servicesModules.map((mod, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="module-card">
                  <div className="card-icon-box">
                    <i className={mod.icon}></i>
                  </div>
                  <h3 className="card-item-title">{mod.title}</h3>
                  <p className="card-item-desc">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="product-detail-section bg-navy-alt">
        <div className="container text-center">
          <span className="section-badge">Working Process</span>
          <h2 className="product-section-title">How Nexus SaaS Powers Your Reputation</h2>
          <p className="product-section-subtitle">
            A 4-step setup path to elevate your local business presence on Google Maps.
          </p>

          <div className="row g-4 text-start">
            {processSteps.map((proc, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="process-step-card">
                  <div className="step-badge">Step {proc.step}</div>
                  <h3 className="card-item-title" style={{ marginTop: "12px", color: "#ffffff !important" }}>{proc.title}</h3>
                  <p className="card-item-desc">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-5 text-center" style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)", color: "#fff" }}>
        <div className="container">
          <h2 style={{ fontSize: "36px", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginBottom: "16px" }}>
            Ready to Rule Your Local Market &amp; Google Map Pack?
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px", color: "rgba(255,255,255,0.95)" }}>
            Book a live 1-on-1 setup consultation to audit your current Google Business Profile ranking.
          </p>
          <Link href="/contact?product=Nexus%20SaaS" className="btn-outline-mj" style={{ background: "#042442", color: "#fff", padding: "14px 38px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
            Get Free Reputation Audit <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

          </div>
  );
}
