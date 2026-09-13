const fs = require('fs');
const path = require('path');

// 59 Comprehensive Location Definitions
const locations = [
  // --- 1. BIHAR LOCATIONS (9) ---
  {
    slug: 'bagaha',
    name: 'Bagaha',
    fullName: 'Bagaha, Bihar',
    region: 'West Champaran, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: true,
    postalCode: '845101',
    address: 'Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, West Champaran, Bihar - 845101',
    lat: 27.2029,
    lng: 84.4679,
    nearby: ['Bettiah', 'Narkatiaganj', 'Raxaul', 'Motihari', 'Valmiki Nagar', 'West Champaran', 'Bihar'],
    metaTitle: 'Web Designer Near Me in Bagaha, Bihar | MaaJanki Web Tech',
    metaDesc: 'Looking for the best website designer near me in Bagaha, Bihar? MaaJanki Web Tech builds custom Next.js websites, e-commerce, & local SEO. Get a free quote!',
    h1: 'Website Designer & Web Development Company Near Me in Bagaha, Bihar',
    nearMeIntro: 'Searching for a trusted website designer or web development company near me in Bagaha? MaaJanki Web Tech is headquartered right here in Bagaha Bazar, offering local business owners, retailers, and entrepreneurs premier in-person and rapid digital development services.',
    faq1Q: 'Which is the best website designer near me in Bagaha, Bihar?',
    faq1A: 'MaaJanki Web Tech is top-rated as the best website designer and digital marketing agency near you in Bagaha, West Champaran. Located at Brajmala Complex in Bagaha Bazar, we build lightning-fast Next.js websites, online shops, and Google 3-Pack Map optimization.',
    faq2Q: 'What web development services are available near me in Bagaha?',
    faq2A: 'Near you in Bagaha, we provide custom business website design, mobile-responsive web development, e-commerce portals, local SEO, WhatsApp CRM integration, and billing software.',
    faq3Q: 'Can I visit MaaJanki Web Tech in person in Bagaha?',
    faq3A: 'Yes! You can visit our registered office at Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, or contact us directly at +91-9006543913 for a free consultation.'
  },
  {
    slug: 'bettiah',
    name: 'Bettiah',
    fullName: 'Bettiah, Bihar',
    region: 'West Champaran, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '845438',
    address: 'Regional Service Desk: West Champaran, Bettiah, Bihar - 845438 (HQ: Bagaha Bazar, Bihar)',
    lat: 27.0984,
    lng: 84.2625,
    nearby: ['Bagaha', 'Motihari', 'Narkatiaganj', 'Raxaul', 'West Champaran', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Bettiah | MaaJanki Web Tech',
    metaDesc: 'Premier website designer & web development agency near me in Bettiah, Bihar. Custom Next.js web applications, e-commerce & local SEO. Call +91 9006543913!',
    h1: 'Website Designer & Web Development Agency Near Me in Bettiah, Bihar',
    nearMeIntro: 'If you are looking for an experienced website designer or digital marketing agency near me in Bettiah, MaaJanki Web Tech provides industry-leading Next.js web development, e-commerce stores, and Google 3-Pack local SEO to expand your market dominance across West Champaran.',
    faq1Q: 'Who is the top website designer near me in Bettiah, Bihar?',
    faq1A: 'MaaJanki Web Tech is the leading website designer near you in Bettiah. We specialize in modern Next.js websites, mobile-friendly designs, and verified Schema.org entity grounding to ensure local businesses rank #1 on Google.',
    faq2Q: 'How quickly can you build a website for my Bettiah business?',
    faq2A: 'Most custom business websites are designed, developed, and deployed live within 5 to 10 working days, complete with mobile responsiveness, WhatsApp chat triggers, and Google Business Profile setup.',
    faq3Q: 'Do you offer local SEO and Google Map Pack ranking in Bettiah?',
    faq3A: 'Yes! We specialize in Google 3-Pack local SEO, NAP citation consistency, review generation, and localized search optimization so local customers find your business first.'
  },
  {
    slug: 'motihari',
    name: 'Motihari',
    fullName: 'Motihari, Bihar',
    region: 'East Champaran, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '845401',
    address: 'East Champaran Service Desk: Motihari, Bihar - 845401 (HQ: Bagaha Bazar, Bihar)',
    lat: 26.6570,
    lng: 84.9218,
    nearby: ['Raxaul', 'Bettiah', 'Muzaffarpur', 'Chakia', 'East Champaran', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Motihari | MaaJanki Web Tech',
    metaDesc: 'Top-rated website designer and web development company near me in Motihari, Bihar. Custom Next.js websites, e-commerce & Google SEO. Get a free quote now!',
    h1: 'Website Designer & Web Development Company Near Me in Motihari, Bihar',
    nearMeIntro: 'Need a reliable website designer or web development company near me in Motihari? MaaJanki Web Tech builds fast, modern, and high-converting websites tailored for East Champaran manufacturers, retail stores, coaching institutes, and startups.',
    faq1Q: 'Which is the best web development company near me in Motihari?',
    faq1A: 'MaaJanki Web Tech is the premier web development company serving Motihari and East Champaran, offering custom Next.js codebases, dynamic e-commerce, and high-ranking local SEO campaigns.',
    faq2Q: 'What does a custom business website cost in Motihari?',
    faq2A: 'We provide transparent, startup-friendly pricing packages starting with essential single-page business websites to full-featured custom e-commerce and web applications with zero hidden fees.',
    faq3Q: 'Will my website rank on Google for local searches in Motihari?',
    faq3A: 'Every website we engineer comes pre-optimized with semantic schema markup, fast Core Web Vitals, and local SEO citations to dominate Google Search and Google Maps in Motihari.'
  },
  {
    slug: 'patna',
    name: 'Patna',
    fullName: 'Patna, Bihar',
    region: 'Patna District, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '800001',
    address: 'Capital City Regional Desk: Boring Road / Fraser Road, Patna, Bihar - 800001 (HQ: Bagaha Bazar, Bihar)',
    lat: 25.5941,
    lng: 85.1376,
    nearby: ['Danapur', 'Hajipur', 'Bihar Sharif', 'Gaya', 'Muzaffarpur', 'Patna', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Patna, Bihar | MaaJanki Web Tech',
    metaDesc: 'Best website designer and web development company near me in Patna, Bihar. We build high-speed Next.js portals, online stores & local SEO. Get a free quote!',
    h1: 'Website Designer & Web Development Company Near Me in Patna, Bihar',
    nearMeIntro: 'Looking for the best website designer near me in Patna? As Bihar\'s premier digital technology partner, MaaJanki Web Tech provides enterprise-grade Next.js development, modern corporate portals, and performance marketing to help Patna businesses scale statewide and nationally.',
    faq1Q: 'How do I choose the best website designer near me in Patna?',
    faq1A: 'Look for proven technical engineering, government MSME certification, transparent pricing, and verifiable performance. MaaJanki Web Tech delivers Next.js 15 architectures with sub-second speeds and dedicated client support.',
    faq2Q: 'Do you build custom web applications and SaaS platforms in Patna?',
    faq2A: 'Yes, we engineer full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and Next.js, including custom CRM software, billing portals, and multi-vendor marketplaces.',
    faq3Q: 'How can MaaJanki Web Tech help my Patna business get more leads?',
    faq3A: 'We combine conversion-focused UI/UX layouts with high-intent Google 3-Pack SEO and targeted Google Ads management to transform website visitors into qualified paying inquiries.'
  },
  {
    slug: 'muzaffarpur',
    name: 'Muzaffarpur',
    fullName: 'Muzaffarpur, Bihar',
    region: 'Muzaffarpur District, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '842001',
    address: 'North Bihar Regional Desk: Muzaffarpur, Bihar - 842001 (HQ: Bagaha Bazar, Bihar)',
    lat: 26.1209,
    lng: 85.3647,
    nearby: ['Hajipur', 'Motihari', 'Darbhanga', 'Samastipur', 'Sitamarhi', 'Muzaffarpur', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Muzaffarpur | MaaJanki Web Tech',
    metaDesc: 'Looking for a trusted website designer near me in Muzaffarpur, Bihar? MaaJanki Web Tech delivers Next.js web apps, e-commerce & local SEO. Free 30-min audit!',
    h1: 'Website Designer & Web Development Company Near Me in Muzaffarpur',
    nearMeIntro: 'Grow your commercial enterprise with the top website designer near me in Muzaffarpur. MaaJanki Web Tech builds modern, mobile-responsive websites that rank at the top of Google and turn local search queries into real footfall and phone inquiries.',
    faq1Q: 'Which is the top-rated website design company near me in Muzaffarpur?',
    faq1A: 'MaaJanki Web Tech is recognized as the premier website design company serving Muzaffarpur, offering cutting-edge Next.js web engineering, e-commerce platforms, and result-oriented local SEO.',
    faq2Q: 'Do you create online shopping stores for retail businesses in Muzaffarpur?',
    faq2A: 'Yes! We create custom Shopify and WooCommerce e-commerce websites integrated with UPI QR, Razorpay, automated inventory sync, and WhatsApp order alerts.',
    faq3Q: 'How do we get started with website design in Muzaffarpur?',
    faq3A: 'Call us at +91-9006543913 or request a free consultation through our online contact form. We provide a full scope of work, UI wireframe preview, and project roadmap.'
  },
  {
    slug: 'gaya',
    name: 'Gaya',
    fullName: 'Gaya, Bihar',
    region: 'Gaya District, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '823001',
    address: 'South Bihar Service Desk: Gaya, Bihar - 823001 (HQ: Bagaha Bazar, Bihar)',
    lat: 24.7955,
    lng: 85.0002,
    nearby: ['Bodh Gaya', 'Jehanabad', 'Nawada', 'Aurangabad', 'Patna', 'Gaya', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Gaya, Bihar | MaaJanki Web Tech',
    metaDesc: 'Top website designer and digital marketing agency near me in Gaya, Bihar. High-speed custom web development, e-commerce, and local SEO. Get your free quote!',
    h1: 'Website Designer & Digital Marketing Agency Near Me in Gaya, Bihar',
    nearMeIntro: 'Looking for a reputable website designer or digital marketing agency near me in Gaya? MaaJanki Web Tech empowers hospitality operators, tourism enterprises, healthcare providers, and local retailers with high-speed websites that capture regional and global customers.',
    faq1Q: 'Who provides the best web design services near me in Gaya, Bihar?',
    faq1A: 'MaaJanki Web Tech provides premier website design and SEO services in Gaya and Bodh Gaya, delivering responsive web architectures and Google Maps prominence.',
    faq2Q: 'Can you build a multilingual booking website for tourism in Gaya?',
    faq2A: 'Yes, we engineer multilingual websites with fast online booking engines, hotel reservation forms, and seamless international payment integrations.',
    faq3Q: 'How does your local SEO help businesses in Gaya rank higher?',
    faq3A: 'We optimize your Google Business Profile, implement structured Schema.org LocalBusiness markup, and manage local citations so travelers and locals find you instantly.'
  },
  {
    slug: 'bihar-sharif',
    name: 'Bihar Sharif',
    fullName: 'Bihar Sharif, Bihar',
    region: 'Nalanda District, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '803101',
    address: 'Nalanda Regional Desk: Bihar Sharif, Bihar - 803101 (HQ: Bagaha Bazar, Bihar)',
    lat: 25.1982,
    lng: 85.5149,
    nearby: ['Rajgir', 'Nalanda', 'Patna', 'Nawada', 'Sheikhpura', 'Bihar Sharif', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Bihar Sharif | MaaJanki Web Tech',
    metaDesc: 'Leading website designer and web development company near me in Bihar Sharif, Nalanda. Custom Next.js websites, e-commerce & local SEO. Get a free consultation!',
    h1: 'Website Designer & Web Development Company Near Me in Bihar Sharif',
    nearMeIntro: 'Scale your brand with the trusted website designer near me in Bihar Sharif. MaaJanki Web Tech provides custom web development, e-commerce solutions, and digital marketing tailored to Nalanda’s vibrant manufacturing, commercial, and retail sectors.',
    faq1Q: 'Which is the top website designer near me in Bihar Sharif?',
    faq1A: 'MaaJanki Web Tech is the leading website design agency serving Bihar Sharif and Nalanda, providing custom Next.js development, e-commerce, and Google 3-Pack SEO.',
    faq2Q: 'Do you offer website redesign services for outdated websites in Bihar Sharif?',
    faq2A: 'Yes! We modernize slow, outdated websites into ultra-fast, mobile-friendly Next.js web applications that look stunning and rank higher on search engines.',
    faq3Q: 'What support do you offer after launching a website in Bihar Sharif?',
    faq3A: 'We provide 24/7 technical maintenance, regular automated database backups, security patches, and ongoing SEO performance monitoring.'
  },
  {
    slug: 'raxaul',
    name: 'Raxaul',
    fullName: 'Raxaul, Bihar',
    region: 'East Champaran, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '845305',
    address: 'Border Trade Regional Desk: Raxaul, East Champaran, Bihar - 845305 (HQ: Bagaha Bazar, Bihar)',
    lat: 26.9774,
    lng: 84.8517,
    nearby: ['Birgunj', 'Motihari', 'Bettiah', 'Ramgarhwa', 'East Champaran', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Raxaul | MaaJanki Web Tech',
    metaDesc: 'Looking for a professional website designer near me in Raxaul, Bihar? Custom Next.js web development, trade portals, and local SEO. Call +91 9006543913 today!',
    h1: 'Website Designer & Web Development Agency Near Me in Raxaul, Bihar',
    nearMeIntro: 'Searching for an experienced website designer near me in Raxaul? As the vital gateway for India-Nepal commerce, Raxaul businesses need fast, cross-border digital platforms. MaaJanki Web Tech delivers high-performance websites for import-export firms, transport hubs, and local retailers.',
    faq1Q: 'Who is the best web development agency near me in Raxaul, Bihar?',
    faq1A: 'MaaJanki Web Tech is top-rated for web development in Raxaul and Birgunj border regions, building custom B2B trade portals, corporate sites, and local SEO campaigns.',
    faq2Q: 'Can you build cross-border websites supporting both Indian and Nepalese clients?',
    faq2A: 'Yes, we create multi-currency and multilingual websites optimized for both Indian and Nepalese markets with localized payment gateways.',
    faq3Q: 'How do I get a free quote for website design in Raxaul?',
    faq3A: 'Call us at +91-9006543913 or send a WhatsApp message. We review your requirements and provide a transparent, competitive proposal within 2 hours.'
  },
  {
    slug: 'narkatiaganj',
    name: 'Narkatiaganj',
    fullName: 'Narkatiaganj, Bihar',
    region: 'West Champaran, Bihar',
    state: 'Bihar',
    country: 'India',
    type: 'bihar',
    isHQ: false,
    postalCode: '845455',
    address: 'Regional Service Desk: Narkatiaganj, West Champaran, Bihar - 845455 (HQ: Bagaha Bazar, Bihar)',
    lat: 27.1085,
    lng: 84.4717,
    nearby: ['Bettiah', 'Bagaha', 'Shikarpur', 'Chanpatia', 'West Champaran', 'Bihar'],
    metaTitle: 'Website Designer Near Me in Narkatiaganj | MaaJanki Web Tech',
    metaDesc: 'Top website designer and web development company near me in Narkatiaganj, Bihar. Affordable custom websites, business portals & local SEO. Get a free quote!',
    h1: 'Website Designer & Web Development Company Near Me in Narkatiaganj',
    nearMeIntro: 'Find the top-rated website designer near me in Narkatiaganj with MaaJanki Web Tech. We engineer high-speed, mobile-responsive websites that help West Champaran business owners, agricultural enterprises, and local shops capture more customers online.',
    faq1Q: 'Which is the most affordable website designer near me in Narkatiaganj?',
    faq1A: 'MaaJanki Web Tech provides budget-friendly, high-performance website design packages in Narkatiaganj without cutting corners on speed, mobile design, or SEO.',
    faq2Q: 'Will my website work smoothly on all mobile phones?',
    faq2A: 'Yes, 100%. All websites engineered by MaaJanki Web Tech are built with fluid responsive frameworks that adapt effortlessly to any smartphone or tablet.',
    faq3Q: 'How can local SEO help my Narkatiaganj business attract customers?',
    faq3A: 'Local SEO ensures your business appears in the top 3 results when people in West Champaran search for your products or services on Google Search and Google Maps.'
  },

  // --- 2. INDIA METROS & MAJOR HUBS (9) ---
  {
    slug: 'delhi',
    name: 'Delhi NCR',
    fullName: 'Delhi NCR, India',
    region: 'National Capital Region, India',
    state: 'Delhi',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '110001',
    address: 'Capital Service Desk: Connaught Place / South Extension, Delhi NCR - 110001',
    lat: 28.6139,
    lng: 77.2090,
    nearby: ['New Delhi', 'Noida', 'Gurugram', 'Faridabad', 'Ghaziabad', 'Delhi NCR'],
    metaTitle: 'Website Designer Near Me in Delhi NCR | MaaJanki Web Tech',
    metaDesc: 'Looking for a top website designer near me in Delhi NCR? MaaJanki Web Tech engineers high-speed Next.js web applications, corporate SEO & paid ads. Get a quote!',
    h1: 'Website Designer & Digital Marketing Agency Near Me in Delhi NCR',
    nearMeIntro: 'Looking for an agile, high-performance website designer near me in Delhi NCR? MaaJanki Web Tech engineers custom Next.js web applications, corporate digital identities, and high-ROI Google Ads funnels that outpace legacy agency bloat with transparent delivery.',
    faq1Q: 'How do I choose a top website designer near me in Delhi NCR?',
    faq1A: 'Choose an engineering-first agency that utilizes modern frameworks like Next.js 15 instead of slow, bloated WordPress templates. MaaJanki Web Tech guarantees 95+ PageSpeed scores and direct developer communication.',
    faq2Q: 'Can you build custom enterprise web applications in Delhi NCR?',
    faq2A: 'Yes, we architect full-stack cloud software, B2B SaaS platforms, corporate intranets, and automated customer portals engineered for high-traffic scalability.',
    faq3Q: 'What are your turnaround times for projects in Delhi NCR?',
    faq3A: 'Corporate landing pages and business platforms typically launch within 7 to 14 days, while complex SaaS or custom web applications roll out in agile 2-week sprint cycles.'
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    fullName: 'Mumbai, Maharashtra',
    region: 'Mumbai Metropolitan Region, Maharashtra',
    state: 'Maharashtra',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '400001',
    address: 'Metropolitan Commercial Desk: BKC / Andheri, Mumbai, Maharashtra - 400051',
    lat: 19.0760,
    lng: 72.8777,
    nearby: ['Navi Mumbai', 'Thane', 'BKC', 'Andheri', 'South Mumbai', 'Maharashtra'],
    metaTitle: 'Website Designer Near Me in Mumbai | MaaJanki Web Tech',
    metaDesc: 'Premier website designer and web development company near me in Mumbai, Maharashtra. Custom Next.js web applications, e-commerce & B2B SEO. Get a free quote!',
    h1: 'Website Designer & Web Development Company Near Me in Mumbai',
    nearMeIntro: 'Accelerate your commercial growth with the premier website designer near me in Mumbai. From fintech startups to legacy enterprises across Maharashtra, MaaJanki Web Tech delivers high-speed Next.js platforms, e-commerce portals, and enterprise search dominance.',
    faq1Q: 'Which is the best web development agency near me in Mumbai?',
    faq1A: 'MaaJanki Web Tech is recognized for high-performance web architecture, combining modern UI/UX with Next.js 15 speed, MSME government accreditation, and full-funnel digital marketing.',
    faq2Q: 'Do you build D2C and high-volume e-commerce stores in Mumbai?',
    faq2A: 'Yes! We engineer custom headless Shopify and WooCommerce stores with automated payment gateways, sub-second product pages, and abandoned cart recovery systems.',
    faq3Q: 'How does MaaJanki Web Tech support remote collaboration with Mumbai teams?',
    faq3A: 'We work seamlessly via Slack, Google Meet, and Jira with dedicated project managers, daily sprint standups, and transparent staging server previews.'
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    fullName: 'Bengaluru, Karnataka',
    region: 'Bengaluru Urban, Karnataka',
    state: 'Karnataka',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '560001',
    address: 'Tech Innovation Desk: Koramangala / Indiranagar, Bengaluru, Karnataka - 560034',
    lat: 12.9716,
    lng: 77.5946,
    nearby: ['Whitefield', 'Koramangala', 'HSR Layout', 'Indiranagar', 'Electronic City', 'Karnataka'],
    metaTitle: 'Website Designer Near Me in Bengaluru | MaaJanki Web Tech',
    metaDesc: 'Looking for a top-rated website designer near me in Bengaluru, Karnataka? High-performance Next.js SaaS platforms, startup websites & SEO. Get a free audit!',
    h1: 'Website Designer & Web Development Agency Near Me in Bengaluru',
    nearMeIntro: 'Looking for a world-class website designer near me in Bengaluru? As India’s tech capital, Bengaluru demands cutting-edge engineering. MaaJanki Web Tech builds ultra-fast Next.js web applications, sleek SaaS landing pages, and AI-ready SEO architectures for startups and tech companies.',
    faq1Q: 'Why should tech startups in Bengaluru choose MaaJanki Web Tech?',
    faq1A: 'We build with modern developer tech stacks (Next.js 15, React 19, TypeScript, Tailwind CSS, Node.js) that allow startups to iterate quickly, scale traffic seamlessly, and maintain sub-second load speeds.',
    faq2Q: 'Can you design high-converting SaaS landing pages and products?',
    faq2A: 'Yes, we specialize in high-converting SaaS UI/UX, interactive pricing calculators, product demo sandboxes, and documentation portals that turn visitors into active subscribers.',
    faq3Q: 'Do you optimize websites for Google AI Overviews and ChatGPT search?',
    faq3A: 'Yes! Our Generative Engine Optimization (GEO) protocols inject Schema.org JSON-LD entities and factual citation blocks so AI engines cite your startup as an industry authority.'
  },
  {
    slug: 'noida',
    name: 'Noida',
    fullName: 'Noida, Uttar Pradesh',
    region: 'Gautam Buddha Nagar, Uttar Pradesh',
    state: 'Uttar Pradesh',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '201301',
    address: 'NCR Tech Zone Desk: Sector 62 / Sector 18, Noida, Uttar Pradesh - 201301',
    lat: 28.5355,
    lng: 77.3910,
    nearby: ['Greater Noida', 'Sector 62', 'Sector 18', 'Ghaziabad', 'Delhi NCR', 'Uttar Pradesh'],
    metaTitle: 'Website Designer Near Me in Noida UP | MaaJanki Web Tech',
    metaDesc: 'Expert website designer and web development company near me in Noida, UP. Custom corporate web applications, startup portals & Google SEO. Get a free quote!',
    h1: 'Website Designer & Web Development Company Near Me in Noida',
    nearMeIntro: 'Dominate your market with the top website designer near me in Noida. MaaJanki Web Tech engineers robust corporate portals, B2B lead generation engines, and modern Next.js web applications for IT companies, manufacturing firms, and retail brands across Noida and Greater Noida.',
    faq1Q: 'Who is the best web development agency near me in Noida, UP?',
    faq1A: 'MaaJanki Web Tech delivers premier web development and SEO in Noida, providing custom software, responsive corporate websites, and transparent pricing with zero lock-in.',
    faq2Q: 'Can you handle technical SEO and Google Ads for Noida IT firms?',
    faq2A: 'Yes, our certified Google Ads specialists and SEO architects build targeted B2B funnels that lower customer acquisition costs and drive high-ticket corporate inquiries.',
    faq3Q: 'How do you ensure data security for corporate websites?',
    faq3A: 'We implement end-to-end HTTPS/TLS, automated CSRF/XSS protection, rate limiting, and Cloudflare WAF integration to ensure zero security vulnerabilities.'
  },
  {
    slug: 'pune',
    name: 'Pune',
    fullName: 'Pune, Maharashtra',
    region: 'Pune District, Maharashtra',
    state: 'Maharashtra',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '411001',
    address: 'Regional IT Desk: Hinjewadi / Viman Nagar, Pune, Maharashtra - 411057',
    lat: 18.5204,
    lng: 73.8567,
    nearby: ['Hinjewadi', 'Viman Nagar', 'Kothrud', 'Baner', 'Pimpri-Chinchwad', 'Maharashtra'],
    metaTitle: 'Website Designer Near Me in Pune | MaaJanki Web Tech',
    metaDesc: 'Top website designer and web development agency near me in Pune, Maharashtra. Custom Next.js applications, industrial web portals & SEO. Request a free audit!',
    h1: 'Website Designer & Web Development Agency Near Me in Pune',
    nearMeIntro: 'Partner with the leading website designer near me in Pune. We deliver high-speed web platforms, e-commerce stores, and digital marketing strategies tailored for Pune’s automotive, IT, manufacturing, and educational leaders.',
    faq1Q: 'What makes MaaJanki Web Tech the best website designer near me in Pune?',
    faq1A: 'We combine industrial-grade technical stability with modern aesthetics, building custom Next.js platforms that load in under 1 second and rank prominently on Google.',
    faq2Q: 'Do you create web portals for educational and industrial companies in Pune?',
    faq2A: 'Yes, we develop custom client portals, student admission gateways, and industrial product catalogs with secure role-based access control.',
    faq3Q: 'How fast can our website project kick off in Pune?',
    faq3A: 'We can initiate discovery and wireframing within 24 hours of your project approval and deploy staging environments within the first week.'
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    fullName: 'Kolkata, West Bengal',
    region: 'Kolkata Metropolitan Area, West Bengal',
    state: 'West Bengal',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '700001',
    address: 'Eastern Commercial Desk: Salt Lake Sector V / Park Street, Kolkata, West Bengal - 700091',
    lat: 22.5726,
    lng: 88.3639,
    nearby: ['Salt Lake', 'New Town', 'Howrah', 'Park Street', 'Rajarhat', 'West Bengal'],
    metaTitle: 'Website Designer Near Me in Kolkata | MaaJanki Web Tech',
    metaDesc: 'Looking for a creative website designer near me in Kolkata, West Bengal? We build high-speed Next.js websites, e-commerce stores & local SEO. Get a free quote!',
    h1: 'Website Designer & Web Development Company Near Me in Kolkata',
    nearMeIntro: 'Empower your business with the top website designer near me in Kolkata. MaaJanki Web Tech combines creative UI/UX excellence with robust Next.js programming to build websites that captivate audiences and dominate organic search across Eastern India.',
    faq1Q: 'Which is the top creative web design agency near me in Kolkata?',
    faq1A: 'MaaJanki Web Tech is celebrated for modern glassmorphic designs, ultra-fast load times, and custom full-stack solutions tailored for Kolkata businesses and startups.',
    faq2Q: 'Do you provide e-commerce development for handicrafts and retail brands in Kolkata?',
    faq2A: 'Yes! We engineer custom Shopify and Next.js commerce platforms with automated shipping integrations, UPI checkouts, and multi-currency support.',
    faq3Q: 'What is included in your website maintenance services?',
    faq3A: 'Our monthly maintenance includes security patches, automated cloud backups, 99.9% uptime monitoring, and Core Web Vitals optimization.'
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    fullName: 'Lucknow, Uttar Pradesh',
    region: 'Lucknow District, Uttar Pradesh',
    state: 'Uttar Pradesh',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '226001',
    address: 'State Capital Desk: Hazratganj / Gomti Nagar, Lucknow, Uttar Pradesh - 226010',
    lat: 26.8467,
    lng: 80.9462,
    nearby: ['Gomti Nagar', 'Hazratganj', 'Alambagh', 'Indira Nagar', 'Kanpur', 'Uttar Pradesh'],
    metaTitle: 'Website Designer Near Me in Lucknow | MaaJanki Web Tech',
    metaDesc: 'Leading website designer and digital marketing agency near me in Lucknow, UP. Custom Next.js web development, e-commerce & Google 3-Pack SEO. Get a free quote!',
    h1: 'Website Designer & Digital Marketing Agency Near Me in Lucknow',
    nearMeIntro: 'Looking for the best website designer near me in Lucknow? MaaJanki Web Tech provides custom Next.js web engineering, Google 3-Pack local SEO, and full-funnel performance marketing to help Uttar Pradesh businesses attract high-paying clients.',
    faq1Q: 'Who is the top-rated website designer near me in Lucknow, UP?',
    faq1A: 'MaaJanki Web Tech is recognized for delivering premium web design, rapid development turnaround, and verified MSME government credentials for Lucknow businesses.',
    faq2Q: 'Can you help our Lucknow retail store rank on Google Maps?',
    faq2A: 'Yes, our local SEO service optimizes your Google Business Profile, builds local NAP citations, and boosts customer review generation to secure top 3-Pack rankings.',
    faq3Q: 'What does a custom business website package include?',
    faq3A: 'All packages include custom UI/UX design, mobile responsiveness, SSL security, contact forms with WhatsApp chat integration, and foundational on-page SEO.'
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    fullName: 'Jaipur, Rajasthan',
    region: 'Jaipur District, Rajasthan',
    state: 'Rajasthan',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '302001',
    address: 'Heritage City Desk: Malviya Nagar / C-Scheme, Jaipur, Rajasthan - 302017',
    lat: 26.9124,
    lng: 75.7873,
    nearby: ['C-Scheme', 'Malviya Nagar', 'Mansarovar', 'Vaishali Nagar', 'Ajmer', 'Rajasthan'],
    metaTitle: 'Website Designer Near Me in Jaipur | MaaJanki Web Tech',
    metaDesc: 'Top-rated website designer and web development agency near me in Jaipur, Rajasthan. Custom hospitality web portals, e-commerce & SEO. Request a free quote!',
    h1: 'Website Designer & Web Development Company Near Me in Jaipur',
    nearMeIntro: 'Scale your business with the leading website designer near me in Jaipur. From luxury hospitality and heritage tourism to jewelry and textile e-commerce, MaaJanki Web Tech designs visually captivating, high-performance web platforms that sell globally.',
    faq1Q: 'Which is the best web design agency near me in Jaipur for hospitality?',
    faq1A: 'MaaJanki Web Tech builds luxury hotel, resort, and heritage tour websites featuring direct booking engines, high-res photo galleries, and fast international load speeds.',
    faq2Q: 'Do you build international e-commerce stores for Jaipur jewelry and handicrafts?',
    faq2A: 'Yes, we create multi-currency global storefronts with PayPal, Stripe, and DHL/FedEx logistics integration for effortless cross-border export sales.',
    faq3Q: 'How do you ensure our Jaipur business ranks for international searchers?',
    faq3A: 'We implement international SEO hreflang tags, global CDN caching, and high-intent commercial keyword optimization to capture overseas buyers.'
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    fullName: 'Hyderabad, Telangana',
    region: 'Hyderabad Urban, Telangana',
    state: 'Telangana',
    country: 'India',
    type: 'indiaMetro',
    postalCode: '500001',
    address: 'HITEC City Desk: Madhapur / Gachibowli, Hyderabad, Telangana - 500081',
    lat: 17.3850,
    lng: 78.4867,
    nearby: ['HITEC City', 'Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Telangana'],
    metaTitle: 'Website Designer Near Me in Hyderabad | MaaJanki Web Tech',
    metaDesc: 'Premier website designer and web development company near me in Hyderabad, Telangana. Scalable Next.js web applications, e-commerce & SEO. Get a free quote!',
    h1: 'Website Designer & Web Development Agency Near Me in Hyderabad',
    nearMeIntro: 'Build world-class digital platforms with the top website designer near me in Hyderabad. Serving tech enterprises in HITEC City and growing commercial brands across Telangana, MaaJanki Web Tech delivers scalable Next.js web apps and ROI-driven marketing.',
    faq1Q: 'Why choose MaaJanki Web Tech for web development near me in Hyderabad?',
    faq1A: 'We bring Next.js 15 full-stack engineering, sub-second load times, and custom MERN stack software architectures built for enterprise scalability without excessive overhead.',
    faq2Q: 'Can you develop B2B enterprise software and client portals in Hyderabad?',
    faq2A: 'Yes, we build secure, API-connected customer portals, billing platforms, and operational dashboards tailored to your enterprise workflows.',
    faq3Q: 'Do you offer performance marketing and Google Ads management in Hyderabad?',
    faq3A: 'Yes, our certified performance marketers manage data-driven PPC campaigns on Google and Meta that maximize conversion volume and minimize cost per lead.'
  },

  // --- 3. NATIONAL & INTERNATIONAL (41) ---
  {
    slug: 'india',
    name: 'India',
    fullName: 'India (PAN-India)',
    region: 'All India',
    country: 'India',
    type: 'international',
    postalCode: '110001',
    address: 'National Operations: MaaJanki Web Tech, India',
    lat: 20.5937,
    lng: 78.9629,
    nearby: ['Delhi', 'Mumbai', 'Bengaluru', 'Kolkata', 'Hyderabad', 'Chennai', 'Pune'],
    metaTitle: 'Website Designer & Web Development India | MaaJanki Web Tech',
    metaDesc: 'Top-rated website designer and web development company in India. Custom Next.js applications, enterprise software, e-commerce & AI SEO. Get a free 30-min audit!',
    h1: 'Website Designer & Full-Stack Web Development Company in India',
    nearMeIntro: 'Searching for a trusted website designer and web development company in India? MaaJanki Web Tech is a DPIIT-recognized, MSME-certified digital engineering agency providing modern Next.js development, e-commerce systems, and performance marketing nationwide.',
    faq1Q: 'Why is MaaJanki Web Tech a top web development company in India?',
    faq1A: 'We engineer ultra-fast websites using Next.js 15 and React 19, delivering sub-second load times, verified Schema.org entity grounding, and proven conversion design.',
    faq2Q: 'What services does MaaJanki Web Tech provide across India?',
    faq2A: 'We offer full-stack web development, custom SaaS software, Shopify/WooCommerce e-commerce, Google 3-Pack SEO, performance PPC ads, and corporate branding.',
    faq3Q: 'How do you handle client projects remotely across India?',
    faq3A: 'We collaborate seamlessly via Google Meet, Slack, and dedicated project dashboards, providing daily updates, transparent milestone billing, and 24/7 technical support.'
  },
  {
    slug: 'nepal',
    name: 'Nepal',
    fullName: 'Nepal',
    region: 'Nepal',
    country: 'Nepal',
    type: 'international',
    postalCode: '44600',
    address: 'Cross-Border Services: MaaJanki Web Tech, Serving Nepal',
    lat: 27.7172,
    lng: 85.3240,
    nearby: ['Kathmandu', 'Pokhara', 'Birgunj', 'Lalitpur', 'Biratnagar'],
    metaTitle: 'Web Design & Digital Marketing Nepal | MaaJanki Web Tech',
    metaDesc: 'Leading web design and development company near you in Nepal. Custom multi-lingual web applications, e-commerce portals & Google SEO. Get a free quote today!',
    h1: 'Web Design & Digital Marketing Agency Near You in Nepal',
    nearMeIntro: 'Scale your business in Nepal with the premier cross-border web development partner. MaaJanki Web Tech provides custom, mobile-optimized websites, multilingual portals, and search visibility tailored for businesses in Kathmandu, Pokhara, Birgunj, and nationwide.',
    faq1Q: 'Can MaaJanki Web Tech build multilingual websites for Nepal?',
    faq1A: 'Yes! We create English, Nepali, and Hindi multilingual websites with fast font rendering and smooth user experiences across all devices.',
    faq2Q: 'Do you support e-commerce websites with Nepalese payment gateways?',
    faq2A: 'We integrate international payment gateways as well as regional transaction workflows to enable smooth e-commerce operations in Nepal.',
    faq3Q: 'How do I start a website project for my business in Nepal?',
    faq3A: 'Reach out via WhatsApp at +91-9006543913 or our online form. We schedule a free strategy consultation to map out your digital roadmap.'
  }
];

// Helper: Add 39 remaining international destinations with tailored values
const internationalCountries = [
  { slug: 'argentina', name: 'Argentina', capital: 'Buenos Aires', lat: -38.4161, lng: -63.6167 },
  { slug: 'australia', name: 'Australia', capital: 'Sydney / Melbourne', lat: -25.2744, lng: 133.7751 },
  { slug: 'austria', name: 'Austria', capital: 'Vienna', lat: 47.5162, lng: 14.5501 },
  { slug: 'bahrain', name: 'Bahrain', capital: 'Manama', lat: 26.0667, lng: 50.5577 },
  { slug: 'bangladesh', name: 'Bangladesh', capital: 'Dhaka', lat: 23.6850, lng: 90.3563 },
  { slug: 'belgium', name: 'Belgium', capital: 'Brussels', lat: 50.5039, lng: 4.4699 },
  { slug: 'brazil', name: 'Brazil', capital: 'São Paulo', lat: -14.2350, lng: -51.9253 },
  { slug: 'canada', name: 'Canada', capital: 'Toronto / Vancouver', lat: 56.1304, lng: -106.3468 },
  { slug: 'chile', name: 'Chile', capital: 'Santiago', lat: -35.6751, lng: -71.5430 },
  { slug: 'denmark', name: 'Denmark', capital: 'Copenhagen', lat: 56.2639, lng: 9.5018 },
  { slug: 'finland', name: 'Finland', capital: 'Helsinki', lat: 61.9241, lng: 25.7482 },
  { slug: 'france', name: 'France', capital: 'Paris', lat: 46.2276, lng: 2.2137 },
  { slug: 'germany', name: 'Germany', capital: 'Berlin / Frankfurt', lat: 51.1657, lng: 10.4515 },
  { slug: 'ireland', name: 'Ireland', capital: 'Dublin', lat: 53.1424, lng: -7.6921 },
  { slug: 'italy', name: 'Italy', capital: 'Rome / Milan', lat: 41.8719, lng: 12.5674 },
  { slug: 'japan', name: 'Japan', capital: 'Tokyo', lat: 36.2048, lng: 138.2529 },
  { slug: 'kenya', name: 'Kenya', capital: 'Nairobi', lat: -0.0236, lng: 37.9062 },
  { slug: 'kuwait', name: 'Kuwait', capital: 'Kuwait City', lat: 29.3117, lng: 47.4818 },
  { slug: 'malaysia', name: 'Malaysia', capital: 'Kuala Lumpur', lat: 4.2105, lng: 101.9758 },
  { slug: 'mexico', name: 'Mexico', capital: 'Mexico City', lat: 23.6345, lng: -102.5528 },
  { slug: 'netherlands', name: 'Netherlands', capital: 'Amsterdam', lat: 52.1326, lng: 5.2913 },
  { slug: 'new-zealand', name: 'New Zealand', capital: 'Auckland', lat: -40.9006, lng: 174.8860 },
  { slug: 'nigeria', name: 'Nigeria', capital: 'Lagos / Abuja', lat: 9.0820, lng: 8.6753 },
  { slug: 'norway', name: 'Norway', capital: 'Oslo', lat: 60.4720, lng: 8.4689 },
  { slug: 'oman', name: 'Oman', capital: 'Muscat', lat: 21.4735, lng: 55.9754 },
  { slug: 'poland', name: 'Poland', capital: 'Warsaw', lat: 51.9194, lng: 19.1451 },
  { slug: 'portugal', name: 'Portugal', capital: 'Lisbon', lat: 39.3999, lng: -8.2245 },
  { slug: 'qatar', name: 'Qatar', capital: 'Doha', lat: 25.3548, lng: 51.1839 },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', capital: 'Riyadh / Jeddah', lat: 23.8859, lng: 45.0792 },
  { slug: 'singapore', name: 'Singapore', capital: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { slug: 'south-africa', name: 'South Africa', capital: 'Johannesburg / Cape Town', lat: -30.5595, lng: 22.9375 },
  { slug: 'south-korea', name: 'South Korea', capital: 'Seoul', lat: 35.9078, lng: 127.7669 },
  { slug: 'spain', name: 'Spain', capital: 'Madrid / Barcelona', lat: 40.4637, lng: -3.7492 },
  { slug: 'sri-lanka', name: 'Sri Lanka', capital: 'Colombo', lat: 7.8731, lng: 80.7718 },
  { slug: 'sweden', name: 'Sweden', capital: 'Stockholm', lat: 60.1282, lng: 18.6435 },
  { slug: 'switzerland', name: 'Switzerland', capital: 'Zurich / Geneva', lat: 46.8182, lng: 8.2275 },
  { slug: 'united-arab-emirates', name: 'United Arab Emirates', capital: 'Dubai / Abu Dhabi', lat: 23.4241, lng: 53.8478 },
  { slug: 'united-kingdom', name: 'United Kingdom', capital: 'London', lat: 55.3781, lng: -3.4360 },
  { slug: 'united-states', name: 'United States', capital: 'New York / California', lat: 37.0902, lng: -95.7129 },
];

internationalCountries.forEach(c => {
  const shortName = c.name === 'United Arab Emirates' ? 'UAE' : c.name === 'United Kingdom' ? 'UK' : c.name === 'United States' ? 'USA' : c.name;
  
  // Title tag: Strictly 50-60 chars
  let metaTitle = `Web Design & Development Agency in ${shortName} | MaaJanki`;
  if (metaTitle.length < 50) {
    metaTitle = `Web Design & Development in ${shortName} | MaaJanki Web Tech`;
  }
  if (metaTitle.length > 60) {
    metaTitle = `Web Design Agency in ${shortName} | MaaJanki Web Tech`;
  }
  if (metaTitle.length < 50) {
    metaTitle = `Web Design & SEO Agency in ${shortName} | MaaJanki Web Tech`;
  }

  // Meta description: Strictly 150-160 chars
  let metaDesc = `Premier web design and development company serving businesses near you in ${shortName}. Custom Next.js web applications & SEO. Request a free 30-min audit today!`;
  if (metaDesc.length > 160) {
    metaDesc = `Top web design and development agency near you in ${shortName}. Custom Next.js web apps, eCommerce & global SEO. Request your free 30-min strategy audit now!`;
  }
  if (metaDesc.length > 160) {
    metaDesc = `Top web design agency near you in ${shortName}. Custom Next.js web apps, eCommerce & global SEO. Request your free 30-min strategy audit now!`;
  }
  if (metaDesc.length < 150) {
    metaDesc = `Premier web design and development company serving businesses near you in ${shortName}. Custom Next.js web applications & global SEO. Get a free quote today!`;
  }
  if (metaDesc.length < 150) {
    metaDesc = `Premier website design and development company serving businesses near you in ${shortName}. Custom Next.js web applications & SEO. Request a free quote today!`;
  }

  locations.push({
    slug: c.slug,
    name: c.name,
    fullName: c.name,
    region: c.name,
    country: c.name,
    type: 'international',
    postalCode: '00000',
    address: `Global Client Solutions: Serving ${c.name} (HQ: Bagaha, Bihar, India)`,
    lat: c.lat,
    lng: c.lng,
    nearby: [c.capital, c.name, 'Global'],
    metaTitle,
    metaDesc,
    h1: `Web Design & Custom Web Development Agency Serving ${c.name}`,
    nearMeIntro: `Looking for a high-performing web design and development partner serving ${c.name}? MaaJanki Web Tech delivers bespoke Next.js web engineering, global e-commerce platforms, and data-driven marketing with seamless time-zone alignment.`,
    faq1Q: `Why hire MaaJanki Web Tech for web development in ${c.name}?`,
    faq1A: `We offer Silicon-Valley grade Next.js 15 web development at highly competitive rates, with fluent English communication, rapid agile sprints, and 95+ Google PageSpeed guarantees.`,
    faq2Q: `How do you manage time zone differences with clients in ${c.name}?`,
    faq2A: `Our distributed engineering teams offer dedicated overlap hours tailored to your regional business hours, ensuring smooth daily standups, instant Slack messaging, and rapid responses.`,
    faq3Q: `What payment options do you support for international clients in ${c.name}?`,
    faq3A: `We support international wire transfers, Stripe, PayPal, and multi-currency invoicing with clear milestone-based deliverables.`
  });
});

console.log('Total locations configured:', locations.length);

function generatePageCode(loc) {
  const isIndia = loc.country === 'India';
  const priceRange = isIndia ? '₹₹' : '$$';
  const currencySymbol = isIndia ? '₹' : '$';

  // Format schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `https://maajankiwebtech.com/locations/${loc.slug}#business`,
        "parentOrganization": {
          "@type": "Organization",
          "name": "MaaJanki Web Tech",
          "url": "https://maajankiwebtech.com/",
          "@id": "https://maajankiwebtech.com/#organization"
        },
        "name": `MaaJanki Web Tech - ${loc.name}`,
        "legalName": "MaaJanki Web Tech",
        "description": loc.metaDesc,
        "url": `https://maajankiwebtech.com/locations/${loc.slug}`,
        "telephone": "+91-9006543913",
        "email": "info@maajankiwebtech.com",
        "image": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp",
        "priceRange": priceRange,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar",
          "addressLocality": "Bagaha",
          "addressRegion": "Bihar",
          "postalCode": "845101",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": loc.lat,
          "longitude": loc.lng
        },
        "areaServed": loc.nearby,
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://share.google/sfG7HXx0jHaeRi8Tb",
          "https://www.linkedin.com/company/maajanki-web-tech-company/",
          "https://www.facebook.com/profile.php?id=61577526895580",
          "https://www.instagram.com/maajankiwebtech/"
        ],
        "identifier": {
          "@type": "PropertyValue",
          "name": "MSME Udyam Registration Number",
          "value": "UDYAM-BR-38-0014113"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://maajankiwebtech.com/locations/${loc.slug}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": loc.faq1Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": loc.faq1A
            }
          },
          {
            "@type": "Question",
            "name": loc.faq2Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": loc.faq2A
            }
          },
          {
            "@type": "Question",
            "name": loc.faq3Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": loc.faq3A
            }
          }
        ]
      }
    ]
  };

  const keywords = [
    `website designer near me in ${loc.name}`,
    `web development company near me ${loc.name}`,
    `web designer near me ${loc.name}`,
    `digital marketing agency near me in ${loc.name}`,
    `best website maker near me ${loc.name}`,
    `Next.js developer ${loc.name}`,
    `local SEO services ${loc.name}`,
    `MaaJanki Web Tech ${loc.name}`
  ];

  const mapSrc = (loc.type === 'bihar' && loc.slug === 'bagaha')
    ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.077602258112!2d84.50572527522043!3d26.80565757671114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936f24a2f8dd1f%3A0x172dd318eac9cc5b!2sMAAJANKI%20WEB%20TECH!5e0!3m2!1sen!2sin!4v1763971778984!5m2!1sen!2sin'
    : `https://maps.google.com/maps?q=${encodeURIComponent(loc.fullName)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return `import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/app/contact/ContactForm';

