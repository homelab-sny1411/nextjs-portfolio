/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
