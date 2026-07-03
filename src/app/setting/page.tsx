import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
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
