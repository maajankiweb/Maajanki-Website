export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Agency AI Agents Studio | MaaJanki Web Tech Admin',
  description: 'Specialized AI Agent Personas and autonomous multi-agent workflows for engineering, marketing, real estate, and business automation.',
  robots: {
    index: false,
    follow: false,
    noimageindex: true,
    noarchive: true,
    nosnippet: true,
  },
  alternates: {
    canonical: 'https://maajankiwebtech.com/admin/agency-agents',
  },
};

export default function AgencyAgentsLayout({ children }) {
  return children;
}
