import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig, editorial } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About GTA VI Base — Who We Are & How We Source",
  description:
    "GTA VI Base is an independent, fan-run information hub for Grand Theft Auto VI. Learn who writes the site, what we cover and the editorial standards we follow to verify every fact.",
  path: "/about",
});

const CONTACT_EMAIL = "hello@gtavibase.com";

const SHELL = "mx-auto max-w-[1120px] px-5 sm:px-7";
const MEASURE = "mx-auto max-w-[680px]";

/** Section heading in the concept's article scale. */
const H2 = "text-[28px] font-semibold leading-[1.2] tracking-[-0.03em]";
const PROSE = "serif text-xl leading-[1.7] text-body";
const INLINE_LINK = "text-accent-deep underline underline-offset-4";

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <div className={SHELL}>
        <article className={`${MEASURE} pt-16 sm:pt-21`}>
          <header>
            <p className="eyebrow text-muted">About the site</p>
            <h1 className="mt-6 text-[clamp(38px,5vw,58px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              About GTA VI Base
            </h1>
            <p className="serif mt-6.5 text-[21px] leading-[1.62] text-secondary">
              {siteConfig.name}{" "}
              is an independent, fan-run information hub for
              Grand Theft Auto VI — a clean, fast place to find the confirmed
              facts about Rockstar Games&rsquo; next game without wading through
              noise.
            </p>
          </header>

          <section aria-labelledby="who-writes">
            <h2 id="who-writes" className={`${H2} mt-14`}>
              Who writes GTA VI Base
            </h2>
            <p className={`${PROSE} mt-5`}>{editorial.bio}</p>
            <p className={`${PROSE} mt-6.5`}>
              Between us we have played every mainline Grand Theft Auto game
              since the series went 3D, and we started this site to give fellow
              players one reliable, clutter-free place to follow the road to GTA
              VI. Every article you read here is written by a person, checked
              against a primary source, and dated so you can see when we last
              touched it.
            </p>
          </section>

          <section aria-labelledby="what-we-cover">
            <h2 id="what-we-cover" className={`${H2} mt-14`}>
              What we cover
            </h2>
            <p className={`${PROSE} mt-5`}>
              The release date and countdown, the protagonists Lucia and Jason,
              the map and setting of Leonida and Vice City, every official
              trailer, editions and pricing, and a constantly updated FAQ. A
              separate, clearly labelled community section collects fan theories
              and discussion.
            </p>
          </section>

          <section aria-labelledby="standards" className="rule-top mt-16">
            <h2 id="standards" className="eyebrow">
              Our editorial standards
            </h2>
            <p className="serif mt-4.5 text-lg leading-[1.65] text-tertiary">
              Four rules hold every page. They are why you can trust a fact you
              read here without double-checking it — though we link the source so
              you always can.
            </p>
            <dl>
              {editorial.standards.map((s, i) => (
                <div
                  key={s.title}
                  className="grid grid-cols-[32px_minmax(0,1fr)] gap-5 border-b border-line py-6.5 sm:grid-cols-[44px_minmax(0,1fr)]"
                >
                  <dt className="text-[13px] leading-[1.6] tracking-[0.08em] text-faint">
                    <span className="sr-only">{s.title}</span>
                    <span aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  </dt>
                  <dd className="grid gap-2.5">
                    <span className="text-[21px] font-semibold leading-[1.3] tracking-[-0.02em]">
                      {s.title}
                    </span>
                    <span className="serif text-lg leading-[1.62] text-secondary">
                      {s.text}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="independence">
            <h2 id="independence" className={`${H2} mt-14`}>
              Independence &amp; affiliation
            </h2>
            <p className={`${PROSE} mt-5`}>
              {siteConfig.name}{" "}
              is not affiliated with, endorsed by or sponsored
              by Rockstar Games or Take-Two Interactive. &ldquo;Grand Theft
              Auto&rdquo; and all related marks are trademarks of their
              respective owners. The site is supported by advertising, which
              keeps it free to read. See our{" "}
              <Link href="/privacy" className={INLINE_LINK}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className={INLINE_LINK}>
                Terms of Use
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="contact" className="rule-top mt-14 pb-2">
            <h2 id="contact" className={H2}>
              Get in touch
            </h2>
            <p className={`${PROSE} mt-4.5`}>
              Spotted an error or have a suggestion? We welcome corrections — or
              visit our{" "}
              <Link href="/contact" className={INLINE_LINK}>
                contact page
              </Link>
              .
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-accent mt-6">
              {CONTACT_EMAIL}
            </a>
          </section>
        </article>
      </div>
      <RelatedLinks current="faq" className={SHELL} />
    </>
  );
}
