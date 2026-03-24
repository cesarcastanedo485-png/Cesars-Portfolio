import type { NextConfig } from "next";

/**
 * `distDir: "build"` avoids some Windows EPERM issues on `.next` (Defender/indexer).
 * Vercel/Linux also works with this setting.
 */
const nextConfig: NextConfig = {
  distDir: "build",
};

export default nextConfig;
