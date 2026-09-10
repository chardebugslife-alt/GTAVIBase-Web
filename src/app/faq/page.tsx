import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
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
            <div key={f.question} className="border border-line bg-surface p-6">
              <h2 className="font-semibold text-foreground">{f.question}</h2>
              <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
            </div>
          ))}
        </div>
      </article>
      <RelatedLinks current="faq" className="mx-auto max-w-3xl px-5" />
    </>
  );
}
