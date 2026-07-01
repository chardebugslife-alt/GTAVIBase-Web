import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { AdInArticle } from "@/components/AdUnit";
import {
  pageMetadata,
  breadcrumbJsonLd,
  editionsJsonLd,
  faqPageJsonLd,
} from "@/lib/seo";
import { editions, editionsInfo, editionFaqs } from "@/lib/data";
import { gameFacts } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI Editions & Price — Standard $79.99, Ultimate $99.99",
  description:
    "How much is GTA VI and what editions are there? The Standard Edition is $79.99 and the Ultimate Edition is $99.99. Compare what each digital edition includes, pre-order bonuses and platforms.",
  path: "/editions",
});

export default function EditionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Editions & Price", path: "/editions" },
        ])}
      />
      <JsonLd data={editionsJsonLd()} />
      <JsonLd data={faqPageJsonLd(editionFaqs)} />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            Editions &amp; <span className="gradient-text">Price</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Grand Theft Auto VI comes in two editions. The{" "}
            <strong className="text-foreground">Standard Edition</strong> is{" "}
            <strong className="text-foreground">$79.99</strong> and the{" "}
            <strong className="text-foreground">Ultimate Edition</strong> is{" "}
            <strong className="text-foreground">$99.99</strong>. Here is how they
            compare, what each includes, and the pre-order details Rockstar has
            confirmed.
          </p>
        </header>

        {/* Pricing overview */}
        <section aria-labelledby="pricing-heading" className="mt-12">
          <h2 id="pricing-heading" className="font-display text-3xl">
            Pricing
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {editions.map((e) => (
              <div
                key={e.slug}
                className="flex items-baseline justify-between rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-display text-xl text-foreground">
                  {e.name}
                </span>
                <span className="font-display text-3xl gradient-text">
                  {e.price}
                </span>
              </div>
            ))}
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-xs uppercase tracking-wider text-teal">
                Pre-orders opened
              </dt>
              <dd className="mt-1 text-lg text-foreground">
                {editionsInfo.preOrderLabel}
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-xs uppercase tracking-wider text-teal">
                Pre-load begins
              </dt>
              <dd className="mt-1 text-lg text-foreground">
                {editionsInfo.preloadLabel}
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-xs uppercase tracking-wider text-teal">
                Release date
              </dt>
              <dd className="mt-1 text-lg text-foreground">
                {gameFacts.releaseDateLabel}
              </dd>
            </div>
          </dl>
          <p className="mt-4 rounded-2xl border border-pink/20 bg-pink/5 p-5 text-sm leading-relaxed text-muted">
            <strong className="text-foreground">Pre-order bonus:</strong> every
            pre-order includes the {editionsInfo.preOrderBonus}, for orders
            placed before {editionsInfo.preOrderBonusDeadline}.
          </p>
          <p className="mt-3 text-sm text-muted">{editionsInfo.currencyNote}</p>
        </section>

        <AdInArticle className="mt-10" />

        {/* Variants / digital editions */}
        <section aria-labelledby="variants-heading" className="mt-12">
          <h2 id="variants-heading" className="font-display text-3xl">
            The digital editions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Both editions are available to buy digitally from the PlayStation
            Store, Xbox and the Rockstar Store. The Standard Edition also comes
            as a boxed copy containing a download code (no disc); the Ultimate
            Edition is digital only.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {editions.map((e) => (
              <div
                key={e.slug}
                className={`flex flex-col rounded-2xl border p-6 ${
                  e.featured
                    ? "border-pink/40 bg-gradient-to-b from-pink/10 to-transparent"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <figure className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-white/10 bg-black">
                  <Image
                    src={e.image}
                    alt={e.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-[10px] text-muted">
                    {e.imageCredit}
                  </figcaption>
                </figure>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-foreground">
                    {e.name}
                  </h3>
                  {e.featured && (
                    <span className="rounded-full bg-gradient-to-r from-pink to-orange px-3 py-1 text-xs font-semibold text-black">
                      Most content
                    </span>
                  )}
                </div>
                <p className="mt-1 font-display text-3xl gradient-text">
                  {e.price}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {e.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.digital && (
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted">
                      Digital
                    </span>
                  )}
                  {e.physical && (
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted">
                      Physical (download code)
                    </span>
                  )}
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                  {e.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="mt-0.5 text-teal">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={editionsInfo.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex justify-center rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 ${
                    e.featured
                      ? "bg-gradient-to-r from-pink to-orange text-black"
                      : "border border-white/15 text-foreground"
                  }`}
                >
                  View on the Rockstar Store
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted">
            Available on {gameFacts.platforms.join(", ")}. No PC version has been
            announced for launch.
          </p>
        </section>

        {/* FAQ — targets edition/pricing questions for search & answer engines */}
        <section aria-labelledby="editions-faq" className="mt-16">
          <h2 id="editions-faq" className="font-display text-3xl">
            Editions &amp; pricing FAQ
          </h2>
          <div className="mt-6 space-y-3">
            {editionFaqs.map((f) => (
              <details
                key={f.question}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:border-pink/40"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-foreground marker:content-none">
                  {f.question}
                  <span className="shrink-0 text-pink transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Sources & credits — Rockstar-only policy */}
        <section
          aria-labelledby="sources"
          className="mt-12 border-t border-white/10 pt-6"
        >
          <h2
            id="sources"
            className="font-display text-sm uppercase tracking-wider text-teal"
          >
            Sources &amp; credits
          </h2>
          <p className="mt-2 text-sm text-muted">
            Editions and pricing are drawn from official Rockstar Games sources.
          </p>
          <ul className="mt-4 space-y-3">
            {editionsInfo.sources.map((source) => (
              <li key={source.url} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink hover:underline"
                >
                  {source.title}
                </a>
                <span className="text-muted"> — {source.publisher}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
