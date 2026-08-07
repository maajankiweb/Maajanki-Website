import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';
import '../../styles/Products.css';

export const metadata = {
  title: "Tailwind Templates – 50+ Responsive Landing Page Templates | MaaJanki Web Tech",
  description: "An ultimate bundle of 50+ modern, fully responsive landing page templates built with HTML5 & Tailwind CSS. Designed for rapid deployment and high-converting marketing campaigns.",
  openGraph: {
    title: "Tailwind Templates – 50+ Responsive Landing Page Templates",
    description: "Developer-friendly HTML5 & Tailwind CSS v3 template bundle with dark/light themes and 95+ Core Web Vitals.",
    url: "https://maajankiwebtech.com/products/tailwind-templates",
    images: [{ url: "https://maajankiwebtech.com/images/products/tailwind-templates.webp" }],
  },
};

export default function TailwindTemplatesPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tailwind Templates Bundle",
    "operatingSystem": "Web, HTML5, Tailwind CSS",
    "applicationCategory": "DeveloperApplication",
    "description": "50+ ready-to-deploy responsive landing page templates built with HTML5 & Tailwind CSS.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const capabilities = [
    {
      icon: "fas fa-layer-group",
      title: "50+ Ready-to-Deploy Templates",
      desc: "Comprehensive library of SaaS landing pages, agency portfolios, e-commerce storefronts, mobile app showcases, and lead generation funnels."
    },
    {
      icon: "fas fa-code",
      title: "Clean Tailwind CSS v3 & HTML5 Code",
      desc: "Semantic HTML5 architecture styled with utility-first Tailwind CSS v3. Fully customizable configuration files with zero bloat."
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Core Web Vitals < 95+ Score",
      desc: "Optimized for extreme page speed performance, instant LCP rendering, zero layout shifts (CLS), and mobile network efficiency."
    },
    {
      icon: "fas fa-moon",
      title: "Dark & Light Mode Integration",
      desc: "Built-in dark mode support with automatic OS color scheme detection or interactive toggle buttons."
    }
  ];

  const whyBetter = [
    {
      icon: "fas fa-clock",
      title: "Save 200+ Hours of Dev Time",
      desc: "Skip repetitive layout design and frontend boilerplate code. Launch production-ready landing pages in hours instead of weeks."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "100% Mobile-First Responsive",
      desc: "Rigorously tested across iPhone, Android, tablets, ultra-wide desktop monitors, and edge device viewports."
    },
    {
      icon: "fas fa-copy",
      title: "Copy-Paste HTML & React/JSX Snippets",
      desc: "Modular component blocks allow developers to easily copy sections, buttons, navigation bars, and pricing cards straight into React or Next.js projects."
    },
    {
      icon: "fas fa-search-dollar",
      title: "Conversion-Focused UX Architecture",
      desc: "Crafted following proven behavioral psychology nudges, high-contrast CTA placement, and conversion rate optimization (CRO) benchmarks."
    }
  ];

  const servicesModules = [
    {
      icon: "fas fa-laptop-code",
      title: "SaaS & Tech Landing Kits",
      desc: "Modern dark-themed hero sections, feature grids, interactive pricing tables, and integration partner badges."
    },
    {
      icon: "fas fa-shopping-bag",
      title: "E-Commerce Store Layouts",
      desc: "High-converting product showcase grids, checkout trust badges, filter sidebars, and promotional banners."
    },
    {
      icon: "fas fa-briefcase",
      title: "Agency & Freelancer Kits",
      desc: "Polished portfolio grids, client case study layouts, testimonial carousels, and contact lead capture forms."
    },
    {
      icon: "fas fa-mobile",
      title: "App & Software Showcase",
      desc: "Mobile mockup frames, app store download buttons, feature walkthroughs, and user review sliders."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Select & Download Template",
      desc: "Choose from 50+ specialized template categories and download the clean source code package."
    },
    {
      step: "02",
      title: "Customize Branding & Tokens",
      desc: "Update your brand logo, primary colors in tailwind.config.js, and replace placeholder text copy."
    },
    {
      step: "03",
      title: "Connect Contact Forms & Webhooks",
      desc: "Link lead capture form submissions to your CRM, WhatsApp API, or backend email endpoints."
    },
    {
      step: "04",
      title: "Deploy Live to Production",
      desc: "Push to Vercel, Netlify, AWS, or your custom web server for instant 95+ Lighthouse performance."
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
          <span className="products-badge mb-3" style={{ background: "#06b6d4", color: "#fff", padding: "6px 18px", borderRadius: "20px", fontSize: "14px", fontWeight: "700" }}>
            Developer Template Bundle
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginTop: "16px", marginBottom: "18px" }}>
            Tailwind Templates – 50+ Responsive Landing Pages
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto 32px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.65" }}>
            An ultimate bundle of 50+ modern, fully responsive landing page templates built with HTML5 &amp; Tailwind CSS. Engineered for rapid startup deployment and high-converting marketing campaigns.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact?product=Tailwind%20Templates" className="btn-outline-mj" style={{ background: "#06b6d4", color: "#fff", padding: "14px 34px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 8px 25px rgba(6,182,212,0.4)" }}>
              Get Template Bundle <i className="fas fa-arrow-right ms-2"></i>
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
                  src="/images/products/tailwind-templates.webp"
                  alt="Tailwind Templates Bundle Preview"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-badge">Product Introduction</span>
              <h2 className="product-section-title">Launch Production-Ready Web Pages in Minutes</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#cbd5e1", marginBottom: "20px" }}>
                Tailwind Templates is crafted for developers, agencies, and startup founders who want pixel-perfect frontend designs without wasting weeks tweaking CSS styles.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#94a3b8" }}>
                Each template in the 50+ bundle is built using utility-first Tailwind CSS classes, semantic HTML5, and responsive breakpoints, guaranteeing rapid loading speeds and effortless customization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="product-detail-section bg-orange-alt">
        <div className="container text-center">
          <span className="section-badge">Key Capabilities</span>
          <h2 className="product-section-title">Clean Engineering &amp; Modern Design System</h2>
          <p className="product-section-subtitle">
            Explore the core technical capabilities engineered into every template in the collection.
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
          <span className="section-badge">Why Tailwind Templates</span>
          <h2 className="product-section-title">Why Developers &amp; Agencies Prefer Our Template Bundle</h2>
          <p className="product-section-subtitle">
            Save hundreds of hours while delivering world-class, high-converting digital interfaces.
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
          <span className="section-badge">Template Categories</span>
          <h2 className="product-section-title">Diverse Industry Template Suites</h2>
          <p className="product-section-subtitle">
            Pre-designed landing templates tailored for SaaS, e-commerce, agency portfolios, and mobile apps.
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
          <h2 className="product-section-title">How to Use the Template Bundle</h2>
          <p className="product-section-subtitle">
            A simple 4-step developer workflow from template selection to production deployment.
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
      <section className="py-5 text-center" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)", color: "#fff" }}>
        <div className="container">
          <h2 style={{ fontSize: "36px", fontWeight: "800", fontFamily: "Outfit, sans-serif", marginBottom: "16px" }}>
            Ready to Supercharge Your Frontend Development?
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "18px", color: "rgba(255,255,255,0.95)" }}>
            Get instant access to 50+ Tailwind CSS landing page templates today.
          </p>
          <Link href="/contact?product=Tailwind%20Templates" className="btn-outline-mj" style={{ background: "#042442", color: "#fff", padding: "14px 38px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
            Inquire About Template Access <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
