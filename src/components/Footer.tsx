import Link from "next/link";
import { mainNav, siteConfig, gameFacts } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl">
            <span className="gradient-text">GTA&nbsp;VI</span> Base
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {siteConfig.tagline}. An independent, fan-run information hub.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Explore
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Quick facts
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li>Release: {gameFacts.releaseDateLabel}</li>
            <li>Developer: {gameFacts.developer}</li>
            <li>Setting: Vice City, Leonida</li>
            <li>PS5 &amp; Xbox Series X|S</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Official
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://www.rockstargames.com/VI"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                Rockstar Games
              </a>
            </li>
          </ul>

          <h2 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
            Site
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>

          <h2 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
            Legal
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/privacy"
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-6">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-muted">
          GTA VI Base is an unofficial fan site and is not affiliated with,
          endorsed by, or sponsored by Rockstar Games or Take-Two Interactive.
          &ldquo;Grand Theft Auto&rdquo; and all related marks are trademarks of
          their respective owners. © {new Date().getFullYear()} {siteConfig.name}.
        </p>
      </div>
    </footer>
  );
}
