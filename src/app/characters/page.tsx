import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { characters } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Characters — Lucia & Jason",
  description:
    "Meet the GTA VI characters: Lucia Caminos, the first female protagonist in a mainline Grand Theft Auto, and Jason Duval. Learn their backstories and roles in Vice City.",
  path: "/characters",
});

export default function CharactersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Characters", path: "/characters" },
        ])}
      />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">Characters</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Grand Theft Auto VI is the first game in the series with two playable
            protagonists. Their intertwined, Bonnie-and-Clyde story anchors the
            game in Vice City and the wider state of Leonida.
          </p>
        </header>

        <div className="mt-12 space-y-10">
          {characters.map((c) => (
            <section
              key={c.slug}
              id={c.slug}
              aria-labelledby={`${c.slug}-heading`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <figure className="relative aspect-[16/9] w-full bg-black">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-muted">
                  {c.imageCredit}
                </figcaption>
              </figure>
              <div className="p-7">
              <p className="text-xs uppercase tracking-wider text-teal">
                {c.role}
              </p>
              <h2
                id={`${c.slug}-heading`}
                className="mt-1 font-display text-3xl sm:text-4xl"
              >
                {c.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {c.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {c.details.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                    {d}
                  </li>
                ))}
              </ul>
              </div>
            </section>
          ))}
        </div>
      </article>
      <RelatedLinks current="characters" />
    </>
  );
}
