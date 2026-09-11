import ClientPage from './ClientPage';
import { FAQ_SECTIONS } from './data';

export const metadata = {
  title: 'Frequently Asked Questions (FAQs) | Digital Marketing & Web Agency | MaaJanki Web Tech',
  description:
    'Find clear, authoritative answers to common questions about MaaJanki Web Tech services — Next.js web development, technical SEO, performance ads, branding, and e-commerce solutions.',
  keywords: [
    'MaaJanki Web Tech FAQs',
    'web development agency questions',
    'SEO services FAQs India',
    'digital marketing agency Bihar',
    'performance marketing FAQs',
    'website redesign cost India',
    'Next.js developer FAQs'
  ],
  authors: [{ name: 'MaaJanki Web Tech' }],
  openGraph: {
    title: 'FAQs | Digital Marketing & Web Development Answers | MaaJanki Web Tech',
    description:
      'Explore real answers to real questions on budgets, timelines, SEO deliverables, and web engineering with MaaJanki Web Tech.',
    url: 'https://maajankiwebtech.com/faqs',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
        width: 1200,
        height: 630,
        alt: 'MaaJanki Web Tech FAQs - Digital Marketing & Web Development Answers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions (FAQs) | MaaJanki Web Tech',
    description:
      'Answers to common questions about SEO, web design, digital branding, and paid advertising services from MaaJanki Web Tech.',
    images: [
      'https://maajankiwebtech.com/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp'
    ],
    creator: '@maajankiwebtech'
  },
  alternates: {
    canonical: 'https://maajankiwebtech.com/faqs'
  }
};

export default function FaqsPage() {
  // Extract all questions for Schema.org FAQPage JSON-LD
  const allQuestions = FAQ_SECTIONS.flatMap((sec) => sec.questions);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        // Strip HTML tags for clean schema text
        text: item.a.join(' ').replace(/<[^>]*>?/gm, '')
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://maajankiwebtech.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQs',
        item: 'https://maajankiwebtech.com/faqs'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ClientPage />
    </>
  );
}
