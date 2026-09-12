'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { 
  Smartphone, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Code,
  Globe,
  Star,
  Users
} from "lucide-react";
import "@/app/styles/Branding.css";
import "@/app/styles/Home.css";
import "@/app/styles/UIUXDesign.css";
import FooterWithPopup from '@/components/FooterWithPopup';

const MobileAppDevelopment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  const capabilities = [
    {
      icon: <Smartphone className="w-8 h-8 text-[#FD6A02]" />,
      title: "Cross-Platform Apps (Flutter & React Native)",
      description: "Build once, deploy seamlessly on both iOS and Android. High-performance, native feel, and 40% reduced time-to-market."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#FD6A02]" />,
      title: "AI-Powered Mobile Applications",
      description: "Embed OpenAI, Gemini, voice agents, predictive intelligence, and personalized recommendations directly into your mobile experience."
    },
    {
      icon: <Layers className="w-8 h-8 text-[#FD6A02]" />,
      title: "Native iOS & Android Engineering",
      description: "High-octane native development using Swift and Kotlin for hardware-intensive applications, low-latency gaming, and IoT devices."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#FD6A02]" />,
      title: "Enterprise Mobile Security",
      description: "End-to-end data encryption, biometrics, secure payment gateways, and compliant authentication architectures for banking, healthcare, and retail."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FD6A02]" />,
      title: "API & Cloud Microservices",
      description: "Resilient serverless and containerized Node.js, Python, and MongoDB backends designed for millions of concurrent real-time transactions."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#FD6A02]" />,
      title: "App Store & Play Store Launch",
      description: "Complete submission handling, App Store Optimization (ASO), policy compliance, test flight releases, and continuous CI/CD updates."
    }
  ];

  const frameworks = [
    { name: "Flutter", role: "Cross-Platform UI", badge: "Google" },
    { name: "React Native", role: "Mobile Framework", badge: "Meta" },
    { name: "Swift", role: "Native iOS", badge: "Apple" },
    { name: "Kotlin", role: "Native Android", badge: "Google" },
    { name: "Next.js PWA", role: "Hybrid Web Apps", badge: "Vercel" },
    { name: "Node.js / Express", role: "Backend APIs", badge: "Runtime" },
    { name: "MongoDB Atlas", role: "Cloud Database", badge: "Storage" },
    { name: "OpenAI / Gemini", role: "AI Integrations", badge: "Intelligence" }
  ];

  const faqs = [
    {
      id: "faq1",
      question: "Which framework is best for my startup: Flutter or React Native?",
      answer: "Both are exceptional. Flutter provides pixel-perfect rendering across complex animations and single-codebase velocity. React Native is ideal if your web platform is already in React. During our initial consultation, we evaluate your technical roadmap to pick the ideal stack."
    },
    {
      id: "faq2",
      question: "How long does it take to develop a custom mobile app?",
      answer: "An MVP mobile app typically takes 4 to 8 weeks from design to store launch. Enterprise-grade apps with AI integrations, multi-role dashboards, and payment flows generally take 10 to 16 weeks."
    },
    {
      id: "faq3",
      question: "Will you help submit and get our app approved on Google Play and Apple App Store?",
      answer: "Yes. We manage 100% of the submission lifecycle: account setup, signing certificates, guideline compliance, screenshot generation, privacy disclosures, and fast-track approval."
    },
    {
      id: "faq4",
      question: "Can you upgrade or modernize our existing mobile app?",
      answer: "Yes, our team performs code audits, refactors legacy codebases to Flutter or React Native, updates deprecated SDKs, and implements modern UI/UX and AI capabilities."
    },
    {
      id: "faq5",
      question: "What post-launch maintenance and support do you provide?",
      answer: "We offer SLA-backed maintenance packages covering OS compatibility updates, new feature rollouts, bug fixes, server scaling, security patches, and app analytics monitoring."
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="custom-banner">
        <Image 
          priority 
          src="/images/pages/main-services-pages/Web-Devlopment-banner-Maajanki-Web-Tech.webp" 
          alt="Mobile app development company in India by MaaJanki Web Tech" 
          title="Mobile App Development Company | Flutter, React Native, iOS & Android" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <span style={{ 
              display: "inline-block", 
              background: "rgba(253, 106, 2, 0.9)", 
              color: "#ffffff", 
              padding: "6px 18px", 
              borderRadius: "50px", 
              fontSize: "13px", 
              fontWeight: "700", 
              letterSpacing: "1px", 
              marginBottom: "16px",
              textTransform: "uppercase"
            }}>
              Premier Mobile Engineering
            </span>
            <h1>
              Mobile App Development Company in India | iOS, Android &amp; AI-Powered Apps
            </h1>
            <div className="aeo-definition-box">
              <p>
                Mobile App Development at MaaJanki Web Tech merges human-centered design with 
                scalable code architectures. From high-speed cross-platform apps built on Flutter 
                and React Native to intelligent AI copilots, we build apps that retain users and scale revenue.
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Get Free App Quote
              </Link>
              <Link href="/portfolio" className="btn2">
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Metric Bar */}
      <section style={{ background: "#042544", padding: "35px 20px", borderBottom: "3px solid #FD6A02" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px", textAlign: "center", color: "#ffffff" }}>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "#FD6A02", fontFamily: '"Outfit", sans-serif' }}>50+</div>
              <p style={{ margin: 0, fontSize: "14px", color: "#cbd5e1" }}>Apps Deployed</p>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "#FD6A02", fontFamily: '"Outfit", sans-serif' }}>99.9%</div>
              <p style={{ margin: 0, fontSize: "14px", color: "#cbd5e1" }}>Crash-Free Sessions</p>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "#FD6A02", fontFamily: '"Outfit", sans-serif' }}>4.8 ★</div>
              <p style={{ margin: 0, fontSize: "14px", color: "#cbd5e1" }}>Average App Store Rating</p>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "#FD6A02", fontFamily: '"Outfit", sans-serif' }}>MSME / DPIIT</div>
              <p style={{ margin: 0, fontSize: "14px", color: "#cbd5e1" }}>Government Certified Agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section style={{ background: "#020617", padding: "85px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ 
              display: "inline-block", 
              background: "#FD6A02", 
              color: "#ffffff", 
              padding: "6px 20px", 
              borderRadius: "50px", 
              fontSize: "12px", 
              fontWeight: "800", 
              letterSpacing: "2px", 
              textTransform: "uppercase", 
              marginBottom: "14px" 
            }}>
              Capabilities
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif' }}>
              Full-Lifecycle Mobile Application Services
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "750px", margin: "10px auto 0" }}>
              From initial wireframing to App Store deployment and ongoing feature iterations, we build mobile apps tailored for rapid commercial growth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {capabilities.map((cap, i) => (
              <div 
                key={i} 
                style={{ 
                  background: "rgba(255, 255, 255, 0.03)", 
                  border: "1px solid rgba(253, 106, 2, 0.25)", 
                  borderRadius: "20px", 
                  padding: "35px 30px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  borderRadius: "14px", 
                  background: "rgba(253, 106, 2, 0.12)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  marginBottom: "20px" 
                }}>
                  {cap.icon}
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
                  {cap.title}
                </h3>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section style={{ background: "#042544", padding: "80px 20px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <span style={{ 
              display: "inline-block", 
              background: "#FD6A02", 
              color: "#ffffff", 
              padding: "6px 20px", 
              borderRadius: "50px", 
              fontSize: "12px", 
              fontWeight: "800", 
              letterSpacing: "2px", 
              textTransform: "uppercase", 
              marginBottom: "14px" 
            }}>
              Tech Stack
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif' }}>
              Battle-Tested Mobile Frameworks &amp; Tools
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {frameworks.map((fw, idx) => (
              <div 
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "24px 20px",
                  textAlign: "center"
                }}
              >
                <span style={{ 
                  fontSize: "11px", 
                  color: "#FD6A02", 
                  fontWeight: "700", 
                  textTransform: "uppercase", 
                  letterSpacing: "1px" 
                }}>
                  {fw.badge}
                </span>
                <h4 style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: "700", margin: "8px 0 4px" }}>
                  {fw.name}
                </h4>
                <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
                  {fw.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section style={{ background: "#020617", padding: "85px 20px", position: "relative" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ 
              display: "inline-block", 
              background: "#FD6A02", 
              color: "#ffffff", 
              padding: "6px 20px", 
              borderRadius: "50px", 
              fontSize: "12px", 
              fontWeight: "800", 
              letterSpacing: "2px", 
              textTransform: "uppercase", 
              marginBottom: "14px" 
            }}>
              Pricing Packages
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.7rem)", color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif' }}>
              Transparent Mobile App Development Plans
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px" }}>
              High-velocity delivery with guaranteed milestone timelines and code ownership.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {/* Starter App */}
            <div style={{ 
              background: "#042544", 
              border: "1px solid rgba(255, 255, 255, 0.15)", 
              borderRadius: "20px", 
              padding: "40px 30px", 
              color: "#ffffff" 
            }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>Starter MVP App</h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px" }}>Perfect for validating new business concepts</p>
              <div style={{ fontSize: "2.2rem", fontWeight: "800", color: "#FD6A02", margin: "20px 0" }}>
                ₹29,999 <span style={{ fontSize: "14px", color: "#94a3b8" }}>/ one-time</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", color: "#e2e8f0", fontSize: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Flutter / React Native build</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Up to 6 core app screens</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> User auth &amp; profile setup</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Play Store submission guide</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> 30 days post-launch warranty</li>
              </ul>
              <Link href="/contact" style={{ display: "block", textAlign: "center", background: "#FD6A02", color: "#ffffff", padding: "12px 24px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
                Get Started
              </Link>
            </div>

            {/* Growth App (Featured) */}
            <div style={{ 
              background: "#042544", 
              border: "2px solid #FD6A02", 
              borderRadius: "20px", 
              padding: "40px 30px", 
              color: "#ffffff",
              boxShadow: "0 20px 45px rgba(253, 106, 2, 0.25)",
              position: "relative"
            }}>
              <span style={{ 
                position: "absolute", 
                top: "-14px", 
                right: "25px", 
                background: "#FD6A02", 
                color: "#ffffff", 
                fontSize: "12px", 
                fontWeight: "800", 
                padding: "4px 14px", 
                borderRadius: "20px", 
                letterSpacing: "1px" 
              }}>
                MOST POPULAR
              </span>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>Business Scaler</h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px" }}>Complete mobile solution for established businesses</p>
              <div style={{ fontSize: "2.2rem", fontWeight: "800", color: "#FD6A02", margin: "20px 0" }}>
                ₹64,999 <span style={{ fontSize: "14px", color: "#94a3b8" }}>/ one-time</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", color: "#e2e8f0", fontSize: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> iOS + Android dual deployment</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Up to 15 custom screens &amp; flows</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Payment gateway &amp; push notifications</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Admin web dashboard included</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Full App Store &amp; Play Store launch</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> 60 days warranty &amp; updates</li>
              </ul>
              <Link href="/contact" style={{ display: "block", textAlign: "center", background: "#FD6A02", color: "#ffffff", padding: "12px 24px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
                Launch Your App
              </Link>
            </div>

            {/* Enterprise App */}
            <div style={{ 
              background: "#042544", 
              border: "1px solid rgba(255, 255, 255, 0.15)", 
              borderRadius: "20px", 
              padding: "40px 30px", 
              color: "#ffffff" 
            }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>Enterprise &amp; AI App</h3>
              <p style={{ color: "#cbd5e1", fontSize: "14px" }}>High-load, mission-critical custom architectures</p>
              <div style={{ fontSize: "2.2rem", fontWeight: "800", color: "#FD6A02", margin: "20px 0" }}>
                ₹1,49,999+ <span style={{ fontSize: "14px", color: "#94a3b8" }}>/ custom</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", color: "#e2e8f0", fontSize: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Unlimited screens &amp; microservices</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> AI integration (LLMs, Voice, Vision)</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Real-time GPS &amp; socket messaging</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> Dedicated account architect</li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><CheckCircle2 className="w-4 h-4 text-[#FD6A02]" /> 6 months SLA-backed support</li>
              </ul>
              <Link href="/contact" style={{ display: "block", textAlign: "center", background: "rgba(255, 255, 255, 0.1)", border: "1px solid #FD6A02", color: "#ffffff", padding: "12px 24px", borderRadius: "30px", fontWeight: "700", textDecoration: "none" }}>
                Contact Enterprise Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting CTA Banner */}
      <section style={{ 
        background: "linear-gradient(135deg, #FD6A02 0%, #FF8533 100%)", 
        padding: "60px 20px", 
        color: "#ffffff" 
      }}>
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: "800", fontFamily: '"Outfit", sans-serif', marginBottom: "16px" }}>
            Turn Your App Vision Into Reality Today
          </h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 30px", color: "#fff5ee" }}>
            Schedule a free 30-minute technical architecture consultation with our senior mobile app engineers.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            <Link 
              href="/contact" 
              style={{ 
                background: "#042544", 
                color: "#ffffff", 
                padding: "14px 32px", 
                borderRadius: "30px", 
                fontWeight: "700", 
                fontSize: "16px", 
                textDecoration: "none" 
              }}
            >
              Book Free Strategy Call
            </Link>
            <a 
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20want%20to%20build%20a%20mobile%20app."
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: "#ffffff", 
                color: "#042544", 
                padding: "14px 32px", 
                borderRadius: "30px", 
                fontWeight: "700", 
                fontSize: "16px", 
                textDecoration: "none" 
              }}
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" style={{ background: "#020617", padding: "85px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="faq-header" style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: '"Outfit", sans-serif' }}>
              Frequently Asked Questions: Mobile App Development
            </h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.id} style={{ background: "#042544", borderRadius: "14px", marginBottom: "14px" }}>
                <input type="checkbox" id={faq.id} className="faq-toggle" />
                <label htmlFor={faq.id} className="faq-question" style={{ color: "#ffffff", padding: "20px" }}>
                  <span className="faq-number" style={{ color: "#FD6A02" }}>{index + 1}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <svg className="faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </label>
                <div className="faq-content">
                  <div className="faq-body" style={{ color: "#cbd5e1", padding: "0 20px 20px" }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterWithPopup />
    </>
  );
};

export default MobileAppDevelopment;
