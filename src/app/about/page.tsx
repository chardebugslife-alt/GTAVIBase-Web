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

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            About the site
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            About <span className="gradient-text">GTA VI Base</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {siteConfig.name} is an independent, fan-run information hub for
            Grand Theft Auto VI — a clean, fast place to find the confirmed facts
            about Rockstar Games&rsquo; next game without wading through noise.
          </p>
        </header>

        <div className="mt-12 space-y-10 leading-relaxed text-muted">
          <section aria-labelledby="who-writes">
            <h2
              id="who-writes"
              className="font-display text-2xl text-foreground"
            >
              Who writes GTA VI Base
            </h2>
            <p className="mt-3">
              GTA VI Base is written and edited by{" "}
              <span className="font-semibold text-foreground">
                {editorial.author}
              </span>{" "}
              — {editorial.role.toLowerCase()}. {editorial.bio} Between us we
              have played every mainline Grand Theft Auto game since the series
              went 3D, and we started this site to give fellow players one
              reliable, clutter-free place to follow the road to GTA VI. Every
              article you read here is written by a person, checked against a
              primary source, and dated so you can see when we last touched it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              What we cover
            </h2>
            <p className="mt-3">
              We track everything worth knowing about GTA VI: the release date
              and countdown, the protagonists Lucia and Jason, the map and
              setting of Leonida and Vice City, every official trailer, editions
              and pricing, and a constantly updated FAQ. A separate, clearly
              labelled community section collects fan theories and discussion.
            </p>
          </section>

          <section aria-labelledby="standards">
            <h2
              id="standards"
              className="font-display text-2xl text-foreground"
            >
              Our editorial standards
            </h2>
            <p className="mt-3">
              We hold every page to the same four rules. They are why you can
              trust a fact you read here without having to double-check it
              yourself — though we link the source so you always can.
            </p>
            <dl className="mt-5 space-y-5">
              {editorial.standards.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <dt className="font-display text-lg text-foreground">
                    {s.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed">{s.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Independence &amp; affiliation
            </h2>
            <p className="mt-3">
              {siteConfig.name} is not affiliated with, endorsed by or sponsored
              by Rockstar Games or Take-Two Interactive. &ldquo;Grand Theft
              Auto&rdquo; and all related marks are trademarks of their
              respective owners. The site is supported by advertising, which
              keeps it free to read. See our{" "}
              <Link href="/privacy" className="font-semibold text-pink hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="font-semibold text-pink hover:underline">
                Terms of Use
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Get in touch
            </h2>
            <p className="mt-3">
              Spotted an error or have a suggestion? We welcome corrections —
              email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-pink hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="font-semibold text-pink hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
      <RelatedLinks current="faq" className="mx-auto max-w-3xl px-5" />
    </>
  );
}
