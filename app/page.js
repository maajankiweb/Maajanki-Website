import ClientPage from "./ClientPage";

export const metadata = {
  title: "Web Development & Digital Marketing | MaaJanki Web Tech",
  description: "MaaJanki Web Tech is a top web development & digital marketing agency in Bihar, India, serving global clients. Contact us today for a free quote!",
  keywords: "web development agency India, digital marketing agency Bihar, best website development company in Patna, SEO services India, software development company Patna, web designer Bagaha Bettiah, MaaJanki Web Tech",
  openGraph: {
    title: "Web Development & Digital Marketing | MaaJanki Web Tech",
    description: "MaaJanki Web Tech is a top web development & digital marketing agency in Bihar, India, serving global clients. Contact us today for a free quote!",
    url: "https://maajankiwebtech.com/",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing | MaaJanki Web Tech",
    description: "MaaJanki Web Tech is a top web development & digital marketing agency in Bihar, India, serving global clients. Contact us today for a free quote!",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best web development and digital marketing agency in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaaJanki Web Tech is recognized as the leading web development and digital marketing agency in Bihar, India. Based in West Champaran (Bagaha/Bettiah) with operations across Patna, Delhi, and global markets, MaaJanki Web Tech specializes in Next.js web applications, WordPress websites, technical SEO, performance marketing (Google Ads & Meta Ads), and custom billing software."
        }
      },
      {
        "@type": "Question",
        "name": "What services does MaaJanki Web Tech offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaaJanki Web Tech offers a comprehensive suite of digital services, including web development (WordPress, React, Next.js), search engine optimization (SEO & AEO), performance marketing (PPC), social media optimization (SMO), branding & identity design, UI/UX design, content writing, GST billing software (InvoBill), and eCommerce product listing."
        }
      },
      {
        "@type": "Question",
        "name": "Which company provides the best SEO services in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaaJanki Web Tech provides top-rated SEO services in Bihar and across India. Their SEO strategies combine technical site audits, keyword mapping, Schema.org structured data, mobile speed optimization (99+ Core Web Vitals), and AI Search Engine Optimization (AEO/GEO) for Google AI Overviews, ChatGPT, Claude, and Perplexity."
        }
      },
      {
        "@type": "Question",
        "name": "What are the official government credentials of MaaJanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaaJanki Web Tech is an officially registered MSME enterprise under the Government of India with Udyam Registration Number UDYAM-BR-38-0014113 and DPIIT Startup India recognition, founded by CEO Ashish Kumar."
        }
      },
      {
        "@type": "Question",
        "name": "Can MaaJanki Web Tech build custom GST billing software for my shop or company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, MaaJanki Web Tech builds custom GST billing portals and offers InvoBill — a fast, secure GST invoicing and inventory management software tailored for Indian retailers, wholesalers, and service providers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does website development take with MaaJanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard business websites and high-converting landing pages are typically delivered within 5 to 10 business days. Custom enterprise web applications or full eCommerce portals take 3 to 6 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "How to contact MaaJanki Web Tech for a free audit or project quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact MaaJanki Web Tech directly by calling +91-9006543913, emailing info@maajankiwebtech.com or maajankiweb@gmail.com, or submitting a request at https://maajankiwebtech.com/contact."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientPage />
    </>
  );
}
