"use client";

import { useEffect, useRef } from "react";
import { adsConfig, adsEnabled } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdFormat = "auto" | "horizontal" | "vertical" | "fluid";

type AdUnitProps = {
  /** The AdSense ad-unit slot id. If empty, nothing renders. */
  slot: string;
  format?: AdFormat;
  /** In-article/in-feed layout key (only used with format="fluid"). */
  layout?: string;
  /** Let AdSense pick the size to fill the parent width. */
  responsive?: boolean;
  className?: string;
  /** Min height reserves space to avoid layout shift before the ad fills. */
  style?: React.CSSProperties;
};

/**
 * A single Google AdSense unit. Renders a labelled, theme-matched frame around
 * the AdSense <ins> tag. Returns null when ads are disabled or no slot is
 * configured, so pages stay clean until AdSense credentials are set.
 */
export function AdUnit({
  slot,
  format = "auto",
  layout,
  responsive = true,
  className = "",
  style,
}: AdUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!adsEnabled || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense throws if the script hasn't loaded yet or an ad blocker is
      // present; failing silently keeps the page fully functional.
    }
  }, [slot]);

  if (!adsEnabled || !slot) return null;

  return (
    <aside
      aria-label="Advertisement"
      className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${className}`}
    >
      <p className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted/70">
        Advertisement
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", ...style }}
        data-ad-client={adsConfig.client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </aside>
  );
}

/** Wide, responsive banner — good above the footer or between sections. */
export function AdBanner({ className = "" }: { className?: string }) {
  return (
    <AdUnit
      slot={adsConfig.slots.horizontal}
      format="horizontal"
      className={className}
      style={{ minHeight: 90 }}
    />
  );
}

/** Tall, sticky-friendly unit for the side rail on wide screens. */
export function AdSidebar({ className = "" }: { className?: string }) {
  return (
    <AdUnit
      slot={adsConfig.slots.sidebar}
      format="vertical"
      className={className}
      style={{ minHeight: 250 }}
    />
  );
}

/** Fluid in-article unit that blends into a content column. */
export function AdInArticle({ className = "" }: { className?: string }) {
  return (
    <AdUnit
      slot={adsConfig.slots.inArticle}
      format="fluid"
      layout="in-article"
      className={className}
    />
  );
}
