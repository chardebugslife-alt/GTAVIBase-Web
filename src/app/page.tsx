import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { HeroTrailer } from "@/components/HeroTrailer";
import { JsonLd } from "@/components/JsonLd";
import { videoGameJsonLd } from "@/lib/seo";
import { gameFacts } from "@/lib/site";
import {
  characters,
  faqs,
  trailers,
  editions,
  community,
  communityCategories,
} from "@/lib/data";

const categoryBySlug = Object.fromEntries(
  communityCategories.map((c) => [c.slug, c]),
);

/** The newest few community posts, for the homepage strip. */
const latestCommunity = [...community]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

const features = [
  {
    href: "/characters",
    title: "Characters",
    blurb: "Meet Lucia and Jason, the dual leads at the heart of the story.",
  },
  {
    href: "/setting",
    title: "Map & Setting",
    blurb: "Explore Vice City and the state of Leonida — the biggest GTA world yet.",
  },
  {
    href: "/trailers",
    title: "Trailers",
    blurb: "Watch every official trailer and break down what we learned.",
  },
  {
    href: "/editions",
    title: "Editions & Price",
    blurb: "Compare the Standard and Ultimate editions, pricing and pre-order bonuses.",
  },
  {
    href: "/news",
    title: "News",
    blurb: "The latest confirmed updates straight from Rockstar Games.",
  },
];

const quickFacts = [
  { label: "Release date", value: gameFacts.releaseDateLabel },
  { label: "Developer", value: gameFacts.developer },
  { label: "Setting", value: "Vice City, Leonida" },
  { label: "Platforms", value: "PS5 · Xbox Series X|S" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={videoGameJsonLd()} />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:pt-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-teal" aria-hidden />
          The independent GTA VI information hub
        </p>
        <h1 className="font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
          Everything about{" "}
          <span className="gradient-text">Grand Theft Auto VI</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Release date, characters, the map of Leonida, trailers and a
          constantly updated FAQ — all the confirmed facts about Rockstar
          Games&rsquo; next Grand Theft Auto, in one clean place.
        </p>

        <HeroTrailer
          youtubeId={trailers[0].youtubeId}
          title={trailers[0].title}
          releasedLabel={trailers[0].releasedLabel}
          thumbnail={trailers[0].thumbnail}
        />

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
          <p className="text-sm uppercase tracking-wider text-muted">
            Countdown to launch · {gameFacts.releaseDateLabel}
          </p>
          <div className="mt-4">
            <Countdown
              target={`${gameFacts.releaseDate}T00:00:00`}
              label={gameFacts.releaseDateLabel}
            />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section
        aria-labelledby="facts-heading"
        className="mx-auto max-w-6xl px-5 py-8"
      >
        <h2 id="facts-heading" className="sr-only">
          Quick facts
        </h2>
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {quickFacts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <dt className="text-xs uppercase tracking-wider text-muted">
                {f.label}
              </dt>
              <dd className="mt-2 font-display text-xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="font-display text-3xl sm:text-4xl">
          What is <span className="gradient-text-cool">GTA VI</span>?
        </h2>
        <div className="mt-5 grid gap-6 text-lg leading-relaxed text-muted md:grid-cols-2">
          <p>
            Grand Theft Auto VI is the next entry in Rockstar Games&rsquo;
            record-breaking open-world series — and the first mainline game since
            Grand Theft Auto V in 2013. It returns to a modern, reimagined Vice
            City within the fictional state of Leonida.
          </p>
          <p>
            For the first time the series follows two playable protagonists,
            Lucia and Jason, in a story Rockstar describes as a modern
            Bonnie-and-Clyde tale. GTA VI launches on PlayStation 5 and Xbox
            Series X|S on {gameFacts.releaseDateLabel}.
          </p>
        </div>
      </section>

      {/* Explore cards */}
      <section
        aria-labelledby="explore-heading"
        className="mx-auto max-w-6xl px-5 py-12"
      >
        <h2 id="explore-heading" className="font-display text-3xl sm:text-4xl">
          Explore the guide
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-pink/50 hover:bg-white/[0.08]"
            >
              <h3 className="font-display text-2xl text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.blurb}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-pink transition-transform group-hover:translate-x-1">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Characters teaser */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl">The protagonists</h2>
          <Link
            href="/characters"
            className="shrink-0 text-sm font-semibold text-pink hover:underline"
          >
            All characters →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {characters.map((c) => (
            <div
              key={c.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-wider text-teal">
                {c.role}
              </p>
              <h3 className="mt-1 font-display text-2xl">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {c.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Editions & pricing teaser */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl">
            Editions &amp; price
          </h2>
          <Link
            href="/editions"
            className="shrink-0 text-sm font-semibold text-pink hover:underline"
          >
            Compare editions →
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          GTA VI comes in two editions. See the full breakdown of what each
          includes, pricing and pre-order bonuses on the{" "}
          <Link href="/editions" className="text-pink hover:underline">
            editions &amp; price guide
          </Link>
          .
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {editions.map((e) => (
            <Link
              key={e.slug}
              href="/editions"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-pink/50 hover:bg-white/[0.08]"
            >
              <div>
                <h3 className="font-display text-2xl text-foreground">
                  {e.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{e.tagline}</p>
              </div>
              <span className="shrink-0 font-display text-2xl gradient-text">
                {e.price}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl">Common questions</h2>
          <Link
            href="/faq"
            className="shrink-0 text-sm font-semibold text-pink hover:underline"
          >
            Full FAQ →
          </Link>
        </div>
        <dl className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.slice(0, 4).map((f) => (
            <div key={f.question} className="p-6">
              <dt className="font-semibold text-foreground">{f.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {f.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Latest from Community */}
      <section
        aria-labelledby="community-heading"
        className="mx-auto max-w-6xl px-5 py-12"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2
              id="community-heading"
              className="font-display text-3xl sm:text-4xl"
            >
              Latest from the <span className="gradient-text-cool">community</span>
            </h2>
            <p className="mt-2 text-sm text-muted">
              Fan theories, debates and leaks — unofficial, and clearly labelled.
            </p>
          </div>
          <Link
            href="/community"
            className="shrink-0 text-sm font-semibold text-pink hover:underline"
          >
            All community →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {latestCommunity.map((post) => {
            const category = categoryBySlug[post.category];
            return (
              <Link
                key={post.slug}
                href={`/community/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-pink/50 hover:bg-white/[0.08]"
              >
                <div
                  className={`flex aspect-[16/6] items-end bg-gradient-to-br ${category.accent} p-4`}
                >
                  <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {category.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time
                    dateTime={post.date}
                    className="text-xs uppercase tracking-wider text-teal"
                  >
                    {post.dateLabel}
                  </time>
                  <h3 className="mt-2 font-display text-lg leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {post.summary}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-pink transition-transform group-hover:translate-x-1">
                    Read summary →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trailer CTA */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-pink/15 via-magenta/10 to-orange/15 p-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Watch the latest trailer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            {trailers[0].description}
          </p>
          <Link
            href="/trailers"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-pink to-orange px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
          >
            View all trailers
          </Link>
        </div>
      </section>
    </>
  );
}
