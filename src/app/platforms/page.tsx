import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { absoluteUrl, editorial } from "@/lib/site";
import { platformFaqs } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA 6 Platforms: PS5, Xbox, PC & PS4 Explained",
  description:
    "Which platforms is GTA 6 on? PS5 and Xbox Series X|S are confirmed for November 19, 2026. PC, PS4, Xbox One and Switch 2 are not announced. Requirements, file size and 60fps answered.",
  path: "/platforms",
});

/** Bump when the platform picture changes or the page is re-checked. */
const lastVerified = "November 7, 2026";
const lastVerifiedIso = "2026-11-07";

const platforms = [
  {
    name: "PlayStation 5",
    status: "Confirmed",
    note: "Launches November 19, 2026. All official footage was captured on PS5.",
  },
  {
    name: "Xbox Series X|S",
    status: "Confirmed",
    note: "Launches November 19, 2026. Rockstar has not published differences between Series X and Series S.",
  },
  {
    name: "PS5 Pro",
    status: "No Pro features announced",
    note: "Rockstar has announced no PS5 Pro-specific modes.",
  },
  {
    name: "PC",
    status: "Not announced",
    note: "No version, date or system requirements. Reports of a PC release soon after launch are unconfirmed.",
  },
  {
    name: "PS4 and Xbox One",
    status: "Not supported",
    note: "GTA 6 is a current-generation game; Rockstar has never named last-generation consoles.",
  },
  {
    name: "Switch 2, Steam Deck, mobile",
    status: "Not announced",
    note: "Rockstar has announced nothing for these platforms.",
  },
];

const sources = [
  {
    title: "Grand Theft Auto VI — Official Site",
    publisher: "Rockstar Games",
    url: "https://www.rockstargames.com/VI",
  },
  {
    title: "Grand Theft Auto VI — Rockstar Store",
    publisher: "Rockstar Store",
    url: "https://store.rockstargames.com/game/buy-gta-vi",
  },
  {
    title: "GTA 6 Will Not Stream To PC Through Xbox, Despite Earlier Report",
    publisher: "GameSpot",
    url: "https://www.gamespot.com/articles/gta-6-will-not-stream-to-pc-through-xbox-despite-earlier-report/",
  },
  {
    title: "Rockstar confirms there will be no disc version of GTA 6 at launch",
    publisher: "VGC",
    url: "https://www.videogameschronicle.com/news/rockstar-confirms-there-will-be-no-disc-version-of-gta6-at-launch/",
  },
  {
    title:
      "GTA 6 at 60fps is \"unlikely\" on console and will be \"genuinely challenging\" on PC, tech analysts say",
    publisher: "GamesRadar+",
    url: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-at-60fps-is-unlikely-on-console-and-will-be-genuinely-challenging-on-pc-tech-analysts-say/",
  },
];

function platformsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GTA 6 Platforms",
    url: absoluteUrl("/platforms"),
    dateModified: lastVerifiedIso,
    isPartOf: { "@type": "WebSite", name: "GTA VI Base", url: absoluteUrl("/") },
    author: { "@type": "Organization", name: editorial.author },
  };
}

const link = "font-semibold text-pink hover:underline";

