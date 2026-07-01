import type { Metadata } from "next";
import { absoluteUrl, siteConfig, gameFacts } from "@/lib/site";
import type { NewsArticle } from "@/lib/data";

/**
 * Build per-page metadata with sensible, SEO-friendly defaults: canonical URL,
 * Open Graph and Twitter cards all derived from a single call.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  /** Absolute or site-relative image URL for OG/Twitter cards. */
  image?: string;
  type?: "website" | "article";
  /** ISO date; only used for article-type pages. */
  publishedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const images = image ? [{ url: image }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

/** BreadcrumbList structured data — helps search engines render breadcrumb
 *  trails and clarifies site hierarchy for crawlers and answer engines. */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** NewsArticle structured data — declares author, publisher and the verifiable
 *  sources each story is based on, which strengthens SEO, answer-engine (AEO)
 *  and AI-overview (GEO) trust signals. */
export function newsArticleJsonLd(a: NewsArticle): Record<string, unknown> {
  const url = absoluteUrl(`/news/${a.slug}`);
  const publisher = {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
  };
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: a.title,
    description: a.summary,
    image: [a.image],
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: "en-US",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: publisher,
    publisher,
    isBasedOn: a.sources.map((s) => s.url),
    citation: a.sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.title,
      url: s.url,
      publisher: { "@type": "Organization", name: s.publisher },
    })),
    about: {
      "@type": "VideoGame",
      name: gameFacts.title,
      url: siteConfig.url,
    },
  };
}

/** VideoGame structured data describing GTA VI itself. */
export function videoGameJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: gameFacts.title,
    alternateName: ["GTA VI", "GTA 6"],
    url: siteConfig.url,
    description: siteConfig.description,
    genre: gameFacts.genre,
    gamePlatform: gameFacts.platforms,
    playMode: gameFacts.gameMode,
    applicationCategory: "Game",
    operatingSystem: gameFacts.platforms.join(", "),
    datePublished: gameFacts.releaseDate,
    publisher: {
      "@type": "Organization",
      name: gameFacts.publisher,
      url: "https://www.rockstargames.com",
    },
    author: {
      "@type": "Organization",
      name: gameFacts.developer,
      url: "https://www.rockstargames.com",
    },
  };
}
