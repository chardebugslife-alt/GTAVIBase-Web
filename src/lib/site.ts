/**
 * Central site configuration. Keep all canonical strings (URL, name, social
 * handles) here so metadata, JSON-LD, sitemap and UI stay in sync.
 */

export const siteConfig = {
  name: "GTA VI Base",
  shortName: "GTAVIBase",
  // Override at build/deploy time with NEXT_PUBLIC_SITE_URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gtavibase.com").replace(
    /\/$/,
    "",
  ),
  tagline: "Your information hub for Grand Theft Auto VI",
  description:
    "GTA VI Base is the go-to information hub for Grand Theft Auto VI — release date, characters Lucia and Jason, the state of Leonida and Vice City, trailers, platforms and a constantly updated FAQ.",
  locale: "en_US",
  twitter: "@gtavibase",
  keywords: [
    "GTA VI",
    "GTA 6",
    "Grand Theft Auto VI",
    "GTA 6 release date",
    "GTA VI characters",
    "Lucia and Jason",
    "Vice City",
    "Leonida",
    "Rockstar Games",
    "GTA 6 trailer",
    "GTA VI platforms",
  ],
} as const;

/** Confirmed, citable facts about the game. Single source of truth for the UI
 *  and the VideoGame structured data. */
export const gameFacts = {
  title: "Grand Theft Auto VI",
  developer: "Rockstar Games",
  publisher: "Rockstar Games",
  genre: ["Action-adventure", "Open world"],
  // Announced release date (delayed from May 26, 2026 on Nov 6, 2025).
  releaseDate: "2026-11-19",
  releaseDateLabel: "November 19, 2026",
  platforms: ["PlayStation 5", "Xbox Series X", "Xbox Series S"],
  gameMode: ["SinglePlayer", "MultiPlayer"],
  setting: "State of Leonida (Vice City)",
} as const;

/**
 * Editorial identity. Fan-run sites still need clear authorship and an editorial
 * process to satisfy E-E-A-T (Experience, Expertise, Authoritativeness, Trust).
 * We use a truthful team identity and a real, stated process rather than a
 * fabricated named author with invented credentials.
 */
export const editorial = {
  author: "The GTA VI Base Editorial Team",
  authorSlug: "editorial-team",
  role: "Grand Theft Auto VI news & guides",
  /** Shown on article bylines and the About page. */
  bio:
    "GTA VI Base is written and maintained by a small independent team of long-time Grand Theft Auto players. We track every official Rockstar Games announcement about Grand Theft Auto VI and turn it into clear, verifiable guides — no leaks, no rumours dressed up as fact.",
  /** Our stated editorial standards, surfaced on the About page. */
  standards: [
    {
      title: "Official sources first",
      text: "Every factual claim on our news and guide pages traces back to Rockstar Games — its trailers, Newswire posts and store listings. We link the primary source on each page so you can check it yourself.",
    },
    {
      title: "Leaks stay labelled",
      text: "Unconfirmed leaks, insider claims and fan theories live in our clearly-marked Community section, never in the factual News. We tell you plainly when something is speculation.",
    },
    {
      title: "Dated and corrected",
      text: "Time-sensitive posts carry a visible date, and we update them when Rockstar's plans change — as we did across GTA VI's two release-date delays — rather than leaving stale information live.",
    },
    {
      title: "Independent and unofficial",
      text: "We are a fan site with no affiliation to Rockstar Games or Take-Two Interactive. We use official promotional imagery under fair-use for news and commentary, always credited to its owner.",
    },
  ],
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
  { href: "/setting", label: "Map & Setting" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/trailers", label: "Trailers" },
  { href: "/editions", label: "Editions & Price" },
  { href: "/news", label: "News" },
  { href: "/community", label: "Community" },
  { href: "/faq", label: "FAQ" },
];

/** Absolute URL helper for canonical / OG / sitemap fields. */
export function absoluteUrl(path = ""): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
