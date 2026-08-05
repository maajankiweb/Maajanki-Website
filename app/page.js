import ClientPage from "./ClientPage";

export const metadata = {
  title: "Web Development & Digital Marketing Agency | Maajanki Web Tech India",
  description: "MaaJanki Web Tech is a leading web development & digital marketing agency serving clients across India and worldwide, based in Bihar. Contact us for a free quote!",
  keywords: ["web development agency India", "digital marketing agency Bihar", "website developer India", "SEO services India", "MaaJanki Web Tech"],
  openGraph: {
    title: "Web Development & Digital Marketing Agency | Maajanki Web Tech India",
    description: "MaaJanki Web Tech is a leading web development & digital marketing agency serving clients across India and worldwide, based in Bihar. Contact us for a free quote!",
    url: "https://maajankiwebtech.com",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Agency | Maajanki Web Tech India",
    description: "MaaJanki Web Tech is a leading web development & digital marketing agency serving clients across India and worldwide, based in Bihar. Contact us for a free quote!",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Maajanki Web Tech offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maajanki Web Tech offers a comprehensive suite of digital services, including web development (WordPress, React, Next.js), search engine optimization (SEO), performance marketing, social media optimization (SMO), branding & identity design, UI/UX design, content writing, and eCommerce product listing."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a website cost in Bagaha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of website development in Bagaha depends on the project scope, custom design requirements, and functionality. Standard business websites start at very competitive and affordable rates. Contact us to get an exact quote for your project."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer digital marketing in West Champaran?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer professional digital marketing and SEO services in West Champaran, Bihar, helping local businesses build online visibility, rank on Google, and acquire more customers."
        }
      },
      {
        "@type": "Question",
        "name": "Can you make a GST billing website for my shop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in building custom billing portals and GST-compliant invoicing websites. We also offer InvoBill, our hybrid billing platform designed specifically for Indian businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Do you make mobile-friendly websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all websites built by Maajanki Web Tech are 100% responsive, mobile-friendly, and optimized to load fast and look stunning across all mobile devices, tablets, and desktops."
        }
      },
      {
        "@type": "Question",
        "name": "How long does website development take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard websites and landing pages are typically delivered within 7 to 14 business days. Larger, custom web applications or complex e-commerce platforms can take 4 to 8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide monthly website maintenance, security audits, server monitoring, content updates, and technical support to ensure your website is secure and running without issues."
        }
      },
      {
        "@type": "Question",
        "name": "How to contact Maajanki Web Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Maajanki Web Tech by calling +91-9006543913, emailing us at info@maajankiwebtech.com, or visiting our contact page at https://maajankiwebtech.com/contact."
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