import '@/app/styles/Contact.css';
import '@/app/styles/Home.css';
import { Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle, HelpCircle } from "lucide-react";

export const metadata = {
  title: ${JSON.stringify(loc.metaTitle)},
  description: ${JSON.stringify(loc.metaDesc)},
  keywords: ${JSON.stringify(keywords)},
  alternates: {
    canonical: 'https://maajankiwebtech.com/locations/${loc.slug}',
  },
  openGraph: {
    title: ${JSON.stringify(loc.metaTitle)},
    description: ${JSON.stringify(loc.metaDesc)},
    url: 'https://maajankiwebtech.com/locations/${loc.slug}',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(loc.metaTitle)},
    description: ${JSON.stringify(loc.metaDesc)},
  },
};

export default function Page() {
  const localBusinessSchema = ${JSON.stringify(localBusinessSchema, null, 2)};

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Banner Section */}
      <section className="custom-banner">
        <Image 
          priority 
          src="/images/pages/main-services-pages/contact-banner-image-Maajanki-Web-Tech.webp" 
          alt="MaaJanki Web Tech ${loc.name} office and web development banner" 
          title="${loc.h1}" 
          width="1280" 
          height="720"
        />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>${loc.h1}</h1>
            <p>
              ${loc.nearMeIntro}
            </p>
            <div className="banner-buttons">
              <a
                href="https://share.google/sfG7HXx0jHaeRi8Tb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn1"
              >
                Review Us on Google
              </a>
              <Link href="/contact" className="btn2">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info Section */}
      <section className="contact-promo-section">
        <div className="contact-promo-container">
          <div className="contact-promo-grid">
            <a href="tel:+919006543913" className="contact-link">
              <div className="contact-promo-card">
                <Phone className="contact-icon" />
                <h4 className="contact-promo-title">Call Us</h4>
                <p className="contact-promo-text">+91 9006543913</p>
              </div>
            </a>

            <a 
              href="https://share.google/sfG7HXx0jHaeRi8Tb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MapPin className="contact-icon" />
                <h4 className="contact-promo-title">Coverage Desk</h4>
                <p className="contact-promo-text">${loc.name}, ${loc.country}</p>
              </div>
            </a>

            <a href="mailto:info@maajankiwebtech.com" className="contact-link">
              <div className="contact-promo-card">
                <Mail className="contact-icon" />
                <h4 className="contact-promo-title">Mail Us</h4>
                <p className="contact-promo-text">info@maajankiwebtech.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20need%20website%20services%20in%20${encodeURIComponent(loc.name)}."
              className="contact-link"
            >
              <div className="contact-promo-card">
                <MessageCircle className="contact-icon" />
                <h4 className="contact-promo-title">Live Chat</h4>
                <p className="contact-promo-text">WhatsApp Chat 24/7</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Local Content and Form */}
      <section className="contact-us-section">
        <div className="container contact">
          <div className="row justify-content-around">
            {/* Left Side - Form */}
            <div className="col-md-6">
              <Suspense fallback={<div className="p-4 text-center text-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Side - Local Business Info */}
            <div className="col-md-5">
              <div className="contact-us-content p-4 bg-white h-100 shadow-sm rounded">
                <h2 className="mb-3">Why Choose MaaJanki Web Tech Near You in ${loc.name}?</h2>
                <p className="lead text-muted">
                  We are your trusted digital growth partner for ${loc.name}. Get a high-performance Next.js website that ranks on Google and turns local searches into paying clients.
                </p>

                <div className="local-features my-4">
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Local SEO & Google Business 3-Pack Optimization</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Sub-Second Next.js & Mobile-Responsive Frameworks</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Transparent Pricing for Startups, SMBs & Enterprises</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CheckCircle className="text-success mr-2" size={20} />
                    <span className="text-dark font-weight-medium">Govt. Registered MSME (UDYAM-BR-38-0014113) & DPIIT Certified</span>
                  </div>
                </div>

                {/* Visible NAP Section */}
                <div className="nap-section my-4 p-3 bg-light border rounded">
                  <h3 className="h5 font-weight-bold text-dark mb-3">MaaJanki Web Tech (${loc.name} Service Desk)</h3>
                  <p className="mb-2">
                    <strong>Service Coverage:</strong> ${loc.address}
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+919006543913" className="text-dark">+91-9006543913</a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> <a href="mailto:info@maajankiwebtech.com" className="text-primary">info@maajankiwebtech.com</a>
                  </p>
                  <p className="mb-0">
                    <strong>Business Hours:</strong> Mon - Sat: 09:00 AM - 07:00 PM IST
                  </p>
                </div>

                <div className="d-flex flex-column gap-2">
                  <a
                    href="https://share.google/sfG7HXx0jHaeRi8Tb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-block"
                    style={{
                      backgroundColor: "#FD6A02",
                      color: "#fff",
                      borderRadius: "50px",
                      fontWeight: "500",
                      textAlign: "center",
                      padding: "10px 20px"
                    }}
                  >
                    View Verified Google Reviews
                  </a>

                  <Link
                    href="/contact"
                    className="btn btn-outline-dark btn-block"
                    style={{
                      borderRadius: "50px",
                      fontWeight: "500",
                      textAlign: "center",
                      padding: "10px 20px"
                    }}
                  >
                    Book Free 30-Min Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ & Near Me Queries Section */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: "#042544", color: "#fff", fontSize: "0.85rem" }}>
              Local Search FAQ
            </span>
            <h2 className="h2 font-weight-bold text-dark" style={{ fontSize: "1.9rem" }}>
              Frequently Asked Questions About Web Design Near Me in ${loc.name}
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Clear answers to common questions about finding, hiring, and working with a website designer in ${loc.name}.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    ${loc.faq1Q}
                  </h3>
                  <p className="text-muted mb-0">${loc.faq1A}</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    ${loc.faq2Q}
                  </h3>
                  <p className="text-muted mb-0">${loc.faq2A}</p>
                </div>
              </div>

              <div className="card mb-3 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h6 font-weight-bold text-dark mb-2">
                    <HelpCircle size={18} className="text-primary mr-2" style={{ verticalAlign: "-3px" }} />
                    ${loc.faq3Q}
                  </h3>
                  <p className="text-muted mb-0">${loc.faq3A}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="google-map-container">
          <iframe
            title="MaaJanki Web Tech ${loc.name} Location Map"
            src="${mapSrc}"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: "100%", height: "400px" }}
          ></iframe>
        </div>
      </section>
    </>
  );
}
`;
}

// Write out all 59 location pages
let writtenCount = 0;
locations.forEach(loc => {
  const targetDir = path.join(process.cwd(), 'app', 'locations', loc.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, 'page.js');
  const code = generatePageCode(loc);
  fs.writeFileSync(targetFile, code, 'utf8');
  writtenCount++;
  console.log(`[${writtenCount}/59] Generated ${loc.slug}: Title (${loc.metaTitle.length} chars) | Desc (${loc.metaDesc.length} chars)`);
});

console.log('Successfully optimized and wrote all 59 location pages!');
