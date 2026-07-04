import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AdBanner } from "@/components/AdUnit";
import { adsConfig, adsEnabled } from "@/lib/ads";
import { siteConfig, absoluteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Anton is a heavy condensed display face that evokes the bold GTA poster type.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — GTA VI Release Date, Map, Characters & News`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  category: "Gaming",
  // AdSense site-verification tag; only emitted once a publisher id is set.
  ...(adsEnabled
    ? { other: { "google-adsense-account": adsConfig.client } }
    : {}),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Everything about Grand Theft Auto VI`,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Everything about Grand Theft Auto VI`,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    site: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05030c",
  colorScheme: "dark",
};

function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": absoluteUrl("/#organization") },
      },
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.tagline,
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={siteJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-pink focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>

        {/* Unobtrusive site-wide banner above the footer. */}
        <div className="mx-auto w-full max-w-6xl px-5">
          <AdBanner className="mt-16" />
        </div>

        <Footer />
        <Analytics />
        <SpeedInsights />

        {/* Google Consent Mode v2 defaults — must run BEFORE the AdSense loader
            (guaranteed by beforeInteractive vs. the loader's lazyOnload). Every
            consent signal defaults to "denied", so AdSense serves only
            non-personalized, cookieless ads until a certified CMP updates
            consent. NOTE: this is the code-side foundation; a Google-certified
            CMP (configure "Privacy & messaging" in AdSense) is still required to
            actually collect EEA/UK consent and call gtag('consent','update'). */}
        {adsEnabled && (
          <Script id="google-consent-default" strategy="beforeInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`}
          </Script>
        )}

        {/* AdSense loader — injected only when a publisher id is configured. */}
        {adsEnabled && (
          <Script
            id="google-adsense"
            async
            strategy="lazyOnload"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.client}`}
          />
        )}
      </body>
    </html>
  );
}
