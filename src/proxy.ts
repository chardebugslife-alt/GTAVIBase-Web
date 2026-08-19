import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Canonicalises the apex domain onto www — with one deliberate exception.
 *
 * Why this exists: AdSense only accepts `gtavibase.com` (no www) as the site
 * URL, and its crawler therefore fetches `gtavibase.com/ads.txt`. That request
 * previously hit Vercel's domain-level "redirect to www" rule and returned a
 * 308 before the app ever ran, so the file was never served on the domain
 * AdSense checks. Serving `/ads.txt` directly on the apex removes the redirect
 * from that path entirely.
 *
 * IMPORTANT: this file only runs if the apex is configured in Vercel as a
 * normal domain pointing at this project. While the dashboard-level redirect is
 * in place, Vercel answers at the edge and the app is never invoked — see the
 * `config.matcher` note below and the deployment steps in the PR/commit.
 */

/** The bare domain AdSense is registered against. */
const APEX_HOST = "gtavibase.com";
/** Where every other apex request should land. */
const CANONICAL_HOST = "www.gtavibase.com";

export function proxy(request: NextRequest) {
  // Match on the exact apex only. Anything else — www, *.vercel.app preview
  // deployments, localhost in dev — is left alone, so this can't hijack local
  // development or preview URLs.
  if (request.headers.get("host") !== APEX_HOST) return;

  const { pathname, search } = request.nextUrl;
  return NextResponse.redirect(
    new URL(`${pathname}${search}`, `https://${CANONICAL_HOST}`),
    308,
  );
}

export const config = {
  // Everything except `/ads.txt` (which must stay reachable on the apex) and
  // the build assets, which never need canonicalising.
  matcher: ["/((?!ads\\.txt|_next/static|_next/image).*)"],
};
