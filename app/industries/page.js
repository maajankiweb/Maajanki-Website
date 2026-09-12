import ClientPage from './ClientPage';

export const metadata = {
  title: "Industries We Serve | Web & Digital Solutions | MaaJanki Web Tech",
  description: "Explore industry-specific web development, AI automation, and SEO marketing solutions for Retail, Real Estate, Healthcare, Education, and eCommerce by MaaJanki Web Tech.",
  keywords: [
    "Industries We Serve",
    "real estate website development",
    "retail business automation",
    "healthcare SEO marketing",
    "eCommerce development India",
    "B2B digital marketing agency",
    "MaaJanki Web Tech industries"
  ],
  openGraph: {
    title: "Industries We Serve | Web & Digital Solutions | MaaJanki Web Tech",
    description: "Explore industry-specific web development, AI automation, and SEO marketing solutions for Retail, Real Estate, Healthcare, Education, and eCommerce.",
    url: "https://maajankiwebtech.com/industries",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Web & Digital Solutions | MaaJanki Web Tech",
    description: "Explore industry-specific web development, AI automation, and SEO marketing solutions by MaaJanki Web Tech.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/industries",
  },
};

export default function Page() {
  return <ClientPage />;
}
