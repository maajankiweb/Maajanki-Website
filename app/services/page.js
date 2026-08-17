import ClientPage from './ClientPage';

export const metadata = {
  title: "Web Development & Digital Marketing Services in Bihar | MaaJanki Web Tech",
  description: "Explore full-stack digital services by MaaJanki Web Tech in Bihar & India: Next.js website development, SEO, Google Ads, eCommerce listing, and branding.",
  keywords: ["digital marketing agency Bihar", "website development services Bihar", "SEO services Patna Bihar", "services MaaJanki Web Tech"],
  openGraph: {
    title: "Web Development & Digital Marketing Services in Bihar | MaaJanki Web Tech",
    description: "Explore full-stack digital services by MaaJanki Web Tech in Bihar & India: Next.js website development, SEO, Google Ads, eCommerce listing, and branding.",
    url: "https://maajankiwebtech.com/services",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Digital Marketing Services in Bihar | MaaJanki Web Tech",
    description: "Explore full-stack digital services by MaaJanki Web Tech in Bihar & India: Next.js website development, SEO, Google Ads, eCommerce listing, and branding.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services",
  },
};

export default function Page() {
  return <ClientPage />;
}
