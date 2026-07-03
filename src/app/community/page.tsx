import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { community, communityCategories, type CommunityPost } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Community — Fan Theories, Story Talk & Conspiracy",
  description:
    "The unofficial side of the GTA VI countdown: fan theories, story speculation, trailer breakdowns, leaks and conspiracy talk — curated summaries with links back to where the discussion lives.",
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

      <div className="mx-auto max-w-5xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            The unofficial side
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text-cool">Community</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Fan theories, story talk, trailer breakdowns, leaks and the
            occasional wild conspiracy — everything the fandom is buzzing about,
            curated into readable summaries with links back to the source.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-orange/30 bg-orange/[0.07] px-5 py-4">
            <span aria-hidden className="mt-0.5 text-lg">
              ⚠️
            </span>
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-semibold text-foreground">
                This is unofficial, fan-made discussion — not confirmed
                information.
              </span>{" "}
              For facts straight from Rockstar Games, see the{" "}
              <Link href="/news" className="font-semibold text-pink hover:underline">
                official News section
              </Link>
              .
            </p>
          </div>
        </header>

        {/* Category jump-nav */}
        <nav aria-label="Community categories" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {communityCategories.map((c) => (
              <li key={c.slug}>
                <a
                  href={`#${c.slug}`}
                  className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted transition-colors hover:border-pink/50 hover:text-foreground"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 space-y-16">
          {groups.map(({ slug, posts }) => {
            const category = categoryBySlug[slug];
            return (
              <section key={slug} id={slug} className="scroll-mt-24">
                <header className="border-b border-white/10 pb-4">
                  <h2 className="font-display text-3xl">{category.label}</h2>
                  <p className="mt-2 max-w-2xl text-muted">{category.blurb}</p>
                </header>

                <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/community/${post.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-pink/50 hover:bg-white/[0.08]"
                      >
                        <div
                          className={`relative flex aspect-[16/7] items-end bg-gradient-to-br ${category.accent} p-4`}
                        >
                          <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                            {category.label}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <time
                            dateTime={post.date}
                            className="text-xs uppercase tracking-wider text-teal"
                          >
                            {post.dateLabel}
                          </time>
                          <h3 className="mt-2 font-display text-xl leading-tight">
                            {post.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-muted">
                            {post.summary}
                          </p>
                          <span className="mt-4 inline-block text-sm font-semibold text-pink transition-transform group-hover:translate-x-1">
                            Read summary →
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
