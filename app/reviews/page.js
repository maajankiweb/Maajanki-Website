import ClientPage from './ClientPage';

export const metadata = {
  title: "Client Reviews & Testimonials | MaaJanki Web Tech",
  description: "Read verified client reviews and ratings for MaaJanki Web Tech. See why businesses trust our Next.js web development and digital marketing services.",
  keywords: [
    "MaaJanki Web Tech reviews",
    "web development agency reviews India",
    "digital marketing client testimonials",
    "top rated website developer India",
    "SEO agency client results India"
  ],
  openGraph: {
    title: "Client Reviews & Testimonials | MaaJanki Web Tech",
    description: "Read verified client reviews and ratings for MaaJanki Web Tech. See why businesses trust our Next.js web development and digital marketing services.",
    url: "https://maajankiwebtech.com/reviews",
    siteName: "MaaJanki Web Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Testimonials | MaaJanki Web Tech",
    description: "Read verified client reviews and ratings for MaaJanki Web Tech.",
  },
  alternates: {
    canonical: "https://maajankiwebtech.com/reviews",
  },
};

export default function Page() {
  return <ClientPage />;
}
