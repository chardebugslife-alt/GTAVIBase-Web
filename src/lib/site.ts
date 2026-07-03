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

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
  { href: "/setting", label: "Map & Setting" },
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
