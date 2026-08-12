'use client';

import React, { useState, useEffect, useRef } from "react";

import '@/app/styles/PrivacyPolicy.css';
import {
  Shield,
  Database,
  FileText,
  Activity,
  Lock,
  Share2,
  User,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  Clock
} from "lucide-react";

const sections = [
  "collect",
  "usage",
  "tracking",
  "security",
  "retention",
  "assets",
  "sharing",
  "rights",
  "updates"
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -50% 0px",
      threshold: 0.15,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    if (!activeSection || !mobileNavRef.current) return;
    const activeTab = mobileNavRef.current.querySelector(`.mobile-tab-link[href="#${activeSection}"]`);
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  return (
    <>
      

      <div className="policy-page-container">
        {/* Header */}
        <div className="policy-header" data-aos="fade-down">
          <div className="container">
            <h1>Privacy Policy</h1>
            {/* FIX 1: Corrected year from 2025 → 2026 */}
            <p className="last-updated">Last Updated: July 10, 2026</p>
          </div>
        </div>

        {/* 1. Mobile Horizontal Scroll Navigation */}
        <nav className="mobile-tab-navigation" ref={mobileNavRef}>
          <a href="#collect" className={`mobile-tab-link ${activeSection === "collect" ? "active" : ""}`}><Database size={14} /> Data</a>
          <a href="#usage" className={`mobile-tab-link ${activeSection === "usage" ? "active" : ""}`}><FileText size={14} /> Usage</a>
          <a href="#tracking" className={`mobile-tab-link ${activeSection === "tracking" ? "active" : ""}`}><Activity size={14} /> Pixels</a>
          <a href="#security" className={`mobile-tab-link ${activeSection === "security" ? "active" : ""}`}><Lock size={14} /> Security</a>
          {/* FIX 5 (new): Added Retention tab */}
          <a href="#retention" className={`mobile-tab-link ${activeSection === "retention" ? "active" : ""}`}><Clock size={14} /> Retention</a>
          {/* FIX 6: Changed "Assets" label to "Digital Assets" for consistency */}
          <a href="#assets" className={`mobile-tab-link ${activeSection === "assets" ? "active" : ""}`}><FileText size={14} /> Digital Assets</a>
          <a href="#sharing" className={`mobile-tab-link ${activeSection === "sharing" ? "active" : ""}`}><Share2 size={14} /> Sharing</a>
          <a href="#rights" className={`mobile-tab-link ${activeSection === "rights" ? "active" : ""}`}><User size={14} /> Rights</a>
          <a href="#updates" className={`mobile-tab-link ${activeSection === "updates" ? "active" : ""}`}><RefreshCw size={14} /> Updates</a>
        </nav>

        {/* Layout Grid */}
        <div className="policy-layout-grid">
          {/* 2. Desktop Sticky Sidebar Card */}
          <aside className="policy-sidebar" data-aos="fade-right">
            <h4><Shield size={18} /> Quick Links</h4>
            <ul className="policy-sidebar-links">
              <li>
                <a href="#collect" className={activeSection === "collect" ? "active" : ""}><Database size={16} /> 1. Data Collected</a>
              </li>
              <li>
                <a href="#usage" className={activeSection === "usage" ? "active" : ""}><FileText size={16} /> 2. Data Usage</a>
              </li>
              <li>
                <a href="#tracking" className={activeSection === "tracking" ? "active" : ""}><Activity size={16} /> 3. Pixels & Cookies</a>
              </li>
              <li>
                <a href="#security" className={activeSection === "security" ? "active" : ""}><Lock size={16} /> 4. Security Measures</a>
              </li>
              {/* FIX 5 (new): Added Data Retention to sidebar */}
              <li>
                <a href="#retention" className={activeSection === "retention" ? "active" : ""}><Clock size={16} /> 5. Data Retention</a>
              </li>
              {/* FIX 6: Updated sidebar label to "Digital Assets" to match section heading */}
              <li>
                <a href="#assets" className={activeSection === "assets" ? "active" : ""}><FileText size={16} /> 6. Digital Assets</a>
              </li>
              <li>
                <a href="#sharing" className={activeSection === "sharing" ? "active" : ""}><Share2 size={16} /> 7. Third Parties</a>
              </li>
              <li>
                <a href="#rights" className={activeSection === "rights" ? "active" : ""}><User size={16} /> 8. Client Rights</a>
              </li>
              <li>
                <a href="#updates" className={activeSection === "updates" ? "active" : ""}><RefreshCw size={16} /> 9. Policy Updates</a>
              </li>
            </ul>
          </aside>

          {/* Right Content Area */}
          <main className="policy-content-area" data-aos="fade-up">
            {/* Intro */}
            <section className="policy-section-card">
              <h2>Commitment to Your Privacy</h2>
              <p>
                {/* FIX 7: Removed "premier" — self-promotional language in legal docs */}
                <strong>MaaJanki Web Tech</strong> ("Company", "We", "Our", or "Us") is a website development and digital marketing agency based in Bagaha, West Champaran, Bihar, India. We build responsive web applications, design brand identities, and run organic (SEO, SMO) and paid performance marketing campaigns
                {/* FIX 2: Replaced "globally" with "across India" to match actual client base */}
                {" "}across India.
              </p>
              <p>
                This Privacy Policy describes how we collect, store, secure, and handle personal data, client resources, access credentials, and tracking information when you visit <strong>https://maajankiwebtech.com/</strong> or hire our agency for professional web development and digital marketing services.
              </p>
              <div className="policy-highlight-callout">
                <p>
                  By contacting us, requesting a website audit, submitting a contact form, or signing an agency agreement, you consent to our practices as detailed in this policy.
                </p>
              </div>
            </section>

            {/* 1 */}
            <section id="collect" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><Database size={20} /></span>
                1. Information We Collect
              </h2>
              <p>
                To deliver custom websites and perform strategic SEO or marketing audits, we collect both voluntarily provided personal details and automated device data:
              </p>
              <h3>Client Provided Information</h3>
              <ul>
                <li>Contact details: Name, Email address, Phone number, and Business name.</li>
                <li>Inquiry details: Website URLs, current marketing budgets, and message texts.</li>
                <li>Project credentials: FTP/cPanel access, WordPress/CMS log-in details, and Domain registrar access (stored securely only for deployment).</li>
                <li>Billing data: Company address, GST number (where applicable), and transaction records.</li>
              </ul>
              <h3>Automated & Technical Data</h3>
              <ul>
                <li>IP Addresses, browser configurations, and operating system profiles.</li>
                <li>Navigational records: time spent on our agency pages, clicked links, and conversion paths.</li>
              </ul>
            </section>

            {/* 2 */}
            <section id="usage" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><FileText size={20} /></span>
                2. How We Use Your Data
              </h2>
              <p>
                We process your details to deliver high-converting web assets and run data-driven marketing campaigns, specifically:
              </p>
              <ul>
                <li>Developing, launching, and maintaining custom website applications.</li>
                <li>Running SEO site optimization, keyword mapping, and content audits.</li>
                <li>Setting up, optimizing, and reporting on Google Ads, Meta Ads, and PPC campaigns.</li>
                <li>Communicating project milestones, draft designs, and marketing reports.</li>
                <li>Generating proposals, processing invoices, and maintaining financial records.</li>
                <li>Improving our own website's user experience and search engine visibility.</li>
              </ul>
              <div className="policy-highlight-callout">
                <p>
                  We strictly hold a zero-selling policy. MaaJanki Web Tech will never sell, rent, or lease your personal or business details to third-party list brokers.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section id="tracking" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><Activity size={20} /></span>
                3. Cookies & Conversion Pixels
              </h2>
              <p>
                As a marketing agency, we use analytical tools and remarketing pixels to track our site performance and target campaigns:
              </p>
              <ul>
                <li><strong>Google Analytics (GA4):</strong> Monitors session data and user behavior on our portal.</li>
                <li><strong>Meta Pixel & Google Ads Tags:</strong> Evaluates the efficacy of social media and search campaigns and enables remarketing.</li>
                <li><strong>Essential Cookies:</strong> Saves preferences like form states or custom configurations.</li>
              </ul>
              {/* FIX 3: Added cookie consent language — non-essential cookies require prior consent */}
              <div className="policy-highlight-callout">
                <p>
                  We obtain your consent before placing non-essential cookies (such as analytics and remarketing pixels) on your device. You may accept, decline, or customise cookie preferences via the cookie consent banner shown on your first visit to our website.
                </p>
              </div>
              <p>
                You can also block or delete cookies at any time through your browser settings. Please note that disabling essential cookies may affect the functionality of interactive features on our portal, such as our free website audit forms.
              </p>
            </section>

            {/* 4 */}
            <section id="security" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><Lock size={20} /></span>
                4. Data Security & Safeguards
              </h2>
              <p>
                We handle sensitive credentials (including CMS accesses, database credentials, and server panels) with the highest care. Our security practices include:
              </p>
              <ul>
                <li>SSL encryption across our website to safeguard form submissions and audits.</li>
                <li>Enforced two-factor authentication (2FA) on all third-party hosting, registrar, and cloud systems.</li>
                <li>Strict internal access controls: only designated developers and account managers have access to project panels.</li>
                <li>Prompt deletion of access passwords after project deployment or handover, unless maintenance services are active.</li>
              </ul>
            </section>

            {/* 5 — FIX 5: NEW Data Retention section added */}
            <section id="retention" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><Clock size={20} /></span>
                5. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Our specific retention periods are as follows:
              </p>
              <ul>
                <li><strong>Inquiry & Contact Data</strong> (names, emails, phone numbers submitted via forms): Retained for up to <strong>2 years</strong> from the date of last contact, after which they are securely deleted.</li>
                <li><strong>Project & Billing Records</strong> (invoices, GST records, transaction history): Retained for <strong>7 years</strong> in compliance with Indian accounting and taxation regulations.</li>
                <li><strong>Project Credentials</strong> (FTP, CMS, hosting logins): Deleted promptly upon project handover or termination of services, unless an active maintenance agreement is in place.</li>
                <li><strong>Source Code & Digital Asset Backups:</strong> Retained for <strong>90 days</strong> after project delivery, then permanently deleted from our servers.</li>
                <li><strong>Analytics & Cookie Data:</strong> Governed by the data retention settings of third-party tools (e.g., Google Analytics retains data for up to 14 months by default).</li>
              </ul>
              <p>
                You may request early deletion of your personal data at any time by contacting us at <strong>info@maajankiwebtech.com</strong>, subject to our legal obligations to retain certain records.
              </p>
            </section>

            {/* 6 — was section 5 */}
            <section id="assets" className="policy-section-card">
              {/* FIX 6: Section heading kept as "Project Code & Digital Assets" — sidebar now also says "Digital Assets" to match */}
              <h2>
                <span className="policy-card-icon"><FileText size={20} /></span>
                6. Project Code & Digital Assets
              </h2>
              <p>
                We recognise that your website code, database backups, and creative brand graphics are valuable business assets:
              </p>
              <ul>
                <li>All website source codes, graphics, content, and databases are stored on secured development servers during creation.</li>
                <li>We maintain local code backups for 90 days after delivery to protect against data loss in case of hosting failures on the client side.</li>
                <li>We do not disclose proprietary client database structures, code scripts, or customised marketing funnels to your competitors.</li>
              </ul>
            </section>

            {/* 7 — was section 6 */}
            <section id="sharing" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><Share2 size={20} /></span>
                7. Third-Party Integrations
              </h2>
              <p>
                We share client details only with service providers required to build, deploy, or run your web projects:
              </p>
              <ul>
                <li>Cloud hosting nodes, domain registrars, and SMTP mail servers.</li>
                <li>Payment gateways (like Razorpay) for invoice settlement.</li>
                <li>Certified marketing tools (such as Google Ads, Google Search Console, or CRM platforms) to manage campaigns.</li>
              </ul>
              <p>
                These third parties are bound by agreements to maintain data confidentiality and are prohibited from utilising client information for unauthorised operations.
              </p>
            </section>

            {/* 8 — was section 7 */}
            <section id="rights" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><User size={20} /></span>
                8. Your Privacy Rights & Options
              </h2>
              <p>
                Whether you are a client in Bihar, India, or a partner from any other state, you retain full ownership of your data. You may request to:
              </p>
              <ul>
                <li>Request access to the personal data we store about you.</li>
                <li>Update, correct, or change outdated information.</li>
                <li>Instruct us to delete project access logins or remove your data from our email newsletter lists.</li>
                <li>Withdraw consent for tracking pixels and analytics logs.</li>
              </ul>
              <p>
                To make any request, contact our security officer at <strong>info@maajankiwebtech.com</strong>.
              </p>
              {/* FIX 4: Added Grievance Officer section as required under Indian IT Act 2000 & IT Rules 2011 */}
              <div className="policy-highlight-callout">
                <h3 style={{ marginTop: 0 }}>Grievance Officer</h3>
                <p>
                  In accordance with the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the details of the Grievance Officer are provided below:
                </p>
                <p>
                  <strong>Name:</strong> Ashish Kumar<br />
                  <strong>Designation:</strong> Founder & Grievance Officer, MaaJanki Web Tech<br />
                  <strong>Email:</strong> <a href="mailto:info@maajankiwebtech.com">info@maajankiwebtech.com</a><br />
                  <strong>Phone:</strong> <a href="tel:+919006543913">+91 9006543913</a><br />
                  <strong>Address:</strong> Brajmala Complex, First Floor, Near Cinema House, Building of UCO Bank, Bagaha Bazar, West Champaran, Bihar – 845101
                </p>
                <p>
                  Any grievance or complaint regarding the processing of personal information must be raised in writing. We will acknowledge your complaint within <strong>24 hours</strong> and endeavour to resolve it within <strong>30 days</strong> of receipt.
                </p>
              </div>
            </section>

            {/* 9 — was section 8 */}
            <section id="updates" className="policy-section-card">
              <h2>
                <span className="policy-card-icon"><RefreshCw size={20} /></span>
                9. Policy Updates
              </h2>
              <p>
                We may revise this Privacy Policy to reflect changing laws, tool updates, or agency service structures. The latest version will always be published on this page with the updated "Last Updated" date. Continued usage of our website or hiring of our agency implies consent to the revised terms.
              </p>
            </section>

            {/* Contact Details */}
            <section className="policy-section-card">
              <h2><HelpCircle size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Privacy Assistance & Queries</h2>
              <p>
                For questions regarding our privacy rules, handling of website codes, or marketing data policies, contact us at:
              </p>
              <div className="policy-contact-details">
                <div className="policy-contact-card">
                  <span className="contact-icon"><Mail size={28} /></span>
                  <h3>Email</h3>
                  <p><a href="mailto:info@maajankiwebtech.com">info@maajankiwebtech.com</a></p>
                </div>
                <div className="policy-contact-card">
                  <span className="contact-icon"><Phone size={28} /></span>
                  <h3>Phone</h3>
                  <p><a href="tel:+919006543913">+91 9006543913</a></p>
                </div>
                <div className="policy-contact-card">
                  <span className="contact-icon"><MapPin size={28} /></span>
                  <h3>Bagaha Office</h3>
                  <p>
                    Brajmala Complex, First Floor,<br />
                    Near Cinema House, Building of UCO Bank,<br />
                    Bagaha Bazar, West Champaran, Bihar - 845101
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;