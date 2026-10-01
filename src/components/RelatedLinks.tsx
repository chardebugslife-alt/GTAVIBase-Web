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
  vehicles: {
    href: "/vehicles",
    title: "Vehicles",
    blurb: "Every car, bike and boat seen in the official trailers, by type.",
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
    blurb: "Fan theories, debates and trailer breakdowns — unofficial and clearly labelled.",
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
  setting: ["characters", "vehicles", "trailers"],
  vehicles: ["trailers", "setting", "editions"],
  trailers: ["vehicles", "characters", "news"],
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
  className = "mx-auto max-w-[1120px] px-5 sm:px-7",
}: {
  current: Section;
  className?: string;
}) {
  const items = related[current].map((key) => destinations[key]);

  return (
    <section
      aria-labelledby="related-heading"
      className={`${className} pb-20 pt-16`}
    >
      <div className="rule-top">
        <h2 id="related-heading" className="eyebrow">
          Keep exploring
        </h2>
      </div>
      <div>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="grid grid-cols-[minmax(0,1fr)_28px] items-baseline gap-5 border-b border-line py-6 transition-colors hover:bg-surface"
          >
            <span className="grid gap-2">
              <span className="text-[22px] font-semibold leading-[1.25] tracking-[-0.025em]">
                {item.title}
              </span>
              <span className="serif max-w-[60ch] text-[17px] leading-[1.55] text-tertiary">
                {item.blurb}
              </span>
            </span>
            <span aria-hidden className="text-right text-lg text-accent">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
