/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'recharts',
      'aos',
      '@clerk/nextjs',
      'react-icons'
    ],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/admin',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Block WordPress probe requests (Redirect to home page)
      { source: '/wp-json', destination: '/', permanent: false },
      { source: '/wp-json/:path*', destination: '/', permanent: false },
      { source: '/wp-admin', destination: '/', permanent: false },
      { source: '/wp-admin/:path*', destination: '/', permanent: false },
      { source: '/wp-login.php', destination: '/', permanent: false },
      { source: '/xmlrpc.php', destination: '/', permanent: false },
      { source: '/all-leads', destination: '/admin/all-leads', permanent: false },
      { source: '/new-leads', destination: '/admin/new-leads', permanent: false },
      { source: '/contacted-leads', destination: '/admin/contacted-leads', permanent: false },
      { source: '/qualified-leads', destination: '/admin/qualified-leads', permanent: false },
      { source: '/closed-leads', destination: '/admin/closed-leads', permanent: false },
      { source: '/spam-leads', destination: '/admin/spam-leads', permanent: false },
      { source: '/ai-insights', destination: '/admin/ai-insights', permanent: false },
      { source: '/global-map-analytics', destination: '/admin/global-map-analytics', permanent: false },
      { source: '/customers-crm', destination: '/admin/customers-crm', permanent: false },
      { source: '/tasks-kanban', destination: '/admin/tasks-kanban', permanent: false },
      { source: '/calendar-followups', destination: '/admin/calendar-followups', permanent: false },
      { source: '/reports-exports', destination: '/admin/reports-exports', permanent: false },
      { source: '/team-performance', destination: '/admin/team-performance', permanent: false },
      { source: '/settings-security', destination: '/admin/settings-security', permanent: false },
    ];
  },
};

module.exports = nextConfig;
