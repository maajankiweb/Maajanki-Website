import ClientPage from './ClientPage';

export const metadata = {
  title: "About MaaJanki Web Tech | Leading Web & SEO Agency in West Champaran, Bihar",
  description: "Learn about MaaJanki Web Tech, an MSME registered & DPIIT recognized web development agency in Bagaha, West Champaran, Bihar. Founded by Ashish Kumar.",
  keywords: ["website developer West Champaran", "web design agency Bagaha", "digital marketing agency Bihar", "About MaaJanki Web Tech"],
  openGraph: {
    title: "About MaaJanki Web Tech | Leading Web & SEO Agency in West Champaran, Bihar",
    description: "Learn about MaaJanki Web Tech, an MSME registered & DPIIT recognized web development agency in Bagaha, West Champaran, Bihar.",
    url: "https://maajankiwebtech.com/about",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MaaJanki Web Tech | Leading Web & SEO Agency in West Champaran, Bihar",
    description: "Learn about MaaJanki Web Tech, an MSME registered & DPIIT recognized web development agency in Bagaha, West Champaran, Bihar.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/about",
  },
};

export default function Page() {
  return <ClientPage />;
}
