import ClientPage from './ClientPage';

export const metadata = {
  title: "Client Reviews Web Agency Bagaha | Maajanki Web Tech",
  description: "Read verified reviews for Maajanki Web Tech. See why we are the top-rated website developer in West Champaran and digital marketing agency in Bihar.",
  keywords: ["digital marketing agency Bihar","website developer West Champaran","client reviews Bagaha"],
  openGraph: {
    title: "Client Reviews Web Agency Bagaha | Maajanki Web Tech",
    description: "Read verified reviews for Maajanki Web Tech. See why we are the top-rated website developer in West Champaran and digital marketing agency in Bihar.",
    url: "https://maajankiwebtech.com/reviews",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews Web Agency Bagaha | Maajanki Web Tech",
    description: "Read verified reviews for Maajanki Web Tech. See why we are the top-rated website developer in West Champaran and digital marketing agency in Bihar.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/reviews",
  },
};

export default function Page() {
  return <ClientPage />;
}
