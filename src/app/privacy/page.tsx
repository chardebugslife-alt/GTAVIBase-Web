import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cmpEnabled } from "@/lib/ads";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — Cookies, Ads & Consent",
  description:
    "How GTA VI Base uses cookies and analytics, how Google and its partners use data to serve ads, and how visitors in the EEA, UK and Switzerland can give, manage or withdraw consent.",
  path: "/privacy",
});

const CONTACT_EMAIL = "charuhasen@gmail.com";
const LAST_UPDATED = "August 19, 2026";

/**
 * Legal identity of the data controller, which GDPR Article 13(1)(a) requires a
 * policy to state. Deliberately blank: for a site run by an individual this is
 * a real name and country, and publishing those is the owner's decision to make,
 * not something to fill in automatically. Set both and the policy names the
 * controller; leave them blank and it falls back to the contact address alone.
 */
const CONTROLLER_NAME = "";
const CONTROLLER_LOCATION = "";

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
              sponsored by Rockstar Games or Take-Two Interactive.
            </p>
            <p className="mt-3">
              {CONTROLLER_NAME ? (
                <>
                  The data controller for this site is {CONTROLLER_NAME}
                  {CONTROLLER_LOCATION ? `, based in ${CONTROLLER_LOCATION}` : ""}
                  , contactable at{" "}
                </>
              ) : (
                <>
                  {siteConfig.name} is the data controller for this site, and
                  the person responsible for it can be reached at{" "}
                </>
              )}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-pink hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . That address is also the one to use for any request about your
              personal data.
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
              Insights) to measure traffic and performance. These tools do not
              use cookies, do not track you across other websites and do not
              build advertising profiles of you — they report aggregated trends
              such as which pages are read and how quickly they load.
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
            {cmpEnabled ? (
              <>
                <p className="mt-3">
                  If you visit from the European Economic Area, the United
                  Kingdom or Switzerland, we show a consent message powered by a
                  Google-certified Consent Management Platform (CMP) before
                  personalised ads and non-essential cookies are used. From that
                  message you can:
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
                  You can change or withdraw your consent at any time using the{" "}
                  <strong className="text-foreground">Privacy settings</strong>{" "}
                  link in the footer of any page, or by contacting us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-pink hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . If you do not consent, we serve only non-personalised ads,
                  which use limited data to control frequency and prevent fraud.
                </p>
              </>
            ) : (
              <>
                <p className="mt-3">
                  We have not yet enabled a consent message on this site, so we
                  do not currently ask for or record your consent to
                  personalised advertising. Because consent is what personalised
                  advertising depends on, we instead signal to Google that
                  consent has <em>not</em> been given, for every visitor:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Storage of advertising and analytics cookies, use of your data for advertising, and ad personalisation are all set to denied before any Google tag loads.",
                    "The practical effect is that visitors from these regions are served only non-personalised ads, which use limited data to control frequency and prevent fraud.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  We are working on adding a Google-certified Consent Management
                  Platform so that visitors who want personalised advertising
                  can choose it, and this section will be updated when that
                  happens. In the meantime you can contact us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-pink hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  with any question about advertising on this site.
                </p>
              </>
            )}
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Why we are allowed to use this data
            </h2>
            <p className="mt-3">
              Under the UK and EU GDPR every use of personal data needs a legal
              basis. Ours are:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Consent — for personalised advertising and any non-essential cookies, where consent applies. You can withdraw it at any time, and withdrawing is as easy as giving it.",
                "Legitimate interests — for keeping the site secure and available, and for aggregated, non-identifying measurement of how it is used, which we balance against your privacy.",
                "Legal obligation — where we have to keep or disclose information to comply with the law.",
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
              How long data is kept
            </h2>
            <p className="mt-3">
              We do not run our own database of visitors, so the retention that
              matters is our providers&rsquo;. Aggregated analytics are kept in
              a form that does not identify you. Advertising and consent data
              are held by Google under its own retention schedules, described in
              its{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink hover:underline"
              >
                privacy policy
              </a>
              . Email you send us is kept only as long as needed to deal with
              your message and any follow-up.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Where your data is processed
            </h2>
            <p className="mt-3">
              Our providers — Google and Vercel — operate globally, so data may
              be processed outside the EEA and the UK, including in the United
              States. These transfers rely on the safeguards those providers put
              in place, such as the EU&ndash;US Data Privacy Framework and the
              European Commission&rsquo;s standard contractual clauses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              Your rights
            </h2>
            <p className="mt-3">
              Depending on where you live, you may have the right to access,
              correct or delete personal data, to object to or restrict certain
              processing, to receive your data in a portable form, and to
              withdraw consent at any time. To exercise any of these rights,
              email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-pink hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p className="mt-4">
              If you are in the EEA or the UK and think we have handled your
              data badly, you also have the right to complain to your national
              data protection authority. In the UK that is the{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink hover:underline"
              >
                Information Commissioner&rsquo;s Office
              </a>
              ; in the EEA it is the supervisory authority for the country you
              live in. We would rather hear from you first, but you do not have
              to come to us before going to them.
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
