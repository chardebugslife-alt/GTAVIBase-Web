/**
 * Editorial content for the site. Kept as plain data so it can drive both the
 * rendered pages and the structured data (JSON-LD) without drifting apart.
 *
 * Everything here is based on Rockstar Games' official reveals (Trailer 1, Dec
 * 2023; Trailer 2, May 2025). We deliberately avoid unconfirmed leaks.
 */

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
