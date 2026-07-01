import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { faqs, editionFaqs } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "GTA VI FAQ — Release Date, Price, Editions & Platforms",
  description:
    "Answers to the most common Grand Theft Auto VI questions: release date, price, Standard vs Ultimate editions, platforms, setting, characters and developer — concise, confirmed and up to date.",
  path: "/faq",
});

const allFaqs = [...faqs, ...editionFaqs];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqPageJsonLd(allFaqs)} />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <header>
          <p className="text-sm uppercase tracking-wider text-teal">
            GTA VI Guide
          </p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            <span className="gradient-text">FAQ</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Quick, confirmed answers to the questions people ask most about
            Grand Theft Auto VI.
          </p>
        </header>

        <div className="mt-12 space-y-3">
          {allFaqs.map((f) => (
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
      </article>
    </>
  );
}
