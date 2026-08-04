import React from "react";
import Image from "next/image";
import "./FounderSection.css";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function FounderSection() {
  const Founder = {
    name: "Ashish Kumar",
    role: "Founder & CEO — MaaJanki Web Tech",
    tagline:
      "Helping Businesses Build Stronger Brands, Better Websites & Sustainable Digital Growth",
    about:
      "Ashish Kumar is the Founder & CEO of MaaJanki Web Tech, a leading digital marketing and web development agency dedicated to helping  businesses establish a powerful online presence and achieve sustainable growth. With expertise in website development, SEO, branding, performance marketing, and AI-powered digital solutions, he works closely with startups, MSMEs, and enterprises to create customized strategies that drive measurable business results. His approach combines innovative technology, user-focused design, and data-driven marketing to improve search visibility, generate qualified leads, increase conversions, and build long-term brand authority. Through transparency, continuous innovation, and a commitment to client success, Ashish has helped businesses strengthen their digital presence and accelerate growth in today's competitive online marketplace.",
    img: "/images/Ashish-Kumar.webp",
    social: {
      li: "https://www.linkedin.com/in/ashishkumarji/",
      tw: "https://x.com/MaaJankiwebtech",
      ig: "https://www.instagram.com/kumarashishweb/",
    },
  };

  return (
    <section className="founder-section">
      <div className="founder-container">
        {/* LEFT — Image */}
        <div className="founder-img-box">
          <Image
            src={Founder.img}
            alt="Ashish Kumar, Founder & CEO of MaaJanki Web Tech — Digital Marketing and Web Development Expert"
            title="Ashish Kumar | Founder & CEO of MaaJanki Web Tech"
            className="founder-img"
            width={600}
            height={400}
            loading="lazy"
          />

          {/* Social Icons */}
          <div className="founder-social">
            <a
              href={Founder.social.li}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashish Kumar on LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href={Founder.social.tw}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashish Kumar on X (Twitter)"
            >
              <FaXTwitter />
            </a>

            <a
              href={Founder.social.ig}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashish Kumar on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="founder-content">
          <div className="founder-label">Meet Our Founder</div>

          <h2 className="founder-name">{Founder.name}</h2>

          <h4 className="founder-role">{Founder.role}</h4>

          <p className="founder-tagline">{Founder.tagline}</p>

          <p className="founder-about">{Founder.about}</p>

          <a
            href="https://wa.me/919006543913?text=Hi%20Ashish,%20I%20would%20like%20to%20connect%20regarding%20your%20digital%20services.%20(Source:%20Founder%20Section%20CTA)"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-btn"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "click", {
                  event_category: "Contact",
                  event_label: "Founder Section WhatsApp CTA",
                });
              }
            }}
          >
            <i className="fab fa-whatsapp"></i> Contact Founder
          </a>
        </div>
      </div>
    </section>
  );
}