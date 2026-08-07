import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';
import '../../styles/Products.css';

export const metadata = {
  title: "DukanDost Pro – Retail Business Operating System | MaaJanki Web Tech",
  description: "DukanDost Pro is a modern full-stack business operating system for retail stores, kiranas, and distributors featuring smart GST invoicing, inventory management, digital credit ledger (Khata), and online storefront builder.",
  openGraph: {
    title: "DukanDost Pro – Retail Business Operating System",
    description: "AI-powered inventory, GST invoicing, automated credit reminders, and online Digital Dukan storefront.",
    url: "https://maajankiwebtech.com/products/dukandost-pro",
    images: [{ url: "https://maajankiwebtech.com/images/products/dukandost-pro.webp" }],
  },
};

export default function DukanDostProPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DukanDost Pro",
    "operatingSystem": "Web, Mobile, Windows",
    "applicationCategory": "BusinessApplication",
    "description": "Full-stack Business Operating System for modern retail with AI invoicing and Digital Khata.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const capabilities = [
    {
      icon: "fas fa-robot",
      title: "AI Natural Language Stock Assistant",
      desc: "Execute complex database lookups, query low-stock alerts, and generate sales reports using simple conversational Hindi or English text commands."
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Smart GST Invoicing & E-Way Bill",
      desc: "Create 100% tax-compliant GST invoices in under 60 seconds with automated stock deductions, thermal printer support, and IRN/QR e-invoicing."
    },
    {
      icon: "fas fa-calculator",
      title: "Digital Khata & WhatsApp Reminders",
      desc: "Replace paper ledgers with an automated customer credit ledger. Schedule automated WhatsApp payment reminder links with Razorpay payment links."
    },
    {
      icon: "fas fa-store",
      title: "1-Click Online Dukan Storefront",
      desc: "Launch your branded digital e-commerce store in 5 minutes with synchronized product inventory, local delivery zones, and online UPI payment collection."
    }
  ];

  const whyBetter = [
    {
      icon: "fas fa-wifi-slash",
      title: "100% Offline + Cloud Sync",
      desc: "Never lose a sale during internet outages. DukanDost Pro functions seamlessly offline on desktop and automatically syncs to cloud database when online."
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "85% Faster Billing Speed",
      desc: "Built-in barcode scanner integration, rapid thermal receipt printing, and quick-keys allow cashiers to process customer queues in seconds."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Zero Paperwork & Reconciliations",
      desc: "Automated daily closing summaries, GST return data exports (GSTR-1, GSTR-3B), and instant profit-and-loss insights without manual ledger entry."
    },
    {
      icon: "fas fa-language",
      title: "Multi-Language Regional Support",
      desc: "Designed specifically for Indian merchants with multi-lingual UI options (Hindi, English, Hinglish) and intuitive voice-guided action prompts."
    }
  ];

  const servicesModules = [
    {
      icon: "fas fa-cash-register",
      title: "POS Billing Terminal",
      desc: "Hardware-friendly point-of-sale interface with touch screen, barcode reader, and multi-payment split options."
    },
    {
      icon: "fas fa-boxes",
      title: "Smart Inventory Deductions",
      desc: "Batch tracking, expiry alerts, low-stock warnings, and automated reorder purchase order generation."
    },
    {
      icon: "fas fa-users-cog",
      title: "Customer & Vendor CRM",
      desc: "Track customer purchase history, reward points, supplier balances, and credit limit warnings."
    },
    {
      icon: "fas fa-chart-line",
      title: "Executive Analytics Dashboard",
      desc: "Real-time daily revenue, margin analysis, top-selling items, and sales trends across all store locations."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Rapid 5-Minute Store Onboarding",
      desc: "Register your business, upload your product catalog via Excel/CSV or select from 10,000+ pre-built FMCG items."
    },
    {
      step: "02",
      title: "Connect Hardware & Digital Storefront",
      desc: "Pair barcode scanners, thermal receipt printers, and launch your customized WhatsApp Digital Dukan storefront."
    },
    {
      step: "03",
      title: "Streamline Daily Invoicing & Credit Khata",
      desc: "Process customer checkouts in seconds, issue digital GST invoices, and log customer credit balances effortlessly."
    },
    {
      step: "04",
      title: "Automate Reminders & Track Growth",
      desc: "Automated WhatsApp payment requests collect outstanding credit 4x faster while real-time dashboards track net profit."
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
            Retail Business Operating System
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginTop: "16px", marginBottom: "18px" }}>
            DukanDost Pro – Retail Business Operating System
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto 32px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.65" }}>
            Replace legacy paper ledgers with an AI-powered retail management workspace. Smart GST invoicing, automated stock deductions, automated WhatsApp credit reminders, and custom online storefronts.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact?product=DukanDost%20Pro" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "14px 34px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 8px 25px rgba(253,106,2,0.4)" }}>
              Request Live Demo <i className="fas fa-arrow-right ms-2"></i>
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
                  src="/images/products/dukandost-pro.webp"
                  alt="DukanDost Pro Interface Preview"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-badge">Product Introduction</span>
              <h2 className="product-section-title">Revolutionize Your Retail Store Operations</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#cbd5e1", marginBottom: "20px" }}>
                DukanDost Pro is a comprehensive, all-in-one business operating system engineered specifically for Indian retail merchants, kirana store owners, and regional distributors. It bridges traditional retail workflows with cutting-edge digital automation.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#94a3b8" }}>
                Whether you manage a single retail store in Bettiah or a multi-location distribution network in Patna, DukanDost Pro eliminates inventory leakages, speeds up billing queues by 85%, and automates customer credit recovery via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="product-detail-section bg-orange-alt">
        <div className="container text-center">
          <span className="section-badge">Key Capabilities</span>
          <h2 className="product-section-title">Powerful Features Built for High-Growth Retail</h2>
          <p className="product-section-subtitle">
            Explore the core architectural capabilities designed to streamline inventory, invoicing, and digital commerce.
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
          <span className="section-badge">Why DukanDost Pro</span>
          <h2 className="product-section-title">Why DukanDost Pro Outperforms Legacy Billing Systems</h2>
          <p className="product-section-subtitle">
            Engineered from the ground up to solve daily friction points faced by Indian retail businesses.
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
          <h2 className="product-section-title">Comprehensive Modular Architecture</h2>
          <p className="product-section-subtitle">
            A unified suite of specialized tools working together to power your entire retail business lifecycle.
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
          <h2 className="product-section-title">How DukanDost Pro Works for Your Store</h2>
          <p className="product-section-subtitle">
            A simple 4-step onboarding journey to transform your traditional store into a high-tech retail business.
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
            Ready to Upgrade Your Retail Store with DukanDost Pro?
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px", color: "rgba(255,255,255,0.9)" }}>
            Schedule a personalized 1-on-1 walkthrough with our retail technology experts today.
          </p>
          <Link href="/contact?product=DukanDost%20Pro" className="btn-outline-mj" style={{ background: "#042442", color: "#fff", padding: "14px 38px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
            Book Your Free Demo Today <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
