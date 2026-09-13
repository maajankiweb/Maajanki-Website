import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import JobOpening from '@/lib/models/JobOpening';

const DEFAULT_SEED_JOBS = [
  {
    title: 'SEO Intern (Free Internship)',
    category: 'intern',
    department: 'Marketing & SEO',
    experience: '0–1 Years — Freshers are welcome!',
    location: 'Bagaha, Bihar (HQ) / Remote',
    salary: 'Free Internship with Certificate & Full-Time PPO',
    openings: 3,
    skills: 'On-page SEO, Off-page SEO, keyword research, backlink building, technical SEO, and competitor analysis.',
    qualification: 'Pursuing or completed degree in Marketing, Computer Science, Communications, or related field.',
    duration: 'Free Internship – 3 months with official certificate and full-time conversion potential.',
    badges: [
      { text: 'Internship', type: 'intern' },
      { text: 'Free Program', type: 'free' },
      { text: '0–1 Yr', type: 'exp' },
    ],
    isActive: true,
    order: 1,
  },
  {
    title: 'Social Media Intern',
    category: 'intern',
    department: 'Content & Social',
    experience: '0–1 Years — Freshers welcome!',
    location: 'Bagaha, Bihar (HQ) / Hybrid',
    salary: 'Performance-based stipend + Certificate',
    openings: 2,
    skills: 'Social media strategy, Reels/Shorts creation, scheduling, analytics, community management, and trend analysis.',
    qualification: 'Pursuing or completed degree in Marketing, Mass Media, or related field.',
    duration: 'Internship – 3 to 6 months with verified certificate.',
    badges: [
      { text: 'Internship', type: 'intern' },
      { text: '0–1 Yr', type: 'exp' },
    ],
    isActive: true,
    order: 2,
  },
  {
    title: 'Digital Marketing Executive',
    category: 'fulltime',
    department: 'Growth Marketing',
    experience: '1–3 Years in digital marketing or a growth agency.',
    location: 'Bagaha, Bihar (HQ) / Hybrid',
    salary: '₹20,000 – ₹35,000 / month',
    openings: 2,
    skills: 'Social media campaign execution, Google Ads, Meta Business Suite, SEO implementation, and copywriting.',
    qualification: 'Bachelor’s degree in Marketing, Business, or equivalent industry experience.',
    duration: 'Full-Time position.',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' },
    ],
    isActive: true,
    order: 3,
  },
  {
    title: 'Full-Stack Next.js Web Developer',
    category: 'fulltime',
    department: 'Engineering',
    experience: '1–3 Years building responsive production web applications.',
    location: 'Bagaha, Bihar (HQ) / Hybrid / Remote',
    salary: '₹25,000 – ₹50,000 / month',
    openings: 2,
    skills: 'Next.js 15 App Router, React 18, Node.js, TailwindCSS, MongoDB/PostgreSQL, REST APIs, and Core Web Vitals.',
    qualification: 'B.Tech/BCA/MCA or self-taught engineer with strong GitHub portfolio.',
    duration: 'Full-Time position.',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' },
    ],
    isActive: true,
    order: 4,
  },
  {
    title: 'Graphic Designer',
    category: 'fulltime',
    department: 'Creative & Design',
    experience: '1–3 Years with a strong visual portfolio.',
    location: 'Bagaha, Bihar (HQ) / Hybrid',
    salary: '₹18,000 – ₹30,000 / month',
    openings: 1,
    skills: 'Adobe Creative Suite (Photoshop, Illustrator), branding systems, social media banners, typography, and layout.',
    qualification: 'Degree/Diploma in Graphic Design or proven design portfolio.',
    duration: 'Full-Time position.',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' },
    ],
    isActive: true,
    order: 5,
  },
  {
    title: 'Business Development Executive',
    category: 'fulltime',
    department: 'Sales & Growth',
    experience: '1–3 Years in agency sales or software business development.',
    location: 'Bagaha, Bihar (HQ) / Hybrid',
    salary: '₹20,000 – ₹35,000 + High Incentives',
    openings: 2,
    skills: 'Client acquisition, B2B sales outreach, pipeline management, CRM tools, proposal writing, and negotiation.',
    qualification: 'Bachelor’s degree in Business, Commerce, or Marketing.',
    duration: 'Full-Time position.',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' },
    ],
    isActive: true,
    order: 6,
  },
  {
    title: 'UI/UX Designer',
    category: 'fulltime',
    department: 'Creative & Design',
    experience: '1–3 Years in UI/UX product or agency design.',
    location: 'Bagaha, Bihar (HQ) / Remote',
    salary: '₹22,000 – ₹40,000 / month',
    openings: 1,
    skills: 'Figma interactive prototypes, wireframing, user persona research, design systems, and responsive layout grids.',
    qualification: 'Degree in Interaction Design, HCI, or equivalent portfolio experience.',
    duration: 'Full-Time position.',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' },
    ],
    isActive: true,
    order: 7,
  },
  {
    title: 'Copywriter & Content Strategist',
    category: 'fulltime',
    department: 'Content',
    experience: '1–3 Years of professional copywriting experience.',
    location: 'Bagaha, Bihar (HQ) / Remote',
    salary: '₹18,000 – ₹30,000 / month',
    openings: 1,
    skills: 'Website landing page copywriting, SEO long-form content, email sequences, social copy, and brand narratives.',
    qualification: 'Degree in English, Journalism, Mass Communication, or related discipline.',
    duration: 'Full-Time position.',
    badges: [
      { text: 'Full-Time', type: 'fulltime' },
      { text: '1–3 Yrs', type: 'exp' },
    ],
    isActive: true,
    order: 8,
  },
];

export async function GET() {
  try {
    await connectDB();

    let jobs = await JobOpening.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean();

    // Auto-seed if empty
    if (!jobs || jobs.length === 0) {
      const existingCount = await JobOpening.countDocuments();
      if (existingCount === 0) {
        await JobOpening.insertMany(DEFAULT_SEED_JOBS);
        jobs = await JobOpening.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean();
      }
    }

    return NextResponse.json({ success: true, jobs });
  } catch (error) {
    console.error('API /api/jobs GET Error:', error);
    // Return default seed jobs on fallback so the careers page never breaks
    return NextResponse.json({ success: true, jobs: DEFAULT_SEED_JOBS });
  }
}
