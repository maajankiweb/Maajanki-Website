'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import {
  FaRocket,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaCertificate,
  FaLightbulb,
  FaChevronDown,
  FaArrowRight,
  FaCloudUploadAlt,
  FaPaperPlane,
  FaShieldAlt,
  FaCheckCircle,
  FaTimes,
  FaBriefcase,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaLock
} from 'react-icons/fa';
import './Careers.css';

const openingsData = [
  {
    id: 'seo-intern',
    num: '01',
    title: 'SEO Intern (Free Internship)',
    category: 'intern',
    badges: [
      { text: 'Internship', type: 'intern' },
      { text: 'Free Program', type: 'free' },
      { text: '0–1 Yr', type: 'exp' }
    ],
    skills: 'On-page SEO, Off-page SEO, keyword research, backlink building, technical SEO, and competitor analysis.',
    qualification: 'Pursuing or completed degree in Marketing, Computer Science, Communications, or related field.',
    experience: '0–1 Years — Freshers are welcome!',
    duration: 'Free Internship – 3 months with official certificate and full-time conversion potential.'
  },
  {
    id: 'social-media-intern',
    num: '02',
    title: 'Social Media Intern',
    category: 'intern',
    badges: [
      { text: 'Internship', type: 'intern' },
      { text: '0–1 Yr', type: 'exp' }
    ],
    skills: 'Social media strategy, Reels/Shorts creation, scheduling, analytics, community management, and trend analysis.',
    qualification: 'Pursuing or completed degree in Marketing, Mass Media, or related field.',
    experience: '0–1 Years — Freshers welcome!',
    duration: 'Internship – 3 to 6 months with verified certificate.'
  },
  {
    id: 'digital-marketing',
    num: '03',
    title: 'Digital Marketing Executive',
    category: 'fulltime',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' }
    ],
    skills: 'Social media campaign execution, Google Ads, Meta Business Suite, SEO implementation, and copywriting.',
    qualification: 'Bachelor’s degree in Marketing, Business, or equivalent industry experience.',
    experience: '1–3 Years in digital marketing or a growth agency.',
    duration: 'Full-Time position.'
  },
  {
    id: 'web-developer',
    num: '04',
    title: 'Full-Stack Next.js Web Developer',
    category: 'fulltime',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' }
    ],
    skills: 'Next.js 15 App Router, React 18, Node.js, TailwindCSS, MongoDB/PostgreSQL, REST APIs, and Core Web Vitals.',
    qualification: 'B.Tech/BCA/MCA or self-taught engineer with strong GitHub portfolio.',
    experience: '1–3 Years building responsive production web applications.',
    duration: 'Full-Time position.'
  },
  {
    id: 'graphic-designer',
    num: '05',
    title: 'Graphic Designer',
    category: 'fulltime',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' }
    ],
    skills: 'Adobe Creative Suite (Photoshop, Illustrator), branding systems, social media banners, typography, and layout.',
    qualification: 'Degree/Diploma in Graphic Design or proven design portfolio.',
    experience: '1–3 Years with a strong visual portfolio.',
    duration: 'Full-Time position.'
  },
  {
    id: 'bde',
    num: '06',
    title: 'Business Development Executive',
    category: 'fulltime',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' }
    ],
    skills: 'Client acquisition, B2B sales outreach, pipeline management, CRM tools, proposal writing, and negotiation.',
    qualification: 'Bachelor’s degree in Business, Commerce, or Marketing.',
    experience: '1–3 Years in agency sales or software business development.',
    duration: 'Full-Time position.'
  },
  {
    id: 'ui-ux',
    num: '07',
    title: 'UI/UX Designer',
    category: 'fulltime',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' }
    ],
    skills: 'Figma interactive prototypes, wireframing, user persona research, design systems, and responsive layout grids.',
    qualification: 'Degree in Interaction Design, HCI, or equivalent portfolio experience.',
    experience: '1–3 Years in UI/UX product or agency design.',
    duration: 'Full-Time position.'
  },
  {
    id: 'copywriter',
    num: '08',
    title: 'Copywriter & Content Strategist',
    category: 'fulltime',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' }
    ],
    skills: 'Website landing page copywriting, SEO long-form content, email sequences, social copy, and brand narratives.',
    qualification: 'Degree in English, Journalism, Mass Communication, or related discipline.',
    experience: '1–3 Years of professional copywriting experience.',
    duration: 'Full-Time position.'
  }
];

