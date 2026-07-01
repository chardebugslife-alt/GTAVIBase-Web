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
    ],
  },
};

export default nextConfig;
