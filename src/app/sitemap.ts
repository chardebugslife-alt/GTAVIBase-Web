import type { MetadataRoute } from "next";
import { absoluteUrl, mainNav } from "@/lib/site";
import { news, community } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Hub pages change when content is added, so date them by the newest
  // article instead of the build time (which would flag every page as
  // modified on every deploy).
  const latestContent = new Date(
    Math.max(
      ...news.map((a) => new Date(a.updated ?? a.date).getTime()),
      ...community.map((p) => new Date(p.date).getTime()),
    ),
  );
  // Legal/about pages are edited rarely; bump this when they change.
  const staticPagesUpdated = new Date("2026-07-03");

  const pages: MetadataRoute.Sitemap = mainNav.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: latestContent,
    changeFrequency:
      item.href === "/" || item.href === "/news" || item.href === "/community"
        ? "daily"
        : "weekly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const extraPages: MetadataRoute.Sitemap = [
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: staticPagesUpdated,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const articles: MetadataRoute.Sitemap = news.map((a) => ({
    url: absoluteUrl(`/news/${a.slug}`),
    lastModified: new Date(a.updated ?? a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const communityPosts: MetadataRoute.Sitemap = community.map((p) => ({
    url: absoluteUrl(`/community/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...pages, ...extraPages, ...articles, ...communityPosts];
}
