import Link from "next/link";

type Item = { href: string; title: string; blurb: string };

/** Shared pool of onward destinations, keyed by section. */
const destinations: Record<string, Item> = {
  characters: {
    href: "/characters",
    title: "Characters",
    blurb: "Meet Lucia and Jason, the dual leads at the heart of the story.",
  },
  setting: {
    href: "/setting",
    title: "Map & Setting",
    blurb: "Explore Vice City and the state of Leonida — the biggest GTA world yet.",
  },
  trailers: {
    href: "/trailers",
    title: "Trailers",
    blurb: "Watch every official trailer and break down what we learned.",
  },
  editions: {
    href: "/editions",
    title: "Editions & Price",
    blurb: "Compare the Standard and Ultimate editions, pricing and bonuses.",
  },
  news: {
    href: "/news",
    title: "News",
    blurb: "The latest confirmed updates straight from Rockstar Games.",
  },
  community: {
    href: "/community",
    title: "Community",
    blurb: "Fan theories, debates and leaks — unofficial and clearly labelled.",
  },
  faq: {
    href: "/faq",
    title: "FAQ",
    blurb: "Quick, confirmed answers to the questions people ask most.",
  },
};

export type Section = keyof typeof destinations;

/** Curated onward links for each section — three relevant next stops. */
const related: Record<Section, Section[]> = {
  characters: ["setting", "trailers", "faq"],
  setting: ["characters", "trailers", "editions"],
  trailers: ["characters", "setting", "news"],
  editions: ["news", "faq", "characters"],
  news: ["trailers", "community", "editions"],
  community: ["news", "trailers", "faq"],
  faq: ["characters", "editions", "news"],
};

/**
 * "Keep exploring" strip shown at the foot of every content page. Giving the
 * reader three relevant next stops is the main lever against single-page
 * bounces: someone who finishes a page has somewhere obvious to go next.
 */
export function RelatedLinks({
  current,
  className = "mx-auto max-w-4xl px-5",
}: {
  current: Section;
  className?: string;
}) {
  const items = related[current].map((key) => destinations[key]);

  return (
    <section aria-labelledby="related-heading" className={`${className} pb-20 pt-4`}>
      <h2 id="related-heading" className="font-display text-2xl sm:text-3xl">
        Keep exploring
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-pink/50 hover:bg-white/[0.08]"
          >
            <h3 className="font-display text-xl text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.blurb}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-pink transition-transform group-hover:translate-x-1">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
