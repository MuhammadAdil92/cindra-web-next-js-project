import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // REQUIRED for static export
  },

  trailingSlash: true, // helps Azure static routing
};

export default nextConfig;