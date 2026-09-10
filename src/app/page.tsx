import Link from "next/link";
import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { HeroTrailer } from "@/components/HeroTrailer";
import { JsonLd } from "@/components/JsonLd";
import { videoGameJsonLd } from "@/lib/seo";
import { gameFacts, editorial } from "@/lib/site";
import { readingTime } from "@/lib/text";
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

/** Numbered index of the guide sections, in reading order. */
const topics = [
  {
    href: "/characters",
    title: "Characters",
    blurb: "Meet Lucia and Jason, the dual leads at the heart of the story.",
  },
  {
    href: "/setting",
    title: "Map & Setting",
    blurb:
      "Explore Vice City and the state of Leonida — the biggest GTA world yet.",
  },
  {
    href: "/vehicles",
    title: "Vehicles",
    blurb: "Every car, bike and boat seen in the official trailers, by type.",
  },
  {
    href: "/trailers",
    title: "Trailers",
    blurb: "Watch every official trailer and break down what we learned.",
  },
  {
    href: "/editions",
    title: "Editions & Price",
    blurb:
      "Compare the Standard and Ultimate editions, pricing and pre-order bonuses.",
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

/** Shared shell: the concept's 1120px measure with a 28px gutter. */
const SHELL = "mx-auto max-w-[1120px] px-5 sm:px-7";

/** A section opener: ink rule, eyebrow heading, optional link on the right. */
function SectionHead({
  title,
  id,
  href,
  linkLabel,
}: {
  title: string;
  id?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="rule-top flex items-baseline justify-between gap-5">
      <h2 id={id} className="eyebrow">
        {title}
      </h2>
      {href && linkLabel && (
        <Link
          href={href}
          className="shrink-0 text-[13px] font-medium text-muted transition-colors hover:text-accent-deep"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const lastUpdated = [...community, ...latestCommunity].reduce(
    (latest, post) => (post.date > latest ? post.date : latest),
    trailers[0].released,
  );
  const lastUpdatedLabel = new Date(lastUpdated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <JsonLd data={videoGameJsonLd()} />

      <div className={SHELL}>
        {/* Hero */}
        <section className="max-w-[860px] pb-14 pt-16 sm:pt-21">
          <p className="eyebrow text-accent-deep">
            The independent GTA VI information hub
          </p>
          <h1 className="mt-6 text-[clamp(40px,6.4vw,74px)] font-semibold leading-[1.02] tracking-[-0.038em]">
            Everything about Grand Theft Auto VI
          </h1>
          <p className="serif mt-7 max-w-[620px] text-[21px] leading-[1.6] text-secondary">
            Release date, characters, the map of Leonida, trailers and a
            constantly updated FAQ — all the confirmed facts about Rockstar
            Games&rsquo; next Grand Theft Auto, in one clean place.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-3.5 gap-y-2 text-[13px] leading-tight text-muted">
            <span>{editorial.author}</span>
            <span aria-hidden className="dot-sep" />
            <span>
              Updated <time dateTime={lastUpdated}>{lastUpdatedLabel}</time>
            </span>
            <span aria-hidden className="dot-sep" />
            <span>Verified against official sources</span>
          </div>
        </section>

        <HeroTrailer
          youtubeId={trailers[0].youtubeId}
          title={trailers[0].title}
          releasedLabel={trailers[0].releasedLabel}
          thumbnail={trailers[0].thumbnail}
          embeddable={trailers[0].embeddable}
        />

        {/* Countdown */}
        <section aria-labelledby="countdown-heading" className="mt-18">
          <div className="rule-top flex flex-wrap items-baseline justify-between gap-6">
            <h2 id="countdown-heading" className="eyebrow">
              Countdown to launch
            </h2>
            <p className="text-[13px] leading-none text-muted">
              {gameFacts.releaseDateLabel} · PS5 &amp; Xbox Series X|S
            </p>
          </div>
          <div className="mt-6">
            <Countdown
              target={`${gameFacts.releaseDate}T00:00:00`}
              label={gameFacts.releaseDateLabel}
            />
          </div>
        </section>

        {/* Quick facts */}
        <section aria-labelledby="facts-heading" className="mt-16">
          <div className="rule-soft">
            <h2 id="facts-heading" className="eyebrow text-muted">
              Quick facts
            </h2>
          </div>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-7 pt-7">
            {quickFacts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase leading-none tracking-[0.1em] text-muted">
                  {f.label}
                </dt>
                <dd className="mt-2.5 text-xl font-semibold leading-[1.25] tracking-[-0.02em]">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Overview */}
        <section className="mt-22 max-w-[680px]">
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em]">
            What is GTA VI?
          </h2>
          <p className="serif mt-6 text-xl leading-[1.68] text-body">
            Grand Theft Auto VI is the next entry in Rockstar Games&rsquo;
            record-breaking open-world series — and the first mainline game since
            Grand Theft Auto V in 2013. It returns to a modern, reimagined Vice
            City within the fictional state of Leonida.
          </p>
          <p className="serif mt-5.5 text-xl leading-[1.68] text-body">
            For the first time the series follows two playable protagonists,
            Lucia and Jason, in a story Rockstar describes as a modern
            Bonnie-and-Clyde tale. GTA VI launches on PlayStation 5 and Xbox
            Series X|S on {gameFacts.releaseDateLabel}.
          </p>
        </section>

        {/* Explore the guide */}
        <section aria-labelledby="explore-heading" className="mt-22">
          <SectionHead
            id="explore-heading"
            title="Explore the guide"
            href="/faq"
            linkLabel="All guides"
          />
          <div>
            {topics.map((t, i) => (
              <Link
                key={t.href}
                href={t.href}
                className="grid grid-cols-[36px_minmax(0,1fr)_28px] items-baseline gap-5 border-b border-line py-6.5 transition-colors hover:bg-surface sm:grid-cols-[56px_minmax(0,1fr)_28px]"
              >
                <span className="text-xs leading-[1.6] tracking-[0.08em] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid gap-2">
                  <span className="text-[22px] font-semibold leading-[1.25] tracking-[-0.025em] sm:text-2xl">
                    {t.title}
                  </span>
                  <span className="serif max-w-[60ch] text-[17px] leading-[1.55] text-tertiary">
                    {t.blurb}
                  </span>
                </span>
                <span aria-hidden className="text-right text-lg text-accent">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Protagonists */}
        <section aria-labelledby="protagonists-heading" className="mt-22">
          <SectionHead
            id="protagonists-heading"
            title="The protagonists"
            href="/characters"
            linkLabel="All characters"
          />
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-14">
            {characters.map((c) => (
              <article key={c.slug}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 528px"
                    className="object-cover"
                  />
                </div>
                <p className="eyebrow-sm mt-5 text-muted">{c.role}</p>
                <h3 className="mt-3.5 text-3xl font-semibold leading-[1.15] tracking-[-0.03em]">
                  {c.name}
                </h3>
                <p className="serif mt-4 text-lg leading-[1.6] text-secondary">
                  {c.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Editions */}
        <section aria-labelledby="editions-heading" className="mt-22">
          <SectionHead
            id="editions-heading"
            title="Editions & price"
            href="/editions"
            linkLabel="Compare editions"
          />
          {editions.map((e) => (
            <Link
              key={e.slug}
              href="/editions"
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-8 border-b border-line py-7 transition-colors hover:bg-surface"
            >
              <span className="grid gap-2">
                <span className="text-[22px] font-semibold leading-[1.25] tracking-[-0.025em]">
                  {e.name}
                </span>
                <span className="serif max-w-[62ch] text-[17px] leading-[1.55] text-tertiary">
                  {e.tagline}
                </span>
              </span>
              <span className="text-[22px] font-semibold leading-[1.25] tabular-nums">
                {e.price}
              </span>
            </Link>
          ))}
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mt-22">
          <SectionHead
            id="faq-heading"
            title="Common questions"
            href="/faq"
            linkLabel="Full FAQ"
          />
          <dl>
            {faqs.slice(0, 4).map((f) => (
              <div
                key={f.question}
                className="grid grid-cols-1 gap-x-12 gap-y-3 border-b border-line py-7 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)]"
              >
                <dt className="text-[21px] font-semibold leading-[1.3] tracking-[-0.02em]">
                  {f.question}
                </dt>
                <dd className="serif text-lg leading-[1.62] text-secondary">
                  {f.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Community */}
        <section aria-labelledby="community-heading" className="mt-22">
          <SectionHead
            id="community-heading"
            title="Latest from the community"
            href="/community"
            linkLabel="All community"
          />
          <p className="serif mt-4.5 max-w-[60ch] text-[17px] leading-[1.6] text-muted">
            Fan theories, debates and leaks — unofficial, and clearly labelled.
          </p>
          <div className="mt-6">
            {latestCommunity.map((post) => (
              <Link
                key={post.slug}
                href={`/community/${post.slug}`}
                className="grid gap-3 border-b border-line py-7 transition-colors hover:bg-surface"
              >
                <span className="eyebrow-sm flex items-center gap-3 text-accent-deep">
                  <span>{categoryBySlug[post.category].label}</span>
                  <span aria-hidden className="dot-sep" />
                  <span>{post.dateLabel}</span>
                </span>
                <span className="max-w-[34ch] text-[26px] font-semibold leading-[1.25] tracking-[-0.03em]">
                  {post.title}
                </span>
                <span className="serif max-w-[72ch] text-lg leading-[1.6] text-tertiary">
                  {post.summary}
                </span>
                <span className="text-[13px] leading-none text-faint">
                  {readingTime(post.body)}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Trailer CTA */}
        <section
          aria-labelledby="trailer-cta-heading"
          className="rule-top mt-24 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-end gap-10 pt-12"
        >
          <div>
            <h2
              id="trailer-cta-heading"
              className="max-w-[22ch] text-[34px] font-semibold leading-[1.15] tracking-[-0.03em]"
            >
              Catch up on the trailers
            </h2>
            <p className="serif mt-4.5 max-w-[52ch] text-[19px] leading-[1.62] text-secondary">
              {trailers[1].description}
            </p>
            <Link href="/trailers" className="btn-accent mt-7">
              See every official video
            </Link>
          </div>
          <div className="relative aspect-video w-full overflow-hidden bg-surface">
            <Image
              src={trailers[1].thumbnail}
              alt={`${trailers[1].title} — official still`}
              fill
              sizes="(max-width: 900px) 100vw, 528px"
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </>
  );
}
