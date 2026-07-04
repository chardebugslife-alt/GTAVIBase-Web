import type { NextConfig } from "next";

/**
 * Security response headers applied to every route. These are framework- and
 * ad-safe (they don't touch script/style sources, so AdSense, YouTube embeds
 * and Vercel Analytics keep working). A full Content-Security-Policy is left as
 * follow-up work — it needs Google's maintained AdSense/YouTube source lists
 * and should be shipped in report-only mode first.
 */
const securityHeaders = [
  // Force HTTPS for two years, including subdomains, and allow preload-list
  // inclusion. Safe because the site is HTTPS-only in production.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Stop browsers from MIME-sniffing responses away from their declared type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin on cross-origin navigations; full URL same-origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disallow the site being framed elsewhere (clickjacking / ad-fraud wrappers).
  // Note: this governs OUR pages being framed, not the YouTube iframes we embed.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Deny powerful device APIs the site never uses.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework (and its version) in every response.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
