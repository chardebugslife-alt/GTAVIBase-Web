/**
 * Reading-time estimate, derived from the article's own prose rather than
 * stored per-post — so it can never drift out of sync with an edited body.
 * 220 wpm is the usual mid-range figure for adult non-fiction reading.
 */
const WORDS_PER_MINUTE = 220;

export function readingTime(paragraphs: readonly string[]): string {
  const words = paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
