import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { news } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI News — Latest Confirmed Updates",
  description:
    "The latest confirmed Grand Theft Auto VI news and announcements from Rockstar Games, including the release window, trailers and platform details.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
        ])}
      />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">News</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Confirmed Grand Theft Auto VI updates, newest first. We only track
            official information from Rockstar Games — no rumors or leaks.
          </p>
        </header>

        <ol className="mt-12 space-y-6">
          {news.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/news/${item.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-pink/50 hover:bg-white/[0.08] sm:flex"
              >
                <div className="relative aspect-video w-full shrink-0 bg-black sm:aspect-auto sm:w-56">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 224px"
                    className="object-cover"
                  />
                </div>
                <article className="p-7">
                  <time
                    dateTime={item.date}
                    className="text-xs uppercase tracking-wider text-teal"
                  >
                    {item.dateLabel}
                  </time>
                  <h2 className="mt-2 font-display text-2xl">{item.title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-pink transition-transform group-hover:translate-x-1">
                    Read article →
                  </span>
                </article>
              </Link>
            </li>
          ))}
        </ol>
      </article>
      <RelatedLinks current="news" />
    </>
  );
}
