'use client';

import React from "react";
import Image from 'next/image';

import Link from 'next/link';
import LogoLoop from '@/components/LogoLoop/LogoLoop';
import Magnet from '@/components/Magnet/Magnet';
import '@/app/styles/Home.css';

// Import icons from react-icons
import {
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaDatabase,
  FaShopify,
  FaRobot,

  // New Icons
  FaWhatsapp,
  FaLaptopCode,
  FaPalette,
  FaPaintBrush,
  FaPencilRuler,
  FaSearchDollar,
  FaFileAlt,
  FaBoxes,
  FaHashtag,
  FaShieldVirus,
  FaCloud,
} from "react-icons/fa";

import { SiTailwindcss, SiWoocommerce } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

function Home() {
  const counters = [
    {
      // number: "500+",
      img: "/images/happy-clients.png",
      title: "Client Happiness",
      alt: "Happy clients served by MaaJanki Web Tech",
    },
    {
      // number: "250+",
      img: "/images/project-complete.png",
      title: "Top-Rated Projects",
      alt: "Successful digital marketing and web projects",
    },
    {
      // number: "150+",
      img: "/images/design-complete.png",
      title: "Creative Masterpieces",
      alt: "Creative design and branding projects",
    },
    {
      // number: "10+",
      img: "/images/experience.png",
      title: "Team of Experts",
      alt: "Experienced digital marketing professionals",
    },
  ];

  const clients = [
    {
      src: "/images/client-logo/vica-logo.png",
      alt: "Vica logo – client of MaaJanki Web Tech",
      title: "Vica | Digital Marketing Client",
    },
    {
      src: "/images/client-logo/Meleyrs.png",
      alt: "Meleyrs logo – branding and marketing client",
      title: "Meleyrs | Branding & Marketing Client",
    },
    {
      src: "/images/client-logo/Birbal-Bits.png",
      alt: "Birbal Bits logo – website development client",
      title: "Birbal Bits | Website Development Client",
    },
    {
      src: "/images/client-logo/subhchandra.png",
      alt: "Subhchandra logo – SEO and branding client",
      title: "Subhchandra | SEO & Branding Client",
    },
    {
      src: "/images/client-logo/Fresheat.png",
      alt: "Fresheat logo – performance marketing client",
      title: "Fresheat | Performance Marketing Client",
    },
  ];

  const techs = [
    {
      name: "HTML5",
      icon: <FaHtml5 title="HTML5" />,
      title: "HTML5 – Web Structure",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt title="CSS3" />,
      title: "CSS3 – Styling & Layout",
    },
    {
      name: "JavaScript",
      icon: <FaJs title="JavaScript" />,
      title: "JavaScript – Interactive Web Logic",
    },
    {
      name: "WordPress",
      icon: <FaWordpress title="WordPress" />,
      title: "WordPress – CMS Development",
    },
    {
      name: "WooCommerce",
      icon: <SiWoocommerce title="WooCommerce" />,
      title: "WooCommerce – eCommerce Platform",
    },
    {
      name: "React JS",
      icon: <FaReact title="React JS" />,
      title: "React JS – Frontend Development",
    },
    {
      name: "PHP",
      icon: <FaPhp title="PHP" />,
      title: "PHP – Backend Development",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss title="Tailwind CSS" />,
      title: "Tailwind CSS – Utility-First CSS",
    },
    {
      name: "MySQL",
      icon: <FaDatabase title="MySQL" />,
      title: "MySQL – Database Management",
    },
    {
      name: "Shopify",
      icon: <FaShopify title="Shopify" />,
      title: "Shopify – eCommerce Solutions",
    },
    {
      name: "Node JS",
      icon: <FaNodeJs title="Node JS" />,
      title: "Node JS – Server-Side JavaScript",
    },
    {
      name: "UI/UX Design",
      icon: <MdDesignServices title="UI/UX Design" />,
      title: "UI/UX – User Experience Design",
    },
  ];

  const collaborators = [
    {
      src: "/images/partner/google-partner.png",
      alt: "Google Partner – MaaJanki Web Tech",
      title: "Google Partner",
    },
    {
      src: "/images/partner/meta.png",
      alt: "Meta Business Partner",
      title: "Meta (Facebook & Instagram)",
    },
    {
      src: "/images/partner/razorpay.png",
      alt: "Razorpay payment partner",
      title: "Razorpay",
    },
    {
      src: "/images/partner/godaddy.webp",
      alt: "GoDaddy domain and hosting partner",
      title: "GoDaddy",
    },
    {
      src: "/images/partner/zoho.webp",
      alt: "Zoho CRM and business tools partner",
      title: "Zoho",
    },
    {
      src: "/images/partner/canva.png",
      alt: "Canva design tool partner",
      title: "Canva",
    },
    {
      src: "/images/partner/hostinger.webp",
      alt: "Hostinger hosting partner",
      title: "Hostinger",
    },
    {
      src: "/images/partner/google_ads.webp",
      alt: "Google Ads certified tools",
      title: "Google Ads",
    },
    {
      src: "/images/partner/shopify.png",
      alt: "Shopify eCommerce platform partner",
      title: "Shopify",
    },
    {
      src: "/images/client-logo/Birbal-Bits.png",
      alt: "Birbal Bits technology collaborator",
      title: "Birbal Bits",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      url: formData.get("url"),
      email: formData.get("email"),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: data.url,
          email: data.email,
          service: "Free Website Audit",
          source: "website-audit"
        }),
      });

      const res = await response.json();
      if (response.ok && res.success) {
        alert("Website audit requested successfully!");
        e.target.reset();
      } else {
        alert(res.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  const services = [
    {
      title: "AI Automation",
      desc: "Automate repetitive business tasks with AI-powered workflows, chatbots, and intelligent systems that improve efficiency and reduce manual effort.",
      icon: <FaRobot />,
    },
    {
      title: "Whatsapp Marketing & CRM",
      desc: "Manage customer communication, automate WhatsApp campaigns, track leads, and build lasting relationships through an integrated CRM solution.",
      icon: <FaWhatsapp />,
    },
    {
      title: "Software & SaaS Development",
      desc: "Build scalable software and SaaS platforms with secure architecture, modern technologies, and cloud-ready infrastructure for business growth.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Application Development",
      desc: "Develop high-performance Android, iOS, and cross-platform mobile applications with intuitive user experiences and robust functionality.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Website Development",
      desc: "Custom, responsive, and SEO-friendly websites designed to strengthen your online presence, generate leads, and support long-term business growth.",
      icon: <FaCode />,
      link: "/services/web-development",
    },
    {
      title: "Branding",
      desc: "Create a memorable brand identity with professional logo design, brand strategy, visual assets, and consistent messaging across all platforms.",
      icon: <FaPalette />,
      link: "/services/branding",
    },
    {
      title: "Graphic Design",
      desc: "Design eye-catching graphics for social media, marketing materials, advertisements, and print media that leave a lasting impression.",
      icon: <FaPaintBrush />,
      link: "/services/graphic-design",
    },
    {
      title: "UI/UX Design",
      desc: "Design intuitive user interfaces and seamless digital experiences that improve usability, engagement, and customer satisfaction.",
      icon: <FaPencilRuler />,
      link: "/services/ui-ux-design",
    },
    {
      title: "Performance Marketing",
      desc: "Drive measurable business growth with ROI-focused advertising campaigns across Google Ads, Meta Ads, LinkedIn Ads, and other digital platforms.",
      icon: <FaBullhorn />,
      link: "/services/performance-marketing",
    },
    {
      title: "SEO",
      desc: "Improve search engine rankings with technical SEO, on-page optimization, content strategy, and high-quality link building.",
      icon: <FaSearchDollar />,
      link: "/services/seo",
    },
    {
      title: "Content Writing",
      desc: "Create engaging, SEO-optimized content for websites, blogs, product pages, and marketing campaigns that convert visitors into customers.",
      icon: <FaFileAlt />,
      link: "/services/content-writing",
    },
    {
      title: "Product Listing",
      desc: "Optimize product listings for Amazon, Flipkart, Meesho, Shopify, and other marketplaces to increase visibility and sales.",
      icon: <FaBoxes />,
      link: "/services/products-listing",
    },
    {
      title: "SMO",
      desc: "Increase brand awareness and customer engagement through strategic social media optimization and content management.",
      icon: <FaHashtag />,
      link: "/services/smo",
    },
    {
      title: "Cyber Security",
      desc: "Protect your business with advanced cybersecurity solutions including vulnerability assessment, data protection, and network security.",
      icon: <FaShieldVirus />,
    },
    {
      title: "Cloud Services",
      desc: "Leverage secure cloud solutions for hosting, storage, migration, backup, and scalable infrastructure to support your digital operations.",
      icon: <FaCloud />,
    },
  ];

  return (
    <>
      {/* SEO META TAGS */}

      

      {/* Hero Section */}
      <section className="custom-banner">
        <Image priority fetchPriority="high" sizes="(max-width: 1200px) 100vw, 1200px" src="/images/pages/main-services-pages/Home-page-image-Maajanki.webp" width={1200} height={675} alt="Maajanki Web Tech – Custom Brand Identity and Design Solutions" title="Maajanki Web Tech – Website Development & Digital Marketing Agency in India" data-no-retina=""/>

        <div className="banner-overlay">
          <div className="banner-content">
            <h1>
              Global Web Development & Digital Marketing Agency | MaaJanki Web Tech
            </h1>
            <div className="aeo-definition-box">
              <p suppressHydrationWarning>
                MaaJanki Web Tech refers to the premier digital marketing and website development agency in Bihar, India, providing data-driven search engine optimization (SEO), social media optimization (SMO), custom web application design, performance marketing, and digital branding solutions to scale businesses globally.
              </p>
            </div>

            <div className="banner-buttons">
              <Magnet padding={30} magnetStrength={10}>
                <Link href="/about" className="btn2">
                  Know More
                </Link>
              </Magnet>
              <Magnet padding={30} magnetStrength={10}>
                <Link href="/contact" className="btn1">
                  Contact Us
                </Link>
              </Magnet>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Promo Section Start */}
      <section className="promo-section ptb-100" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center">
            {/* Service 1: Website Optimization */}
            <div className="col-md-6 col-lg-4">
              <div className="promo-single-wrap text-center">
                <div className="promo-icon mb-4">
                  <Image
                    src="/images/pages/main-services-pages/search-engine.svg"
                    alt="Website Optimization and SEO Services"
                    title="Website Optimization & SEO Services by MaaJanki Web Tech"
                    width="65"
                    height="65"
                   />
                  <span className="number-bg">01</span>
                </div>
                <div className="promo-info">
                  <strong className="promo-subtitle">
                    Speed. Structure. Search Ready.
                  </strong>
                  <h3 className="promo-title">Website Optimization Services</h3>
                  <p>
                    As a professional website development agency, we optimize
                    website speed, mobile usability, and technical SEO to
                    improve user experience, search visibility, and long-term
                    performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: Increase Website Traffic */}
            <div className="col-md-6 col-lg-4">
              <div className="promo-single-wrap text-center">
                <div className="promo-icon mb-4">
                  <Image
                    src="/images/pages/main-services-pages/increase.svg"
                    alt="Increase Website Traffic with SEO"
                    title="Increase Website Traffic with SEO & Digital Marketing"
                    width="65"
                    height="65"
                   />
                  <span className="number-bg">02</span>
                </div>
                <div className="promo-info">
                  <strong className="promo-subtitle">
                    Targeted Traffic. Real Growth.
                  </strong>
                  <h3 className="promo-title">Website Traffic Growth</h3>
                  <p>
                    We drive qualified website traffic using proven SEO
                    strategies, content optimization, and performance-focused
                    planning bringing visitors who are actively searching for
                    your services.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Digital Marketing */}
            <div className="col-md-6 col-lg-4">
              <div className="promo-single-wrap text-center">
                <div className="promo-icon mb-4">
                  <Image
                    src="/images/pages/main-services-pages/bullhorn.svg"
                    alt="Digital Marketing Agency Services"
                    title="Digital Marketing Services by MaaJanki Web Tech"
                    width="65"
                    height="65"
                   />
                  <span className="number-bg">03</span>
                </div>
                <div className="promo-info">
                  <strong className="promo-subtitle">
                    Visibility. Engagement. Results.
                  </strong>
                  <h3 className="promo-title">Digital Marketing Services</h3>
                  <p>
                    Our digital marketing agency delivers data-driven campaigns
                    across SEO, social media, and paid channels to increase
                    brand awareness, generate leads, and support consistent
                    business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promo Section End */}

      {/* About Section */}
      <section className="services-overview-section">
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>

        <div className="showcase-container">
          <div className="showcase-grid">
            <div className="visual-area">
              <div className="image-container">
                <div className="main-image">
                  <Image
                    src="/images/pages/main-services-pages/About-Maajanki-Web-Tech.webp"
                    width="1080"
                    height="1080"
                    alt="Website Development and Digital Marketing Agency in India"
                    title="Maajanki Web Tech – Website Development & Digital Marketing Agency in India"
                   />
                </div>
                <div className="decorative-elements"></div>
              </div>
            </div>

            <div className="content-area">
              <div className="section-badge">About Us</div>

              <h2 className="main-heading">
                Empowering Brands{" "}
                <span className="highlight-text">
                  Globally with Custom Web Solutions & Performance Marketing
                </span>{" "}
                <strong>MaaJanki Web Tech</strong>
              </h2>

              <p className="content-text">
                <strong>MaaJanki Web Tech</strong> is a premier digital
                marketing and website development company, headquartered in
                Bihar, India, serving clients across India and globally. We help businesses,
                startups, SMEs, and established brands build a powerful online presence
                through remote collaboration, time-zone aligned communication, and expert SEO,
                web design, social media marketing, Google Ads, branding, and graphic design.
              </p>

              <div className="services-highlight">
                <p className="content-text">
                  From custom website development services to complete digital
                  marketing services SEO, PPC/Google Ads, social media marketing
                  (SMO), content writing, performance marketing and branding our
                  expert team in Bihar works closely with you to rank on Google,
                  attract high-quality leads, and drive real business growth
                  across India.
                </p>
              </div>

              <p className="content-text">
                Whether you are a startup in Bihar, an SME across India, or a
                brand looking to expand globally,{" "}
                <strong>MaaJanki Web Tech</strong> is your trusted digital
                growth partner. If you need the best website development company
                or digital marketing agency in Bihar, India get a{" "}
                <strong>free consultation today</strong> and let's grow your
                business together.
              </p>

              <div style={{ textAlign: "center" }}>
                <Magnet padding={30} magnetStrength={10}>
                  <Link href="/contact" className="btn-outline-mj mt-4">
                    Contact Us
                  </Link>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* About Section with Promo */}
      <section
        className="promo-section ptb-100"
        style={{ backgroundColor: "#042544", color: "white" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up-left">
              <div className="about-content-wrap">
                <h2 style={{ color: "white", paddingTop: "20px" }}>
                  Why Every Business in Bihar & India Needs Digital Marketing in
                  2026
                </h2>

                <p>
                  In today's digital-first India, businesses that are not online
                  are losing customers every day. With 900+ million internet
                  users in India, digital marketing is the most cost-effective
                  way to reach your target audience. We serve clients with targeted SEO and web development in local hubs like Bagaha, Motihari, and Patna, as well as major cities across India and globally.
                </p>

                <ul className="check-list-info">
                  <li>
                    <strong>Expert Digital Strategy Team</strong> – As a
                    professional digital marketing agency, we create customized
                    strategies aligned with your business goals to deliver
                    measurable and sustainable growth.
                  </li>

                  <li>
                    <strong>Data-Driven Marketing Execution</strong> – Our
                    digital marketing services are powered by analytics, user
                    insights, and performance tracking to maximize ROI across
                    SEO, paid ads, and social platforms.
                  </li>

                  <li>
                    <strong>Reliable Support & Transparency</strong> – We
                    believe in clear communication and ongoing support, ensuring
                    you stay informed and confident at every stage of your
                    marketing journey.
                  </li>

                  <li>
                    <strong>Audience-Focused Growth Approach</strong> – By
                    focusing on user intent and experience, we help businesses
                    improve engagement, trust, and conversion rates through
                    effective digital marketing strategies.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up-right">
              <div
                className="about-us-img"
                style={{ padding: "20px", marginTop: "50px" }}
              >
                <Image
                  src="/images/pages/main-services-pages/t1-hero-img.svg"
                  width="570"
                  height="450"
                  alt="Digital Marketing Agency Services in India"
                  title="Maajanki Web Tech – Website Development & Digital Marketing Agency in India"
                  className="img-fluid about-single-img"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section with Promo End */}

      {/* Our Vision Section */}
      <section className="services-overview-section">
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>

        <div className="showcase-container">
          <div className="showcase-grid reverse-mobile">
            <div className="visual-area" data-aos="fade-up-right">
              <div className="image-container">
                <div className="main-image">
                  <Image
                    src="/images/pages/main-services-pages/about.webp"
                    width="1080"
                    height="1080"
                    alt="Website Development and Digital Marketing Services"
                    title="Website Development & Digital Marketing Services in India"
                   />
                </div>
                <div className="decorative-elements"></div>
              </div>
            </div>

            <div className="content-area" data-aos="fade-up-left">
              <div className="section-badge">Our Vision</div>

              <h2 className="main-heading" style={{ fontSize: "30px" }}>
                Helping Businesses Grow with{" "}
                <span className="highlight-text">
                  Smart Website Development & Digital Marketing
                </span>{" "}
                Solutions
              </h2>

              <p className="content-text">
                <strong>MaaJanki Web Tech</strong> aims to empower businesses by
                building strong digital foundations through professional website
                development services and result-oriented digital marketing
                strategies. Our vision is to help brands improve online
                visibility and achieve consistent business growth in major metros like Delhi, Mumbai, and Bengaluru, as well as international markets including the United States and the United Kingdom.
              </p>

              <div className="services-highlight">
                <p className="content-text">
                  We offer a complete range of digital marketing services
                  including SEO, local SEO, PPC advertising, content marketing,
                  and social media marketing. Each solution is carefully planned
                  to improve search engine rankings, strengthen brand presence,
                  and drive quality traffic across digital platforms.
                </p>
              </div>

              <p className="content-text">
                What sets us apart is our data-driven approach. We rely on
                competitor research, website performance analysis, and detailed
                SEO audits to identify growth opportunities. Our expertise also
                extends to email marketing, conversion rate optimization (CRO),
                and user engagement strategies that turn visitors into leads and
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision Section End */}

      {/* Call to Action Section */}
      <section
        className="call-to-action ptb-70"
        style={{ background: " #042544" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-heading text-center text-white mb-5">
                <h2 className="text-white">Get a Free Website Audit</h2>
                <p className="lead">
                  Want to know how well your website is performing? Get a
                  <strong> free website audit</strong> from our expert team to
                  evaluate your site’s speed, SEO health, mobile responsiveness,
                  and overall user experience. Discover what’s working, what
                  needs improvement, and how to increase traffic, leads, and
                  conversions completely free.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="analysis-form-wrap text-center">
                  <div className="row align-items-center g-3">
                    <div className="col-lg-5 col-md-6">
                      <div className="form-group analysis-form-group mb-0">
                        <input
                          type="url"
                          name="url"
                          className="form-control"
                          placeholder="Enter your website URL"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6">
                      <div className="form-group analysis-form-group mb-0">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-12 d-flex justify-content-center">
                      <div
                        className="form-group mb-0"
                        style={{ marginTop: "12px" }}
                      >
                        <Magnet padding={20} magnetStrength={10}>
                          <input
                            type="submit"
                            value="Get Free Audit"
                            className="btn btn-primary text-center"
                            style={{ width: "150px" }}
                          />
                        </Magnet>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="cta-image d-none d-lg-block d-md-block">
          <Image
            src="/images/pages/main-services-pages/cta-1-man.svg"
            width="200"
            height="238"
            className="img-left"
            alt="Website audit illustration"
            title="MaaJanki Web Tech – Website Development & Digital Marketing Agency in India"
            loading="lazy"
           />

          <Image
            src="/images/pages/main-services-pages/cta-1-mike.svg"
            width="200"
            height="124"
            className="img-right"
            alt="Digital marketing audit illustration"
            title="Free Digital Marketing Audit by MaaJanki Web Tech"
            loading="lazy"
           />
        </div>
      </section>
      {/* Call to Action Section End */}

      {/* Call to Action Progressbar Section */}
      <section
        className="call-to-action ptb-100"
        style={{ background: " #FD6A02" }}
      >
        <div className="container">
          <div className="row">
            {[
              {
                percent: 90,
                title: "SEO Keyword Strategy",
                subtitle: "High-Intent Search Terms",
              },
              {
                percent: 90,
                title: "Performance Monitoring",
                subtitle: "Analytics & Conversion Data",
              },
              {
                percent: 90,
                title: "Market & Competitor Research",
                subtitle: "Industry & Rival Insights",
              },
              {
                percent: 90,
                title: "Digital Growth Execution",
                subtitle: "Website & Marketing Reach",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div className="circle-box text-center">
                  <div className="chart" data-percent={item.percent}>
                    <span>{item.percent}%</span>
                  </div>
                </div>
                <div className="progress-info text-center mt-3">
                  <strong className="color-secondary" style={{ color: "#fff" }}>
                    {item.title}
                  </strong>
                  <p
                    className="text-white mb-0"
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Progressbar Section End */}

      {/* Services Section */}
      <section className="services-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <strong className="color-secondary">Our Services</strong>
                <h2 style={{ color: "#fff" }}>
                  What We Can Do for Your Business
                </h2>
                <p className="lead" style={{ color: "#fff" }}>
                  <strong>MaaJanki Web Tech</strong> offers complete website
                  development and digital marketing services designed to help
                  brands grow online.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {services.map((service, index) => {
              const cardContent = (
                <div className="services-single text-center p-5 rounded h-100">
                  <div className="service-icon mb-4 text-4xl d-flex justify-content-center align-items-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="mb-0">{service.desc}</p>
                </div>
              );

              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                  {service.link ? (
                    <Link href={service.link} className="service-link">
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="service-link-static" style={{ cursor: "default" }}>
                      {cardContent}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Services Section End */}

      {/* Tech Stack Loop Section */}
      <section className="tech-loop-section ptb-100" style={{ backgroundColor: "#FD6A02", overflow: "hidden", borderBottom: "1px solid #eaeaea", padding: "60px 0" }}>
        <div className="container">
          <div className="section-heading text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h5 className="h6 text-uppercase" style={{ color: "#ffffff", letterSpacing: "1.5px", fontWeight: "600", marginBottom: "12px", opacity: 0.9 }}>
              OUR TECH STACK
            </h5>
            <h2 style={{ color: "#ffffff", fontWeight: "700", fontSize: "36px", marginBottom: "16px" }}>
              Platforms & Tools We Work With
            </h2>
            <p className="lead" style={{ color: "#ffffff", fontSize: "16px", lineHeight: "1.6", opacity: 0.9 }}>
              We use industry-leading technologies and platforms to build fast, scalable, and high-performing digital products.
            </p>
          </div>
          <div className="tech-loop-wrapper" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <LogoLoop
              logos={techs.map(tech => ({ node: tech.icon, title: tech.name }))}
              speed={40}
              direction="left"
              logoHeight={48}
              gap={80}
              scaleOnHover
              fadeOut
              fadeOutColor="#FD6A02"
              ariaLabel="Technologies we work with line 1"
            />
            <LogoLoop
              logos={techs.map(tech => ({ node: tech.icon, title: tech.name }))}
              speed={40}
              direction="right"
              logoHeight={48}
              gap={80}
              scaleOnHover
              fadeOut
              fadeOutColor="#FD6A02"
              ariaLabel="Technologies we work with line 2"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        className="products-section ptb-100"
        style={{ backgroundColor: "#042544" }}
      >
        <div className="container">
          <div className="section-heading text-center mb-5">
            <strong className="color-secondary" style={{ color: "#FD6A02" }}>
              Our Products
            </strong>
            <h2 style={{ color: "#fff" }}>Featured Digital Solutions</h2>
            <p className="lead" style={{ color: "#e2e8f0" }}>
              Explore our innovative digital products and pre-built solutions
              designed to accelerate your business growth.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="product-card text-center p-4 rounded h-100 d-flex flex-column"
                style={{
                  background: "#FD6A02",
                  border: "1px solid #fff",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="product-image-container mb-3">
                  <Image
                    src="/images/products/invobill.webp"
                    alt="InvoBill"
                    title="InvoBill – GST Invoicing & Billing Software by MaaJanki Web Tech"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                    loading="lazy"
                   width={600} height={400} />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#ffffff" }}
                >
                  InvoBill
                </h3>
                <p style={{ color: "#ffffff", fontSize: "14px" }}>
                  A hybrid billing platform for Indian businesses. Design
                  tax-compliant GST invoices in 60 seconds online or offline.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://invobill.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-mj"
                    style={{ padding: "8px 20px", fontSize: "14px" }}
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="product-card text-center p-4 rounded h-100 d-flex flex-column"
                style={{
                  background: "#FD6A02",
                  border: "1px solid #fff",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="product-image-container mb-3">
                  <Image
                    src="/images/products/wacrm.webp"
                    alt="WaCRM"
                    title="WaCRM – WhatsApp Business API CRM by MaaJanki Web Tech"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                    loading="lazy"
                   width={600} height={400} />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#fff" }}
                >
                  WaCRM
                </h3>
                <p style={{ color: "#ffffff", fontSize: "14px" }}>
                  A premium, fully self-hostable WhatsApp® Business API CRM with
                  a multi-agent shared inbox and AI chat routing.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://github.com/Ashishkrji/WaCRM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-mj"
                    style={{ padding: "8px 20px", fontSize: "14px" }}
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="product-card text-center p-4 rounded h-100 d-flex flex-column"
                style={{
                  background: "#FD6A02",
                  border: "1px solid #fff",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="product-image-container mb-3">
                  <Image
                    src="/images/products/dukandost-pro.webp"
                    alt="DukanDost Pro"
                    title="DukanDost Pro – Retail Business Operating System by MaaJanki Web Tech"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                    loading="lazy"
                   width={600} height={400} />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#fff" }}
                >
                  DukanDost Pro
                </h3>
                <p style={{ color: "#ffffff", fontSize: "14px" }}>
                  A full-stack Business Operating System for modern retail with
                  AI-powered invoicing and Digital Khata.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://github.com/Ashishkrji/DukanDost-Pro-Website-Mobile-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-mj"
                    style={{ padding: "8px 20px", fontSize: "14px" }}
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="product-card text-center p-4 rounded h-100 d-flex flex-column"
                style={{
                  background: "#FD6A02",
                  border: "1px solid #fff",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="product-image-container mb-3">
                  <Image
                    src="/images/products/nexus-saas.webp"
                    alt="Nexus SaaS"
                    title="Nexus SaaS – AI Local Reputation Management System by MaaJanki Web Tech"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                    loading="lazy"
                   width={600} height={400} />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#fff" }}
                >
                  Nexus SaaS
                </h3>
                <p style={{ color: "#ffffff", fontSize: "14px" }}>
                  An AI-powered local reputation management system that
                  integrates with Google Business Profile API.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://github.com/Ashishkrji/Nexus-SaaS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-mj"
                    style={{ padding: "8px 20px", fontSize: "14px" }}
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="product-card text-center p-4 rounded h-100 d-flex flex-column"
                style={{
                  background: "#FD6A02",
                  border: "1px solid #fff",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="product-image-container mb-3">
                  <Image
                    src="/images/products/tailwind-templates.webp"
                    alt="Tailwind Templates"
                    title="Tailwind Templates – Landing Page Bundle by MaaJanki Web Tech"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                    loading="lazy"
                   width={600} height={400} />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#fff" }}
                >
                  Tailwind Templates
                </h3>
                <p style={{ color: "#ffffff", fontSize: "14px" }}>
                  An ultimate bundle of 50+ modern, fully responsive landing
                  page templates built with HTML5 & Tailwind CSS.
                </p>
                <div className="mt-auto">
                  <Link href="/products"
                    className="btn-outline-mj"
                    style={{ padding: "8px 20px", fontSize: "14px" }}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="product-card text-center p-4 rounded h-100 d-flex flex-column"
                style={{
                  background: "#FD6A02",
                  border: "1px solid #fff",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="product-image-container mb-3">
                  <Image
                    src="/images/products/elementor-pro.webp"
                    alt="Elementor Pro"
                    title="Elementor Pro – WordPress Website Builder Solutions by MaaJanki Web Tech"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                    loading="lazy"
                   width={600} height={400} />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#fff" }}
                >
                  Elementor Pro
                </h3>
                <p style={{ color: "#ffffff", fontSize: "14px" }}>
                  The world's leading drag-and-drop WordPress website builder.
                  Build premium WooCommerce storefronts with ease.
                </p>
                <div className="mt-auto">
                  <Link href="/products"
                    className="btn-outline-mj"
                    style={{ padding: "8px 20px", fontSize: "14px" }}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section End */}

      {/* Portfolio Section */}
      <section
        className="portfolio-preview-section ptb-100"
        style={{ backgroundColor: "#FD6A02" }}
      >
        <div className="container">
          {/* Section Heading */}
          <div className="section-heading text-center mb-5">
            <h2 className="portfolio-heading">Our Portfolio</h2>
            <p className="lead portfolio-subtitle">
              Explore a selection of our recent website development and digital
              marketing projects that reflect strong design, smart
              functionality, and real-world business use cases.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {[
              {
                title: "E-Commerce Website",
                img: "/images/project/Digital-Products-Hub-Home-Page.webp",
                link: "https://blog.maajankiwebtech.com",
                imgTitle:
                  "E-Commerce Website Development Project by MaaJanki Web Tech",
              },
              {
                title: "AI Portfolio Website",
                img: "/images/project/Ai-agency.webp",
                link: "#",
                imgTitle:
                  "AI Portfolio Website Design & Development – MaaJanki Web Tech",
              },
              {
                title: "AI Voice Generater Landing Page",
                img: "/images/project/AI-Voices-Home-Page.webp",
                link: "#",
                imgTitle:
                  "AI Voice Generater Landing Page Design Project by MaaJanki Web Tech",
              },
              {
                title: "Digital Ads Landing Page",
                img: "/images/project/DigitalAds-Pro.webp",
                link: "#",
                imgTitle: "Digital Ads Landing Page Design – MaaJanki Web Tech",
              },
              {
                title: "Online Food Delivery Platform",
                img: "/images/project/Food-Delivery-App.webp",
                link: "#",
                imgTitle:
                  "Online Food Delivery Platform Website Development Project",
              },
              {
                title: "Restaurant Landing Page",
                img: "/images/project/Gusto-Restaurant-Fine-Dining-Experience.jpg",
                link: "#",
                imgTitle: "Restaurant Landing Page Design – MaaJanki Web Tech",
              },
              {
                title: "Fitness & Gym Landing Page",
                img: "/images/project/GYM-Trainer-Landing.jpg",
                link: "#",
                imgTitle: "Fitness & Gym Landing Page Design Project",
              },
              {
                title: "Tools Converter Platform",
                img: "/images/project/ToolHub-All-in-One.jpg",
                link: "#",
                imgTitle:
                  "Tools Converter Platform Website Development – MaaJanki Web Tech",
              },
            ].map((project, index) => (
              <div key={index} className="preview-column">
                <div
                  className="site-mockup"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <div className="mockup-screen">
                    <Image
                      src={project.img}
                      alt={`${project.title} website design project`}
                      title={project.imgTitle}
                      className="portfolio-img"
                      loading="lazy"
                      width="360"
                      height="360"
                     />
                    <button
                      className="view-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                    >
                      Live Preview
                    </button>
                  </div>
                </div>
                <div className="site-title">{project.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Industries We Transform Section */}
      <section className="industries-section">
        <header className="section-header text-center">
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Industries We Serve
          </h2>

          <p
            className="section-subtitle"
            style={{ color: "#fff", textAlign: "center" }}
          >
            We deliver industry-specific website development and digital
            marketing solutions designed to drive measurable growth, visibility,
            and results.
          </p>
        </header>

        <div className="industries-grid">
          {[
            {
              icon: "🏥",
              title: "Healthcare",
              desc: "Digital marketing and website solutions for hospitals, clinics, and healthcare providers, focused on trust, compliance, and patient engagement through SEO and content strategies.",
            },
            {
              icon: "🛒",
              title: "eCommerce",
              desc: "End-to-end eCommerce growth solutions including website optimization, product SEO, and conversion-focused marketing to increase sales and customer retention.",
            },
            {
              icon: "💰",
              title: "Finance",
              desc: "Secure and compliant digital strategies for banks, fintech startups, and financial services, helping build credibility, visibility, and qualified lead generation.",
            },
            {
              icon: "🏗️",
              title: "Construction",
              desc: "Local SEO, Google Maps optimization, and website development services that help contractors and builders generate local leads and strengthen market presence.",
            },
            {
              icon: "🏠",
              title: "Real Estate",
              desc: "Lead-driven digital marketing and website solutions for real estate professionals to showcase properties, attract buyers, and increase inquiries.",
            },
            {
              icon: "🎓",
              title: "Education",
              desc: "SEO, paid ads, and content strategies for schools, universities, and ed-tech platforms to improve online reach and student enrollment.",
            },
            {
              icon: "🍽️",
              title: "Food & Restaurants",
              desc: "Local SEO, website optimization, and digital campaigns that help restaurants increase visibility, online orders, and footfall.",
            },
            {
              icon: "⚖️",
              title: "Legal Services",
              desc: "SEO-focused website and content strategies for law firms to improve online authority, local visibility, and client acquisition.",
            },
            {
              icon: "💻",
              title: "Technology & SaaS",
              desc: "Scalable website development, technical SEO, and performance marketing solutions for tech companies and SaaS startups.",
            },
            {
              icon: "🚗",
              title: "Automotive",
              desc: "Digital marketing solutions for auto dealers and service centers to improve local search visibility, inquiries, and bookings.",
            },
            {
              icon: "💄",
              title: "Beauty & Fashion",
              desc: "Creative digital strategies for beauty brands and fashion businesses focused on branding, visual content, and social media growth.",
            },
            {
              icon: "💪",
              title: "Fitness & Wellness",
              desc: "SEO, content marketing, and community-driven strategies to help gyms, trainers, and wellness brands grow their client base.",
            },
            {
              icon: "🎨",
              title: "Creative & Media",
              desc: "Portfolio-driven websites and marketing strategies that help creative agencies and media professionals gain visibility and leads.",
            },
            {
              icon: "🏭",
              title: "Manufacturing",
              desc: "B2B-focused website development and SEO solutions designed to generate industrial leads and support long sales cycles.",
            },
            {
              icon: "✈️",
              title: "Travel & Tourism",
              desc: "Website optimization and digital marketing strategies that help travel businesses increase bookings and destination visibility.",
            },
          ].map((industry, index) => (
            <article key={index} className="industry-card" tabIndex="0">
              <header className="card-header">
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-title">{industry.title}</h3>
              </header>
              <p className="industry-description">{industry.desc}</p>
            </article>
          ))}
        </div>
      </section>
      {/* Industries We Transform Section End */}

      {/* Tech Card */}
      <section className="tech-section">
        <div className="tech-inner">
          <div className="tech-card frontend-section">
            <h2>Frontend Development</h2>
            <ul>
              <li>HTML</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Angular JS</li>
              <li>React JS</li>
            </ul>
          </div>

          <div className="tech-card backend-section">
            <h2>Backend Development</h2>
            <ul>
              <li>Node.js</li>
              <li>Python (Django, Flask)</li>
              <li>PHP (Laravel, CodeIgniter)</li>
              <li>Java (Spring Boot)</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>

          <div className="tech-card database-section">
            <h2>Database Management</h2>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>CouchDB</li>
              <li>MSSQL</li>
            </ul>
          </div>

          <div className="tech-card versioncontrol-section">
            <h2>Version Tools</h2>
            <ul>
              <li>Git</li>
              <li>Grunt</li>
              <li>Xdebug</li>
              <li>Subversion</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Tech Card End */}

      {/* Why Choose Us Section Start */}
      <section className="why-choose-us ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-5" data-aos="fade-up-left">
              <div className="why-choose-us-wrap">
                <strong className="color-secondary">Why Choose Us</strong>

                <h3>
                  Trusted Website Development, Digital Marketing & SEO Partner
                  for Business Growth
                </h3>

                <p>
                  <strong>MaaJanki Web Tech</strong> is a result-oriented
                  website development and digital marketing agency focused on
                  delivering measurable business outcomes. We help local businesses establish their search presence in regions like Muzaffarpur, Gaya, and Noida by developing high-performance websites and strategic lead generation campaigns.
                </p>

                <p>
                  We combine website optimization, search engine optimization,
                  content marketing, and data-driven insights to attract the
                  right audience and convert them into customers. Whether you
                  are a startup, a local business, or an established company,
                  our solutions are built to drive visibility, traffic, and
                  sales.
                </p>

                <p>
                  Our team stays updated with the latest SEO trends, Google
                  algorithm updates, and proven digital marketing frameworks to
                  ensure your business stays ahead of the competition. We focus
                  on real ROI and long-term growth not vanity metrics.
                </p>

                <p>
                  With transparent communication, detailed SEO audits,
                  customized strategies, and continuous performance tracking, we
                  work as your long-term growth partner. At MaaJanki Web Tech,
                  we don’t just provide services we help you scale sustainably.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6" data-aos="fade-up-right">
              <div className="image-wrap">
                <Image
                  src="/images/pages/main-services-pages/why-choose-us.webp"
                  width="1024"
                  height="1024"
                  alt="Why choose MaaJanki Web Tech for website development and digital marketing"
                  title="Why Choose MaaJanki Web Tech – Website Development & Digital Marketing Experts"
                  className="img-fluid"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section End */}

      {/* Work Process Section Start */}
      <section className="process-section">
        <div className="auto-container">
          {/* Section Title */}
          <div className="sec-title centered">
            <div className="title">Steps For Done</div>
            <div className="separator">
              <span></span>
            </div>
            <h2>Our Work Process</h2>
          </div>

          <div className="row clearfix">
            {/* Process Block 1 */}
            <div className="process-block one col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon">
                    <Image
                      src="/images/process-1.png"
                      alt="Digital marketing process step 1 – analysis and planning"
                      title="Digital Marketing Process Step 1 – Strategy & Analysis | MaaJanki Web Tech"
                      data-no-retina=""
                      width="280"
                      height="260"
                      loading="lazy"
                     />
                  </span>
                </div>
                <h3>Analysis</h3>
                <div className="number">01</div>
              </div>
            </div>

            {/* Process Block 2 */}
            <div className="process-block-two two col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="number">02</div>
                <h3>Design</h3>
                <div className="icon-box">
                  <span className="icon">
                    <Image
                      src="/images/process-2.webp"
                      alt="Digital marketing process step 2 – design and execution"
                      title="Digital Marketing Process Step 2 – Design & Execution | MaaJanki Web Tech"
                      data-no-retina=""
                      width="280"
                      height="260"
                      loading="lazy"
                     />
                  </span>
                </div>
              </div>
            </div>

            {/* Process Block 3 */}
            <div className="process-block three col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon">
                    <Image
                      src="/images/process-3.png"
                      alt="Digital marketing process step 3 – performance tracking and optimization"
                      title="Digital Marketing Process Step 3 – Optimization & Growth | MaaJanki Web Tech"
                      data-no-retina=""
                      width="280"
                      height="260"
                      loading="lazy"
                     />
                  </span>
                </div>
                <h3>Refine</h3>
                <div className="number">03</div>
              </div>
            </div>

            {/* Process Block 4 */}
            <div className="process-block-two four col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="number">04</div>
                <h3>Execute</h3>
                <div className="icon-box">
                  <span className="icon">
                    <Image
                      src="/images/process-4.png"
                      alt="Digital marketing process step 4 – reporting, results, and scaling"
                      title="Digital Marketing Process Step 4 – Results & Reporting | MaaJanki Web Tech"
                      data-no-retina=""
                      width="280"
                      height="260"
                      loading="lazy"
                     />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Section End */}

      {/* Our Tools & Technologies */}
      <section className="mj-wt-section py-20 bg-slate-950 text-white">
        <div className="mj-wt-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mj-wt-title text-4xl md:text-5xl font-bold mb-4">
              Tools & Technologies We Use for Modern Web Development
            </h2>
          </div>

          <div className="mj-wt-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="mj-wt-tech-item flex flex-col items-center justify-center p-4 rounded-lg transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: "#FD6A02" }}
                title={tech.title}
                aria-label={tech.title}
              >
                <div className="mj-wt-icon text-4xl mb-2" aria-hidden="true">
                  {tech.icon}
                </div>
                <div className="mj-wt-tech-title text-lg font-semibold text-center">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Tools & Technologies end */}

      {/* ---------- Promo Section Start ---------- */}
      <section
        className="promo-block ptb-100"
        style={{ background: "#FD6A02", color: "#fff" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            {[
              {
                img: "/images/pages/main-services-pages/increase.svg",
                alt: "Increase website traffic with SEO and digital marketing",
                title:
                  "Increase Website Traffic with SEO & Digital Marketing | MaaJanki Web Tech",
                desc: "Drive consistent, high-quality traffic to your website through targeted SEO and data-driven digital marketing strategies.",
              },
              {
                img: "/images/pages/main-services-pages/interface.svg",
                alt: "Improve search engine rankings for business websites",
                title:
                  "Higher Search Engine Rankings with Proven SEO Strategies",
                desc: "Improve your website’s visibility on search engines with proven SEO techniques that deliver long-term organic growth.",
              },
              {
                img: "/images/pages/main-services-pages/search-engine.svg",
                alt: "Website optimization services for speed and performance",
                title:
                  "Website Optimization Services for Speed, UX & Conversions",
                desc: "Enhance website speed, performance, and usability to create better user experiences and higher conversion rates.",
              },
              {
                img: "/images/pages/main-services-pages/consult.svg",
                alt: "Speak with a digital marketing expert at MaaJanki Web Tech",
                title:
                  "Speak With a Digital Marketing Expert | MaaJanki Web Tech",
                desc: "",
                phone: "+91 9006543913",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 promo-col mb-4">
                <div className="promo-item text-center">
                  <div className="promo-img mb-3">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      title={item.title}
                      width="75"
                      height="75"
                      className="mx-auto d-block"
                      loading="lazy"
                     />
                  </div>
                  <h3 className="promo-title">{item.title.split("|")[0]}</h3>
                  {item.desc ? (
                    <p className="promo-desc">{item.desc}</p>
                  ) : (
                    <a
                      href={`tel:${item.phone.replace(/\s+/g, "")}`}
                      className="emergency-btn"
                      onClick={() => {
                        if (window.gtag) {
                          window.gtag("event", "click", {
                            event_category: "Contact",
                            event_label: "Home Promo Phone CTA",
                          });
                        }
                      }}
                    >
                      {item.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- Promo Section End ---------- */}

      {/* Counter and Clients Section */}
      <section className="counters-section">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {counters.map((counter, index) => (
              <div
                key={index}
                className="col text-center counter-item"
              >
                <div className="counter-box-wrapper">
                  <div className="counter-icon-container">
                    <Image
                      loading="lazy"
                      src={counter.img}
                      alt={counter.title}
                      title={counter.title}
                      className="counter-img"
                      width={80}
                      height={80}
                    />
                  </div>
                  {/* {counter.number && <h3 className="counter-number">{counter.number}</h3>} */}
                  <h6 className="counter-title">{counter.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="clients-title-wrapper">
          <h5 className="clients-title">Our Clients</h5>
        </div>

        {/* First Line: Right → Left */}
        <div className="slider-container">
          <div className="slider slide-right">
            <div className="slide-track">
              {clients.concat(clients).map((client, index) => (
                <div className="slide" key={`first-${index}`}>
                  <Image
                    src={client.src}
                    alt={client.alt}
                    title={client.title}
                    className="client-img"
                    loading="lazy"
                    width={180}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Line: Left → Right */}
        <div className="slider-container">
          <div className="slider slide-left">
            <div className="slide-track">
              {clients.concat(clients).map((client, index) => (
                <div className="slide" key={`second-${index}`}>
                  <Image
                    src={client.src}
                    alt={client.alt}
                    title={client.title}
                    className="client-img"
                    loading="lazy"
                    width={180}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Counter and Clients Section End */}

      {/* Collaborators Section */}
      <section className="collaborators-section">
        <div className="collaborators-title-wrapper">
          <h5 className="collaborators-title">Our Official Collaborators</h5>
        </div>

        <div className="slider-container">
          <div className="slider slide-right">
            <div className="slide-track">
              {collaborators.concat(collaborators).map((col, index) => (
                <div className="slide" key={index}>
                  <Image
                    loading="lazy"
                    src={col.src}
                    alt={`${col.alt} – Technology & Marketing Partner of MaaJanki Web Tech`}
                    title={`${col.alt} | Official Collaborator of MaaJanki Web Tech`}
                    className="collaborator-img"
                    width={180}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Collaborators Section End */}

      {/* Faq Section Start */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              id: "faq1",
              question: "Which is the best digital marketing agency in India?",
              answer:
                "MaaJanki Web Tech is recognized as one of the best digital marketing agencies in India, delivering result-oriented SEO, social media marketing, PPC, and website growth solutions for businesses across industries.",
            },
            {
              id: "faq2",
              question:
                "What complete digital services does MaaJanki Web Tech offer?",
              answer:
                "We offer a full 360-degree suite of digital services including Search Engine Optimization (SEO), Social Media Optimization (SMO), Performance Marketing, Web Development, UI/UX Design, Graphic Design, Content Writing, Branding, and eCommerce Product Listing.",
            },
            {
              id: "faq3",
              question: "How can SEO help my business grow organically?",
              answer:
                "Our advanced SEO strategies improve your website's visibility on search engines like Google. By targeting the right keywords and optimizing technical performance, we drive high-quality, organic traffic that converts into loyal customers.",
            },
            {
              id: "faq4",
              question:
                "What is included in your Social Media Optimization (SMO) services?",
              answer:
                "We manage your brand's presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our SMO services include profile optimization, engaging content creation, community management, and trending hashtag strategies to build market authority.",
            },
            {
              id: "faq5",
              question:
                "Do you create custom websites for small businesses and enterprises?",
              answer:
                "Absolutely. Our Web Development team specializes in building responsive, high-performance, and SEO-friendly websites. Whether you need a corporate portfolio, an eCommerce platform, or a custom web application, we deliver scalable solutions.",
            },
            {
              id: "faq6",
              question:
                "How does Performance Marketing differ from regular advertising?",
              answer:
                "Performance Marketing is highly data-driven. Instead of paying for mere exposure, you pay for measurable results like clicks, leads, and sales. We design high-ROI Meta Ads and Google Ads funnels to maximize your conversion rates.",
            },
            {
              id: "faq7",
              question:
                "Why is UI/UX design crucial for my application or website?",
              answer:
                "A great UI/UX design reduces user friction and increases engagement. We conduct user-centered research to build intuitive sitemaps, wireframes, and custom interfaces that provide a seamless experience, turning visitors into paying customers.",
            },
            {
              id: "faq8",
              question: "What kind of Graphic Design services do you provide?",
              answer:
                "We create visually stunning and premium assets, including brand logos, marketing brochures, social media creatives, digital banners, and complete visual identities that capture attention and communicate your brand's unique message.",
            },
            {
              id: "faq9",
              question:
                "Can you write SEO-optimized content for my blog or website?",
              answer:
                "Yes, our expert Content Writing team crafts compelling, keyword-rich, and Answer Engine Optimized (AEO) content. From landing pages to informative blogs, we ensure your message resonates with your audience and search engine algorithms.",
            },
            {
              id: "faq10",
              question:
                "How can Product Listing optimization help my eCommerce sales?",
              answer:
                "We optimize your product titles, descriptions, and images with the right keywords and semantic data. This ensures your products rank higher on platforms like Amazon, Flipkart, or your own site, driving more visibility and sales.",
            },
            {
              id: "faq11",
              question:
                "What makes a strong brand identity, and how can you help?",
              answer:
                "A strong brand connects emotionally with its target audience. Our Branding services define your market positioning, tone of voice, and visual aesthetics, ensuring you stand out as a premium leader in a crowded market.",
            },
            {
              id: "faq12",
              question:
                "How long does it take to see results from SEO and digital marketing?",
              answer:
                "While paid Performance Marketing can generate immediate leads, organic strategies like SEO and Content Writing typically take 3 to 6 months to show significant, long-lasting growth. We focus on building sustainable digital authority.",
            },
            {
              id: "faq13",
              question:
                "Are your digital marketing strategies tailored for specific industries?",
              answer:
                "Yes! We cater to diverse industries including Healthcare, Real Estate, E-Commerce, Education, Technology, and more. Every campaign is custom-designed based on deep competitor analysis and your specific target audience.",
            },
            {
              id: "faq14",
              question:
                "What is the cost of your web development and digital marketing services?",
              answer:
                "Costs depend on your specific business goals and the scope of the project. MaaJanki Web Tech offers flexible, scalable, and highly affordable packages designed to provide maximum ROI regardless of your business size.",
            },
            {
              id: "faq15",
              question: "How can I start working with MaaJanki Web Tech?",
              answer:
                "Starting is easy! Simply reach out to us via our Contact page, fill out the inquiry form, or call us directly. Our experts will analyze your requirements and provide a customized growth strategy for your business.",
            },
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
}

export default Home;