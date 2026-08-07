import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaGlobe, FaBuilding, FaArrowRight, FaRocket, FaSearch, FaLaptopCode, FaBullhorn } from 'react-icons/fa';

export const metadata = {
  title: 'Our Service Locations | Web Development & Digital Marketing Agency',
  description: 'Explore all cities, states, and countries served by MaaJanki Web Tech. Professional web development, SEO, SMO, and digital marketing services globally.',
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations',
  },
  openGraph: {
    title: 'Our Service Locations | MaaJanki Web Tech',
    description: 'Explore all local and global locations served by MaaJanki Web Tech for website development and digital marketing.',
    url: 'https://maajankiwebtech.com/locations',
    siteName: 'MaaJanki Web Tech',
    type: 'website',
  },
};

const locationsData = {
  bihar: [
    { name: 'Bettiah', path: '/locations/bettiah', desc: 'Headquarters & local hub for SEO, web design, and digital growth in West Champaran.' },
    { name: 'Motihari', path: '/locations/motihari', desc: 'Custom website development and local SEO services for East Champaran businesses.' },
    { name: 'Bagaha', path: '/locations/bagaha', desc: 'Dedicated digital marketing and website solutions for Bagaha local enterprises.' },
    { name: 'Patna', path: '/locations/patna', desc: 'Capital city digital agency solutions, eCommerce development, and lead generation.' },
    { name: 'Muzaffarpur', path: '/locations/muzaffarpur', desc: 'Search engine optimization and performance marketing for North Bihar businesses.' },
    { name: 'Gaya', path: '/locations/gaya', desc: 'Web design, branding, and local search visibility for Gaya startups & retailers.' },
    { name: 'Raxaul', path: '/locations/raxaul', desc: 'Border trade and business website development & online marketing services.' },
    { name: 'Narkatiaganj', path: '/locations/narkatiaganj', desc: 'Affordable web design and social media promotion for local growing brands.' },
    { name: 'Nepal', path: '/locations/nepal', desc: 'Cross-border digital solutions and multi-language web services for Nepal businesses.' },
  ],
  indiaMetros: [
    { name: 'Delhi NCR', path: '/locations/delhi', desc: 'High-performance web architecture, corporate SEO, and PPC campaigns in Delhi.' },
    { name: 'Mumbai', path: '/locations/mumbai', desc: 'Enterprise website development, brand identity, and performance marketing.' },
    { name: 'Bengaluru', path: '/locations/bengaluru', desc: 'Tech startup web platforms, SaaS product design, and specialized SEO strategies.' },
    { name: 'Noida', path: '/locations/noida', desc: 'Custom web application design and IT company digital marketing solutions.' },
    { name: 'Pune', path: '/locations/pune', desc: 'Industrial and educational enterprise portal development & search optimization.' },
    { name: 'Kolkata', path: '/locations/kolkata', desc: 'Creative website design, social media marketing, and regional search dominance.' },
    { name: 'Lucknow', path: '/locations/lucknow', desc: 'Full-funnel digital marketing, e-commerce stores, and Google Ads management.' },
    { name: 'Jaipur', path: '/locations/jaipur', desc: 'Hospitality, handicraft, and tourism website development & global SEO.' },
    { name: 'Hyderabad', path: '/locations/hyderabad', desc: 'Scalable web architecture, cloud integrations, and B2B lead generation.' },
  ],
  international: [
    { name: 'United States', path: '/locations/united-states', desc: 'Global SEO, custom web applications, and ROI-driven marketing campaigns in USA.' },
    { name: 'United Kingdom', path: '/locations/united-kingdom', desc: 'UK web development, e-commerce platforms, and search optimization services.' },
    { name: 'Canada', path: '/locations/canada', desc: 'North American business web design, local SEO, and digital brand building.' },
    { name: 'Australia', path: '/locations/australia', desc: 'High-conversion website development and multi-channel marketing for AU clients.' },
    { name: 'United Arab Emirates', path: '/locations/united-arab-emirates', desc: 'Middle East digital transformation, corporate web solutions, and PPC.' },
    { name: 'Nepal', path: '/locations/nepal', desc: 'Cross-border digital solutions and multi-language web services for Nepal.' },
    { name: 'New Zealand', path: '/locations/new-zealand', desc: 'Custom web architecture, mobile responsive design, and search optimization.' },
    { name: 'Singapore', path: '/locations/singapore', desc: 'Tech hub e-commerce platforms, performance marketing, and branding.' },
    { name: 'Ireland', path: '/locations/ireland', desc: 'EU enterprise web applications, lead generation, and technical SEO.' },
    { name: 'Netherlands', path: '/locations/netherlands', desc: 'Dutch market digital agency solutions, WordPress & custom web design.' },
    { name: 'Germany', path: '/locations/germany', desc: 'European market website development, SEO strategies, and digital branding.' },
    { name: 'Saudi Arabia', path: '/locations/saudi-arabia', desc: 'GCC digital transformation, corporate portal development, and Google Ads.' },
    { name: 'Qatar', path: '/locations/qatar', desc: 'Middle East web architecture, high-converting landing pages, and SEO.' },
    { name: 'Kuwait', path: '/locations/kuwait', desc: 'Kuwait enterprise web solutions, local search visibility, and social media.' },
    { name: 'Switzerland', path: '/locations/switzerland', desc: 'Swiss precision web design, cloud integrations, and corporate branding.' },
    { name: 'Norway', path: '/locations/norway', desc: 'Nordic web application development, performance optimization, and SEO.' },
    { name: 'Sweden', path: '/locations/sweden', desc: 'Scandinavian digital agency solutions, UI/UX design, and search growth.' },
    { name: 'Denmark', path: '/locations/denmark', desc: 'High-end website development, e-commerce stores, and online marketing.' },
    { name: 'Belgium', path: '/locations/belgium', desc: 'European multi-lingual web platforms, SEO, and paid ad management.' },
    { name: 'France', path: '/locations/france', desc: 'Creative website development, brand strategy, and search engine optimization.' },
    { name: 'Mexico', path: '/locations/mexico', desc: 'North American market website design, local SEO, and digital growth.' },
    { name: 'Japan', path: '/locations/japan', desc: 'Asia-Pacific web engineering, performance marketing, and digital solutions.' },
    { name: 'South Korea', path: '/locations/south-korea', desc: 'High-tech web app development, UI/UX design, and online search strategies.' },
    { name: 'India', path: '/locations/india', desc: 'Full-spectrum digital agency services, enterprise web apps, and national SEO.' },
    { name: 'South Africa', path: '/locations/south-africa', desc: 'African market e-commerce platforms, lead generation, and digital marketing.' },
  ],
};

