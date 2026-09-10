import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Byline } from "@/components/Byline";
import { AdInArticle } from "@/components/AdUnit";
import {
  pageMetadata,
  breadcrumbJsonLd,
  communityPostJsonLd,
} from "@/lib/seo";
import { readingTime } from "@/lib/text";
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

/** The concept sets the article on a 680px measure inside the 1120px shell. */
const SHELL = "mx-auto max-w-[1120px] px-5 sm:px-7";
const MEASURE = "mx-auto max-w-[680px]";

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

      <div className={SHELL}>
        <article className={`${MEASURE} pt-14`}>
          <nav>
            <Link
              href="/community"
              className="text-[13px] font-medium text-muted transition-colors hover:text-accent-deep"
            >
              ← All community
            </Link>
          </nav>

          <header className="mt-10">
            <div className="eyebrow-sm flex flex-wrap items-center gap-3 text-accent-deep">
              {category && (
                <Link href={`/community#${category.slug}`}>
                  {category.label}
                </Link>
              )}
              <span aria-hidden className="dot-sep" />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </div>
            <h1 className="mt-5.5 text-[clamp(34px,4.4vw,48px)] font-semibold leading-[1.12] tracking-[-0.035em]">
              {post.title}
            </h1>
            <p className="serif mt-6 text-[21px] leading-[1.6] text-tertiary">
              {post.summary}
            </p>
            <Byline
              date={post.date}
              dateLabel={post.dateLabel}
              readingTime={readingTime(post.body)}
            />
          </header>

          {/* Unofficial-content disclaimer — every community page carries it. */}
          <aside className="mt-10 border-l-2 border-accent bg-accent-wash px-6 py-5.5">
            <p className="eyebrow-sm">Fan discussion, not official information</p>
            <p className="serif mt-3 text-base leading-[1.6] text-secondary">
              This is a summary of community speculation and is not confirmed by
              Rockstar Games. For confirmed facts, see the{" "}
              <Link
                href="/news"
                className="text-accent-deep underline underline-offset-4"
              >
                News section
              </Link>
              .
            </p>
          </aside>

          {post.updatedLabel && (
            <p className="serif mt-6 border-l border-line pl-5 text-base leading-[1.6] text-muted">
              {post.updatedLabel}
            </p>
          )}

          <section aria-labelledby="talking-points" className="rule-top mt-12">
            <h2 id="talking-points" className="eyebrow">
              The talking points
            </h2>
            <ol>
              {post.keyPoints.map((point, i) => (
                <li
                  key={point}
                  className="serif grid grid-cols-[20px_minmax(0,1fr)] gap-4 border-b border-line-soft py-4 text-[17px] leading-[1.55] text-body"
                >
                  <span className="font-sans text-[13px] leading-[1.8] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-11">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className={`serif text-xl leading-[1.7] text-body ${
                  i === 0 ? "" : "mt-6.5"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <AdInArticle className="mt-11" />

          {post.related && post.related.length > 0 && (
            <section aria-labelledby="related" className="rule-top mt-16">
              <h2 id="related" className="eyebrow">
                Related on GTA VI Base
              </h2>
              <ul>
                {post.related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex justify-between gap-5 border-b border-line py-5 text-[19px] font-semibold leading-[1.3] tracking-[-0.02em] transition-colors hover:bg-surface"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden className="text-faint">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section aria-labelledby="discussion" className="mt-14 pb-5">
            <h2 id="discussion" className="eyebrow text-muted">
              Join the discussion
            </h2>
            <p className="serif mt-3.5 text-base leading-[1.6] text-muted">
              This conversation is happening on external, fan-run platforms.
              Links open in a new tab — we don&apos;t control their content.
            </p>
            <ul className="mt-5.5 grid gap-px bg-line">
              {links.map((link) => (
                <li key={link.url} className="bg-background">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 py-4.5 transition-colors hover:bg-surface"
                  >
                    <span className="serif text-[17px] leading-[1.45]">
                      {link.title}
                    </span>
                    <span className="whitespace-nowrap text-xs uppercase leading-none tracking-[0.1em] text-faint">
                      {link.publisher}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
      <RelatedLinks current="community" className={SHELL} />
    </>
  );
}
