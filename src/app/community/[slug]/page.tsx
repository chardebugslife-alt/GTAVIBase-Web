import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { AdInArticle } from "@/components/AdUnit";
import {
  pageMetadata,
  breadcrumbJsonLd,
  communityPostJsonLd,
} from "@/lib/seo";
import { community, communityCategories } from "@/lib/data";

type Params = { slug: string };

/** Prerender one static page per community post. */
export function generateStaticParams(): Params[] {
  return community.map((p) => ({ slug: p.slug }));
}

function getPost(slug: string) {
  return community.find((p) => p.slug === slug);
}

const categoryBySlug = Object.fromEntries(
  communityCategories.map((c) => [c.slug, c]),
);

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return pageMetadata({
    title: `${post.title} — GTA VI Community`,
    description: post.summary,
    path: `/community/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function CommunityPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const category = categoryBySlug[post.category];
  const links = [post.source, ...(post.moreLinks ?? [])];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
          { name: post.title, path: `/community/${post.slug}` },
        ])}
      />
      <JsonLd data={communityPostJsonLd(post)} />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-sm text-muted">
          <Link href="/community" className="text-pink hover:underline">
            ← All community
          </Link>
        </nav>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            {category && (
              <Link
                href={`/community#${category.slug}`}
                className={`rounded-full bg-gradient-to-r ${category.accent} px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white`}
              >
                {category.label}
              </Link>
            )}
            <time
              dateTime={post.date}
              className="text-xs uppercase tracking-wider text-teal"
            >
              {post.dateLabel}
            </time>
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {post.summary}
          </p>
        </header>

        {/* Unofficial-content disclaimer — every community page carries it. */}
        <aside className="mt-8 flex items-start gap-3 rounded-2xl border border-orange/30 bg-orange/[0.07] px-5 py-4">
          <span aria-hidden className="mt-0.5 text-lg">
            ⚠️
          </span>
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-semibold text-foreground">
              Fan discussion, not official information.
            </span>{" "}
            This is a summary of community speculation and is not confirmed by
            Rockstar Games. For confirmed facts, see the{" "}
            <Link href="/news" className="font-semibold text-pink hover:underline">
              News section
            </Link>
            .
          </p>
        </aside>

        {post.updatedLabel && (
          <p className="mt-4 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted">
            {post.updatedLabel}
          </p>
        )}

        <section
          aria-labelledby="talking-points"
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2
            id="talking-points"
            className="font-display text-sm uppercase tracking-wider text-teal"
          >
            The talking points
          </h2>
          <ul className="mt-4 space-y-2">
            {post.keyPoints.map((point) => (
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
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <AdInArticle className="mt-10" />

        {post.related && post.related.length > 0 && (
          <section
            aria-labelledby="related"
            className="mt-12 border-t border-white/10 pt-6"
          >
            <h2
              id="related"
              className="font-display text-sm uppercase tracking-wider text-teal"
            >
              Related on GTA VI Base
            </h2>
            <ul className="mt-4 space-y-3">
              {post.related.map((link) => (
                <li key={link.href} className="text-sm">
                  <Link
                    href={link.href}
                    className="font-semibold text-pink hover:underline"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section
          aria-labelledby="discussion"
          className="mt-12 border-t border-white/10 pt-6"
        >
          <h2
            id="discussion"
            className="font-display text-sm uppercase tracking-wider text-teal"
          >
            Join the discussion
          </h2>
          <p className="mt-2 text-sm text-muted">
            This conversation is happening on external, fan-run platforms. Links
            open in a new tab — we don&apos;t control their content.
          </p>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.url} className="text-sm">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-semibold text-pink hover:underline"
                >
                  {link.title}
                </a>
                <span className="text-muted"> — {link.publisher}</span>
                <span className="ml-2 rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted/80">
                  {link.kind}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
