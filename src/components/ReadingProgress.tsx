"use client";

import { useEffect, useState } from "react";

/**
 * The 2px accent rule pinned above the header that fills as the page scrolls.
 * Purely decorative, so it's hidden from assistive tech and sits out of the
 * layout entirely.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.5"
    >
      <div
        className="h-0.5 bg-accent"
        style={{ width: `${(progress * 100).toFixed(2)}%` }}
      />
    </div>
  );
}
