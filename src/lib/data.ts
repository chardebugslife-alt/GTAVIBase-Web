/**
 * Editorial content for the site. Kept as plain data so it can drive both the
 * rendered pages and the structured data (JSON-LD) without drifting apart.
 *
 * Everything here is based on Rockstar Games' official reveals (Trailer 1, Dec
 * 2023; Trailer 2, May 2025). We deliberately avoid unconfirmed leaks.
 */

import type { NavItem } from "@/lib/site";

export type Character = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  details: string[];
  /** Official Rockstar artwork (hotlinked). */
  image: string;
  imageAlt: string;
  imageCredit: string;
};

export const characters: Character[] = [
  {
    slug: "lucia",
    name: "Lucia Caminos",
    role: "Co-protagonist",
    summary:
      "The first female lead in a mainline Grand Theft Auto. Fresh out of a Leonida correctional facility, Lucia is sharp, loyal and willing to do whatever it takes to change the odds stacked against her.",
    details: [
      "First playable female protagonist in a mainline GTA game.",
      "Introduced leaving a state correctional facility in the first trailer.",
      "Her relationship with Jason drives the dual-protagonist, Bonnie-and-Clyde story.",
    ],
    image:
      "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/8978kok9385a82/1d6307ffa5adedfba5b1805e7c949fa74816d163.jpg",
    imageAlt: "Lucia in the Grand Theft Auto VI reveal trailer",
    imageCredit: "© Rockstar Games",
  },
  {
    slug: "jason",
    name: "Jason Duval",
    role: "Co-protagonist",
    summary:
      "Jason knows his way around a gun and grew up around grifters and chancers. Looking for a way out, he and Lucia learn the hard way that in Leonida the deck is always stacked.",
    details: [
      "Second playable protagonist alongside Lucia.",
      "Has a military and criminal background hinted at across the trailers.",
      "Lives in the Leonida Keys when we first meet him.",
    ],
    image:
      "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/3928aaa9471o3a/87db5089306344e0854cffb1b3bf15e6d71b465b.jpg",
    imageAlt: "Jason in the Grand Theft Auto VI second trailer",
    imageCredit: "© Rockstar Games",
  },
];

export type Region = {
  name: string;
  blurb: string;
};

export const setting = {
  state: "Leonida",
  city: "Vice City",
  intro:
    "GTA VI returns to Vice City, the neon-soaked metropolis inspired by Miami, set within the wider fictional state of Leonida — Rockstar's take on modern-day Florida. It is the largest and most detailed open world the studio has ever built.",
  // Rockstar has not released a full world map; this is official Vice City art.
  image:
    "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/258aa538o412ok/5690872e70df76d5d63638c12e7eb5b746f83c3a.jpg",
  imageAlt: "Official Grand Theft Auto VI art of Vice City, Leonida",
  imageCredit: "© Rockstar Games",
  regions: [
    {
      name: "Vice City",
      blurb:
        "A sprawling coastal metropolis of beaches, nightlife and Art-Deco glamour — the beating heart of Leonida.",
    },
    {
      name: "Leonida Keys",
      blurb:
        "A chain of sun-bleached islands and sandbars stretching off the southern coast.",
    },
    {
      name: "Grassrivers & Wetlands",
      blurb:
        "Everglades-style swamps, airboats and backcountry that surround the city.",
    },
    {
      name: "Port Gellhorn",
      blurb:
        "An industrial port town and one of several distinct communities across the state.",
    },
  ] as Region[],
};

export type Trailer = {
  id: string;
  title: string;
  released: string;
  releasedLabel: string;
  description: string;
  music: string;
  /** Video on Rockstar Games' official YouTube channel. */
  youtubeId: string;
  /** Official still hosted on Rockstar's own CDN. */
  thumbnail: string;
};

export const trailers: Trailer[] = [
  {
    id: "trailer-2",
    title: "Grand Theft Auto VI — Trailer 2",
    released: "2025-05-06",
    releasedLabel: "May 2025",
    description:
      "A deeper look at Lucia and Jason, the people of Leonida and the scope of Vice City and its surrounding regions.",
    music: "Multiple licensed tracks",
    youtubeId: "VQRLujxTm3c",
    thumbnail:
      "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/3928aaa9471o3a/87db5089306344e0854cffb1b3bf15e6d71b465b.jpg",
  },
  {
    id: "trailer-1",
    title: "Grand Theft Auto VI — Trailer 1",
    released: "2023-12-05",
    releasedLabel: "December 2023",
    description:
      "The first official look at GTA VI, our introduction to Vice City, Lucia and the state of Leonida.",
    music: "“Love Is a Long Road” by Tom Petty",
    youtubeId: "g7jtqwUi9U0",
    thumbnail:
      "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/8978kok9385a82/1d6307ffa5adedfba5b1805e7c949fa74816d163.jpg",
  },
];

/** A cited, verifiable source shown as a credit on the article page. */
export type NewsSource = {
  title: string;
  publisher: string;
  url: string;
};

export type NewsArticle = {
  slug: string;
  date: string;
  dateLabel: string;
  /** Optional "last updated" note for evergreen posts. */
  updatedLabel?: string;
  title: string;
  /** One-sentence dek, reused as the page meta description. */
  summary: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  /** Where the image itself came from (shown as a linked credit). */
  imageCreditUrl: string;
  /** Scannable, quotable facts for answer engines and AI overviews. */
  keyPoints: string[];
  /** Article body — one string per paragraph, original prose. */
  body: string[];
  /** Verifiable, official sources listed as credits on the page. */
  sources: NewsSource[];
  /** Optional internal cross-links to related guide pages on this site. */
  related?: NavItem[];
};

const RS_VI: NewsSource = {
  title: "Grand Theft Auto VI — Official Site",
  publisher: "Rockstar Games",
  url: "https://www.rockstargames.com/VI",
};

const CDN = "https://media-rockstargames-com.akamaized.net/tina-uploads/posts";

