import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Portfolio from '@/lib/models/Portfolio';

const INITIAL_PROJECTS = [
  {
    title: "Apex Tutorial Bettiah",
    category: "Education",
    description: "Premier Bihar Board (BSEB) 11th & 12th Science coaching portal in Bettiah with Smart Board classrooms and course programs.",
    fullImage: "/images/project/Apex Tutorial Full Page.jpg",
    heroImage: "/images/project/apex-tutorial.jpg",
    link: "https://apex-tutorial-gray.vercel.app/",
    imgTitle: "Apex Tutorial Bettiah Science Coaching Website – MaaJanki Web Tech",
    featured: true,
    order: 1,
  },
  {
    title: "InvoBill – Free GST Billing",
    category: "SaaS / Application",
    description: "Instant 100% free GST billing & invoice generator for Indian small businesses with auto CGST/SGST/IGST calculations and PDF export.",
    fullImage: "/images/project/Invobill Full Page.jpg",
    heroImage: "/images/project/invobill.jpg",
    link: "https://invobill.in/",
    imgTitle: "InvoBill Free GST Invoice Generator Web App – MaaJanki Web Tech",
    featured: true,
    order: 2,
  },
  {
    title: "MaaJanki Digital Blog",
    category: "Technology / AI",
    description: "Practical insights on SEO strategies, web development frameworks, digital marketing automation, and business growth.",
    fullImage: "/images/project/Maajanki Blog Full Page.jpg",
    heroImage: "/images/project/maajanki-blog.jpg",
    link: "https://blog.maajankiwebtech.com/",
    imgTitle: "MaaJanki Web Tech Tech & Digital Growth Blog",
    featured: true,
    order: 3,
  },
  {
    title: "Style Beauty Studio",
    category: "Web Design",
    description: "Luxury bridal makeup and beauty salon website showcasing bridal packages, hair styling gallery, and online appointments.",
    fullImage: "/images/project/Beauty Studio Full Page.jpg",
    heroImage: "/images/project/style-beauty-studio.jpg",
    link: "https://style-beauty-studio.vercel.app/",
    imgTitle: "Style Beauty Studio Luxury Bridal Makeup Website",
    featured: true,
    order: 4,
  },
  {
    title: "Shivam Kumar Portfolio",
    category: "Web Development",
    description: "Personal portfolio for an MBA student and HR Specialist featuring recruitment services, education roadmap, and skills timeline.",
    fullImage: "/images/project/Shivam Full Page.jpg",
    heroImage: "/images/project/shivam-kumar-portfolio.jpg",
    link: "https://shivam-kumar-portfolio-snowy.vercel.app/",
    imgTitle: "Shivam Kumar HR Specialist & MBA Portfolio Website",
    featured: true,
    order: 5,
  },
  {
    title: "HareRam Ray Portfolio",
    category: "Web Development",
    description: "Professional portfolio for an MBA candidate specializing in HR & Marketing, featuring AI recruitment research & leadership.",
    fullImage: "/images/project/Hareram Full Page.jpg",
    heroImage: "/images/project/hareram-ray-portfolio.jpg",
    link: "https://hareram-ray-portfolio.vercel.app/",
    imgTitle: "HareRam Ray MBA HR Portfolio Website",
    featured: true,
    order: 6,
  },
  {
    title: "Avnish Kumar Portfolio",
    category: "Web Development",
    description: "Portfolio for an MBA candidate specializing in Business Analytics & Finance, highlighting MS Excel & R data modeling.",
    fullImage: "/images/project/Avnish Full Page.jpg",
    heroImage: "/images/project/avnish-kumar-portfolio.jpg",
    link: "https://avnish-kumar-portfolio.vercel.app/",
    imgTitle: "Avnish Kumar Ray Business Analytics Portfolio",
    featured: true,
    order: 7,
  },
  {
    title: "Saurav Kumar Portfolio",
    category: "Web Development",
    description: "Modern portfolio for an MBA student in Finance & Marketing, featuring retail operations experience and financial analysis.",
    fullImage: "/images/project/Saurav Full page.jpg",
    heroImage: "/images/project/saurav-kumar-portfolio.jpg",
    link: "https://saurav-kumar-portfolio-eight.vercel.app/",
    imgTitle: "Saurav Kumar Finance & Marketing Portfolio",
    featured: true,
    order: 8,
  },
  {
    title: "S Yasmin Fitness Coaching",
    category: "Web Design",
    description: "Dynamic health and fitness coaching website featuring custom workout programs, transformation plans, and client booking.",
    fullImage: "/images/project/Fitnesh Full Page.jpg",
    heroImage: "/images/project/fitness-coach.jpg",
    link: "https://fitness-coach-three-lemon.vercel.app/",
    imgTitle: "S Yasmin Fitness Coaching Platform",
    featured: true,
    order: 9,
  },
];

export async function GET() {
  try {
    await connectDB();
    const count = await Portfolio.countDocuments();

    // Auto seed initial 9 projects only if database collection is completely empty
    if (count === 0) {
      const ops = INITIAL_PROJECTS.map((p) => ({
        updateOne: {
          filter: { title: p.title },
          update: { $setOnInsert: p },
          upsert: true,
        },
      }));
      await Portfolio.bulkWrite(ops);
    }

    const projects = await Portfolio.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json({ success: true, count: projects.length, projects });
  } catch (error) {
    console.error('API /api/portfolio GET Error:', error);
    return NextResponse.json({ success: false, projects: [], error: error.message }, { status: 500 });
  }
}
