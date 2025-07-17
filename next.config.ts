import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.awsstatic.com',
        pathname: '/libra-css/images/logos/aws_logo_smile_1200x630.png',
      },
    ],
  },
};

export default nextConfig;
