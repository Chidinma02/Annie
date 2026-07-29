import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {

    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-524a2ba2f653439e91b69fe3c7368ebb.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
