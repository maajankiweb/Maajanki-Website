'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import "@/app/styles/WebDevelopment.css";
import "@/app/styles/Home.css";
import "@/app/styles/Branding.css";
import "@/app/styles/UIUXDesign.css";

const MobileAppDevelopment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openBrochurePopup = () => setIsPopupOpen(true);
  const closeBrochurePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* Banner Section */}
      <section className="custom-banner">
        <Image
          priority
          src="/images/pages/main-services-pages/web-development-banner-image-Maajanki-Web-Tech.webp"
          alt="Mobile App Development Company in India by MaaJanki Web Tech"
          title="Mobile App Development Company | Flutter, React Native, iOS & Android"
          width={1280}
          height={720}
        />

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Mobile App Development Company in Bihar &amp; India | iOS, Android &amp; Flutter Agency
            </h1>
            <div className="aeo-definition-box">
              <p>
                Mobile App Development is the engineering process of architecting, designing,
                coding, testing, and deploying high-performance native or cross-platform applications
                for smartphones and tablets. By combining native frameworks (Swift, Kotlin),
                multi-platform engines (Flutter, React Native), secure cloud backends (Node.js,
                Express, MongoDB), and Generative AI modules, mobile engineering ensures
                sub-second load times, intuitive user journeys, and maximum conversion retention
                across the Apple App Store and Google Play Store.
              </p>
            </div>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Get a Free Consultation
              </Link>
              <Link href="/about" className="btn2">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Page Introduction Section - Modern Redesigned Layout */}
      <section
        className="mobile-intro-redesign"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #042544 50%, #091e36 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="mobile-intro-card"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(253, 106, 2, 0.35)",
              borderRadius: "24px",
              padding: "50px 40px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(253, 106, 2, 0.15)",
              position: "relative",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(253, 106, 2, 0.15)",
                  border: "1px solid rgba(253, 106, 2, 0.5)",
                  color: "#FD6A02",
                  padding: "6px 20px",
                  borderRadius: "30px",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Mobile Engineering &amp; App Architecture
              </span>
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: "800",
                  fontFamily: '"Outfit", sans-serif',
                  lineHeight: "1.3",
                  maxWidth: "950px",
                  margin: "0 auto 20px",
                }}
              >
                Top-Rated <span style={{ color: "#FD6A02" }}>Mobile App Development Company in Bihar, India</span> – Engineering High-Performance iOS, Android &amp; Flutter Applications
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  Are you looking for the <strong style={{ color: "#ffffff" }}>best mobile app development company in Bihar, India</strong>? MaaJanki Web Tech is your premier mobile engineering partner. We build custom iOS, Android, and cross-platform apps for startups and enterprises across Patna, Bettiah, Delhi NCR, Bangalore, and globally.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(253, 106, 2, 0.08)",
                  border: "1px solid rgba(253, 106, 2, 0.25)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    color: "#e2e8f0",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  From single-codebase Flutter and React Native velocity to AI copilots, payment gateways, and real-time socket messaging—we ensure your mobile software operates with 99.9% crash-free stability, pixel-perfect responsiveness, and verified store approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Structure - 6 Showcase Sections */}
      <section className="services-overview-section mobile-overview-section" style={{ display: "block", background: "none", padding: 0 }}>
        
        {/* Section 1 – Native iOS App Development */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }}>
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="ios-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#021224" />
                        </linearGradient>
                        <linearGradient id="ios-screen" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0f172a" />
                          <stop offset="100%" stopColor="#1e293b" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#ios-bg)" rx="16" />
                      {/* iPhone Mockup Frame */}
                      <rect x="175" y="30" width="170" height="320" rx="32" fill="#000" stroke="#FD6A02" strokeWidth="2.5" />
                      {/* Dynamic Island */}
                      <rect x="230" y="44" width="60" height="14" rx="7" fill="#111" />
                      <circle cx="278" cy="51" r="3" fill="#0ea5e9" />
                      {/* Screen Content */}
                      <rect x="185" y="66" width="150" height="268" rx="20" fill="url(#ios-screen)" />
                      {/* App Header */}
                      <rect x="195" y="78" width="80" height="12" rx="6" fill="#FD6A02" />
                      <circle cx="318" cy="84" r="8" fill="rgba(255,255,255,0.15)" />
                      {/* Hero Card */}
                      <rect x="195" y="100" width="130" height="65" rx="10" fill="rgba(253,106,2,0.15)" stroke="rgba(253,106,2,0.4)" strokeWidth="1" />
                      <text x="260" y="125" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">SwiftUI 6.0</text>
                      <text x="260" y="142" textAnchor="middle" fill="#38bdf8" fontSize="9">Native iOS Architecture</text>
                      {/* List Items */}
                      <rect x="195" y="175" width="130" height="32" rx="8" fill="rgba(255,255,255,0.06)" />
                      <circle cx="211" cy="191" r="7" fill="#22c55e" />
                      <text x="245" y="194" fill="#ffffff" fontSize="9">CoreML Integration</text>
                      <rect x="195" y="215" width="130" height="32" rx="8" fill="rgba(255,255,255,0.06)" />
                      <circle cx="211" cy="231" r="7" fill="#FD6A02" />
                      <text x="245" y="234" fill="#ffffff" fontSize="9">Biometric Security</text>
                      <rect x="195" y="255" width="130" height="32" rx="8" fill="rgba(255,255,255,0.06)" />
                      <circle cx="211" cy="271" r="7" fill="#a855f7" />
                      <text x="245" y="274" fill="#ffffff" fontSize="9">Metal Graphics 60fps</text>
                      {/* Home Indicator */}
                      <rect x="235" y="322" width="50" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
                      {/* Floating Badges */}
                      <rect x="40" y="70" width="115" height="50" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <text x="97" y="93" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Apple Store</text>
                      <text x="97" y="108" textAnchor="middle" fill="#22c55e" fontSize="9">100% HIG Compliant</text>
                      <rect x="365" y="230" width="115" height="50" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(253,106,2,0.4)" strokeWidth="1" />
                      <text x="422" y="253" textAnchor="middle" fill="#FD6A02" fontSize="10" fontWeight="bold">Swift &amp; SwiftData</text>
                      <text x="422" y="268" textAnchor="middle" fill="#cbd5e1" fontSize="9">Zero Memory Leaks</text>
                      <text x="260" y="365" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Native Apple Ecosystem Engineering</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area">
                <h2 className="main-heading">1. Native iOS App Development</h2>
                <h3 className="sub-heading">High-Octane Swift &amp; SwiftUI Engineering for the Apple Ecosystem</h3>
                <p className="content-text">
                  <strong>Native iOS App Development</strong> connects your business with high-value Apple users who demand frictionless responsiveness, biometric security, and refined aesthetics. At MaaJanki Web Tech, we engineer custom native applications tailored for iPhones, iPads, Apple Watches, and Mac devices using Apple&apos;s latest Swift, SwiftUI, and Combine frameworks.
                </p>
                <p className="content-text">
                  We specialize in <strong>hardware-accelerated graphics, CoreML intelligence, and offline-first database synchronization.</strong> By strictly adhering to Apple&apos;s Human Interface Guidelines (HIG), we ensure your app navigates naturally, optimizes battery consumption, and leverages Metal rendering for fluid 60fps animations.
                </p>
                <p className="content-text">
                  Our engineers conduct end-to-end sandbox testing, memory leak profiling via Xcode Instruments, and zero-trust encryption for Apple Pay and Face ID integrations. We manage the entire App Store compliance review, ensuring 100% approval without costly guidelines rejections.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom-coded iOS application</strong> becomes a prestigious digital asset that drives customer lifetime value, builds brand prestige, and unlocks sustained app store revenue.
                </p>
                <span className="content-cta">
                  <strong>Allow your iOS app to dominate the App Store with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 – Native Android App Development */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }}>
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="droid-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#021224" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#droid-bg)" rx="16" />
                      {/* Android Phone Frame */}
                      <rect x="175" y="30" width="170" height="320" rx="26" fill="#000" stroke="#3ddc84" strokeWidth="2.5" />
                      {/* Camera Punch Hole */}
                      <circle cx="260" cy="46" r="4" fill="#222" />
                      {/* Screen Content */}
                      <rect x="185" y="58" width="150" height="280" rx="18" fill="#0f172a" />
                      {/* Material 3 Top Bar */}
                      <rect x="195" y="70" width="90" height="12" rx="4" fill="#3ddc84" />
                      <rect x="305" y="70" width="20" height="12" rx="4" fill="rgba(255,255,255,0.2)" />
                      {/* Jetpack Compose Card */}
                      <rect x="195" y="92" width="130" height="70" rx="10" fill="rgba(61,220,132,0.12)" stroke="rgba(61,220,132,0.4)" strokeWidth="1" />
                      <text x="260" y="120" textAnchor="middle" fill="#3ddc84" fontSize="11" fontWeight="bold">Kotlin &amp; Compose</text>
                      <text x="260" y="137" textAnchor="middle" fill="#ffffff" fontSize="9">Material You Dynamic Colors</text>
                      {/* Android Grid items */}
                      <rect x="195" y="172" width="60" height="48" rx="8" fill="rgba(255,255,255,0.06)" />
                      <text x="225" y="195" textAnchor="middle" fill="#FD6A02" fontSize="9" fontWeight="bold">Room DB</text>
                      <text x="225" y="208" textAnchor="middle" fill="#94a3b8" fontSize="7">Offline Sync</text>
                      <rect x="265" y="172" width="60" height="48" rx="8" fill="rgba(255,255,255,0.06)" />
                      <text x="295" y="195" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Coroutines</text>
                      <text x="295" y="208" textAnchor="middle" fill="#94a3b8" fontSize="7">Async Flow</text>
                      <rect x="195" y="230" width="130" height="35" rx="8" fill="rgba(255,255,255,0.06)" />
                      <text x="260" y="252" textAnchor="middle" fill="#ffffff" fontSize="9">Google Play Billing v7</text>
                      {/* Android Gestures */}
                      <line x1="230" y1="326" x2="290" y2="326" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
                      {/* Floating Pill Badges */}
                      <rect x="35" y="80" width="125" height="52" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(61,220,132,0.4)" strokeWidth="1" />
                      <text x="97" y="104" textAnchor="middle" fill="#3ddc84" fontSize="10" fontWeight="bold">Device Scaling</text>
                      <text x="97" y="119" textAnchor="middle" fill="#cbd5e1" fontSize="9">24,000+ Screen Models</text>
                      <rect x="360" y="220" width="125" height="52" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(253,106,2,0.4)" strokeWidth="1" />
                      <text x="422" y="244" textAnchor="middle" fill="#FD6A02" fontSize="10" fontWeight="bold">Play Console</text>
                      <text x="422" y="259" textAnchor="middle" fill="#cbd5e1" fontSize="9">Target SDK 35 Ready</text>
                      <text x="260" y="365" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Robust Android &amp; Google Ecosystem Architecture</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }}>
                <h2 className="main-heading">2. Native Android App Development</h2>
                <h3 className="sub-heading">Engineered for Fragmentation Resilience, High Speed, and Play Store Leadership</h3>
                <p className="content-text">
                  <strong>Native Android App Development</strong> powers the vast majority of mobile consumers across India and international markets. With device fragmentation spanning thousands of screen resolutions, processors, and OS versions, developing a resilient Android app demands rigorous software engineering and modern tooling.
                </p>
                <p className="content-text">
                  MaaJanki Web Tech crafts <strong>ultra-fast, responsive Android applications using Kotlin, Jetpack Compose, and Android Architecture Components (MVVM/MVI).</strong> Our solutions are designed to operate smoothly even on budget hardware and intermittent 4G/5G mobile networks without battery drain or screen stutter.
                </p>
                <p className="content-text">
                  We integrate Google Play Services, FCM push notifications, Play Billing, encrypted Room SQLite storage, and background work managers. Our team ensures full compliance with Google Play Store Target SDK 35 mandates and privacy policy audits.
                </p>
                <p className="content-text">
                  Partnering with MaaJanki Web Tech ensures <strong>your business Android app</strong> maintains 99.9% crash-free rates, attracts high organic downloads, and provides an addictive user experience that turns app installs into recurring revenue.
                </p>
                <span className="content-cta">
                  <strong>Scale your Android user base with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 – Cross-Platform Flutter & React Native */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }}>
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="cross-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#021224" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#cross-bg)" rx="16" />
                      {/* Central Codebase Hub */}
                      <circle cx="260" cy="170" r="52" fill="#042544" stroke="#FD6A02" strokeWidth="2.5" />
                      <text x="260" y="162" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">1 Single</text>
                      <text x="260" y="179" textAnchor="middle" fill="#FD6A02" fontSize="11" fontWeight="bold">Codebase</text>
                      <text x="260" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8">-40% Costs</text>
                      {/* Left Side: Flutter */}
                      <rect x="50" y="80" width="130" height="90" rx="14" fill="rgba(2,132,199,0.12)" stroke="#0284c7" strokeWidth="1.5" />
                      <text x="115" y="112" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">Flutter</text>
                      <text x="115" y="130" textAnchor="middle" fill="#cbd5e1" fontSize="9">Dart + Impeller Engine</text>
                      <text x="115" y="148" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">60fps Guaranteed</text>
                      {/* Right Side: React Native */}
                      <rect x="340" y="80" width="130" height="90" rx="14" fill="rgba(97,218,251,0.12)" stroke="#61dafb" strokeWidth="1.5" />
                      <text x="405" y="112" textAnchor="middle" fill="#61dafb" fontSize="13" fontWeight="bold">React Native</text>
                      <text x="405" y="130" textAnchor="middle" fill="#cbd5e1" fontSize="9">Hermes + Fabric Engine</text>
                      <text x="405" y="148" textAnchor="middle" fill="#FD6A02" fontSize="9" fontWeight="bold">Unified Web &amp; App</text>
                      {/* Bottom Compilation Targets */}
                      <rect x="90" y="240" width="140" height="55" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <text x="160" y="265" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">iOS App Store</text>
                      <text x="160" y="282" textAnchor="middle" fill="#38bdf8" fontSize="9">Apple Deployment</text>
                      <rect x="290" y="240" width="140" height="55" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(61,220,132,0.4)" strokeWidth="1" />
                      <text x="360" y="265" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Google Play Store</text>
                      <text x="360" y="282" textAnchor="middle" fill="#3ddc84" fontSize="9">Android Deployment</text>
                      {/* Connection Vectors */}
                      <line x1="180" y1="140" x2="215" y2="155" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" />
                      <line x1="340" y1="140" x2="305" y2="155" stroke="#61dafb" strokeWidth="2" strokeDasharray="4 2" />
                      <line x1="230" y1="205" x2="180" y2="240" stroke="#FD6A02" strokeWidth="2" />
                      <line x1="290" y1="205" x2="340" y2="240" stroke="#FD6A02" strokeWidth="2" />
                      <text x="260" y="340" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Cross-Platform Flutter &amp; React Native Velocity</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area">
                <h2 className="main-heading">3. Cross-Platform Flutter &amp; React Native Engineering</h2>
                <h3 className="sub-heading">Single Codebase Velocity Delivering 40% Cost Savings and True Native Feel</h3>
                <p className="content-text">
                  <strong>Cross-Platform Mobile Engineering</strong> is the modern standard for fast-moving startups and high-growth businesses. By writing once in Flutter (Dart) or React Native (TypeScript), you launch simultaneous, feature-complete applications on both the Apple App Store and Google Play Store—drastically cutting time-to-market and maintenance overhead.
                </p>
                <p className="content-text">
                  At MaaJanki Web Tech, we don&apos;t build sluggish web wrappers. We write <strong>compiled, high-performance cross-platform software utilizing Flutter&apos;s Impeller rendering engine and React Native&apos;s New Architecture (Fabric &amp; TurboModules).</strong> Your users experience smooth 60fps animations, native haptic feedback, and instant screen transitions.
                </p>
                <p className="content-text">
                  This approach enables unified business logic, shared automated test suites, and seamless API integrations. When you need to roll out a new feature or promotional campaign, a single code update updates both mobile ecosystems immediately.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech as your cross-platform partner, <strong>your multi-platform mobile application</strong> scales efficiently, eliminates redundant developer payroll, and reaches 100% of your addressable smartphone market.
                </p>
                <span className="content-cta">
                  <strong>Launch simultaneously across both stores with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 – AI-Powered Mobile Applications */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }}>
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="ai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#021224" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#ai-bg)" rx="16" />
                      {/* AI Chat Mobile UI */}
                      <rect x="175" y="30" width="170" height="320" rx="26" fill="#000" stroke="#FD6A02" strokeWidth="2.5" />
                      <rect x="185" y="55" width="150" height="280" rx="18" fill="#0b0f19" />
                      {/* Top AI Bar */}
                      <circle cx="205" cy="74" r="9" fill="#FD6A02" />
                      <text x="205" y="78" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">AI</text>
                      <text x="245" y="78" fill="#ffffff" fontSize="10" fontWeight="bold">Copilot Active</text>
                      {/* User Bubble */}
                      <rect x="235" y="100" width="90" height="34" rx="8" fill="#FD6A02" />
                      <text x="245" y="115" fill="#fff" fontSize="8">Compare latest</text>
                      <text x="245" y="127" fill="#fff" fontSize="8">product reviews</text>
                      {/* AI Response Bubble */}
                      <rect x="195" y="145" width="120" height="60" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(253,106,2,0.3)" strokeWidth="1" />
                      <text x="205" y="162" fill="#38bdf8" fontSize="8" fontWeight="bold">⚡ Gemini 1.5 Flash:</text>
                      <text x="205" y="176" fill="#cbd5e1" fontSize="7.5">Analyzed 1,420 user</text>
                      <text x="205" y="188" fill="#cbd5e1" fontSize="7.5">ratings: 98% satisfaction</text>
                      <text x="205" y="199" fill="#22c55e" fontSize="7.5">Recommended Pick: Pro Plan</text>
                      {/* Voice Waveform Card */}
                      <rect x="195" y="220" width="130" height="42" rx="8" fill="rgba(253,106,2,0.12)" />
                      <text x="260" y="236" textAnchor="middle" fill="#FD6A02" fontSize="8" fontWeight="bold">Real-time Voice Agent</text>
                      {/* Audio wave bars */}
                      <line x1="220" y1="248" x2="220" y2="256" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      <line x1="228" y1="244" x2="228" y2="260" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      <line x1="236" y1="240" x2="236" y2="264" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      <line x1="244" y1="246" x2="244" y2="258" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      <line x1="252" y1="242" x2="252" y2="262" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      <line x1="260" y1="238" x2="260" y2="266" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      <line x1="268" y1="244" x2="268" y2="260" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      <line x1="276" y1="248" x2="276" y2="256" stroke="#FD6A02" strokeWidth="2" strokeLinecap="round" />
                      {/* Floating LLM Badge */}
                      <rect x="35" y="130" width="125" height="55" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(253,106,2,0.4)" strokeWidth="1" />
                      <text x="97" y="153" textAnchor="middle" fill="#FD6A02" fontSize="10" fontWeight="bold">OpenAI &amp; Gemini</text>
                      <text x="97" y="169" textAnchor="middle" fill="#cbd5e1" fontSize="9">Streaming Tokens</text>
                      <rect x="360" y="130" width="125" height="55" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
                      <text x="422" y="153" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Vision &amp; OCR</text>
                      <text x="422" y="169" textAnchor="middle" fill="#cbd5e1" fontSize="9">On-Device Camera AI</text>
                      <text x="260" y="365" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Next-Gen Intelligent AI Mobile Experiences</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }}>
                <h2 className="main-heading">4. AI-Powered Mobile Applications &amp; Copilots</h2>
                <h3 className="sub-heading">Embedding Generative AI, Voice Assistants, and Computer Vision On-Device</h3>
                <p className="content-text">
                  <strong>AI-Powered Mobile Applications</strong> represent the highest tier of modern product differentiation. Consumers and enterprise users no longer want static forms—they expect context-aware copilots, instant voice conversational agents, intelligent predictive recommendations, and real-time computer vision document scanning.
                </p>
                <p className="content-text">
                  As an emerging AI application engineering company, MaaJanki Web Tech integrates <strong>OpenAI GPT-4o, Google Gemini, Anthropic Claude, and local on-device models (CoreML &amp; TensorFlow Lite) directly into mobile applications.</strong> We implement token streaming, low-latency voice pipelines, and vector embeddings for semantic search.
                </p>
                <p className="content-text">
                  Whether building an automated medical diagnosis app, automated accounting receipt scanner, customer service AI chatbot, or personalized e-commerce shopping advisor, we ensure AI outputs are accurate, secure, and cost-effective via intelligent caching layers.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech, <strong>your custom mobile app</strong> becomes an intelligent market disruptor that delights users, automates repetitive manual workflows, and creates an impenetrable competitive moat.
                </p>
                <span className="content-cta">
                  <strong>Elevate your digital product into an AI leader with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 – Scalable Backend & Cloud Microservices */}
        <div style={{ width: "100%", background: "linear-gradient(135deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid">
              <div className="visual-area" style={{ justifyContent: "flex-end" }}>
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="back-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#021224" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#back-bg)" rx="16" />
                      {/* Cloud Microservices Diagram */}
                      <rect x="60" y="40" width="400" height="280" rx="14" fill="#0b0f19" stroke="#FD6A02" strokeWidth="2" />
                      {/* Top API Header */}
                      <rect x="60" y="40" width="400" height="36" rx="14" fill="#FD6A02" />
                      <text x="260" y="63" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Cloud Microservices &amp; Real-Time Socket Architecture</text>
                      {/* Nodes */}
                      <circle cx="130" cy="130" r="38" fill="rgba(104,160,99,0.15)" stroke="#68a063" strokeWidth="1.5" />
                      <text x="130" y="128" textAnchor="middle" fill="#68a063" fontSize="11" fontWeight="bold">Node.js</text>
                      <text x="130" y="142" textAnchor="middle" fill="#cbd5e1" fontSize="9">REST &amp; GraphQL</text>
                      <circle cx="390" cy="130" r="38" fill="rgba(77,179,61,0.15)" stroke="#4db33d" strokeWidth="1.5" />
                      <text x="390" y="128" textAnchor="middle" fill="#4db33d" fontSize="11" fontWeight="bold">MongoDB</text>
                      <text x="390" y="142" textAnchor="middle" fill="#cbd5e1" fontSize="9">Atlas Sharded</text>
                      <circle cx="130" cy="240" r="38" fill="rgba(245,130,32,0.15)" stroke="#f58220" strokeWidth="1.5" />
                      <text x="130" y="238" textAnchor="middle" fill="#f58220" fontSize="11" fontWeight="bold">Firebase</text>
                      <text x="130" y="252" textAnchor="middle" fill="#cbd5e1" fontSize="9">FCM / Auth</text>
                      <circle cx="390" cy="240" r="38" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="390" y="238" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">WebSockets</text>
                      <text x="390" y="252" textAnchor="middle" fill="#cbd5e1" fontSize="9">Real-time Sync</text>
                      {/* Center Gateway */}
                      <rect x="215" y="155" width="90" height="60" rx="10" fill="#FD6A02" />
                      <text x="260" y="180" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">API Gateway</text>
                      <text x="260" y="195" textAnchor="middle" fill="#fff5ee" fontSize="8">&lt; 50ms Latency</text>
                      {/* Connectors */}
                      <line x1="168" y1="135" x2="215" y2="170" stroke="#FD6A02" strokeWidth="1.5" />
                      <line x1="352" y1="135" x2="305" y2="170" stroke="#FD6A02" strokeWidth="1.5" />
                      <line x1="168" y1="235" x2="215" y2="200" stroke="#FD6A02" strokeWidth="1.5" />
                      <line x1="352" y1="235" x2="305" y2="200" stroke="#FD6A02" strokeWidth="1.5" />
                      <text x="260" y="350" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">Enterprise-Grade Resilient Cloud Infrastructure</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area">
                <h2 className="main-heading">5. Resilient Cloud APIs, WebSockets &amp; Database Architecture</h2>
                <h3 className="sub-heading">Low-Latency Microservices Built for Millions of Concurrent Mobile Sessions</h3>
                <p className="content-text">
                  <strong>Resilient Cloud APIs &amp; Database Architectures</strong> form the invisible backbone of any successful mobile application. Even the most gorgeous front-end design will fail if server responses take 3 seconds, real-time push alerts drop, or customer transaction databases bottleneck during peak festive sales.
                </p>
                <p className="content-text">
                  At MaaJanki Web Tech, we engineer <strong>high-concurrency RESTful and GraphQL APIs using Node.js, Express, Python FastAPI, and MongoDB Atlas.</strong> We configure Redis in-memory caching to achieve sub-50ms query responses and deploy WebSocket pipelines for instant chat, live order tracking, and dynamic auctions.
                </p>
                <p className="content-text">
                  Our architecture incorporates automated multi-region failovers, Google Cloud &amp; AWS auto-scaling, automated encrypted database backups, and rate-limiting safeguards against DDoS attacks and brute-force authentication exploitation.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech powering your backend, <strong>your mobile application infrastructure</strong> scales effortlessly from 1,000 to 1,000,000+ daily active users without downtime, data loss, or server crashes.
                </p>
                <span className="content-cta">
                  <strong>Build on unshakeable backend infrastructure with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 – App Store Optimization & Full Launch */}
        <div style={{ width: "100%", background: "linear-gradient(315deg, #042544 0%, #FD6A02 100%)" }}>
          <div className="showcase-container">
            <div className="showcase-grid" style={{ direction: "rtl" }}>
              <div className="visual-area" style={{ justifyContent: "flex-start" }}>
                <div className="image-container">
                  <div className="main-image wd-svg-wrap">
                    <svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <linearGradient id="aso-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#042544" />
                          <stop offset="100%" stopColor="#021224" />
                        </linearGradient>
                      </defs>
                      <rect width="520" height="380" fill="url(#aso-bg)" rx="16" />
                      {/* Store Ranking Badge */}
                      <circle cx="260" cy="140" r="75" fill="none" stroke="#042544" strokeWidth="14" />
                      <circle cx="260" cy="140" r="75" fill="none" stroke="#22c55e" strokeWidth="14" strokeDasharray="360 480" strokeLinecap="round" transform="rotate(-90 260 140)" />
                      <text x="260" y="132" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="bold">#1 Rank</text>
                      <text x="260" y="154" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">ASO Score 99/100</text>
                      {/* Metric Badges */}
                      <rect x="50" y="245" width="125" height="58" rx="10" fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="1.5" />
                      <text x="112" y="268" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Zero Rejections</text>
                      <text x="112" y="286" textAnchor="middle" fill="#cbd5e1" fontSize="9">Guaranteed Approval</text>
                      <rect x="195" y="245" width="130" height="58" rx="10" fill="rgba(253,106,2,0.12)" stroke="#FD6A02" strokeWidth="1.5" />
                      <text x="260" y="268" textAnchor="middle" fill="#FD6A02" fontSize="12" fontWeight="bold">99.9% Crash-Free</text>
                      <text x="260" y="286" textAnchor="middle" fill="#cbd5e1" fontSize="9">Sentry &amp; Crashlytics</text>
                      <rect x="345" y="245" width="125" height="58" rx="10" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="407" y="268" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">DPDP &amp; GDPR</text>
                      <text x="407" y="286" textAnchor="middle" fill="#cbd5e1" fontSize="9">Full Privacy Safety</text>
                      <text x="260" y="345" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">End-to-End App Store Optimization &amp; Deployment</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-area" style={{ direction: "ltr" }}>
                <h2 className="main-heading">6. App Store Optimization (ASO), Security &amp; Full Launch</h2>
                <h3 className="sub-heading">100% Guaranteed Approval on Apple App Store &amp; Google Play Store</h3>
                <p className="content-text">
                  <strong>App Store Optimization &amp; Deployment</strong> turns technical code into a commercially thriving business product. Releasing an app is not merely uploading an APK or IPA file—it requires strict compliance with Apple Review Guidelines, Google Play Console policies, cryptographic code signing, and App Store Optimization (ASO) for organic search visibility.
                </p>
                <p className="content-text">
                  MaaJanki Web Tech manages <strong>100% of the submission lifecycle.</strong> We craft high-converting App Store screenshots, promotional videos, localized keyword descriptions, privacy disclosure documents, and DPDP / GDPR compliant data safety declarations.
                </p>
                <p className="content-text">
                  Post-launch, our automated CI/CD pipelines (GitHub Actions, Fastlane) enable rapid bi-weekly updates, instant bug patches, and OS compatibility updates when new iOS and Android versions debut. We integrate Sentry and Firebase Crashlytics to monitor performance in real time.
                </p>
                <p className="content-text">
                  With MaaJanki Web Tech handling your launch, <strong>your mobile application</strong> secures fast-track approval, attracts steady organic installs, and maintains top category rankings from Day One.
                </p>
                <span className="content-cta">
                  <strong>Achieve top rankings and frictionless approvals with MaaJanki Web Tech.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="webdev-section">
        <h2 className="webdev-title">
          Our End-to-End Mobile App Development Solutions
        </h2>
        <p className="webdev-subtitle">
          We combine cutting-edge mobile stacks with human-centered UI/UX design to build
          scalable, conversion-focused applications for modern businesses.
        </p>

        <div className="webdev-grid">
          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="webdev-heading">Custom Mobile Apps</h3>
            <p>
              Tailor-made smartphone applications engineered from ground up
              to match your exact business workflow and monetization model.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fab fa-apple"></i>
            </div>
            <h3 className="webdev-heading">Native iOS Development</h3>
            <p>
              High-octane Swift and SwiftUI applications optimized for iPhone,
              iPad, Apple Watch, and Apple Pay biometric security.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fab fa-android"></i>
            </div>
            <h3 className="webdev-heading">Native Android Apps</h3>
            <p>
              Kotlin and Jetpack Compose architectures designed for smooth
              performance across 24,000+ Android device models.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3 className="webdev-heading">Flutter Development</h3>
            <p>
              Single-codebase cross-platform applications delivering 40% reduced
              time-to-market with 60fps native graphics.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="webdev-heading">React Native Apps</h3>
            <p>
              JavaScript-powered mobile experiences with Fabric architecture,
              seamless code reusability, and instant OTA updates.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="webdev-heading">AI Mobile Integration</h3>
            <p>
              OpenAI, Gemini, voice agents, predictive intelligence, and
              camera computer vision embedded directly into your mobile app.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="webdev-heading">Cloud APIs &amp; Backends</h3>
            <p>
              High-concurrency Node.js, Express, MongoDB, and Firebase
              microservices built for sub-50ms real-time transactions.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3 className="webdev-heading">Mobile UI/UX Design</h3>
            <p>
              Interactive Figma wireframing, clickable prototypes, and
              accessible thumb-friendly design systems engineered to convert.
            </p>
          </div>

          <div className="service-box">
            <div className="webdev-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="webdev-heading">ASO &amp; Store Publishing</h3>
            <p>
              Guaranteed Apple App Store &amp; Google Play Store compliance,
              keyword ranking optimization, and 24/7 SLA maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="webdev-tools-section">
        <div className="tools-heading-section">
          <h2 className="tools-heading-title">
            Mobile App Tech Stack We Master
          </h2>
        </div>

        <div className="tools-section">
          {[
            { src: "/images/icons/react.png", label: "React Native" },
            { src: "/images/icons/code.png", label: "Flutter" },
            { src: "/images/icons/visual-studio-code-2019.png", label: "Swift" },
            { src: "/images/icons/robot-2.png", label: "Kotlin" },
            { src: "/images/icons/nextjs.png", label: "Next.js PWA" },
            { src: "/images/icons/nodejs.png", label: "Node.js" },
            { src: "/images/icons/express.png", label: "Express.js" },
            { src: "/images/icons/mongodb.png", label: "MongoDB" },
            { src: "/images/icons/firebase.png", label: "Firebase" },
            { src: "/images/icons/git.png", label: "Git" },
            { src: "/images/icons/github.png", label: "GitHub" },
            { src: "/images/icons/figma.png", label: "Figma" },
            { src: "/images/icons/chatgpt.png", label: "OpenAI AI" },
            { src: "/images/icons/google-logo.png", label: "Google Play" },
            { src: "/images/icons/vercel.png", label: "Vercel" },
            { src: "/images/icons/netlify.png", label: "Netlify" },
          ].map((tool, index) => (
            <div key={index} className="tool-card">
              <Image
                src={tool.src}
                alt={`${tool.label} mobile development tool`}
                loading="lazy"
                width={150}
                height={50}
              />
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure Section - Vibrant Brand Dual Color Gradient */}
      <section
        className="graphic-landing-section"
        style={{
          background: "radial-gradient(circle at 10% 20%, rgba(253, 106, 2, 0.25) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(4, 37, 68, 0.4) 0%, transparent 50%), linear-gradient(135deg, #042544 0%, #150902 45%, #FD6A02 100%)",
          padding: "90px 20px",
          position: "relative",
          overflow: "hidden",
          borderTop: "3px solid #FD6A02",
          borderBottom: "3px solid #042544",
        }}
      >
        <div className="graphic-container" style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "40px" }}>
          {/* Left Column: Heading, Subtext & Brochure Download Card */}
          <div className="graphic-left" style={{ flex: "1 1 500px" }}>
            <h2 className="br-graphic-heading" style={{ color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif', fontSize: "clamp(2rem, 3.5vw, 2.5rem)", marginBottom: "15px", lineHeight: "1.2" }}>
              Download Our Complete Mobile App Development Guide
            </h2>
            <p className="graphic-subtext" style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
              Partner with MaaJanki Web Tech to build an enterprise-grade, high-performance mobile application. We design, code, and deploy custom apps that drive verified business growth.
            </p>

            <div className="graphic-brochure-box" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "18px", padding: "30px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)" }}>
              <h3 className="graphic-brochure-title" style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: "700", marginBottom: "10px" }}>
                Get Our Mobile App Architecture Guide
              </h3>
              <p className="graphic-brochure-desc" style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
                Explore our mobile coding frameworks, cloud architectures, timeline estimates, and transparent pricing packages.
              </p>

              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#FD6A02", fontSize: "1rem" }}></i> 100% Documented Source Code Ownership
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#FD6A02", fontSize: "1rem" }}></i> iOS &amp; Android Dual Store Deployment
              </div>
              <div className="graphic-feature" style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-check-circle" style={{ color: "#FD6A02", fontSize: "1rem" }}></i> 30 to 90 Days SLA Post-Launch Warranty
              </div>

              <button
                className="graphic-brochure-btn"
                onClick={openBrochurePopup}
                style={{ background: "linear-gradient(135deg, #FD6A02, #FF8533)", color: "#ffffff", border: "none", borderRadius: "30px", padding: "12px 28px", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 8px 20px rgba(253, 106, 2, 0.4)", transition: "all 0.3s ease" }}
              >
                ⬇️ Download App Guide
              </button>

              {isPopupOpen && (
                <div
                  className="brochure-popup-overlay"
                  onClick={closeBrochurePopup}
                >
                  <div
                    className="brochure-popup"
                    onClick={(e) => e.stopPropagation()}
                    style={{ background: "#042544", border: "2px solid #FD6A02" }}
                  >
                    <span
                      className="brochure-close"
                      onClick={closeBrochurePopup}
                    >
                      &times;
                    </span>
                    <form
                      action="https://getform.io/f/bvrmgenb"
                      method="POST"
                      id="brochure-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target;
                        const formData = new FormData(form);
                        fetch("/api/leads", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            name: formData.get("name") || "",
                            email: formData.get("email") || "",
                            phone: formData.get("phone") || "",
                            service: "Brochure Download - Mobile App Development",
                            source: "brochure-modal",
                            url: typeof window !== "undefined" ? window.location.href : "",
                          }),
                        }).catch(() => {});

                        fetch(form.action, {
                          method: "POST",
                          body: formData,
                          headers: { Accept: "application/json" },
                        }).catch(() => {});

                        alert("Thank you! Your mobile development guide is downloading.");
                        setIsPopupOpen(false);
                        window.open(
                          "/brochures/MaaJanki-Web-Tech-Branding-Brochure.pdf",
                          "_blank"
                        );
                      }}
                    >
                      <h3 className="brochure-title" style={{ color: "#ffffff" }}>
                        Download Mobile Guide
                      </h3>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        required
                      />
                      <button
                        type="submit"
                        className="brochure-submit-btn"
                        style={{ background: "#FD6A02", color: "#ffffff", borderRadius: "25px" }}
                      >
                        Download Now
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 2-Column Grid of 8 Service Cards */}
          <div className="graphic-right" style={{ flex: "1 1 550px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {[
                { icon: "fas fa-mobile-alt", title: "iOS & Android Native Code" },
                { icon: "fas fa-layer-group", title: "Flutter Single Codebase" },
                { icon: "fas fa-robot", title: "AI & Voice Copilots" },
                { icon: "fas fa-credit-card", title: "Secure Payment Gateway" },
                { icon: "fas fa-shield-alt", title: "Biometric Data Security" },
                { icon: "fas fa-bell", title: "Push Notification Systems" },
                { icon: "fas fa-rocket", title: "Store Launch & ASO" },
                { icon: "fas fa-heartbeat", title: "99.9% Crash-Free SLA" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "14px",
                    padding: "24px 16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    minHeight: "115px",
                  }}
                  className="branding-brochure-service-card"
                >
                  <i className={item.icon} style={{ fontSize: "1.8rem", color: "#FD6A02" }}></i>
                  <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "13.5px", lineHeight: "1.3" }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="jobready-workflow">
        <h3 className="jobready-heading-small">Structured Execution</h3>
        <h2 className="jobready-heading-main">Our Mobile App Development Workflow</h2>

        <div className="jobready-steps">
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-comments"></i>
            </div>
            <p>1. Consultation</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-sitemap"></i>
            </div>
            <p>2. Wireframing</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-paint-brush"></i>
            </div>
            <p>3. UI/UX Design</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-code"></i>
            </div>
            <p>4. Clean Coding</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <p>5. Speed &amp; QA</p>
          </div>
          <div className="jobready-step">
            <div className="jobready-circle">
              <i className="fas fa-rocket"></i>
            </div>
            <p>6. Store Launch</p>
          </div>
        </div>
      </section>



      {/* AI Search Optimization Section (GEO) */}
      <section
        className="service-gradient-black-section"
        style={{
          background: "linear-gradient(135deg, #042544 0%, #021224 100%)",
          padding: "85px 20px",
          position: "relative",
          overflow: "hidden",
          borderTop: "3px solid #FD6A02",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "2px solid #FD6A02",
              borderRadius: "24px",
              padding: "50px 40px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#FD6A02",
                  color: "#ffffff",
                  padding: "8px 24px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  boxShadow: "0 4px 15px rgba(253, 106, 2, 0.4)",
                }}
              >
                AI Search Optimization (GEO)
              </span>
              <h2
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#ffffff", fontWeight: "800", fontFamily: '"Outfit", sans-serif', margin: "0 0 15px" }}
              >
                Quick Answers: Mobile App Development
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
                Whether you&apos;re looking for fast facts or optimizing for AI search tools like ChatGPT and Gemini, here is a clear breakdown of our mobile app development services.
              </p>
            </div>

            <div className="geo-questions-grid">
              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  What is Mobile App Development?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Mobile app development is the practice of designing, coding, testing, and deploying mobile software for iOS and Android devices using native (Swift, Kotlin) or cross-platform (Flutter, React Native) technologies.
                </p>
              </div>

              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Why choose Flutter or React Native?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Cross-platform frameworks allow a single codebase to compile into native apps for both iOS and Android, saving up to 40% in development costs while delivering 60fps native performance.
                </p>
              </div>

              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  How do you integrate AI into mobile apps?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  We integrate OpenAI, Gemini, and on-device CoreML/TensorFlow Lite models via secure REST/WebSocket streaming for real-time voice, vision, automated OCR, and intelligent conversational copilots.
                </p>
              </div>

              <div
                style={{
                  background: "#042544",
                  border: "1px solid rgba(253, 106, 2, 0.3)",
                  padding: "28px",
                  borderRadius: "18px",
                }}
              >
                <h4 style={{ color: "#FD6A02", fontWeight: "800", fontSize: "1.15rem", marginBottom: "12px" }}>
                  Do you guarantee App Store &amp; Play Store approval?
                </h4>
                <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>
                  Yes. We handle 100% of the submission process, certificate signing, screenshots, privacy declarations, and developer policy reviews to ensure smooth approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions About Mobile App Development</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "Which mobile development technologies and frameworks do you specialize in?",
              answer: "We specialize in Flutter (Dart), React Native, Swift (iOS native), Kotlin (Android native), Next.js Progressive Web Apps (PWA), Node.js, Express, MongoDB Atlas, Firebase, and cloud microservices."
            },
            {
              id: "faq2",
              question: "Will my app be published on both Apple App Store and Google Play Store?",
              answer: "Yes. We handle end-to-end publishing on both platforms, including developer account configuration, signing certificates, privacy disclosures, screenshot generation, and store approval."
            },
            {
              id: "faq3",
              question: "How long does it take to develop a custom mobile application?",
              answer: "A standard MVP mobile app typically takes 4 to 8 weeks from wireframe to store launch. Complex business or enterprise applications with multi-role dashboards and AI copilots range from 10 to 16 weeks."
            },
            {
              id: "faq4",
              question: "How much does mobile app development cost in India?",
              answer: "Mobile app development pricing is 100% customized based on your unique project scope, supported operating systems (iOS, Android, or cross-platform Flutter), backend database integrations, and custom AI feature requirements. We provide a milestone-based proposal after an initial technical discovery consultation."
            },
            {
              id: "faq5",
              question: "Do you build AI-powered mobile apps?",
              answer: "Yes. We integrate OpenAI, Gemini, voice agents, camera OCR, and predictive algorithms directly into mobile apps with secure token streaming and on-device machine learning."
            },
            {
              id: "faq6",
              question: "Will I own 100% of the source code and intellectual property?",
              answer: "Yes. Upon project milestone completion, we hand over full GitHub repository access, documentation, and 100% intellectual property ownership to you with zero hidden licensing fees."
            },
            {
              id: "faq7",
              question: "Can you update or redesign our existing mobile application?",
              answer: "Yes. We perform code audits, refactor legacy codebases to Flutter or React Native, update deprecated SDKs, improve UI/UX aesthetics, and optimize app load performance."
            },
            {
              id: "faq8",
              question: "Do you integrate Indian and international payment gateways?",
              answer: "Yes. We integrate Razorpay, PhonePe, Paytm, Cashfree, Stripe, PayPal, Apple Pay, and Google Pay with compliant end-to-end encryption."
            },
            {
              id: "faq9",
              question: "What post-launch support and warranty do you provide?",
              answer: "Every app includes 30 to 90 days of free post-launch support covering bug fixes, OS compatibility updates, performance tuning, and server monitoring. Optional annual AMC plans are available."
            },
            {
              id: "faq10",
              question: "How do you ensure user data security and privacy compliance?",
              answer: "We enforce HTTPS/TLS 1.3 encryption, biometric authentication (Face ID / Fingerprint), tokenized session tokens, and compliance with DPDP India and GDPR guidelines."
            },
            {
              id: "faq11",
              question: "What is App Store Optimization (ASO) and do you provide it?",
              answer: "ASO is search engine optimization for mobile app stores. We write keyword-rich titles, descriptions, and tag structures to ensure your app ranks high for relevant commercial searches."
            },
            {
              id: "faq12",
              question: "Do you develop web admin dashboards to manage app content?",
              answer: "Yes. Most mobile apps include a responsive web admin dashboard (built on Next.js/React) to manage users, track orders, send push notifications, and monitor live analytics."
            },
            {
              id: "faq13",
              question: "Will the app work when the user has poor or no internet connection?",
              answer: "Yes. We design apps with offline-first caching via SQLite/Room or Hive, allowing core features to function offline and auto-sync when connectivity returns."
            },
            {
              id: "faq14",
              question: "How do we start a mobile app project with MaaJanki Web Tech?",
              answer: "You can click 'Get a Free Consultation' or email info@maajankiwebtech.com. Our senior technical leads will evaluate your requirements and provide an architecture roadmap within 24 hours."
            },
            {
              id: "faq15",
              question: "Are there any hidden recurring platform fees?",
              answer: "No. MaaJanki Web Tech operates on a clear, milestone-based one-time development model with zero platform commission fees."
            }
          ].map((faq, index) => (
            <div className="faq-item" key={faq.id}>
              <input type="checkbox" id={faq.id} className="faq-toggle" />
              <label htmlFor={faq.id} className="faq-question">
                <span className="faq-number">{index + 1}</span>
                <span className="faq-question-text">{faq.question}</span>
                <svg
                  className="faq-arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </label>
              <div className="faq-content">
                <div className="faq-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Faq Section End */}
    </>
  );
};

export default MobileAppDevelopment;
