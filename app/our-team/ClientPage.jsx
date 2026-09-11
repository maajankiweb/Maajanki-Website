'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaLinkedinIn,
  FaTimes,
  FaArrowRight,
  FaBuilding,
  FaLayerGroup,
  FaImages,
  FaIndustry,
  FaUserPlus,
  FaPenNib,
  FaEnvelopeOpenText,
  FaQuestionCircle
} from 'react-icons/fa';
import './OurTeam.css';
import { INITIAL_TEAM } from '@/lib/team-data';

const DEFAULT_LEADERS = INITIAL_TEAM.filter((m) => m.category === 'leadership');
const DEFAULT_SQUAD = INITIAL_TEAM.filter((m) => m.category === 'squad');

export default function OurTeamClient() {
  const [leaders, setLeaders] = useState(DEFAULT_LEADERS);
  const [squad, setSquad] = useState(DEFAULT_SQUAD);
  const [activeMember, setActiveMember] = useState(null);
  const [mediaSettings, setMediaSettings] = useState({
    heroGroupImage: '/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
    middleBannerImage: '/images/pages/main-services-pages/About-Maajanki-Web-Tech.webp',
    heroBadgeText: 'Our Collective',
  });

  // Fetch live team members from MongoDB Atlas (Admin sync)
  useEffect(() => {
    const fetchLiveTeam = async () => {
      try {
        const res = await fetch('/api/team');
        const data = await res.json();
        if (data.success) {
          if (data.members && data.members.length > 0) {
            if (data.leaders && data.leaders.length > 0) {
              setLeaders(data.leaders);
            }
            if (data.squad && data.squad.length > 0) {
              setSquad(data.squad);
            }
          }
          if (data.settings) {
            setMediaSettings((prev) => ({
              ...prev,
              ...data.settings,
            }));
          }
        }
      } catch (err) {
        console.warn('Using local team data fallback:', err);
      }
    };
    fetchLiveTeam();
  }, []);

  // Close modal with Escape key and body lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveMember(null);
    };

    if (activeMember) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeMember]);

  return (
    <div className="ot-wrapper">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="ot-hero" aria-label="MaaJanki Web Tech team introduction">
        <p className="ot-hero-label">The People Behind The Vision</p>
        <h1 className="ot-hero-title">
          Meet Our <span>Team</span>
        </h1>
        <p className="ot-hero-sub">
          A collective of passionate <strong>digital marketing experts</strong>, brand strategists, and web builders — united by a shared obsession with extraordinary results for every client. Explore our{' '}
          <Link href="/portfolio">portfolio</Link> or see how we can help on our{' '}
          <Link href="/services">services page</Link>.
        </p>

        <div className="ot-hero-frame-wrap">
          <div className="ot-hero-frame" role="img" aria-label="MaaJanki Web Tech team group photo">
            <div className="ot-scan-line" aria-hidden="true"></div>
            {mediaSettings.heroGroupImage?.startsWith('data:') ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={mediaSettings.heroGroupImage}
                alt="MaaJanki Web Tech team collective – Web Development and SEO agency"
                className="ot-hero-img"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            ) : (
              <Image
                src={mediaSettings.heroGroupImage || '/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp'}
                alt="MaaJanki Web Tech team collective – Web Development and SEO agency"
                width={920}
                height={520}
                priority
                className="ot-hero-img"
              />
            )}
            <div className="ot-frame-badge">{mediaSettings.heroBadgeText || 'Our Collective'}</div>
          </div>
        </div>
      </section>

      {/* ─── 2. STATS BAR ─── */}
      <div className="ot-stats-bar" role="region" aria-label="MaaJanki agency key statistics">
        <div className="ot-stat-item">
          <span className="ot-stat-num" aria-label="7 plus team members">
            7<span className="ot-stat-unit" aria-hidden="true">+</span>
          </span>
          <span className="ot-stat-label">Team Members</span>
        </div>
        <div className="ot-stat-item">
          <span className="ot-stat-num" aria-label="2 years of experience">
            2<span className="ot-stat-unit" aria-hidden="true">yr+</span>
          </span>
          <span className="ot-stat-label">Experience</span>
        </div>
        <div className="ot-stat-item">
          <span className="ot-stat-num" aria-label="10 plus projects delivered">
            10<span className="ot-stat-unit" aria-hidden="true">+</span>
          </span>
          <span className="ot-stat-label">Projects Delivered</span>
          <Link href="/portfolio" className="ot-stat-link">
            View Portfolio →
          </Link>
        </div>
        <div className="ot-stat-item">
          <span className="ot-stat-num" aria-label="10 plus countries served">
            10<span className="ot-stat-unit" aria-hidden="true">+</span>
          </span>
          <span className="ot-stat-label">Countries Served</span>
          <Link href="/locations" className="ot-stat-link">
            Our Locations →
          </Link>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="ot-divider" aria-hidden="true">
        <div className="ot-divider-line"></div>
        <div className="ot-divider-diamond"></div>
        <div className="ot-divider-line"></div>
      </div>

      {/* ─── 3. LEADERSHIP SECTION ─── */}
      <section className="ot-leadership" id="leadership" aria-label="MaaJanki Web Tech leadership">
        <div className="ot-sec-header">
          <p className="ot-sec-label">At The Helm</p>
          <h2 className="ot-sec-title">
            Our <span>Leadership</span>
          </h2>
          <p className="ot-sec-desc">
            The visionary steering strategy, delivery, and client relationships at MaaJanki Web Tech. Read more{' '}
            <Link href="/about">about our agency</Link>.
          </p>
        </div>

        <div className="ot-leadership-grid" role="list" aria-label="Leadership profiles">
          {leaders.map((leader, index) => {
            const key = leader._id || leader.id || `leader-${index}`;
            const isDataUrl = Boolean(leader.photo && leader.photo.startsWith('data:'));
            return (
              <div key={key} className="ot-leader-card" role="listitem">
                <div className="ot-leader-circle">
                  <div className="ot-ring-outer" aria-hidden="true"></div>
                  <div className="ot-ring-inner" aria-hidden="true"></div>
                  <div className="ot-img-wrap">
                    <Image
                      src={leader.photo}
                      alt={`${leader.name} - ${leader.role} at MaaJanki Web Tech`}
                      width={250}
                      height={250}
                      priority
                      className="img-fluid"
                      unoptimized={isDataUrl}
                    />
                  </div>
                </div>

                <div className="ot-leader-info">
                  <div className="ot-leader-name">{leader.name}</div>
                  <div className="ot-leader-role">{leader.role}</div>
                  {leader.linkedin && (
                    <div className="ot-leader-social">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ot-social-link"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  )}
                  <button
                    type="button"
                    className="ot-btn-leader"
                    onClick={() => setActiveMember(leader)}
                    aria-label={`View ${leader.name} profile`}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            );
          })}

          {/* ─── Co-Founder Circle Box (Leadership) ─── */}
          {leaders.length < 2 && (
            <div className="ot-leader-card ot-leader-card--placeholder" role="listitem" aria-label="Co-Founder position">
              <div className="ot-leader-circle">
                <div className="ot-ring-outer ot-ring-outer--rev" aria-hidden="true"></div>
                <div className="ot-ring-inner" aria-hidden="true"></div>
                <div
                  className="ot-img-wrap"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at center, #0d1b33 0%, #030814 100%)',
                    borderRadius: '50%',
                    border: '1px solid rgba(253, 106, 2, 0.25)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                    width="110"
                    height="110"
                    aria-hidden="true"
                    style={{ opacity: 0.4 }}
                  >
                    <circle cx="40" cy="28" r="18" fill="#FD6A02" />
                    <ellipse cx="40" cy="72" rx="30" ry="20" fill="#FD6A02" />
                  </svg>
                </div>
              </div>

              <div className="ot-leader-info">
                <div className="ot-leader-name" style={{ color: '#f1f5f9' }}>
                  Co-Founder
                </div>
                <div className="ot-leader-role">
                  Co-Founder
                </div>
                <div
                  style={{
                    marginTop: '8px',
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FD6A02',
                    background: 'rgba(253, 106, 2, 0.1)',
                    border: '1px dashed rgba(253, 106, 2, 0.45)',
                    borderRadius: '20px',
                    padding: '4px 14px',
                  }}
                >
                  Coming Soon
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* DIVIDER */}
      <div className="ot-divider" aria-hidden="true">
        <div className="ot-divider-line"></div>
        <div className="ot-divider-diamond"></div>
        <div className="ot-divider-line"></div>
      </div>

      {/* ─── 4. FULL SQUAD SECTION ─── */}
      <section className="ot-team-section" id="team" aria-label="MaaJanki Web Tech specialist squad">
        <div className="ot-sec-header">
          <p className="ot-sec-label">The Collective</p>
          <h2 className="ot-sec-title">
            The Full <span>Squad</span>
          </h2>
          <p className="ot-sec-desc">
            Designers, developers, strategists, and writers working across{' '}
            <Link href="/services">every service</Link> we offer.
          </p>
        </div>

        <div className="ot-team-grid" role="list" aria-label="Team member profiles">
          {squad.map((member, index) => {
            const key = member._id || member.id || `squad-${index}`;
            const isDataUrl = Boolean(member.photo && member.photo.startsWith('data:'));
            return (
              <div key={key} className="ot-team-card" role="listitem">
                <div
                  className="ot-tc-photo"
                  onClick={() => setActiveMember(member)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveMember(member);
                    }
                  }}
                  aria-label={`View ${member.name} full profile`}
                >
                  <div className="ot-tc-border" aria-hidden="true"></div>
                  <div className="ot-tc-img">
                    <Image
                      src={member.photo}
                      alt={`${member.name} - ${member.role} at MaaJanki Web Tech`}
                      width={150}
                      height={150}
                      unoptimized={isDataUrl}
                    />
                  </div>
                  <div className="ot-tc-overlay" aria-hidden="true">
                    <span className="ot-tc-overlay-icon">✦</span>
                  </div>
                </div>

                <div className="ot-tc-name">{member.name}</div>
                <div className="ot-tc-role">{member.role}</div>

                <button
                  type="button"
                  className="ot-btn-about"
                  onClick={() => setActiveMember(member)}
                  aria-label={`About ${member.name}, ${member.role}`}
                >
                  About
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="ot-divider" aria-hidden="true">
        <div className="ot-divider-line"></div>
        <div className="ot-divider-diamond"></div>
        <div className="ot-divider-line"></div>
      </div>

      {/* ─── 5. MIDDLE BANNER SECTION ─── */}
      <section className="ot-banner-sec" aria-label="MaaJanki team collaboration banner">
        <div className="ot-banner-frame">
          {mediaSettings.middleBannerImage?.startsWith('data:') ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={mediaSettings.middleBannerImage}
              alt="MaaJanki Web Tech digital team awards and events"
              className="ot-banner-img"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          ) : (
            <Image
              src={mediaSettings.middleBannerImage || '/images/pages/main-services-pages/About-Maajanki-Web-Tech.webp'}
              alt="MaaJanki Web Tech digital team collaborating on web development, SEO and performance marketing projects"
              width={1200}
              height={520}
              className="ot-banner-img"
            />
          )}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="ot-divider" aria-hidden="true">
        <div className="ot-divider-line"></div>
        <div className="ot-divider-diamond"></div>
        <div className="ot-divider-line"></div>
      </div>

      {/* ─── 6. WANT TO JOIN US ─── */}
      <section className="ot-join-sec" aria-label="Join the MaaJanki team – careers">
        <div className="ot-join-inner">
          <div>
            <div className="ot-join-lbl">We&apos;re Hiring</div>
            <h2 className="ot-join-ttl">
              Want to Join Our <span>Team?</span>
            </h2>
            <p className="ot-join-desc">
              We&apos;re always looking for extraordinary people who care deeply about craft, collaboration, and doing work that matters. If that sounds like you, let&apos;s talk.
            </p>
            <div className="ot-join-links">
              <Link href="/about">About MaaJanki</Link>
              <Link href="/portfolio">Our Portfolio</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <Link href="/careers" className="ot-btn-join" aria-label="View open roles at MaaJanki – careers page">
            See Open Roles
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="ot-divider" aria-hidden="true">
        <div className="ot-divider-line"></div>
        <div className="ot-divider-diamond"></div>
        <div className="ot-divider-line"></div>
      </div>

      {/* ─── 7. KEEP EXPLORING ─── */}
      <section className="ot-explore" aria-label="Explore more of MaaJanki Web Tech">
        <div className="ot-sec-header">
          <p className="ot-sec-label">Keep Exploring</p>
          <h2 className="ot-sec-title">
            More From <span>MaaJanki</span>
          </h2>
          <p className="ot-sec-desc">Now that you&apos;ve met the team, here&apos;s where to go next.</p>
        </div>

        <div className="ot-explore-grid">
          <Link href="/about" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaBuilding />
            </span>
            <div className="ot-explore-title">About Us</div>
            <p className="ot-explore-desc">Our story, mission, and how MaaJanki became a full-service digital transformation agency.</p>
            <span className="ot-explore-arrow">Read More →</span>
          </Link>

          <Link href="/services" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaLayerGroup />
            </span>
            <div className="ot-explore-title">Our Services</div>
            <p className="ot-explore-desc">Next.js development, advanced SEO, branding, graphic design, and performance marketing.</p>
            <span className="ot-explore-arrow">View Services →</span>
          </Link>

          <Link href="/portfolio" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaImages />
            </span>
            <div className="ot-explore-title">Portfolio</div>
            <p className="ot-explore-desc">250+ projects delivered across industries — see the work our team has shipped.</p>
            <span className="ot-explore-arrow">See Projects →</span>
          </Link>

          <Link href="/industries" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaIndustry />
            </span>
            <div className="ot-explore-title">Industries We Serve</div>
            <p className="ot-explore-desc">From D2C to healthcare & tech enterprises — see how we tailor strategy by industry.</p>
            <span className="ot-explore-arrow">Explore →</span>
          </Link>

          <Link href="/careers" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaUserPlus />
            </span>
            <div className="ot-explore-title">Careers</div>
            <p className="ot-explore-desc">We&apos;re hiring. Join the team you just met — see current open roles and internships.</p>
            <span className="ot-explore-arrow">View Openings →</span>
          </Link>

          <Link href="/blog" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaPenNib />
            </span>
            <div className="ot-explore-title">Insights Blog</div>
            <p className="ot-explore-desc">SEO guides, marketing insights, and technical case studies from our expert team.</p>
            <span className="ot-explore-arrow">Read Blog →</span>
          </Link>

          <Link href="/contact" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaEnvelopeOpenText />
            </span>
            <div className="ot-explore-title">Contact Us</div>
            <p className="ot-explore-desc">Ready to start a project? Send us your requirements for a quick, transparent quote.</p>
            <span className="ot-explore-arrow">Get In Touch →</span>
          </Link>

          <Link href="/faqs" className="ot-explore-card">
            <span className="ot-explore-icon" aria-hidden="true">
              <FaQuestionCircle />
            </span>
            <div className="ot-explore-title">FAQs</div>
            <p className="ot-explore-desc">Common questions about working with MaaJanki Web Tech, answered in full detail.</p>
            <span className="ot-explore-arrow">View FAQs →</span>
          </Link>
        </div>
      </section>

      {/* ─── 8. PRE-FOOTER CTA AUDIT ─── */}
      <section className="ot-cta-audit" id="audit-cta" aria-label="Request a free digital marketing audit from MaaJanki Web Tech">
        <div className="ot-cta-audit-deco" aria-hidden="true"></div>
        <div className="ot-cta-audit-deco-2" aria-hidden="true"></div>

        <div className="ot-cta-audit-left">
          <div className="ot-cta-audit-eyebrow">Free Audit</div>
          <h2 className="ot-cta-audit-title">Your Ideas, Our Innovation, Endless Impact</h2>
          <p className="ot-cta-audit-sub">
            Get in touch with us and send some basic info for a quick, no-obligation audit of your website and marketing performance.
          </p>
        </div>

        <div className="ot-cta-audit-right">
          <Link href="/contact" className="ot-btn-audit" aria-label="Get a free digital marketing audit from MaaJanki Web Tech">
            Get A Free Audit <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ─── 9. INTERACTIVE MEMBER BIO MODAL ─── */}
      {activeMember && (
        <div
          className="ot-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveMember(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-member-name"
        >
          <div className="ot-modal">
            <button
              type="button"
              className="ot-modal-close"
              onClick={() => setActiveMember(null)}
              aria-label="Close team member profile"
            >
              <FaTimes />
            </button>

            <div className="ot-modal-head">
              <div className="ot-modal-avi">
                <Image
                  src={activeMember.photo}
                  alt={`${activeMember.name} portrait`}
                  width={96}
                  height={96}
                  unoptimized={Boolean(activeMember.photo && activeMember.photo.startsWith('data:'))}
                />
              </div>
              <div>
                <div className="ot-modal-name" id="modal-member-name">
                  {activeMember.name}
                </div>
                <div className="ot-modal-role">{activeMember.role}</div>
                {activeMember.linkedin && (
                  <div className="ot-modal-social">
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ot-social-link"
                      aria-label={`${activeMember.name} LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="ot-modal-divider" aria-hidden="true"></div>

            <div className="ot-modal-body">
              <p className="ot-modal-bio">{activeMember.bio}</p>
              {activeMember.bio2 && <p className="ot-modal-bio">{activeMember.bio2}</p>}
              {activeMember.bio3 && <p className="ot-modal-bio">{activeMember.bio3}</p>}

              {activeMember.coreExpertise && activeMember.coreExpertise.length > 0 && (
                <div className="ot-modal-expertise-box">
                  <h4>Core Expertise</h4>
                  <ul className="ot-modal-expertise-list">
                    {activeMember.coreExpertise.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeMember.tags && activeMember.tags.length > 0 && (
                <div className="ot-modal-tags">
                  {activeMember.tags.map((tag, i) => (
                    <span key={i} className="ot-modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
