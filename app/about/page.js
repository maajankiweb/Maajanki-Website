import ClientPage from './ClientPage';

export const metadata = {
  title: "About Our Web Agency Bagaha Bihar | Maajanki Web Tech",
  description: "Learn about Maajanki Web Tech, a leading website developer in West Champaran, Bihar. We offer result-driven SEO & web design. Contact us for a free quote!",
  keywords: ["website developer West Champaran","web design agency Bagaha","digital marketing agency Bihar","About MaaJanki Web Tech"],
  openGraph: {
    title: "About Our Web Agency Bagaha Bihar | Maajanki Web Tech",
    description: "Learn about Maajanki Web Tech, a leading website developer in West Champaran, Bihar. We offer result-driven SEO & web design. Contact us for a free quote!",
    url: "https://maajankiwebtech.com/about",
    siteName: "Maajanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Web Agency Bagaha Bihar | Maajanki Web Tech",
    description: "Learn about Maajanki Web Tech, a leading website developer in West Champaran, Bihar. We offer result-driven SEO & web design. Contact us for a free quote!",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/about",
  },
};

export default function Page() {
  return <ClientPage />;
}
