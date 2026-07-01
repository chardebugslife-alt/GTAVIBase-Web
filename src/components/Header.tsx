import Link from "next/link";
import { mainNav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
      >
        <Link href="/" className="group flex items-baseline gap-1.5">
          <span className="font-display text-2xl leading-none gradient-text">
            GTA&nbsp;VI
          </span>
          <span className="font-display text-2xl leading-none text-foreground/90">
            Base
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {mainNav.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/faq"
          className="rounded-full bg-gradient-to-r from-pink to-orange px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Get the facts
        </Link>
      </nav>
    </header>
  );
}
