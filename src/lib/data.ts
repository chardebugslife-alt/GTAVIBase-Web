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
    updatedLabel:
      "The complete release-date timeline — kept current through every change Rockstar makes.",
    title: "GTA VI Release Date: November 19, 2026 — and the Long Road There",
    summary:
      "Grand Theft Auto VI launches on Thursday, November 19, 2026. Here's the full story of how Rockstar arrived at that date — the reveal, the two delays, the platforms and the pre-order milestones that suggest this date will hold.",
    image: `${CDN}/ak3ak31a49a221/c8c033070a0bfb2e3ec6ae7ff047ebe8ec551326.jpg`,
    imageAlt: "Grand Theft Auto VI key art",
    imageCredit: "© Rockstar Games",
    imageCreditUrl:
      "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
    keyPoints: [
      "GTA VI's release date is Thursday, November 19, 2026.",
      "That date was set on November 6, 2025 — the game's second delay.",
      "It first moved from a broad 2025 window, then from May 26, 2026.",
      "Platforms are PlayStation 5 and Xbox Series X|S; no PC version at launch.",
      "Pre-orders opened June 25, 2026, with preload lined up for November 12, 2026.",
    ],
    body: [
      "Grand Theft Auto VI has a release date: Thursday, November 19, 2026. Rockstar Games confirmed it on November 6, 2025, and it is the date every countdown, pre-order and marketing beat now points to. But getting to a single day on the calendar took nearly two years and two separate delays, and understanding that path is the best way to judge how solid this date really is.",
      "The journey began at the reveal. When Rockstar unveiled Grand Theft Auto VI with its first trailer in December 2023, the studio attached only a broad target: 2025. That was enough to set expectations sky-high after more than a decade without a mainline entry, but it was a window, not a date — and windows have a way of moving.",
      "The first hard date arrived alongside the second trailer. On May 6, 2025, Rockstar released Trailer 2 and, in the same announcement, narrowed the launch to a specific day: May 26, 2026. For the first time, fans had something concrete to plan around, and the reveal reconfirmed the game's platforms and positioned it as the defining release of the console generation.",
      "That date did not hold. On November 6, 2025, Rockstar announced the game would slip again — this time to November 19, 2026, a delay of just under six months. In its statement the studio framed the move as a matter of polish, saying the extra time would let the team finish Grand Theft Auto VI to the standard players expect, and it thanked fans for their patience during an already long wait.",
      "Landing on a Thursday in late November is telling. It places GTA VI squarely inside the holiday sales window, the most lucrative stretch of the retail year for games, and a mid-week launch is a familiar Rockstar pattern that gives retailers and servers a run-up before the first weekend. None of that is stated by Rockstar as strategy, but it fits how blockbuster games are timed.",
      "The platforms have never wavered. Grand Theft Auto VI launches on PlayStation 5 and Xbox Series X|S, exactly as announced at the December 2023 reveal, and Rockstar has not announced a PC version for launch. If history is any guide, a PC edition is likely to follow the console release rather than ship alongside it — that was the pattern for both Grand Theft Auto V and Red Dead Redemption 2 — but nothing has been confirmed.",
      "Several business milestones now suggest the November 19 date is firm rather than aspirational. Pre-orders opened on June 25, 2026, with every order placed before November 20, 2026 including the Vintage Vice City Pack bonus, and Rockstar has lined up a preload date of November 12, 2026 so players can download ahead of launch night. Studios rarely open pre-orders and schedule preloads unless they intend to hit the date attached to them.",
      "It is also worth remembering that a Rockstar delay is not the warning sign it would be for many studios. Red Dead Redemption 2 was itself pushed twice — from an original late-2017 target into 2018 — before shipping to some of the best reviews of its generation. Rockstar has built a reputation on releasing late but polished, and the GTA VI delays read as an extension of that same philosophy rather than a sign of trouble.",
      "The bottom line for anyone counting down: the only official release date is Thursday, November 19, 2026, on PlayStation 5 and Xbox Series X|S. Any other date you see — an earlier leak, a retailer placeholder, a confident 'insider' claim of a new slip — is not official until Rockstar says so. We track this timeline on this page and update it the moment anything changes, so you always have the confirmed picture in one place.",
    ],
    sources: [
      {
        title: "Grand Theft Auto VI is Now Set to Launch November 19, 2026",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
      },
      {
        title: "Grand Theft Auto VI is Now Coming May 26, 2026 (superseded)",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/258aa538o412ok/grand-theft-auto-vi-is-now-coming-may-26-2026",
      },
      RS_VI,
    ],
    related: [
      { href: "/editions", label: "GTA VI editions & price: Standard vs Ultimate" },
      { href: "/faq", label: "GTA VI FAQ" },
      { href: "/community/will-it-delay-again", label: "Will GTA VI get delayed again?" },
    ],
  },
  {
    slug: "trailer-2-released",
    date: "2025-05-06",
    dateLabel: "May 6, 2025",
    updatedLabel:
      "A guide to both official GTA VI trailers — updated as Rockstar releases more.",
    title: "GTA VI Trailers: Both Official Trailers, Explained",
    summary:
      "Rockstar has released two official Grand Theft Auto VI trailers so far — the December 2023 reveal and the longer May 2025 follow-up. Here's what each one showed, what they establish together, and what Rockstar is still holding back.",
    image: `${CDN}/3928aaa9471o3a/87db5089306344e0854cffb1b3bf15e6d71b465b.jpg`,
    imageAlt: "Grand Theft Auto VI Trailer 2 still",
    imageCredit: "© Rockstar Games",
    imageCreditUrl:
      "https://www.rockstargames.com/newswire/article/3928aaa9471o3a/grand-theft-auto-vi-watch-trailer-2-now",
    keyPoints: [
      "Two official trailers have been released: December 2023 and May 6, 2025.",
      "Trailer 1 revealed the return to Vice City and introduced Lucia.",
      "Trailer 2 ran longer, introduced Jason and widened the view of Leonida.",
      "Both are scored with licensed music, including Tom Petty in the reveal.",
      "Neither trailer shows gameplay, menus or the map — that is still to come.",
    ],
    body: [
      "For all the anticipation around Grand Theft Auto VI, the official footage still comes down to just two trailers — the December 2023 reveal and a longer follow-up in May 2025. Everything Rockstar Games has formally shown of the game lives in those two videos, which makes them worth watching closely rather than once. Here is what each established, and what they add up to.",
      "The first trailer arrived in December 2023 and ended years of speculation in ninety seconds. It confirmed the long-rumoured return to Vice City, now set inside a broader modern-day state called Leonida — Rockstar's reimagining of Florida. It introduced Lucia, established from the outset as the first female protagonist in a mainline Grand Theft Auto, and set its montage of sun, crime and excess to Tom Petty's 'Love Is a Long Road.' The tone was immediate: neon and beaches on the surface, desperation and hustle underneath.",
      "That reveal did more than show a game; it reset expectations for what a trailer could be. Rockstar leaned into a social-media, influencer-saturated version of Leonida — livestreams, phone footage, mugshots and memes — signalling that GTA VI would hold a mirror to the present day the way earlier entries satirised their own eras. It was a statement of intent as much as a preview.",
      "The second trailer followed on May 6, 2025, and it was a different kind of video: longer, calmer and more character-driven. Where the reveal was a mood piece, Trailer 2 spent real time on people. It fleshed out Lucia and formally introduced her partner Jason, framing the pair as a modern outlaw couple, and it widened the lens across Leonida — from Vice City's beaches and nightlife to the swamps, keys and small towns that ring it. Rockstar again scored the footage with licensed tracks, reinforcing the game's strong musical identity.",
      "Crucially, the second trailer landed alongside a release date, tying the creative reveal to a concrete business moment. That pairing — new footage plus a date — is how Rockstar tends to escalate a campaign, and it turned Trailer 2 into the point where GTA VI stopped being an abstract 'someday' and became something fans could mark on a calendar.",
      "Taken together, the two trailers establish the pillars of the game with real confidence. The setting is Vice City within the wider state of Leonida. The structure is a dual-protagonist story built around Lucia and Jason. The tone is a glossy, satirical, deeply lived-in take on contemporary America. And the technical ambition is obvious in every frame — crowd density, weather, reflections and small environmental details that fans have spent months pausing and dissecting.",
      "Just as telling is what the trailers deliberately withhold. There is no gameplay footage, no heads-up display, no mission structure, no menus and no world map. That restraint is a Rockstar signature: the studio reveals character and world long before it reveals systems, keeping the how-you-play conversation for later in the campaign. It means that almost everything about mechanics — however confidently stated elsewhere — remains unconfirmed until Rockstar chooses to show it.",
      "Both trailers remain available in full on Rockstar's official YouTube channel and on the Grand Theft Auto VI section of the Rockstar Games website. If you want to see the footage rather than read about it — and to catch the details the community keeps finding — you can watch both, embedded and in order, on our dedicated trailers page.",
    ],
    sources: [
      {
        title: "Grand Theft Auto VI — Watch Trailer 2 Now",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/3928aaa9471o3a/grand-theft-auto-vi-watch-trailer-2-now",
      },
      {
        title: "Grand Theft Auto VI — Watch Trailer 1 Now",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/8978kok9385a82/grand-theft-auto-vi-watch-trailer-1-now",
      },
      RS_VI,
    ],
    related: [
      { href: "/trailers", label: "Watch both official GTA VI trailers" },
      { href: "/community/trailer-2-hidden-details", label: "Hidden details fans keep finding in Trailer 2" },
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
      "GTA VI has two playable protagonists — a mainline series first for a duo.",
      "Lucia Caminos is the first female lead in a mainline Grand Theft Auto.",
      "Her counterpart is Jason Duval, whom she partners with in Leonida.",
      "Rockstar frames their story as a modern outlaw couple against the odds.",
      "Full backstories, voice cast and how you switch between them are unconfirmed.",
    ],
    body: [
      "Grand Theft Auto VI puts two playable protagonists at the center of its story — Lucia Caminos and Jason Duval — and in doing so marks a genuine first for the series. Grand Theft Auto V famously let players switch between three leads, but GTA VI is the first mainline entry built around a two-hander, a criminal couple whose relationship is the spine of the whole game. It is also, more significantly, the first mainline Grand Theft Auto with a woman in a lead role.",
      "Lucia is introduced first and introduced pointedly: the reveal trailer opens with her inside a Leonida correctional facility before following her out into the world. Rockstar paints her as sharp, loyal and pragmatic — someone who has spent her life with the odds stacked against her and is done accepting them. That framing does a lot of work in a few seconds, establishing both her circumstances and the survivor's edge that drives her decisions once she and Jason start taking risks together.",
      "Jason is the other half of the equation. Rockstar has placed him in the Leonida Keys when we first meet him, and the material around him sketches a man who grew up among grifters and chancers, knows his way around a gun, and is looking for a way out of a life that keeps pulling him back in. He is less the wide-eyed newcomer and more the weary operator — a contrast to Lucia's hunger that gives the pairing its friction and its chemistry.",
      "That chemistry is the point. Rockstar has repeatedly framed the two as a modern outlaw couple, a Bonnie-and-Clyde dynamic transplanted into a contemporary, social-media-soaked Leonida. The setup the studio describes is deceptively simple — two people the world has counted out, drawn together and then pulled into a criminal conspiracy that stretches across the state — but it reframes the entire Grand Theft Auto formula around a relationship rather than a lone climber. The question the game seems built to ask is not just 'can they get rich,' but 'can they hold on to each other while they try.'",
      "The significance of a female lead is hard to overstate for a series this size. Every previous mainline Grand Theft Auto protagonist — from Claude and Tommy Vercetti to CJ, Niko Bellic and the GTA V trio — has been a man. Putting Lucia at the front, and making her a fully co-equal lead rather than a supporting figure, is the most consequential change to the series' point of view in its history, and it reshapes the kind of story Rockstar can tell.",
      "A two-protagonist structure also opens design questions the trailers do not answer. GTA V's three-way switching let players jump between characters mid-mission and live separate lives between jobs; a two-hander built around a couple could work very differently, leaning into shared scenes, split perspectives or moments where the pair are apart and the player chooses who to be. Rockstar has shown the relationship without showing the mechanics, so exactly how you move between Lucia and Jason remains one of the most interesting unknowns.",
      "It is worth being clear about where confirmed information ends. Rockstar has established who Lucia and Jason are, where they start and the shape of their bond, but it has not published full biographies, confirmed a voice cast, or detailed how the switching system, missions or endings work. A great deal of confident 'detail' circulating online — specific backstories, chapter counts, who betrays whom — traces back to leaks and insider posts, not to Rockstar. We keep that material in our clearly labelled community section rather than presenting it as fact.",
      "For the confirmed character breakdowns, including the details Rockstar has shown of each lead, see our full characters guide. And if you want to follow where the fandom thinks the Lucia-and-Jason story is heading — the ending theories, the betrayal predictions and the story-length debate — our community section tracks those conversations while keeping them firmly separated from what has actually been confirmed.",
    ],
    sources: [
      RS_VI,
      {
        title: "Grand Theft Auto VI — Watch Trailer 2 Now",
        publisher: "Rockstar Games Newswire",
        url: "https://www.rockstargames.com/newswire/article/3928aaa9471o3a/grand-theft-auto-vi-watch-trailer-2-now",
      },
    ],
    related: [
      { href: "/characters", label: "GTA VI characters: Lucia & Jason in full" },
      { href: "/community/lucia-and-jason-ending-theories", label: "Where fans think the story ends" },
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
      "GTA VI launches on PlayStation 5 and Xbox Series X|S — current-gen only.",
      "No PC version has been announced for the initial release.",
      "Two editions: Standard ($79.99) and Ultimate ($99.99), US pricing.",
      "Pre-orders opened June 25, 2026, with the Vintage Vice City Pack bonus.",
      "A preload date of November 12, 2026 precedes the November 19 launch.",
    ],
    body: [
      "Rockstar Games has been consistent about where Grand Theft Auto VI will run: PlayStation 5 and Xbox Series X|S. Those two platforms were named at the December 2023 reveal and reaffirmed with every announcement since, and just as important is what is not on the list — the last-generation PlayStation 4 and Xbox One. Unlike Grand Theft Auto V, which launched on the hardware of its day and was later ported forward, GTA VI is a current-generation title from the start.",
      "That decision matters more than it might seem. Building only for PS5 and Xbox Series X|S frees Rockstar from the compromises of older hardware — slower storage, less memory, weaker CPUs — and lets the studio target the crowd density, draw distance, weather and simulation detail that the trailers show off. A game designed around a single generation of consoles can push that hardware harder than one that has to also run on machines from 2013.",
      "The most common platform question is about PC, and the honest answer is that Rockstar has not announced a PC version for launch. History offers a strong hint without a promise: Grand Theft Auto V arrived on consoles in September 2013 but did not reach PC until April 2015, and Red Dead Redemption 2 followed a similar path, landing on PC about a year after its console debut. A GTA VI PC edition is widely expected to come eventually — but 'eventually' is not a date, and anyone claiming a confirmed PC launch window is going beyond what Rockstar has said.",
      "On editions, Rockstar has kept things relatively simple with two tiers. The Standard Edition is the complete game at $79.99 (US digital pricing), while the Ultimate Edition sits at $99.99 and layers premium in-game content on top — bonus vehicles, personalized weapons, exclusive apparel and tattoos, a pair of Ultimate-only businesses to visit in-game, and a month of GTA+ membership with digital purchases. Both editions also include the Vintage Vice City Pack as a pre-order bonus.",
      "There is a wrinkle worth knowing on physical copies. The Standard Edition is sold as a boxed product, but the box contains a download code rather than a game disc, and the Ultimate Edition is digital only. In practice, then, GTA VI is effectively a digital-first release regardless of which edition you choose — the 'physical' option is really a boxed license, not a disc you install from.",
      "The commercial calendar around the game is now well defined. Pre-orders opened on June 25, 2026, and every pre-order placed before November 20, 2026 includes the Vintage Vice City Pack. Rockstar has also set a preload date of November 12, 2026, a week ahead of launch, so players can download the game in advance and be ready to play the moment it unlocks on November 19. Those dates are the kind of concrete milestone that tends to signal a studio is confident in its release window.",
      "Pricing has been its own story. The $79.99 Standard price continues the industry's move toward a higher baseline for flagship games, and the $99.99 Ultimate Edition — along with the fact that some content is locked behind it — sparked a loud debate among fans about whether GTA VI is, in effect, a $100 game. That argument is a matter of value and taste rather than fact, so we cover it in our community section rather than here.",
      "A few things remain genuinely unconfirmed: a PC release date, the finer points of regional pricing, and how and when the online component of the GTA VI ecosystem will arrive. For the full side-by-side of what each edition includes, the pre-order bonus and the physical-versus-digital details, see our editions and price guide, and check our FAQ for quick answers to the platform questions we get asked most.",
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
      "The single most-asked GTA VI question finally has a headline number attached: the fan-built Community Mapping Project now estimates Leonida at roughly 2.5 times the size of GTA V's map. That figure has rocketed around the fandom, appearing in headlines and thumbnails as though it were confirmed. It isn't — so it's worth understanding exactly what the number is, where it comes from, and why the honest answer is still 'we don't really know.'",
      "First, some context on why this question dominates every GTA VI discussion. Map size has become shorthand for ambition. Grand Theft Auto V's Los Santos and Blaine County felt enormous in 2013 and stayed the backbone of a game people played for over a decade. So when fans ask how big Leonida is, they're really asking how many years of exploration Rockstar is promising — and after a wait this long, they want that promise to be huge.",
      "The 2.5x figure comes from the Community Mapping Project, a fan effort to reconstruct Leonida from trailer shots, background details, screenshots and leaked material. It is genuinely impressive detective work, but it is reconstruction, not a blueprint. One widely-shared Reddit calculation landed at about 2.7 times GTA V using the full projected area, or roughly 2.4 times if you exclude a debated northern panhandle region — which is where the round '2.5x' everyone quotes actually comes from. An April 2026 revision added cities including the confirmed Vice City, plus highways, towns, countryside and waterways, making it the most complete fan picture yet.",
      "Here's the catch that headlines skip: raw area is the least interesting measure of a Grand Theft Auto map, and the easiest to get wrong. A map can be technically large but mostly empty water or repetitive countryside, or it can be smaller on paper yet denser and more detailed than anything before it. Rockstar itself has historically cared far more about density — how much there is to do per square mile — than about a big number on a box. A Leonida that is '2.5x bigger' but packed with interiors, activities and living detail would feel vastly larger than the ratio suggests.",
      "There's also the water problem. Estimates that include large stretches of ocean, the Leonida Keys and Everglades-style wetlands can inflate the total dramatically, even though much of that space is traversed by boat rather than explored on foot. Whether you count that area is a big part of why fan figures swing between roughly 2x and nearly 3x. There is no single 'correct' way to draw the boundary, which is exactly why the estimates disagree.",
      "What is actually confirmed is narrower but solid: GTA VI returns to Vice City within the wider state of Leonida, a modern-day reimagining of Florida, and the two trailers show a clear mix of dense urban sprawl, coastline, keys and backcountry swamp. Rockstar has described its ambitions for the world in glowing terms, and a retailer listing that called it 'the most massive, dense and insane' map the studio has built made the rounds — but that is marketing copy, not a measurement, and it should be read as such.",
      "So treat 2.5x as a well-reasoned fan estimate, not a fact. It could tighten or shift the moment Rockstar shows an official map, which the studio has not yet done. If you want the confirmed picture of where the game is set — Vice City, the Keys, the wetlands and the towns of Leonida — our setting guide sticks to what Rockstar has actually shown, and we'll update this post the day a real map or size figure arrives.",
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
    updatedLabel:
      "A roundup of the story speculation — endings, the runtime leak and the length debate. All unconfirmed.",
    title: "GTA VI Story Theories: Endings, Length and Where Fans Think It's Going",
    summary:
      "Rockstar calls it a modern outlaw-couple tale — so the community is already deep into theories about betrayals, branching endings, a leaked 75-hour runtime and whether the campaign should even be that long. Here's the whole conversation, clearly marked as speculation.",
    keyPoints: [
      "The two-protagonist setup has fans predicting player-choice or branching endings.",
      "The 'Bonnie and Clyde' framing fuels tragic-ending and betrayal theories.",
      "A viral leak claims a ~75-hour, five-chapter campaign — Rockstar has confirmed nothing.",
      "Fans are split on whether a 30-hour or 75-hour story would be better.",
      "None of this is official: the trailers show setup and tone, not plot resolution.",
    ],
    body: [
      "Rockstar has framed Lucia and Jason as two people the world has counted out, pulled together and then deeper into a criminal conspiracy across Leonida. That outlaw-couple pitch has the community running wild with story predictions, and the speculation has since spilled well past the ending into questions of runtime and structure. This post gathers the whole conversation in one place — and every word of it is fan theory, not fact.",
      "Start with the endings, because that's where the theorizing began. The most popular threads lean on the 'Bonnie and Clyde' comparison to argue for a tragic or bittersweet finale, the kind of doomed-romance ending the framing seems to invite. Others expect a betrayal beat between the two leads, or a branching structure that lets the player decide how the pair's story closes — an idea fuelled by memories of the multiple-ending choice at the climax of Grand Theft Auto V. Frame-counters have combed both trailers for hints of who might turn on whom, though what they're really finding is tone, not spoilers.",
      "Then came the runtime leak, which poured fuel on everything. A viral, unverified claim — traced back to an anonymous 2025 insider post attributed to the X user 'remus_r' — describes a roughly 75-hour main story split into a prologue and five chapters, escalating from around two hours to a 22-hour fourth chapter. The same leak alleges specific character beats, such as Jason being a former black-ops soldier from Latin America and Lucia pursuing revenge after her father is killed by a cartel, with the finale set outside the United States. It is unusually detailed, which is precisely why to be skeptical: competing insider reports put the campaign closer to 45–50 hours, and Rockstar has confirmed neither a runtime nor a chapter count nor any of these plot claims.",
      "That leak, in turn, kicked off a genuinely fun taste debate: how long should the story even be? One camp wants a focused 30–40 hour campaign in the propulsive mould of GTA V, and worries that 75 hours would sag under padding and filler. The other points to Red Dead Redemption 2 as proof Rockstar can sustain a much longer, slower-burning epic, and would happily sink 60–75 hours into Leonida if the quality holds. Both sides are really arguing about pacing philosophy dressed up as a numbers argument — and since the underlying runtime is unconfirmed, neither can win.",
      "What ties these threads together is a single healthy reminder: the trailers establish character and tone, not plot resolution. We know who Lucia and Jason are and the shape of their bond. We do not know how their story is structured, how long it runs, or how it ends — and anyone presenting those as settled is repeating a leak, not reporting a fact. That's the exact line this community section exists to hold.",
      "So enjoy all of it — the tragic-ending predictions, the chapter-by-chapter leak breakdowns, the 30-versus-75 arguments. Speculating through a long wait is half the fun of being a fan. Just keep the mental label attached: this is what the community thinks, not what Rockstar has said. For the confirmed character details underneath all the theorizing, our characters guide sticks strictly to what's official.",
    ],
    source: {
      title: "Story & ending theory threads on r/GTA6",
      publisher: "Reddit — r/GTA6",
      url: "https://www.reddit.com/r/GTA6/",
      kind: "Subreddit",
    },
    moreLinks: [
      {
        title: "GTA 6 Rumored Runtime Compared To All Other Grand Theft Auto Games",
        publisher: "ScreenRant",
        url: "https://screenrant.com/gta-6-main-story-runtime-leak/",
        kind: "Article",
      },
      {
        title: "GTA 6 splits fans already: should its story be 30 or 75 hours?",
        publisher: "Softonic",
        url: "https://en.softonic.com/articles/gta-6-splits-fans-already-should-its-story-be-30-or-75-hours",
        kind: "Article",
      },
    ],
    related: [
      { href: "/characters", label: "GTA VI characters: Lucia & Jason" },
      { href: "/news/protagonists-lucia-and-jason", label: "The confirmed facts on the two protagonists" },
    ],
  },
  {
    slug: "trailer-2-hidden-details",
    category: "breakdowns",
    date: "2026-06-15",
    dateLabel: "June 15, 2026",
    title: "Hidden Details & Secret Messages: The GTA VI Trailer Rabbit Hole",
    summary:
      "Creators have paused both trailers to death — storefront signage, NPC routines and weather shifts frame by frame, plus a wilder fringe convinced Rockstar buried coded dates and ARG-style clues. Here's what's real, what's a stretch, and how to tell them apart.",
    keyPoints: [
      "Detail-hunters focus on background signage, NPC behaviour and reflections.",
      "Many 'finds' are genuine visual details; their gameplay meaning is speculative.",
      "A fringe hunts for 'coded' dates, backwards audio and hidden ARG clues.",
      "Rockstar has never confirmed an official GTA VI alternate-reality game.",
      "Nothing here is confirmed as a mechanic, story hint or secret message.",
    ],
    body: [
      "Both GTA VI trailers gave the community an enormous amount to dissect, and creators wasted no time. Frame-by-frame breakdowns have catalogued storefront names, animal behaviour, dynamic weather, crowd density and reflections — the kind of obsessive environmental detail Rockstar is famous for. Watching those breakdowns is genuinely rewarding; the trailers reward pausing in a way few game trailers do. But there's a spectrum here, running from 'real detail' at one end to 'full conspiracy' at the other, and it's worth knowing where you are on it.",
      "At the grounded end, the finds are simply gorgeous world-building. A weather system visibly shifting mid-shot, NPCs following what look like daily routines, reflections rendering the world back at itself, signage for businesses that dress the streets of Vice City — these are real things visible in official footage, and they tell you a lot about the density Rockstar is aiming for. There's little to argue about; you can see them.",
      "The trouble starts one step up, when a visible detail gets promoted into a gameplay claim. A spotted storefront becomes 'a confirmed purchasable business.' An NPC behaviour becomes 'proof of a living-world reputation system.' A vehicle in the background becomes 'a confirmed drivable model with these stats.' That leap — from 'I can see it' to 'it therefore works like this' — is where observation quietly turns into speculation, and it's the single most common way trailer breakdowns mislead well-meaning viewers.",
      "Then there's the deep end: the fringe convinced Rockstar has buried coded messages in the trailers. You'll find posts insisting a specific frame hides a release date, that a background billboard is an encoded clue, or that reversing a snippet of trailer audio reveals a secret — full alternate-reality-game energy. It's a genuinely fun rabbit hole, and pattern-spotting is half the joy of a hype cycle this long, so we're not here to spoil it.",
      "But honesty matters: Rockstar has never confirmed an official GTA VI alternate-reality game, and the overwhelming majority of these 'discoveries' are pareidolia — the human brain's habit of finding signals in noise. A blurry shape becomes a face; a random arrangement of pixels becomes a date; a bit of reverb becomes a whispered word. When Rockstar genuinely hides something, its track record shows it usually wants players to find it, and it doesn't require frame-stepping and audio reversal to surface.",
      "So how do you enjoy all this without getting fooled? Keep one simple filter in mind: separate what is visible from what it supposedly means. 'This sign appears in the trailer' is an observation. 'Therefore you can buy that shop' is a theory. 'This frame contains a secret coded message' is, almost always, entertainment. All three can be fun to follow — they just deserve very different levels of trust.",
      "If you'd rather watch the actual footage and judge the details yourself, both official trailers are embedded in order on our trailers page, and our confirmed write-up of what the two trailers established sticks strictly to what Rockstar has shown. Everything on this page, by contrast, is the community's interpretation — the good, the plausible and the gloriously far-fetched.",
    ],
    source: {
      title: "Trailer 2 frame-by-frame breakdown threads",
      publisher: "GTAForums",
      url: "https://gtaforums.com/forum/401-grand-theft-auto-vi/",
      kind: "Forum",
    },
    moreLinks: [
      {
        title: "Theory & 'hidden clue' threads on r/GTA6",
        publisher: "Reddit — r/GTA6",
        url: "https://www.reddit.com/r/GTA6/",
        kind: "Subreddit",
      },
    ],
    related: [
      { href: "/trailers", label: "Watch the official GTA VI trailers" },
      { href: "/news/trailer-2-released", label: "Both GTA VI trailers, explained" },
    ],
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
      "Grand Theft Auto VI has already moved twice — from a broad 2025 window to May 26, 2026, and then to its current date of November 19, 2026. After two slips, a chunk of the community has understandably braced for a third, treating every quiet week as a possible warning sign. So is a third delay actually likely? Here's the case each side is making, and why only one date genuinely counts.",
      "The pessimists' argument is mostly pattern-based, and it's not unreasonable. Rockstar has now missed two targets for this game, and its two most recent epics — Grand Theft Auto V and Red Dead Redemption 2 — were both themselves delayed before release. When a studio has a track record of pushing dates in pursuit of polish, betting on another push is, historically, not a bad bet. Add the sheer scale of what the trailers promise, and it's easy to see why some fans keep one eyebrow raised.",
      "The optimists, though, have had the stronger evidence lately, and it's concrete rather than vibes. Trade reporting through mid-2026 indicated no new delay and a marketing campaign on track to ramp through the summer — the kind of spend studios don't commit to a date they expect to move. More tellingly, the business machinery has already engaged: pre-orders opened on June 25, 2026, the Vintage Vice City Pack bonus is tied to ordering before November 20, and a preload date is set for November 12. Publishers rarely open pre-orders, promise dated bonuses and schedule preloads for a date they intend to abandon.",
      "There's also the nature of a Rockstar delay to consider. For many studios, a slip signals trouble; for Rockstar, it has historically signalled the opposite — a willingness to hold a game back until it meets an unusually high bar, then ship to acclaim. Red Dead Redemption 2 moved twice and arrived as one of the best-reviewed games of its generation. If GTA VI did slip again, the lesson of the studio's past is that it would probably still be worth the wait, not a sign the project is faltering.",
      "But here's the part that matters most, and it cuts through the entire debate: none of the third-delay talk is sourced to Rockstar. Every 'my insider says it's slipping' post is rumour until the studio says otherwise, and the internet's appetite for confident predictions vastly outruns anyone's actual knowledge. Treating a viral claim as news is exactly how bad information spreads through a fandom this size.",
      "So our take for this hub is simple. The only date that matters is the official one: Thursday, November 19, 2026, on PlayStation 5 and Xbox Series X|S. Speculating about a third delay is a fine way to pass the wait, and we'll happily host that conversation here — but we keep the factual timeline, and any real change to it, on our release-date page, where nothing goes live until Rockstar confirms it.",
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
      "If you want to plug into the GTA VI conversation rather than just read about it, the good news is that you don't need to be everywhere — a small number of destinations do most of the heavy lifting. New arrivals often burn a lot of energy chasing scattered posts across a dozen sites; in reality, two or three hubs will keep you caught up on nearly everything that matters. Here's the lay of the land.",
      "The r/GTA6 subreddit is the fast-moving town square, and for most people it's the single best place to start. It's where trailers get reacted to in real time, where memes and fan art live alongside genuine analysis, and where release-date anxiety, theory threads and news links all collide in one feed. Its strength — speed and volume — is also its weakness: the signal-to-noise ratio swings wildly, and a heavily upvoted post is a measure of popularity, not accuracy.",
      "GTAForums is the older, slower, more thorough counterpart. It's where the frame-by-frame detail threads, years-deep lore analysis and meticulous mapping projects tend to live, written by people who've followed the series for decades. If Reddit is the town square, GTAForums is the library — quieter, denser, and far more likely to have a 40-page thread that already answers your question. Between the two, you'll catch nearly every notable fan discovery and debate worth knowing about.",
      "It's worth knowing the supporting cast too. Discord servers host the most real-time chatter but are the hardest to search after the fact. YouTube is where trailer breakdowns and video essays reach the widest audience — great for production value, though thumbnails and titles reward hype over precision. And for anything factual, Rockstar's own website and Newswire remain the only primary source; everything else, however well-informed, is a fan interpreting them.",
      "Our one piece of advice for using any of these spaces: treat them as the idea factory, not the record of truth. Communities are brilliant at surfacing details, generating theories and building excitement, and terrible at distinguishing a confirmed fact from a confident guess — that's not a criticism, it's just what open discussion is. When something big 'breaks' in a thread, enjoy it, then cross-check it against our news section, which only tracks confirmed Rockstar information. Hype is best enjoyed with one foot on the ground.",
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
      "The price hype also spawned the viral 'launch week contract' meme.",
    ],
    body: [
      "When pre-orders opened on June 25, 2026, the price tags did as much talking as the game. The $99.99 Ultimate Edition, sitting above the $79.99 Standard, became a lightning rod — and outlets from Kotaku to Collider chronicled the fallout as fans debated whether GTA VI is effectively a $100 game. It's the loudest money argument the fandom has had, and it's worth separating the real grievance from the noise.",
      "The headline number is really two numbers. At $79.99, the Standard Edition follows the industry's broader move toward a higher baseline for flagship releases — the same price point other major publishers have pushed toward. That, on its own, drew grumbles but little genuine outrage; it's roughly what a marquee 2026 game costs. The heat is almost entirely about the $99.99 tier above it and what Rockstar chose to attach to it.",
      "That's where the sharpest complaint lives: the Ultimate Edition doesn't just add cosmetics, it locks away exclusive in-game businesses, vehicles, weapons and mods that Standard buyers can't access at all. Critics argue that gating actual gameplay content — not just a skin or two — behind a $20 upcharge crosses a line from 'deluxe edition' into 'pay more or play less.' Defenders counter that the extras are bonus content on top of a complete game, and that no one is forced to buy up. Both readings are defensible, which is exactly why the argument has legs.",
      "A second sore point compounds the first: the boxed 'physical' Standard copy contains a download code rather than a game disc, and the Ultimate Edition is digital only. For collectors and for anyone in regions with slow or capped internet, a box with no disc feels like the worst of both worlds — none of the convenience of digital, none of the permanence of physical. In a launch this big, that detail landed harder than it might have for a smaller game.",
      "It hasn't been all anger, though, and this is where the fandom's sense of humour kicks in. In a very GTA twist, some players gamed the system right back — quietly stockpiling Microsoft Rewards points across the game's long delays and effectively pre-ordering the Ultimate Edition for free. Turning a monetization gripe into a life-hack flex is peak Grand Theft Auto community energy, and those threads have been some of the most-shared of the whole pre-order period.",
      "The price frenzy also bled into pure comedy. The most-shared non-news GTA VI post of the summer wasn't about editions at all — it was a tongue-in-cheek 'launch week contract,' a mock agreement fans jokingly presented to partners and roommates to survive the November 19 release window. Its clauses are the joke: no walking in front of the TV mid-mission, no non-essential requests during a heist, chores deferred to whenever the game is paused, and a general amnesty for launch fortnight. It's not official and it won't hold up in court, but it captures the mood perfectly — three years of waiting distilled into a meme.",
      "Underneath the jokes and the outrage, the debate is really about value, and value is subjective — which is why we keep it here in the community section rather than presenting a verdict as fact. If you'd rather skip the argument and just see exactly what each edition includes, the pre-order bonus, and the physical-versus-digital details, our editions and price guide lays out the confirmed information with no editorializing.",
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
      {
        title: "GTA 6 launch-week contract goes viral ahead of its November 2026 release",
        publisher: "Softonic",
        url: "https://en.softonic.com/articles/gta-6-launch-week-contract-goes-viral-ahead-of-its-november-2026-release",
        kind: "Article",
      },
      HUB_REDDIT,
    ],
    related: [
      { href: "/editions", label: "GTA VI editions & price: Standard vs Ultimate" },
      { href: "/news/platforms-and-editions", label: "GTA VI platforms & editions: the confirmed facts" },
    ],
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
