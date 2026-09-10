import Link from "next/link";
import { mainNav, siteConfig, gameFacts, socialLinks } from "@/lib/site";
import { cmpEnabled } from "@/lib/ads";
import { PrivacySettingsLink } from "@/components/PrivacySettingsLink";

/** Off-site profiles only — the site's own URL is already the canonical one. */
const profiles = socialLinks.filter((social) => social.sameAs);

const footerLink =
  "text-foreground transition-colors hover:text-accent-deep";

function ColumnHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`eyebrow-sm text-faint ${className}`}>{children}</h2>;
}

export function Footer() {
  return (
    <footer className="mt-30 border-t border-foreground bg-background">
      <div className="mx-auto grid max-w-[1120px] gap-11 px-5 pb-18 pt-14 sm:grid-cols-2 sm:px-7 lg:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[19px] font-semibold leading-none tracking-[-0.03em]">
              GTA&nbsp;VI
            </span>
            <span className="serif text-[19px] italic leading-none text-accent">
              Base
            </span>
          </div>
          <p className="serif mt-4 max-w-[32ch] text-base leading-relaxed text-tertiary">
            {siteConfig.tagline}. Independent and fan-run.
          </p>

          <a
            href="https://www.buymeacoffee.com/averagegamer"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="mt-6 inline-block transition-opacity hover:opacity-90"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- rendered by
                Buy Me a Coffee's own button image API; next/image would optimise
                a third-party asset we don't control. */}
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=averagegamer&button_colour=E6007E&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00"
              alt="Buy me a coffee"
              width={217}
              height={60}
              loading="lazy"
              className="h-10 w-auto"
            />
          </a>
        </div>

        <nav aria-label="Footer">
          <ColumnHeading>Explore</ColumnHeading>
          <ul className="mt-5 grid gap-3 text-[15px] leading-tight">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={footerLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnHeading>Quick facts</ColumnHeading>
          <ul className="mt-5 grid gap-3 text-[15px] leading-tight text-tertiary">
            <li>Release: {gameFacts.releaseDateLabel}</li>
            <li>Developer: {gameFacts.developer}</li>
            <li>Setting: Vice City, Leonida</li>
            <li>PS5 &amp; Xbox Series X|S</li>
          </ul>

          <ColumnHeading className="mt-8">Official</ColumnHeading>
          <ul className="mt-5 grid gap-3 text-[15px] leading-tight">
            <li>
              <a
                href="https://www.rockstargames.com/VI"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className={footerLink}
              >
                Rockstar Games
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ColumnHeading>Follow</ColumnHeading>
          <ul className="mt-5 grid gap-3 text-[15px] leading-tight">
            {profiles.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  // `me` ties these profiles to this site as one entity.
                  rel="noopener noreferrer me"
                  target="_blank"
                  className={footerLink}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <ColumnHeading className="mt-8">Site</ColumnHeading>
          <ul className="mt-5 grid gap-3 text-[15px] leading-tight">
            <li>
              <Link href="/about" className={footerLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={footerLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={footerLink}>
                Terms of Use
              </Link>
            </li>
            {/* Only shown once a consent message exists to reopen — otherwise
                the control would do nothing when clicked. */}
            {cmpEnabled && (
              <li>
                <PrivacySettingsLink className={footerLink} />
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-[1120px] px-5 py-7 text-[13px] leading-relaxed text-faint sm:px-7">
          GTA VI Base is an unofficial fan site and is not affiliated with,
          endorsed by, or sponsored by Rockstar Games or Take-Two Interactive.
          &ldquo;Grand Theft Auto,&rdquo; &ldquo;GTA,&rdquo; &ldquo;Vice
          City&rdquo; and all related marks, logos and characters are trademarks
          of their respective owners. Promotional images, trailers and artwork
          are the copyright of Rockstar Games and are used here for the purpose
          of news reporting, commentary and identification under fair use, always
          credited to their owner. If you own material shown here and have a
          concern, please{" "}
          <Link href="/contact" className="text-tertiary hover:text-accent-deep">
            contact us
          </Link>
          . © {new Date().getFullYear()} {siteConfig.name}. All game content ©
          Rockstar Games.
        </p>
      </div>
    </footer>
  );
}