export const news: NewsArticle[] = [
  {
    slug: "release-date-november-2026",
    date: "2025-11-06",
    dateLabel: "November 6, 2025",
    title: "GTA VI delayed to November 19, 2026",
    summary:
      "Rockstar Games moved Grand Theft Auto VI from May 26, 2026 to Thursday, November 19, 2026 — the game's second delay — for more time to finish it to the studio's standard.",
    image: `${CDN}/ak3ak31a49a221/c8c033070a0bfb2e3ec6ae7ff047ebe8ec551326.jpg`,
    imageAlt: "Grand Theft Auto VI key art",
    imageCredit: "© Rockstar Games",
    imageCreditUrl:
      "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
    keyPoints: [
      "GTA VI's release date is now Thursday, November 19, 2026.",
      "The date moved from the previous target of May 26, 2026.",
      "It is the game's second delay after an original 2025 window.",
      "Platforms are unchanged: PlayStation 5 and Xbox Series X|S.",
    ],
    body: [
      "On November 6, 2025, Rockstar Games announced that Grand Theft Auto VI would move to Thursday, November 19, 2026. The new date replaces the previous target of May 26, 2026 that the studio had set earlier in the year.",
      "Rockstar framed the change as additional development time, saying the extra months would let the team finish the game with the level of polish players expect, and thanked fans for their patience during a long wait between mainline entries.",
      "The platforms remain the same — PlayStation 5 and Xbox Series X|S — and Rockstar has not announced a PC version for launch. GTA VI was first revealed in December 2023 and originally targeted 2025 before the two-step slip to late 2026.",
    ],
    sources: [
      {
        title: "Grand Theft Auto VI is Now Set to Launch November 19, 2026",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
      },
      RS_VI,
    ],
  },
  {
    slug: "release-date-set",
    date: "2025-05-06",
    dateLabel: "May 6, 2025",
    title: "Rockstar sets a May 26, 2026 release date",
    summary:
      "Alongside the second trailer in May 2025, Rockstar Games gave Grand Theft Auto VI a firm release date of May 26, 2026 — a date the studio later pushed to November 19, 2026.",
    image: `${CDN}/258aa538o412ok/5690872e70df76d5d63638c12e7eb5b746f83c3a.jpg`,
    imageAlt: "Official Grand Theft Auto VI art of Vice City",
    imageCredit: "© Rockstar Games",
    imageCreditUrl:
      "https://www.rockstargames.com/newswire/article/258aa538o412ok/grand-theft-auto-vi-is-now-coming-may-26-2026",
    updatedLabel: "Superseded by the November 19, 2026 date on Nov 6, 2025.",
    keyPoints: [
      "On May 6, 2025, Rockstar dated GTA VI for May 26, 2026.",
      "The announcement accompanied the game's second trailer.",
      "It confirmed PlayStation 5 and Xbox Series X|S.",
      "The date was later delayed to November 19, 2026.",
    ],
    body: [
      "When Rockstar Games released the second Grand Theft Auto VI trailer on May 6, 2025, it also narrowed the launch window to a specific day: May 26, 2026. It was the first firm date after the reveal trailer's broad 2025 target.",
      "The announcement reconfirmed the game's platforms — PlayStation 5 and Xbox Series X|S — and positioned GTA VI as a marquee release for the current console generation.",
      "That date did not hold. On November 6, 2025, Rockstar delayed the game again, to November 19, 2026, citing the need for more development time.",
    ],
    sources: [
      {
        title: "Grand Theft Auto VI is Now Coming May 26, 2026",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/258aa538o412ok/grand-theft-auto-vi-is-now-coming-may-26-2026",
      },
      RS_VI,
    ],
  },
  {
    slug: "trailer-2-released",
    date: "2025-05-06",
    dateLabel: "May 6, 2025",
    title: "Trailer 2 arrives with a wider look at Leonida",
    summary:
      "Grand Theft Auto VI Trailer 2 debuted on May 6, 2025, giving a longer look at protagonists Lucia and Jason, the streets of Vice City and the wider state of Leonida.",
    image: `${CDN}/3928aaa9471o3a/87db5089306344e0854cffb1b3bf15e6d71b465b.jpg`,
    imageAlt: "Grand Theft Auto VI Trailer 2 still",
    imageCredit: "© Rockstar Games",
    imageCreditUrl:
      "https://www.rockstargames.com/newswire/article/3928aaa9471o3a/grand-theft-auto-vi-watch-trailer-2-now",
    keyPoints: [
      "Trailer 2 debuted on May 6, 2025 on Rockstar's official channels.",
      "It expanded on the two protagonists, Lucia and Jason.",
      "It showcased Vice City and locations across Leonida.",
      "Rockstar scored the footage with licensed music.",
    ],
    body: [
      "Rockstar Games premiered the second Grand Theft Auto VI trailer on May 6, 2025. Running longer than the reveal, it moved beyond first impressions to introduce the personalities of the two leads and the texture of daily life across Leonida.",
      "The trailer intercut character moments with sweeping views of Vice City's beaches, nightlife and neon, alongside the swamps, keys and small towns that surround it, set to a selection of licensed tracks.",
      "Rockstar published the trailer to its official YouTube channel and hosted it on the Rockstar Games website, where it remains available to watch in full.",
    ],
    sources: [
      {
        title: "Grand Theft Auto VI — Watch Trailer 2 Now",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/3928aaa9471o3a/grand-theft-auto-vi-watch-trailer-2-now",
      },
      {
        title: "Grand Theft Auto VI — Trailer 2 (video)",
        publisher: "Rockstar Games",
        url: "https://www.rockstargames.com/videos/cpys7u21",
      },
      RS_VI,
    ],
  },
  {
    slug: "protagonists-lucia-and-jason",
    date: "2025-05-06",
    dateLabel: "May 6, 2025",
    updatedLabel: "Evergreen overview — kept current as Rockstar shares details.",
    title: "GTA VI's two protagonists: Lucia and Jason",
    summary:
      "Grand Theft Auto VI stars two playable protagonists — Lucia Caminos, the mainline series' first female lead, and Jason — in a story Rockstar describes as two partners against the odds.",
    image: `${CDN}/8978kok9385a82/1d6307ffa5adedfba5b1805e7c949fa74816d163.jpg`,
    imageAlt: "Lucia in Grand Theft Auto VI",
    imageCredit: "© Rockstar Games",
    imageCreditUrl:
      "https://www.rockstargames.com/newswire/article/8978kok9385a82/grand-theft-auto-vi-watch-trailer-1-now",
    keyPoints: [
      "GTA VI has two playable protagonists — a mainline series first.",
      "Lucia Caminos is the first female lead in a mainline Grand Theft Auto.",
      "Her counterpart is Jason, whom she meets in Leonida.",
      "Rockstar frames their story around a criminal conspiracy across the state.",
    ],
    body: [
      "For the first time in a mainline Grand Theft Auto, players take on two protagonists. Rockstar Games introduced Lucia Caminos in the reveal trailer and expanded on her partner, Jason, in later material.",
      "Lucia is the first female lead in a mainline GTA game. Rockstar casts the pair as two people who have always known the odds are against them — drawn together when a simple score goes wrong and pulled into a criminal conspiracy that stretches across the state of Leonida.",
      "The studio has likened their dynamic to a modern outlaw-couple story, with the relationship between Lucia and Jason at the center of the game's narrative.",
    ],
    sources: [
      RS_VI,
      {
        title: "Grand Theft Auto VI — Watch Trailer 2 Now",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/3928aaa9471o3a/grand-theft-auto-vi-watch-trailer-2-now",
      },
    ],
  },
  {
    slug: "platforms-and-editions",
    date: "2023-12-05",
    dateLabel: "December 5, 2023",
    updatedLabel: "Evergreen overview — kept current as Rockstar shares details.",
    title: "GTA VI platforms: PS5 and Xbox Series X|S",
    summary:
      "Rockstar Games has confirmed Grand Theft Auto VI for PlayStation 5 and Xbox Series X|S. No PC version has been announced for launch, and editions are listed on the Rockstar Store.",
    image: `${CDN}/ak3ak31a49a221/c8c033070a0bfb2e3ec6ae7ff047ebe8ec551326.jpg`,
    imageAlt: "Grand Theft Auto VI key art",
    imageCredit: "© Rockstar Games",
    imageCreditUrl: "https://www.rockstargames.com/VI",
    keyPoints: [
      "GTA VI launches on PlayStation 5 and Xbox Series X|S.",
      "No PC version has been announced for the initial release.",
      "Multiple editions are listed on the Rockstar Store.",
      "Platforms were confirmed at the December 2023 reveal.",
    ],
    body: [
      "Rockstar Games has consistently listed Grand Theft Auto VI for two platforms: PlayStation 5 and Xbox Series X|S. Those platforms were named at the December 2023 reveal and reaffirmed with each subsequent announcement.",
      "As with previous Grand Theft Auto releases, Rockstar has not announced a PC version for launch. Historically, PC editions of the studio's games have followed the console release rather than shipping alongside it.",
      "Editions and pre-order options are listed on the Rockstar Store; pricing and contents vary by edition and region.",
    ],
    sources: [
      RS_VI,
      {
        title: "Grand Theft Auto VI — Rockstar Store",
        publisher: "Rockstar Store",
        url: "https://store.rockstargames.com/game/buy-gta-vi",
      },
    ],
    related: [
      { href: "/editions", label: "GTA VI editions & price: Standard vs Ultimate" },
      { href: "/faq", label: "GTA VI FAQ" },
    ],
  },
  {
    slug: "trailer-1-released",
    date: "2023-12-05",
    dateLabel: "December 5, 2023",
    title: "The first GTA VI trailer reveals Vice City",
    summary:
      "Grand Theft Auto VI's first trailer arrived in December 2023, officially revealing the return to Vice City, the state of Leonida and protagonist Lucia.",
    image: `${CDN}/8978kok9385a82/1d6307ffa5adedfba5b1805e7c949fa74816d163.jpg`,
    imageAlt: "Grand Theft Auto VI Trailer 1 still",
    imageCredit: "© Rockstar Games",
    imageCreditUrl:
      "https://www.rockstargames.com/newswire/article/8978kok9385a82/grand-theft-auto-vi-watch-trailer-1-now",
    keyPoints: [
      "The reveal trailer debuted in December 2023.",
      "It confirmed a return to Vice City within the state of Leonida.",
      "It introduced Lucia, the game's first female lead.",
      "The trailer was scored by Tom Petty's “Love Is a Long Road.”",
    ],
    body: [
      "Rockstar Games revealed Grand Theft Auto VI with its first trailer in December 2023, ending years of speculation. The reveal confirmed the long-rumored return to Vice City, now set within the broader modern-day state of Leonida.",
      "The trailer introduced Lucia — established as the first female protagonist in a mainline Grand Theft Auto — and set its montage of Leonida to Tom Petty's “Love Is a Long Road.”",
      "Rockstar published the trailer to its official YouTube channel and its own website, where it remains available alongside the game's other media.",
    ],
    sources: [
      {
        title: "Grand Theft Auto VI — Watch Trailer 1 Now",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/8978kok9385a82/grand-theft-auto-vi-watch-trailer-1-now",
      },
      {
        title: "Grand Theft Auto VI — Trailer 1 (video)",
        publisher: "Rockstar Games",
        url: "https://www.rockstargames.com/videos/rkoCtr1r",
      },
      RS_VI,
    ],
  },
];

