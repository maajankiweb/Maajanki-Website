import ClientPage from './ClientPage';

export const metadata = {
  title: "About MaaJanki Web Tech | Leading Web & SEO Agency in India",
  description: "Learn about MaaJanki Web Tech, an MSME registered & DPIIT recognized web development & digital marketing agency in India. Founded by Ashish Kumar.",
  keywords: [
    "About MaaJanki Web Tech",
    "web development agency India",
    "digital marketing company India",
    "top SEO agency India",
    "Ashish Kumar web architect"
  ],
  openGraph: {
    title: "About MaaJanki Web Tech | Leading Web & SEO Agency in India",
    description: "Learn about MaaJanki Web Tech, an MSME registered & DPIIT recognized web development & digital marketing agency in India.",
    url: "https://maajankiwebtech.com/about",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MaaJanki Web Tech | Leading Web & SEO Agency in India",
    description: "Learn about MaaJanki Web Tech, an MSME registered & DPIIT recognized web development & digital marketing agency in India.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/about",
  },
};

export default function Page() {
  return <ClientPage />;
}
