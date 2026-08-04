import ClientPage from './ClientPage';

export const metadata = {
  title: "Privacy Policy | Web Agency Bagaha | Maajanki Web Tech",
  description: "Read the privacy policy of Maajanki Web Tech. Learn how our website developer in West Champaran, Bihar secures your data, tracking pixels, and source code.",
  keywords: ["privacy policy","MaaJanki Web Tech","data security Bihar"],
  openGraph: {
    title: "Privacy Policy | Web Agency Bagaha | Maajanki Web Tech",
    description: "Read the privacy policy of Maajanki Web Tech. Learn how our website developer in West Champaran, Bihar secures your data, tracking pixels, and source code.",
    url: "https://maajankiwebtech.com/privacy-policy",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Web Agency Bagaha | Maajanki Web Tech",
    description: "Read the privacy policy of Maajanki Web Tech. Learn how our website developer in West Champaran, Bihar secures your data, tracking pixels, and source code.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/privacy-policy",
  },
};

export default function Page() {
  return <ClientPage />;
}