/**
 * Editions & pricing. Confirmed by Rockstar Games alongside the June 25, 2026
 * pre-order launch. Prices are the US digital MSRP in USD; contents and price
 * vary by region. Kept as data so it drives both the page and the Product /
 * Offer structured data.
 */
export type Edition = {
  slug: string;
  name: string;
  /** Display price, US digital MSRP. */
  price: string;
  /** Numeric price for structured data. */
  priceValue: number;
  tagline: string;
  /** Available as a digital download. */
  digital: boolean;
  /** Available as a boxed copy (a download code — no disc). */
  physical: boolean;
  /** Visually featured as the premium option. */
  featured?: boolean;
  includes: string[];
  /** Official Rockstar Store edition artwork (hotlinked). */
  image: string;
  imageAlt: string;
  imageCredit: string;
};

export const editions: Edition[] = [
  {
    slug: "standard",
    name: "Standard Edition",
    price: "$79.99",
    priceValue: 79.99,
    tagline: "The complete Grand Theft Auto VI experience.",
    digital: true,
    physical: true,
    includes: [
      "The full Grand Theft Auto VI game.",
      "Vintage Vice City Pack — the pre-order bonus, for orders placed before November 20, 2026.",
    ],
    image:
      "https://images.ctfassets.net/h1rqp7q66d54/2bQ11ydObxmD2CvRyUlII6/e6e94f08f74e6a439e8937421653245e/GTAVI_PreOrderWebstore_CompareEditionsThumbnail_Standard_1280x720_R01.jpg",
    imageAlt: "Grand Theft Auto VI Standard Edition artwork on the Rockstar Store",
    imageCredit: "© Rockstar Games",
  },
  {
    slug: "ultimate",
    name: "Ultimate Edition",
    price: "$99.99",
    priceValue: 99.99,
    tagline: "The base game plus a collection of premium content woven through the story.",
    digital: true,
    physical: false,
    featured: true,
    includes: [
      "Everything in the Standard Edition, including the Vintage Vice City Pack.",
      "Premium vehicles: the '95 Grotti Cheetah, Shitzu Squalo and '67 Vapid Dominator Buggy.",
      "Personalized weapons and exclusive apparel and tattoos.",
      "Ultimate-only businesses to visit in-game: Rideout Customs and Sara's Unisex Salon.",
      "One month of GTA+ membership included with digital purchases.",
    ],
    image:
      "https://images.ctfassets.net/h1rqp7q66d54/6BWQSfnOYTcVVsRj8ay2ML/8e51ba006c8d309d0c6a1b582c44b041/UltimateEdition_07_en_us_R04_Deliv.jpg",
    imageAlt: "Grand Theft Auto VI Ultimate Edition artwork on the Rockstar Store",
    imageCredit: "© Rockstar Games",
  },
];

