'use client';

import React from "react";
import Image from 'next/image';

import Link from 'next/link';
import '@/app/styles/Service.css';
import '@/app/styles/Home.css';
import FooterSection from '@/components/FooterWithPopup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenNib,
  faCode,
  faBullhorn,
  faChartLine,
  faKeyboard,
  faShareAlt,
  faShoppingCart,
  faMobileAlt,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
// Import icons from react-icons
import {
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaRobot,
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

const Services = () => {
  const industrieses = [
    { emoji: "🏥", name: "Healthcare Industry" },
    { emoji: "🛍️", name: "E-commerce Industry" },
    { emoji: "🏦", name: "Finance & FinTech" },
    { emoji: "🎓", name: "Education & EdTech" },
    { emoji: "🏨", name: "Hospitality & Travel" },
    { emoji: "🚗", name: "Automobile Industry" },
    { emoji: "📦", name: "Logistics & Supply Chain" },
    { emoji: "🏗️", name: "Real Estate & Construction" },
    { emoji: "💻", name: "IT & Tech Startups" },
    { emoji: "🍔", name: "Food & Restaurants" },
    { emoji: "👗", name: "Fashion & Apparel" },
    { emoji: "🏭", name: "Manufacturing Industry" },
  ];

  const counters = [
    {
      number: "500+",
      img: "/images/happy-clients.png",
      title: "Client Happiness",
      alt: "Happy clients served by MaaJanki Web Tech",
    },
    {
      number: "250+",
      img: "/images/project-complete.png",
      title: "Top-Rated Projects",
      alt: "Successful digital marketing and web projects",
    },
    {
      number: "150+",
      img: "/images/design-complete.png",
      title: "Creative Masterpieces",
      alt: "Creative design and branding projects",
    },
    {
      number: "10+",
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
        <Image priority src="/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp" alt="MaaJanki Web Tech services banner showcasing digital marketing and website development solutions" title="Digital Marketing & Website Development Services | MaaJanki Web Tech" data-no-retina="" width="1280" height="720"/>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Expert Web Development & Digital Marketing Services</h1>
            <p>
              From custom website design and SEO to branding, graphic design, and paid ads, MaaJanki Web Tech offers comprehensive digital solutions to grow your business online.
            </p>
            <div className="banner-buttons">
              <Link href="/contact" className="btn1">
                Contact Us
              </Link>
              <Link href="/about" className="btn2">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="services-hero-wrapper">
          {/* Left Side Image */}
          <div className="services-hero-image">
            <Image
              src="/images/all-pages-section-image/Our-service/About-us-section-for-our-service-image-maajanki-web-tech.jpg"
              alt="Digital marketing and website development solutions by MaaJanki Web Tech"
              title="Expert Digital Marketing & Website Development Services by MaaJanki Web Tech"
              loading="lazy"
             width={600} height={400} />
          </div>

          {/* Right Side Content */}
          <div className="services-hero-content">
            <h2 style={{ fontSize: "2rem" }}>
              Best Digital Marketing & Website Development Agency in Bihar, India — MaaJanki Web Tech
            </h2>

            <p className="justified-text">
              At <strong>MaaJanki Web Tech</strong>, we are Bihar's #1 digital marketing and website development agency. From Bagaha, Bihar to businesses across India — we offer expert SEO, Google Ads, social media marketing, branding, graphic design, website development and content writing that deliver real, measurable results.
            </p>

            <p className="justified-text">
              Every brand is unique, which is why we build customized strategies
              — never templates. Our team works closely with you to deliver
              scalable, result-oriented solutions backed by transparent
              reporting, clear communication, and measurable outcomes. Whether
              you’re launching a new business or scaling an established brand,
              MaaJanki Web Tech is your trusted partner for long-term digital
              success.
            </p>

            <div className="button-wrapper">
              <Link href="/about">
                <button className="cta-button">About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-hero">
        <div className="services-hero-wrapper">
          {/* Left Side Content */}
          <div className="services-hero-content">
            <h2>
              Why Bihar & India's Growing Businesses Choose MaaJanki Web Tech for Digital Growth
            </h2>

            <p className="justified-text">
              At <strong>MaaJanki Web Tech</strong>, businesses in Bihar and across India choose us because we understand local markets, speak your customer's language, and deliver transparent, ROI-focused digital marketing. We rank our clients' websites on Google's first page using proven SEO strategies tailored for India.
            </p>

            <p className="justified-text">
              We do not believe in one-size-fits-all marketing. Every campaign
              is customized based on your industry, target audience, location,
              and performance goals. From startups to established brands, our
              clients rely on us for transparent processes, timely delivery, and
              clear communication supported by easy-to-understand reports, live
              dashboards, and actionable insights.
            </p>

            <p className="justified-text">
              If you are looking for a reliable digital partner who understands
              your business and helps you grow consistently through SEO, digital
              marketing, and web solutions, <strong>MaaJanki Web Tech</strong>{" "}
              is the team you can trust.
            </p>

            <div className="button-wrapper">
              <Link href="/contact">
                <button className="cta-button">Contact Us</button>
              </Link>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="services-hero-image">
            <Image
              src="/images/all-pages-section-image/Our-service/why-choose-us-section-for-our-service-image-maajanki-web-tech.jpg"
              alt="Why choose MaaJanki Web Tech for digital marketing and website development"
              title="Why Choose MaaJanki Web Tech for Digital Marketing & Web Development"
              loading="lazy"
             width={600} height={400} />
          </div>
        </div>
      </section>
      {/* Services Hero Section End */}

      {/* service process start */}
      <section className="services-process">
        <h2 className="services-process-subtitle">What We Offer</h2>
        <h2 className="services-process-title">Our Core Services</h2>

        <div className="services-process-steps">
          {/* Step 1 */}
          <div className="services-process-step">
            <span className="services-step-number">01</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
            </div>
            <p>Branding & Identity</p>
          </div>

          {/* Step 2 */}
          <div className="services-process-step">
            <span className="services-step-number">02</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faPenNib} />
              </div>
            </div>
            <p>Creative Graphic Design</p>
          </div>

          {/* Step 3 */}
          <div className="services-process-step">
            <span className="services-step-number">03</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
            </div>
            <p>Website Development</p>
          </div>

          {/* Step 4 */}
          <div className="services-process-step">
            <span className="services-step-number">04</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faKeyboard} />
              </div>
            </div>
            <p>SEO Content Writing</p>
          </div>

          {/* Step 5 */}
          <div className="services-process-step">
            <span className="services-step-number">05</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
            </div>
            <p>Search Engine Optimization</p>
          </div>

          {/* Step 6 */}
          <div className="services-process-step">
            <span className="services-step-number">06</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
            <p>Social Media (SMO)</p>
          </div>

          {/* Step 7 */}
          <div className="services-process-step">
            <span className="services-step-number">07</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faBullhorn} />
              </div>
            </div>
            <p>Performance Marketing</p>
          </div>

          {/* Step 8 */}
          <div className="services-process-step">
            <span className="services-step-number">08</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
            <p>E-commerce Product Listing</p>
          </div>

          {/* Step 9 */}
          <div className="services-process-step">
            <span className="services-step-number">09</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
            </div>
            <p>App Development</p>
          </div>

          {/* Step 10 */}
          <div className="services-process-step">
            <span className="services-step-number">10</span>
            <div className="services-icon-wrap">
              <div className="services-ring"></div>
              <div className="services-icon">
                <FontAwesomeIcon icon={faRobot} />
              </div>
            </div>
            <p>AI Automation & Chatbots</p>
          </div>
        </div>
      </section>
      {/* service process end */}

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
                  <div className="service-icon mb-4 text-4xl">
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

      {/* Industrys Section */}
      <section className="Industrys-section">
        <h2 className="Industrys-title">Industries We Serve</h2>

        <div className="Industrys-grid">
          {industrieses.map((item, index) => (
            <div className="Industrys-card" key={index}>
              <span className="emoji">{item.emoji}</span>
              <span className="Industrys-name">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Industrys Section End */}

      {/* Counter and Clients Section */}
      <section className="counters-section wow animate__fadeIn">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-4">
            {counters.map((counter, index) => (
              <div
                key={index}
                className="col text-center counter-item wow animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="counter-box-wrapper">
                  <Image
                    loading="lazy"
                    src={counter.img}
                    alt={counter.title}
                    title={counter.title}
                    className="counter-img"
                   width={600} height={400} />
                  {/* <h3 className="counter-number">{counter.number}</h3> */}
                  <h6 className="counter-title">{counter.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="clients-section">
        <h5 className="clients-title">Our Clients</h5>

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
                   width={600} height={400} />
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
                   width={600} height={400} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Counter and Clients Section End */}

      {/* Collaborators Section */}
      <section className="collaborators-section">
        <h5 className="collaborators-title">Our Collaborators</h5>

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
                   width={600} height={400} />
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
                "Performance Marketing is data-driven. Instead of paying for exposure, you pay for measurable results like clicks, leads, and sales. We design high-ROI Meta Ads and Google Ads funnels to maximize conversion rates.",
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

      <FooterSection />
    </>
  );
};

export default Services;