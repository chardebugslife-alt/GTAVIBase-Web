import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact GTA VI Base",
  description:
    "Get in touch with GTA VI Base — send corrections, feedback, or press and legal enquiries. We read every message.",
  path: "/contact",
});

// Site-branded address rather than a personal inbox: keeps the operator's
// personal identity off an ad-monetized fan site and gives spam scrapers a
// disposable, forwardable target. Point this at a real mailbox/forwarder.
const CONTACT_EMAIL = "hello@gtavibase.com";

const reasons = [
  {
    title: "Corrections",
    blurb:
      "Found something inaccurate or out of date? Tell us and, where possible, include a source so we can verify and fix it fast.",
  },
  {
    title: "Feedback & suggestions",
    blurb:
      "Ideas for content you'd like to see, or thoughts on how the site works — we're always improving.",
  },
  {
    title: "Press & legal",
    blurb:
      "Media enquiries, or any rights, privacy or advertising matter, including questions about this site's use of images and trademarks.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            Get in touch
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">Contact</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {siteConfig.name} is run by a small independent team. The best way to
            reach us is by email — we read every message and aim to reply within
            a few days.
          </p>
        </header>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-wider text-muted">Email us</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-block font-display text-2xl gradient-text sm:text-3xl"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="mt-12 space-y-6 leading-relaxed text-muted">
          <h2 className="font-display text-2xl text-foreground">
            What to reach out about
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-display text-lg text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.blurb}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            Looking for who we are and how we source information? See our{" "}
            <Link href="/about" className="font-semibold text-pink hover:underline">
              About page
            </Link>
            . For data and cookie questions, read our{" "}
            <Link href="/privacy" className="font-semibold text-pink hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
