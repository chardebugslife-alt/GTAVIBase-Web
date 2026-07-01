import { ImageResponse } from "next/og";
import { siteConfig, gameFacts } from "@/lib/site";

export const alt = "GTA VI Base — your information hub for Grand Theft Auto VI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default OG image used across the site. Built with the ImageResponse API so it
// renders at the edge without shipping a static asset.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(900px 500px at 85% 0%, rgba(255,45,139,0.45), transparent), radial-gradient(800px 600px at 0% 100%, rgba(24,224,214,0.30), transparent), #05030c",
          color: "#f4f1fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34 }}>
          <span style={{ color: "#ff2d8b", fontWeight: 800 }}>GTA&nbsp;VI</span>
          <span style={{ marginLeft: 10, color: "#f4f1fb" }}>Base</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Grand Theft Auto VI
          </div>
          <div style={{ marginTop: 20, fontSize: 36, color: "#b3a9cf", display: "flex" }}>
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#18e0d6" }}>
          Release {gameFacts.releaseDateLabel} · PS5 · Xbox Series X|S
        </div>
      </div>
    ),
    { ...size },
  );
}
