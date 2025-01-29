import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
};

export default nextConfig;
