import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/Products.css';

export const metadata = {
  title: "WaCRM – Self-Hostable WhatsApp® Business API CRM | MaaJanki Web Tech",
  description: "WaCRM is a self-hostable WhatsApp® Business API CRM empowering sales & support teams with a multi-agent shared inbox, automated tag segmentation, sales Kanban pipelines, and no-code AI chatbot router.",
  openGraph: {
    title: "WaCRM – Self-Hostable WhatsApp® Business API CRM",
    description: "Self-hostable WhatsApp® Business API CRM with multi-agent team inbox, sales Kanban, and AI chatbot router.",
    url: "https://maajankiwebtech.com/products/wacrm",
    images: [{ url: "https://maajankiwebtech.com/images/products/wacrm.webp" }],
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/products/wacrm",
  },
};

export default function WaCRMPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WaCRM",
    "operatingSystem": "Web, Cloud, Docker",
    "applicationCategory": "BusinessApplication",
    "description": "Self-hostable WhatsApp® Business API CRM with multi-agent shared inbox and AI chat routing.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const capabilities = [
    {
      icon: "fas fa-users",
      title: "Multi-Agent Shared Team Inbox",
      desc: "Assign incoming WhatsApp chats to multiple agents seamlessly with real-time agent collision prevention and internal team comments."
    },
    {
      icon: "fas fa-columns",
      title: "Sales Kanban Pipeline & Tagging",
      desc: "Track sales deals visually across drag-and-drop Kanban stages. Automatically tag leads based on message triggers and customer responses."
    },
    {
      icon: "fas fa-brain",
      title: "No-Code AI Chatbot Router",
      desc: "Integrate Gemini, Claude, or OpenAI model endpoints to handle incoming FAQs, qualify leads, and route complex tickets to human agents."
    },
    {
      icon: "fas fa-database",
      title: "100% Data Ownership (Supabase Backend)",
      desc: "Self-host WaCRM on your own cloud infrastructure (Docker, Vercel, Supabase) with zero vendor lock-in and complete data privacy."
    }
  ];

  const whyBetter = [
    {
      icon: "fas fa-percentage",
      title: "Zero Per-Message Markup Costs",
      desc: "Connect directly to official Meta WhatsApp Business Cloud API. Pay Meta directly with zero third-party per-message markup fees."
    },
    {
      icon: "fas fa-code-branch",
      title: "Full Source Code & Self-Hosting",
      desc: "Enjoy complete freedom to customize workflows, add custom database fields, and integrate internal ERPs with full source code access."
    },
    {
      icon: "fas fa-bolt",
      title: "Real-Time Webhook Automations",
      desc: "Trigger automated n8n, Make, or Zapier workflows when leads change Kanban stages or submit WhatsApp interactive form buttons."
    },
    {
      icon: "fas fa-user-shield",
      title: "Enterprise RBAC Security",
      desc: "Granular role-based access control allows team managers to restrict conversation visibility, export rights, and phone number access."
    }
  ];

  const servicesModules = [
    {
      icon: "fas fa-bullhorn",
      title: "Broadcast Campaign Manager",
      desc: "Schedule personalized bulk WhatsApp template broadcasts with variable parameters and real-time delivery metrics."
    },
    {
      icon: "fas fa-check-double",
      title: "Template Message Approval Tool",
      desc: "Draft, submit, and track approval status of Meta WhatsApp template messages directly inside your dashboard."
    },
    {
      icon: "fas fa-inbox",
      title: "Shared Team Inbox Workspace",
      desc: "Filter chats by assigned agent, unread status, tags, and custom attributes with instant media attachment support."
    },
    {
      icon: "fas fa-chart-pie",
      title: "Analytics & Agent Performance",
      desc: "Monitor first-response times, resolution rates, broadcast open rates, and agent conversation volumes."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Connect Meta WhatsApp Cloud API",
      desc: "Register your Meta Developer app, get your System User Access Token, and link your official WhatsApp Business phone number."
    },
    {
      step: "02",
      title: "Deploy WaCRM Instance",
      desc: "Deploy WaCRM frontend to Vercel/Docker and backend database to Supabase in under 15 minutes."
    },
    {
      step: "03",
      title: "Configure Team Inbox & AI Prompts",
      desc: "Invite sales & support agents, set role permissions, configure sales Kanban stages, and define AI chatbot system prompts."
    },
    {
      step: "04",
      title: "Launch Campaigns & Scale Conversations",
      desc: "Send targeted WhatsApp broadcasts, capture qualified leads automatically, and close deals faster with multi-agent teamwork."
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
          <span className="products-badge mb-3" style={{ background: "#25D366", color: "#fff", padding: "6px 18px", borderRadius: "20px", fontSize: "14px", fontWeight: "700" }}>
            WhatsApp® Business API CRM
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginTop: "16px", marginBottom: "18px" }}>
            WaCRM – Self-Hostable WhatsApp® CRM Platform
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto 32px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.65" }}>
            Self-hostable WhatsApp® Business API CRM. Empower your sales & support teams with a multi-agent shared inbox, automated tag segmentation, sales Kanban pipelines, and no-code AI chatbot router.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact?product=WaCRM" className="btn-outline-mj" style={{ background: "#25D366", color: "#fff", padding: "14px 34px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 8px 25px rgba(37,211,102,0.4)" }}>
              Get WaCRM Architecture Demo <i className="fas fa-arrow-right ms-2"></i>
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
                  src="/images/products/wacrm.webp"
                  alt="WaCRM Shared Inbox & Kanban Preview"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-badge">Product Introduction</span>
              <h2 className="product-section-title">Scale WhatsApp Sales & Customer Support Effortlessly</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#cbd5e1", marginBottom: "20px" }}>
                WaCRM is engineered for modern businesses looking to break free from expensive SaaS markups and proprietary walled gardens. By providing a self-hostable WhatsApp CRM built on Next.js and Supabase, WaCRM puts you in 100% control of your customer conversation data.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#94a3b8" }}>
                Whether you manage e-commerce orders, real estate lead qualification, or high-volume customer service, WaCRM converts single WhatsApp numbers into high-performing multi-agent collaboration workspaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="product-detail-section bg-orange-alt">
        <div className="container text-center">
          <span className="section-badge">Key Capabilities</span>
          <h2 className="product-section-title">Enterprise Architecture Built for Scale</h2>
          <p className="product-section-subtitle">
            Discover the tools designed to automate WhatsApp communications, lead tracking, and agent performance.
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
          <span className="section-badge">Why WaCRM</span>
          <h2 className="product-section-title">Why WaCRM is the Smart Choice for Modern Teams</h2>
          <p className="product-section-subtitle">
            Eliminate recurring vendor lock-in fees while enjoying unlimited agent seats and complete data privacy.
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
          <h2 className="product-section-title">Full Suite of WhatsApp Communication Modules</h2>
          <p className="product-section-subtitle">
            A modular WhatsApp CRM workspace engineered to support broadcasting, AI routing, and analytics.
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
          <h2 className="product-section-title">How WaCRM Deploys for Your Business</h2>
          <p className="product-section-subtitle">
            A straightforward 4-step deployment process to connect official Meta WhatsApp API to your team inbox.
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
      <section className="py-5 text-center" style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", color: "#fff" }}>
        <div className="container">
          <h2 style={{ fontSize: "36px", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginBottom: "16px" }}>
            Ready to Take Control of Your WhatsApp Business Sales?
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px", color: "rgba(255,255,255,0.95)" }}>
            Book a technical consultation with our engineering team to review setup options and live demo.
          </p>
          <Link href="/contact?product=WaCRM" className="btn-outline-mj" style={{ background: "#042442", color: "#fff", padding: "14px 38px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
            Schedule Setup Consultation <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

          </div>
  );
}
