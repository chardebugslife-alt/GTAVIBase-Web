import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — Cookies, Ads & Consent",
  description:
    "How GTA VI Base uses cookies and analytics, how Google and its partners use data to serve ads, and how visitors in the EEA, UK and Switzerland can give, manage or withdraw consent.",
  path: "/privacy",
});

const CONTACT_EMAIL = "charuhasen@gmail.com";
const LAST_UPDATED = "July 3, 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">Legal</p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            This policy explains what data {siteConfig.name} collects, how
            cookies and advertising work on this site, and the choices you have —
            including consent choices for visitors in the European Economic Area
            (EEA), the United Kingdom and Switzerland.
          </p>
          <p className="mt-3 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="mt-12 space-y-10 leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-2xl text-foreground">Who we are</h2>
            <p className="mt-3">
              {siteConfig.name} is an independent, fan-run information hub about
              Grand Theft Auto VI. It is not affiliated with, endorsed by or
              sponsored by Rockstar Games or Take-Two Interactive. You can reach
              us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-pink hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Information we collect
            </h2>
            <p className="mt-3">
              We do not ask you to create an account or submit personal details.
              We collect only what is needed to run the site and understand how
              it is used:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Anonymous, aggregated usage and performance data (for example page views and load-speed metrics) to improve the site.",
                "Standard technical information your browser sends automatically, such as device type, approximate region and referring page.",
                "Cookies and similar technologies set by us and by our advertising and analytics partners, as described below.",
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
              Analytics
            </h2>
            <p className="mt-3">
              We use privacy-friendly analytics (Vercel Analytics and Speed
              Insights) to measure traffic and performance. These tools report
              aggregated trends and do not build advertising profiles of you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Advertising &amp; Google AdSense
            </h2>
            <p className="mt-3">
              This site is supported by advertising served through Google
              AdSense. Third-party vendors, including Google, use cookies to
              serve ads based on your prior visits to this and other websites.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet.",
                "You can opt out of personalised advertising by visiting Google's Ads Settings, or opt out of a third-party vendor's use of cookies for personalised advertising at aboutads.info.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Learn more in{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink hover:underline"
              >
                Google&rsquo;s advertising policies
              </a>
              , manage choices at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink hover:underline"
              >
                Google Ads Settings
              </a>
              , or opt out at{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink hover:underline"
              >
                aboutads.info
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Consent (EEA, UK &amp; Switzerland)
            </h2>
            <p className="mt-3">
              If you visit from the European Economic Area, the United Kingdom or
              Switzerland, we show a consent message powered by a Google-certified
              Consent Management Platform (CMP) before personalised ads and
              non-essential cookies are used. From that message you can:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Consent — agree to the use of cookies and data for personalised advertising and measurement.",
                "Manage options — review each purpose and vendor and make granular choices, including refusing personalised advertising.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              You can change or withdraw your consent at any time — reopen the
              privacy options from the consent message, or contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-pink hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . If you do not consent, we serve only non-personalised ads, which
              use limited data to control frequency and prevent fraud.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Your rights
            </h2>
            <p className="mt-3">
              Depending on where you live, you may have the right to access,
              correct or delete personal data, to object to or restrict certain
              processing, and to withdraw consent. To exercise any of these
              rights, email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-pink hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. Material changes will
              be reflected here with a revised &ldquo;last updated&rdquo; date.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm">
          <Link href="/" className="font-semibold text-pink hover:underline">
            ← Back to home
          </Link>
        </p>
      </article>
    </>
  );
}
