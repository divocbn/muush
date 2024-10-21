import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.strpst.com',
        port: '',
        pathname: '/**',
      },
    ]
  },

  reactStrictMode: false
  /* config options here */
};

export default nextConfig;
