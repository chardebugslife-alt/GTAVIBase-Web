"use client";

/**
 * Reopens the consent message so a visitor can change or withdraw consent.
 *
 * GDPR requires withdrawing consent to be as easy as giving it, which in
 * practice means a permanent, always-reachable control — hence a footer entry
 * rather than something buried in the policy text.
 *
 * `googlefc.callbackQueue` is Google Funding Choices' documented entry point.
 * The callback is queued rather than invoked directly because the consent
 * library may not have finished loading when the visitor clicks; queued
 * callbacks run as soon as it is ready.
 */

type GoogleFundingChoices = {
  callbackQueue?: Array<() => void>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFundingChoices;
  }
}

export function PrivacySettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const fc = (window.googlefc = window.googlefc ?? {});
        fc.callbackQueue = fc.callbackQueue ?? [];
        fc.callbackQueue.push(() => fc.showRevocationMessage?.());
      }}
    >
      Privacy settings
    </button>
  );
}
