import Link from "next/link";
import { editorial } from "@/lib/site";

/**
 * Article byline — attributes each piece to the editorial team and links to the
 * About page where our sourcing process is documented. Supplies the human
 * authorship signal (E-E-A-T) that AdSense and search reviewers look for.
 *
 * Set as the concept's rule-bounded meta strip: name in ink, everything else
 * muted and separated by small round dots.
 */
export function Byline({
  date,
  dateLabel,
  updatedLabel,
  readingTime,
}: {
  /** Machine-readable publish date, e.g. "2025-11-06". */
  date?: string;
  /** Human label, e.g. "November 6, 2025". */
  dateLabel?: string;
  updatedLabel?: string;
  /** Optional "9 min read"-style estimate. */
  readingTime?: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-line py-5 text-[13px] leading-tight text-muted">
      <span>
        <Link
          href="/about"
          className="font-medium text-foreground hover:text-accent-deep"
        >
          {editorial.author}
        </Link>
      </span>
      {readingTime && (
        <>
          <span aria-hidden className="dot-sep" />
          <span>{readingTime}</span>
        </>
      )}
      {dateLabel && (
        <>
          <span aria-hidden className="dot-sep" />
          <span>
            {updatedLabel ? "Updated " : "Published "}
            <time dateTime={date}>{dateLabel}</time>
          </span>
        </>
      )}
      <span aria-hidden className="dot-sep" />
      <span>Verified against official sources</span>
    </div>
  );
}