/** Facts framing the editions — pre-order timing, bonus and platforms. */
export const editionsInfo = {
  currencyNote:
    "Prices shown are the US digital MSRP in USD. Contents and pricing vary by region and platform.",
  preOrderLabel: "June 25, 2026",
  preOrderBonus: "Vintage Vice City Pack",
  preOrderBonusDeadline: "November 20, 2026",
  preloadLabel: "November 12, 2026",
  storeUrl: "https://store.rockstargames.com/game/buy-gta-vi",
  sources: [
    {
      title: "Pre-Order Grand Theft Auto VI on June 25",
      publisher: "Rockstar Games Newswire",
      url: "https://www.rockstargames.com/newswire/article/5171972o3ak5oa/pre-order-grand-theft-auto-vi-on-june-25",
    },
    {
      title: "Grand Theft Auto VI — Rockstar Store",
      publisher: "Rockstar Store",
      url: "https://store.rockstargames.com/game/buy-gta-vi",
    },
  ] as NewsSource[],
};

export type Faq = {
  question: string;
  answer: string;
};

/** Q&A pairs power both the FAQ page and FAQPage structured data — strong for
 *  answer engines (AEO) and AI overviews (GEO). Keep answers concise and
 *  self-contained so they can be quoted directly. */
export const faqs: Faq[] = [
  {
    question: "When is GTA VI coming out?",
    answer:
      "Grand Theft Auto VI is scheduled to release on November 19, 2026. Rockstar Games delayed the game to this date on November 6, 2025, having previously targeted May 26, 2026.",
  },
  {
    question: "What platforms is GTA VI on?",
    answer:
      "GTA VI launches on PlayStation 5 and Xbox Series X|S. Rockstar has not announced a PC version at launch; historically a PC release follows the console version.",
  },
  {
    question: "Where does GTA VI take place?",
    answer:
      "GTA VI is set in Vice City and the wider fictional state of Leonida, Rockstar's modern-day reimagining of Florida. It is the largest open world in the series to date.",
  },
  {
    question: "Who are the main characters in GTA VI?",
    answer:
      "The game has two playable protagonists, Lucia Caminos and Jason Duval. Lucia is the first female lead in a mainline Grand Theft Auto game, and their story is described as a modern Bonnie-and-Clyde tale.",
  },
  {
    question: "Who is developing GTA VI?",
    answer:
      "Grand Theft Auto VI is developed and published by Rockstar Games, the studio behind Grand Theft Auto V and Red Dead Redemption 2.",
  },
  {
    question: "How many trailers does GTA VI have?",
    answer:
      "Two official trailers have been released so far: the first in December 2023 and the second in May 2025.",
  },
  {
    question: "Is GTA VI the first game since GTA V?",
    answer:
      "Yes. GTA VI is the first mainline Grand Theft Auto entry since Grand Theft Auto V launched in 2013, making it one of the most anticipated games ever.",
  },
];

/** Edition & pricing Q&A. Shown on the Editions page with its own FAQPage
 *  schema and appended to the main FAQ page. Answers are deliberately
 *  self-contained so answer engines (AEO) and AI overviews (GEO) can quote a
 *  single entry in full. */
export const editionFaqs: Faq[] = [
  {
    question:
      "What is the difference between the GTA VI Standard and Ultimate editions?",
    answer:
      "The GTA VI Standard Edition ($79.99) is the full game plus the Vintage Vice City Pack pre-order bonus. The Ultimate Edition ($99.99) adds a collection of premium in-game content: the '95 Grotti Cheetah, Shitzu Squalo and '67 Vapid Dominator Buggy vehicles, personalized weapons, exclusive apparel and tattoos, the Ultimate-only Rideout Customs and Sara's Unisex Salon businesses, and a one-month GTA+ membership. The Standard Edition is sold digitally or as a boxed download code; the Ultimate Edition is digital only.",
  },
  {
    question: "How much does GTA VI cost?",
    answer:
      "Grand Theft Auto VI costs $79.99 for the Standard Edition and $99.99 for the Ultimate Edition, based on US digital pricing. Prices vary by region and platform.",
  },
  {
    question: "What is included in the GTA VI Ultimate Edition?",
    answer:
      "The GTA VI Ultimate Edition ($99.99) includes everything in the Standard Edition plus premium vehicles (the '95 Grotti Cheetah, Shitzu Squalo and '67 Vapid Dominator Buggy), personalized weapons, exclusive apparel and tattoos, the Ultimate-only Rideout Customs and Sara's Unisex Salon businesses, and one month of GTA+ membership with digital purchases.",
  },
  {
    question: "Can you buy GTA VI physically on disc?",
    answer:
      "The GTA VI Standard Edition is available as a boxed copy, but the box contains a download code rather than a game disc. The Ultimate Edition is digital only. Both editions can also be bought digitally from the PlayStation Store, Xbox and the Rockstar Store.",
  },
  {
    question:
      "When did GTA VI pre-orders open and what is the pre-order bonus?",
    answer:
      "GTA VI pre-orders opened on June 25, 2026. Every pre-order placed before November 20, 2026 includes the Vintage Vice City Pack. The game releases November 19, 2026 on PlayStation 5 and Xbox Series X|S.",
  },
];

/* ------------------------------------------------------------------ *
 *  Community hub
 *
 *  UNOFFICIAL, fan-driven content: theories, story speculation, frame-
 *  by-frame breakdowns, conspiracy talk and community roundups. This is
 *  deliberately kept SEPARATE from the official /news section so the
 *  factual pages stay Rockstar-sourced only. Every entry here is an
 *  original summary of an ongoing community conversation, clearly framed
 *  as speculation and linked back to where the discussion lives.
 * ------------------------------------------------------------------ */

