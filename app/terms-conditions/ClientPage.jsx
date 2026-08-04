'use client';

import React, { useState, useEffect, useRef } from "react";

import '@/app/styles/Terms.css';
import {
  Compass,
  CreditCard,
  Users,
  Award,
  Server,
  Activity,
  Scale,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  FileText,
  XCircle,
  ShieldAlert
} from "lucide-react";

// FIX: Added "termination" and "forcemajeure" to sections array
const sections = [
  "proposals",
  "payments",
  "cooperation",
  "copyright",
  "hosting",
  "rankings",
  "termination",
  "forcemajeure",
  "liability",
  "governing"
];

const Terms = () => {
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

      <div className="terms-page-container">
        {/* Header */}
        <div className="terms-header" data-aos="fade-down">
          <div className="container">
            <h1>Terms & Conditions</h1>
            {/* FIX 1: Added "Last Updated" effective date */}
            <p className="last-updated">Last Updated: July 10, 2026</p>
            <p>
              These Terms & Conditions govern client project agreements, web development handovers, and marketing campaigns executed by MaaJanki Web Tech.
            </p>
          </div>
        </div>

        {/* Mobile Horizontal Scroll Navigation */}
        <nav className="mobile-tab-navigation" ref={mobileNavRef}>
          <a href="#proposals" className={`mobile-tab-link ${activeSection === "proposals" ? "active" : ""}`}><Compass size={14} /> Scope</a>
          {/* FIX 7: Replaced DollarSign with CreditCard icon */}
          <a href="#payments" className={`mobile-tab-link ${activeSection === "payments" ? "active" : ""}`}><CreditCard size={14} /> Payments</a>
          <a href="#cooperation" className={`mobile-tab-link ${activeSection === "cooperation" ? "active" : ""}`}><Users size={14} /> Obligations</a>
          <a href="#copyright" className={`mobile-tab-link ${activeSection === "copyright" ? "active" : ""}`}><Award size={14} /> Copyrights</a>
          <a href="#hosting" className={`mobile-tab-link ${activeSection === "hosting" ? "active" : ""}`}><Server size={14} /> Hosting</a>
          <a href="#rankings" className={`mobile-tab-link ${activeSection === "rankings" ? "active" : ""}`}><Activity size={14} /> SEO</a>
          {/* FIX 2 & 3: New tabs for Termination and Force Majeure */}
          <a href="#termination" className={`mobile-tab-link ${activeSection === "termination" ? "active" : ""}`}><XCircle size={14} /> Cancellation</a>
          <a href="#forcemajeure" className={`mobile-tab-link ${activeSection === "forcemajeure" ? "active" : ""}`}><ShieldAlert size={14} /> Force Majeure</a>
          <a href="#liability" className={`mobile-tab-link ${activeSection === "liability" ? "active" : ""}`}><Scale size={14} /> Liability</a>
          <a href="#governing" className={`mobile-tab-link ${activeSection === "governing" ? "active" : ""}`}><FileText size={14} /> Legal</a>
        </nav>

        {/* Layout Grid */}
        <div className="terms-layout-grid">
          {/* Desktop Sticky Sidebar */}
          <aside className="terms-sidebar" data-aos="fade-right">
            <h4><FileText size={18} /> Quick Links</h4>
            <ul className="terms-sidebar-links">
              <li>
                <a href="#proposals" className={activeSection === "proposals" ? "active" : ""}><Compass size={16} /> 1. Proposals & Scope</a>
              </li>
              <li>
                {/* FIX 7: CreditCard icon in sidebar too */}
                <a href="#payments" className={activeSection === "payments" ? "active" : ""}><CreditCard size={16} /> 2. Payments & Billing</a>
              </li>
              <li>
                <a href="#cooperation" className={activeSection === "cooperation" ? "active" : ""}><Users size={16} /> 3. Client Obligations</a>
              </li>
              <li>
                <a href="#copyright" className={activeSection === "copyright" ? "active" : ""}><Award size={16} /> 4. Code Ownership</a>
              </li>
              <li>
                <a href="#hosting" className={activeSection === "hosting" ? "active" : ""}><Server size={16} /> 5. Hosting & Handovers</a>
              </li>
              <li>
                <a href="#rankings" className={activeSection === "rankings" ? "active" : ""}><Activity size={16} /> 6. Performance & SEO</a>
              </li>
              {/* FIX 2 & 3: New sidebar entries */}
              <li>
                <a href="#termination" className={activeSection === "termination" ? "active" : ""}><XCircle size={16} /> 7. Cancellation Policy</a>
              </li>
              <li>
                <a href="#forcemajeure" className={activeSection === "forcemajeure" ? "active" : ""}><ShieldAlert size={16} /> 8. Force Majeure</a>
              </li>
              <li>
                <a href="#liability" className={activeSection === "liability" ? "active" : ""}><Scale size={16} /> 9. Liability Limits</a>
              </li>
              <li>
                <a href="#governing" className={activeSection === "governing" ? "active" : ""}><FileText size={16} /> 10. Dispute & Jurisdiction</a>
              </li>
            </ul>
          </aside>

          {/* Right Content Area */}
          <main className="terms-content-area" data-aos="fade-up">
            {/* Intro */}
            <section className="terms-section-card">
              <h2>Agency Service Agreement</h2>
              <p>
                Welcome to <strong>MaaJanki Web Tech</strong>. These Terms & Conditions ("Terms", "Agreement") constitute a legally binding service contract between you ("Client", "Partner", "You") and MaaJanki Web Tech ("Company", "We", "Our", or "Us") regarding our agency offerings, including custom website development, graphic design, branding, search engine optimization (SEO), social media marketing (SMO), and PPC/Google Ads management.
              </p>
              <div className="terms-important-notice">
                <p>
                  ⚠️ By hiring our agency, paying a deposit invoice, or approving a design mock-up, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                </p>
              </div>
            </section>

            {/* 1 */}
            <section id="proposals" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><Compass size={20} /></span>
                1. Project Proposals & Scope of Work
              </h2>
              <p>
                All development and marketing projects are executed based on a written Proposal or Statement of Work (SOW) sent via email or contract.
              </p>
              <ul>
                <li><strong>Scope Limits:</strong> Work is strictly limited to the features, sections, and milestones defined in the SOW. Any additional layouts or features will be subject to supplementary billing.</li>
                <li><strong>Milestones:</strong> Development is divided into logical review milestones (e.g., UI Mock-ups, Alpha Build, Final Beta Release).</li>
                <li><strong>Revisions:</strong> Unless otherwise agreed, clients are entitled to up to 3 rounds of visual revisions during design milestones. Subsequent revisions are charged at standard developer rates.</li>
              </ul>
            </section>

            {/* 2 */}
            <section id="payments" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><CreditCard size={20} /></span>
                2. Payment Schedules & Billing Conditions
              </h2>
              {/* FIX 10: INR currency explicitly mentioned */}
              <p>
                MaaJanki Web Tech operates on a milestone-based billing system. All prices and invoices are denominated in <strong>Indian Rupees (₹ INR)</strong> unless a separate written agreement specifies otherwise.
              </p>
              <ul>
                <li><strong>Advance Deposit:</strong> A non-refundable deposit (typically 40% to 50% of the project total) is required before coding or layout preparation begins.</li>
                <li><strong>Milestone Payments:</strong> Payouts are due within 7 days of milestone completion. Failure to clear milestone invoices may result in temporary project suspension.</li>
                <li><strong>Final Settlement:</strong> The remaining balance must be paid in full prior to code migration, database transfers, domain mapping, or uploading files to client live servers.</li>
              </ul>
              <div className="terms-warning-box">
                <p>
                  ⚠️ Payments must only be remitted to the official bank accounts specified on invoices issued by MaaJanki Web Tech. Payments made to any other personal or unauthorised accounts are entirely at the client's risk and will not be credited toward the project balance.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section id="cooperation" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><Users size={20} /></span>
                3. Client Obligations & Review Cycle
              </h2>
              <p>
                A successful digital project requires active collaboration and timely handovers:
              </p>
              <ul>
                <li><strong>Material Handovers:</strong> Clients must promptly provide all logos, copywriting texts, product photos, database lists, and hosting access credentials required to build the website.</li>
                <li><strong>Delayed Handovers:</strong> Delays in delivering copy or media materials will cause project timelines to slide. We are not responsible for delayed launch dates if client materials are outstanding.</li>
                {/* FIX 4: Added written reminder requirement before "deemed approval" applies */}
                <li><strong>Approval Cycle:</strong> The client must review design drafts within 5 working days of delivery. If no feedback is received within 10 working days <em>after a written follow-up reminder has been sent by MaaJanki Web Tech</em>, the draft will be deemed approved and development will proceed accordingly.</li>
                {/* FIX 9: Clarified what 30-day support covers and explicitly excludes */}
                <li><strong>Post-Launch Support Scope:</strong> The complimentary 30-day support window covers technical bugs and functional glitches in the originally delivered codebase only. It does not include new feature additions, design changes, content edits, plugin upgrades, or third-party service issues. Such requests will be scoped and billed separately.</li>
              </ul>
            </section>

            {/* 4 */}
            <section id="copyright" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><Award size={20} /></span>
                4. Intellectual Property & Code Rights
              </h2>
              <p>
                We protect client assets while maintaining our developer resources:
              </p>
              <ul>
                <li><strong>Copyright Transfer:</strong> Full ownership rights to the final customised HTML/CSS/JS code, custom graphics, and branding assets are transferred to the client <em>only after</em> full final payment is cleared.</li>
                <li><strong>Third-Party Components:</strong> Licenses for third-party scripts, paid plugins, fonts, or stock photos purchased for the project are the financial responsibility of the client.</li>
                <li><strong>Portfolio Rights:</strong> We reserve the right to showcase the finalised web designs, case study results, and logos in our agency portfolio and marketing materials, unless a Non-Disclosure Agreement (NDA) is signed beforehand.</li>
              </ul>
            </section>

            {/* 5 */}
            <section id="hosting" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><Server size={20} /></span>
                5. Server Hosting & Post-Launch Support
              </h2>
              <p>
                MaaJanki Web Tech guides clients through hosting and post-launch maintenance structures:
              </p>
              <ul>
                <li><strong>Hosting Selection:</strong> Clients may purchase their own server hosting or request us to assist with setup. We are not liable for outages, data loss, or downtime caused by third-party hosting providers.</li>
                <li><strong>Support Window:</strong> All custom web projects include a complimentary 30-day technical support window starting from the launch date to address bugs or glitches in the delivered codebase.</li>
                <li><strong>Extended Maintenance:</strong> Post-complimentary support — including ongoing security patches, backups, plugin updates, and content changes — requires a dedicated website maintenance contract agreed upon in writing.</li>
              </ul>
            </section>

            {/* 6 */}
            <section id="rankings" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><Activity size={20} /></span>
                6. Performance Disclaimers (SEO & Ads)
              </h2>
              <p>
                While our agency operates with expert SEO and PPC practices, the following disclaimers apply:
              </p>
              <ul>
                <li><strong>SEO Rankings:</strong> Search algorithms change frequently. We do not guarantee permanent first-page ranks, specific click volumes, or fixed keyword positions on any search engine.</li>
                <li><strong>Ad Campaigns (PPC):</strong> Lead generation and advertising outcomes depend on client service demand, ad budget size, competitive bidding factors, and the quality of client landing pages.</li>
                <li><strong>Traffic Volatility:</strong> We are not liable for traffic drops resulting from core search engine algorithm updates, seasonal demand shifts, or client-side website changes made without our knowledge.</li>
              </ul>
            </section>

            {/* 7 — FIX 2: NEW Termination & Cancellation section */}
            <section id="termination" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><XCircle size={20} /></span>
                7. Termination & Cancellation Policy
              </h2>
              <p>
                Either party may terminate this Agreement under the following conditions:
              </p>
              <ul>
                <li><strong>Cancellation by Client:</strong> If the client wishes to cancel the project after work has commenced, a written cancellation notice must be sent to <strong>info@maajankiwebtech.com</strong>. The advance deposit paid is strictly non-refundable. Payments made for completed milestones will also be retained. A partial refund for work not yet started may be considered at MaaJanki Web Tech's sole discretion.</li>
                <li><strong>Cancellation by Agency:</strong> MaaJanki Web Tech reserves the right to terminate a project if the client fails to make payment within 14 days of a due invoice, provides fraudulent or misleading project information, or repeatedly violates the agreed scope and timelines. In such cases, all completed work will be delivered to the client upon receipt of outstanding dues.</li>
                <li><strong>Notice Period:</strong> For ongoing retainer or maintenance contracts, either party must provide a minimum <strong>30-day written notice</strong> before termination.</li>
                <li><strong>Post-Termination:</strong> Upon termination, all client access credentials, assets, and deliverables for work paid in full will be handed over within 7 business days. Unpaid deliverables will be withheld until dues are cleared.</li>
              </ul>
            </section>

            {/* 8 — FIX 3: NEW Force Majeure section */}
            <section id="forcemajeure" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><ShieldAlert size={20} /></span>
                8. Force Majeure
              </h2>
              <p>
                MaaJanki Web Tech shall not be held liable for any delay or failure in performance of its obligations under this Agreement where such delay or failure arises from circumstances beyond our reasonable control, including but not limited to:
              </p>
              <ul>
                <li>Acts of God, natural disasters, floods, earthquakes, or pandemics.</li>
                <li>Government orders, regulations, or nationwide internet or power disruptions.</li>
                <li>Third-party server outages, hosting provider failures, or cyberattacks on infrastructure outside our control.</li>
                <li>Strikes, civil unrest, or any other event that materially prevents the performance of services.</li>
              </ul>
              <p>
                In the event of a force majeure situation, we will notify the client in writing as soon as reasonably practicable. Project timelines affected by such events will be extended by a period equal to the duration of the disruption, with no penalty to either party.
              </p>
            </section>

            {/* 9 — was section 7 */}
            <section id="liability" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><Scale size={20} /></span>
                9. Limitation of Liability
              </h2>
              <p>
                MaaJanki Web Tech is not responsible for any indirect, special, incidental, or consequential damages arising from service usage, website downtime, data breaches, server hacks, or loss of business earnings. Our aggregate liability is strictly capped at the direct amount paid to us for the specific project milestone in question.
              </p>
            </section>

            {/* 10 — was section 8 */}
            <section id="governing" className="terms-section-card">
              <h2>
                <span className="terms-card-icon"><FileText size={20} /></span>
                10. Governing Law, Arbitration & Jurisdiction
              </h2>
              {/* FIX 5: Added pre-court arbitration/mediation clause */}
              <p>
                This Agreement is governed by and construed in accordance with the laws of India. In the event of any dispute or disagreement arising from services rendered by MaaJanki Web Tech, the parties agree to first attempt resolution through good-faith negotiation within <strong>15 days</strong> of written notice of the dispute.
              </p>
              <p>
                If negotiation fails, the dispute shall be referred to <strong>mediation or arbitration</strong> under the Arbitration and Conciliation Act, 1996 (India), with a mutually agreed sole arbitrator. The seat of arbitration shall be Bettiah, West Champaran, Bihar, India.
              </p>
              <p>
                Only if arbitration fails or is not applicable shall the matter be subject to the exclusive jurisdiction of the courts in <strong>Bettiah, West Champaran, Bihar, India</strong>.
              </p>
            </section>

            {/* Contact Details */}
            <section className="terms-section-card">
              {/* FIX 8: Changed heading from "Contact Terms Officer" to "Clarifications & Disputes" */}
              <h2><HelpCircle size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Clarifications & Disputes</h2>
              <p>
                For any questions regarding our terms, service contracts, project schedules, or dispute resolution, please reach out to us at:
              </p>
              <div className="terms-contact-details">
                <div className="terms-contact-card">
                  <span className="contact-icon"><Mail size={28} /></span>
                  <h3>Email</h3>
                  <p><a href="mailto:info@maajankiwebtech.com">info@maajankiwebtech.com</a></p>
                </div>
                <div className="terms-contact-card">
                  <span className="contact-icon"><Phone size={28} /></span>
                  <h3>Phone</h3>
                  <p><a href="tel:+919006543913">+91 9006543913</a></p>
                </div>
                <div className="terms-contact-card">
                  <span className="contact-icon"><MapPin size={28} /></span>
                  <h3>Bagaha Office</h3>
                  {/* FIX 6: Corrected address — "Building of UCO Bank" consistent with Privacy Policy */}
                  <p>
                    First Floor, Near Cinema House,<br />
                    Building of UCO Bank, Bagaha Bazar,<br />
                    West Champaran, Bihar - 845101
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

export default Terms;