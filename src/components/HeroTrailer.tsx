"use client";

import { useRef, useState } from "react";

type Props = {
  youtubeId: string;
  title: string;
  releasedLabel: string;
};

/**
 * Landing-page hero trailer. Autoplays muted (browsers block unmuted autoplay)
 * and loops, with a custom overlay button that toggles sound via the YouTube
 * IFrame API. `enablejsapi=1` lets us postMessage mute/unMute commands to the
 * player; unmuting works because it happens on a user click.
 */
export function HeroTrailer({ youtubeId, title, releasedLabel }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  function command(func: "mute" | "unMute") {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
  }

  function toggleSound() {
    command(muted ? "unMute" : "mute");
    setMuted((m) => !m);
  }

  const src =
    `https://www.youtube-nocookie.com/embed/${youtubeId}` +
    `?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${youtubeId}` +
    `&rel=0&controls=1&enablejsapi=1`;

  return (
    <figure className="mt-10">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          ref={iframeRef}
          className="h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? "Unmute trailer" : "Mute trailer"}
          className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-pink/50 hover:bg-black/80"
        >
          {muted ? (
            <MutedIcon className="h-4 w-4" />
          ) : (
            <SoundIcon className="h-4 w-4" />
          )}
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
      <figcaption className="mt-3 text-xs text-muted">
        Latest trailer ({releasedLabel}) — starts muted; tap Unmute for sound. ©
        Rockstar Games
      </figcaption>
    </figure>
  );
}

function SoundIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a9 9 0 0 1 0 14" />
    </svg>
  );
}

function MutedIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="m23 9-6 6" />
      <path d="m17 9 6 6" />
    </svg>
  );
}