const faqsData = [
  {
    q: 'How can I apply for a role at MaaJanki Web Tech?',
    a: 'Simply select your desired role from the list above, click "Apply for This Role", fill in your contact information, upload your CV in PDF format (max 2MB), and submit. Our HR and talent acquisition team reviews every submission and contacts shortlisted candidates within 3–5 business days.'
  },
  {
    q: 'Does MaaJanki Web Tech offer internships for freshers?',
    a: 'Yes! We offer a 3-month free SEO internship and a 3-to-6 month Social Media internship specifically tailored for freshers and college students. You get hands-on live client project exposure, senior mentorship, and an official completion certificate recognized across the industry.'
  },
  {
    q: 'Is the SEO internship recognized?',
    a: 'Yes. MaaJanki Web Tech is a DPIIT recognized startup under Startup India and registered under Udyam MSME (Govt. of India). The certificate awarded upon completing the internship carries official validation, verifying your live project hours.'
  },
  {
    q: 'What is the work culture like at MaaJanki Web Tech?',
    a: 'We foster an idea-first, high-autonomy culture where creativity and continuous learning are celebrated. Everyone is encouraged to experiment with modern tools (like AI workflows and Next.js 15), contribute ideas during strategy standups, and grow rapidly.'
  },
  {
    q: 'Can I apply for multiple openings at once?',
    a: 'We recommend applying for the primary role that best aligns with your strengths and interests. If you feel you are a great fit for more than one position, you can mention your secondary skillsets in the cover note and our HR team will evaluate your profile for all relevant openings.'
  }
];

