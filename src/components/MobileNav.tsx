"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/site";

/**
 * Mobile navigation: a hamburger toggle (hidden on md+) that opens a full-width
 * dropdown panel with every nav link plus the primary CTA. Closes on route
 * change, on Escape, and locks body scroll while open.
 */
export function MobileNav() {
  const pathname = usePathname();
  // The route the panel was opened on. It counts as open only while that is
  // still the current route, so tapping a link closes it as a consequence of
  // navigating rather than via an effect that re-renders after the fact.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;

  // Escape to close + prevent background scroll while the panel is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedAt(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenedAt(open ? null : pathname)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-foreground transition-colors hover:bg-surface"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          {open ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-background shadow-[0_12px_24px_-12px_rgba(11,11,11,0.18)]"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-[1120px] px-5 py-4 sm:px-7">
            <ul className="flex flex-col">
              {mainNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block border-b border-line-soft px-1 py-3.5 text-base font-medium transition-colors hover:bg-surface ${
                        active ? "text-accent-deep" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/faq"
              className="mt-5 block rounded-full bg-accent px-4 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-deep"
            >
              Get the facts
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