/** A community topic bucket. `accent` is a Tailwind gradient used for the
 *  category badge and the placeholder artwork. */
export type CommunityCategory = {
  slug: string;
  label: string;
  blurb: string;
  /** Tailwind `from-*`/`to-*` gradient stops for badges & placeholders. */
  accent: string;
};

export const communityCategories: CommunityCategory[] = [
  {
    slug: "fan-theories",
    label: "Fan Theories",
    blurb:
      "Map-size guesses, hidden-detail hunts and gameplay predictions the community keeps returning to.",
    accent: "from-pink to-orange",
  },
  {
    slug: "story-speculation",
    label: "Story Talk",
    blurb:
      "Where fans think the Lucia-and-Jason story is heading, based on the two trailers.",
    accent: "from-purple to-pink",
  },
  {
    slug: "conspiracy",
    label: "Conspiracy Corner",
    blurb:
      "The wilder, take-it-with-a-shaker-of-salt end of the fandom. Entertainment, not evidence.",
    accent: "from-teal to-purple",
  },
  {
    slug: "leaks-rumors",
    label: "Leaks & Rumors",
    blurb:
      "Unconfirmed chatter and reported leaks the community is weighing — none of it official.",
    accent: "from-orange to-pink",
  },
  {
    slug: "debates",
    label: "Hot Debates",
    blurb:
      "The arguments splitting the fandom right now — price, story length and how to play launch week.",
    accent: "from-orange to-teal",
  },
  {
    slug: "breakdowns",
    label: "Trailer Breakdowns",
    blurb:
      "Frame-by-frame analysis and detail spotting from creators and forum sleuths.",
    accent: "from-teal to-pink",
  },
  {
    slug: "community-hubs",
    label: "Community Hubs",
    blurb:
      "The megathreads, subreddits and forums where the whole conversation actually happens.",
    accent: "from-pink to-purple",
  },
];

/** An external place the discussion lives (thread, video, forum, subreddit). */
export type CommunityLink = {
  title: string;
  /** e.g. "Reddit — r/GTA6", "GTAForums", "YouTube". */
  publisher: string;
  url: string;
  /** Shown as a small tag on the link. */
  kind: "Discussion" | "Forum" | "Video" | "Subreddit" | "Article";
};

export type CommunityPost = {
  slug: string;
  /** One of `communityCategories[].slug`. */
  category: string;
  date: string;
  dateLabel: string;
  updatedLabel?: string;
  title: string;
  /** One-sentence dek, reused as the page meta description. */
  summary: string;
  /** Scannable, quotable talking points. */
  keyPoints: string[];
  /** Original prose — one string per paragraph. Framed as speculation. */
  body: string[];
  /** The primary place this conversation is happening (linked prominently). */
  source: CommunityLink;
  /** Any additional external threads/videos worth a look. */
  moreLinks?: CommunityLink[];
  /** Optional internal cross-links to factual guide pages on this site. */
  related?: NavItem[];
};

/** Real, stable community destinations reused across posts. */
const HUB_REDDIT: CommunityLink = {
  title: "r/GTA6 — the main GTA VI subreddit",
  publisher: "Reddit — r/GTA6",
  url: "https://www.reddit.com/r/GTA6/",
  kind: "Subreddit",
};

const HUB_FORUMS: CommunityLink = {
  title: "GTAForums — Grand Theft Auto VI boards",
  publisher: "GTAForums",
  url: "https://gtaforums.com/forum/401-grand-theft-auto-vi/",
  kind: "Forum",
};