export default function CareersClient() {
  const [filter, setFilter] = useState('all');
  const [openAccordion, setOpenAccordion] = useState('seo-intern');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Consultation Modal State (for pre-footer CTA strip)
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isConsultSubmitting, setIsConsultSubmitting] = useState(false);
  const [consultForm, setConsultForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '₹25,000 - ₹50,000',
    message: ''
  });

  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  // Close modal on Escape and lock scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isConsultModalOpen) {
        setIsConsultModalOpen(false);
      }
    };
    if (isConsultModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isConsultModalOpen]);

  const handleConsultSubmit = async (e) => {
    e.preventDefault();
    setIsConsultSubmitting(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: consultForm.name,
          email: consultForm.email,
          phone: consultForm.phone,
          service: consultForm.service,
          message: `Budget: ${consultForm.budget}\nProject Details: ${consultForm.message}`,
          source: 'careers-pre-footer-cta',
          url: typeof window !== 'undefined' ? window.location.href : ''
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Consultation Request Sent!',
          text: 'Thank you for reaching out. Our enterprise team will get in touch with you within 24 hours.',
          background: '#042544',
          color: '#fff',
          confirmButtonColor: '#FD6A02'
        });
        setIsConsultModalOpen(false);
        setConsultForm({
          name: '',
          email: '',
          phone: '',
          service: 'Web Development',
          budget: '₹25,000 - ₹50,000',
          message: ''
        });
      } else {
        throw new Error(data.error || data.message || 'Failed to submit inquiry.');
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: err.message || 'Please check your connection or contact us at contact@maajankiwebtech.com.',
        background: '#042544',
        color: '#fff',
        confirmButtonColor: '#FD6A02'
      });
    } finally {
      setIsConsultSubmitting(false);
    }
  };

  const filteredOpenings = openingsData.filter((job) => {
    if (filter === 'all') return true;
    return job.category === filter;
  });

  const handleApplyClick = (title) => {
    setSelectedPosition(title);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedFileName('');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      Swal.fire({
        icon: 'error',
        title: 'File Too Large!',
        text: 'Your CV file size exceeds the 2MB limit.',
        background: '#042544',
        color: '#fff',
        confirmButtonColor: '#FD6A02'
      });
      e.target.value = '';
      setSelectedFileName('');
      return;
    }

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid File Type!',
        text: 'Only PDF format is accepted for CV uploads.',
        background: '#042544',
        color: '#fff',
        confirmButtonColor: '#FD6A02'
      });
      e.target.value = '';
      setSelectedFileName('');
      return;
    }

    setSelectedFileName(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setIsSubmitting(true);

    Swal.fire({
      title: 'Submitting Your Application...',
      text: 'Please wait while we securely upload your CV.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      background: '#042544',
      color: '#FD6A02'
    });

    try {
      const res = await fetch('/api/career', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (res.ok && data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Application Submitted!',
          text: data.message || 'We have received your CV and will contact you shortly.',
          background: '#042544',
          color: '#fff',
          confirmButtonColor: '#FD6A02'
        });
        form.reset();
        setSelectedPosition('');
        setSelectedFileName('');
      } else {
        throw new Error(data.message || 'Failed to submit application.');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: error.message || 'Please check your connection and try again or email hr@maajankiwebtech.com.',
        background: '#042544',
        color: '#fff',
        confirmButtonColor: '#FD6A02'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="careers-wrapper">
      {/* ─── FULL HERO BANNER IMAGE ─── */}
      <section className="cr-hero-full" aria-label="MaaJanki Web Tech Careers Banner">
        <h1 className="sr-only">Careers at MaaJanki Web Tech - Build Your Career in Digital Tech &amp; SEO</h1>
        <div className="cr-hero-full-banner">
          <Image
            src="/images/all-pages-section-image/About-us/about-us-team.webp"
            alt="MaaJanki Web Tech team working on digital marketing and web development projects"
            width={1920}
            height={680}
            priority
            className="cr-hero-full-img"
          />
        </div>
      </section>

      {/* ─── PERKS / WHY JOIN US ─── */}
      <section className="perks-section" id="why-us" aria-label="Work culture and employee perks">
        <div className="perks-header">
          <span className="perks-label">Why MaaJanki Web Tech?</span>
          <h2>
            A Place Where <em>Talent Thrives</em>
          </h2>
          <p>We don&apos;t just offer jobs — we build enduring digital careers. Here is what sets our team culture apart.</p>
        </div>

        <div className="perks-grid">
          <div className="perk-card">
            <div className="perk-icon">
              <FaRocket />
            </div>
            <h3 className="perk-title">Real Client Exposure</h3>
            <p className="perk-desc">Work on live client campaigns and production Next.js apps from week one. Real impact, real results.</p>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <FaGraduationCap />
            </div>
            <h3 className="perk-title">Continuous Mentorship</h3>
            <p className="perk-desc">Workshops, modern AI tool training, and 1-on-1 guidance from experienced engineering &amp; SEO leads.</p>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <FaUsers />
            </div>
            <h3 className="perk-title">Collaborative Culture</h3>
            <p className="perk-desc">A supportive, idea-first environment where creativity is valued and every team member has a voice.</p>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <FaChartLine />
            </div>
            <h3 className="perk-title">Fast Career Growth</h3>
            <p className="perk-desc">Transparent performance benchmarks. Excel in your deliverables and step up into leadership roles quickly.</p>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <FaCertificate />
            </div>
            <h3 className="perk-title">Verified Certifications</h3>
            <p className="perk-desc">Official completion certificate recognized under DPIIT Startup India &amp; Udyam MSME registration.</p>
          </div>

          <div className="perk-card">
            <div className="perk-icon">
              <FaLightbulb />
            </div>
            <h3 className="perk-title">Creative Freedom</h3>
            <p className="perk-desc">Bring your boldest ideas to the table. We love experimentation and encourage calculated risk-taking.</p>
          </div>
        </div>
      </section>

      {/* ─── CURRENT OPENINGS ─── */}
      <section className="openings-section" id="openings" aria-label="Available job openings">
        <div className="openings-header">
          <span className="perks-label">Current Openings</span>
          <h2>
            <em>Digital Marketing &amp; Tech Jobs</em> at MaaJanki Web Tech
          </h2>
          <p>
            Explore our open positions below. Whether you are an experienced professional or an ambitious fresher seeking an internship, discover your next career milestone.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="openings-filter" role="group" aria-label="Filter job openings">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Roles ({openingsData.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'intern' ? 'active' : ''}`}
            onClick={() => setFilter('intern')}
          >
            Internships
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'fulltime' ? 'active' : ''}`}
            onClick={() => setFilter('fulltime')}
          >
            Full-Time
          </button>
        </div>

        {/* Job Accordions */}
        <div className="jobs-grid" role="list">
          {filteredOpenings.map((job) => {
            const isOpen = openAccordion === job.id;
            return (
              <article key={job.id} className={`job-card ${isOpen ? 'open' : ''}`} role="listitem">
                <div
                  className="job-header"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => setOpenAccordion(isOpen ? null : job.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenAccordion(isOpen ? null : job.id);
                    }
                  }}
                >
                  <div className="job-num">{job.num}</div>
                  <div className="job-info">
                    <div className="job-title">{job.title}</div>
                    <div className="job-badges">
                      {job.badges.map((b, i) => (
                        <span key={i} className={`badge-type badge-${b.type}`}>
                          {b.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <FaChevronDown className="job-chevron" />
                </div>

                {isOpen && (
                  <div className="job-body">
                    <ul className="job-detail-list">
                      <li>
                        <span className="job-detail-bullet">▸</span>
                        <span>
                          <strong>Skills:</strong> {job.skills}
                        </span>
                      </li>
                      <li>
                        <span className="job-detail-bullet">▸</span>
                        <span>
                          <strong>Qualification:</strong> {job.qualification}
                        </span>
                      </li>
                      <li>
                        <span className="job-detail-bullet">▸</span>
                        <span>
                          <strong>Experience:</strong> {job.experience}
                        </span>
                      </li>
                      <li>
                        <span className="job-detail-bullet">▸</span>
                        <span>
                          <strong>Duration / Type:</strong> {job.duration}
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn-apply-role"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Apply for This Role <FaArrowRight />
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ─── APPLICATION FORM SECTION ─── */}
      <section ref={formRef} className="apply-section" id="apply-section" aria-label="Job application form">
        <div className="apply-wrapper">
          <div className="apply-intro">
            <span className="perks-label">Apply Now</span>
            <h2>
              We&apos;d Love To <em>Hear From You</em>
            </h2>
            <p>Fill in your details below and upload your resume. Our recruitment team will review your application and reach out within 3–5 business days.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-lbl" htmlFor="c-name">
                  Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="c-name"
                  name="name"
                  placeholder="e.g. Rahul Kumar"
                  className="form-ctrl"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-lbl" htmlFor="c-phone">
                  Phone Number <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  id="c-phone"
                  name="phone"
                  placeholder="10-digit mobile"
                  className="form-ctrl"
                  pattern="\d{10}"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-lbl" htmlFor="c-email">
                  Email Address <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="c-email"
                  name="email"
                  placeholder="you@example.com"
                  className="form-ctrl"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-lbl" htmlFor="c-position">
                  Applying For <span className="req">*</span>
                </label>
                <select
                  id="c-position"
                  name="position"
                  className="form-ctrl"
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Position *
                  </option>
                  {openingsData.map((op) => (
                    <option key={op.id} value={op.title}>
                      {op.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-lbl" htmlFor="c-cv">
                Upload CV / Resume <span className="req">*</span> <span className="hint">(PDF only, max 2MB)</span>
              </label>

              <div className="file-drop" onClick={() => fileInputRef.current?.click()}>
                <input
                  type="file"
                  id="c-cv"
                  name="cv"
                  accept=".pdf,application/pdf"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  required
                />
                <div className="file-drop-icon">
                  <FaCloudUploadAlt />
                </div>
                <div className="file-drop-text">
                  <strong>Click to browse</strong> or drag and drop your resume
                  <br />
                  PDF format only · Maximum file size 2MB
                </div>
                {selectedFileName && (
                  <div className="file-name-preview">
                    <FaCheckCircle /> Selected: {selectedFileName}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-lbl" htmlFor="c-message">
                Why do you want to work with MaaJanki Web Tech? <span className="hint">(Optional)</span>
              </label>
              <textarea
                id="c-message"
                name="message"
                rows={4}
                placeholder="Tell us what excites you about this role, your previous projects, or what you hope to achieve..."
                className="form-ctrl"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-career" disabled={isSubmitting}>
              <FaPaperPlane style={{ marginRight: '8px' }} />
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </button>

            <p className="form-note">
              <FaShieldAlt style={{ marginRight: '6px', color: '#FD6A02' }} />
              Your data is strictly confidential and used solely for recruitment purposes.
            </p>
          </form>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="faq-section" id="faq" aria-label="Frequently Asked Questions about careers">
        <div className="faq-header">
          <span className="perks-label">Got Questions?</span>
          <h2>
            Frequently Asked <em>Questions</em>
          </h2>
        </div>

        <div className="faq-list">
          {faqsData.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <div
                  className="faq-question"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenFaq(isOpen ? null : index);
                    }
                  }}
                >
                  {item.q}
                  <FaChevronDown className="faq-chevron" />
                </div>

                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── PRE-FOOTER CTA STRIP ─── */}
      <div className="cta-strip-gold">
        <div className="cta-strip-container">
          <div>
            <h3 className="cta-heading">Your Ideas, Our Innovation — Let&apos;s Build Something Great Together</h3>
            <span className="cta-sub">
              Have a commercial project in mind or looking for enterprise web development? Get in touch with our team.
            </span>
          </div>

          <div>
            <button
              type="button"
              className="btn-cta-black"
              onClick={() => setIsConsultModalOpen(true)}
              id="work-with-us-btn"
            >
              Work With Us
            </button>
          </div>
        </div>
      </div>

      {/* ─── PROJECT CONSULTATION MODAL ─── */}
      {isConsultModalOpen && (
        <div
          className="consult-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consult-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsConsultModalOpen(false);
          }}
        >
          <div className="consult-modal-card">
            <button
              type="button"
              className="consult-modal-close"
              onClick={() => setIsConsultModalOpen(false)}
              aria-label="Close consultation modal"
            >
              <FaTimes />
            </button>

            <div className="consult-modal-header">
              <span className="consult-badge">
                <FaRocket style={{ marginRight: '6px' }} /> Enterprise &amp; Growth
              </span>
              <h3 id="consult-modal-title">
                Start Your Project With <span>MaaJanki</span>
              </h3>
              <p>
                Have a commercial project in mind or looking for enterprise web development? Tell us your vision and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleConsultSubmit} className="consult-form">
              <div className="consult-form-row">
                <div className="consult-form-group">
                  <label htmlFor="consult-name">
                    Your Name <span className="req">*</span>
                  </label>
                  <div className="consult-input-wrap">
                    <FaUser className="consult-input-icon" />
                    <input
                      type="text"
                      id="consult-name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={consultForm.name}
                      onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="consult-form-group">
                  <label htmlFor="consult-email">
                    Work Email <span className="req">*</span>
                  </label>
                  <div className="consult-input-wrap">
                    <FaEnvelope className="consult-input-icon" />
                    <input
                      type="email"
                      id="consult-email"
                      required
                      placeholder="rahul@company.com"
                      value={consultForm.email}
                      onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="consult-form-row">
                <div className="consult-form-group">
                  <label htmlFor="consult-phone">
                    Phone / WhatsApp <span className="req">*</span>
                  </label>
                  <div className="consult-input-wrap">
                    <FaPhoneAlt className="consult-input-icon" />
                    <input
                      type="tel"
                      id="consult-phone"
                      required
                      placeholder="+91 98765 43210"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="consult-form-group">
                  <label htmlFor="consult-service">
                    Service Required <span className="req">*</span>
                  </label>
                  <div className="consult-input-wrap">
                    <FaBriefcase className="consult-input-icon" />
                    <select
                      id="consult-service"
                      value={consultForm.service}
                      onChange={(e) => setConsultForm({ ...consultForm, service: e.target.value })}
                    >
                      <option value="Web Development">Next.js &amp; Web Development</option>
                      <option value="SEO & Performance Marketing">SEO &amp; Performance Marketing</option>
                      <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                      <option value="UI/UX Design">UI/UX &amp; Product Design</option>
                      <option value="Social Media & Branding">Social Media &amp; Branding</option>
                      <option value="Full Digital Transformation">Full Digital Transformation</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="consult-form-group">
                <label htmlFor="consult-budget">Estimated Project Budget</label>
                <select
                  id="consult-budget"
                  className="consult-select-full"
                  value={consultForm.budget}
                  onChange={(e) => setConsultForm({ ...consultForm, budget: e.target.value })}
                >
                  <option value="Under ₹25,000">Under ₹25,000</option>
                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000</option>
                  <option value="₹3,00,000+ (Enterprise)">₹3,00,000+ (Enterprise)</option>
                </select>
              </div>

              <div className="consult-form-group">
                <label htmlFor="consult-message">
                  Project Brief / Details <span className="req">*</span>
                </label>
                <textarea
                  id="consult-message"
                  required
                  rows={3}
                  placeholder="Tell us about your project goals, scope, and timeline..."
                  value={consultForm.message}
                  onChange={(e) => setConsultForm({ ...consultForm, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="consult-btn-submit"
                disabled={isConsultSubmitting}
              >
                <FaPaperPlane style={{ marginRight: '8px' }} />
                {isConsultSubmitting ? 'Submitting Request...' : 'Send Consultation Request'}
              </button>

              <div className="consult-footer-note">
                <FaLock style={{ color: '#FD6A02', marginRight: '6px' }} />
                100% Confidential · Strict Privacy · No Spam Guarantee
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
