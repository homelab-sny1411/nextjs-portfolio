import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {
    root: process.cwd(),
  },
  images: {
    qualities: [75, 85],
  },
};

export default withSentryConfig(nextConfig, {
  org: "matteo-humez",
  project: "portfolio",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  webpack: {
    automaticVercelMonitors: true,
    treeshake: {
      removeDebugLogging: true,
    },
  },
});