export const community: CommunityPost[] = [
  {
    slug: "how-big-is-the-map",
    category: "fan-theories",
    date: "2026-06-28",
    dateLabel: "June 28, 2026",
    updatedLabel:
      "Based on the fan-run Community Mapping Project — a reconstruction, not an official Rockstar map.",
    title: "How big is the GTA VI map? The 2.5x figure explained",
    summary:
      "The fan Community Mapping Project now pegs Leonida at roughly 2.5 times the size of GTA V's map — here's where that number comes from and why it's still an estimate, not an official figure.",
    keyPoints: [
      "Fan mapping estimates put Leonida at about 2.5x the size of GTA V.",
      "One widely-shared Reddit calculation lands at ~2.7x with the full area, ~2.4x without the northern panhandle.",
      "The April 2026 revision of the Community Mapping Project added cities, highways, towns and waterways.",
      "It's built from trailer analysis and leaks — Rockstar has not published an official map or size.",
    ],
    body: [
      "The single most-asked GTA VI question finally has a headline number attached: the fan-built Community Mapping Project now estimates Leonida at roughly 2.5 times the size of GTA V's map. That figure has rocketed around the fandom, but it's worth understanding exactly what it is — and isn't.",
      "The number comes from fans painstakingly reconstructing the map from trailer shots, screenshots and leaked data. One widely-cited Reddit calculation put it at about 2.7x GTA V with the full area, or roughly 2.4x if you exclude a northern panhandle region. An April 2026 revision of the mapping project added cities (including the confirmed Vice City), highways, towns, countryside and waterways, making it the clearest picture yet.",
      "None of this is official. Rockstar has never released a full world map or a square-mileage figure, and a Brazilian retailer's description of 'the most massive, dense and insane map ever created' is marketing, not measurement. Treat 2.5x as a well-reasoned fan estimate that could shift before the November 19, 2026 release.",
    ],
    source: {
      title: "GTA 6's Map Is Officially 2.5 Times Bigger Than GTA 5",
      publisher: "CBR",
      url: "https://www.cbr.com/gta-6-map-size-official-confirmation/",
      kind: "Article",
    },
    moreLinks: [
      {
        title: "GTA 6 Map Comparison Confirms Mind-Blowing Scale Of Open-World",
        publisher: "ScreenRant",
        url: "https://screenrant.com/gta-6-map-comparison-open-world-scale/",
        kind: "Article",
      },
      {
        title: "Updated Community Mapping Project comparison",
        publisher: "GamingBible",
        url: "https://www.gamingbible.com/news/gta-6-updated-map-leak-324914-20260414",
        kind: "Article",
      },
      HUB_REDDIT,
    ],
    related: [
      { href: "/setting", label: "GTA VI setting: Vice City & Leonida" },
    ],
  },
  {
    slug: "lucia-and-jason-ending-theories",
    category: "story-speculation",
    date: "2026-06-20",
    dateLabel: "June 20, 2026",
    title: "Where fans think the Lucia & Jason story ends",
    summary:
      "Rockstar calls it a modern outlaw-couple tale — so naturally the community is already theorizing about betrayals, branching endings and whether both leads make it out alive.",
    keyPoints: [
      "The two-protagonist setup has fans predicting player-choice or branching endings.",
      "The 'Bonnie and Clyde' framing fuels tragic-ending and betrayal theories.",
      "None of these outcomes are confirmed — the trailers show setup, not resolution.",
      "Discussion draws heavily on Rockstar's past narrative structures for clues.",
    ],
    body: [
      "Rockstar has framed Lucia and Jason as two people the world has counted out, pulled together and then deeper into a criminal conspiracy across Leonida. That outlaw-couple pitch has the community running wild with story predictions — chief among them, whether the game will hand players a choice over how the pair's story ends.",
      "The most popular threads lean on the 'Bonnie and Clyde' comparison to argue for a tragic or bittersweet finale, while others expect a betrayal beat between the leads or a branching structure echoing past Rockstar games. Frame-counters have combed both trailers for hints of who might turn on whom.",
      "It's worth stressing that all of this is reading tea leaves. The trailers establish character and tone, not plot resolution. Until the game is out, every ending theory — happy, tragic or player-decided — is fan projection, and that's exactly what makes this corner of the fandom fun.",
    ],
    source: {
      title: "Story & ending theory threads on r/GTA6",
      publisher: "Reddit — r/GTA6",
      url: "https://www.reddit.com/r/GTA6/",
      kind: "Subreddit",
    },
    related: [
      { href: "/characters", label: "GTA VI characters: Lucia & Jason" },
    ],
  },
  {
    slug: "trailer-2-hidden-details",
    category: "breakdowns",
    date: "2026-06-15",
    dateLabel: "June 15, 2026",
    title: "The hidden details fans keep finding in Trailer 2",
    summary:
      "Creators have paused Trailer 2 to death — storefront signage, background NPC routines, weather shifts and radio-station Easter eggs are all being catalogued frame by frame.",
    keyPoints: [
      "Detail-hunters focus on background signage, NPC behaviour and reflections.",
      "Many 'finds' are genuine visual details; their gameplay meaning is speculative.",
      "Breakdowns are spread across YouTube and forum screenshot threads.",
      "Nothing here is confirmed by Rockstar as a mechanic or story hint.",
    ],
    body: [
      "The second trailer gave the community a lot more to dissect, and creators wasted no time. Frame-by-frame breakdowns have catalogued storefront names, animal behaviour, dynamic weather, crowd density and reflections — the kind of environmental detail Rockstar is known for obsessing over.",
      "Some finds are clearly real and simply gorgeous world-building. Others get spun into gameplay theories — that a spotted sign implies a purchasable business, or that an NPC routine hints at a living-world system. That leap from 'I can see it' to 'it therefore works like this' is where speculation begins.",
      "If you enjoy this stuff, the breakdown scene is one of the most active parts of the fandom right now. Just keep the line clear in your head between a confirmed visual detail and a fan's interpretation of what it means for the finished game.",
    ],
    source: {
      title: "Trailer 2 frame-by-frame breakdown threads",
      publisher: "GTAForums",
      url: "https://gtaforums.com/forum/401-grand-theft-auto-vi/",
      kind: "Forum",
    },
    moreLinks: [HUB_REDDIT],
    related: [{ href: "/trailers", label: "Watch the official GTA VI trailers" }],
  },
  {
    slug: "will-it-delay-again",
    category: "leaks-rumors",
    date: "2026-06-10",
    dateLabel: "June 10, 2026",
    title: "Will GTA VI get delayed again? What the community thinks",
    summary:
      "After two delays, a chunk of the fandom is bracing for a third — here's the case both sides are making, and why the November 19, 2026 date is the only official one.",
    keyPoints: [
      "The confirmed release date is November 19, 2026 (set on Nov 6, 2025).",
      "Two prior delays have made some fans skeptical of the current date.",
      "Pre-orders opening and a preload date are read by optimists as good signs.",
      "Any 'insider' third-delay claim is unconfirmed rumor until Rockstar speaks.",
    ],
    body: [
      "Grand Theft Auto VI has already moved twice — from a broad 2025 window to May 26, 2026, and then to its current date of November 19, 2026. So it's no surprise that a portion of the community treats every quiet week as a sign a third delay is coming.",
      "The optimists have real momentum on their side lately. Trade reporting in mid-2026 indicated no new delay and a marketing push on track to ramp through the summer, and the business milestones back that up: pre-orders opened on June 25, 2026, with a preload date lined up for November. Studios rarely take those steps unless they intend to hit the date.",
      "Our take for this hub: the only date that matters is the official one, November 19, 2026. Everything else — including any 'my source says' post claiming a new slip — is rumor. We'll keep the factual timeline on the News page and leave the speculation here where it belongs.",
    ],
    source: {
      title: "GTA 6: No Delay or Price, but Marketing on Track for Summer",
      publisher: "Variety",
      url: "https://variety.com/2026/gaming/news/gta-5-no-delay-price-marketing-summer-1236755303/",
      kind: "Article",
    },
    moreLinks: [HUB_REDDIT],
    related: [
      { href: "/news/release-date-november-2026", label: "GTA VI release date: the confirmed facts" },
      { href: "/faq", label: "GTA VI FAQ" },
    ],
  },
  {
    slug: "vice-city-secret-messages",
    category: "conspiracy",
    date: "2026-06-05",
    dateLabel: "June 5, 2026",
    updatedLabel:
      "Filed under Conspiracy Corner — this is for fun, not fact. Nothing here is confirmed.",
    title: "The 'hidden messages in the trailers' rabbit hole",
    summary:
      "Some fans are convinced Rockstar has buried coded dates, ARG-style clues and secret meanings in the GTA VI trailers. It's a fun rabbit hole — and almost certainly just pareidolia.",
    keyPoints: [
      "A small corner of the fandom hunts for 'coded' clues in trailer frames and audio.",
      "Claims include hidden dates, backwards audio and symbolic set-dressing.",
      "Rockstar has never run a confirmed GTA VI alternate-reality game (ARG).",
      "Treat this purely as entertainment — there's no evidence behind it.",
    ],
    body: [
      "Every big Rockstar reveal spawns a conspiracy fringe, and GTA VI is no exception. You'll find posts insisting a specific frame hides a release date, that a background billboard is a coded message, or that reversing a snippet of trailer audio reveals a secret — full alternate-reality-game energy.",
      "It's a genuinely fun rabbit hole, and pattern-spotting is half the joy of a hype cycle this long. But it's worth being honest: Rockstar has never confirmed an official GTA VI ARG, and the overwhelming majority of these 'discoveries' are pareidolia — our brains finding signals in noise.",
      "We keep this stuff quarantined in Conspiracy Corner for a reason. Enjoy the theories, share the wild ones, but don't mistake a compelling edit for confirmation. When Rockstar actually hides something, it usually wants you to find it.",
    ],
    source: {
      title: "Theory & 'hidden clue' threads on r/GTA6",
      publisher: "Reddit — r/GTA6",
      url: "https://www.reddit.com/r/GTA6/",
      kind: "Subreddit",
    },
  },
  {
    slug: "where-the-community-lives",
    category: "community-hubs",
    date: "2026-06-01",
    dateLabel: "June 1, 2026",
    updatedLabel: "Evergreen — the go-to list of active GTA VI community spaces.",
    title: "Where the GTA VI community actually hangs out",
    summary:
      "New to the countdown? Here are the biggest, most active places fans gather to theorize, break down trailers and argue about the release date.",
    keyPoints: [
      "r/GTA6 is the largest general-purpose GTA VI discussion hub.",
      "GTAForums hosts long-running, deeply detailed analysis threads.",
      "Most 'breaking' fan discussion starts in one of these two places.",
      "Always sanity-check hot takes against the official News page.",
    ],
    body: [
      "If you want to plug into the conversation rather than just read about it, a couple of destinations do most of the heavy lifting. The r/GTA6 subreddit is the fast-moving town square — trailers, memes, theories and release-date anxiety all in one feed.",
      "GTAForums is the older, slower, more thorough counterpart: it's where the frame-by-frame detail threads and years-deep analysis tend to live. Between the two, you'll catch nearly every notable fan discovery and debate.",
      "Our one bit of advice: treat these spaces as the idea factory, not the record of truth. When something big 'breaks' in a thread, cross-check it against our News page, which only tracks confirmed Rockstar information. Hype is best enjoyed with a foot on the ground.",
    ],
    source: HUB_REDDIT,
    moreLinks: [
      HUB_FORUMS,
      {
        title: "Grand Theft Auto VI — official site",
        publisher: "Rockstar Games",
        url: "https://www.rockstargames.com/VI",
        kind: "Article",
      },
    ],
    related: [{ href: "/news", label: "Confirmed GTA VI news (official only)" }],
  },
  {
    slug: "story-length-75-hour-leak",
    category: "story-speculation",
    date: "2026-06-25",
    dateLabel: "June 25, 2026",
    updatedLabel:
      "Traces back to an unverified insider post — Rockstar has confirmed none of it.",
    title: "The '75-hour, five-chapter' story leak, explained",
    summary:
      "A viral leak claims GTA VI's campaign runs 75 hours across five chapters, with specific backstories for Jason and Lucia. It's the most detailed story rumor going — and completely unconfirmed.",
    keyPoints: [
      "The 75-hour figure comes from an anonymous 2025 insider post on X (user 'remus_r').",
      "It describes a prologue plus five chapters escalating from ~2 to ~22 hours each.",
      "It alleges Jason is a former Latin America black-ops soldier and Lucia's arc is cartel revenge.",
      "Other insiders peg the campaign at 45–50 hours; Rockstar has confirmed nothing.",
    ],
    body: [
      "If you've seen 'GTA VI is 75 hours long' as a confident headline, this is where it started: an anonymous insider post attributed to the X user 'remus_r' in August 2025, which spread rapidly across gaming press and has resurfaced with every hype spike since.",
      "The leak is unusually specific. It lays out a roughly 75-hour main story split into a prologue and five chapters — climbing from around two hours to a 22-hour fourth chapter — and claims plot beats such as Jason being a former black-ops soldier from Latin America and Lucia pursuing revenge after her father is killed by a cartel, with the ending set outside the US.",
      "That specificity is exactly why to stay skeptical. Competing insider reporting generally puts the campaign closer to 45–50 hours, and Rockstar has not confirmed a runtime, a chapter count or any of these character details. Treat the whole thing as a compelling rumor to enjoy, not a spoiler to trust.",
    ],
    source: {
      title: "GTA 6 Rumored Runtime Compared To All Other Grand Theft Auto Games",
      publisher: "ScreenRant",
      url: "https://screenrant.com/gta-6-main-story-runtime-leak/",
      kind: "Article",
    },
    moreLinks: [
      {
        title: "GTA 6 Story Length Leak — Longest Game Rockstar Has Ever Done",
        publisher: "GamingBible",
        url: "https://www.gamingbible.com/news/gta-6-story-length-leak-longest-game-063981-20250805",
        kind: "Article",
      },
      HUB_REDDIT,
    ],
    related: [{ href: "/characters", label: "GTA VI characters: Lucia & Jason" }],
  },
  {
    slug: "is-gta6-a-100-dollar-game",
    category: "debates",
    date: "2026-06-30",
    dateLabel: "June 30, 2026",
    title: "Is GTA VI really a $100 game? The Ultimate Edition backlash",
    summary:
      "The $99.99 Ultimate Edition — and the in-game shops, cars and gear locked to it — has kicked off the fandom's loudest argument yet about GTA VI's price.",
    keyPoints: [
      "The Ultimate Edition is $99.99; the Standard is $79.99 (US pricing).",
      "Backlash centers on exclusive shops, vehicles and mods locked to the pricier edition.",
      "Physical buyers get a download code in the box, not a disc — a second sore point.",
      "Some fans dodged the cost entirely by stockpiling Microsoft Rewards points.",
    ],
    body: [
      "When pre-orders opened on June 25, 2026, the price tags did as much talking as the game. The $99.99 Ultimate Edition, sitting above the $79.99 Standard, became a lightning rod — and outlets from Kotaku to Collider have chronicled the fallout as fans debate whether GTA VI is effectively a $100 game.",
      "The sharpest complaint isn't the number itself but what's behind it: the Ultimate Edition locks away exclusive in-game businesses, vehicles, weapons and mods that Standard buyers can't access at all. Add the fact that the boxed 'physical' copy contains a download code rather than a disc, and a chunk of the community feels the value proposition is upside down.",
      "It hasn't been all anger. In a very GTA twist, some players gamed the system right back — stockpiling Microsoft Rewards points during the long delays and effectively pre-ordering the Ultimate Edition for free. For the confirmed, non-speculative breakdown of what each edition actually includes, see our editions guide.",
    ],
    source: {
      title:
        "Fans Debate If GTA 6 Is Actually A $100 Game As Anger Grows Over The Ultimate Edition",
      publisher: "Kotaku",
      url: "https://kotaku.com/fans-debate-if-gta-6-is-actually-a-100-game-as-anger-grows-around-the-ultimate-edition-locking-content-away-2000710588",
      kind: "Article",
    },
    moreLinks: [
      {
        title: "'GTA 6' Controversy Explodes Just Months Before Release",
        publisher: "Collider",
        url: "https://collider.com/gta-6-outrage-fans-social-media/",
        kind: "Article",
      },
      HUB_REDDIT,
    ],
    related: [
      { href: "/editions", label: "GTA VI editions & price: Standard vs Ultimate" },
    ],
  },
  {
    slug: "how-long-should-the-story-be",
    category: "debates",
    date: "2026-06-22",
    dateLabel: "June 22, 2026",
    title: "30 hours or 75? Fans can't agree on the ideal story length",
    summary:
      "Sparked by the 75-hour leak, the community has split into camps — some want a tight, GTA V-style campaign, others want the longest Rockstar story ever. Here's the argument.",
    keyPoints: [
      "One camp wants a focused 30–40 hour story, closer to GTA V's pacing.",
      "Another wants a sprawling 60–75 hours in the Red Dead Redemption 2 mould.",
      "The debate was reignited by the unverified 75-hour campaign leak.",
      "It's a matter of taste — there's no 'correct' answer and nothing is confirmed.",
    ],
    body: [
      "Every big rumor spawns a debate, and the 75-hour story leak split the fandom cleanly in two. On one side are players who loved GTA V's relatively tight, propulsive campaign — roughly 30-plus hours — and worry a 75-hour story would sag under padding and filler.",
      "On the other are fans who point to Red Dead Redemption 2 as proof Rockstar can sustain a much longer, slower-burning epic, and who'd happily sink 60–75 hours into Leonida if the quality holds. Both sides are really arguing about pacing philosophy as much as raw hours.",
      "There's no resolving this one — it's a taste debate dressed up as a numbers debate, and it rests on a runtime Rockstar has never confirmed. But it's a great window into what people actually want from the game, which is half of why the wait is so loud.",
    ],
    source: {
      title: "GTA 6 splits fans already: should its story be 30 or 75 hours?",
      publisher: "Softonic",
      url: "https://en.softonic.com/articles/gta-6-splits-fans-already-should-its-story-be-30-or-75-hours",
      kind: "Article",
    },
    moreLinks: [HUB_REDDIT],
    related: [
      { href: "/community/story-length-75-hour-leak", label: "The 75-hour story leak, explained" },
    ],
  },
  {
    slug: "launch-week-contract-meme",
    category: "debates",
    date: "2026-06-18",
    dateLabel: "June 18, 2026",
    title: "The viral GTA VI 'launch week contract' taking over feeds",
    summary:
      "A tongue-in-cheek 'contract' laying down household rules for GTA VI launch week has gone viral — the fandom's way of bracing loved ones for November 19.",
    keyPoints: [
      "A joke 'contract' sets ground rules for the November 19–29 launch window.",
      "Sample clauses: don't walk in front of the TV, save chores for pause screens.",
      "It's pure fan humor — a meme, not anything official from Rockstar.",
      "It captures just how much anticipation has built during the long wait.",
    ],
    body: [
      "Not every trending topic is a leak. One of the most-shared GTA VI posts lately is a tongue-in-cheek 'launch week contract' — a mock agreement fans are jokingly presenting to partners and roommates to survive the November 19 release.",
      "The clauses are the joke: no walking in front of the TV during missions, no non-essential requests mid-heist, chores deferred to whenever the game is paused, and a general amnesty for the launch fortnight. It's a lighthearted way to say the quiet part out loud about how much time people plan to sink into Leonida.",
      "We're filing it here because it's a perfect snapshot of the fandom's mood: three years of waiting distilled into a meme. No, it isn't official, and no, it won't hold up in court — but it might just save a relationship or two come launch night.",
    ],
    source: {
      title: "GTA 6 launch-week contract goes viral ahead of its November 2026 release",
      publisher: "Softonic",
      url: "https://en.softonic.com/articles/gta-6-launch-week-contract-goes-viral-ahead-of-its-november-2026-release",
      kind: "Article",
    },
    moreLinks: [HUB_REDDIT],
  },
];

