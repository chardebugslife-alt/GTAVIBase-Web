import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import Link from "next/link";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { trailers } from "@/lib/data";
import { gameFacts } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Trailers — Watch Every Official Trailer",
  description:
    "Watch every official Grand Theft Auto VI trailer from Rockstar Games, including the record-breaking first reveal and the second trailer, with release dates and breakdowns.",
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
            Every official Grand Theft Auto VI trailer, newest first. Each reveal
            broke records and gave us a deeper look at Vice City, Leonida and the
            game&rsquo;s two protagonists.
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
                Released {t.releasedLabel} · Music: {t.music}
              </p>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}`}
                  title={t.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {t.description}
              </p>
            </section>
          ))}
        </div>

        <section aria-labelledby="about-heading" className="mt-16 max-w-3xl">
          <h2 id="about-heading" className="font-display text-3xl">
            What the two trailers tell us
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              For all the anticipation around Grand Theft Auto VI, the official
              footage still comes down to just these two trailers — the December
              2023 reveal and the longer follow-up in May 2025. That makes them
              worth watching closely rather than once. The first ended years of
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
              Just as telling is what the trailers deliberately withhold: there is
              no gameplay footage, no heads-up display, no mission structure and no
              world map. That restraint is a Rockstar signature — reveal character
              and world long before systems. It means almost everything about how
              the game actually plays remains unconfirmed until Rockstar chooses to
              show it. For a fuller breakdown, read our explainer on{" "}
              <Link
                href="/news/trailer-2-released"
                className="font-semibold text-pink hover:underline"
              >
                both official GTA VI trailers
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
