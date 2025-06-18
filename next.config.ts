import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/components/accordion",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
