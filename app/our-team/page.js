import ClientPage from './ClientPage';

export const metadata = {
  title: 'Meet Our Team | Digital Marketing & Web Experts at MaaJanki Web Tech',
  description:
    'Meet the passionate team behind MaaJanki Web Tech — Next.js developers, SEO specialists, UI/UX designers, and growth marketing strategists dedicated to scaling your business.',
  keywords: [
    'MaaJanki Web Tech team',
    'Ashish Kumar founder MaaJanki',
    'web development experts Bihar',
    'SEO specialist India',
    'digital marketing team',
    'Next.js web developers India',
    'UI/UX design experts'
  ],
  authors: [{ name: 'MaaJanki Web Tech' }],
  openGraph: {
    title: 'Meet Our Team | Digital Marketing & Web Development Experts',
    description:
      'Meet the skilled web developers, SEO strategists, designers, and marketing minds behind MaaJanki Web Tech.',
    url: 'https://maajankiwebtech.com/our-team',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
        width: 1200,
        height: 630,
        alt: 'MaaJanki Web Tech digital marketing and web development agency team'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Digital Marketing & Web Experts | MaaJanki Web Tech',
    description:
      'Meet our team of SEO specialists, marketers, designers, and developers dedicated to helping businesses grow online.',
    images: ['https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp'],
    creator: '@maajankiwebtech'
  },
  alternates: {
    canonical: 'https://maajankiwebtech.com/our-team'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://maajankiwebtech.com/our-team#webpage',
      url: 'https://maajankiwebtech.com/our-team',
      name: 'Meet Our Digital Marketing Team | Experts at MaaJanki Web Tech',
      description:
        'Meet the passionate digital marketing and web engineering experts behind MaaJanki Web Tech.',
      isPartOf: { '@id': 'https://maajankiwebtech.com/#organization' },
      breadcrumb: { '@id': 'https://maajankiwebtech.com/our-team#breadcrumb' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://maajankiwebtech.com/our-team#breadcrumb',
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
          name: 'Our Team',
          item: 'https://maajankiwebtech.com/our-team'
        }
      ]
    },
    {
      '@type': 'Person',
      '@id': 'https://maajankiwebtech.com/our-team#ashish-kumar',
      name: 'Ashish Kumar',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: 'MaaJanki Web Tech',
        url: 'https://maajankiwebtech.com/'
      },
      description:
        'Founder and CEO of MaaJanki Web Tech, specializing in custom Next.js web application architecture, enterprise SEO strategy, and scalable digital solutions.',
      image: 'https://maajankiwebtech.com/images/founder.png',
      url: 'https://maajankiwebtech.com/our-team',
      sameAs: [
        'https://www.linkedin.com/in/ashishkumarji/',
        'https://www.instagram.com/ashishkrweb4/'
      ],
      knowsAbout: [
        'Web Architecture',
        'Next.js App Router',
        'Search Engine Optimization (SEO)',
        'AEO & GEO AI Optimization',
        'Performance Marketing',
        'Brand Development'
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://maajankiwebtech.com/our-team#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who founded MaaJanki Web Tech?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MaaJanki Web Tech was founded by Ashish Kumar, who serves as CEO. He established the agency to combine robust web engineering, technical SEO, and business growth for clients across India and globally.'
          }
        },
        {
          '@type': 'Question',
          name: 'What expertise does the MaaJanki Web Tech team have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The team brings deep expertise across Next.js web development, technical SEO, AEO/GEO, branding, UI/UX design, performance marketing, social media optimization, and AI content workflows.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is MaaJanki Web Tech hiring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! MaaJanki Web Tech regularly hires passionate developers, SEO interns, designers, and marketers. Visit our Careers page at maajankiwebtech.com/careers to explore open opportunities.'
          }
        }
      ]
    }
  ]
};

export default function OurTeamPage() {
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
