import type { MetadataRoute } from "next";
import { absoluteUrl, mainNav } from "@/lib/site";
import { news, community } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = mainNav.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: now,
    changeFrequency:
      item.href === "/" || item.href === "/news" || item.href === "/community"
        ? "daily"
        : "weekly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const legal: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const articles: MetadataRoute.Sitemap = news.map((a) => ({
    url: absoluteUrl(`/news/${a.slug}`),
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const communityPosts: MetadataRoute.Sitemap = community.map((p) => ({
    url: absoluteUrl(`/community/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...pages, ...legal, ...articles, ...communityPosts];
}
