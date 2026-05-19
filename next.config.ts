import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    workerThreads: true
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
