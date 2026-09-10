import Link from "next/link";
import { mainNav } from "@/lib/site";
import { MobileNav } from "@/components/MobileNav";
import { NavLink } from "@/components/NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1120px] items-center gap-6 px-5 sm:px-7"
      >
        <Link href="/" className="flex shrink-0 items-baseline gap-1.5">
          <span className="text-[19px] font-semibold leading-none tracking-[-0.03em]">
            GTA&nbsp;VI
          </span>
          <span className="serif text-[19px] italic leading-none text-accent">
            Base
          </span>
        </Link>

        {/*
         * The concept shows a four-item nav; the site's information architecture
         * has nine top-level sections, each of which earns search traffic in its
         * own right. Rather than bury them behind a hub page, the row keeps every
         * link and tightens the gap, dropping to the mobile panel below lg.
         */}
        <ul className="hidden min-w-0 flex-1 items-center gap-5 lg:flex">
          {mainNav.slice(1).map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <Link
            href="/faq"
            className="hidden whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-[13px] font-medium leading-none text-white transition-colors hover:bg-accent-deep sm:inline-flex"
          >
            Get the facts
          </Link>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
