import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  characters,
  supportingCast,
  characterFaqs,
  ONLY_IN_LEONIDA_URL,
} from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA 6 Characters: Lucia, Jason & Full Cast",
  description:
    "Who are the GTA 6 main characters? Lucia Caminos and Jason Duval, both playable. Every character Rockstar has named — Cal Hampton, Boobie Ike, Dre’Quan Priest, Real Dimez, Raul Bautista and Brian Heder — with roles, backstories and trailer appearances.",
  path: "/characters",
});

/** Bump when the cast changes or the page is re-checked against Rockstar's site. */
const lastVerified = "October 26, 2026";

export default function CharactersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Characters", path: "/characters" },
        ])}
      />
      <JsonLd data={faqPageJsonLd(characterFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Every confirmed GTA 6 character",
          itemListElement: [...characters, ...supportingCast].map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            url: absoluteUrl(`/characters#${c.slug}`),
          })),
        }}
      />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">GTA 6 Characters</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            The main characters in GTA 6 are Lucia Caminos and Jason Duval, and
            you play as both. Grand Theft Auto VI is the first game in the series
            with two playable protagonists, and their intertwined,
            Bonnie-and-Clyde story anchors the game in Vice City and the wider
            state of Leonida. Rockstar has since named six more of the people
            around them, and they are all below.
          </p>
        </header>

        <section aria-labelledby="names-heading" className="mt-10 border border-line p-6">
          <h2 id="names-heading" className="font-display text-2xl">
            GTA 6 characters list: every confirmed name
          </h2>
          <p className="mt-2 text-sm text-muted">
            Eight characters named by Rockstar Games, last checked{" "}
            {lastVerified}. Select a name to jump to their profile.
          </p>
          <table className="mt-4 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wider text-teal">
                <th scope="col" className="py-2 pr-4 font-normal">Character</th>
                <th scope="col" className="py-2 font-normal">Role</th>
              </tr>
            </thead>
            <tbody>
              {[...characters, ...supportingCast].map((c) => (
                <tr key={c.slug} className="border-b border-line/50">
                  <th scope="row" className="py-2 pr-4 font-semibold">
                    <a href={`#${c.slug}`} className="text-pink hover:underline">
                      {c.name}
                    </a>
                  </th>
                  <td className="py-2 text-muted">{c.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="mt-12 space-y-10">
          {characters.map((c) => (
            <section
              key={c.slug}
              id={c.slug}
              aria-labelledby={`${c.slug}-heading`}
              className="overflow-hidden border border-line bg-surface"
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
                    className="flex gap-3 text-sm leading-relaxed text-secondary"
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

        <section aria-labelledby="cast-heading" className="mt-16">
          <h2 id="cast-heading" className="font-display text-3xl">
            The rest of the cast
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Rockstar has put names, faces and short official bios to six more
            people around the pair, and between them they map the two halves of
            Lucia and Jason&rsquo;s Leonida: the smugglers and drifters of the
            Keys at one end, the music money of Vice City at the other. The
            write-ups below are ours; the source is Rockstar&rsquo;s own{" "}
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

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {supportingCast.map((c) => (
              <article key={c.slug} id={c.slug}>
                <figure className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-muted">
                    &copy; Rockstar Games
                  </figcaption>
                </figure>
                <p className="mt-4 text-xs uppercase tracking-wider text-teal">
                  {c.role}
                </p>
                <h3 className="mt-1 font-display text-2xl">{c.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{c.blurb}</p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {c.connection}
                </p>
              </article>
            ))}
          </div>
        </section>

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
              Rockstar has established who its cast are, where they start and how
              they connect. What the official bios stop short of is everything
              that happens next: it has not confirmed a voice cast, or detailed
              how the character-switching system, missions or endings work, and
              the supporting players arrive with roles rather than arcs. A great
              deal of confident &ldquo;detail&rdquo; circulating online — specific
              backstories, chapter counts, who betrays whom — traces back to rumours
              and insider posts, not to Rockstar.
            </p>
            <p>
              That includes the stat-sheet details people search for most. Rockstar
              has never published ages or heights for Lucia or Jason. Figures like
              5&prime;3&Prime; for Lucia and 6&prime;1&Prime; for Jason are quoted
              confidently across the web, but they originate from fan wikis rather
              than any Rockstar source, and the ages attached to the pair are
              usually extrapolated from the real Bonnie-and-Clyde timeline. Both
              read as adults in their twenties or thirties on screen. Beyond that,
              the honest answer is that we do not know — and neither does anyone
              quoting a precise number.
            </p>
            <p>
              Everything on this page is drawn from Rockstar&rsquo;s official
              trailers and reveals. If you want to follow where the fandom thinks
              the story is heading — the ending theories and the
              debates — we track all of that, clearly labelled as speculation,
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

        <section aria-labelledby="character-faq-heading" className="mt-12 max-w-3xl">
          <h2 id="character-faq-heading" className="font-display text-3xl">
            GTA 6 characters FAQ
          </h2>
          <div className="mt-6 space-y-3">
            {characterFaqs.map((f) => (
              <div key={f.question} className="border border-line bg-surface p-6">
                <h3 className="font-semibold text-foreground">{f.question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted">
            Want to see them in motion? Every character above appears in the
            official footage on our{" "}
            <Link href="/trailers" className="font-semibold text-pink hover:underline">
              GTA 6 trailers
            </Link>{" "}
            page.
          </p>
        </section>
      </article>
      <RelatedLinks current="characters" />
    </>
  );
}
