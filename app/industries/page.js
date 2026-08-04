import ClientPage from './ClientPage';

export const metadata = {
  title: "Industries We Serve | Web Agency Bihar | Maajanki Web Tech",
  description: "We provide custom web design & digital marketing agency services for retail, B2B, healthcare, & education in Bihar. Contact us today for a free audit!",
  keywords: ["digital marketing agency Bihar","web design agency Bagaha","eCommerce web development Bihar"],
  openGraph: {
    title: "Industries We Serve | Web Agency Bihar | Maajanki Web Tech",
    description: "We provide custom web design & digital marketing agency services for retail, B2B, healthcare, & education in Bihar. Contact us today for a free audit!",
    url: "https://maajankiwebtech.com/industries",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Web Agency Bihar | Maajanki Web Tech",
    description: "We provide custom web design & digital marketing agency services for retail, B2B, healthcare, & education in Bihar. Contact us today for a free audit!",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/industries",
  },
};

export default function Page() {
  return <ClientPage />;
}
