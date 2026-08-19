import type { ReactNode } from "react";
import Link from "next/link";
import { mainNav, siteConfig, gameFacts, socialLinks } from "@/lib/site";
import { cmpEnabled } from "@/lib/ads";
import { PrivacySettingsLink } from "@/components/PrivacySettingsLink";

/**
 * Brand glyphs as inline paths, drawn on a 24x24 viewBox and filled with
 * currentColor so they inherit the surrounding link colour. Inline rather than
 * an icon package: four icons don't justify a dependency, and this keeps them
 * out of the network waterfall.
 */
const socialIcons: Record<string, ReactNode> = {
  youtube: (
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.13 5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
  ),
  tiktok: (
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.1a5.66 5.66 0 0 0-.77-.05A5.68 5.68 0 1 0 15.54 15V8.99a7.34 7.34 0 0 0 4.28 1.37V7.28a4.28 4.28 0 0 1-3.22-1.46Z" />
  ),
  x: (
    <path d="M18.9 1.6h3.68l-8.04 9.19L24 22.4h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.6h7.59l5.24 6.93L18.9 1.6Zm-1.29 18.6h2.04L6.49 3.7H4.3l13.31 16.5Z" />
  ),
  website: (
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm7.94 7.2h-3.4a15.6 15.6 0 0 0-1.6-4.06A9.83 9.83 0 0 1 19.94 7.2ZM12 2.28c.85 1.23 1.5 2.8 1.93 4.92h-3.86C10.5 5.08 11.15 3.5 12 2.28ZM2.42 14.4A9.6 9.6 0 0 1 2.4 9.6h3.9a20.4 20.4 0 0 0 0 4.8h-3.9Zm.82 2.4h3.4c.36 1.5.9 2.87 1.6 4.06a9.83 9.83 0 0 1-5-4.06Zm3.4-9.6h-3.4a9.83 9.83 0 0 1 5-4.06A15.6 15.6 0 0 0 6.64 7.2ZM12 21.72c-.85-1.23-1.5-2.8-1.93-4.92h3.86c-.43 2.12-1.08 3.7-1.93 4.92Zm2.3-7.32h-4.6a18 18 0 0 1 0-4.8h4.6a18 18 0 0 1 0 4.8Zm.34 6.66c.7-1.19 1.24-2.55 1.6-4.06h3.4a9.83 9.83 0 0 1-5 4.06Zm2.06-6.66a20.4 20.4 0 0 0 0-4.8h3.9a9.6 9.6 0 0 1 0 4.8h-3.9Z" />
  ),
};

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

          <h2 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
            Follow
          </h2>
          <ul className="mt-3 flex flex-wrap items-center gap-2">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  // The site's own entry stays in-tab; only the off-site
                  // profiles open a new one.
                  rel={social.sameAs ? "noopener noreferrer me" : undefined}
                  target={social.sameAs ? "_blank" : undefined}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-[18px] w-[18px]"
                  >
                    {socialIcons[social.icon]}
                  </svg>
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.buymeacoffee.com/averagegamer"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="mt-5 inline-block transition-opacity hover:opacity-90"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- rendered by
                Buy Me a Coffee's own button image API; next/image would optimise
                a third-party asset we don't control. */}
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=averagegamer&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
              alt="Buy me a coffee"
              width={217}
              height={60}
              loading="lazy"
              className="h-10 w-auto"
            />
          </a>
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
            {/* Only shown once a consent message exists to reopen — otherwise
                the control would do nothing when clicked. */}
            {cmpEnabled && (
              <li>
                <PrivacySettingsLink className="text-foreground/80 transition-colors hover:text-foreground" />
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-6">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-muted">
          GTA VI Base is an unofficial fan site and is not affiliated with,
          endorsed by, or sponsored by Rockstar Games or Take-Two Interactive.
          &ldquo;Grand Theft Auto,&rdquo; &ldquo;GTA,&rdquo; &ldquo;Vice
          City&rdquo; and all related marks, logos and characters are trademarks
          of their respective owners. Promotional images, trailers and artwork
          are the copyright of Rockstar Games and are used here for the purpose
          of news reporting, commentary and identification under fair use, always
          credited to their owner. If you own material shown here and have a
          concern, please{" "}
          <Link href="/contact" className="text-foreground/80 hover:text-foreground">
            contact us
          </Link>
          . © {new Date().getFullYear()} {siteConfig.name}. All game content ©
          Rockstar Games.
        </p>
      </div>
    </footer>
  );
}
