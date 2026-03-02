import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"], // Good for icons
  experimental: {
    // Turbopack is enabled by default in v16, but you can ensure 
    // it handles PostCSS correctly here if needed.
  },
};

export default nextConfig;