'use client';

import React, { useState } from 'react';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import './PricingSection.css';

const PricingSection = ({ onSelectTier }) => {
  const [billingCycle, setBillingCycle] = useState('project'); // 'project' or 'retainer'

  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter Business',
      tagline: 'Ideal for SMEs needing a high-converting web presence fast.',
      price: billingCycle === 'project' ? '₹14,999' : '₹4,999/mo',
      period: billingCycle === 'project' ? 'one-time' : 'billed monthly',
      featured: false,
      badge: 'Fast Launch',
      buttonText: 'Get Started',
      features: [
        '5-7 Page Custom Mobile-First Website',
        'Next.js 15 / React High-Performance Architecture',
        'Lead Capture Form & Instant Email Alerts',
        'Basic On-Page SEO & Google Indexing',
        'Mobile Speed Optimization (90+ Score)',
        'Free SSL & 1 Year Domain/Hosting Setup',
        '10-Day Rapid Delivery Guarantee',
      ],
    },
    {
      id: 'growth',
      name: 'Growth & Lead Engine',
      tagline: 'Complete digital architecture built for rapid scaling & lead sourcing.',
      price: billingCycle === 'project' ? '₹34,999' : '₹12,499/mo',
      period: billingCycle === 'project' ? 'one-time' : 'billed monthly',
      featured: true,
      badge: '🔥 Most Popular',
      buttonText: 'Claim Growth Package',
      features: [
        'Everything in Starter Tier, plus:',
        '15+ Page Web Application or E-Commerce Portal',
        'AI Search Engine Optimization (AEO/GEO for ChatGPT & Google SGE)',
        'Automated Lead Sourcing Popups & CRM Integration',
        'Local SEO Package (Bettiah, Patna & Regional Ranking)',
        'Google Business Profile Optimization',
        'Dedicated WhatsApp & Call Lead Routing System',
        'Bi-Weekly ROI Performance & Traffic Analytics',
      ],
    },
    {
      id: 'enterprise-vip',
      name: 'Enterprise VIP Tier',
      tagline: 'High-ticket custom web systems, AI workflows & white-glove SLA.',
      price: billingCycle === 'project' ? '₹89,999' : '₹29,999/mo',
      period: billingCycle === 'project' ? 'starting at' : 'billed monthly',
      featured: false,
      badge: '👑 VIP Enterprise Anchor',
      buttonText: 'Book VIP Consultation',
      features: [
        'Everything in Growth Tier, plus:',
        'Custom Web App / Custom GST Billing & ERP Integration',
        '48-Hour Rapid Onboarding "Magic Moment" Guarantee',
        'Full AI Workflow & Automated Lead Nurturing Sequence',
        'Dedicated Senior Account Director & 24/7 Priority SLA',
        'Multi-Region SEO & Pan-India Market Expansion',
        'Custom Analytics Dashboard & Funnel Conversion Audit',
        'Quarterly Executive Strategy & Revenue Optimization Reviews',
      ],
    },
  ];

  const handleTierClick = (tier) => {
    if (onSelectTier) {
      onSelectTier(tier);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/contact';
      }
    }
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <span className="pricing-pill">
            <Sparkles size={14} className="pricing-pill-icon" /> Transparent Growth Pricing
          </span>
          <h2 className="pricing-title">
            Simple, Value-Driven Investment for <span className="text-highlight">Predictable Growth</span>
          </h2>
          <p className="pricing-subtitle">
            Choose the package engineered for your business scale. No hidden fees, guaranteed 48-hour onboarding, and government-recognized enterprise quality.
          </p>

          {/* Toggle Switch */}
          <div className="billing-toggle-wrapper">
            <button
              className={`billing-toggle-btn ${billingCycle === 'project' ? 'active' : ''}`}
              onClick={() => setBillingCycle('project')}
            >
              One-Time Project
            </button>
            <button
              className={`billing-toggle-btn ${billingCycle === 'retainer' ? 'active' : ''}`}
              onClick={() => setBillingCycle('retainer')}
            >
              Monthly Retainer <span className="discount-tag">Save 15%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.featured ? 'pricing-card-featured' : ''}`}
            >
              {tier.badge && <div className="card-badge">{tier.badge}</div>}

              <div className="card-header">
                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-tagline">{tier.tagline}</p>
              </div>

              <div className="card-price-box">
                <span className="price-amount">{tier.price}</span>
                <span className="price-period">/ {tier.period}</span>
              </div>

              <button
                className={`tier-cta-btn ${tier.featured ? 'cta-featured' : ''}`}
                onClick={() => handleTierClick(tier)}
              >
                {tier.buttonText} <ArrowRight size={16} />
              </button>

              <div className="card-divider" />

              <ul className="features-list">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={18} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="pricing-footer-trust">
          <div className="trust-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span>Govt. Registered MSME & DPIIT Recognized Enterprise</span>
          </div>
          <div className="trust-item">
            <Zap size={20} className="trust-icon" />
            <span>48-Hour Rapid Onboarding Guarantee</span>
          </div>
          <div className="trust-item">
            <PhoneCall size={20} className="trust-icon" />
            <span>Direct Founder Access: +91-9006543913</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
