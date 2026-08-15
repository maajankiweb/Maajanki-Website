import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/Products.css';

export const metadata = {
  title: "InvoBill – Hybrid GST Billing & Invoicing SaaS | MaaJanki Web Tech",
  description: "InvoBill is a hybrid billing & invoicing SaaS platform for Indian enterprises & MSMEs. Generate 100% GST-compliant invoices in under 60 seconds online or offline.",
  openGraph: {
    title: "InvoBill – Hybrid GST Billing & Invoicing SaaS",
    description: "Tax-compliant GST invoicing, offline desktop app, e-Way bills, and multi-currency billing.",
    url: "https://maajankiwebtech.com/products/invobill",
    images: [{ url: "https://maajankiwebtech.com/images/products/invobill.webp" }],
  },
};

export default function InvoBillPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "InvoBill",
    "operatingSystem": "Web, Windows, Mobile",
    "applicationCategory": "BusinessApplication",
    "description": "Hybrid GST billing platform for Indian businesses to design tax-compliant invoices in under 60 seconds.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const capabilities = [
    {
      icon: "fas fa-file-invoice",
      title: "Instant GST Invoicing & Compliance",
      desc: "Generate 100% GST-compliant tax invoices, credit notes, and e-Way bills in under 60 seconds with pre-validated HSN/SAC codes."
    },
    {
      icon: "fas fa-desktop",
      title: "Dual Mode: Web Cloud + Offline Windows App",
      desc: "Work continuously even when your internet connection drops. InvoBill operates fully offline and auto-syncs data once online."
    },
    {
      icon: "fas fa-globe",
      title: "Multi-Currency & Custom Tax Engines",
      desc: "Handle international export billing, multi-currency invoicing, state-wise CGST/SGST/IGST splits, and custom cess rules automatically."
    },
    {
      icon: "fab fa-whatsapp",
      title: "Instant WhatsApp & Email Dispatch",
      desc: "Send PDF invoices directly to your customer's WhatsApp or email inbox with payment gateway links for rapid bill settlement."
    }
  ];

  const whyBetter = [
    {
      icon: "fas fa-check-double",
      title: "100% Tax Compliant with GST Rules",
      desc: "Updated automatically with the latest Indian GST Council rules, IRN e-invoicing formats, and QR code requirements."
    },
    {
      icon: "fas fa-boxes",
      title: "Automated Stock Deductions",
      desc: "Invoices instantly adjust inventory levels, triggering reorder alerts before high-demand products run out of stock."
    },
    {
      icon: "fas fa-print",
      title: "Custom Thermal & A4 Print Templates",
      desc: "Choose from multiple professional invoice themes, customize brand logos, terms, bank details, and thermal printer layouts."
    },
    {
      icon: "fas fa-file-export",
      title: "1-Click GSTR Data Export",
      desc: "Export error-free JSON/Excel datasets formatted specifically for CA filing in GSTR-1, GSTR-3B, and GSTR-9 returns."
    }
  ];

  const servicesModules = [
    {
      icon: "fas fa-file-alt",
      title: "Invoice Generation Hub",
      desc: "Rapid invoicing workspace with customer lookup, item search, discount calculators, and tax summaries."
    },
    {
      icon: "fas fa-address-book",
      title: "Customer & Vendor Master",
      desc: "Centralized directory to track customer GSTINs, credit terms, ledger balances, and payment history."
    },
    {
      icon: "fas fa-receipt",
      title: "Expense & Purchase Tracker",
      desc: "Log vendor bills, purchase orders, and operational business expenses to calculate exact net margins."
    },
    {
      icon: "fas fa-chart-pie",
      title: "Financial Reporting Suite",
      desc: "Comprehensive insights into monthly revenue, pending receivables, tax liabilities, and sales rep performance."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Account Setup & GSTIN Verification",
      desc: "Create your InvoBill account, enter your business GSTIN, and configure your bank account payment details."
    },
    {
      step: "02",
      title: "Import Inventory & Customer Directory",
      desc: "Upload existing products and client contacts via Excel or add items on-the-go during checkout."
    },
    {
      step: "03",
      title: "Generate & Share Tax Invoices",
      desc: "Create GST invoices in under 60 seconds and share instantly via WhatsApp, Email, or print hard copies."
    },
    {
      step: "04",
      title: "Export GST Returns & Collect Payments",
      desc: "Track payments in real-time and export GSTR filing reports with a single click at the end of the month."
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
          <span className="products-badge mb-3" style={{ background: "#FD6A02", color: "#fff", padding: "6px 18px", borderRadius: "20px", fontSize: "14px", fontWeight: "700" }}>
            Hybrid GST Billing &amp; Invoicing
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginTop: "16px", marginBottom: "18px" }}>
            InvoBill – Hybrid GST Billing &amp; Invoicing SaaS
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto 32px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.65" }}>
            A hybrid billing platform for Indian businesses. Design 100% tax-compliant GST invoices in 60 seconds online or offline with automated stock deductions and WhatsApp PDF sharing.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="https://invobill.in/" target="_blank" rel="noopener noreferrer" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "14px 34px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 8px 25px rgba(253,106,2,0.4)" }}>
              Launch InvoBill Platform <i className="fas fa-external-link-alt ms-2"></i>
            </a>
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
                  src="/images/products/invobill.webp"
                  alt="InvoBill GST Billing Preview"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-badge">Product Introduction</span>
              <h2 className="product-section-title">Speed Up Invoicing &amp; Ensure 100% GST Compliance</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#cbd5e1", marginBottom: "20px" }}>
                InvoBill is engineered specifically for Indian SMEs, wholesalers, manufacturers, and service providers. It simplifies complex GST calculations into an intuitive, high-speed invoicing platform.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#94a3b8" }}>
                With support for both cloud web browser access and a native offline Windows desktop app, InvoBill guarantees uninterrupted billing operations, instant WhatsApp invoice distribution, and effortless monthly CA report generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="product-detail-section bg-orange-alt">
        <div className="container text-center">
          <span className="section-badge">Key Capabilities</span>
          <h2 className="product-section-title">Smart Features Built for Indian Enterprise Billing</h2>
          <p className="product-section-subtitle">
            Explore the core architectural features designed to simplify taxation, invoicing, and cloud synchronization.
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
          <span className="section-badge">Why InvoBill</span>
          <h2 className="product-section-title">Why Indian Businesses Choose InvoBill over Traditional Tools</h2>
          <p className="product-section-subtitle">
            Faster checkout speeds, zero tax calculation errors, and effortless CA data preparation.
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
          <h2 className="product-section-title">Complete GST Invoicing Architecture</h2>
          <p className="product-section-subtitle">
            Modular toolsets engineered to manage customers, inventory, expenses, and tax filings.
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
          <h2 className="product-section-title">How InvoBill Simplifies Your Daily Billing</h2>
          <p className="product-section-subtitle">
            A simple 4-step workflow from account registration to monthly GST return filing.
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
      <section className="py-5 text-center" style={{ background: "linear-gradient(135deg, #FD6A02 0%, #e05600 100%)", color: "#fff" }}>
        <div className="container">
          <h2 style={{ fontSize: "36px", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginBottom: "16px" }}>
            Ready to Upgrade Your Business Billing with InvoBill?
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px", color: "rgba(255,255,255,0.95)" }}>
            Start generating tax-compliant GST invoices in under 60 seconds today.
          </p>
          <a href="https://invobill.in/" target="_blank" rel="noopener noreferrer" className="btn-outline-mj" style={{ background: "#042442", color: "#fff", padding: "14px 38px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
            Launch InvoBill Now <i className="fas fa-external-link-alt ms-2"></i>
          </a>
        </div>
      </section>

          </div>
  );
}
