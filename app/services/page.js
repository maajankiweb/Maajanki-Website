import ClientPage from './ClientPage';

export const metadata = {
  title: "Web Design & Marketing Services Bihar | Maajanki Web Tech",
  description: "Explore our website development, SEO, branding, and performance marketing services in Bettiah, Bihar. Grow your online business today with a free quote!",
  keywords: ["digital marketing agency Bihar","web design agency Bettiah","SEO services Bettiah","services MaaJanki Web Tech"],
  openGraph: {
    title: "Web Design & Marketing Services Bihar | Maajanki Web Tech",
    description: "Explore our website development, SEO, branding, and performance marketing services in Bettiah, Bihar. Grow your online business today with a free quote!",
    url: "https://maajankiwebtech.com/services",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Marketing Services Bihar | Maajanki Web Tech",
    description: "Explore our website development, SEO, branding, and performance marketing services in Bettiah, Bihar. Grow your online business today with a free quote!",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/services",
  },
};

export default function Page() {
  return <ClientPage />;
}
