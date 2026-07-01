import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  pageMetadata,
  breadcrumbJsonLd,
  newsArticleJsonLd,
} from "@/lib/seo";
import { news } from "@/lib/data";

type Params = { slug: string };

/** Prerender one static page per article. */
export function generateStaticParams(): Params[] {
  return news.map((a) => ({ slug: a.slug }));
}

function getArticle(slug: string) {
  return news.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return pageMetadata({
    title: `${article.title} — GTA VI News`,
    description: article.summary,
    path: `/news/${article.slug}`,
    image: article.image,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
          { name: article.title, path: `/news/${article.slug}` },
        ])}
      />
      <JsonLd data={newsArticleJsonLd(article)} />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-sm text-muted">
          <Link href="/news" className="text-pink hover:underline">
            ← All news
          </Link>
        </nav>

        <header className="mt-6">
          <time
            dateTime={article.date}
            className="text-xs uppercase tracking-wider text-teal"
          >
            {article.dateLabel}
          </time>
          <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {article.summary}
          </p>
          {article.updatedLabel && (
            <p className="mt-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted">
              {article.updatedLabel}
            </p>
          )}
        </header>

        <figure className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-muted">
            <a
              href={article.imageCreditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {article.imageCredit}
            </a>
          </figcaption>
        </figure>

        <section
          aria-labelledby="key-points"
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2
            id="key-points"
            className="font-display text-sm uppercase tracking-wider text-teal"
          >
            Key points
          </h2>
          <ul className="mt-4 space-y-2">
            {article.keyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-foreground/90"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
          {article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <section
          aria-labelledby="sources"
          className="mt-12 border-t border-white/10 pt-6"
        >
          <h2
            id="sources"
            className="font-display text-sm uppercase tracking-wider text-teal"
          >
            Sources &amp; credits
          </h2>
          <p className="mt-2 text-sm text-muted">
            Every fact on this page is drawn from official Rockstar Games sources.
          </p>
          <ul className="mt-4 space-y-3">
            {article.sources.map((source) => (
              <li key={source.url} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink hover:underline"
                >
                  {source.title}
                </a>
                <span className="text-muted"> — {source.publisher}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
