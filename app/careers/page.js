import ClientPage from './ClientPage';

export const metadata = {
  title: 'Digital Marketing & Web Development Jobs | Careers at MaaJanki Web Tech',
  description:
    'Explore exciting careers and internship opportunities at MaaJanki Web Tech. Hiring for SEO interns, Next.js web developers, UI/UX designers, and marketing executives.',
  keywords: [
    'MaaJanki Web Tech careers',
    'digital marketing jobs India',
    'SEO internship India',
    'web developer jobs India',
    'fresher digital marketing internship',
    'remote marketing jobs India',
    'graphic designer hiring'
  ],
  authors: [{ name: 'MaaJanki Web Tech' }],
  openGraph: {
    title: 'Digital Marketing Jobs & Internships | MaaJanki Web Tech',
    description:
      'Join our team of digital marketing experts, Next.js engineers, and creative strategists. Freshers and experienced professionals can apply now.',
    url: 'https://maajankiwebtech.com/careers',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
        width: 1200,
        height: 630,
        alt: 'MaaJanki Web Tech Careers – Jobs and Internships in India'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at MaaJanki Web Tech | Jobs & Internships',
    description:
      'Build your career in web development and digital marketing with MaaJanki Web Tech. Apply online today.',
    images: ['https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp'],
    creator: '@maajankiwebtech'
  },
  alternates: {
    canonical: 'https://maajankiwebtech.com/careers'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://maajankiwebtech.com/careers#webpage',
      url: 'https://maajankiwebtech.com/careers',
      name: 'Careers and Internship Opportunities at MaaJanki Web Tech',
      description:
        'Explore digital marketing, SEO, and Next.js web development jobs and internships at MaaJanki Web Tech.',
      isPartOf: { '@id': 'https://maajankiwebtech.com/#organization' },
      breadcrumb: { '@id': 'https://maajankiwebtech.com/careers#breadcrumb' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://maajankiwebtech.com/careers#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://maajankiwebtech.com/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Careers',
          item: 'https://maajankiwebtech.com/careers'
        }
      ]
    },
    {
      '@type': 'JobPosting',
      title: 'SEO Intern',
      description:
        'Free 3-month SEO internship at MaaJanki Web Tech. Work on live client projects covering on-page SEO, off-page SEO, keyword research, backlink building, technical SEO, and competitor analysis. Freshers welcome. Verified certificate awarded on completion with full-time conversion potential.',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'MaaJanki Web Tech',
        sameAs: 'https://maajankiwebtech.com/',
        logo: 'https://maajankiwebtech.com/images/icons/MaaJanki-Web-Tech-Logo-Color.png'
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Brajmala Complex, First Floor, Near Cinema House, Bagaha Bazar',
          addressLocality: 'Bagaha, West Champaran',
          addressRegion: 'Bihar',
          postalCode: '845101',
          addressCountry: 'IN'
        }
      },
      employmentType: 'INTERN',
      experienceRequirements: {
        '@type': 'OccupationalExperienceRequirements',
        monthsOfExperience: 0
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: {
          '@type': 'QuantitativeValue',
          value: 0,
          unitText: 'MONTH'
        }
      },
      datePosted: '2025-01-01',
      validThrough: '2026-12-31',
      jobBenefits: 'Internship certificate, real client exposure, mentorship, full-time conversion opportunity'
    },
    {
      '@type': 'JobPosting',
      title: 'Social Media Intern',
      description:
        '3 to 6 month internship at MaaJanki Web Tech. Responsibilities include social media strategy, content creation, scheduling, analytics, community management, and trend analysis. Open to freshers and college students.',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'MaaJanki Web Tech',
        sameAs: 'https://maajankiwebtech.com/',
        logo: 'https://maajankiwebtech.com/images/icons/MaaJanki-Web-Tech-Logo-Color.png'
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Brajmala Complex, First Floor, Near Cinema House, Bagaha Bazar',
          addressLocality: 'Bagaha, West Champaran',
          addressRegion: 'Bihar',
          postalCode: '845101',
          addressCountry: 'IN'
        }
      },
      employmentType: 'INTERN',
      experienceRequirements: {
        '@type': 'OccupationalExperienceRequirements',
        monthsOfExperience: 0
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: {
          '@type': 'QuantitativeValue',
          minValue: 5000,
          maxValue: 8000,
          unitText: 'MONTH'
        }
      },
      datePosted: '2025-01-01',
      validThrough: '2026-12-31'
    },
    {
      '@type': 'JobPosting',
      title: 'Full-Stack Next.js Web Developer',
      description:
        'Full-time web engineer role at MaaJanki Web Tech. Responsibilities include building responsive Next.js 15 web applications, React component development, Node.js API development, MongoDB database management, and Core Web Vitals optimization.',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'MaaJanki Web Tech',
        sameAs: 'https://maajankiwebtech.com/',
        logo: 'https://maajankiwebtech.com/images/icons/MaaJanki-Web-Tech-Logo-Color.png'
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Brajmala Complex, First Floor, Near Cinema House, Bagaha Bazar',
          addressLocality: 'Bagaha, West Champaran',
          addressRegion: 'Bihar',
          postalCode: '845101',
          addressCountry: 'IN'
        }
      },
      employmentType: 'FULL_TIME',
      experienceRequirements: {
        '@type': 'OccupationalExperienceRequirements',
        monthsOfExperience: 12
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: {
          '@type': 'QuantitativeValue',
          minValue: 20000,
          maxValue: 40000,
          unitText: 'MONTH'
        }
      },
      datePosted: '2025-01-01',
      validThrough: '2026-12-31'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://maajankiwebtech.com/careers#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I apply for a job at MaaJanki Web Tech?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fill out the application form on our careers page, select your desired role, upload your CV (PDF, max 2MB), and submit. We contact shortlisted candidates within 3–5 business days.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does MaaJanki Web Tech offer internships for freshers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer a free 3-month SEO internship and a 3–6 month Social Media internship for freshers with real project exposure and a verified certificate on completion.'
          }
        }
      ]
    }
  ]
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientPage />
    </>
  );
}
