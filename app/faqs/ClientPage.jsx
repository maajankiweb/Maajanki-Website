'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  FaSearch,
  FaShareAlt,
  FaPalette,
  FaPenNib,
  FaVectorSquare,
  FaCode,
  FaChartLine,
  FaBoxOpen,
  FaLayerGroup,
  FaBullseye,
  FaChartBar,
  FaAward,
  FaTimes,
  FaArrowUp,
  FaArrowRight,
  FaQuestionCircle,
} from 'react-icons/fa';
import './Faqs.css';
import { FAQ_CATEGORIES, FAQ_SECTIONS, WHY_CHOOSE_MAAJANKI } from './data';

const ICON_MAP = {
  FaSearch,
  FaShareAlt,
  FaPalette,
  FaPenNib,
  FaVectorSquare,
  FaCode,
  FaChartLine,
  FaBoxOpen,
  FaLayerGroup,
  FaBullseye,
  FaChartBar,
  FaAward,
};

export default function FaqsClientPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqId, setOpenFaqId] = useState('seo-1'); // Default first open
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 400);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter sections and questions by active category and search query
  const filteredSections = useMemo(() => {
    const cleanQuery = searchQuery.trim().toLowerCase();

    return FAQ_SECTIONS.map((section) => {
      // If category filter is active and doesn't match this section
      if (activeCategory !== 'all' && activeCategory !== section.id) {
        return null;
      }

      // Filter questions in this section
      const matchingQuestions = section.questions.filter((item) => {
        if (!cleanQuery) return true;
        const qMatch = item.q.toLowerCase().includes(cleanQuery);
        const aMatch = item.a.some((para) => para.toLowerCase().includes(cleanQuery));
        return qMatch || aMatch;
      });

      if (matchingQuestions.length === 0) return null;

      return {
        ...section,
        questions: matchingQuestions,
      };
    }).filter(Boolean);
  }, [searchQuery, activeCategory]);

  const totalFilteredQuestions = useMemo(() => {
    return filteredSections.reduce((acc, sec) => acc + sec.questions.length, 0);
  }, [filteredSections]);

  const handleToggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="mj-faq-page">
      {/* Ambient background glows */}
      <div className="mj-faq-glow-1" aria-hidden="true" />
      <div className="mj-faq-glow-2" aria-hidden="true" />

      <div className="mj-faq-container">
        {/* ─── 1. HERO HEADER ─── */}
        <header className="mj-faq-hero">
          <div className="mj-faq-badge-wrap">
            <FaQuestionCircle />
            <span>Knowledge Base &amp; Agency Guide</span>
          </div>
          <h1>
            Frequently Asked <span>Questions</span>
          </h1>
          <p className="mj-faq-hero-desc">
            Real answers to real questions about MaaJanki Web Tech&apos;s digital marketing,
            Next.js web development, SEO, and branding services — from budgets and timelines
            to processes and guaranteed deliverables.
          </p>

          {/* Page Intro Card */}
          <div className="mj-faq-hero-intro">
            <p>
              <strong>MaaJanki Web Tech</strong> is a DPIIT Startup India &amp; Udyam MSME
              recognized digital transformation agency based in West Champaran, Bihar,
              scaling enterprises across India, the US, the UK, and the Middle East.
              This comprehensive guide answers the exact questions our clients ask most.
              If your question is not covered below, our team is available directly via our{' '}
              <Link href="/contact">contact page</Link> or phone at{' '}
              <a href="tel:+919006543913">+91-9006543913</a>.
            </p>
          </div>

          {/* ─── 2. LIVE SEARCH BOX ─── */}
          <div className="mj-faq-search-box">
            <div className="mj-faq-search-input-wrap">
              <FaSearch className="mj-faq-search-icon" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for questions (e.g. SEO timeline, website cost, ROAS, backlinks)..."
                className="mj-faq-search-input"
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="mj-faq-clear-btn"
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* ─── 3. CATEGORY FILTER PILLS ─── */}
          <nav className="mj-faq-filters" aria-label="FAQ category filter">
            {FAQ_CATEGORIES.map((cat) => {
              const IconComponent = ICON_MAP[cat.icon] || FaLayerGroup;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`mj-faq-filter-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={13} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </nav>
        </header>

        {/* ─── 4. FAQ ACCORDION CONTENT ─── */}
        <main className="mj-faq-content-area" id="faq-list">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => {
              const SectionIcon = ICON_MAP[section.icon] || FaQuestionCircle;
              return (
                <section
                  key={section.id}
                  className="mj-faq-category-block"
                  aria-labelledby={`heading-${section.id}`}
                >
                  {/* Category Section Header */}
                  <div className="mj-faq-sec-header">
                    <div className="mj-faq-sec-icon" aria-hidden="true">
                      <SectionIcon />
                    </div>
                    <h2 id={`heading-${section.id}`}>{section.title}</h2>
                    <span className="mj-faq-sec-count">
                      {section.questions.length} Questions
                    </span>
                  </div>

                  {/* Accordion Questions */}
                  <div className="mj-faq-accordion-group" role="region">
                    {section.questions.map((faq) => {
                      const isOpen = openFaqId === faq.id;
                      return (
                        <div
                          key={faq.id}
                          className={`mj-faq-item ${isOpen ? 'active' : ''}`}
                        >
                          <button
                            type="button"
                            className="mj-faq-q-btn"
                            onClick={() => handleToggleFaq(faq.id)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${faq.id}`}
                          >
                            <h3>{faq.q}</h3>
                            <div
                              className="mj-faq-toggle-icon"
                              aria-hidden="true"
                            >
                              +
                            </div>
                          </button>

                          <div
                            id={`faq-answer-${faq.id}`}
                            className="mj-faq-answer"
                            role="region"
                            aria-hidden={!isOpen}
                          >
                            <div className="mj-faq-answer-inner">
                              {faq.a.map((paragraph, pIdx) => (
                                <p
                                  key={pIdx}
                                  dangerouslySetInnerHTML={{
                                    __html: paragraph,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })
          ) : (
            /* Empty Search State */
            <div className="mj-faq-empty">
              <h3>No matching questions found</h3>
              <p>
                We could not find any questions matching &quot;{searchQuery}&quot;.
                Try a different keyword or reset filters to browse all questions.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mj-faq-reset-btn"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          )}

          {/* ─── 5. WHY CLIENTS CHOOSE MAAJANKI STRIP ─── */}
          <section
            className="mj-faq-why"
            aria-label="Why clients choose MaaJanki Web Tech"
          >
            <h2 className="mj-faq-why-title">
              Why Businesses Choose <span>MaaJanki Web Tech</span>
            </h2>
            <div className="mj-faq-why-grid">
              {WHY_CHOOSE_MAAJANKI.map((item, idx) => {
                const ItemIcon = ICON_MAP[item.icon] || FaBullseye;
                return (
                  <div key={idx} className="mj-faq-why-item">
                    <div className="mj-faq-why-icon" aria-hidden="true">
                      <ItemIcon />
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ─── 6. BOTTOM CTA SECTION ─── */}
          <section className="mj-faq-cta" aria-label="Contact call to action">
            <h2>
              Still Have <span>Questions?</span>
            </h2>
            <p>
              Our leadership and senior engineering team are available to walk you
              through custom pricing, delivery timelines, and project scopes — with
              complete transparency and zero high-pressure sales tactics.
            </p>
            <Link href="/contact" className="mj-faq-cta-btn">
              Talk to Our Team Today <FaArrowRight />
            </Link>
          </section>
        </main>
      </div>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="mj-faq-scroll-top"
          aria-label="Scroll back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
