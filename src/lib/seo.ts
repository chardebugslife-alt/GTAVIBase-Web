import type { Metadata } from "next";
import { absoluteUrl, siteConfig, gameFacts } from "@/lib/site";
import type { NewsArticle, Faq, CommunityPost } from "@/lib/data";
import { editions } from "@/lib/data";

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

/** Article (commentary) structured data for a community post. Unlike the
 *  NewsArticle schema, this is explicitly opinion/analysis: it links the
 *  external discussion via `isBasedOn`/`citation` and marks the game as its
 *  subject, without presenting the content as reported fact. */
export function communityPostJsonLd(p: CommunityPost): Record<string, unknown> {
  const url = absoluteUrl(`/community/${p.slug}`);
  const links = [p.source, ...(p.moreLinks ?? [])];
  const publisher = {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
  };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.summary,
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: "en-US",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: publisher,
    publisher,
    isBasedOn: links.map((l) => l.url),
    citation: links.map((l) => ({
      "@type": "CreativeWork",
      name: l.title,
      url: l.url,
      publisher: { "@type": "Organization", name: l.publisher },
    })),
    about: {
      "@type": "VideoGame",
      name: gameFacts.title,
      url: siteConfig.url,
    },
  };
}

/** FAQPage structured data — lets a set of Q&A pairs be surfaced directly in
 *  search results and quoted by answer engines (AEO) and AI overviews (GEO). */
export function faqPageJsonLd(items: Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Product structured data listing the GTA VI editions as pre-order Offers —
 *  gives search and answer engines machine-readable prices and availability. */
export function editionsJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: gameFacts.title,
    description:
      "Grand Theft Auto VI editions and pricing — the Standard and Ultimate editions for PlayStation 5 and Xbox Series X|S.",
    brand: { "@type": "Brand", name: gameFacts.publisher },
    offers: editions.map((e) => ({
      "@type": "Offer",
      name: e.name,
      price: e.priceValue,
      priceCurrency: "USD",
      priceValidUntil: gameFacts.releaseDate,
      availability: "https://schema.org/PreOrder",
      url: absoluteUrl("/editions"),
      seller: { "@type": "Organization", name: gameFacts.publisher },
    })),
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
