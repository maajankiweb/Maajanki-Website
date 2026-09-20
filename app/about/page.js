import ClientPage from './ClientPage';

export const metadata = {
  title: "About MaaJanki Web Tech | Web & Digital Marketing Agency in Bihar",
  description: "Meet Ashish Kumar, Founder of MaaJanki Web Tech — Bihar's leading web & digital marketing agency. DPIIT-registered startup since 2020. Learn our story.",
  keywords: [
    "About MaaJanki Web Tech",
    "web development agency Bihar",
    "digital marketing company Bihar",
    "top SEO agency Bihar",
    "Ashish Kumar web architect",
    "DPIIT registered startup Bihar"
  ],
  openGraph: {
    title: "About MaaJanki Web Tech | Web & Digital Marketing Agency in Bihar",
    description: "Meet Ashish Kumar, Founder of MaaJanki Web Tech — Bihar's leading web & digital marketing agency. DPIIT-registered startup since 2020. Learn our story.",
    url: "https://maajankiwebtech.com/about",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MaaJanki Web Tech | Web & Digital Marketing Agency in Bihar",
    description: "Meet Ashish Kumar, Founder of MaaJanki Web Tech — Bihar's leading web & digital marketing agency. DPIIT-registered startup since 2020. Learn our story.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/about",
  },
};

export default function Page() {
  return <ClientPage />;
}
