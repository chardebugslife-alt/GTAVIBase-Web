import type { MetadataRoute } from "next";
import { absoluteUrl, mainNav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return mainNav.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: now,
    changeFrequency: item.href === "/" || item.href === "/news" ? "daily" : "weekly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
