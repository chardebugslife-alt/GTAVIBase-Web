import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms governing your use of GTA VI Base — content and intellectual property, accuracy disclaimers, third-party links, advertising and limitation of liability.",
  path: "/terms",
});

const CONTACT_EMAIL = "charuhasen@gmail.com";
const LAST_UPDATED = "July 3, 2026";

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ])}
      />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">Legal</p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">Terms of Use</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            By accessing or using {siteConfig.name} you agree to these terms. If
            you do not agree, please do not use the site.
          </p>
          <p className="mt-3 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="mt-12 space-y-10 leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-2xl text-foreground">
              About this site
            </h2>
            <p className="mt-3">
              {siteConfig.name} is an independent, fan-run information hub about
              Grand Theft Auto VI. It is not affiliated with, endorsed by or
              sponsored by Rockstar Games or Take-Two Interactive.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Intellectual property &amp; trademarks
            </h2>
            <p className="mt-3">
              &ldquo;Grand Theft Auto&rdquo;, &ldquo;GTA&rdquo;, related logos,
              artwork, trailers and characters are the property of Rockstar Games
              and Take-Two Interactive. They are used here for identification,
              commentary and news reporting under fair use; all rights remain
              with their owners. Our original text and layout may not be copied
              or republished in bulk without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Accuracy &amp; no warranty
            </h2>
            <p className="mt-3">
              We work to keep information accurate and up to date, drawing on
              official Rockstar Games sources, but games change and details get
              revised. The site is provided &ldquo;as is&rdquo; without
              warranties of any kind, express or implied, including accuracy,
              completeness or fitness for a particular purpose. Nothing here is
              official confirmation from Rockstar Games.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Third-party links
            </h2>
            <p className="mt-3">
              The site links to third-party websites for sources and further
              reading. We are not responsible for the content, policies or
              practices of those sites, and a link does not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Advertising
            </h2>
            <p className="mt-3">
              This site is supported by advertising, including Google AdSense.
              Ads and their associated cookies are governed by our{" "}
              <Link href="/privacy" className="font-semibold text-pink hover:underline">
                Privacy Policy
              </Link>
              , which also explains the consent choices available to visitors in
              the EEA, the UK and Switzerland.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, {siteConfig.name} and its
              operators are not liable for any loss or damage arising from your
              use of, or reliance on, the site or its content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Changes &amp; contact
            </h2>
            <p className="mt-3">
              We may update these terms from time to time; changes take effect
              when posted here with a revised date. Questions? Email{" "}
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
    </>
  );
}
