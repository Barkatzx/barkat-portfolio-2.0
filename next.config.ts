import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    domains: [
      "cdn.sanity.io",
      "cdn.sanity.studio",
      "images.unsplash.com",
      "res.cloudinary.com",
      "i.ibb.co",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "i.ibb.co",
    //     pathname: "/**",
    //   },
    // ],
  },
};

export default nextConfig;
