import Link from "next/link";
import { editorial } from "@/lib/site";

/**
 * Article byline — attributes each piece to the editorial team and links to the
 * About page where our sourcing process is documented. Supplies the human
 * authorship signal (E-E-A-T) that AdSense and search reviewers look for.
 */
export function Byline({
  date,
  dateLabel,
  updatedLabel,
}: {
  /** Machine-readable publish date, e.g. "2025-11-06". */
  date?: string;
  /** Human label, e.g. "November 6, 2025". */
  dateLabel?: string;
  updatedLabel?: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
      <span className="text-foreground/90">
        By{" "}
        <Link href="/about" className="font-semibold text-pink hover:underline">
          {editorial.author}
        </Link>
      </span>
      {dateLabel && (
        <>
          <span aria-hidden className="text-muted/50">
            ·
          </span>
          <span>
            {updatedLabel ? "Updated " : "Published "}
            <time dateTime={date}>{dateLabel}</time>
          </span>
        </>
      )}
      <span aria-hidden className="text-muted/50">
        ·
      </span>
      <span className="text-muted/80">Verified against official sources</span>
    </div>
  );
}
