import ClientPage from './ClientPage';

export const metadata = {
  title: "Our Web Design & SEO Portfolio Bihar | Maajanki Web Tech",
  description: "Explore our web development and digital marketing projects in Bihar. See how our website developer in West Champaran delivers growth. Get a free quote!",
  keywords: ["website developer West Champaran","web design agency Bagaha","MaaJanki Web Tech portfolio"],
  openGraph: {
    title: "Our Web Design & SEO Portfolio Bihar | Maajanki Web Tech",
    description: "Explore our web development and digital marketing projects in Bihar. See how our website developer in West Champaran delivers growth. Get a free quote!",
    url: "https://maajankiwebtech.com/portfolio",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Web Design & SEO Portfolio Bihar | Maajanki Web Tech",
    description: "Explore our web development and digital marketing projects in Bihar. See how our website developer in West Champaran delivers growth. Get a free quote!",
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
      "numberOfItems": 10,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "Creative Agency Website",
            "genre": "Web Development",
            "description": "A responsive, modern website for a creative agency built using HTML, CSS and JavaScript.",
            "url": "https://example.com/creative-agency"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "E-Commerce Platform",
            "genre": "E-Commerce",
            "description": "A fully functional online store with shopping cart and payment gateway integration.",
            "url": "https://blog.maajankiwebtech.com"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "Food Restaurant Website",
            "genre": "Web Development",
            "description": "A responsive website for a food restaurant with menu, booking, and delivery features.",
            "url": "https://example.com/food-restaurant"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "name": "Job Posting Website",
            "genre": "Web Development",
            "description": "A platform for posting jobs and managing applications efficiently.",
            "url": "https://example.com/job-posting"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "CreativeWork",
            "name": "Gym Trainer Website",
            "genre": "Web Development",
            "description": "A responsive website for gym trainers showcasing services, schedules, and client testimonials.",
            "url": "https://example.com/gym-trainer"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "CreativeWork",
            "name": "Design Studio Graphics Website",
            "genre": "Web Design",
            "description": "A portfolio website for a design studio displaying graphic projects and services.",
            "url": "https://example.com/design-studio"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "CreativeWork",
            "name": "Free AI Research Website",
            "genre": "Technology / AI",
            "description": "A website dedicated to sharing free AI research papers, tools, and tutorials.",
            "url": "https://example.com/ai-research"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "CreativeWork",
            "name": "LMS Portal Website",
            "genre": "Education",
            "description": "A learning management system (LMS) portal for online courses, quizzes, and student management.",
            "url": "https://example.com/lms-portal"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "CreativeWork",
            "name": "AI Voices Platform",
            "genre": "Technology / AI",
            "description": "An AI-powered voice generation platform with multi-language support and real-time audio preview.",
            "url": "https://example.com/ai-voices"
          }
        },
        {
          "@type": "ListItem",
          "position": 10,
          "item": {
            "@type": "CreativeWork",
            "name": "Digital Products Hub",
            "genre": "E-Commerce",
            "description": "A digital products marketplace where creators can sell eBooks, templates, courses, and software.",
            "url": "https://example.com/digital-products"
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
