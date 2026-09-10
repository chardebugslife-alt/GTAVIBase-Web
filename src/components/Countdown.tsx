"use client";

import { useSyncExternalStore } from "react";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function diff(target: number, nowMs: number): Remaining {
  const ms = target - nowMs;
  if (ms <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: false,
  };
}

/** Subscribe to a 1s tick. Used as the external store for the countdown so we
 *  never call setState inside an effect. */
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/**
 * Live countdown to the release date. Backed by useSyncExternalStore so the
 * clock stays in sync with the system time and hydrates cleanly: the server
 * (and the first client render) emit a "--" placeholder, then the real time
 * ticks in on the client.
 */
export function Countdown({ target, label }: { target: string; label: string }) {
  const targetMs = new Date(target).getTime();

  // Snapshot is current whole-second epoch; 0 marks "not yet mounted on client"
  // so the server and first hydration render agree.
  const nowSec = useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / 1000),
    () => 0,
  );

  const mounted = nowSec !== 0;
  const time = diff(targetMs, nowSec * 1000);

  if (mounted && time.done) {
    return (
      <p className="text-3xl font-semibold tracking-[-0.03em] text-accent">
        {label} — out now
      </p>
    );
  }

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    // A single hairline grid: the 1px gap over a line-coloured ground draws the
    // rules between cells without any per-cell borders.
    <div
      aria-label={`Countdown to ${label}`}
      className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4"
    >
      {units.map((u) => (
        <div key={u.label} className="bg-background pb-6 pt-1">
          <div
            className="text-[clamp(38px,5.4vw,58px)] font-semibold leading-none tracking-[-0.04em] tabular-nums"
            suppressHydrationWarning
          >
            {mounted ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <div className="eyebrow-sm mt-3 text-muted">{u.label}</div>
        </div>
      ))}
    </div>
  );
}
