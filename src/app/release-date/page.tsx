import type { Metadata } from "next";
import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { absoluteUrl, gameFacts, editorial } from "@/lib/site";
import { releaseDateFaqs } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA 6 Release Date: Nov 19, 2026 + Countdown",
  description:
    "GTA 6 releases Thursday, November 19, 2026 on PS5 and Xbox Series X|S. Live countdown, every delay explained, the pre-order and preload dates, and what is still unconfirmed, such as PC.",
  path: "/release-date",
});

/** Bump when the timeline changes or the page is re-checked against Rockstar. */
const lastVerified = "November 7, 2026";
const lastVerifiedIso = "2026-11-07";

const timeline = [
  {
    when: "December 2023",
    what: "Trailer 1 reveals the game with a broad 2025 window, not a date.",
    status: "Past",
  },
  {
    when: "May 6, 2025",
    what: "Trailer 2 arrives with the first firm date: May 26, 2026.",
    status: "Superseded",
  },
  {
    when: "November 6, 2025",
    what: "Rockstar moves the game to November 19, 2026, its second delay.",
    status: "Current date",
  },
  {
    when: "June 25, 2026",
    what: "Pre-orders open, with the Vintage Vice City Pack for early orders.",
    status: "Past",
  },
  {
    when: "August 2026",
    what: "An Extended Look, a 27-minute film, shows the game at length.",
    status: "Past",
  },
  {
    when: "October 15, 2026",
    what: "The Launch Trailer ends on the November 19 date.",
    status: "Past",
  },
  {
    when: "November 10, 2026",
    what: "Pre-load begins on PS5 (midnight local time) and Xbox Series X|S (12 a.m. GMT); the file is up to 212 GB.",
    status: "Upcoming",
  },
  {
    when: "November 12, 2026",
    what: "Code-in-box versions should reach retailers.",
    status: "Upcoming",
  },
  {
    when: "November 19, 2026",
    what: "Grand Theft Auto VI unlocks on PS5 and Xbox Series X|S.",
    status: "Launch day",
  },
  {
    when: "November 20, 2026",
    what: "Orders placed before this date include the Vintage Vice City Pack.",
    status: "Deadline",
  },
];

const sources = [
  {
    title: "Grand Theft Auto VI is Now Set to Launch November 19, 2026",
    publisher: "Rockstar Games Newswire",
    url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
  },
  {
    title: "Grand Theft Auto VI is Now Coming May 26, 2026 (superseded)",
    publisher: "Rockstar Games Newswire",
    url: "https://www.rockstargames.com/newswire/article/258aa538o412ok/grand-theft-auto-vi-is-now-coming-may-26-2026",
  },
  {
    title: "Grand Theft Auto VI — Official Site",
    publisher: "Rockstar Games",
    url: "https://www.rockstargames.com/VI",
  },
  {
    title: "Grand Theft Auto VI — Rockstar Store",
    publisher: "Rockstar Store",
    url: "https://store.rockstargames.com/game/buy-gta-vi",
  },
];

function releaseDateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GTA 6 Release Date",
    url: absoluteUrl("/release-date"),
    dateModified: lastVerifiedIso,
    isPartOf: { "@type": "WebSite", name: "GTA VI Base", url: absoluteUrl("/") },
    author: { "@type": "Organization", name: editorial.author },
    about: {
      "@type": "VideoGame",
      name: gameFacts.title,
      datePublished: gameFacts.releaseDate,
      gamePlatform: [...gameFacts.platforms],
    },
  };
}

