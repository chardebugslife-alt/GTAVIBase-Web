/**
 * Google AdSense configuration. All values come from public env vars so ads can
 * be toggled per-environment without code changes. When `client` is empty the
 * whole ad system stays inert — no script is loaded and no <ins> slots render,
 * so local/dev builds show a clean, ad-free site by default.
 *
 * The publisher ("client") id looks like `ca-pub-1234567890123456`.
 * Each slot id is the numeric id AdSense generates for an individual ad unit.
 */
export const adsConfig = {
  // Public AdSense publisher id. Hardcoded as the default so ads/verification
  // work on every deploy without env config; override with the env var if needed.
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-5492282313844711",
  slots: {
    // Wide leaderboard / banner units (e.g. above the footer).
    horizontal: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HORIZONTAL ?? "",
    // Tall vertical units for the side of the page.
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "",
    // Fluid "in-article" units that blend into a content column.
    inArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE ?? "",
  },
} as const;

/** Ads are only active once a publisher id is configured. */
export const adsEnabled = adsConfig.client.length > 0;
