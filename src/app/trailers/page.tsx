import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import Link from "next/link";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { trailers } from "@/lib/data";
import { gameFacts } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Trailers — Watch Every Official Video",
  description:
    "Watch every official Grand Theft Auto VI video from Rockstar Games: the record-breaking 2023 reveal, the second trailer, and An Extended Look — the in-game footage that premiered in August 2026 — with release dates and breakdowns.",
  path: "/trailers",
});

function videoObjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": trailers.map((t) => ({
      "@type": "VideoObject",
      name: t.title,
      description: t.description,
      uploadDate: t.released,
      thumbnailUrl: [t.thumbnail],
      embedUrl: `https://www.youtube.com/embed/${t.youtubeId}`,
      contentUrl: `https://www.youtube.com/watch?v=${t.youtubeId}`,
      publisher: {
        "@type": "Organization",
        name: gameFacts.publisher,
        url: "https://www.rockstargames.com",
      },
    })),
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

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">Trailers</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Every official Grand Theft Auto VI video, newest first — the two
            trailers and An Extended Look, the in-game footage Rockstar released
            in August 2026. Each one broke records and took us deeper into Vice
            City, Leonida and the game&rsquo;s two protagonists.
          </p>
        </header>

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
                Released {t.releasedLabel}
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
              Just as telling is what those two deliberately withheld: no gameplay,
              no heads-up display, no mission structure and no world map. That
              restraint is a Rockstar signature — reveal character and world long
              before systems. An Extended Look, captured entirely from in-game
              footage on PlayStation 5, is the first official break from the
              pattern, though Rockstar still controls exactly how much of the game
              it shows. For a fuller breakdown, read our explainer on{" "}
              <Link
                href="/news/trailer-2-released"
                className="font-semibold text-pink hover:underline"
              >
                every official GTA VI trailer
              </Link>
              , our write-up of{" "}
              <Link
                href="/news/extended-look-netflix-premiere"
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
      </article>
      <RelatedLinks current="trailers" />
    </>
  );
}
