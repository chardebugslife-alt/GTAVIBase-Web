import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About GTA VI Base — Who We Are & How We Source",
  description:
    "GTA VI Base is an independent, fan-run information hub for Grand Theft Auto VI. Learn who runs the site, what we cover and how we source and verify every fact.",
  path: "/about",
});

const CONTACT_EMAIL = "charuhasen@gmail.com";

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

          <section>
            <h2 className="font-display text-2xl text-foreground">
              How we source &amp; verify
            </h2>
            <p className="mt-3">
              Our core game information comes from official Rockstar Games
              sources — trailers, newswire posts and store listings — and we show
              credits for the material we reference. When we cover reporting or
              speculation, we cite it and keep it clearly separated from
              confirmed fact, so you always know what is official and what is
              not.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Confirmed facts are drawn from Rockstar's own channels.",
                "News stories link to their original, verifiable sources.",
                "Community and fan content is labelled unofficial and kept apart from official information.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                  {item}
                </li>
              ))}
            </ul>
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
