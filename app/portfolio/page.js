import ClientPage from './ClientPage';

export const metadata = {
  title: "Web Development & Digital Marketing Portfolio | MaaJanki Web Tech",
  description: "Explore real web development client projects, custom SaaS applications, and SEO case studies delivered by MaaJanki Web Tech across Bihar & India.",
  keywords: ["website development portfolio", "SEO case studies Bihar", "web design projects Bettiah Bagaha Patna", "MaaJanki Web Tech portfolio"],
  openGraph: {
    title: "Web Development & Digital Marketing Portfolio | MaaJanki Web Tech",
    description: "Explore real web development client projects, custom SaaS applications, and SEO case studies delivered by MaaJanki Web Tech across Bihar & India.",
    url: "https://maajankiwebtech.com/portfolio",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Portfolio | MaaJanki Web Tech",
    description: "Explore real web development client projects, custom SaaS applications, and SEO case studies delivered by MaaJanki Web Tech across Bihar & India.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/portfolio",
  },
};

export default function Page() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://maajankiwebtech.com/portfolio/#webpage",
    "url": "https://maajankiwebtech.com/portfolio",
    "name": "Our Web Design & SEO Portfolio Bihar | MaaJanki Web Tech",
    "description": "Explore our web development and digital marketing projects in Bihar. See how our website developer in West Champaran delivers growth. Get a free quote!",
    "isPartOf": {
      "@id": "https://maajankiwebtech.com/#website"
    },
    "about": {
      "@id": "https://maajankiwebtech.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "MaaJanki Web Tech Portfolio Projects",
      "numberOfItems": 9,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "Apex Tutorial Bettiah",
            "genre": "Education",
            "description": "Premier Bihar Board (BSEB) 11th & 12th Science coaching portal in Bettiah with Smart Board classrooms and course programs.",
            "url": "https://apex-tutorial-gray.vercel.app/"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "InvoBill – Free GST Invoice Generator",
            "genre": "SaaS / Application",
            "description": "Instant 100% free GST billing & invoice generator for Indian small businesses with auto CGST/SGST/IGST calculations.",
            "url": "https://invobill.in/"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "MaaJanki Web Tech Digital Blog",
            "genre": "Technology / AI",
            "description": "Practical insights on SEO strategies, web development frameworks, digital marketing automation, and business growth.",
            "url": "https://blog.maajankiwebtech.com/"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "name": "Style Beauty Studio",
            "genre": "Web Design",
            "description": "Luxury bridal makeup and beauty salon website showcasing bridal packages, hair styling gallery, and online appointments.",
            "url": "https://style-beauty-studio.vercel.app/"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "CreativeWork",
            "name": "Shivam Kumar Portfolio",
            "genre": "Web Development",
            "description": "Personal portfolio for an MBA student and HR Specialist featuring recruitment services, education roadmap, and skills timeline.",
            "url": "https://shivam-kumar-portfolio-snowy.vercel.app/"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "CreativeWork",
            "name": "HareRam Ray Portfolio",
            "genre": "Web Development",
            "description": "Professional portfolio for an MBA candidate specializing in HR & Marketing, featuring AI recruitment research & leadership.",
            "url": "https://hareram-ray-portfolio.vercel.app/"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "CreativeWork",
            "name": "Avnish Kumar Ray Portfolio",
            "genre": "Web Development",
            "description": "Portfolio for an MBA candidate specializing in Business Analytics & Finance, highlighting MS Excel & R data modeling.",
            "url": "https://avnish-kumar-portfolio.vercel.app/"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "CreativeWork",
            "name": "Saurav Kumar Portfolio",
            "genre": "Web Development",
            "description": "Modern portfolio for an MBA student in Finance & Marketing, featuring retail operations experience and financial analysis.",
            "url": "https://saurav-kumar-portfolio-eight.vercel.app/"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "CreativeWork",
            "name": "S Yasmin Fitness Coaching",
            "genre": "Web Design",
            "description": "Dynamic health and fitness coaching website featuring custom workout programs, transformation plans, and client booking.",
            "url": "https://fitness-coach-three-lemon.vercel.app/"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <ClientPage />
    </>
  );
}
