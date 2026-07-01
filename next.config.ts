import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are only ever hotlinked from Rockstar Games' own domains.
    remotePatterns: [
      { protocol: "https", hostname: "www.rockstargames.com", pathname: "/VI/**" },
      {
        protocol: "https",
        hostname: "media-rockstargames-com.akamaized.net",
        pathname: "/tina-uploads/**",
      },
      {
        // Rockstar Store edition artwork (Contentful space h1rqp7q66d54).
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/h1rqp7q66d54/**",
      },
    ],
  },
};

export default nextConfig;
