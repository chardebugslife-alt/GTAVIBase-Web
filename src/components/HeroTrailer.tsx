"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  youtubeId: string;
  title: string;
  releasedLabel: string;
  /** Official still shown as the poster before the video is loaded. */
  thumbnail: string;
  /** False for videos YouTube will only play on its own site. */
  embeddable?: boolean;
};

/**
 * Landing-page hero video as a lightweight "facade": we paint the official
 * still (an optimized, preloaded next/image — the LCP element) with a
 * play button, and only mount the ~1MB YouTube iframe when the user clicks.
 * This keeps the heavy player JS off the critical path so the page loads fast,
 * while still letting the trailer play with sound (the click is a user gesture,
 * so browsers allow unmuted autoplay).
 */
export function HeroTrailer({
  youtubeId,
  title,
  releasedLabel,
  thumbnail,
  embeddable = true,
}: Props) {
  const [playing, setPlaying] = useState(false);

  const src =
    `https://www.youtube-nocookie.com/embed/${youtubeId}` +
    `?autoplay=1&playsinline=1&rel=0&modestbranding=1`;
  const watchUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  // The poster is identical either way; only what the click does changes.
  const poster = (
    <>
      <Image
        src={thumbnail}
        alt={`${title} — official still`}
        fill
        preload
        sizes="(max-width: 768px) 100vw, 1152px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {/* Darkening + play affordance. */}
      <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <span className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:scale-110">
        <PlayIcon className="h-7 w-7 translate-x-0.5 text-white" />
      </span>
      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-[13px] font-medium text-foreground">
        {embeddable ? "Watch now" : "Watch on YouTube"}
      </span>
    </>
  );

  return (
    <figure className="mt-0">
      {/* Resolve the video hosts early so playback starts fast on click. */}
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://i.ytimg.com" />

      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {!embeddable ? (
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${title} on YouTube`}
            className="group absolute inset-0 block h-full w-full"
          >
            {poster}
          </a>
        ) : playing ? (
          <iframe
            className="h-full w-full"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            {poster}
          </button>
        )}
      </div>
      <figcaption className="serif mt-3.5 text-[13px] italic leading-normal text-muted">
        {title} ({releasedLabel}) — the latest official footage.{" "}
        {embeddable
          ? "Tap to play with sound."
          : "Age-restricted by YouTube, so it opens there."}{" "}
        © Rockstar Games
      </figcaption>
    </figure>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
