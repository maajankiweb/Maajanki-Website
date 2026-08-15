import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/Products.css';

export const metadata = {
  title: "Elementor Pro – Drag-and-Drop WordPress Builder | MaaJanki Web Tech",
  description: "The world's leading drag-and-drop WordPress website builder. Build premium WooCommerce storefronts, dynamic popups, and custom themes without writing code.",
  openGraph: {
    title: "Elementor Pro – Drag-and-Drop WordPress Builder",
    description: "Visual drag-and-drop WordPress page builder with WooCommerce builder, 300+ pro kits, and popup builder.",
    url: "https://maajankiwebtech.com/products/elementor-pro",
    images: [{ url: "https://maajankiwebtech.com/images/products/elementor-pro.webp" }],
  },
};

export default function ElementorProPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Elementor Pro Website Builder",
    "operatingSystem": "WordPress",
    "applicationCategory": "DesignApplication",
    "description": "Drag-and-drop visual WordPress website builder with WooCommerce & theme customization tools.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const capabilities = [
    {
      icon: "fas fa-magic",
      title: "Visual Drag-and-Drop Builder",
      desc: "Design pixel-perfect WordPress websites visually with 90+ widgets, live responsive editing, and inline text styling."
    },
    {
      icon: "fas fa-shopping-cart",
      title: "WooCommerce Custom Builder",
      desc: "Customize single product pages, cart pages, checkout flows, and product archive grids with dedicated WooCommerce widgets."
    },
    {
      icon: "fas fa-layer-group",
      title: "300+ Pro Template Kits & Blocks",
      desc: "Access a massive library of professionally designed full website kits, section blocks, and dynamic page layouts."
    },
    {
      icon: "fas fa-window-restore",
      title: "Popup Builder & Form Generator",
      desc: "Build high-converting lead generation popups, exit-intent overlays, floating bars, and multi-step contact forms."
    }
  ];

  const whyBetter = [
    {
      icon: "fas fa-paint-brush",
      title: "Complete Theme Control",
      desc: "Customize every section of your WordPress site including custom headers, footers, 404 pages, and archive templates."
    },
    {
      icon: "fas fa-bolt",
      title: "Accelerated Page Speed Output",
      desc: "Elementor Pro generates clean, optimized DOM structures, inline CSS, and asset deferrals for high Core Web Vitals performance."
    },
    {
      icon: "fas fa-database",
      title: "Dynamic Content & Custom Fields",
      desc: "Seamlessly display custom post types, Advanced Custom Fields (ACF), Pods, and Toolset data directly in visual templates."
    },
    {
      icon: "fas fa-globe",
      title: "Global Styling System",
      desc: "Define global typography, color palettes, and container flexbox rules to maintain visual consistency across all pages."
    }
  ];

  const servicesModules = [
    {
      icon: "fas fa-cubes",
      title: "Theme Builder Module",
      desc: "Visually design header, footer, single post, archive, and search results templates across your WordPress site."
    },
    {
      icon: "fas fa-store",
      title: "WooCommerce Customizer",
      desc: "Design custom product pages, add-to-cart buttons, mini-cart sidebars, and checkout funnels."
    },
    {
      icon: "fas fa-bullseye",
      title: "Popup Builder Module",
      desc: "Create targeted popups triggered by user scroll depth, exit intent, time delay, or button click events."
    },
    {
      icon: "fas fa-running",
      title: "Motion Effects & Animations",
      desc: "Add parallax scrolling, mouse tracking, entrance animations, and sticky elements without custom JavaScript."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Install & Activate License",
      desc: "Upload Elementor Pro plugin to your WordPress site and connect your license key."
    },
    {
      step: "02",
      title: "Import Pro Template Kit",
      desc: "Select from 300+ full website template kits or start building from a clean flexbox container."
    },
    {
      step: "03",
      title: "Customize Content & WooCommerce",
      desc: "Drag and drop widgets, adjust global styling tokens, and connect dynamic custom fields."
    },
    {
      step: "04",
      title: "Publish & Optimize Performance",
      desc: "Publish your website live and enjoy high-converting visual design with optimized page load speeds."
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
          <span className="products-badge mb-3" style={{ background: "#ec4899", color: "#fff", padding: "6px 18px", borderRadius: "20px", fontSize: "14px", fontWeight: "700" }}>
            WordPress Website Builder
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginTop: "16px", marginBottom: "18px" }}>
            Elementor Pro – Visual WordPress Builder
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto 32px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.65" }}>
            The world's leading drag-and-drop WordPress website builder. Build premium WooCommerce storefronts, dynamic popups, and custom themes without writing code.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact?product=Elementor%20Pro" className="btn-outline-mj" style={{ background: "#ec4899", color: "#fff", padding: "14px 34px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 8px 25px rgba(236,72,153,0.4)" }}>
              Inquire About License Kits <i className="fas fa-arrow-right ms-2"></i>
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
                  src="/images/products/elementor-pro.webp"
                  alt="Elementor Pro Builder Preview"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-badge">Product Introduction</span>
              <h2 className="product-section-title">Build Stunning WordPress Websites with Zero Code</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#cbd5e1", marginBottom: "20px" }}>
                Elementor Pro transforms WordPress development into a fast, fluid visual design experience. It allows business owners, designers, and web agencies to build custom layouts without touching code.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#94a3b8" }}>
                From high-converting e-commerce product pages to interactive lead capture popups, Elementor Pro delivers complete creative freedom coupled with enterprise-grade page speed optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="product-detail-section bg-orange-alt">
        <div className="container text-center">
          <span className="section-badge">Key Capabilities</span>
          <h2 className="product-section-title">Powerful Drag-and-Drop Visual Features</h2>
          <p className="product-section-subtitle">
            Explore the tools designed to empower visual editing, WooCommerce creation, and dynamic content integration.
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
          <span className="section-badge">Why Elementor Pro</span>
          <h2 className="product-section-title">Why Web Creators Prefer Elementor Pro</h2>
          <p className="product-section-subtitle">
            Complete visual control over every aspect of your WordPress website.
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
          <h2 className="product-section-title">Visual Customization Toolsets</h2>
          <p className="product-section-subtitle">
            Specialized modules working seamlessly to build headers, footers, popups, and WooCommerce stores.
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
          <h2 className="product-section-title">How Elementor Pro Powers Your Website</h2>
          <p className="product-section-subtitle">
            A 4-step workflow from plugin activation to publishing high-converting visual layouts.
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
      <section className="py-5 text-center" style={{ background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)", color: "#fff" }}>
        <div className="container">
          <h2 style={{ fontSize: "36px", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginBottom: "16px" }}>
            Ready to Build Powerful WordPress Websites Visually?
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px", color: "rgba(255,255,255,0.95)" }}>
            Inquire about Elementor Pro design services and license packages today.
          </p>
          <Link href="/contact?product=Elementor%20Pro" className="btn-outline-mj" style={{ background: "#042442", color: "#fff", padding: "14px 38px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
            Get Started with Elementor Pro <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

          </div>
  );
}
