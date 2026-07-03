import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { trailers } from "@/lib/data";
import { siteConfig } from "@/lib/site";

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
        name: siteConfig.name,
        url: siteConfig.url,
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
      </article>
      <RelatedLinks current="trailers" />
    </>
  );
}
