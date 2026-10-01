import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { readingTime } from "@/lib/text";
import { community, communityCategories, type CommunityPost } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Community — Fan Theories, Story Talk & Conspiracy",
  description:
    "The unofficial side of the GTA VI countdown: fan theories, story speculation, trailer breakdowns and conspiracy talk — curated summaries with links back to where the discussion lives.",
  path: "/community",
});

/** Posts grouped by category, newest first within each group. */
function postsByCategory(): { slug: string; posts: CommunityPost[] }[] {
  return communityCategories
    .map((c) => ({
      slug: c.slug,
      posts: community
        .filter((p) => p.category === c.slug)
        .sort((a, b) => b.date.localeCompare(a.date)),
    }))
    .filter((group) => group.posts.length > 0);
}

const categoryBySlug = Object.fromEntries(
  communityCategories.map((c) => [c.slug, c]),
);

const SHELL = "mx-auto max-w-[1120px] px-5 sm:px-7";

export default function CommunityPage() {
  const groups = postsByCategory();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
        ])}
      />

      <div className={SHELL}>
        <header className="max-w-[760px] pt-16 sm:pt-21">
          <p className="eyebrow text-muted">Community</p>
          <h1 className="mt-6 text-[clamp(38px,5.2vw,60px)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Theories, debates and breakdowns
          </h1>
          <p className="serif mt-6 max-w-[60ch] text-xl leading-[1.65] text-secondary">
            What the fandom is arguing about, summarised and sourced. Nothing on
            this page is confirmed by Rockstar Games — every entry is labelled
            with how solid the evidence is. For facts straight from Rockstar,
            see the{" "}
            <Link
              href="/news"
              className="text-accent-deep underline underline-offset-4"
            >
              official News section
            </Link>
            .
          </p>
        </header>

        {/* Category jump-nav */}
        <nav aria-label="Community categories" className="mt-10">
          <ul className="flex flex-wrap gap-2.5">
            {communityCategories.map((c) => (
              <li key={c.slug}>
                <a
                  href={`#${c.slug}`}
                  className="inline-block rounded-full border border-line px-3.5 py-2.5 text-xs font-medium uppercase leading-none tracking-[0.06em] text-secondary transition-colors hover:border-accent hover:text-accent-deep"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16">
          {groups.map(({ slug, posts }) => {
            const category = categoryBySlug[slug];
            return (
              <section key={slug} id={slug} className="mb-16 scroll-mt-24">
                <div className="rule-top">
                  <h2 className="eyebrow">{category.label}</h2>
                  <p className="serif mt-3.5 max-w-[70ch] text-[17px] leading-[1.55] text-muted">
                    {category.blurb}
                  </p>
                </div>

                <ul>
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/community/${post.slug}`}
                        className="grid grid-cols-1 gap-x-10 gap-y-5 border-b border-line py-7 transition-colors hover:bg-surface md:grid-cols-[minmax(0,1fr)_minmax(0,200px)]"
                      >
                        <span className="grid gap-3">
                          <time
                            dateTime={post.date}
                            className="text-xs uppercase leading-none tracking-[0.14em] text-muted"
                          >
                            {post.dateLabel}
                          </time>
                          <span className="max-w-[34ch] text-[27px] font-semibold leading-[1.22] tracking-[-0.03em]">
                            {post.title}
                          </span>
                          <span className="serif max-w-[70ch] text-lg leading-[1.6] text-tertiary">
                            {post.summary}
                          </span>
                          <span className="text-[13px] leading-none text-faint">
                            {readingTime(post.body)}
                          </span>
                        </span>
                        {post.evidence && (
                          <span className="serif border-line pl-0 text-[13px] italic leading-[1.5] text-muted md:border-l md:pl-5">
                            {post.evidence}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
      <RelatedLinks current="community" className={SHELL} />
    </>
  );
}
