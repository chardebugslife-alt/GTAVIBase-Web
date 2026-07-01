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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close whenever the route changes (a link was tapped).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to close + prevent background scroll while the panel is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10"
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
          className="absolute inset-x-0 top-full border-b border-white/10 bg-background/95 backdrop-blur-md"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4">
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
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-white/5 ${
                        active ? "text-foreground" : "text-muted"
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
              className="mt-3 block rounded-full bg-gradient-to-r from-pink to-orange px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Get the facts
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
