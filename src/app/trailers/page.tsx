import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import Link from "next/link";
import {
  pageMetadata,
  breadcrumbJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
} from "@/lib/seo";
import { trailers, trailerFaqs } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA 6 Trailer: Watch Every Official GTA VI Trailer",
  description:
    "Watch the new GTA 6 Launch Trailer and every official Grand Theft Auto VI trailer in full: Trailer 1, Trailer 2 and the 27-minute Extended Look, with release dates, run times, songs and what each one shows.",
  path: "/trailers",
});

/** "Grand Theft Auto VI — Launch Trailer" → "Launch Trailer". */
function shortTitle(title: string) {
  return title.replace(/^Grand Theft Auto VI(: | — )/, "");
}

const latest = trailers[0];

function videoObjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": trailers.map(videoObjectJsonLd),
  };
}

export default function TrailersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Trailers", path: "/trailers" },
        ])}
      />
      <JsonLd data={videoObjectsJsonLd()} />
      <JsonLd data={faqPageJsonLd(trailerFaqs)} />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">GTA 6 Trailers</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Every official Grand Theft Auto VI trailer, newest first, to watch
            in full. The latest GTA 6 trailer is the{" "}
            <a
              href={`#${latest.id}-heading`}
              className="font-semibold text-pink hover:underline"
            >
              {shortTitle(latest.title)}
            </a>
            , released by Rockstar Games on October 15, 2026 &mdash; expected to
            be the last before the game launches on November 19. Below it are An
            Extended Look and the two trailers that started it all.
          </p>
        </header>

        <section aria-labelledby="list-heading" className="mt-10">
          <h2 id="list-heading" className="sr-only">
            Every official GTA 6 trailer at a glance
          </h2>
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">Trailer</th>
                  <th scope="col" className="px-4 py-3 font-medium">Released</th>
                  <th scope="col" className="px-4 py-3 font-medium">Length</th>
                  <th scope="col" className="px-4 py-3 font-medium">Music</th>
                </tr>
              </thead>
              <tbody>
                {trailers.map((t) => (
                  <tr key={t.id} className="border-t border-line align-top">
                    <td className="px-4 py-3">
                      <a
                        href={`#${t.id}-heading`}
                        className="font-semibold text-pink hover:underline"
                      >
                        {shortTitle(t.title)}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-muted">
                      <time dateTime={t.released}>
                        {new Date(t.released).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC",
                        })}
                      </time>
                    </td>
                    <td className="px-4 py-3 text-muted">{t.durationLabel}</td>
                    <td className="px-4 py-3 text-muted">{t.music ?? "Various"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-12 space-y-14">
          {trailers.map((t) => (
            <section key={t.id} aria-labelledby={`${t.id}-heading`}>
              <h2
                id={`${t.id}-heading`}
                className="font-display text-2xl sm:text-3xl"
              >
                {t.title}
              </h2>
              <p className="mt-1 text-sm text-muted">
                Released {t.releasedLabel} · {t.durationLabel}
                {t.music ? ` · Music: ${t.music}` : null}
              </p>
              <div className="relative mt-4 aspect-video w-full overflow-hidden border border-line bg-black">
                {t.embeddable === false ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${t.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${t.title} on YouTube`}
                    className="group absolute inset-0 block h-full w-full"
                  >
                    <Image
                      src={t.thumbnail}
                      alt={`${t.title} — official still`}
                      fill
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-[13px] font-medium text-foreground">
                      Watch on YouTube
                    </span>
                  </a>
                ) : (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}`}
                    title={t.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {t.description}
              </p>
              {t.embeddable === false ? (
                <p className="mt-2 text-sm text-muted">
                  Rockstar has age-restricted this video, so YouTube will only
                  play it on its own site — the still above links straight to it.
                </p>
              ) : null}
            </section>
          ))}
        </div>

        <section aria-labelledby="about-heading" className="mt-16 max-w-3xl">
          <h2 id="about-heading" className="font-display text-3xl">
            What the official footage tells us
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              For most of the campaign the official footage came down to two
              trailers — the December 2023 reveal and the longer follow-up in May
              2025 — which is why both are worth watching closely rather than
              once. The first ended years of
              speculation by confirming the return to Vice City, introducing Lucia
              and setting its montage of sun, crime and excess to Tom Petty&rsquo;s
              &ldquo;Love Is a Long Road.&rdquo; It leaned hard into a social-media,
              livestream-saturated version of Leonida, signalling that GTA VI would
              hold a mirror to the present day.
            </p>
            <p>
              The second trailer was a different kind of video: longer, calmer and
              more character-driven. It fleshed out Lucia, formally introduced her
              partner Jason, and widened the lens across Leonida — from Vice
              City&rsquo;s beaches and nightlife to the swamps, keys and small
              towns that ring it. Crucially, it arrived alongside a release date,
              turning an abstract &ldquo;someday&rdquo; into a moment fans could
              mark on a calendar.
            </p>
            <p>
              Just as telling is what those two deliberately withheld. Rockstar
              says Trailer 2 was captured in-game on PlayStation 5, half gameplay
              and half cutscenes, but it was cut as a cinematic trailer: no
              heads-up display, no mission structure and no world map. That
              restraint is a Rockstar signature — reveal character and world long
              before systems. An Extended Look, captured entirely from in-game
              footage on PlayStation 5, is the first official video to show the
              game being played at length, though Rockstar still controls exactly how much of the game
              it shows.
            </p>
            <p>
              The Launch Trailer, released on October 15, 2026, closes the
              campaign. At about ninety seconds it is back to the length of the
              reveal, and like An Extended Look it was captured entirely in-game
              on PlayStation 5. It spells out the premise &mdash; an easy score
              goes wrong and Lucia and Jason are drawn into a conspiracy that
              spans Leonida &mdash; and swaps licensed songs for &ldquo;Flower in
              a Hurricane,&rdquo; a new single from Justice, the duo behind the
              game&rsquo;s original score. For a fuller breakdown, read our
              explainer on{" "}
              <Link
                href="/news/trailer-2-released"
                className="font-semibold text-pink hover:underline"
              >
                every official GTA VI trailer
              </Link>
              , our write-up of{" "}
              <Link
                href="/news/extended-look-breakdown"
                className="font-semibold text-pink hover:underline"
              >
                what An Extended Look showed
              </Link>
              , or see the details fans keep spotting in our{" "}
              <Link
                href="/community/trailer-2-hidden-details"
                className="font-semibold text-pink hover:underline"
              >
                trailer breakdown roundup
              </Link>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="trailer-faq-heading" className="mt-16 max-w-3xl">
          <h2 id="trailer-faq-heading" className="font-display text-3xl">
            GTA 6 trailer FAQ
          </h2>
          <div className="mt-6 space-y-3">
            {trailerFaqs.map((f) => (
              <div key={f.question} className="border border-line bg-surface p-6">
                <h3 className="font-semibold text-foreground">{f.question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <RelatedLinks current="trailers" />
    </>
  );
}
