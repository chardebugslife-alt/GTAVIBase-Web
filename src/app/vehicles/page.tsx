import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { vehicleClasses } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Vehicles — Cars, Bikes & Boats Seen in the Trailers",
  description:
    "A guide to the cars, motorcycles and boats of Grand Theft Auto VI, organised by type and grounded in Rockstar's two official trailers — from Vice City supercars to Leonida's wetland airboats.",
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
            Getting around Leonida means getting behind the wheel &mdash; and
            Grand Theft Auto VI&rsquo;s two official trailers are packed with the
            cars, motorcycles and boats you&rsquo;ll be driving, riding and
            piloting across Vice City and the state beyond. This guide breaks the
            fleet down by type, using only what Rockstar has actually shown.
          </p>
        </header>

        <section aria-labelledby="overview-heading" className="mt-12 max-w-3xl">
          <h2 id="overview-heading" className="font-display text-3xl">
            What the trailers reveal
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Vice City&rsquo;s traffic is as much a character as its people. The
              reveal trailer and{" "}
              <Link href="/trailers" className="font-semibold text-pink hover:underline">
                Trailer 2
              </Link>{" "}
              together show a fleet that spans every corner of a modern Florida
              stand-in: low-slung exotics tearing down neon-lit boulevards,
              chrome-heavy classics cruising the beachfront, lifted pickups
              kicking up dust on backcountry roads, and a whole world of
              watercraft built for the coast, the canals and the swamps.
            </p>
            <p>
              The most talked-about vehicle so far is the magenta muscle car that
              bookends both trailers &mdash; a hero car the community has adopted
              as an unofficial mascot for the game. Around it, the footage packs
              in supercars and sports coupes, vintage convertibles that nod
              straight back to the original Vice City, full-size SUVs, off-road
              trucks, motorcycles ranging from lean choppers to dirt bikes, and
              boats and airboats suited to Leonida&rsquo;s keys and wetlands.
            </p>
            <p>
              A quick note on accuracy: Rockstar has not published an official
              GTA VI vehicle list, and it has not confirmed the names, brands or
              specifications of individual models. Grand Theft Auto has always
              used its own in-house car brands &mdash; Declasse, Grotti, Vapid,
              Shitzu and the rest &mdash; that echo real-world manufacturers
              without licensing them, and GTA VI will do the same. Where a model
              is only glimpsed and unnamed, we describe it by type rather than
              guess a badge. As Rockstar reveals confirmed vehicles, we&rsquo;ll
              fold the official names and imagery into the categories below.
            </p>
          </div>
        </section>

        <section aria-labelledby="types-heading" className="mt-14">
          <h2 id="types-heading" className="font-display text-3xl">
            The fleet by type
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Every category below is visible in Rockstar&rsquo;s official footage.
            Here&rsquo;s what each class looks like in the world of Leonida.
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
                  <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.08] px-3 py-1 text-xs font-medium text-teal">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
                    Seen in the official trailers
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
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            Everything on this page is drawn from Grand Theft Auto VI&rsquo;s two
            official trailers, published by Rockstar Games. You can watch both in
            full on our{" "}
            <Link href="/trailers" className="font-semibold text-pink hover:underline">
              trailers page
            </Link>
            . We deliberately avoid unconfirmed leaks and fan-made vehicle lists;
            as Rockstar officially names and details individual models, this guide
            will be updated with the confirmed information and imagery.
          </p>
        </section>
      </div>

      <RelatedLinks current="vehicles" className="mx-auto max-w-5xl px-5" />
    </>
  );
}
