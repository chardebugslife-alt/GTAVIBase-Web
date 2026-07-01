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
    return <p className="font-display text-2xl gradient-text">{label} — out now</p>;
  }

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <div aria-label={`Countdown to ${label}`} className="flex flex-wrap gap-3">
      {units.map((u) => (
        <div
          key={u.label}
          className="min-w-[78px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
        >
          <div
            className="font-display text-3xl tabular-nums gradient-text"
            suppressHydrationWarning
          >
            {mounted ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-xs uppercase tracking-wider text-muted">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