export default function ReleaseDatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Release Date", path: "/release-date" },
        ])}
      />
      <JsonLd data={releaseDateJsonLd()} />
      <JsonLd data={faqPageJsonLd(releaseDateFaqs)} />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">GTA 6 Release Date</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Grand Theft Auto VI is out on{" "}
            <strong className="text-foreground">
              Thursday, {gameFacts.releaseDateLabel}
            </strong>{" "}
            on PlayStation 5 and Xbox Series X|S. Rockstar Games confirmed the
            date on November 6, 2025, after two delays. There is no PC version
            announced. This page keeps the full timeline, the pre-order and
            preload dates, and everything still unconfirmed in one place, last
            checked {lastVerified}.
          </p>
        </header>

        <section aria-labelledby="countdown-heading" className="mt-10">
          <h2 id="countdown-heading" className="font-display text-3xl">
            GTA 6 countdown
          </h2>
          <div className="mt-6">
            <Countdown
              target={`${gameFacts.releaseDate}T00:00:00`}
              label={gameFacts.releaseDateLabel}
            />
          </div>
        </section>

        <section aria-labelledby="timeline-heading" className="mt-14">
          <h2 id="timeline-heading" className="font-display text-3xl">
            GTA 6 release timeline: every date that matters
          </h2>
          <table className="mt-5 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wider text-teal">
                <th scope="col" className="py-2 pr-4 font-normal">Date</th>
                <th scope="col" className="py-2 pr-4 font-normal">What happens</th>
                <th scope="col" className="py-2 font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((t) => (
                <tr key={t.when} className="border-b border-line/50 align-top">
                  <th scope="row" className="whitespace-nowrap py-3 pr-4 font-semibold">
                    {t.when}
                  </th>
                  <td className="py-3 pr-4 text-muted">{t.what}</td>
                  <td className="py-3 text-secondary">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section aria-labelledby="delays-heading" className="mt-14 max-w-3xl">
          <h2 id="delays-heading" className="font-display text-3xl">
            How the GTA 6 release date moved
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rockstar unveiled Grand Theft Auto VI with its first trailer in
              December 2023 and attached only a broad target of 2025. That was
              enough to set expectations sky-high after more than a decade without
              a mainline entry, but it was a window, not a date, and windows tend
              to move.
            </p>
            <p>
              The first hard date came with the second trailer. On May 6, 2025,
              Rockstar released{" "}
              <Link href="/trailers" className="font-semibold text-pink hover:underline">
                Trailer 2
              </Link>{" "}
              and in the same announcement narrowed the launch to May 26, 2026.
              That date did not hold. On November 6, 2025, Rockstar announced a
              delay of just under six months, to November 19, 2026. The studio
              framed the move as a matter of polish, saying the extra time would
              let the team finish the game to the standard players expect.
            </p>
            <p>
              A late-November Thursday places the game inside the holiday sales
              window, and a mid-week launch is a familiar Rockstar pattern. Rockstar
              has not described either as strategy, so we flag that as context, not
              as a fact. It is also worth remembering that a delay means something
              different for this studio. Red Dead Redemption 2 moved twice before it
              shipped to some of the best reviews of its generation.
            </p>
          </div>
        </section>

        <section aria-labelledby="again-heading" className="mt-12 max-w-3xl">
          <h2 id="again-heading" className="font-display text-3xl">
            Will GTA 6 be delayed again?
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rockstar has given no sign of a third delay, and the business
              machinery is already running against it. Pre-orders opened on June
              25, 2026. A bonus is tied to ordering before November 20. Pre-loading
              opens on November 10, and the Launch Trailer, released on
              October 15, closes on the release date. Publishers rarely open
              pre-orders, attach dated bonuses and schedule preloads for a date they
              intend to abandon.
            </p>
            <p>
              None of that is a guarantee. The only way the date changes is if
              Rockstar says so, and any &ldquo;insider&rdquo; claim of a new slip
              that does not come from the studio is a rumour. For the fan debate
              on both sides, see our community piece,{" "}
              <Link
                href="/community/will-it-delay-again"
                className="font-semibold text-pink hover:underline"
              >
                will GTA VI get delayed again?
              </Link>
            </p>
          </div>
        </section>

        <section aria-labelledby="platform-dates-heading" className="mt-12 max-w-3xl">
          <h2 id="platform-dates-heading" className="font-display text-3xl">
            GTA 6 release date by platform
          </h2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">PlayStation 5:</strong> November
              19, 2026.
            </li>
            <li>
              <strong className="text-foreground">Xbox Series X|S:</strong> November
              19, 2026.
            </li>
            <li>
              <strong className="text-foreground">PC:</strong> no version or date
              announced.
            </li>
            <li>
              <strong className="text-foreground">PS4 and Xbox One:</strong> not
              supported. GTA 6 is a current-generation game.
            </li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            The reasoning, the PC history and the unconfirmed rumours are in our{" "}
            <Link href="/platforms" className="font-semibold text-pink hover:underline">
              GTA 6 platforms guide
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="prepare-heading" className="mt-12 max-w-3xl">
          <h2 id="prepare-heading" className="font-display text-3xl">
            What to do before November 19
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Pick an edition.</strong> Standard
              is $79.99 and Ultimate is $99.99 in US digital pricing. Our{" "}
              <Link href="/editions" className="font-semibold text-pink hover:underline">
                editions and price guide
              </Link>{" "}
              compares them.
            </li>
            <li>
              <strong className="text-foreground">Pre-order before November 20</strong>{" "}
              to get the Vintage Vice City Pack.
            </li>
            <li>
              <strong className="text-foreground">Clear storage.</strong> Rockstar
              says the pre-load needs up to 212 GB, so free the space now.
            </li>
            <li>
              <strong className="text-foreground">Pre-load from November 10</strong>{" "}
              so you can play the moment the game unlocks. Boxed copies are a
              download code with no disc.
            </li>
          </ol>
        </section>

        <section aria-labelledby="unknown-heading" className="mt-12 max-w-3xl">
          <h2 id="unknown-heading" className="font-display text-3xl">
            What is still unconfirmed
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            We have not seen Rockstar publish a launch-night unlock time or
            region-by-region times, an install size, a PC version, or details of
            any online mode. We list those here as unconfirmed rather than
            repeating figures from rumours, and we update this page the day Rockstar
            announces any of them.
          </p>
        </section>

        <section aria-labelledby="faq-heading" className="mt-12 max-w-3xl">
          <h2 id="faq-heading" className="font-display text-3xl">
            GTA 6 release date FAQ
          </h2>
          <div className="mt-6 space-y-3">
            {releaseDateFaqs.map((f) => (
              <div key={f.question} className="border border-line bg-surface p-6">
                <h3 className="font-semibold text-foreground">{f.question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="sources-heading" className="mt-12 border-t border-line pt-6">
          <h2 id="sources-heading" className="text-xs uppercase tracking-wider text-teal">
            Sources
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {sources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink hover:underline"
                >
                  {src.title}
                </a>{" "}
                &mdash; {src.publisher}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">
            Written by {editorial.author}. Every date on this page comes from
            Rockstar Games&rsquo; own announcements.
          </p>
        </section>
      </article>
      <RelatedLinks current="releaseDate" />
    </>
  );
}