export default function LocationsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: 'Service Locations - MaaJanki Web Tech',
    description: 'Complete list of cities and countries served by MaaJanki Web Tech for website development and digital marketing.',
    url: 'https://maajankiwebtech.com/locations',
    provider: {
      '@type': 'Organization',
      name: 'MaaJanki Web Tech',
      url: 'https://maajankiwebtech.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        .locations-hero {
          background: linear-gradient(135deg, #042544 0%, #083b6b 100%);
          color: #ffffff;
          padding: 80px 20px 60px;
          text-align: center;
          position: relative;
        }
        .locations-hero h1 {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: #ffffff;
        }
        .locations-hero h1 span {
          color: #FD6A02;
        }
        .locations-hero p {
          font-size: 1.15rem;
          max-width: 780px;
          margin: 0 auto;
          color: #DEE2E6;
          line-height: 1.6;
        }
        .locations-section {
          padding: 60px 20px;
          background: #F8F9FA;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
          border-bottom: 3px solid #FD6A02;
          padding-bottom: 12px;
        }
        .category-header h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #042544;
          margin: 0;
        }
        .category-icon {
          font-size: 1.8rem;
          color: #FD6A02;
        }
        .location-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
          margin-bottom: 50px;
        }
        .location-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 25px;
          border: 1px solid #DEE2E6;
          box-shadow: 0 4px 15px rgba(4, 37, 68, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
        }
        .location-card:hover {
          transform: translateY(-5px);
          border-color: #FD6A02;
          box-shadow: 0 10px 25px rgba(253, 106, 2, 0.15);
        }
        .location-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #042544;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .location-card h3 .arrow {
          color: #FD6A02;
          font-size: 1rem;
          transition: transform 0.3s ease;
        }
        .location-card:hover h3 .arrow {
          transform: translateX(5px);
        }
        .location-card p {
          font-size: 0.95rem;
          color: #555555;
          line-height: 1.5;
          margin-bottom: 15px;
        }
        .location-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          background: #E9ECEF;
          color: #042544;
          padding: 4px 12px;
          border-radius: 20px;
          align-self: flex-start;
        }
        .cta-box {
          background: linear-gradient(135deg, #042544 0%, #06192d 100%);
          color: #ffffff;
          border-radius: 16px;
          padding: 50px 30px;
          text-align: center;
          margin-top: 40px;
          box-shadow: 0 10px 30px rgba(4, 37, 68, 0.2);
        }
        .cta-box h3 {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 15px;
        }
        .cta-box p {
          color: #E9ECEF;
          max-width: 650px;
          margin: 0 auto 25px;
          font-size: 1.1rem;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FD6A02;
          color: #ffffff;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(253, 106, 2, 0.4);
        }
        .cta-btn:hover {
          background: #e05800;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(253, 106, 2, 0.6);
        }
        @media (max-width: 768px) {
          .locations-hero {
            padding: 50px 16px 40px;
          }
          .locations-hero h1 {
            font-size: 2rem;
          }
          .locations-hero p {
            font-size: 0.98rem;
          }
          .locations-section {
            padding: 40px 16px;
          }
          .category-header h2 {
            font-size: 1.4rem;
          }
          .location-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 16px;
          }
          .cta-box {
            padding: 35px 20px;
          }
          .cta-box h3 {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .locations-hero h1 {
            font-size: 1.6rem;
          }
          .location-grid {
            grid-template-columns: 1fr;
          }
          .location-card {
            padding: 20px 16px;
          }
        }
      `}</style>

      <section className="locations-hero">
        <div className="container">
          <h1>Our Service <span>Locations</span></h1>
          <p>
            MaaJanki Web Tech delivers premium website development, SEO, SMO, and performance marketing solutions to businesses across local, national, and international markets.
          </p>
        </div>
      </section>

      <section className="locations-section">
        <div className="container">
          
          {/* Local & Regional */}
          <div className="category-header">
            <FaMapMarkerAlt className="category-icon" />
            <h2>Local & Regional Hubs (Bihar & Neighboring Regions)</h2>
          </div>
          <div className="location-grid">
            {locationsData.bihar.map((loc, i) => (
              <Link href={loc.path} key={i} className="location-card">
                <div>
                  <h3>
                    {loc.name}
                    <FaArrowRight className="arrow" />
                  </h3>
                  <p>{loc.desc}</p>
                </div>
                <span className="location-badge">SEO & Web Development</span>
              </Link>
            ))}
          </div>

          {/* India Metros */}
          <div className="category-header">
            <FaBuilding className="category-icon" />
            <h2>Major Indian Metro Cities</h2>
          </div>
          <div className="location-grid">
            {locationsData.indiaMetros.map((loc, i) => (
              <Link href={loc.path} key={i} className="location-card">
                <div>
                  <h3>
                    {loc.name}
                    <FaArrowRight className="arrow" />
                  </h3>
                  <p>{loc.desc}</p>
                </div>
                <span className="location-badge">Enterprise & Digital Marketing</span>
              </Link>
            ))}
          </div>

          {/* International */}
          <div className="category-header">
            <FaGlobe className="category-icon" />
            <h2>International & Global Markets</h2>
          </div>
          <div className="location-grid">
            {locationsData.international.map((loc, i) => (
              <Link href={loc.path} key={i} className="location-card">
                <div>
                  <h3>
                    {loc.name}
                    <FaArrowRight className="arrow" />
                  </h3>
                  <p>{loc.desc}</p>
                </div>
                <span className="location-badge">Global IT & Web Services</span>
              </Link>
            ))}
          </div>

          {/* CTA Box */}
          <div className="cta-box">
            <h3>Don't See Your Location Listed?</h3>
            <p>
              We provide remote digital marketing and high-end web development services for businesses worldwide. Contact our team to scale your brand online today.
            </p>
            <Link href="/contact" className="cta-btn">
              Get In Touch With Us <FaRocket />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
