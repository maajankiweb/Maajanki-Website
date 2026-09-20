'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaWordpress,
  FaShoppingCart,
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaCogs,
  FaCheckCircle,
  FaDatabase,
  FaServer,
  FaArrowRight,
  FaQuestionCircle
} from 'react-icons/fa';

import '@/app/styles/Home.css';
import '@/app/styles/WebDevelopment.css';

export default function ClientPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const services = [
    {
      icon: <FaWordpress />,
      title: "1. Custom WordPress Theme Architecture",
      subtitle: "Bespoke, Clean-Coded Themes Built for Brand Identity & Speed",
      desc: "Say goodbye to bloated off-the-shelf themes that drag your site down. We engineer custom WordPress themes from scratch using modern PHP 8.3 standards, Tailwind CSS, and custom Gutenberg block libraries — delivering pixel-perfect fidelity and sub-second load times.",
      points: [
        "Tailored Full Site Editing (FSE) & Custom Gutenberg Blocks",
        "Lightweight semantic HTML5 and clean CSS structure",
        "Mobile-first responsive layouts across all device viewports"
      ]
    },
    {
      icon: <FaShoppingCart />,
      title: "2. Scalable WooCommerce E-Commerce Stores",
      subtitle: "Enterprise B2B & B2C Stores with Indian Payment & Tax Compliance",
      desc: "Turn your WordPress website into a high-converting digital storefront. We configure robust WooCommerce platforms integrated with Razorpay, PhonePe, and Cashfree gateways, automated GST billing compliance, shipping aggregators (Shiprocket), and seamless inventory management.",
      points: [
        "1-Click frictionless checkout flow optimization",
        "Automated GST invoice generation with HSN codes",
        "Real-time stock alerts and multi-warehouse sync"
      ]
    },
    {
      icon: <FaRocket />,
      title: "3. Speed & Core Web Vitals Optimization",
      subtitle: "Achieving 95+ Google PageSpeed Scores on Mobile & Desktop",
      desc: "A one-second delay in page load translates to an 11% loss in page views. We optimize your WordPress site down to the database query level with Redis object caching, database transient cleanup, WebP/AVIF media delivery, and Cloudflare enterprise edge caching.",
      points: [
        "LCP < 1.8s, INP < 100ms, CLS < 0.05 guaranteed",
        "Asset minification and deferred JavaScript execution",
        "Server-level OPcache and Redis Object Cache implementation"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "4. Enterprise Security Hardening & Zero-Day Protection",
      subtitle: "Bank-Grade Protection Against Malware, Injections & Brute Force",
      desc: "WordPress powers over 40% of the web, making it a prime target for malicious attacks. We fortify your installation with custom login endpoints, two-factor authentication (2FA), database prefix hashing, real-time firewalls, and daily automated encrypted offsite backups.",
      points: [
        "Web Application Firewall (WAF) and DDoS mitigation",
        "Hardened file permissions and disabled XML-RPC execution",
        "Daily malware scanning and instant vulnerability patching"
      ]
    },
    {
      icon: <FaCode />,
      title: "5. Bespoke Plugin Development & API Integrations",
      subtitle: "Extending WordPress Capabilities with Clean Modular Code",
      desc: "When off-the-shelf plugins fail to meet your specific business requirements, our engineering team crafts lightweight, secure custom WordPress plugins. From CRM integrations to custom calculators and automated lead distribution, we build without limits.",
      points: [
        "REST API & GraphQL endpoint architectures",
        "CRM synchronization (HubSpot, Zoho, WhatsApp CRM)",
        "Zero plugin bloat — engineered strictly to your operational requirements"
      ]
    },
    {
      icon: <FaCogs />,
      title: "6. Headless WordPress & Decoupled Next.js Frontends",
      subtitle: "Unifying WordPress Editorial Power with Next.js 15 Performance",
      desc: "Give your marketing team the intuitive Gutenberg publishing interface they love while delivering an ultra-fast Next.js 15 React frontend to your users. Decoupled architecture offers unmatched security, instantaneous page transitions, and cutting-edge AEO crawlability.",
      points: [
        "WordPress as a headless CMS via WPGraphQL / REST API",
        "Next.js App Router frontend with static generation (SSG & ISR)",
        "Zero vulnerability surface area for the public web application"
      ]
    }
  ];

  const faqs = [
    {
      q: "Why should I choose custom WordPress development over pre-made templates?",
      a: "Pre-made templates are loaded with thousands of lines of unused scripts, unoptimized plugins, and security vulnerabilities. Custom WordPress development delivers clean, bespoke code engineered for 95+ PageSpeed scores, tailored brand aesthetics, and scalable modular functionality."
    },
    {
      q: "How do you ensure our WordPress website achieves fast loading speeds?",
      a: "We implement advanced server-side Redis object caching, asset minification, WebP/AVIF media delivery, database query optimization, and Cloudflare enterprise edge caching to guarantee sub-second load times."
    },
    {
      q: "Can you build high-converting WooCommerce stores in India?",
      a: "Yes, we architect end-to-end WooCommerce eCommerce platforms with Razorpay, PhonePe, and Cashfree payment gateways, automated GST billing, inventory synchronization, and high-converting checkout flows."
    },
    {
      q: "Do you provide WordPress maintenance and security hardening?",
      a: "We provide automated weekly offsite backups, two-factor authentication (2FA), firewall configurations, core/plugin vulnerability patches, and real-time uptime monitoring."
    },
    {
      q: "Can you migrate our existing website to WordPress without losing Google rankings?",
      a: "Absolutely. We execute seamless zero-downtime migrations with rigorous 1-to-1 301 redirect mapping, preserving your existing backlink equity, URL hierarchy, and organic keyword positions."
    }
  ];

  return (
    <div style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh' }}>
      {/* Banner Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)',
          padding: '120px 20px 80px',
          borderBottom: '3px solid #FD6A02',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(253, 106, 2, 0.15)',
              border: '1px solid rgba(253, 106, 2, 0.5)',
              color: '#FD6A02',
              padding: '6px 20px',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Enterprise CMS Engineering
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              fontFamily: '"Outfit", sans-serif',
              lineHeight: '1.2',
              maxWidth: '900px',
              margin: '0 auto 24px',
              color: '#ffffff'
            }}
          >
            Custom <span style={{ color: '#FD6A02' }}>WordPress Development</span> Services in India
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              maxWidth: '800px',
              margin: '0 auto 36px',
              lineHeight: '1.7'
            }}
          >
            High-speed custom theme engineering, scalable WooCommerce eCommerce stores, enterprise security hardening, and SEO-ready architecture built for ambitious brands.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn text-white fw-bold px-4 py-3"
              style={{ background: '#FD6A02', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(253, 106, 2, 0.4)' }}
            >
              Get Free Consultation &amp; Quote
            </Link>
            <Link
              href="/portfolio"
              className="btn text-white fw-bold px-4 py-3"
              style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '30px', textDecoration: 'none' }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: '90px 20px', background: '#020617' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                fontFamily: '"Outfit", sans-serif',
                color: '#ffffff',
                marginBottom: '15px'
              }}
            >
              End-to-End <span style={{ color: '#FD6A02' }}>WordPress Engineering</span> Solutions
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto' }}>
              We don't install generic themes. We craft enterprise-grade digital experiences tailored to your business operations and conversion goals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {services.map((svc, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '36px 30px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(253, 106, 2, 0.12)',
                    color: '#FD6A02',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '20px'
                  }}
                >
                  {svc.icon}
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px', fontFamily: '"Outfit", sans-serif' }}>
                  {svc.title}
                </h3>
                <h4 style={{ color: '#FD6A02', fontSize: '0.95rem', fontWeight: '600', marginBottom: '14px' }}>
                  {svc.subtitle}
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                  {svc.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {svc.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.9rem', marginBottom: '8px' }}>
                      <FaCheckCircle style={{ color: '#FD6A02', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #042544 0%, #021224 100%)',
          padding: '85px 20px',
          borderTop: '3px solid #FD6A02',
          borderBottom: '3px solid #042544'
        }}
      >
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#ffffff', fontWeight: '800', fontFamily: '"Outfit", sans-serif', marginBottom: '12px' }}>
              WordPress vs Next.js vs SaaS Builders: Which Is Right For You?
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
              Every project has distinct technical and editorial goals. Here is how our custom WordPress architecture compares to alternatives.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '16px', overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#020617', borderBottom: '2px solid #FD6A02' }}>
                  <th style={{ padding: '18px 24px', textAlign: 'left', color: '#ffffff', fontWeight: '700' }}>Feature / Capability</th>
                  <th style={{ padding: '18px 24px', textAlign: 'left', color: '#FD6A02', fontWeight: '700' }}>Custom WordPress (MaaJanki)</th>
                  <th style={{ padding: '18px 24px', textAlign: 'left', color: '#94a3b8', fontWeight: '700' }}>Generic WordPress Templates</th>
                  <th style={{ padding: '18px 24px', textAlign: 'left', color: '#94a3b8', fontWeight: '700' }}>SaaS Site Builders (Wix/Shopify)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <td style={{ padding: '16px 24px', color: '#ffffff', fontWeight: '600' }}>Page Speed &amp; Core Web Vitals</td>
                  <td style={{ padding: '16px 24px', color: '#4ade80', fontWeight: '600' }}>95+ Mobile Score (Sub-1.5s LCP)</td>
                  <td style={{ padding: '16px 24px', color: '#f87171' }}>35–55 (Slow Bloated Scripts)</td>
                  <td style={{ padding: '16px 24px', color: '#fbbf24' }}>60–75 (Moderate, Limited Control)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <td style={{ padding: '16px 24px', color: '#ffffff', fontWeight: '600' }}>Full Code Ownership &amp; Portability</td>
                  <td style={{ padding: '16px 24px', color: '#4ade80', fontWeight: '600' }}>100% Client-Owned</td>
                  <td style={{ padding: '16px 24px', color: '#4ade80' }}>100% Client-Owned</td>
                  <td style={{ padding: '16px 24px', color: '#f87171' }}>Locked In (Proprietary Platform)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <td style={{ padding: '16px 24px', color: '#ffffff', fontWeight: '600' }}>SEO, AEO &amp; Schema Control</td>
                  <td style={{ padding: '16px 24px', color: '#4ade80', fontWeight: '600' }}>Full Custom JSON-LD &amp; AEO /llms.txt</td>
                  <td style={{ padding: '16px 24px', color: '#fbbf24' }}>Generic Schema Plugins</td>
                  <td style={{ padding: '16px 24px', color: '#fbbf24' }}>Basic Schema, Restricted Head</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <td style={{ padding: '16px 24px', color: '#ffffff', fontWeight: '600' }}>Indian Payment &amp; GST Compliance</td>
                  <td style={{ padding: '16px 24px', color: '#4ade80', fontWeight: '600' }}>Razorpay, PhonePe &amp; Auto-GST HSN</td>
                  <td style={{ padding: '16px 24px', color: '#fbbf24' }}>Manual Plugin Clutter</td>
                  <td style={{ padding: '16px 24px', color: '#fbbf24' }}>Extra Transaction Fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '90px 20px', background: '#020617' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(253, 106, 2, 0.15)',
                color: '#FD6A02',
                padding: '6px 20px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '15px'
              }}
            >
              Help &amp; Answers
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', fontFamily: '"Outfit", sans-serif', color: '#ffffff' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: activeFaq === idx ? '1px solid #FD6A02' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => toggleFaq(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: activeFaq === idx ? '#FD6A02' : '#ffffff', margin: 0 }}>
                    {faq.q}
                  </h3>
                  <span style={{ color: '#FD6A02', fontSize: '20px', marginLeft: '15px' }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </div>
                {activeFaq === idx && (
                  <p style={{ marginTop: '16px', color: '#cbd5e1', fontSize: '0.98rem', lineHeight: '1.7', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px', margin: 0 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #FD6A02 0%, #d45100 100%)',
          padding: '70px 20px',
          textAlign: 'center',
          color: '#ffffff'
        }}
      >
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '800', fontFamily: '"Outfit", sans-serif', marginBottom: '16px' }}>
            Ready for a High-Speed, Custom WordPress Website?
          </h2>
          <p style={{ fontSize: '1.15rem', opacity: 0.95, marginBottom: '32px', lineHeight: '1.7' }}>
            Book a complimentary 30-minute discovery session with our lead architects. We will analyze your requirements and outline a tailored roadmap.
          </p>
          <Link
            href="/contact"
            className="btn fw-bold px-5 py-3"
            style={{
              background: '#042544',
              color: '#ffffff',
              borderRadius: '30px',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
            }}
          >
            Schedule Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
