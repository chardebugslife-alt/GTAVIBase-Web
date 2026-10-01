import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { vehicleRoundup, vehicleRoundupSource } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Vehicles — Every Car, Bike, Boat and Plane Spotted",
  description:
    "A guide to the vehicles of Grand Theft Auto VI — the cars, superbikes, helicopters, planes, boats and police vehicles named so far, including the models new to the series, with what Rockstar has actually shown of each.",
  path: "/vehicles",
});

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
            Grand Theft Auto VI&rsquo;s official trailers and its 27-minute Extended Look are packed with the
            cars, motorcycles and boats you&rsquo;ll be driving, riding and
            piloting across Vice City and the state beyond. This guide breaks the
            fleet, from Vice City supercars to the boats and airboats of the
            Leonida wetlands.
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
              is only glimpsed and unnamed, we leave it that way rather than guess
              a badge. As Rockstar reveals confirmed vehicles, we&rsquo;ll fold the
              official names and imagery in here.
            </p>
          </div>
        </section>


        <section aria-labelledby="roundup-heading" className="mt-16">
          <h2 id="roundup-heading" className="font-display text-3xl">
            Named models spotted so far
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Rockstar has never published a vehicle list, but the press has been
              reading the footage frame by frame. The fullest catalogue so far is{" "}
              <a
                href={vehicleRoundupSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink hover:underline"
              >
                {vehicleRoundupSource.publisher}&rsquo;s roundup
              </a>{" "}
              by {vehicleRoundupSource.author} ({vehicleRoundupSource.publishedLabel}),
              which names the models it recognises from the trailers and released
              stills. We have grouped them below.
            </p>
            <p>
              Treat these as identifications rather than confirmations. They are one
              publication&rsquo;s reading of footage Rockstar has shown, and most are
              recognised because the badge already exists elsewhere in the series.
              Rockstar has confirmed none of them, and the lineup can change before
              launch.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {vehicleRoundup.map((g) => (
              <article key={g.slug} id={g.slug}>
                <figure className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-black">
                  <Image
                    src={g.image}
                    alt={g.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-muted">
                    &copy; Rockstar Games
                  </figcaption>
                </figure>
                <h3 className="mt-5 font-display text-2xl">{g.label}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">
                  {g.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.models.map((m) => (
                    <li
                      key={m}
                      className="border border-line bg-surface px-3 py-1.5 text-sm text-secondary"
                    >
                      {m}
                    </li>
                  ))}
                  {g.debuts?.map((d) => (
                    <li
                      key={d}
                      className="border border-accent bg-accent-wash px-3 py-1.5 text-sm font-medium text-teal"
                    >
                      {d} &middot; new
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-muted">
            Names in the accent colour are the ones the roundup calls new to the
            series; the rest it reports as returning from earlier Grand Theft Auto
            games.
          </p>
        </section>
        {/* Sources */}
        <section className="mt-16 border-t border-line pt-8">
          <h2 className="font-display text-xl text-foreground">
            Sources &amp; credits
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            What the footage shows is drawn from Grand Theft Auto VI&rsquo;s
            official videos, published by Rockstar Games — you can watch them in
            full on our{" "}
            <Link href="/trailers" className="font-semibold text-pink hover:underline">
              trailers page
            </Link>
            . The named models are compiled from{" "}
            <a
              href={vehicleRoundupSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-pink hover:underline"
            >
              {vehicleRoundupSource.publisher}&rsquo;s vehicle roundup
            </a>{" "}
            and attributed as that publication&rsquo;s identifications, not as
            Rockstar confirmations. Several stills on this page come from the same
            article; the game imagery throughout is &copy; Rockstar Games. We still
            avoid unconfirmed leaks, and as Rockstar names individual models
            officially we will fold the confirmed detail in here.
          </p>
        </section>
      </div>

      <RelatedLinks current="vehicles" className="mx-auto max-w-5xl px-5" />
    </>
  );
}