export default function PlatformsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platforms", path: "/platforms" },
        ])}
      />
      <JsonLd data={platformsJsonLd()} />
      <JsonLd data={faqPageJsonLd(platformFaqs)} />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">GTA 6 Platforms</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Grand Theft Auto VI is confirmed for{" "}
            <strong className="text-foreground">
              PlayStation 5 and Xbox Series X|S
            </strong>{" "}
            on November 19, 2026. It is not coming to PS4 or Xbox One, and
            Rockstar has not announced a PC version. Here is the status of every
            platform people ask about, plus requirements, file size and frame
            rate, last checked {lastVerified}.
          </p>
        </header>

        <section aria-labelledby="table-heading" className="mt-10">
          <h2 id="table-heading" className="font-display text-3xl">
            GTA 6 platforms at a glance
          </h2>
          <table className="mt-5 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wider text-teal">
                <th scope="col" className="py-2 pr-4 font-normal">Platform</th>
                <th scope="col" className="py-2 pr-4 font-normal">Status</th>
                <th scope="col" className="py-2 font-normal">Notes</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p) => (
                <tr key={p.name} className="border-b border-line/50 align-top">
                  <th scope="row" className="py-3 pr-4 font-semibold">
                    {p.name}
                  </th>
                  <td className="py-3 pr-4 text-secondary">{p.status}</td>
                  <td className="py-3 text-muted">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section aria-labelledby="console-heading" className="mt-14 max-w-3xl">
          <h2 id="console-heading" className="font-display text-3xl">
            Why GTA 6 is PS5 and Xbox Series X|S only
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rockstar named PS5 and Xbox Series X|S at the December 2023 reveal
              and has repeated only those two since. Just as important is what is
              missing: the PlayStation 4 and Xbox One. Grand Theft Auto V launched on
              the hardware of its day and was ported forward later, but GTA VI is a
              current-generation title from the start.
            </p>
            <p>
              That matters because a game built around one generation can push
              harder on storage, memory and CPU than one that must also run on
              machines from 2013. Rockstar has not said this is the reason, but it
              fits the crowd density, draw distance and weather in the{" "}
              <Link href="/trailers" className={link}>
                official trailers
              </Link>
              , which Rockstar says were captured in-game on PlayStation 5.
            </p>
          </div>
        </section>

        <section aria-labelledby="pc-heading" className="mt-12 max-w-3xl">
          <h2 id="pc-heading" className="font-display text-3xl">
            Is GTA 6 coming to PC?
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Not officially. Rockstar has not announced a PC version, a date or
              system requirements. History points to a gap rather than a day-one
              release: Grand Theft Auto V reached consoles in September 2013 and PC
              in April 2015, and Red Dead Redemption 2 reached PC about a year
              after its console launch. A PC edition is widely expected eventually,
              but eventually is not a date.
            </p>
            <p>
              In early October, a report that Xbox held exclusive cloud-streaming
              rights briefly raised hopes of a PC route. Xbox chief strategy
              officer Matthew Ball responded that GTA VI will not be streaming on PC
              at launch and called the report misreporting. Separate press reports
              of a PC release within roughly three months of launch trace to
              anonymous sources, and Rockstar has not commented, so we list them as
              rumour. The full account is in our{" "}
              <Link href="/community/gta-6-pc-and-xbox-cloud-streaming" className={link}>
                PC and cloud streaming explainer
              </Link>
              .
            </p>
            <p>
              Because no PC version exists, there are no GTA 6 system requirements
              to publish. Any requirements list, PC download, Steam page or
              &ldquo;emulator&rdquo; you find is not from Rockstar, and files
              claiming to be GTA VI builds are a common route for malware.
            </p>
          </div>
        </section>

        <section aria-labelledby="perf-heading" className="mt-12 max-w-3xl">
          <h2 id="perf-heading" className="font-display text-3xl">
            GTA 6 performance: resolution, 60fps and PS5 Pro
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rockstar has published no resolution or frame-rate targets. The
              figures people quote come from analysts reading Rockstar&rsquo;s own
              footage. According to coverage of Digital Foundry&rsquo;s work, the
              Extended Look footage appears to run at roughly native 1440p on a base
              PS5, upscaled to 4K, at a mostly steady 30fps.
            </p>
            <p>
              The analysts attribute the 30fps to CPU load from open-world
              simulation, and note that the PS5 Pro&rsquo;s processor is only around
              7% faster than the base console, so a bigger GPU cannot simply double
              the frame rate. These are inferences from marketing footage, not
              specifications, and because the footage was captured on PS5 there is no
              public evidence of how the Series X and Series S versions run. Our{" "}
              <Link href="/community/gta-6-30fps-and-ps5-pro" className={link}>
                30fps and PS5 Pro analysis
              </Link>{" "}
              goes through it.
            </p>
          </div>
        </section>

        <section aria-labelledby="storage-heading" className="mt-12 max-w-3xl">
          <h2 id="storage-heading" className="font-display text-3xl">
            GTA 6 file size, preload and physical copies
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rockstar&rsquo;s November 3 Newswire post says the pre-load file
              requires up to 212 GB depending on your device. Digital pre-loading
              opens on Tuesday, November 10, at midnight local time on PS5 and
              at 12 a.m. GMT on Xbox Series X|S; code-in-box copies should reach
              retailers from November 12.
            </p>
            <p>
              Boxed copies are not discs. Rockstar&rsquo;s pre-order notes say they
              contain a code for the digital download, and the Ultimate Edition is
              digital only. Either way you need a stable connection and enough free
              space. The dates and editions are in our{" "}
              <Link href="/release-date" className={link}>
                release date guide
              </Link>{" "}
              and{" "}
              <Link href="/editions" className={link}>
                editions and price guide
              </Link>
              ; the details are in our{" "}
              <Link href="/community/gta-6-preload-and-physical-copies" className={link}>
                preload guide
              </Link>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="choose-heading" className="mt-12 max-w-3xl">
          <h2 id="choose-heading" className="font-display text-3xl">
            Which platform should you play GTA 6 on?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            If you want to play on November 19, the answer is whichever of the two
            consoles you already own, because nothing Rockstar has published
            separates them. Do not buy a PS5 Pro or a new Xbox for GTA VI on the
            strength of any performance claim above, and do not wait for a PC
            version unless you are happy to wait for an announcement that has not
            happened.
          </p>
        </section>

        <section aria-labelledby="faq-heading" className="mt-12 max-w-3xl">
          <h2 id="faq-heading" className="font-display text-3xl">
            GTA 6 platforms FAQ
          </h2>
          <div className="mt-6 space-y-3">
            {platformFaqs.map((f) => (
              <div key={f.question} className="border border-line bg-surface p-6">
                <h3 className="font-semibold text-foreground">{f.question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="sources-heading" className="mt-12 border-t border-line pt-6">
          <h2 id="sources-heading" className="text-xs uppercase tracking-wider text-teal">
            Sources
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {sources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink hover:underline"
                >
                  {src.title}
                </a>{" "}
                &mdash; {src.publisher}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">
            Written by {editorial.author}. Platform status comes from Rockstar
            Games; press reporting and analyst readings are labelled as such and
            are not Rockstar statements.
          </p>
        </section>
      </article>
      <RelatedLinks current="platforms" />
    </>
  );
}
