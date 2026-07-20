import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

        <section aria-labelledby="duo-heading" className="mt-16 max-w-3xl">
          <h2 id="duo-heading" className="font-display text-3xl">
            Two protagonists — a series first
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Grand Theft Auto V let players switch between three leads, but GTA
              VI is the first mainline entry built around a two-hander — a
              criminal couple whose relationship is the spine of the whole game.
              That is a meaningful design change. Where GTA V&rsquo;s Michael,
              Franklin and Trevor lived largely separate lives you dipped between,
              Lucia and Jason are written as a pair, and the story Rockstar
              describes is as much about their bond as about the scores they pull.
            </p>
            <p>
              Rockstar frames the two as a modern outlaw couple — a Bonnie-and-Clyde
              dynamic transplanted into a contemporary, social-media-soaked
              Leonida. Two people the world has counted out, drawn together and
              then pulled into a criminal conspiracy that stretches across the
              state. It reframes the classic Grand Theft Auto rags-to-riches climb
              around a question the series has never really centred before: not
              just &ldquo;can they get rich,&rdquo; but &ldquo;can they hold on to
              each other while they try.&rdquo;
            </p>
          </div>
        </section>

        <section aria-labelledby="lucia-heading" className="mt-12 max-w-3xl">
          <h2 id="lucia-heading" className="font-display text-3xl">
            Why Lucia matters
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Lucia Caminos is the first female protagonist in a mainline Grand
              Theft Auto, and the significance is hard to overstate for a series
              this size. Every previous mainline lead — from Tommy Vercetti and CJ
              to Niko Bellic and the GTA V trio — has been a man. Putting Lucia at
              the front as a fully co-equal lead, rather than a supporting figure,
              is the most consequential change to the series&rsquo; point of view
              in its history, and it reshapes the kind of story Rockstar can tell.
            </p>
            <p>
              The reveal introduces her pointedly, following her out of a Leonida
              correctional facility and into a world that has never given her an
              easy option. Rockstar paints her as sharp, pragmatic and done
              accepting the odds — the hunger that drives the partnership. Jason,
              by contrast, is the wearier operator: settled in the Leonida Keys
              when we meet him, a man who grew up among grifters and keeps getting
              pulled back into a life he wants out of. The contrast between her
              drive and his fatigue is what gives the duo its friction.
            </p>
          </div>
        </section>

        <section aria-labelledby="unknown-heading" className="mt-12 max-w-3xl">
          <h2 id="unknown-heading" className="font-display text-3xl">
            What&rsquo;s confirmed, and what isn&rsquo;t
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rockstar has established who Lucia and Jason are, where they start
              and the shape of their bond. It has not published full biographies,
              confirmed a voice cast, or detailed how the character-switching
              system, missions or endings work. A great deal of confident
              &ldquo;detail&rdquo; circulating online — specific backstories,
              chapter counts, who betrays whom — traces back to leaks and insider
              posts, not to Rockstar.
            </p>
            <p>
              Everything on this page is drawn from Rockstar&rsquo;s official
              trailers and reveals. If you want to follow where the fandom thinks
              the story is heading — the ending theories, the leaked runtime and
              the debates — we track all of that, clearly labelled as speculation,
              in our{" "}
              <Link
                href="/community/lucia-and-jason-ending-theories"
                className="font-semibold text-pink hover:underline"
              >
                community story-theories roundup
              </Link>
              , and stick to the confirmed facts in our{" "}
              <Link
                href="/news/protagonists-lucia-and-jason"
                className="font-semibold text-pink hover:underline"
              >
                protagonists news explainer
              </Link>
              .
            </p>
          </div>
        </section>
      </article>
      <RelatedLinks current="characters" />
    </>
  );
}
