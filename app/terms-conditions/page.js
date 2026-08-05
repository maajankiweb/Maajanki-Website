import ClientPage from './ClientPage';

export const metadata = {
  title: "Terms & Conditions | Web Agency Bagaha | Maajanki Web Tech",
  description: "Read the terms and conditions for Maajanki Web Tech, a professional web design and digital marketing agency in Bagaha, Bihar. Review our service terms.",
  keywords: ["terms and conditions","MaaJanki Web Tech","service agreement Bihar"],
  openGraph: {
    title: "Terms & Conditions | Web Agency Bagaha | Maajanki Web Tech",
    description: "Read the terms and conditions for Maajanki Web Tech, a professional web design and digital marketing agency in Bagaha, Bihar. Review our service terms.",
    url: "https://maajankiwebtech.com/terms-conditions",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Web Agency Bagaha | Maajanki Web Tech",
    description: "Read the terms and conditions for Maajanki Web Tech, a professional web design and digital marketing agency in Bagaha, Bihar. Review our service terms.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/terms-conditions",
  },
};

export default function Page() {
  return <ClientPage />;
}
