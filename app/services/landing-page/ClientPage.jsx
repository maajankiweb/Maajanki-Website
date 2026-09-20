'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBolt,
  FaBullseye,
  FaFilter,
  FaChartBar,
  FaWhatsapp,
  FaShieldAlt,
  FaCheckCircle,
  FaMobileAlt,
  FaSearchDollar,
  FaArrowRight
} from 'react-icons/fa';

import '@/app/styles/Home.css';
import '@/app/styles/PerformanceMarketing.css';

export default function ClientPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const pillars = [
    {
      icon: <FaBullseye />,
      title: "1. 1:1 Attention Ratio & Distraction-Free UX",
      subtitle: "Eliminating Navigation Leaks to Focus Exclusively on the Conversion Goal",
      desc: "Standard website pages allow visitors to wander through header navigation, footer links, and related articles — leaking away 70% of paid ad traffic. Our landing pages enforce a strict 1:1 attention ratio: every visual cue, headline, and button drives the user toward a single high-value action.",
      points: [
        "Zero external menu distractions or exit links",
        "Sticky, high-contrast primary conversion buttons",
        "Directional visual hierarchy guiding the eye directly to form inputs"
      ]
    },
    {
      icon: <FaBolt />,
      title: "2. Sub-Second Load Times & 10/10 Quality Score",
      subtitle: "Lowering Ad CPCs by Meeting Google's Strictest Landing Page Thresholds",
      desc: "Every 100ms delay in page load burns advertising budget. Built on Next.js 15 Server Components and lightweight CSS, our landing pages achieve 98+ mobile PageSpeed scores, earning perfect 9-10/10 Google Ads Quality Scores that slash your Cost Per Click by up to 50%.",
      points: [
        "First Contentful Paint (FCP) under 0.6 seconds",
        "Higher Google Ads Ad Rank at lower bid thresholds",
        "Zero layout shifts (CLS < 0.01) ensuring frictionless mobile clicks"
      ]
    },
    {
      icon: <FaFilter />,
      title: "3. Direct-Response Copywriting & Behavioral Triggers",
      subtitle: "Compelling Headlines, Social Proof & Risk Reversal Systems",
      desc: "Design gets attention, but copy closes the sale. Our certified conversion copywriters structure your value proposition using proven psychological persuasion models (PAS, AIDA, and StoryBrand), addressing objections and establishing undeniable authority in seconds.",
      points: [
        "E-E-A-T trust signals (MSME, DPIIT, client verification badges)",
        "Real customer testimonial callouts and verifiable review stars",
        "Zero-risk guarantees and clear privacy assurances"
      ]
    },
    {
      icon: <FaWhatsapp />,
      title: "4. Real-Time WhatsApp & CRM Lead Synchronization",
      subtitle: "Instant Notifications Within 30 Seconds to Maximize Lead Close Rates",
      desc: "Speed-to-lead is everything: responding within 5 minutes increases conversion rates by 391%. We wire your landing page forms to trigger instant WhatsApp notifications, automated SMS confirmations, and direct API sync with HubSpot, Zoho, or Google Sheets.",
      points: [
        "1-Click direct WhatsApp chat launch with pre-filled campaign UTMs",
        "Webhook automation with instant webhook validation",
        "Automated email notification with complete lead submission payload"
      ]
    },
    {
      icon: <FaChartBar />,
      title: "5. Rigorous A/B Split Testing & Heatmap Tracking",
      subtitle: "Data-Driven Iteration to Continuously Elevate Conversion Rates",
      desc: "Launching the landing page is just step one. We configure Microsoft Clarity heatmaps, scroll-depth tracking, and server-side A/B test experiments (headlines, hero graphics, CTA wording) to systematically discover and eliminate conversion bottlenecks.",
      points: [
        "Granular scroll-depth and rage-click behavioral recordings",
        "Statistical significance tracking across split variants",
        "Ongoing monthly conversion rate optimization sprints"
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "6. Thumb-Friendly Mobile Form Architecture",
      subtitle: "Micro-Step Lead Funnels Optimized for Touchscreen Conversions",
      desc: "Over 80% of paid social and search traffic arrives on smartphones. We design intuitive multi-step forms with large tap targets, native auto-fill inputs, and zero visual clutter — making submitting an inquiry effortlessly smooth on any screen.",
      points: [
        "Multi-step progress bars that reduce cognitive friction",
        "Native input types for instant mobile keyboard switching",
        "Instant real-time client-side field validation"
      ]
    }
  ];

  const faqs = [
    {
      q: "What makes your landing pages convert higher than standard website pages?",
      a: "Unlike regular web pages that offer distracting multi-level menus, our landing pages feature a single 1:1 attention ratio, razor-sharp value propositions, verified trust badges, friction-free forms, and sub-second load speeds."
    },
    {
      q: "How does landing page speed impact Google Ads Quality Score and CAC?",
      a: "Google Ads rewards fast, highly relevant landing pages with higher Quality Scores (8-10/10), reducing Cost Per Click (CPC) by up to 50% and improving ad auction rank."
    },
    {
      q: "Do you integrate CRM and WhatsApp lead automation into landing pages?",
      a: "Yes, all submitted leads can automatically flow instantly into WhatsApp, Zoho, HubSpot, Google Sheets, or your email inbox via Webhook APIs within seconds of submission."
    },
    {
      q: "What technology do you use to build landing pages?",
      a: "We develop landing pages using ultra-fast Next.js 15 Server Components, Tailwind CSS, or custom WordPress Gutenberg templates, ensuring 95+ PageSpeed performance scores."
    },
    {
      q: "Can you design landing pages for specific marketing campaigns like Google Ads and Meta Ads?",
      a: "Yes, we tailor message-matching specifically to your ad creatives — ensuring keyword scent and visual continuity from the ad copy directly through to the thank-you confirmation."
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
            Conversion Rate Optimization (CRO)
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              fontFamily: '"Outfit", sans-serif',
              lineHeight: '1.2',
              maxWidth: '920px',
              margin: '0 auto 24px',
              color: '#ffffff'
            }}
          >
            High-Converting <span style={{ color: '#FD6A02' }}>Landing Page Design</span> &amp; CRO in India
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              maxWidth: '820px',
              margin: '0 auto 36px',
              lineHeight: '1.7'
            }}
          >
            Stop wasting paid advertising budget on generic websites. We build lightning-fast, psychologically calibrated landing pages engineered to maximize Google Ads Quality Score and multiply your lead conversion rates.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn text-white fw-bold px-4 py-3"
              style={{ background: '#FD6A02', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(253, 106, 2, 0.4)' }}
            >
              Get Free CRO Audit &amp; Quote
            </Link>
            <Link
              href="/services/performance-marketing"
              className="btn text-white fw-bold px-4 py-3"
              style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '30px', textDecoration: 'none' }}
            >
              Explore Performance Marketing
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Grid Section */}
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
              The 6 Pillars of a <span style={{ color: '#FD6A02' }}>5x Higher Converting</span> Landing Page
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto' }}>
              We combine behavioral design, rapid front-end engineering, and deep message matching to turn clicks into profitable clients.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {pillars.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '36px 30px',
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
                  {item.icon}
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px', fontFamily: '"Outfit", sans-serif' }}>
                  {item.title}
                </h3>
                <h4 style={{ color: '#FD6A02', fontSize: '0.95rem', fontWeight: '600', marginBottom: '14px' }}>
                  {item.subtitle}
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                  {item.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.points.map((pt, pIdx) => (
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

      {/* Ad Alignment Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #042544 0%, #021224 100%)',
          padding: '85px 20px',
          borderTop: '3px solid #FD6A02',
          borderBottom: '3px solid #042544'
        }}
      >
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#FD6A02',
              color: '#ffffff',
              padding: '6px 22px',
              borderRadius: '30px',
              fontSize: '12px',
              fontWeight: '800',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            Omnichannel Alignment
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#ffffff', fontWeight: '800', fontFamily: '"Outfit", sans-serif', marginBottom: '20px' }}>
            Engineered Specifically for Paid Ad Channels
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            A landing page built for Google Search intent requires different psychological triggers than a direct-response page built for Instagram or Facebook Ads. We engineer customized page dynamics for every acquisition channel.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '16px', padding: '24px', textAlign: 'left' }}>
              <h4 style={{ color: '#FD6A02', fontWeight: '800', marginBottom: '10px' }}>Google Search Ads</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Keyword-scented headline matching, 10/10 quality score architecture, and fast-loading direct quote forms that capture commercial search intent.
              </p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '16px', padding: '24px', textAlign: 'left' }}>
              <h4 style={{ color: '#FD6A02', fontWeight: '800', marginBottom: '10px' }}>Meta &amp; Instagram Ads</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Visual continuity matching feed video/image creatives, mobile-first thumb-friendly interactions, and direct WhatsApp lead triggers.
              </p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '16px', padding: '24px', textAlign: 'left' }}>
              <h4 style={{ color: '#FD6A02', fontWeight: '800', marginBottom: '10px' }}>LinkedIn B2B Ads</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Authoritative executive summaries, verified enterprise case studies, and Calendly / CRM booking widgets for B2B decision-makers.
              </p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '16px', padding: '24px', textAlign: 'left' }}>
              <h4 style={{ color: '#FD6A02', fontWeight: '800', marginBottom: '10px' }}>YouTube Ad Funnels</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Video Sales Letter (VSL) embeds with delayed CTA reveals, social proof popups, and micro-conversion quiz funnels.
              </p>
            </div>
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
              Questions &amp; Answers
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
            Ready to Multiply Your Paid Ad Conversion Rate?
          </h2>
          <p style={{ fontSize: '1.15rem', opacity: 0.95, marginBottom: '32px', lineHeight: '1.7' }}>
            Let our CRO team review your current landing page or architect a high-converting page from scratch for your next campaign.
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
            Claim Free Landing Page Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
