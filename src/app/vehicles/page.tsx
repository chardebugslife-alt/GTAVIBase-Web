import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { vehicleClasses } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Vehicles — Cars, Bikes & Boats (Official Info)",
  description:
    "Grand Theft Auto VI vehicles by type. Rockstar has not yet released an official vehicle list, names, specs or images — here's what's confirmed and what's still to come.",
  path: "/vehicles",
});

/** Icon per vehicle type for the placeholder banner. */
function ClassIcon({ slug, className }: { slug: string; className?: string }) {
  if (slug === "motorcycle") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="5" cy="17" r="3" />
        <circle cx="19" cy="17" r="3" />
        <path d="M8 17h6l3-6h-4l-2-3H6" />
        <path d="M14 11l-3 6" />
      </svg>
    );
  }
  if (slug === "boat") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 14h18l-2 5H5l-2-5z" />
        <path d="M12 14V4l6 6" />
        <path d="M2 21c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 13l2-5a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 8l2 5" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1v-4z" />
      <circle cx="7.5" cy="16.5" r="0.5" />
      <circle cx="16.5" cy="16.5" r="0.5" />
    </svg>
  );
}

export default function VehiclesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Vehicles", path: "/vehicles" },
        ])}
      />

      <div className="mx-auto max-w-5xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">Vehicles</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            The cars, bikes and boats of Grand Theft Auto VI, organised by type.
            Vehicles have been glimpsed throughout the official trailers — but
            the full line-up is still under wraps.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-orange/30 bg-orange/[0.07] px-5 py-4">
            <span aria-hidden className="mt-0.5 text-lg">
              ⏳
            </span>
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-semibold text-foreground">
                Rockstar has not yet released an official vehicle list.
              </span>{" "}
              Vehicle names, specifications and dedicated in-game images have not
              been revealed. Until they are, this page tracks the vehicle{" "}
              <em>types</em> confirmed to appear in the official{" "}
              <Link href="/trailers" className="font-semibold text-pink hover:underline">
                GTA VI trailers
              </Link>
              . We&rsquo;ll add each vehicle here — with official imagery — as
              Rockstar reveals it.
            </p>
          </div>
        </header>

        <section aria-labelledby="types-heading" className="mt-12">
          <h2 id="types-heading" className="font-display text-3xl">
            Vehicle types confirmed in the trailers
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            These categories are all visible in Rockstar&rsquo;s official
            footage. Individual models are yet to be officially named or detailed.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleClasses.map((cls) => (
              <li
                key={cls.slug}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div
                  className={`relative flex aspect-[16/9] items-end justify-between bg-gradient-to-br ${cls.accent} p-4`}
                >
                  <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {cls.label}
                  </span>
                  <ClassIcon slug={cls.slug} className="h-8 w-8 text-white/90" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl leading-tight">
                    {cls.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {cls.blurb}
                  </p>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
                    Official models yet to be released
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sources */}
        <section className="mt-16 border-t border-white/10 pt-8">
          <h2 className="font-display text-xl text-foreground">
            Sources &amp; credits
          </h2>
          <p className="mt-2 text-sm text-muted">
            The only official footage of GTA VI vehicles so far is in Rockstar
            Games&rsquo; trailers. Watch them on the{" "}
            <Link href="/trailers" className="font-semibold text-pink hover:underline">
              trailers page
            </Link>
            . This page will be updated with official vehicle names and imagery
            once Rockstar publishes them.
          </p>
        </section>
      </div>

      <RelatedLinks current="vehicles" className="mx-auto max-w-5xl px-5" />
    </>
  );
}
