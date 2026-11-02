import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "gtavibase",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-01",
    compatibilityFlags: ["nodejs_compat"],
    domains: ["gtavibase.com", "www.gtavibase.com"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
    },
  }),
});