/* ---------------------------------------------------------------------------
 * Vehicles shown in the official GTA VI trailers.
 *
 * Rockstar has NOT published an official GTA VI vehicle list or names. Every
 * entry below is a vehicle that visibly appears in an official Rockstar trailer;
 * the names are the vehicles' established Grand Theft Auto in-game brands as
 * identified from the trailer footage, and the "inspiration" is the real-world
 * car each design echoes. Details may change before launch. The trailers
 * themselves (linked on the page) are the source.
 * ------------------------------------------------------------------------- */

export type VehicleClass = {
  slug: string;
  label: string;
  blurb: string;
  /** Tailwind gradient classes for the placeholder card banner. */
  accent: string;
};

/** Vehicle categories, in the order they appear on the page. */
export const vehicleClasses: VehicleClass[] = [
  {
    slug: "super",
    label: "Supercars & Sports",
    blurb: "High-end exotics and sports cars glimpsed tearing through Leonida.",
    accent: "from-pink to-orange",
  },
  {
    slug: "muscle",
    label: "Muscle Cars",
    blurb: "American muscle — including the magenta hero car that closes both trailers.",
    accent: "from-orange to-pink",
  },
  {
    slug: "classic",
    label: "Classics & Luxury",
    blurb: "Vintage cruisers and drop-top luxury in classic Vice City style.",
    accent: "from-purple to-pink",
  },
  {
    slug: "suv",
    label: "SUVs & 4x4s",
    blurb: "Full-size SUVs and body-on-frame haulers seen in traffic.",
    accent: "from-teal to-purple",
  },
  {
    slug: "truck",
    label: "Trucks & Off-Road",
    blurb: "Pickups and off-roaders built for Leonida's back roads and swamps.",
    accent: "from-orange to-teal",
  },
  {
    slug: "motorcycle",
    label: "Motorcycles",
    blurb: "Two wheels — from a lean chopper to a dirt bike.",
    accent: "from-pink to-purple",
  },
  {
    slug: "boat",
    label: "Boats",
    blurb: "Watercraft for Leonida's coast, canals and wetlands.",
    accent: "from-teal to-pink",
  },
];
