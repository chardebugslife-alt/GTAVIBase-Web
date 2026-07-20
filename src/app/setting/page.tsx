import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import Link from "next/link";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { setting } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Map & Setting — Vice City & Leonida",
  description:
    "Where is GTA VI set? Explore Vice City and the fictional state of Leonida, Rockstar's modern reimagining of Florida — the largest open world in the series so far.",
  path: "/setting",
});

export default function SettingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Map & Setting", path: "/setting" },
        ])}
      />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            Map &amp; <span className="gradient-text">Setting</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {setting.intro}
          </p>
        </header>

        <figure className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src={setting.image}
            alt={setting.imageAlt}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-muted">
            {setting.imageCredit}
          </figcaption>
        </figure>
        <p className="mt-3 text-sm text-muted">
          Rockstar has not released a full world map yet — this is an official
          look at Vice City. The complete map of Leonida is expected closer to
          launch.
        </p>

        <section aria-labelledby="state-heading" className="mt-12">
          <h2 id="state-heading" className="font-display text-3xl">
            The state of {setting.state}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Leonida is Rockstar&rsquo;s fictional version of Florida, with{" "}
            {setting.city} as its centerpiece. From neon beachfronts to humid
            wetlands, the state is built to be explored by land, air and water.
          </p>
        </section>

        <section aria-labelledby="vicecity-heading" className="mt-12 max-w-3xl">
          <h2 id="vicecity-heading" className="font-display text-3xl">
            Vice City returns — this time in the present day
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              For long-time fans, the single most exciting word in the GTA VI
              reveal was &ldquo;Vice City.&rdquo; The neon-soaked, Miami-inspired
              city first appeared as the whole map of 2002&rsquo;s Grand Theft
              Auto: Vice City, a love letter to 1980s excess that remains one of
              the most beloved settings the series has ever built. Its return has
              been rumoured for the better part of two decades, and GTA VI finally
              makes it official.
            </p>
            <p>
              The crucial difference this time is the era. Where the original was
              a period piece drenched in 1980s synth-pop and pastel suits, GTA VI
              drops Vice City into the present day. That shift changes everything
              about the city&rsquo;s texture: smartphones, social media,
              livestreams and modern surveillance are woven into the world the
              trailers show, setting up the kind of contemporary satire the series
              is known for. It is the same city&rsquo;s DNA — the beaches, the Art
              Deco, the glamour and the grime — updated for the world of today.
            </p>
          </div>
        </section>

        <section aria-labelledby="modern-heading" className="mt-12 max-w-3xl">
          <h2 id="modern-heading" className="font-display text-3xl">
            A whole state, not just a city
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              GTA VI&rsquo;s biggest structural leap is that Vice City is no
              longer the entire map — it is the anchor of a much larger fictional
              state called Leonida, Rockstar&rsquo;s stand-in for modern Florida.
              That framing gives the studio room for enormous variety in a single
              contiguous world: a dense coastal metropolis, a chain of sun-bleached
              keys, Everglades-style wetlands thick with airboats and wildlife,
              and industrial towns and rural backroads stretching inland.
            </p>
            <p>
              This is a deliberate echo of Grand Theft Auto V, which paired the
              city of Los Santos with the countryside, desert and mountains of
              Blaine County. Leonida looks set to push that contrast further, with
              ecosystems — swamp, beach, city, farmland — that feel genuinely
              distinct from one another. The result, on the evidence of the
              trailers, is a world designed to be crossed by land, air and water,
              each region with its own look, mood and rhythm.
            </p>
          </div>
        </section>

        <section aria-labelledby="mapsize-heading" className="mt-12 max-w-3xl">
          <h2 id="mapsize-heading" className="font-display text-3xl">
            How big is the map?
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              It is the question every fan asks first, and the honest answer is
              that Rockstar has not said. The studio has not published a full
              world map or a square-mileage figure, and the sweeping numbers you
              may have seen — most commonly &ldquo;about 2.5 times the size of GTA
              V&rdquo; — come from dedicated fan mapping projects reconstructing
              Leonida from trailer footage, not from Rockstar itself.
            </p>
            <p>
              It is also worth remembering that raw size is the least interesting
              measure of a Grand Theft Auto world. Rockstar has historically cared
              far more about density — how much there is to see and do per square
              mile — than about a big headline number. We break down the fan
              estimates, and why they should be taken with a pinch of salt, in our{" "}
              <Link
                href="/community/how-big-is-the-map"
                className="font-semibold text-pink hover:underline"
              >
                community guide to the GTA VI map size
              </Link>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="regions-heading" className="mt-12">
          <h2 id="regions-heading" className="font-display text-3xl">
            Key regions
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {setting.regions.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-display text-xl text-foreground">
                  {r.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.blurb}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Rockstar has confirmed several locations across Leonida through its
            trailers; the full map will be revealed closer to launch.
          </p>
        </section>
      </article>
      <RelatedLinks current="setting" />
    </>
  );
}
