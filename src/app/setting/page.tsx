import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import Link from "next/link";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { setting, places, ONLY_IN_LEONIDA_URL } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Map & Setting — Vice City & the State of Leonida",
  description:
    "Where is GTA VI set? A guide to every location Rockstar has toured across Leonida — Vice City, the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga — plus what is known about the size of the map.",
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

        <figure className="relative mt-10 aspect-[16/9] w-full overflow-hidden border border-line bg-black">
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

        <section aria-labelledby="places-heading" className="mt-16">
          <h2 id="places-heading" className="font-display text-3xl">
            Places across Leonida
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Rockstar has toured six destinations across the state so far, each
            with its own economy, its own weather and its own kind of trouble.
            The descriptions below are ours; the photography and the tour itself
            come from Rockstar&rsquo;s{" "}
            <a
              href={ONLY_IN_LEONIDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-pink hover:underline"
            >
              Only in Leonida
            </a>{" "}
            pages.
          </p>

          <nav aria-label="Jump to a place" className="mt-7 flex flex-wrap gap-2">
            {places.map((pl) => (
              <a
                key={pl.slug}
                href={`#${pl.slug}`}
                className="border border-line px-3 py-1.5 text-sm text-secondary transition-colors hover:border-pink hover:text-pink"
              >
                {pl.name}
              </a>
            ))}
          </nav>

          <div className="mt-12 space-y-16">
            {places.map((pl) => (
              <article
                key={pl.slug}
                id={pl.slug}
                aria-labelledby={`${pl.slug}-heading`}
                className="scroll-mt-24"
              >
                <figure className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-black">
                  <Image
                    src={pl.image}
                    alt={pl.imageAlt}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-muted">
                    &copy; Rockstar Games
                  </figcaption>
                </figure>

                <h3 id={`${pl.slug}-heading`} className="mt-6 font-display text-3xl">
                  {pl.name}
                </h3>
                <p className="serif mt-3 text-xl leading-[1.5] text-secondary">
                  {pl.tagline}
                </p>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
                  {pl.body}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {pl.gallery.map((g) => (
                    <div
                      key={g.src}
                      className="relative aspect-[4/3] overflow-hidden border border-line bg-black"
                    >
                      <Image
                        src={g.src}
                        alt={g.alt}
                        fill
                        sizes="(max-width: 896px) 33vw, 290px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted">
            All location art &copy; Rockstar Games, shown here for reference.
            Rockstar has confirmed these six destinations; the full map of
            Leonida is expected closer to launch.
          </p>
        </section>
      </article>
      <RelatedLinks current="setting" />
    </>
  );
}
